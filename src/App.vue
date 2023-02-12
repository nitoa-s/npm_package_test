<template>
  <div id="app">
    <TestGloNav />
  </div>
</template>

<script>
import TestGloNav from './components/TestGloNav.vue'
export default {
  name: 'App',
  components: { TestGloNav },
}
</script>

<style scoped>
/*scopedとつけるとcssのスコープがコンポーネント単位になる。*/
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
