<template>
  <div class="box">
    <div class="list" v-for="(item,index) in list" :key="index" :class="{bg: ((index+1) % 2) == 0}" @mouseenter="iconIndex = index"
      @mouseleave="iconIndex = -1">
      <div class="left" @click="addList(index)">
        <i class="el-icon-video-play"></i>
        <div class="name">{{item.name}}</div>
      </div>
      <div class="center" :class="{showIcon:showIcon(index)}">
        <music-pancel-icon>
          <div slot="icon4">
            <a href="javascript:;" title="添加到播放列表">
              <i class="el-icon-plus"></i>
            </a>
          </div>
        </music-pancel-icon>
      </div>
      <div class="right">
        <div class="name">《{{item.artists[0].name}}》</div>
        <div class="album">{{item.album.name}}</div>
        <div class="timer">{{getDuration(item.duration)}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import MusicListItem from 'components/content/playBar/MusicListItem.vue'
  import MusicPancelIcon from 'components/content/playBar/MusicPancelIcon.vue'

  export default {
    name: '',
    props: {
      list: {
        type: Array,
        default () {
          return []
        }
      },
    },
    data() {
      return {
        iconIndex: -1
      }
    },
    components: {
      // MusicListItem
      MusicPancelIcon
    },
    computed: {

    },
    methods: {
      showIcon(index) {
        return this.iconIndex !== index
      },
      getDuration(dutation) {
        let d = (dutation / 1000)
        let minute = parseInt(d / 60)
        let second = Math.ceil(d - (minute * 60)) < 10 ? '0' + Math.ceil(d - (minute * 60)) : Math.ceil(d - (minute * 60))
        return `${minute}:${second}`
      },
      addList(index) {
        console.log(this.list[index]);
        this.$bus.$emit('addMusicList', this.list[index])
      }
    },
  }
</script>

<style scoped lang="scss">
  .box {
    width: 100%;
    overflow: hidden;

    .list {
      padding: 10px;
      display: flex;
      align-items: center;

      .left {
        display: flex;
        font-size: 12px;
        color: #0C73C2;
        width: 370px;
        &:hover {
          cursor: pointer;
          >.name {
            text-decoration: underline;
          }
        }

        .name {
          &:hover {
            text-decoration: underline;
          }
        }

        i {
          color: #CCCCCC;
          font-size: 18px;
          margin: 0 5px 0 10px;
          &:hover {
            color: red;
          }
        }
      }

      .center {
        margin-left: 20px;

        a {
          text-decoration: none;
        }
        .el-icon-plus {
          font-weight: 700;
          width: 13px;
          height: 16px;
          color: #9B9B9B;

          &:hover {
            color: #ccc;
          }
        }
      }

      .right {
        font-size: 12px;
        display: flex;
        color: #333333;
        justify-content: space-around;
        margin-left: 25px;

        .name {
          width: 130px;
          text-align: left;
        }

        .album {
          width: 150px;
          margin-left: 10px;
          color: #666666;
        }

        .timer {
          margin-left: 10px;
        }
      }
    }
  }

  .bg {
    background-color: #F7F7F7;
  }

  .showIcon {
    visibility: hidden;
  }
</style>
