<template>
  <div class="line-navbar" :style="{borderDirect: borderStyle}">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    props: {
      borderStyle: {
        type: String,
        default: '2px solid #C10D0C'
      },
      borderDirect: {
        type: String,
        default:'border-bottom'
      }
    },
    data() {
      return {

      }
    },
    components: {

    },
    methods: {

    },
  }
</script>

<style scoped lang="scss">
  .line-navbar {
    display: flex;
    border-bottom: 2px solid #C10D0C;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 10px;
  }
</style>
