<template>
  <div>
    <input
      :id="labelText"
      :type="inputType"
      :value="value"
      @input="$emit('input', $event.target.value)"
      @change="$emit('change', $event.target.checked)"
    >
  </div>
</template>

<script>
export default {
  name: 'UserInput',
  props: {
    labelText: String,
    inputType: String,
    value: [String, Number, Boolean]
  }
}
</script>

<style scoped>
input {
  height: 25px;
}
</style>

