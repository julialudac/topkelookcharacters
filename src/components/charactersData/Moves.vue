<template>
  <div>
    <h2>Moves</h2>
    <table>
      <thead>
        <tr><th>Name</th><th>Damage</th><th>Cost</th></tr>
      </thead>
      <tbody>
        <tr v-for="(move, key) in moves" :key=key>
          <td>{{move.name}}</td>
          <td>{{move.damage}}</td>
          <td>{{move.cost}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Moves',
  props: {
    moves: Object
  },
}
</script>

<style scoped>
table {
  border-collapse: collapse;
  margin-left: auto;
  margin-right: auto;
}
td, th {
  border: 1px solid
}
</style>