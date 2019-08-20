<template>
  <div class="notification-center">
    <div class="info-box">
      <div class="user info">
        <img :src="userInfo.avatar" alt="avatar" style="width: 80px;height: 80px;flex: none;margin-right: 10px">
        <div class="user-message-box">
          <div class="top">
            <span class="hello">您好，</span>
            <span class="icon"><i class="el-icon-setting"></i>设置</span>
          </div>
          <table style="width: 100%">
            <tr>
              <td>ID：{{ userInfo.id }}</td>
              <td>姓名：{{ userInfo.realname }}</td>
              <td>公司：{{ userInfo.e_name }}</td>
              <td>注册时间：{{ userInfo.format_create_time }}</td>
            </tr>
            <tr>
              <td>昵称：{{ userInfo.nick_name }}</td>
              <td>性别：{{ userInfo.sex === 1 ? '男' : '女' }}</td>
              <td>部门：{{ userInfo.dep }}</td>
              <td>用户类型：{{ userInfo.type_text }}</td>
            </tr>
            <tr>
              <td>手机：{{ userInfo.mobile }}</td>
              <td>邮箱：{{ userInfo.email }}</td>
              <td>职务：{{ userInfo.duty }}</td>
              <td>上次登录时间：{{ userInfo.format_last_time }}</td>
            </tr>
          </table>
        </div>
        <div class="address-box">
          <div class="top">
            <span></span>
            <span class="icon"><i class="el-icon-setting"></i>设置</span>
          </div>
          <div class="address">
            <img src="/static/img/main/address.png" alt="address">
            <span>收货地址：</span>
          </div>
        </div>
      </div>
      <div class="order info">
        <div class="top-head">
          <span class="title">我的订单</span>
          <span class="more">更多订单 <i class="el-icon-d-arrow-right"></i></span>
        </div>
        <table style="width: 100%">
          <thead>
            <th>序号</th>
            <th>订单编号</th>
            <th>项目名称</th>
            <th>订单数量</th>
            <th>订单生效日期</th>
            <th>订单交付日期</th>
            <th>订单类型</th>
            <th>状态</th>
            <th>操作</th>
          </thead>
          <tr v-for="(item, index) in orderList.list" :key="item.id">
            <td>{{ index }}</td>
            <td>{{ item.code }}</td>
            <td>{{ item.project_name }}</td>
            <td>{{ item.num }}</td>
            <td>{{ item.format_expected_deliver_time }}</td>
            <td>{{ item.format_delivery_time }}</td>
            <td>{{ item.type === 2 ? '量产' : '打样' }}</td>
            <td>{{ item.status === 80 ? '已完成' : '生产中'}}</td>
            <td><router-link to="">查看详情</router-link></td>
          </tr>
        </table>
      </div>
      <div class="product info">
        <div class="top-head">
          <span class="title">产品制造</span>
        </div>
        <div style="height: 100px"></div>
      </div>
      <div class="recommend info">
        <div class="top-head">
          <span class="title">推荐业务</span>
        </div>
        <div style="height: 100px"></div>
      </div>
      <div class="guess-you-like info">
        <div class="top-head">
          <span class="title">猜你喜欢</span>
        </div>
        <div style="height: 100px"></div>
      </div>
    </div>
    <div class="notice-box"></div>
  </div>
</template>

<script>
import userInfo from '../../../data/user'
import orderList from '../../../data/orderList'
export default {
  name: 'notification',
  data () {
    return {
      userInfo,
      orderList
    }
  }
}
</script>

<style scoped lang="less">
.notification-center{
  display: flex;
  flex-wrap: nowrap;
  padding: 16px;
  font-size: 12px;
  .info-box{
    flex: 5;
    margin-right: 16px;
    .info{
      background-color: #ffffff;
      margin-bottom: 16px;
      padding: 8px;
      &:last-child{
        margin: 0;
      }
      &.user{
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        .user-message-box{
          flex: 5;
          table{
            font-size: 12px;
            border-spacing: 0;
            border-collapse: collapse;
            color: #404040;
            td{
              height: 30px;
              line-height: 30px;
              padding-right: 10px;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            }
          }
        }
        .address-box{
          flex: 2;
          .address{
            height: 100px;
            border-left: 1px dashed #eaeaea;
            padding: 0 50px 0 20px;
            background-color: #f8f8f8;
            background-clip: content-box;
            display: flex;
            align-items: center;
            img{
              margin: 10px;
            }
          }
        }
        .top{
          height: 24px;
          margin: 0 0 24px 0;
          display: flex;
          justify-content: space-between;
          .hello{
            font-size: 16px;
            font-weight: bold;
            line-height: 24px;
          }
        }
        .icon{
          cursor: pointer;
          display: inline-block;
          font-size: 14px;
          &:hover{
            color: #52ccba;
          }
        }
      }
      &.order,&.product,&.recommend,&.guess-you-like{
        .top-head{
          height: 32px;
          line-height: 32px;
          margin-bottom: 8px;
          display: flex;
          justify-content: space-between;
          .title{
            font-size: 14px;
            font-weight: bold;
          }
          .more{
            cursor: pointer;
            &:hover{
              color: #52ccba;
            }
          }
        }
        table{
          border-collapse: collapse;
          border-spacing: 0;
          thead{
            background-color: #ebf2f1;
            height: 40px;
            line-height: 40px;
          }
          td{
            height: 48px;
            line-height: 48px;
            text-align: center;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            color: #515a6e;
            a{
              color: #52ccba;
              text-decoration: none;
            }
          }
        }
      }
    }
  }
  .notice-box{
    flex: 1;
  }
}
</style>
