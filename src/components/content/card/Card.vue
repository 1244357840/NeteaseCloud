<template>
  <div class="card" ref="card">
    <card-item v-for="item in numbers" :key="item" class="card-items"></card-item>
  </div>
</template>

<script>
  import CardItem from './CardItem.vue'
  export default {
    name: '',
    props: {
      row: {
        type: Number,
        default: 4
      },
      numbers: {
        type: Number,
        default: 8
      }
    },
    data() {
      return {
        cardW: 0,
        cardLeft: 0
      }
    },
    components: {
      CardItem
    },
    methods: {
      setLeft() {
        let w = this.$refs.card.offsetWidth
        let child = this.$refs.card.children
        this.cardW = child[0].offsetWidth
        this.cardLeft = (w - (this.cardW * this.row)) / (this.row - 1)
        // this.$refs.card.style.marginLeft = -this.cardLeft + 'px'
        child.forEach((item,index) => {
          if ((index) % 4 != 0) item.style.marginLeft = this.cardLeft + 'px'
        })
      }
    },
    mounted() {
      this.setLeft()
    }
  }
</script>

<style scoped lang="scss">
  .card {
    display: flex;
    flex-wrap: wrap;

    .card-items {
      margin-bottom: 50px;
    }
  }
</style>
