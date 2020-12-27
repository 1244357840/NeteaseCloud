<template>
  <div class="play-bar">
    <div class="play-bg all-playbar-bg">
      <div class="play-bg2 all-playbar-bg">
        <a href="javascript:;" v-show="isLock" class="all-playbar-bg lock" @click="isLock = false"></a>
        <a href="javascript:;" v-show="!isLock" class="all-playbar-bg unlock" @click="isLock = true"></a>
      </div>
    </div>
    <div class="container">
      <div class="left-btn">
        <div class="prev all-playbar-bg all-hover-cursor" @click="prevMusic()"></div>
        <div class="play all-playbar-bg all-hover-cursor" @click.stop="playMusic()" v-show="!isPlay"></div>
        <div class="pause all-playbar-bg all-hover-cursor" @click.stop="pauseMusic()" v-show="isPlay"></div>
        <div class="next all-playbar-bg all-hover-cursor" @click.stop.prevent="nextMusic()"></div>
      </div>

      <div class="center">
        <div class="mask all-hover-cursor">
          <img :src="musicInfo.picurl" alt="">
        </div>
        <div class="center-line" @click.stop.prevent="clickLine">
          <div class="star-info">
            <div class="star-info-music" v-show="musicInfo && musicInfo.name">{{musicInfo.name}}</div>
            <div class="star-info-name" v-show="musicInfo && musicInfo.artistsname">{{musicInfo.artistsname}}</div>
          </div>
          <div class="progress" ref="progress">
            <div class="progress-line" ref="line"></div>
            <div class="cur" ref="cur" @mousedown.stop.prevent="downCur">
              <div></div>
            </div>
          </div>
        </div>
      </div>

      <div class="right-btn">
        <div class="volume all-playbar-bg">
          <a href="javascript:;" class="all-playbar-bg" title="" @click="isShowVolume = !isShowVolume"></a>
          <div class="volume-control all-playbar-bg" v-show="isShowVolume">
            <div class="block lines">
              <el-slider v-model="volumeValue" vertical :show-tooltip="false" height="115px" :input="setVolume()">
              </el-slider>
            </div>
          </div>
        </div>
        <div class="loop">
          <a href="javascript:;" class="all-playbar-bg" title="循环"></a>
        </div>
        <div class="panel">
          <a href="javascript:;" class="all-playbar-bg" title="播放列表" @click="showBar">
            <div class="panel-number">{{allMusic.length}}</div>
          </a>
        </div>
      </div>

    </div>
    <audio :src="musicInfo.url" ref="music" @playing="musicPlaying()" @pause="musicPause()"></audio>
  </div>
</template>

<script>
  import {
    getRandom
  } from 'network/random.js'
  import {
    mapState,
    mapMutations
  } from 'vuex'

  import {
    getLyric,
    getId
  } from 'network/info.js'
  import urlHead from 'network/head.js'

  export default {
    name: '',
    props: {

    },
    data() {
      return {
        startX: 0,
        endX: 0,
        moveX: 0,
        elLeft: 0,
        lineWidth: 0,
        lineChildWidth: 0,
        isCanMove: false,
        deviation: 6,
        lineMoveTimer: null,
        isPlay: false,
        musicLength: 0,
        musicTimer: 0,
        documentEvent: {},
        musicInfo: {},
        allMusic: [],
        nowList: -1,
        musicLoad: false,
        isLock: false,
        volumeValue: 50,
        isShowVolume: false,
        scrollTimer: null,
        gid: 0
      }
    },
    components: {

    },
    methods: {
      ...mapMutations(['addList','changeLyric']),
      downCur(e) {
        this.isCanMove = true
        this.startX = this.moveX = e.clientX
        this.elLeft = this.$refs.cur.offsetLeft
      },
      moveCur(e) {
        if (!this.isCanMove) return;
        if (this.lineMoveTimer) clearInterval(this.lineMoveTimer)
        this.moveX = e.clientX
        this.endX = this.elLeft + this.moveX - this.startX
        if (this.endX >= 0 && this.endX <= this.lineWidth - this.deviation) {
          this.$refs.cur.style.left = this.endX + 'px'
          this.$refs.line.style.width = (this.endX + this.deviation) + 'px'
        }
      },
      upCur(e) {
        if (!this.isCanMove) return;
        this.setMusicLength()
        setTimeout(() => {
          this.isCanMove = false
        }, 10)
      },
      setVolume() {
        this.musicLoad && (this.$refs.music.volume = (this.volumeValue / 100))
      },
      nextMusic() {
        if (this.nowList >= this.allMusic.length - 1) {
          this.getMusic()
        } else {
          this.musicInfo = this.allMusic[++this.nowList]
          this.$bus.$emit('_changeLyric', this.allMusic[this.nowList].lyric)
        }
        this.playMusic()
      },
      prevMusic() {
        if (this.nowList === 0 && this.allMusic.length !== 1) {
          this.nowList = this.allMusic.length - 1
          this.musicInfo = this.allMusic[this.nowList]
          this.$bus.$emit('_changeLyric', this.allMusic[this.nowList].lyric)
        } else if (this.nowList != 0) {
          this.musicInfo = this.allMusic[--this.nowList]
          this.$bus.$emit('_changeLyric', this.allMusic[this.nowList].lyric)
        }
        this.playMusic()
      },
      setTimer() {
        if (this.lineMoveTimer) clearInterval(this.lineMoveTimer)
        this.lineMoveTimer = setInterval(() => {
          this.musicTimer = this.$refs.music && this.$refs.music.currentTime
          this.$refs.line.style.width = (this.musicTimer / this.musicLength) * 100 + '%'
          this.$refs.cur.style.left = this.$refs.line.offsetWidth - this.deviation + 'px'
          if (((this.musicTimer / this.musicLength) * 100) >= 99.999) {
            this.pauseMusic()
          }
        }, 100)
      },
      clickLine(e) {
        console.log(e);
        if (this.isCanMove) return;
        this.$refs.line.style.width = e.offsetX + 'px'
        this.$refs.cur.style.left = this.$refs.line.offsetWidth - this.deviation + 'px'
        this.setMusicLength()
      },
      playMusic() {
        this.isPlay = true
        if (this.musicLoad) {
          this.$refs.music.play()
          this.musicLength = this.$refs.music.duration
          this.musicTimer = this.$refs.music.currentTime
          this.setTimer()
        }
      },
      pauseMusic() {
        if (this.lineMoveTimer) clearInterval(this.lineMoveTimer)
        this.$refs.music.pause()
        this.isPlay = false
      },
      setMusicLength() {
        this.lineChildWidth = this.$refs.line.offsetWidth
        console.log(this.lineChildWidth);
        this.musicLength = this.$refs.music.duration
        this.playMusic()
        this.$refs.music.currentTime = (this.lineChildWidth / this.lineWidth) * (this.musicLength);
      },
      getMusic() {
        this.musicLoad = false
        getRandom('热歌榜', 'json').then((data) => {
          this.musicInfo = data.data
          let i = (this.allMusic.push(this.musicInfo)) - 1
          this.allMusic[i].listShow = true
          this.addList(this.allMusic[i])

          this.getId(this.musicInfo.name, i)

          if (this.allMusic.length >= 51) {
            this.allMusic.shift()
          }
          this.nowList++
        })
      },
      getId(name, index) {
        getId(name).then((data) => {
          this.gid = data.result.songs[0].id
          this.getLyric(this.gid, index)
        })
      },
      getLyric(id, index) {
        getLyric(id).then((data) => {
          this.$bus.$emit('_changeLyric', data.lrc.lyric)
          this.allMusic[index].lyric = data.lrc.lyric
        })
      },
      showBar() {
        this.$emit('showBar')
      },
      musicPlaying() {
        let that = this
        if (this.scrollTimer) clearInterval(this.scrollTimer)
        this.scrollTimer = setInterval(() => {
          that.$bus.$emit('_scrollLyric', that.$refs.music.currentTime)
        })
      },
      musicPause() {
        clearInterval(this.scrollTimer)
      },
      addListInfo(info) {
        console.log(info);
        let artistsname = info.artists[0].name
        let name = info.name
        let picurl = info.album.artist.img1v1Url || info.album.picUrl
        let id = info.id
        let url = urlHead + (info.id).toString()
        console.log(url);
        let i = this.allMusic.push({
          artistsname,
          name,
          picurl,
          url,
          id
        })
        this.getLyric(id, i - 1)
        this.musicInfo = this.allMusic[i-1]
        this.addList(this.musicInfo)
        if (this.allMusic.length >= 51) {
          this.allMusic.shift()
        }
        this.nowList++
        this.playMusic()
      }
    },
    mounted() {
      let that = this
      this.musicLength = this.$refs.music.duration
      this.lineWidth = this.$refs.progress.offsetWidth
      this.documentEvent.moveCur = this.moveCur
      this.documentEvent.upCur = this.upCur
      document.addEventListener('mousemove', function(e) {
        that.documentEvent.moveCur && that.documentEvent.moveCur(e)
      })
      document.addEventListener('mouseup', function(e) {
        that.documentEvent.upCur && that.documentEvent.upCur(e)
      })
      this.getMusic()
      this.$refs.music.oncanplay = () => {
        this.musicLoad = true
        this.isPlay && this.playMusic()
      }
      this.$bus.$on('addMusicList', (info) => {
        that.addListInfo(info)
      })
    }
  }
</script>

<style scoped lang="scss">
  .play-bar {
    height: 53px;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 99;

    .play-bg {
      width: 100%;
      height: 53px;
      position: absolute;
      background-position: 0 -15px;
      background-size: 100% 900px;
      background-repeat: repeat-x;
      // right: 67px;
      z-index: -1;

      .play-bg2 {
        width: 52px;
        height: 20px;
        position: absolute;
        top: -20px;
        right: 15px;
        background-position: 0 -380px;
        display: flex;
        justify-content: center;
        align-items: center;

        a {
          display: block;
          width: 18px;
          height: 18px;
          margin-top: 8px;
        }

        .lock {
          background-position: -100px -380px;

          &:hover {
            background-position: -100px -400px;
          }
        }

        .unlock {
          background-position: -80px -380px;

          &:hover {
            background-position: -80px -400px;
          }
        }
      }
    }

    .container {
      width: 982px;
      margin: 0 auto;
      height: 100%;
      display: flex;
      align-items: center;

      .left-btn {
        display: flex;
        align-items: center;
        margin-left: 30px;

        .prev {
          background-position: 0 -130px;
          width: 28px;
          height: 28px;
        }

        .play {
          background-position: 0 -204px;
          width: 36px;
          height: 36px;
          margin: 10px;
        }

        .pause {
          background-position: 0 -165px;
          width: 36px;
          height: 36px;
          margin: 10px;
        }

        .next {
          background-position: -80px -130px;
          width: 28px;
          height: 28px;
        }
      }

      .center {
        margin-left: 30px;
        display: flex;
        align-items: flex-end;

        .mask {
          width: 34px;
          height: 35px;
          margin-right: 20px;

          img {
            width: 100%;
            height: auto;
          }
        }

        .center-line {

          .star-info {
            display: flex;
            margin-left: 20px;
            margin-bottom: 5px;

            .star-info-music {
              font-size: 12px;
              color: #e8e8e8;
            }

            .star-info-name {
              margin-left: 20px;
              font-size: 10px;
              color: #9b9b9b;
            }
          }

          .progress {
            width: 493px;
            height: 9px;
            background-color: black;
            border-radius: 30px;
            margin-bottom: 5px;
            margin-left: 10px;
            position: relative;

            .progress-line {
              width: 0%;
              height: 100%;
              background-color: red;
              border-radius: 30px;
            }

            .cur {
              position: absolute;
              bottom: 0;
              margin-bottom: -7px;
              margin-left: -6px;
              width: 22px;
              height: 24px;
              background-color: #eee;
              border-radius: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
              z-index: 99999;

              >div {
                width: 50%;
                height: 50%;
                background-color: red;
                border-radius: 50%;
              }
            }
          }
        }
      }

      .right-btn {
        display: flex;
        align-items: center;
        margin-left: 60px;
        margin-top: 10px;
        position: relative;

        .volume {
          background-position: -2px -248px;
          width: 25px;
          height: 25px;

          a {
            background-position: -2px -248px;
            width: 25px;
            display: block;
            height: 25px;

            &:hover {
              background-position: -31px -248px;
            }
          }

          .volume-control {
            position: absolute;
            z-index: 99;
            margin-top: -204px;
            width: 30px;
            height: 160px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-position: 0 -640px;
            background-size: 152px 800px;

            .lines {
              margin-top: 10px;
            }
          }
        }

        .loop {
          width: 25px;
          height: 25px;
          margin: 0 10px;

          a {
            background-position: -3px -344px;
            width: 25px;
            display: block;
            height: 25px;

            &:hover {
              background-position: -33px -344px;
            }
          }
        }

        .panel {
          a {
            position: relative;
            background-position: -42px -68px;
            width: 58px;
            height: 25px;
            display: block;
            color: #666666;
            display: flex;
            font-size: 12px;
            display: flex;
            align-items: center;

            &:hover {
              background-position-y: -98px;
            }

            .panel-number {
              position: absolute;
              left: 55%;
            }
          }
        }
      }
    }
  }
</style>
