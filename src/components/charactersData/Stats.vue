<template>
  <div>
    <p>{{character.description}}</p>
    <p>HP: {{character.HP}}</p>
    <p>Spell points: {{character.spellpoints}}</p>
    <p>Attack: {{character.attack}}</p>
    <p>Defense: {{character.defense}}</p>
    <p>Speed: {{character.speed}}</p>
  </div>
</template>

<script>
export default {
  name: 'Stats',
  props: {
    character: Object
  },
}
</script>