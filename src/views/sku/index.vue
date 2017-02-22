<template>
  <div class="dsa">
    <h1>{{ msg }}</h1>
    <router-link :to="{name: 'hello'}">
      前进hhhhhhhh
      前进hhhhhhhh
      前进hhhhhhhh
      前进hhhhhhhh
      前进hhhhhhhh
      前进hhhhhhhh
      前进hhhhhhhh
      前进hhhhhhhh
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    this.$store.dispatch('setData', 'getModelLibraryLists')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
