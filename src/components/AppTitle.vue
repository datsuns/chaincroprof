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
    color: #ffffff;
    background:       #448aff;
    font-size:        25px;
    height:           60px;
    display:          flex;
    justify-content:  center;
    align-items:      center;
  }
</style>

