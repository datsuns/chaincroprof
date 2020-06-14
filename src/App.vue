<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ProfileCanvas
      :height="parseInt(height)"
      :width="parseInt(width)"
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
import HelloWorld    from './components/HelloWorld.vue'
import ProfileCanvas from './components/ProfileCanvas.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ProfileCanvas
  },
  data () {
    return {
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
