<template>
  <div id="app">
    <head-nav-bar></head-nav-bar>
    <router-view/>
    <play-bar></play-bar>
    <main-bar></main-bar>
  </div>
</template>

<script>
  import HeadNavBar from 'components/content/HeadNavBar.vue'
  import PlayBar from 'components/content/playBar/PlayBar.vue'
  import MainBar from 'components/content/MusicMainbar/MainBar.vue'

  export default {
    components: {
      HeadNavBar,
      PlayBar,
      MainBar
    }
  }
</script>

<style>
</style>
