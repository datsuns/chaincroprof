<template>
  <div>
    <select @change="$emit('select', $event.target.value)">
      <option
        v-for="optionItem in optionList"
        :key="optionItem.name"
        :value="optionItem.img"
      >{{ optionItem.name }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'UserSelect',
  props: {
    labelText: String,
    optionList: Array
  }
}
</script>

<style scoped>
</style>
