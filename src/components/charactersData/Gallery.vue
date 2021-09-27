<template>
  <div>
    <h2>Gallery</h2>
    <img v-for="i in parseInt(character.nbpictures)" :key=i :src="require(`/src/assets/gallery/${character.name.toLowerCase()}_gal_${i}.png`)" alt="">
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  props: {
    character: Object
  },
}
</script>

<style scoped>
img {
  border: solid blue 5px;
}
</style>