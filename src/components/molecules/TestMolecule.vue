<template>
  <!-- HTML部分-->
  <div>
    share molecules
    <test />
    <test />
  </div>
</template>

<script>
  import Test from '../atoms/TestAtom.vue'
  export default {
    //JavaScript(Vue.js)部分
    components: {
      Test,
    }
  }
</script>


<style scoped>
  /* CSS部分 */
</style>
