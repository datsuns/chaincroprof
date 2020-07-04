<template>
  <div id="app">
    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons">

    <AppTitle :titleText="titleText" />

    <div class="viewport">
      <md-toolbar :md-elevation="1">
        <span class="md-title">にゅうりょく</span>
      </md-toolbar>

      <md-list class="md-double-line">
        <md-list-item>
          <InputArea>
            <template v-slot:leftArea>
              <label for="backgroundImage">背景画像</label>
            </template>
            <template v-slot:rightArea>
              <UserSelect
                labelText="backgroundImage"
                :optionList = "baseImages"
                @select="updateBaseImage($event)"
              />
            </template>
          </InputArea>
        </md-list-item>

        <md-list-item>
          <md-field>
            <label>名前</label>
            <md-input v-model="userName" placeholder="名前"></md-input>
          </md-field>
        </md-list-item>

        <md-list-item>
          <md-field>
            <label>フレンドID</label>
            <md-input v-model="friendID" placeholder="フレンドID"></md-input>
          </md-field>
        </md-list-item>

        <md-list-item>
          <md-field>
            <label>キャラクタ名</label>
            <md-input v-model="charactorName" placeholder="キャラクタ名"></md-input>
          </md-field>
        </md-list-item>

        <md-list-item>
          <md-field>
            <label>メッセージ</label>
            <md-textarea v-model="messageText" placeholder="メッセージ(３行まで)"></md-textarea>
          </md-field>
        </md-list-item>
      </md-list>
    </div>

    <div class="viewport">
      <md-toolbar :md-elevation="1">
        <span class="md-title">プレビュー</span>
      </md-toolbar>

      <md-list class="md-double-line">
        <ProfileCanvas
          :height="650"
          :width="1075"
          :userPhotoStartX="userPhotoStartX"
          :userPhotoStartY="userPhotoStartY"
          :fontSize="parseInt(fontSize)"

          :textFont="textFont"
          :baseImage="baseImage"
          :userName="userName"
          :friendID="friendID"
          :twitterName="twitterName"
          :charactorName="charactorName"
          :messageText="messageText"
          :profileImage="profileImage"
          v-on:updated="updateDataURL($event)"
        />

        <Upload
          v-on:updated="updateProfileImage($event)"
        />

        <md-card class="md-primary">
          <md-card-header>
            <div class="md-title">画像位置調整</div>
          </md-card-header>
          <md-card-content>
            <md-button class="md-raised" v-on:click="userPhotoStartX += 10">→</md-button>
            <md-button class="md-raised" v-on:click="userPhotoStartX -= 10">←</md-button>
            <md-button class="md-raised" v-on:click="userPhotoStartY += 10">↓</md-button>
            <md-button class="md-raised" v-on:click="userPhotoStartY -= 10">↑</md-button>
          </md-card-content>
        </md-card>

        <DownloadButton
          :labelText="dlButtonLabel"
          :dataURL="dataURL"
        />
      </md-list>
    </div>
    <div>
      <a href="https://github.com/chainchroprof/prof7th" target="_blank">source code(github)</a>
      <br>
      <a href="https://twitter.com/datsuns" target="_blank">by @datsuns</a>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import 'vue-material/dist/vue-material.min.css'

//import { MdButton, MdContent, MdTabs, MdIcon, MdDivider, MdToolbar, MdList } from 'vue-material/dist/components'
//import 'vue-material/dist/theme/default.css'
//
//Vue.use(MdButton)
//Vue.use(MdContent)
//Vue.use(MdTabs)
//Vue.use(MdIcon)
//Vue.use(MdDivider)
//Vue.use(MdToolbar)
//Vue.use(MdList)

import VueMaterial from 'vue-material'
Vue.use(VueMaterial)

import ProfileCanvas  from './components/ProfileCanvas.vue'
//import UserInput      from './components/UserInput.vue'
//import UserInputMulti from './components/UserInputMultiLine.vue'
import UserSelect     from './components/UserSelect.vue'
import InputArea      from './components/InputArea.vue'
import Upload         from './components/Upload.vue'
import DownloadButton from './components/DownloadButton.vue'
import AppTitle       from './components/AppTitle.vue'

import baseProfileImage1 from "./assets/images_common_card_01a.png"
import baseProfileImage2 from "./assets/images_common_card_02a.png"
import baseProfileImage3 from "./assets/images_common_card_03a.png"
import baseProfileImage4 from "./assets/images_common_card_04a.png"
import baseProfileImage5 from "./assets/images_common_card_05a.png"
import baseProfileImage6 from "./assets/images_common_card_06a.png"

export default {
  name: 'App',
  components: {
    ProfileCanvas,
    InputArea,
    //UserInput,
    //UserInputMulti,
    UserSelect,
    Upload,
    DownloadButton,
    AppTitle,
  },
  data () {
    return {
      titleText:       'チェンクロぷろふぃーる',
      textFont:        'Avenir',
      fontSize:        30,
      userPhotoStartX: 45,
      userPhotoStartY: 45,
      dlButtonLabel:   '画像ダウンロード',
      userName:        '',
      friendID:        '',
      twitterName:     '',
      charactorName:   '',
      messageText:     '',
      baseImage:       baseProfileImage1,
      dataURL:         '',
      profileImage:    null,
      checkBox1:       false,
      baseImages:[
        {
          name: 'ヘリオス',
           img: baseProfileImage1,
        },
        {
          name: 'アリーチェ',
           img: baseProfileImage2,
        },
        {
          name: 'エシャル',
           img: baseProfileImage3,
        },
        {
          name: 'セレステ',
           img: baseProfileImage4,
        },
        {
          name: 'アマツ',
           img: baseProfileImage5,
        },
        {
          name: 'つかむ',
           img: baseProfileImage6,
        },
      ],
    }
  },
  methods: {
    updateDataURL: function (dataURL) {
      this.dataURL = dataURL
    },
    updateProfileImage: function (dataURL) {
      console.log("updateProfileImage:" + dataURL)
      this.profileImage = dataURL
    },
    updateBaseImage: function (name) {
      let entry = this.baseImages.find(x => x.name === name)
      //this.$set(this, "baseImage", baseProfileImage6)
      console.log("updateBaseImage")
      this.baseImage = entry.img
    },
  },
}
</script>

<style >
  <link 
    rel="stylesheet"
    href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons"
  >

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size:   50px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
}

.md-body-1, body {
  font-size:   20px;
}

.md-button, clean{
  color: #ffffff;
  background: #0000ff;
}

.md-field, md-theme-default{
  background: #dddddd;
}

.viewport {
  width: 700px;
  max-width: 100%;
  display: inline-block;
  vertical-align: top;
  overflow: auto;
  border: 1px solid rgba(#000, .12);
}
</style>
