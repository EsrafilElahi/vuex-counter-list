<template>
  <div class="container">
    <CounterSection />
    <hr />
    <FavNums />
  </div>
</template>

<script>
import CounterSection from './components/CounterSection.vue';
import FavNums from './components/FavNums.vue';

export default {
  name: 'App',
  components: { CounterSection, FavNums }

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

hr {
  margin: 2rem 0;
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
</style>
