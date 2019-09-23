<template>
<div class="sliding-validation">
  <div class="sliding-image">
    <canvas id="slidingImageCanvas" height="180" width="300"></canvas>
    <canvas id="slidingImageBlock" height="180" width="300"></canvas>
  </div>
  <div class="sliding-box">
    向右滑动填充拼图解锁
    <span class="sliding-item"><i class="el-icon-right"></i></span>
  </div>
</div>
</template>

<script>
export default {
  name: 'slidingValidation',
  data () {
    return {
      canvas_ctx: '', // 背景画布
      block_ctx: '', // 裁剪的可移动小图
      x: 100,
      y: 40,
      w: 40,
      r: 10,
      P: 0
    }
  },
  mounted () {
    this.p = Math.PI
    let canvas = document.getElementById('slidingImageCanvas')
    let block = document.getElementById('slidingImageBlock')
    // 获取画布
    this.canvas_ctx = canvas.getContext('2d')
    this.block_ctx = block.getContext('2d')
    // 加载图片
    let img = document.createElement('img')
    img.src = '/static/img/aixi.jpg'
    img.onload = () => {
      // this.canvas_ctx.drawImage(img, 0, 0, 300, 180)
      this.block_ctx.drawImage(img, 0, 0, 300, 180)
    }
    // 裁剪图形
    this.drawSlider(this.block_ctx)
    //
    let imgData = this.block_ctx.getImageData(this.x, this.y - 2 * this.r + 4, this.w + 2 * this.r - 4, this.w + 2 * this.r - 4)
    console.log(imgData)
  },
  methods: {
    drawSlider (ctx) {
      let x = this.x
      let y = this.y
      let r = this.r
      let w = this.w
      let PI = this.p
      ctx.beginPath()
      ctx.moveTo(x, y) // 起始点
      ctx.lineTo(x + w / 2, y)
      ctx.arc(x + y / 2, y - r + 4, r, 0, 2 * PI)
      ctx.lineTo(x + w / 2, y)
      ctx.lineTo(x + w, y)
      ctx.lineTo(x + w, y + w / 2)
      ctx.arc(x + w + r - 4, y + w / 2, r, 0, 2 * PI)
      ctx.lineTo(x + w, y + w / 2)
      ctx.lineTo(x + w, y + w)
      ctx.lineTo(x, y + w)
      ctx.clip()
      ctx.beginPath()
      ctx.arc(x, y + w / 2, r, 0, 2 * PI)
      ctx.globalCompositeOperation = 'xor'
      ctx.fill()
    }
  }
}
</script>

<style scoped lang="less">
.sliding-validation{
  .sliding-image{
    width: 300px;
    height: 180px;
    border: 1px solid transparent;
    margin-bottom: 10px;
    position: relative;
    #slidingImageBlock{
      position: absolute;
      top: 0;
      left: 0;
      z-index: 100;
    }
  }
  .sliding-box{
    width: 300px;
    height: 40px;
    border: 1px solid #eaeaea;
    line-height: 40px;
    background-color: #fafafa;
    text-align: center;
    user-select: none;
    position: relative;
    .sliding-item{
      position: absolute;
      left: -1px;
      top: -1px;
      z-index: 100;
      cursor: move;
      display: inline-block;
      height: 40px;
      width: 40px;
      border: 1px solid #eaeaea;
      box-shadow: 0 0 3px #333333;
    }
  }
}
</style>
