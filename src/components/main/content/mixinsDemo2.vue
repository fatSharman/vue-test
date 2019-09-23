<template>
  <div class="mixins-demo-2">
    <el-button @click="toggle">diglog2</el-button>
    <el-button @click="changeNum">改变数值</el-button>
    <el-dialog
      title="提示"
      :visible.sync="isShowDialog"
      width="30%"
      center>
      <span>证码输入完成后，需输入企业账号的登录密码加以验证</span>
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
      centerDialogVisible: false
    }
  }
}
</script>

<style scoped lang="less">

</style>
