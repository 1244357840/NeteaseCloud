<template>
  <div class="icons">
    <i class="icon1 all-playlist-bg"></i>
    <i class="icon2 all-playlist-bg"></i>
    <i class="icon3 all-playlist-bg"></i>
    <i class="icon4 all-playlist-bg"></i>
  </div>
</template>

<script>
  export default {
    name: '',
    props: {

    },
    data() {
      return {

      }
    },
    components: {

    },
    methods: {

    },
  }
</script>

<style scoped lang="scss">
  .icons {
    display: flex;
    width: 100px;
    i {
      display: block;
      margin-left: 10px;
      &:hover {
        cursor: pointer;
        background-position-y: -20px;
      }
    }
    .icon1 {
      width: 16px;
      height: 16px;
      background-position: -24px 0px;
    }

    .icon2 {
      width: 14px;
      height: 16px;
      background-position: 0 0px;
    }

    .icon3 {
      width: 14px;
      height: 16px;
      background-position: -57px -50px;
      &:hover {
        background-position-x: -80px;
        background-position-y: -50px;
      }
    }

    .icon4 {
      width: 13px;
      height: 16px;
      background-position: -51px 0;
    }
  }
</style>
