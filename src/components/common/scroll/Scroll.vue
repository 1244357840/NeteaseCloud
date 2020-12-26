<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: 'Scroll',
    props: {
      click: {
        type: Boolean,
        default: false
      },
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      },
      stopPropagation: {
        type: Boolean,
        default: true
      },
      bounce: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    components: {

    },
    methods: {
      scrollTo(x, y, time) {
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      refresh() {
        this.scroll && this.scroll.refresh && this.scroll.refresh()
      },
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp()
      },
    },
    mounted() {
      let wrapper = this.$refs.wrapper
      this.scroll = new BScroll(wrapper, {
        click: this.click,
        pullUpLoad: this.pullUpLoad,
        probeType: this.probeType,
        stopPropagation: this.stopPropagation,
        bounce: this.bounce
      })
      if (this.probeType == 2 || this.probeType == 3) {
        this.scroll.on('scroll', (position) => {
          this.$emit('scroll', position)
        })
      }
      if (this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          this.$emit('pullingUp')
        })
      }
    }
  }
</script>

<style scoped>

</style>
