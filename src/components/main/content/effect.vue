<template>
  <div class="effect">
    <h3 class="title">数字滚动</h3>
    <data-scroll :init-value="dataScrollNum" :show-change-btn="true"></data-scroll>
    <h3>倒计时</h3>
    <count-down></count-down>
    <h3>数据渐变</h3>
    <data-gradual></data-gradual>
    <h3>Canvas</h3>
    <reform></reform>
  </div>
</template>

<script>
import dataScroll from '@/components/common/numScroll.vue'
import upload from '@/components/common/upload.vue'
import countDown from '@/components/common/countDown.vue'
import reform from '@/components/common/reform.vue'
import dataGradual from '@/components/common/dataGradual.vue'
export default {
  name: 'effect',
  components: { dataScroll, upload, reform, countDown, dataGradual },
  data () {
    return {
      dataScrollNum: 20190903,
      number: ''
    }
  },
  created () {
    let nums = [1, 2, 1, 5, 6, 5, 6]
    let a = 0
    nums.reverse()
    nums.forEach(item => {
      a = a ^ item
    })
  },
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
