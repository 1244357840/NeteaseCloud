<template>
  <div class="item">
    <div class="left-icon">
      <slot name="left-icon"></slot>
    </div>
    <div class="left-name">
      <slot name="left-name">歌名歌名歌名歌名歌名歌名歌名歌名歌名歌名歌名歌名歌名歌名歌名歌名歌名歌名歌名歌名歌名歌名歌名歌名歌名歌名歌名</slot>
    </div>
    <div class="center-btn">
      <slot name="center-btn">
        <music-pancel-icon></music-pancel-icon>
      </slot>
    </div>
    <div class="right-name">
      <slot name="right-name">歌手</slot>
    </div>
  </div>
</template>

<script>
  import MusicPancelIcon from './MusicPancelIcon.vue'

  export default {
    name: '',
    props: {
      info: {
        type: Object,
        default () {
          return {

          }
        }
      }
    },
    data() {
      return {

      }
    },
    components: {
      MusicPancelIcon
    },
    methods: {

    },
  }
</script>

<style scoped lang="scss">
  .item {
    width: 553px;
    height: 28px;
    background-color: #333;
    z-index: 99;
    color: white;
    display: flex;
    align-items: center;
    font-size: 12px;
    line-height: 12px;

    .left-icon {
      width: 30px;
    }

    .left-name {
      width: 256px;
      margin-right: 10px;
      height: 12px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .center-btn {
      margin-right: 10px;
    }

    .right-name {
      margin-left: 10px;
      height: 12px;
    }
  }
</style>
