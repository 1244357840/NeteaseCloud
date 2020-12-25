<template>
  <div>
    <line-navbar class="line">
      <div slot="left" class="line-left">
      <i class="el-icon-s-help sline-left-icon"></i>
      <div class="left-t sline-left-t">个性推荐</div>
      </div>
    </line-navbar>
    <div>
      <card :numbers="4"></card>
    </div>
  </div>
</template>

<script>
  import LineNavbar from 'components/common/navbarline/LineNavbar'
  import Card from 'components/content/card/Card'
  export default {
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

<style scoped>
  .line {
    margin-top: -10px;
  }
  .line-left {
    display: flex;
  }
</style>
