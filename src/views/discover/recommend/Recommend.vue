<template>
  <div class="recommend">
    <div class="swiper-bg">
    </div>
    <div class="container">
      <div class="swiper">
        <div class="swiper-left">
          <el-carousel :interval="5000" arrow="always">
            <el-carousel-item v-for="(item,index) in swiperList" :key="index">
              <img :src="item.img" alt="">
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="swiper-right">
          <div class="swiper-right-btn"></div>
        </div>
      </div>
      <div class="content">
        <div class="content-left">
          <hot-recommend class="hot-rec"></hot-recommend>
          <specific></specific>
        </div>
        <div class="content-right">
          <div class="user">
            <div class="user-p">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</div>
            <el-button type="danger" class="login-btn">用户登录</el-button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import HotRecommend from './childComps/HotRecommend.vue'
  import Specific from './childComps/Specific.vue'

  export default {
    name: '',
    props: {

    },
    data() {
      return {
        volumeValue: 0,
        swiperList: [{
          img: 'http://p1.music.126.net/bNRVKXTKNZhEFOaoL37vGw==/109951165561083134.jpg?imageView&quality=89',
          src: ''
        }, {
          img: 'http://p1.music.126.net/7WKOed6b8XnrbuTWQxRDTA==/109951165559896295.jpg?imageView&quality=89',
          src: ''
        }, {
          img: 'http://p1.music.126.net/69dBMpzdygEzARsEoneo1A==/109951165559910843.jpg?imageView&quality=89',
          src: ''
        }, {
          img: 'http://p1.music.126.net/WYMU2MXIJJRHZKjptN1onw==/109951165560952487.jpg?imageView&quality=89',
          src: ''
        }, {
          img: 'http://p1.music.126.net/6cCTcKK_j7oFUSCGzUWZhA==/109951165560365808.jpg?imageView&quality=89',
          src: ''
        }, ]
      }
    },
    components: {
      HotRecommend,
      Specific,
    },
    methods: {

    },
  }
</script>

<style scoped lang="scss">
  .recommend {
    background-color: #F5F5F5;
    position: relative;

    .swiper-bg {
      height: 285px;
      // background: url('http://p1.music.126.net/MIsJHiR1mpwi7ZO5UVPz9A==/109951165562782465.jpg?imageView&blur=40x20') no-repeat;
      background: url('http://p1.music.126.net/bNRVKXTKNZhEFOaoL37vGw==/109951165561083134.jpg?imageView&blur=40x20') no-repeat;
      background-size: 6000px;
      position: absolute;
      width: 100%;
      z-index: 1;
    }

    .container {
      width: 980px;
      position: relative;
      overflow: hidden;
      z-index: 2;
      margin: 0 auto;
      color: white;

      .swiper {
        height: 285px;
        width: 100%;
        display: flex;

        .swiper-left {
          width: 730px;

          img {
            width: 100%;
            height: auto;
          }
        }

        .swiper-right {
          width: 252px;
          height: 283.88px;
          background: url('https://music.163.com/style/web2/img/index/download.png?edf13567037914d64c836f847c7feb9a') no-repeat;
          background-size: 100% 355px;
          overflow: hidden;

          &:hover div {
            display: block;
          }

          div {
            display: none;
            width: 215px;
            height: 58px;
            background: url('https://music.163.com/style/web2/img/index/download.png?edf13567037914d64c836f847c7feb9a') no-repeat;
            background-size: 252px 352px;
            background-position: -19px -186px;
            margin-top: 188px;
            margin-left: 19px;
          }
        }
      }

      .content {
        width: 980px;
        height: 100%;
        display: flex;
        justify-content: space-between;

        .content-left {
          overflow: hidden;
          width: 690px;
          padding: 20px 20px 40px;

          .hot-rec {}
        }

        .content-right {
          width: 250px;

          .user {
            background: #E3E3E3;
            height: 126px;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            box-sizing: border-box;
            border: 1px white solid;
            box-shadow: 0px 3px 3px 0px #ccc;

            .user-p {
              width: 205px;
              margin: -10px auto 10px auto;
              color: #666666;
              font-size: 12px;
            }

            .login-btn {
              width: 100px;
              height: 31px;
              margin: 0 auto;
              margin-top: 10px;
            }
          }
        }
      }
    }
  }
</style>
