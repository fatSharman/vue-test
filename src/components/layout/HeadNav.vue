<template>
  <header class="head-nav">
    <div class="head">
      <a href="/" class="left">
        <img src="/static/img/home/logo.png" alt="logo" style="width: 176px;height: 42px">
        <img src="/static/img/home/jiandan.gif" alt="yunheng" style="width: 130px;height: 40px">
      </a>
      <div class="right">
        <el-button type="primary" round @click="$router.push('/main')">登录</el-button>
        <el-button type="primary" round>注册</el-button>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">
            <i class="icon el-icon-chat-line-square"></i>
            消息
          </el-menu-item>
          <el-menu-item index="2">
            <i class="icon el-icon-tickets"></i>
            订单
          </el-menu-item>
          <el-menu-item index="3">
            <i class="icon el-icon-service"></i>
            客服
          </el-menu-item>
          <el-menu-item index="4">
            <i class="icon el-icon-connection"></i>
            导航
          </el-menu-item>
        </el-menu>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeadNav',
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped lang="less">
  header.head-nav{
    background-color: #1aa4e2;
    .head{
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      height: 80px;
      padding: 0 20px;
      .right{
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        .icon{
          color: #ffffff;
        }
      }
    }
  }
</style>
<style lang="less">
  header.head-nav{
    .el-button{
      height: 30px;
      width: 70px;
      border: 1px solid #ffffff;
      background-color: transparent;
      padding: 0;
      margin-left: 20px;
      &:hover{
        background-color: #ffffff;
        color: #1aa4e2;
      }
    }
  }
</style>
