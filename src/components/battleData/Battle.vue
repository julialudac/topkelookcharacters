<template>
  <div>
    <currentStats :character="playerCurrent" :label="'YOU'"/>
    <div class="board">
      <!-- I could also have used a form and submit button to group this -->
      <div v-show="!battleEnded">
        Your move: 
        <select name="playerMove" v-model="chosenMoveName">
          <option v-for="(move, index) of playerCurrent.moves" :key="index" :value="move.name">{{move.name}}</option>
        </select>
        <button @click="attacks">Confirm</button>
      </div>
      <div v-show="battleEnded">
        <img v-if="win" src="../../assets/battle/youWin.jpg" alt="winimage">
        <img v-else src="../../assets/battle/youLost.jpg" alt="lostimage">
      </div>
      <!-- Battle Story -->
      <div class='scroll' v-html="battleStory">
      </div>
    </div>
    <currentStats :character="opponentCurrent" :label="'OPPONENT'"/>
  </div>
</template>

<script>
import CurrentStats from "./CurrentStats"

export default {
  name: 'battle',
  props: {
    playerCharacter: Object, // character = the character itself without alteration
    opponentCharacter: Object,
  },
  components: {
    CurrentStats
  },
  created() {
    this.playerCurrent = {...this.playerCharacter};
    this.opponentCurrent = {...this.opponentCharacter};
  },
  data() {
    return {
      playerCurrent: {}, // current = with alteration from battle
      opponentCurrent: {},
      battleStory: "",
      chosenMoveName: this.playerCharacter.moves[0].name,
      battleEnded: false,
      win: false
    }
  },
  methods: {
    attack(attacker, defender, move, attackerIsPlayer) {
      this.battleStory += `<strong>${attacker.name}</strong> attacks <strong>${defender.name}</strong> with <em>${move.name}</em> `;
      this.battleStory += `inflicting ${move.damage} point${move.damage>1?"s":""} of damage. </br>`;
      defender.HP -= move.damage;
      if (defender.HP <= 0) {
        defender.HP = 0;
        if (attackerIsPlayer) {
          this.battleStory += '<strong>Player won</strong>!!! </br>'
          this.win = true;
        } else {
          this.battleStory += '<strong>Player lost</strong>!!! </br>'
        }
        this.battleEnded = true;
      }
    },
    attacks() {   
      const chosenMove = this.playerCurrent.moves.find(move => move.name === this.chosenMoveName);
      this.attack(this.playerCurrent, this.opponentCurrent, chosenMove, true);
      if (!this.battleEnded) {
        const opponentMove = this.opponentCurrent.moves[0];
        this.attack(this.opponentCurrent, this.playerCurrent, opponentMove, false);
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