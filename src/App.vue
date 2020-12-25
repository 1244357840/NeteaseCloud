<template>
  <div id="app">
    <head-nav-bar></head-nav-bar>
    <router-view/>
    <play-bar></play-bar>
  </div>
</template>

<script>
  import HeadNavBar from 'components/content/HeadNavBar.vue'
  import PlayBar from 'components/content/playBar/PlayBar.vue'

  export default {
    components: {
      HeadNavBar,
      PlayBar
    }
  }
</script>

<style>
  #app {
    
  }
</style>
