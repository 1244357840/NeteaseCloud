<template>
  <div class="hot-recommend">
    <line-navbar class="line">
      <div slot="left" class="left-box">
        <i class="el-icon-s-help sline-left-icon"></i>
        <div class="left-t sline-left-t">热门推荐</div>
        <el-breadcrumb separator="|" class="hot-category">
          <el-breadcrumb-item>华语</el-breadcrumb-item>
          <el-breadcrumb-item>流行</el-breadcrumb-item>
          <el-breadcrumb-item>摇滚</el-breadcrumb-item>
          <el-breadcrumb-item>民谣</el-breadcrumb-item>
          <el-breadcrumb-item>电子</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div slot="right" class="right-box">
        <div><span>更多</span><i class="el-icon-right"></i></div>
      </div>
    </line-navbar>
    <div>
      <card :row="4"></card>
    </div>
  </div>
</template>

<script>
  import LineNavbar from 'components/common/navbarline/LineNavbar'
  import Card from 'components/content/card/Card'

  export default {
    name: '',
    props: {

    },
    data() {
      return {

      }
    },
    components: {
      LineNavbar,
      Card
    },
    methods: {

    },
  }
</script>

<style scoped lang="scss">
  .hot-recommend {
    color: black;

    .line {
      .left-box {
        display: flex;
        align-items: center;
        line-height: 20px;
        .hot-category {
          margin-left: 10px;
          margin-top: 4px;
          .el-breadcrumb__item {
            font-size: 12px;
            color: #666666;
          }
        }
      }
      .right-box {
        position: relative;
        font-size: 12px;
        >div {
          position: absolute;
          right: 10px;
          margin-top: 2px;
          display: flex;
          line-height: 12px;
          span {
            width: 24px;
            display: block;
          }
          i {
            font-weight: 700;
            margin-left: 2px;
          }
        }
      }
    }
  }
</style>
