<template>
  <div class="stat">
    <h1>{{label}}</h1>
    <img :src="require(`../../assets/sprites/${character.name.toLowerCase()}.png`)" alt="">
    <p>HP: {{character.HP}}</p>
    <p>Spellpoints: {{character.spellpoints}}</p>
  </div>
</template>

<script>
export default {
  name: 'currentStats',
  props: {
    character: Object,
    label: String,
  }
}
</script>

<style scoped>
.stat {
  display: inline-block;
  width: 30%;
}
</style>