<template>
  <div>
    <md-button
      class="md-raised md-primary"
      type="button"
      @click="onclick"
      >
      {{ labelText }}
    </md-button>
    <div hidden>
      {{ dataURL }}
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */
import Vue from 'vue'
import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)

export default {
  name: 'DownloadButton',
  props: {
    labelText: String,
    dataURL: String,
  },

  methods: {
    onclick () {
      let link = document.createElement('a')
      link.href = this.dataURL
      link.download = 'image.png'
      link.click()
    },
  }
}
</script>

<style scoped>
textarea {

