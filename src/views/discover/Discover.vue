<template>
  <div id="discover">
    <discover-tab></discover-tab>
    <router-view></router-view>
  </div>
</template>

<script>
  import DiscoverTab from './childComps/DiscoverTab.vue'

  export default {
    name: 'Discover',
    props: {

    },
    data() {
      return {

      }
    },
    components: {
      DiscoverTab
    },
    methods: {

    },
  }
</script>

<style scoped>

</style>
