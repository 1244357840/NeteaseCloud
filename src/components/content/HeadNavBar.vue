<template>
  <div id="head-navbar">
    <div class="container">
      <div class="logo"></div>
      <div class="tabs">
        <div class="tabs-item" v-for="(item,index) in tabList" :key="index" @click="clickTab(item.path)" :class="{'tabs-item-color': getColor(item.path)}">
          <p>{{item.content}}</p>
        </div>
      </div>
      <div class="right-input" @keydown.enter="key">
        <el-input v-model="input" placeholder="搜索音乐" size="small" prefix-icon="el-icon-search" class="search-input"></el-input>
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
          path: '/discover'
        }, {
          content: '我的音乐',
          path: '/my'
        }, {
          content: '朋友',
          path: '/friend'
        }, {
          content: '商城',
          path: '/shopping'
        }, {
          content: '音乐人',
          path: '/musician'
        }, {
          content: '下载客户端',
          path: '/download'
        }],
        input: ''
      }
    },
    components: {},
    methods: {
      clickTab(p) {
        // this.isActive = index
        this.$router.push({
          path: p
        })
      },
      key() {
        // console.log(this.$route.path.indexOf('/search') == -1);
        if (this.$route.path.indexOf('/search') === -1) {
          // console.log('aaa');
          this.$router.push({
            path: '/search',
            query: {
              s: this.input
            }
          })
        } else {
          this.$bus.$emit('_changQuery', this.input)
          // this.$router.push({
          //   query: {
          //     s: this.input
          //   }
          // })
        }
      },
      getColor(path) {
        return this.$route.path.indexOf(path) != -1
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

      .right-input {
        display: flex;
        align-items: center;
        height: 100%;

      }
    }
  }
</style>
