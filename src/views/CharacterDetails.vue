<template>
  <div>
    <router-link to="/">Home</router-link> <br/>
    <card :character="character"/>
    <p>{{character.description}}</p>
    <p>HP: {{character.HP}}</p>
    <p>Spell points: {{character.spellpoints}}</p>
    <p>Attack: {{character.attack}}</p>
    <p>Defense: {{character.defense}}</p>
    <p>Speed: {{character.speed}}</p>
    <h2>Gallery</h2>
    <img v-for="i in parseInt(character.nbpictures)" :key=i :src="require(`../assets/gallery/${character.name.toLowerCase()}_gal_${i}.png`)" alt="">
  </div>
</template>

<script>
import Card from '../components/Card'

export default {
  name: "CharacterDetails",
  components: {
    Card
  },
  computed: {
    character() {
      return this.$route.params;
    }
  }
}
</script>