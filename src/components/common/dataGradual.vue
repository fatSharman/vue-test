<template>
  <div class="dataGradual">
    <span>数值变化范围: </span>
    <el-input-number v-model="minNum" :controls="false" :min="0" :max="maxNum" size="mini" :step-strictly="true"></el-input-number> -
    <el-input-number v-model="maxNum" :controls="false" :min="minNum" size="mini" :step-strictly="true"></el-input-number>
    <span>数值变化时间: </span>
    <el-input-number v-model="time" :controls="false" :min="0" size="mini" :step-strictly="true"></el-input-number>
    <p>数值变化展示</p>
    <strong><i :style="{width: minNum + 'px', transition: 'all ' + time + 'ms ease'}"></i></strong>
  </div>
</template>

<script>
export default {
  name: 'dataGradual',
  data () {
    return {
      minNum: 0,
      maxNum: 500,
      time: 20000
    }
  }
}
</script>

<style scoped lang="less">
.dataGradual{
  span{
    line-height: 28px;
  }
  strong{
    display: block;
    height: 10px;
    width: 500px;
    border-radius: 5px;
    background-color: #eaeaea;
    overflow: hidden;
    i{
      display: block;
      height: 100%;
      border-radius: 5px;
      background-color: #666666;
      cursor: pointer;
    }
  }
}
</style>
