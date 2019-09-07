<template>
  <div class="work-list">
    <h2>Work List</h2>
    <section>
      <h3>Http Url</h3>
      <p v-for="(item, index) in urlList" :key="index">
        <span>{{item.name}}: </span><a :href="item.url" target="_blank">{{item.url}}</a>
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'notification',
  data () {
    return {
      urlList: [
        {
          name: 'git',
          url: 'http://git.yunhengwang.net/'
        },
        {
          name: '接口管理平台',
          url: 'http://ym.yunhengwang.net/project/21/interface/api/cat_111'
        },
        {
          name: 'Element',
          url: 'https://element.eleme.cn/#/zh-CN/component/upload'
        },
        {
          name: 'iView',
          url: 'https://www.iviewui.com/docs/guide/install'
        },
        {
          name: 'Vue',
          url: 'https://cn.vuejs.org/v2/guide/components.html'
        },
        {
          name: 'Animate.css',
          url: 'https://daneden.github.io/animate.css/'
        },
        {
          name: 'moment.js',
          url: 'http://momentjs.cn/docs/#/use-it/'
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
.work-list{
  background-color: white;
  margin: 10px;
  padding: 10px;
  section{
    span{
      display: inline-block;
      width: 120px;
      text-align: left;
    }
    a{
      color: #666666;
      text-decoration: none;
      &:hover{
        color: #52ccba;
      }
    }
  }
}
</style>
