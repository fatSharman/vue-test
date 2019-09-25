<template>
  <div class="effect">
    <h3 class="title">数字滚动</h3>
    <data-scroll :init-value="dataScrollNum" :show-change-btn="true"></data-scroll>
    <h3>无限滚动</h3>
    <div class="infinite-list-wrapper" style="overflow:auto">
      <ul
        class="list"
        v-infinite-scroll="load"
        :infinite-scroll-disabled="disabled">
        <li v-for="i in count" :key="i" class="list-item">{{ i }}</li>
      </ul>
      <p v-if="loading">加载中...</p>
      <p v-if="noMore">没有更多了</p>
    </div>
    <h3>倒计时</h3>
    <count-down></count-down>
    <h3>数据渐变</h3>
    <data-gradual></data-gradual>
    <h3>滑动验证</h3>
    <sliding-validation></sliding-validation>
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
import slidingValidation from '@/components/common/slidingValidation.vue'
export default {
  name: 'effect',
  components: { dataScroll, upload, reform, countDown, dataGradual, slidingValidation },
  data () {
    return {
      dataScrollNum: 20190903,
      number: '',
      count: 10,
      loading: false
    }
  },
  created () {
    let nums = [1, 2, 1, 5, 6, 5, 6]
    let a = 0
    nums.reverse()
    nums.forEach(item => {
      a = a ^ item
    })
    this.getData(this.check)
    console.log('data')
  },
  computed: {
    noMore () {
      return this.count >= 20
    },
    disabled () {
      return this.loading || this.noMore
    }
  },
  methods: {
    getData (callback) {
      let data = {
        name: 'jack',
        age: 25,
        height: '181cm'
      }
      if (data.age > 20) {
        return callback(data)
      }
    },
    check (data) {
      console.log(data)
    },
    load () {
      this.loading = true
      setTimeout(() => {
        this.count += 2
        this.loading = false
      }, 2000)
    }
  }
}
</script>

<style scoped lang="less">
.effect{
  background-color: #ffffff;
  margin: 10px;
  padding: 10px;
  .infinite-list-wrapper{
    height: 300px;
  }
}
</style>
