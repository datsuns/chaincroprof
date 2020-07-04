<template>
  <div>
  <md-content class="md-primary">{{ titleText }}</md-content>
  </div>
</template>

<script>
/* eslint-disable no-console */
export default {
  name: '',
  props: {
    titleText: String,
  },
}
</script>

<style scoped>
  .md-content {
    font-size:        25px;
    height:           50px;
    display:          flex;
    justify-content:  center;
    align-items:      center;
  }
</style>

