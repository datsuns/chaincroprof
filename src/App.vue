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
        <label for="checkBox1">チェックボックス</label>
      </template>
      <template v-slot:rightArea>
        <UserInput
          labelText="checkBox1"
          inputType="checkbox"
          :value="checkBox1"
          @change="checkBox1 = $event"
        />
      </template>
    </InputArea>
    <InputArea>
      <template v-slot:leftArea>
        <label for="twitterName">Twitterアカウント</label>
      </template>
      <template v-slot:rightArea>
        <UserInput
          labelText="twitterName"
          inputType="text"
          :value="twitterName"
          @input="twitterName = $event"
        />
      </template>
    </InputArea>
    <Upload
      v-on:updated="updateProfileImage($event)"
    />
    <a :href="dataURL" download="image.png">画像ダウンロード</a>
    <ProfileCanvas
      :height="650"
      :width="1075"
      :fontSize="parseInt(fontSize)"

      :textFont="textFont"
      :baseImage="baseImage"
      :userName="userName"
      :friendID="friendID"
      :twitterName="twitterName"
      :profileImage="profileImage"
      :checkBox1="checkBox1"
      v-on:updated="updateDataURL($event)"
    />
  </div>
</template>

<script>
import ProfileCanvas from './components/ProfileCanvas.vue'
import UserInput     from './components/UserInput.vue'
import UserSelect    from './components/UserSelect.vue'
import InputArea     from './components/InputArea.vue'
import Upload        from './components/Upload'

import baseProfileImage1 from "./assets/_images_common_card_01a.png"
import baseProfileImage2 from "./assets/_images_common_card_02a.png"
import baseProfileImage3 from "./assets/_images_common_card_03a.png"
import baseProfileImage4 from "./assets/_images_common_card_04a.png"
import baseProfileImage5 from "./assets/_images_common_card_05a.png"
import baseProfileImage6 from "./assets/_images_common_card_06a.png"

export default {
  name: 'App',
  components: {
    ProfileCanvas,
    InputArea,
    UserInput,
    UserSelect,
    Upload,
  },
  data () {
    return {
      fontSize:     50,
      textFont:     'sans-serif',
      userName:     '',
      friendID:     '',
      twitterName:  '',
      baseImage:    baseProfileImage1,
      dataURL:      '',
      profileImage: null,
      checkBox1:    false,
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
      console.log("updateProfileImage")
      this.profileImage = dataURL
    },
    updateBaseImage: function (img) {
      //this.$set(this, "baseImage", img)
      this.baseImage = img
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
</style>
