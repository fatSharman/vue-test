<template>
  <footer>
    <div class="link-box">
      <div class="links">
        <ul>
          <li>关于我们</li>
          <li>云恒简介</li>
          <li>新闻动态</li>
          <li>联系我们</li>
          <li>媒体报道</li>
        </ul>
      </div>
      <div class="links">
        <ul>
          <li>PCBA服务</li>
          <li>智能工厂</li>
          <li>品质保障</li>
          <li>交期保障</li>
          <li>制程能力</li>
        </ul>
      </div>
      <div class="links">
        <ul>
          <li>交易服务</li>
          <li>特惠SMT</li>
          <li>结算方式</li>
          <li>正品保障</li>
          <li>售后服务</li>
        </ul>
      </div>
      <div class="links">
        <ul>
          <li>特色服务</li>
          <li>元器件搜索</li>
          <li>智能报价</li>
          <li> </li>
          <li> </li>
        </ul>
      </div>
      <div class="links">
        <ul>
          <li>操作指南</li>
          <li>研发设计</li>
          <li>智能制造</li>
          <li>供应商平台</li>
          <li>联系客服</li>
        </ul>
      </div>
      <div class="links">
        <div>
          <img src="/static/img/home/we-chat01.jpg" alt="" style="height: 120px;width: 120px"><br>
          <p>云恒制造微信服务号</p>
        </div>
      </div>
      <div class="links">
        <div>
          <img src="/static/img/home/we-chat02.png" alt="" style="height: 120px;width: 120px"><br>
          <p>云恒制造微信订阅号</p>
        </div>
      </div>
    </div>
    <div class="keep-on-record">
      <el-link href="http://www.beian.miit.gov.cn" target="_blank">@2018-2021-云恒制造-苏ICP备18056041号-1 版权所有 @南京云恒信息技术有限公司</el-link>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Foot'
}
</script>

<style scoped lang="less">
  footer{
    background-color: #3c3c3c;
    height: 360px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    .link-box{
      flex: 1;
      width: 1120px;
      display: flex;
      flex-wrap: nowrap;
      .links{
        flex: 1;
        display: flex;
        align-items: center;
        ul{
          list-style: none;
          padding: 0;
          margin: 0;
          li{
            height: 24px;
            line-height: 24px;
            font-size: 14px;
            color: #999;
            &:nth-child(1){
              font-size: 18px;
              font-weight: bold;
              color: #ddd;
              margin-bottom: 24px;
            }
          }
        }
        p{
          margin: 10px 0;
          font-size: 12px;
          text-align: center;
          color: #ffffff;
        }
      }
    }
    .keep-on-record{
      width: 100%;
      background-color: #333333;
      flex: none;
      height: 50px;
      line-height: 48px;
      text-align: center;
      a{
        color: #ffffff;
        text-decoration: none;
        &:hover::after{
          border: none;
        }
      }
    }
  }
</style>
