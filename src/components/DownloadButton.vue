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

export default {
  name: 'DownloadButton',
  props: {
    labelText: String,
    dataURL: String,
  },

  methods: {
    onclick () {
      const link = document.createElement('a')
      link.href = this.dataURL
      link.download = 'image.png'
      link.click()
    },
  }
}
</script>

<style scoped>
.md-button, clean{
  max-width:   400px;
  height:      50px;
  font-size:   30px;
  color: #ffffff;
  background: #448aff;
}
</style>

