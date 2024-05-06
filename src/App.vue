<template>
  <div class="container">
    <span>{{ this.$store.state.count }}</span>
    <button @click="handleInc">inc</button>
    <button @click="handleDec">dec</button>
  </div>
</template>

<script>

export default {
  name: 'App',

  methods: {
    handleInc() {
      this.$store.commit('increment')
    },

    handleDec() {
      this.$store.commit('decrement')
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html body #app {
  min-width: 100vw;
  min-height: 100vh;
  width: 100%;
  height: 100%;
}


.container {
  width: 100%;
  height: 100vh;
  padding: 5rem 0;
}

button {
  width: 5rem;
  margin: 1rem;
}
</style>
