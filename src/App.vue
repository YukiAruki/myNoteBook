<template>
  <div id="app">
    <main-container>
      <router-view />
    </main-container>
  </div>
</template>

<script>
import MainContainer from '@/components/mainContainer.vue'

export default {
  name: "App",
  components: {
    MainContainer,
  },
};
</script>

<style>

</style>
