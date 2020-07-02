<template>
  <div>
    <textarea
      :id="labelText"
      :value="value"
      @input="$emit('input', $event.target.value)"
      @change="$emit('change', $event.target.checked)"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: 'UserInputMultiLine',
  props: {
    labelText: String,
    value: [String, Number, Boolean]
  }
}
</script>

<style scoped>
textarea {
  margin-top: 10px;
  border: 2px line;
  height: 100px;
}
</style>

