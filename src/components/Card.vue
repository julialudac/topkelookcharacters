<template>
  <div class="card">
    <img :src="require(`../assets/sprites/${character.name.toLowerCase()}.png`)" alt="">
    <p><strong>{{character.name}}</strong></p>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    character: Object
  },
}
</script>

<style scoped>
.card {
  display: inline-block;
  width: 200px;
  height: 200px;
}
</style>