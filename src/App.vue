<template>
  <div class="container">
    <CounterSection />
  </div>
</template>

<script>
import CounterSection from './components/CounterSection.vue';

export default {
  name: 'App',
  components: { CounterSection }

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
</style>
