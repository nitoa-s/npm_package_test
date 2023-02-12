<template>
  <div>
    <v-icon @click="handleClickMenuButton()">mdi-magnify</v-icon>
    <div class="menu-contents">bbbbccccbbbbddd</div>
  </div>
</template>

<script lang="js">
export default {
  name: 'TestGloNav',
  methods: {
    handleClickMenuButton() {
      console.log('aaaaa')
    }
  }
}
</script>

<style scoped>
.menu-contents {
  background-color: white;
  height: 30px;
  width: 200px;
}
</style>
