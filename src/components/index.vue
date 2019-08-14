<template>
  <div class="home">
    <head-nav></head-nav>
    <div class="tab-box">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="首页" name="first">
          <!---->
          <el-carousel height="450px" arrow="never" :interval="10000">
            <el-carousel-item :key="1">
              <img src="/static/img/home/banner01.png" alt="banner" style="width: 100%;height: 450px">
            </el-carousel-item>
            <el-carousel-item :key="2">
              <img src="/static/img/home/banner02.jpg" alt="banner" style="width: 100%;height: 450px">
            </el-carousel-item>
          </el-carousel>
          <!---->
          <home></home>
        </el-tab-pane>
        <el-tab-pane label="在线下单" name="second">
          <order-online></order-online>
        </el-tab-pane>
        <el-tab-pane label="服务流程" name="third">角色管理</el-tab-pane>
      </el-tabs>
    </div>
    <foot></foot>
  </div>
</template>

<script>
import HeadNav from './layout/HeadNav'
import Foot from './layout/Foot'
import Home from './layout/Home'
import OrderOnline from './layout/OrderOnline'
export default {
  name: 'index',
  components: {HeadNav, Foot, Home, OrderOnline},
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style scoped lang="less">
  .home{}
</style>
<!--//修改组件样式-->
<style lang="less">
  .home{
    .el-menu{
      background-color: transparent;
      border: none;
      display: flex;
      .el-menu-item{
        height: 30px;
        line-height: 28px;
        border-bottom: 2px solid transparent;
        color: #ffffff;
        padding: 0;
        margin: 0 20px;
        &:hover,&:focus{
          border-bottom-color: #ffffff!important;
          color: #ffffff;
          background-color: transparent;
        }
      }
    }
    .el-tabs{
      .el-tabs__header{
        background-color: #423c3a;
        margin-bottom: 0;
        border: none;
        z-index: 2;
        .el-tabs__nav-wrap{
          max-width: 1200px;
          margin: 0 auto;
          height: 50px;
          overflow: visible;
          .el-tabs__nav{
            border: none;
            .el-tabs__item{
              border: none;
              height: 60px;
              line-height: 50px;
              width: 180px;
              font-size: 22px;
              color: #ffffff;
              font-weight: bold;
              text-align: center;
              overflow: visible;
              &.is-active{
                background-image: url("../../static/img/home/tab-item-bg.png");
                background-repeat: no-repeat;
                background-size: cover;
              }
            }
          }
        }
      }
      .el-tabs__content{
        z-index: 1;
        .el-tab-pane{
          position: relative;
        }
      }
    }
    .el-carousel__indicators--horizontal{
      bottom: 30px;
    }
    .el-carousel__indicator{
      padding: 0;
      .el-carousel__button{
        width: 16px;
        height: 16px;
        border-radius: 50%;
        margin: 0 8px;
      }
    }
  }
</style>
