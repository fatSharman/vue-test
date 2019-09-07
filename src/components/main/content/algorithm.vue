<template>
  <div class="algorithm">
    <h2>算法</h2>
    <div class="algorithm-item yang-hui-triangle">
      <h3>杨辉三角</h3>
      <p>输入一个数n，生成杨辉三角的前n行</p>
      <el-input-number v-model="num" @change="handleChange" controls-position="right" :step-strictly="true"></el-input-number>
      <el-button type="primary" size="normal">go</el-button>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'algorithm',
  data () {
    return {
      num: 1,
      list: []
    }
  },
  methods: {
    handleChange (val) {
      let arr = []
      for (let i = 0; i < val; i++) {
        if (i === 0 || i === val - 1) {
          arr[i] = 1
        } else {
          arr[i] = 0
        }
      }
      console.log(arr)
    }
  }
}
</script>

<style scoped lang="less">
.algorithm{
  background-color: white;
  padding: 10px;
  margin: 10px;
  .yang-hui-triangle{
    ul{
      list-style: none;
      li{
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
