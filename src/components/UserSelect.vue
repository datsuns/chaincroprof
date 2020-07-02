<template>
  <div>
    <select @change="changedCallback($event.target.value)">
      <option
        v-for="optionItem in optionList"
        :key="optionItem.name"
        :value="optionItem.name"
      >{{ optionItem.name }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'UserSelect',
  props: {
    labelText: String,
    optionList: Array,
  },
  methods: {
    changedCallback: function(value){
      this.$emit('select', value)
    },

  },
}
</script>


<style scoped>
select {
  height: 25px;
}
</style>
