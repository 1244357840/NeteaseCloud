<template>
  <div class="main-bar" :class="{hidden:!showBar}">
    <music-pancel :musicList="getList"></music-pancel>
    <div class="lyric-container">
      <div class="lyric-content">
        <div class="lyric-line"></div>
        <div class="content" ref="content"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import MusicPancel from 'components/content/playBar/MusicPancel.vue'
  import lyric from 'assets/js/lyric.js'
  // import lyricData from 'network/test.js'

  export default {
    name: '',
    props: {
      showBar: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        lyricData: null,
        ly: null
      }
    },
    components: {
      MusicPancel,
    },
    methods: {

    },
    computed: {
      getList() {
        return this.$store.getters.getList
      },

    },
    mounted() {
      this.$bus.$on('_changeLyric',(lyricData) => {
        // console.log(lyricData);
        this.lyricData = lyricData
        this.ly = new lyric(this.lyricData,0,this.$refs.content,20)
        this.ly.initEL()
      })
      this.$bus.$on('_scrollLyric',(timer) => {
        timer = timer * 1000
        !!this.ly && this.ly.scrollLyric(timer)
      })
    }
  }
</script>

<style scoped lang="scss">

  .main-bar {
    background-color: black;
    height: 196px;
    bottom: 53px;
    position: fixed;
    z-index: 10;
    right: 200px;
    display: flex;

    .lyric-container {
      width: 500px;
      height: 196px;
      background-color: black;
      color: white;
      overflow: hidden;

      .lyric-content {
        height: 100%;
        width: 100%;
        text-align: center;
        position: relative;

        .lyric-line{
          position: absolute;
          width: 100%;
          height: 2px;
          background-color: red;
          top: 50%;
          margin-top: -1px;
        }

        .content {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 50%;
          div {
            height: 20px;
            font-size: 12px;
            line-height: 20px;
          }
        }
      }
    }
  }
  
  .hidden {
    bottom: -196px;
  }
</style>
