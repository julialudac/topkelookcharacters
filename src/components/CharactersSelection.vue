<template>
  <div>
    <!-- 1/ Choose your character -->
    <div v-show="Object.entries(playerCharacter).length === 0">
      <p> Choose your character: </p>
      <select name="player" v-model="playerCharacterName">
        <option v-for="(character, index) of characters" :key="index" :value="character.name">{{character.name}}</option>
      </select>
    <button @click="selectCharacters">OK!</button>
    </div>
    <!-- 2/ Display player's character and enemy's character + OK-->
    <div v-show="Object.entries(playerCharacter).length > 0">
      <p>You have chosen {{playerCharacter.name}}. The opponent choses {{opponentCharacter.name}}. </p>
      <button @click="$emit('characters-are-selected', {playerCharacter, opponentCharacter})">Start Battle</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'charactersSelection',
  data() {
    return {
      playerCharacterName: this.$store.getters.getCharacters[0].name,
      playerCharacter: {},
      opponentCharacter: {}
    }
  },
  computed: {
    characters() {
      return this.$store.getters.getCharacters;
    }
  },
  methods: {
    selectCharacters() {
      let playerIndex = 0;
      const characters = this.$store.getters.getCharacters;
      for (let i in characters) {
        if (characters[i].name == this.playerCharacterName) {
          this.playerCharacter = {...characters[i]};
          playerIndex = i;
          break;
        }
      }
      this.opponentCharacter = {...characters[parseInt(playerIndex+1) % characters.length]};
    },
  }
}
</script>