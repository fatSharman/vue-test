<template>
  <div class="order-online">
    <div class="banner">
      <img src="/static/img/home/SMT-banner.jpg" alt="" style="height: 120px;width: 100%">
    </div>
    <div class="form-box">
      <div class="form left">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
          <el-form-item label="项目名称：" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="生产数量：" prop="region">
            <el-input-number v-model="ruleForm.productNum" controls-position="right" :min="1"></el-input-number>
          </el-form-item>
          <el-form-item label="单双面切片工艺：" prop="technique">
            <div class="btns">
              <button>单面</button>
              <button class="active">双面</button>
            </div>
          </el-form-item>
          <el-form-item label="贴片工艺：" prop="delivery">
            <div class="ssss" style="display: flex">
              <div class="btns">
                <button>单面</button>
                <button class="active">双面</button>
              </div>
              <span>是否有铅：</span>
              <div class="btns">
                <button>有</button>
                <button class="active">无</button>
              </div>
            </div>
          </el-form-item>
          <el-form-item label="SMT物料种颗数：" prop="type">
            <el-input-number v-model="ruleForm.productNum" controls-position="right" :min="1"></el-input-number> 颗
          </el-form-item>
          <el-form-item label="DIP物料颗粒：" prop="resource">
            <el-input-number v-model="ruleForm.productNum" controls-position="right" :min="1"></el-input-number> 颗
          </el-form-item>
          <el-form-item label="钢网数量：" prop="desc">
            <el-input-number v-model="ruleForm.productNum" controls-position="right" :min="1"></el-input-number> 张
          </el-form-item>
          <el-form-item label="是否刷三防漆：" prop="desc">
            <div class="btns">
              <button>是</button>
              <button class="active">否</button>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="form right">2</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderOnline',
  data () {
    return {
      ruleForm: {
        name: '',
        productNum: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        productNum: [
          { required: true, message: '请输入生产数量', trigger: 'change' }
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
  .order-online{
    background-color: #f8f8f8;
    padding-bottom: 40px;
    .banner{
      height: 120px;
      overflow: hidden;
    }
    .form-box{
      width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      .form{
        border: 1px solid #eaeaea;
        background-color: #ffffff;
        padding: 16px;
        &.left{
          flex: 1;
          margin-right: 20px;
        }
        &.right{
          flex: none;
          width: 400px;
        }
        .btns{
          button{
            height: 32px;
            cursor: pointer;
            padding: 0 20px;
            margin-right: 10px;
            background-color: #ffffff;
            outline: none;
            border: 1px solid #DCDEE2;
            border-radius: 4px;
            &.active{
              border-color: #e54e41;
              position: relative;
            }
          }
          button.active::before{
            content: " ";
            position: absolute;
            right: -1px;
            bottom: -1px;
            z-index: 10;
            width: 14px;
            height: 14px;
            background-image: url("/static/img/home/selected.png");
            background-size: cover;
          }
        }
      }
    }
  }
</style>
