<template>
  <div class="effect">
    <h3 class="title">数字滚动</h3>
    <data-scroll :init-value="dataScrollNum" :show-change-btn="true"></data-scroll>
    <h3>倒计时</h3>
    <count-down></count-down>
    <h3>Canvas</h3>
    <reform></reform>
    <h3></h3>
  </div>
</template>

<script>
import dataScroll from '@/components/common/numScroll.vue'
import upload from '@/components/common/upload.vue'
import countDown from '@/components/common/countDown.vue'
import reform from '@/components/common/reform.vue'
export default {
  name: 'effect',
  components: { dataScroll, upload, reform, countDown },
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
