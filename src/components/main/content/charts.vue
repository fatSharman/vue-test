<template>
  <div class="charts">
    <h2>图表</h2>
    <div class="charts-box bar">
      <p>柱状图</p>
      <div id="chartBar"></div>
      <el-button @click="change" type="primary" size="mini">change</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'charts',
  data () {
    return {
      barData: [120, 200, 150, 80, 70, 110, 130],
      timer: null
    }
  },
  created () {},
  mounted () {
    this.drawBarChart()
  },
  methods: {
    drawBarChart () {
      let barChart = this.$echarts.init(document.getElementById('chartBar'))
      let data = this.barData
      barChart.setOption({
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: 80,
          top: 30,
          right: 30,
          bottom: 30
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value',
          max: 1000
        },
        series: [
          {
            data: data,
            type: 'bar'
          }
        ]
      })
    },
    changeData () {
      this.barData = this.barData.map((item, index) => {
        switch (index) {
          case 0:
            item > 894 ? console.log(0, item) : item += 10
            break
          case 1:
            item > 562 ? console.log(1, item) : item += 10
            break
          case 2:
            item > 985 ? console.log(2, item) : item += 10
            break
          case 3:
            item > 783 ? console.log(3, item) : item += 10
            break
          case 4:
            item > 846 ? console.log(4, item) : item += 10
            break
          case 5:
            item > 685 ? console.log(5, item) : item += 10
            break
          case 6:
            item > 810 ? console.log(6, item) : item += 10
            break
        }
        return item
      })
      console.log(this.barData)
      this.drawBarChart()
    },
    change () {
      this.timer = setInterval(() => {
        this.changeData()
        if (this.barData[2] > 985) {
          clearInterval(this.timer)
        }
      }, 100)
    }
  }
}
</script>

<style scoped lang="less">
.charts{
  background-color: #ffffff;
  padding: 16px;
  margin: 16px;
  .charts-box{
    #chartBar{
      width: 800px;
      height: 600px;
      border: 1px solid grey;
    }
  }
}
</style>
