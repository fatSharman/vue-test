<template>
  <div class="component">
    <el-button type="primary" @click="visible = true">新增</el-button>
    <el-dialog :title="'新增审核人'" :visible.sync="visible" width="480px">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="角色" prop="role">
          <el-input v-model="ruleForm.name" disabled="disabled"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="联系方式" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm ('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm ('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'componentTest',
  data () {
    return {
      visible: false,
      ruleForm: {
        name: '',
        role: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        role: [
          { required: false, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped lang="less">
  .component{}
</style>
<style lang="less">
  .component{
    .el-dialog__header{
      padding: 0 16px;
      height: 40px;
      line-height: 40px;
      background-color: #EBF2F1;
      .el-dialog__headerbtn{
        top: 0;
        right: 16px;
      }
    }
    .el-dialog__body{
      padding: 16px;
    }
    .el-dialog__footer{
      display: flex;
      justify-content: center;
      button{
        padding: 0;
        width: 80px;
        height: 30px;
        line-height: 28px;
        border: solid 1px #eaeaea;
        border-radius: 0;
        color: #666666;
        font-family: "MicrosoftYaHei";
        &.el-button--primary{
          background-color: #52ccba;
          color: #ffffff;
        }
        &.el-button--default{
          background-color: #f1f1f1;
        }
      }
    }
    .el-icon-close{
      font-size: 12px;
      &:hover{
        color: #52ccba;
      }
    }
  }
</style>
