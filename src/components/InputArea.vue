<template>
  <div class="form-centered">
    <div class="cell left">
      <slot name="leftArea"></slot>
    </div>
    <div class="cell right">
      <slot name="rightArea"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputArea',
}
</script>

<style scoped>
.form-centered {
  display: flex;
}
.cell {
  flex: 1;
}
.left {
  text-align: right;
}
.right {
  text-align: left;
}
</style>

