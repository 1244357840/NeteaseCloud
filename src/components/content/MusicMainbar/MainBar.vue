<template>
  <div class="main-bar">
    <music-pancel :musicList="getList"></music-pancel>
  </div>
</template>

<script>
  import MusicPancel from 'components/content/playBar/MusicPancel.vue'

  export default {
    name: '',
    props: {

    },
    data() {
      return {

      }
    },
    components: {
      MusicPancel,
    },
    methods: {

    },
    computed: {
      getList() {
        return this.$store.getters.getList
      }
    }
  }
</script>

<style scoped>
  .main-bar {
    background-color: black;
    height: 196px;
    bottom: 53px;
    position: fixed;
    z-index: 999;
  }
</style>
