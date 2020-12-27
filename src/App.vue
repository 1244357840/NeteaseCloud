<template>
  <div id="app">
    <head-nav-bar></head-nav-bar>
    <router-view/>
    <!-- :lyricData="getL" -->
    <main-bar :showBar="showMainBar"></main-bar>
    <play-bar @showBar="showMainBar = !showMainBar"></play-bar>
    <foot></foot>
  </div>
</template>

<script>
  import HeadNavBar from 'components/content/HeadNavBar.vue'
  import PlayBar from 'components/content/playBar/PlayBar.vue'
  import MainBar from 'components/content/MusicMainbar/MainBar.vue'
  import Foot from 'components/content/foot/Foot.vue'

  export default {
    components: {
      HeadNavBar,
      PlayBar,
      MainBar,
      Foot
    },
    data(){
      return {
        showMainBar: false
      }
    },
    computed: {
      getL() {
        console.log(this.$store.getters.getLyric);
        return this.$store.getters.getLyric
      }
    },
    methods: {

    }
  }
</script>

<style>
</style>
