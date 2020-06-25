<template>
  <div id="app">
    <!--
    <img alt="Vue logo" src="./assets/logo.png">
    -->
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
      :height="905"
      :width="1487"
      :fontSize="parseInt(fontSize)"

      :textFont="textFont"
      :baseImage="baseImage"
      :userName="userName"
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
import InputArea     from './components/InputArea.vue'
import Upload        from './components/Upload'

import baseProfileImage from "./assets/base.png"

export default {
  name: 'App',
  components: {
    ProfileCanvas,
    InputArea,
    UserInput,
    Upload
  },
  data () {
    return {
      fontSize:     50,
      textFont:     'sans-serif',
      userName:     '',
      twitterName:  '',
      baseImage:    baseProfileImage,
      dataURL:      '',
      profileImage: null,
      checkBox1:    false
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
