<template>
  <div id="app">
    <head-nav-bar></head-nav-bar>
    <router-view/>
    <!-- :lyricData="getL" -->
    <main-bar v-show="showMainBar"></main-bar>
    <play-bar @showBar="showMainBar = !showMainBar"></play-bar>
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
    },
    data(){
      return {
        showMainBar: true
      }
    },
    computed: {
      getL() {
        console.log(this.$store.getters.getLyric);
        return this.$store.getters.getLyric
      }
    }
  }
</script>

<style>
</style>
