<template>
  <div>
    <router-link to='/'>Home</router-link>

    <!-- Characters selection -->
    <charactersSelection v-if="!battleStarted" @characters-are-selected="fillCharactersAndStartsBattle"/>

    <!-- Battle!!! -->
    <div v-if="battleStarted">
      <currentStats :character="playerCharacter" :label="'YOU'"/>
      <div class="board">
        <h1>VS</h1>
        <!-- I could also have used a form and submit button to group this -->
        <div v-show="!battleEnded">
          Your move: 
          <select name="playerMove" v-model="chosenMoveName">
            <option v-for="(move, index) of playerCharacter.moves" :key="index" :value="move.name">{{move.name}}</option>
          </select>
          <button @click="attack">Confirm</button>
        </div>
        <!-- Battle Story -->
        <div class='scroll' v-html="battleStory">
        </div>
      </div>
      <currentStats :character="opponentCharacter" :label="'OPPONENT'"/>
    </div>
  </div>
</template>

<script>
import CharactersSelection from "../components/CharactersSelection"
import CurrentStats from "../components/battleData/CurrentStats"

export default {
  name: "Play",
  props: {
  },
  components: {
    CharactersSelection,
    CurrentStats
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
      battleStory: "",
      chosenMoveName: "",
      battleEnded: false
    }
  },
  methods: {
    fillCharactersAndStartsBattle(selectedCharacters) {
      this.playerCharacter = selectedCharacters.playerCharacter;
      this.chosenMoveName = this.playerCharacter.moves[0].name;
      this.opponentCharacter = selectedCharacters.opponentCharacter;
      this.battleStarted = true;
    },
    attack() {   
      // player's turn
      const chosenMove = this.playerCharacter.moves.find(move => move.name === this.chosenMoveName);
      this.battleStory += `<strong>${this.playerCharacter.name}</strong> attacks <strong>${this.opponentCharacter.name}</strong> with <em>${chosenMove.name}</em>. `;
      this.battleStory += `${chosenMove.damage} point of damage. </br>`;
      this.opponentCharacter.HP -= chosenMove.damage;
      if (this.opponentCharacter.HP <= 0) {
        this.opponentCharacter.HP = 0;
        this.battleStory += '<strong>Player won</strong>!!! </br>'
        this.battleEnded = true;
      } else {
        // opponent's turn
        const opponentMove = this.opponentCharacter.moves[0];
        this.battleStory += `<strong>${this.opponentCharacter.name}</strong> attacks <strong>${this.playerCharacter.name}</strong> with <em>${opponentMove.name}</em>. `;
        this.battleStory += `${opponentMove.damage} point of damage. </br>`;
        this.playerCharacter.HP -= opponentMove.damage;
        if (this.playerCharacter.HP <= 0) {
          this.playerCharacter.HP = 0;
          this.battleStory += '<strong>Player lost</strong>!!! </br>'
          this.battleEnded = true;
        }
      } 
    }
  }
  
}
</script>

<style scoped>
.board {
  width: 40%;
  display: inline-block;
}

.scroll {
  border: 1px solid;
  height: 150px;
  overflow-y: auto;
}
</style>