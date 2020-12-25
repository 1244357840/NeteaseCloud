<template>
  <div class="discover-tab">
    <div class="container">
      <div class="list-box">
        <div class="list-item" :class="{'list-item-s': (isActive === index)}" v-for="(item,index) in tabList" :key="index"
          @click="clickTab(index)">{{item.content}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isActive: 0,
        tabList: [{
          content: '推荐',
          path: '/'
        }, {
          content: '排行榜',
          path: '/toplist'
        }, {
          content: '歌单',
          path: '/playlist'
        }, {
          content: '主播电台',
          path: '/djradio'
        }, {
          content: '歌手',
          path: '/artist'
        }, {
          content: '新碟上架',
          path: '/album'
        }, ]
      }
    },
    methods: {
      clickTab(index) {
        this.isActive = index
      }
    }
  }
</script>

<style scoped lang="scss">
  .discover-tab {
    @include wh(100%, 34px);
    background-color: #C20C0C;

    .container {
      @extend .all-container;

      .list-box {
        padding-left: 180px;
        height: 34px;
        display: flex;
        align-items: center;

        .list-item {
          &:hover {
            cursor: pointer;
            background: #9B0909;
          }
          border-radius: 20px;
          font-size: 12px;
          line-height: 21px;
          padding: 0 13px;
          color: white;
          margin-left: 17px;
          margin-right: 17px;
        }

        .list-item-s {
          background: #9B0909;
        }
      }
    }
  }
</style>
