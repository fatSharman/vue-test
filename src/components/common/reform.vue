<template>
  <div class="canvas-box">
    <canvas id="drawing" width="900px" height="400px"></canvas>
  </div>
</template>

<script>
export default {
  name: 'reform',
  created () {},
  mounted () {
    this.drawing()
  },
  data () {
    return {}
  },
  methods: {
    drawing () {
      let e = document.getElementById('drawing')
      if (e.getContext) {
        let context = e.getContext('2d')
        context.fillStyle = '#ff0000'
        context.fillRect(10, 10, 50, 50)
        context.fillStyle = '#ffffff'
        context.fillRect(30, 30, 60, 40)
        context.clearRect(40, 40, 10, 10)
        context.strokeStyle = '#ff0000'
        context.strokeRect(100, 100, 100, 50)
        context.strokeStyle = '#ffffff'
        context.strokeRect(120, 120, 100, 50)
      }
    }
  }
}
</script>

<style scoped lang="less">
.canvas-box{
  background-color: bisque;
}
</style>
