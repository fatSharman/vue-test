<template>
  <div class="count-down">
    <span>距离2020年还有：</span>
    <span>{{countDown.day}} 天</span>
    <span>{{countDown.hour}} 时</span>
    <span>{{countDown.minute}} 分</span>
    <span>{{countDown.second}} 秒</span>
  </div>
</template>

<script>
export default {
  name: 'countDown',
  created () {
    this.timer = setInterval(() => {
      this.countTime()
    }, 1000)
  },
  beforeRouteLeave (to, from, next) {
    this.timer = null
    next()
  },
  data () {
    return {
      endDate: '2020-01-01 00:00:00',
      startDate: '',
      countDown: {
        day: '',
        hour: '',
        minute: '',
        second: ''
      },
      timer: ''
    }
  },
  methods: {
    countTime () {
      let now = this.$moment()
      let end = this.$moment(this.endDate)
      this.countDown.day = end.diff(now, 'day')
      this.countDown.hour = end.diff(now, 'hour') > 24 ? end.diff(now, 'hour') % 24 : end.diff(now, 'hour')
      this.countDown.minute = end.diff(now, 'minute') > 60 ? end.diff(now, 'minute') % 60 : end.diff(now, 'minute')
      this.countDown.second = end.diff(now, 'second') > 60 ? end.diff(now, 'second') % 60 : end.diff(now, 'second')
    }
  }
}
</script>

<style scoped lang="less">
.count-down{

}
</style>
