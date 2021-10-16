<template>
  <div>
    <header>
      <router-link to='/play'>Play!</router-link>
    </header>
    <h1>Topkelook characters</h1>
    <SearchBar @change="updateSearchCriterion"/>
    <router-link v-for="(character, index) of characters" :key="index" :to="`/character/${character.name}`" v-show="match(searchCriterion, character.name)">
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
      return this.$store.getters.getCharacters;
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
header {
  text-align: right;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>