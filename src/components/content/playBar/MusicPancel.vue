<template>
  <div class="music-pancel" v-if="musicList.length != 0">
    <div class="content">
      <music-pancel-item v-for="(item,index) in musicList" :key="index">
        <div class="left-icon" slot="left-icon">
          <i class="el-icon-caret-right"></i>
        </div>
        <div slot="left-name">
          {{item.name}}
        </div>
        <div class="right-name" slot="right-name">
          {{item.artistsname}}
        </div>
      </music-pancel-item>
    </div>
  </div>
</template>

<script>
  import MusicPancelItem from 'components/content/playBar/MusicListItem.vue'

  export default {
    name: '',
    props: {
      musicList: {
        type: Array,
        default () {
          return [{
            artistsname: "隔壁老樊",
            name: "我曾",
            picurl: "http://p3.music.126.net/gNbAlXamNjhR2j3aOukNhg==/109951164232796511.jpg"
          }]
        }
      },
      nowList: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        // musicList: [{
        //   artistsname: "隔壁老樊",
        //   name: "我曾",
        //   picurl: "http://p3.music.126.net/gNbAlXamNjhR2j3aOukNhg==/109951164232796511.jpg"
        // }]
      }
    },
    components: {
      MusicPancelItem,
    },
    methods: {

    }
  }
</script>

<style scoped lang="scss">
  .music-pancel {
    overflow: hidden;
    height: 196px;
    display: flex;
    flex-direction: column;

    .content {
      height: 100%;
      overflow-y: scroll;
      &::-webkit-scrollbar {
        background: black;
        width: 6px;
        border-radius: 30px;
      }

      &::-webkit-scrollbar-thumb {
        background: #868686;
        border-radius: 30px;
      }

      &::-webkit-scrollbar-button {
        height: 0;
      }

      .left-icon {
        font-size: 18px;
        color: red;
      }
    }
  }
</style>
