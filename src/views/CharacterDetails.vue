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
    <Gallery :character="character"/>
  </div>
</template>

<script>
import Card from '../components/Card'
import Gallery from '../components/charactersData/Gallery'

export default {
  name: "CharacterDetails",
  components: {
    Card,
    Gallery
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