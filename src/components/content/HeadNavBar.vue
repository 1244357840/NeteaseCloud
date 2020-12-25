<template>
  <div id="head-navbar">
    <div class="container">
      <div class="logo"></div>
      <div class="tabs">
        <div class="tabs-item" v-for="(item,index) in tabList" :key="index" @click="clickTab(index)" :class="{'tabs-item-color':(isActive === index)}">
          <p>{{item.content}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Head',
    props: {

    },
    data() {
      return {
        activeName: 'discover',
        isActive: 0,
        tabList: [{
          content: '发现音乐',
          path: '/'
        }, {
          content: '我的音乐',
          path: '/'
        }, {
          content: '朋友',
          path: '/'
        }, {
          content: '商城',
          path: '/'
        }, {
          content: '音乐人',
          path: '/'
        }, {
          content: '下载客户端',
          path: '/'
        }]
      }
    },
    components: {

    },
    methods: {
      clickTab(index) {
        this.isActive = index
      }
    },
  }
</script>

<style scoped lang="scss">
  #head-navbar {
    height: 70px;
    background: #242424;

    .container {
      display: flex;
      margin: 0 auto;

      @include wh(1100px, 100%);
      .logo {
        @include wh(177px, 69px) background: url("~assets/img/topbar.png");
      }

      .tabs {
        font-size: 14px;
        display: flex;

        .tabs-item {
          height: 70px;

          &:hover {
            cursor: pointer;
            background-color: black;
          }

          p {
            padding: 0 19px;
            line-height: 70px;
            color: #999999;
          }
        }

        .tabs-item-color {
          overflow: hidden;
          position: relative;
          background-color: black;
          p {
            color: white;
          }

          &::before {
            content: '';
            @include triangleB(8px, red) position: absolute;
            bottom: -1px;
            left: 50%;
            margin-left: -8px;
          }
        }
      }
    }
  }
</style>
