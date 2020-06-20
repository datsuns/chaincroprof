<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <InputArea>
      <template v-slot:leftArea>
        <label for="UserName">User Name</label>
      </template>
      <template v-slot:rightArea>
        <UserInput
          labelText="UserName"
          inputType="text"
          :value="UserName"
          @input="UserName = $event"
        />
      </template>
    </InputArea>
    <ProfileCanvas
      :height="1080"
      :width="2380"
      :foregroundColor="foregroundColor"
      :backgroundColor="backgroundColor"
      :text="text"
      :size="parseInt(size)"
      :font="font"
      :baseline="baseline"
      :angle="parseInt(angle)"
      :isTransparent="isTransparent"
      :baseImage="baseImage"
      :checkImage="checkImage"
      :profileImage="profileImage"
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
      baseImage: baseProfileImage,
    }
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
