<template>
  <div>
    <router-link to="/">Home</router-link> <br/>
    <card :character="character"/>
    <Stats :character="character"/>
    <Moves :moves="character.moves"/>
    <Gallery :character="character"/>
  </div>
</template>

<script>
import Card from '../components/Card'
import Gallery from '../components/charactersData/Gallery'
import Stats from '../components/charactersData/Stats'
import Moves from '../components/charactersData/Moves'

export default {
  name: "CharacterDetails",
  components: {
    Card,
    Gallery,
    Stats,
    Moves
  },
  props: {
    name: String
  },
  computed: {
    character() {
      return this.$store.getters.getCharacters.find(c => c.name == this.name);
    }
  },
  
}
</script>