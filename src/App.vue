<template>
  <div id="app">
    <InputArea>
      <template v-slot:leftArea>
        <label for="backgroundImage">ベース画像</label>
      </template>
      <template v-slot:rightArea>
        <UserSelect
          labelText="backgroundImage"
          :optionList = "baseImages"
          @select="updateBaseImage($event)"
        />
      </template>
    </InputArea>
    <InputArea>
      <template v-slot:leftArea>
        <label for="userName">名前</label>
      </template>
      <template v-slot:rightArea>
        <UserInput
          labelText="userName"
          inputType="text"
          :value="userName"
          @input="userName = $event"
        />
      </template>
    </InputArea>
    <InputArea>
      <template v-slot:leftArea>
        <label for="friendID">フレンドID</label>
      </template>
      <template v-slot:rightArea>
        <UserInput
          labelText="friendID"
          inputType="text"
          :value="friendID"
          @input="friendID = $event"
        />
      </template>
    </InputArea>
    <InputArea>
      <template v-slot:leftArea>
        <label for="charactorName">キャラクタ</label>
      </template>
      <template v-slot:rightArea>
        <UserInput
          labelText="charactorName"
          inputType="text"
          :value="charactorName"
          @input="charactorName = $event"
        />
      </template>
    </InputArea>
    <InputArea>
      <template v-slot:leftArea>
        <label for="messageText">メッセージ</label>
      </template>
      <template v-slot:rightArea>
        <UserInputMulti
          labelText="messageText"
          :value="messageText"
          @input="messageText = $event"
        />
      </template>
    </InputArea>
    <Upload
      v-on:updated="updateProfileImage($event)"
    />
    <button v-on:click="userPhotoStartX += 10">→</button>
    <button v-on:click="userPhotoStartX -= 10">←</button>
    <button v-on:click="userPhotoStartY += 10">↓</button>
    <button v-on:click="userPhotoStartY -= 10">↑</button>
    <br>
    <DownloadButton
      :labelText="dlButtonLabel"
      :dataURL="dataURL"
    />
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
  </div>
</template>

<script>
import Vue from 'vue'
import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)

import ProfileCanvas  from './components/ProfileCanvas.vue'
import UserInput      from './components/UserInput.vue'
import UserInputMulti from './components/UserInputMultiLine.vue'
import UserSelect     from './components/UserSelect.vue'
import InputArea      from './components/InputArea.vue'
import Upload         from './components/Upload.vue'
import DownloadButton from './components/DownloadButton.vue'

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
    UserInput,
    UserInputMulti,
    UserSelect,
    Upload,
    DownloadButton,
  },
  data () {
    return {
      fontSize:        30,
      userPhotoStartX: 45,
      userPhotoStartY: 45,
      textFont:        'courier new',
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


a{
    color: #ffffff;
    background-color: #4349e2;
    width: 200px;
    text-align: center;
    padding: 0px;
    margin: 0 auto;
    margin-top: 50px;
}

</style>
