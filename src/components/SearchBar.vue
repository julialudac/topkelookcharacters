<template>
  <div>
    <input type="text" placeholder="Your search here..." v-model="criterion">
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      criterion: ""
    }
  },
  watch: {
    criterion: function(newVal) {
      this.$emit("changedCriterion", newVal);
    }
  }
}
</script>

<style scoped>
  input {
    width: 80%;
  }
</style>