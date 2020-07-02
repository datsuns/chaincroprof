<template>
  <div>
    <button
      type="button"
      @click="onclick"
      >
      {{ labelText }}
    </button>
    <div hidden>
      {{ dataURL }}
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */

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

