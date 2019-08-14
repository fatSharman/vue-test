<template>
  <div class="home-page">
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
          <div class="intro-item">
            <img src="/static/img/home/ad01.png" alt="logo" style="width: 60px;height: 60px">
            <div class="ad-r">
              <p>品质保障</p>
              <span>平台担保 五项检测严把关</span>
            </div>
          </div>
          <div class="intro-item">
            <img src="/static/img/home/ad01.png" alt="logo" style="width: 60px;height: 60px">
            <div class="ad-r">
              <p>价格优惠</p>
              <span>原厂供货 集中采购成本低</span>
            </div>
          </div>
          <div class="intro-item">
            <img src="/static/img/home/ad01.png" alt="logo" style="width: 60px;height: 60px">
            <div class="ad-r">
              <p>交期保证</p>
              <span>智能排产 采购生产效率高</span>
            </div>
          </div>
          <div class="intro-item">
            <img src="/static/img/home/ad01.png" alt="logo" style="width: 60px;height: 60px">
            <div class="ad-r">
              <p>专业服务</p>
              <span>全程跟踪 客户下单有保障</span>
            </div>
          </div>
        </div>
        <div class="introduction-title">
          <span class="big">服务流程</span>
          <span class="small">Services Process</span>
        </div>
        <div class="introduction-content">
          <div class="sp-item">
            <div class="sp-t">
              <img src="/static/img/home/sp01.png" alt="logo" style="height: 28px;width: 28px">
            </div>
            <div class="sp-b">售后服务</div>
          </div>
          <div class="sp-next"><img src="/static/img/home/next.png" alt="logo" style="height: 27px;width: 25px"></div>
          <div class="sp-item">
            <div class="sp-t">
              <img src="/static/img/home/sp01.png" alt="logo" style="height: 28px;width: 28px">
            </div>
            <div class="sp-b">售后服务</div>
          </div>
          <div class="sp-next"><img src="/static/img/home/next.png" alt="logo" style="height: 27px;width: 25px"></div>
          <div class="sp-item">
            <div class="sp-t">
              <img src="/static/img/home/sp01.png" alt="logo" style="height: 28px;width: 28px">
            </div>
            <div class="sp-b">售后服务</div>
          </div>
          <div class="sp-next"><img src="/static/img/home/next.png" alt="logo" style="height: 27px;width: 25px"></div>
          <div class="sp-item">
            <div class="sp-t">
              <img src="/static/img/home/sp01.png" alt="logo" style="height: 28px;width: 28px">
            </div>
            <div class="sp-b">售后服务</div>
          </div>
          <div class="sp-next"><img src="/static/img/home/next.png" alt="logo" style="height: 27px;width: 25px"></div>
          <div class="sp-item">
            <div class="sp-t">
              <img src="/static/img/home/sp01.png" alt="logo" style="height: 28px;width: 28px">
            </div>
            <div class="sp-b">售后服务</div>
          </div>
          <div class="sp-next"><img src="/static/img/home/next.png" alt="logo" style="height: 27px;width: 25px"></div>
          <div class="sp-item">
            <div class="sp-t">
              <img src="/static/img/home/sp01.png" alt="logo" style="height: 28px;width: 28px">
            </div>
            <div class="sp-b">售后服务</div>
          </div>
          <div class="sp-next"><img src="/static/img/home/next.png" alt="logo" style="height: 27px;width: 25px"></div>
          <div class="sp-item">
            <div class="sp-t">
              <img src="/static/img/home/sp01.png" alt="logo" style="height: 28px;width: 28px">
            </div>
            <div class="sp-b">售后服务</div>
          </div>
          <div class="sp-next"><img src="/static/img/home/next.png" alt="logo" style="height: 27px;width: 25px"></div>
          <div class="sp-item">
            <div class="sp-t">
              <img src="/static/img/home/sp01.png" alt="logo" style="height: 28px;width: 28px">
            </div>
            <div class="sp-b">售后服务</div>
          </div>
        </div>
        <div class="introduction-title">
          <span class="big">实力展示</span>
          <span class="small">Strength Display</span>
        </div>
        <div class="introduction-content">
          <div class="sd-item">
            <router-link to="/"></router-link>
            <div class="mask-box">
              <p class="t">智能工厂</p>
              <div>
                <p>
                  <span>进口高端设备</span>
                  <span>先进生管经验</span>
                </p>
                <p>
                  <span>原厂直供物料</span>
                  <span>全员品质管理</span>
                </p>
              </div>
            </div>
          </div>
          <div class="sd-item">
            <router-link to="/"></router-link>
            <div class="mask-box">
              <p class="t">制程能力</p>
              <div>
                <p>
                  <span>高精度设备配置</span>
                  <span>合理化产线分配</span>
                </p>
                <p>
                  <span>专业化工程设计</span>
                  <span>高效性应急处理</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      num: ''
    }
  },
  methods: {}
}
</script>

<style scoped lang="less">
  .home-page{
    margin-bottom: 40px;
    .SMT-area{
      margin: 0 auto;
      position: absolute;
      z-index: 9;
      top: 0;
      left: calc(50% - 600px);
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
        max-width: 1200px;
        margin: 0 auto;
        .introduction-title{
          height: 100px;
          line-height: 100px;
          vertical-align: bottom;
          position: relative;
          margin-bottom: 30px;
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
        .introduction-content{
          display: flex;
          flex-wrap: nowrap;
          justify-content: space-between;
          .intro-item{
            flex: 1;
            margin-right: 10px;
            height: 140px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 0 15px 0 rgba(0,0,0,.1);
          }
          .sp-item{
            width: 114px;
            height: 120px;
            box-shadow: 0 0 15px 0 rgba(0,0,0,.1);
            border-radius: 60px 0 56px 56px;
            .sp-t{
              margin: 20px 20px 0 0;
              text-align: right;
              position: relative;
              &::after{
                content: "";
                position: absolute;
                right: 0;
                bottom: -10px;
                width: 45px;
                height: 1.1px;
                background-color: #1aa4e2;
              }
            }
            .sp-b{
              font-family: MicrosoftYaHei sans-serif;
              font-size: 20px;
              color: #333;
              letter-spacing: 0;
              text-align: justify;
              padding: 0 15px;
              margin-top: 20px;
            }
          }
          .sp-next{
            width: 40px;
            height: 120px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .sd-item{
            flex: 1;
            height: 200px;
            overflow: hidden;
            position: relative;
            background-size: cover;
            &:nth-child(1){
              background-image: url("/static/img/home/strength01.png");
              margin-right: 20px;
            }
            &:nth-child(2){
              background-image: url("/static/img/home/strength02.png");
            }
            &:hover{
              .mask-box{
                bottom: 0;
                transition: all 400ms ease;
              }
            }
            a{
              display: block;
              width: 100%;
              height: 100%;
            }
            .mask-box{
              position: absolute;
              left: 0;
              bottom: -48px;
              width: 100%;
              z-index: 10;
              background-color: rgba(0,0,0,.5);
              transition: all 400ms ease;
              p{
                margin: 0;
                height: 24px;
                line-height: 24px;
                color: #ffffff;
                text-align: center;
                &.t{
                  font-weight: bold;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
<style lang="less">
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
</style>
