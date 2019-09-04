<template>
  <div class="basic-knowledge">
    <h2>前端基础</h2>
    <h3>用css实现斑马背景</h3>
    <div class="zebra-background"></div>
    <span>background: linear-gradient(to left, antiquewhite 50%, #e54e41 50%);</span><br>
    <span>background-size: 20px 100%;</span>
    <h3>用css实现加减号按钮</h3>
    <span class="btn plus"></span>
    <span class="btn minus"></span>
    <div class="test"></div>
    <h3>用css实现毛玻璃效果</h3>
    <div class="ground-glass">
      <div class="content">
        你能使用css实现斑马条纹背景，毛玻璃效果吗？
        能给图片实现滤镜效果，能实现所有自适应布局效果吗？
        原型，原型链，闭包是实现设计模式的必备知识，你真的弄懂了吗？
        闭包导致内存泄漏的原因是什么，你弄明白了吗？
        ajax跨域的解决方案你可以说几种？
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'basicKnowledge'
}
</script>

<style scoped lang="less">
.basic-knowledge{
  font-family: "Microsoft YaHei",sans-serif;
  font-size: 14px;
  background-color: white;
  margin: 10px;
  padding: 10px;
  /*用css实现斑马背景*/
  .zebra-background{
    width: 400px;
    height: 100px;
    background: linear-gradient(to left, antiquewhite 50%, #e54e41 50%);
    background-size: 20px 100%;
  }
  /*用css实现加减号按钮*/
  .btn{
    display: inline-block;
    background: #f1f1f1 no-repeat center;
    border: #eaeaea 1px solid;
    box-shadow: #333333 ;
    width: 24px;
    height: 24px;
    &.plus{
      background-image: linear-gradient(to top, #666666, #666666), linear-gradient(to right, #666666, #666666);
      background-size: 10px 4px, 4px 10px;
    }
    &.minus{
      background-image: linear-gradient(to top, #666666, #666666);
      background-size: 10px 4px;
    }
  }
  .test{
    width: 100px;
    height: 100px;
    background-color: #f1f1f1;
    background-position: top;
    background-repeat: no-repeat;
    background-image: linear-gradient(135deg, #666666 25%, #eaeaea 25%, #eaeaea 50%, aquamarine 50%, aquamarine 75%, gold 75%);
    background-size: 100% 20px;
  }
  /*用css实现毛玻璃效果*/
  .ground-glass{
    width: 520px;
    height: 240px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("/static/img/aixi.jpg") no-repeat center;
    background-size: cover;
    .content{
      width: 400px;
      height: 160px;
      padding: 10px;
      background: rgba(255,255,255,.3);
      overflow: hidden;
      position: relative;
      z-index: 1;
      &:after{
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: url("/static/img/aixi.jpg") no-repeat center fixed;
        background-size: cover;
        filter: blur(80px);
        z-index: -1;
      }
    }
  }
}
</style>
