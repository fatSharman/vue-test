<template>
  <div class="effect">
    <h3 class="title">数字滚动</h3>
    <data-scroll :init-value="dataScrollNum" :show-change-btn="true"></data-scroll>
  </div>
</template>

<script>
import dataScroll from '@/components/common/numScroll.vue'
export default {
  name: 'effect',
  components: { dataScroll },
  data () {
    return {
      dataScrollNum: 20190903
    }
  },
  created () {},
  methods: {}
}
</script>

<style scoped lang="less">
.effect{
  background-color: #ffffff;
  margin: 10px;
  padding: 10px;
}
</style>
