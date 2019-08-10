<template>
  <div class="component">
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </div>
</template>

<script>
export default {
  name: 'componentTest',
  data () {
    return {
      value1: ''
    }
  }
}
</script>

<style scoped lang="less">
  .component{}
</style>
<style lang="less">
  .component{}
</style>
