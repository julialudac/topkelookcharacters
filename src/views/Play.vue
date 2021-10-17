<template>
  <div>
    <router-link to='/'>Home</router-link>
    <charactersSelection v-if="!battleStarted" @characters-are-selected="fillCharactersAndStartsBattle"/>
    <battle v-if="battleStarted" :playerCharacter="playerCharacter" :opponentCharacter="opponentCharacter"/>
  </div>
</template>

<script>
import CharactersSelection from "../components/CharactersSelection"
import Battle from "../components/battleData/Battle"

export default {
  name: "Play",
  components: {
    CharactersSelection,
    Battle
  },
  computed: {
    characters() {
      return this.$store.getters.getCharacters;
    }
  },
  data() {
    return {
      playerCharacter: {},
      opponentCharacter: {},
      battleStarted: false,
    }
  },
  methods: {
    fillCharactersAndStartsBattle(selectedCharacters) {
      this.playerCharacter = selectedCharacters.playerCharacter;
      this.opponentCharacter = selectedCharacters.opponentCharacter;
      this.battleStarted = true;
    }
  }
  
}
</script>