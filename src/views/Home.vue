<template>
  <div>
    <h1>Topkelook characters</h1>
    <SearchBar @change="updateSearchCriterion"/>
    <router-link v-for="(character, index) of characters" :key="index" :to="{name: 'Character', params: character}" v-show="match(searchCriterion, character.name)">
      <card :character="character"/>
    </router-link>
  </div>
</template>

<script>
import Card from '../components/Card'
import SearchBar from '../components/SearchBar'

export default {
  name: 'App',
  data() {
    return {
      searchCriterion: ""
    }
  },
  computed: {
    characters() {
      const characters = [
        {
          name: 'Willian',
          description: 'Willian is a tramp living in a trash can. He is known to be useless and disposable.',
          HP: 50,
          spellpoints: 0,
          attack: 1,
          defense: 1,
          speed: 3,
          nbpictures: 3
        },
        {
          name: 'Poubellos',
          description: 'Poubellos is an ordinary trash can with thin arms and eyes.',
          HP: 100,
          spellpoints: 0,
          attack: 1,
          defense: 70,
          speed: 3,
          nbpictures: 0
        },
        {
          name: 'Spiderball',
          description: 'Spiderballs like to surprise their preys by lurking and observing them, eventually jumping on them like ninjas. Yuck!',
          HP: 5,
          spellpoints: 0,
          attack: 3,
          defense: 3,
          speed: 80,
          nbpictures: 0
        }
      ];
      return characters;
    }
  },
  components: {
    Card,
    SearchBar
  },
  methods: {
    match(criterion, name) {
      return name.toLowerCase().includes(criterion.toLowerCase());
    },
    updateSearchCriterion(newVal) {
      this.searchCriterion = newVal;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>