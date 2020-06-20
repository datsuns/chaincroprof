<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <InputArea>
      <template v-slot:leftArea>
        <label for="userName">User Name</label>
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
    <ProfileCanvas
      :height="905"
      :width="1487"
      :fontSize="parseInt(fontSize)"

      :textFont="textFont"
      :baseImage="baseImage"
      :userName="userName"
      v-on:updated="updateDataURL($event)"
    />
  </div>
</template>

<script>
import ProfileCanvas from './components/ProfileCanvas.vue'
import UserInput     from './components/UserInput.vue'
import InputArea     from './components/InputArea.vue'

import baseProfileImage from "./assets/base.png"

export default {
  name: 'App',
  components: {
    ProfileCanvas,
    InputArea,
    UserInput
  },
  data () {
    return {
      fontSize: 64,
      textFont: 'sans-serif',
      userName: 'user name',
      baseImage: baseProfileImage,
      dataURL: '',
    }
  },
  methods: {
    updateDataURL: function (dataURL) {
      this.dataURL = dataURL
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
