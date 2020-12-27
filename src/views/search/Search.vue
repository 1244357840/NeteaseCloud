<template>
  <div class="search-box">
    <div class="top" @keydown.enter="downEnter(input)">
      <el-input v-model="input" placeholder="请输入内容">
        <div slot="append" class="append"><i class="el-icon-search search-click" @click="downEnter(input)"></i></div>
      </el-input>
    </div>
    <div class="result-num">
      搜索“{{this.$route.query.s}}”，找到 {{result.length}} 首单曲
    </div>
    <search-pancel :list="result"></search-pancel>
  </div>
</template>

<script>
  import {getId} from 'network/info.js'
  import SearchPancel from './childComps/SearchPancel.vue'

  export default {
    name: '',
    props: {

    },
    data() {
      return {
        input: '',
        result: [],
        data: {}
      }
    },
    mounted() {
      let that = this
      this.search()
      this.$bus.$on('_changQuery',(q) => {
        that.downEnter(q)
      })
    },
    components: {
      SearchPancel
    },
    methods: {
      downEnter(s) {
        this.$router.push({
          query: {
            s
          }
        })
        this.search()
      },
      search() {
        getId(this.$route.query.s).then((data) => {
          this.data = data
          this.result = this.data.result.songs
        })
        this.input = this.$route.query.s
      }
    },
  }
</script>

<style scoped lang="scss">
  .search-box {
    width: 900px;
    height: 1008px;
    padding: 40px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

    .top {
      width: 420px;

      .append {
        .search-click {
          top: 0;
          left: 0;
          padding: 10px;
          position: absolute;
          font-size: 20px;
        }
      }
    }

    .result-num {
      width: 100%;
      font-size: 12px;
      color: #999999;
      margin-top: 28px;
      margin-bottom: 17px;

    }
  }
</style>
