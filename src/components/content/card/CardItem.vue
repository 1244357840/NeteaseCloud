<template>
  <div class="card-item-box" :style="{width: w,height: h}">
    <div class="top" :style="{height: w}">
      <img :src="obj.img" alt="">
      <div class="list" v-if="obj.countInfo.num && obj.countInfo.num != ''">
        <i class="el-icon-headset list-icon"></i>
        <div class="list-t">102万</div>
        <i class="el-icon-video-play list-icon2"></i>
      </div>
    </div>
    <div class="bottom">
      <i class="icons bottom-icons"></i>
      <div class="bottom-t">我的宇宙里为你藏有无数个温柔星球</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CardItem',
    props: {
      w: {
        type: String,
        default: '140px'
      },
      h: {
        type: String,
        default: '204px'
      },
      obj: {
        type: Object,
        default () {
          return {
            text: '我的宇宙里为你藏有无数个温柔星球',
            icon: '',
            img: `https://picsum.photos/140/140?random=${(Math.random() * 10)}`,
            countInfo: {
              num: '112万'
            }
          }
        }
      }
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
  .card-item-box {
    width: 100%;

    .top {
      width: 100%;
      position: relative;
      overflow: hidden;

      >img {
        width: 100%;
        height: 100%;
      }

      .list {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 27px;
        background: url('~assets/img/coverall.png') no-repeat;
        background-position: 0 -537px;
        display: flex;
        align-items: center;
        color: #ccc;
        font-size: 14px;

        .list-icon {
          font-size: 14px;
          margin-left: 10px;
        }

        .list-icon2 {
          font-size: 18px;
          position: absolute;
          right: 10px;
        }

        .list-t {
          margin-left: 5px;
        }
      }
    }

    .bottom {
      margin-top: 8px;
      // display: flex;
      font-size: 14px;

      .icons {
        width: 35px;
        height: 15px;
        // background-color: red;
        display: block;
        background: url('~assets/img/icon.png') no-repeat;
        background-position: -31px -658px;
        // position: absolute;
        float: left;
        margin-right: 5px;
        vertical-align: middle;
        margin-top: 1px;
      }
      .bottom-t {
        color: black;
      }
    }
  }
</style>
