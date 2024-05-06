<template>
  <div class="favNums-div">
    <div class="fav-nums">

      <div class="fav-nums-for">
        <div v-for="favNum in this.$store.state.favNums" :key="favNum">
          {{ favNum }}
        </div>
      </div>

    </div>

    <input v-model="inputVal" required />

    <button @click="handleAddFavNums">add</button>

  </div>
</template>

<script>
export default {
  name: "FavNums",

  data() {
    return {
      inputVal: ''
    }
  },

  methods: {
    handleAddFavNums() {
      this.$store.commit('setFavNums', this.inputVal)
      this.inputVal = ''
    }
  }
}
</script>

<style scoped>
.favNums-div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.fav-nums-for {
  display: flex;
  gap: 1rem;
}
</style>