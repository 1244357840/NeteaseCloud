<template>
  <div class="icons">
    <div @click="clickIcon1"><slot name="icon1"><i class="icon1 all-playlist-bg"></i></slot></div>
    <div @click="clickIcon2"><slot name="icon2"><i class="icon2 all-playlist-bg"></i></slot></div>
    <div @click="clickIcon3"><slot name="icon3"><i class="icon3 all-playlist-bg"></i></slot></div>
    <div @click="clickIcon4"><slot name="icon4"><i class="icon4 all-playlist-bg"></i></slot></div>
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
      clickIcon1() {
        this.$emit('clickIcon1')
      },
      clickIcon2() {
        this.$emit('clickIcon2')
      },
      clickIcon3() {
        this.$emit('clickIcon3')
      },
      clickIcon4() {
        this.$emit('clickIcon4')
      },
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
