<template>
  <div class="mixins-demo-1">
    <el-button @click="toggle">diglog1</el-button>
    <el-button @click="changeNum">改变数值</el-button>
    <el-button @click="showData">展示冲突数据</el-button>
    <el-dialog
      title="提示"
      :visible.sync="isShowDialog"
      width="30%"
      center>
      <span>发票设置菜单，放在公司档案后面。</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="isShowDialog = false">取 消</el-button>
        <el-button type="primary" @click="isShowDialog = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { showDialog } from '../../../mixins/demo.js'
export default {
  name: 'mixinsDemo1',
  mixins: [showDialog],
  data () {
    return {
      outerVisible: false,
      demo1: {
        name: 'moss',
        age: 16
      }
    }
  },
  methods: {
    showData () {
      console.log(this.demo1)
    }
  }
}
</script>

<style scoped lang="less">

</style>
