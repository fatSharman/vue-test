<template>
  <div class="head">
    <div class="header-box">
      <i class="icon el-icon-s-fold"></i>
      <router-link to="/main" class="personal-info">个人中心</router-link>
      <router-link to="/" class="back-to-home">返回首页</router-link>
    </div>
    <div class="header-box">
      <div class="avatar"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'topHead'
}
</script>

<style scoped lang="less">
  .head{
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding-right: 16px;
    .header-box{
      display: flex;
      align-items: center;
      .icon{
        display: inline-block;
        padding: 14px 16px;
        font-size: 36px;
        cursor: pointer;
      }
      .personal-info{
        font-size: 24px;
        font-weight: normal;
        color: #ffffff;
        text-decoration: none;
        margin-right: 20px;
      }
      .back-to-home{
        height: 24px;
        line-height: 24px;
        border: 1px solid #b1bfc4;
        padding: 0 16px;
        border-radius: 12px;
        color: #b1bfc4;
        text-align: center;
        text-decoration: none;
      }
      .avatar{
        height: 48px;
        width: 48px;
        border-radius: 50%;
        background-image: url("/static/img/main/default_avatar.png");
        background-size: cover;
      }
    }
  }
</style>
