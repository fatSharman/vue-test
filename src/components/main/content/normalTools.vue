<template>
  <div class="normal-tools">
    <el-table :data="tableData" border style="width: 100%" :row-class-name="tableRowClassName">
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="url" label="地址"></el-table-column>
      <el-table-column prop="operation" label="操作"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import toolList from '../../../data/tools'
export default {
  name: 'normalTools',
  created () {
    console.log(toolList)
  },
  methods: {
    tableRowClassName ({row, rowIndex}) {
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    }
  },
  data () {
    return {
      tableData: toolList
    }
  }
}
</script>

<style scoped lang="less">
.normal-tools{
  margin: 10px;
  padding: 10px;
  background-color: white;
}
</style>
