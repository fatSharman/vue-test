<template>
  <div class="home">
    <header>
      <div class="head">
        <a href="/" class="left">
          <img src="/static/img/home/logo.png" alt="logo" style="width: 176px;height: 42px">
          <img src="/static/img/home/jiandan.gif" alt="yunheng" style="width: 130px;height: 40px">
        </a>
        <div class="right">
          <el-button type="primary" round>登录</el-button>
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
          <div class="SMT-area">
            <div class="SMT-box">
              <div class="title">SMT</div>
              <div class="info-box">
                <div class="parameter-box">
                  <div class="param-select">
                    <span>生产数量：</span>
                    <el-input-number v-model="num" controls-position="right" :min="1"></el-input-number>
                  </div>
                  <div class="param-select">
                    <span>单面/双面贴片：</span>
                    <div class="btns">
                      <button>单面</button>
                      <button class="active">双面</button>
                    </div>
                  </div>
                </div>
                <div class="parameter-box">
                  <div class="param-select">
                    <span>工艺要求：</span>
                    <div class="btns">
                      <button>有铅</button>
                      <button class="active">无铅</button>
                    </div>
                  </div>
                  <div class="param-select">
                    <span>刷三防漆：</span>
                    <div class="btns">
                      <button>是</button>
                      <button class="active">否</button>
                    </div>
                  </div>
                </div>
                <div class="parameter-price">
                  <div>
                    <span class="name">S M T贴片</span>
                    <span>:</span>
                    <span class="price">0.04</span>
                    <span>元/焊点 起</span>
                  </div>
                  <div>
                    <span class="name">插件</span>
                    <span>:</span>
                    <span class="price">0.01</span>
                    <span>元/焊点 起</span>
                  </div>
                </div>
                <div class="foot">
                  <button>
                    <i class="el-icon-c-scale-to-original"></i>
                    开始计价
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="container-box">
            <div class="container">
              <div class="introduction-title">
                <span class="big">我们的优势</span>
                <span class="small">Our Advantages</span>
              </div>
              <div class="introduction-content">

              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="在线下单" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="服务流程" name="third">角色管理</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      activeIndex: '1',
      activeName: 'first',
      num: ''
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style scoped lang="less">
  .home{
    header{
      background-color: #1aa4e2;
      .head{
        max-width: 1400px;
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
    .tab-box{
      .SMT-area{
        width: 1400px;
        height: 450px;
        margin: 0 auto;
        position: absolute;
        z-index: 9;
        top: 0;
        left: calc(50% - 700px);
        .SMT-box{
          font-size: 12px;
          position: absolute;
          z-index: 10;
          top: 30px;
          left: 30px;
          width: 360px;
          .title{
            height: 50px;
            line-height: 50px;
            text-align: center;
            color: #ffffff;
            background-color: #e54e41;
            font-size: 18px;
          }
          .info-box{
            padding: 16px;
            background-color: #ffffff;
            .parameter-box{
              display: flex;
              flex-wrap: nowrap;
              margin-bottom: 10px;
              .param-select{
                flex: 1;
                span{
                  display: inline-block;
                  margin-bottom: 10px;
                }
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
            .parameter-price{
              margin-bottom: 10px;
              div{
                height: 30px;
                line-height: 30px;
                span{
                  font-size: 14px;
                  display: inline-block;
                  &.name{
                    width: 70px;
                    text-align-last:justify;
                    text-align:justify;
                    text-justify:distribute-all-lines;
                  }
                  &.price{
                    width: 60px;
                    font-size: 16px;
                    text-align: center;
                  }
                }
              }
            }
            .foot{
              button{
                outline: none;
                cursor: pointer;
                width: 100%;
                border: none;
                height: 32px;
                line-height: 32px;
                background-color: #e54e41;
                border-radius: 16px;
                color: #ffffff;
              }
            }
          }
        }
      }
      .container-box{
        .container{
          max-width: 1400px;
          margin: 0 auto;
          .introduction-title{
            height: 100px;
            line-height: 100px;
            vertical-align: bottom;
            position: relative;
            .big{
              display: inline-block;
              margin-right: 20px;
              font-size: 28px;
              color: #333333;
            }
            .small{
              font-size: 20px;
              color: #999999;
            }
            &::before{
              content: " ";
              position: absolute;
              width: 50px;
              height: 2px;
              z-index: 10;
              bottom: 0;
              background-color: #333333;
            }
          }
        }
      }
    }
  }
</style>
<!--//修改组件样式-->
<style lang="less">
  .home{
    header{
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
          max-width: 1400px;
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
    .SMT-box{
      .el-input-number{
        width: 150px;
        line-height: 30px;
        .el-input{
          .el-input__inner{
            padding: 0 50px 0 10px;
            border: 1px solid #DCDEE2;
            border-radius: 0;
            height: 32px;
            &:hover{
              border-color: #e54e41;
            }
          }
        }
        .el-input-number__increase{
          line-height: 15px;
        }
        .el-input-number__decrease:hover, .el-input-number__increase:hover{
          color: #e54e41;
        }
        .el-input-number__decrease:hover:not(.is-disabled)~.el-input .el-input__inner:not(.is-disabled), .el-input-number__increase:hover:not(.is-disabled)~.el-input .el-input__inner:not(.is-disabled){
          border-color: #e54e41;
        }
      }
    }
  }
</style>
