<template>
  <div class="counter-div">
    <span>{{ this.$store.state.count }}</span>
    <div class="btn-div">
      <button @click="handleInc">inc</button>
      <button @click="handleDec">dec</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CounterSection",

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

<style scoped>
.counter-div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.btn-div {
  display: flex;
  gap: 2rem;
}

button {
  width: 5rem;
  margin: 1rem;
}
</style>