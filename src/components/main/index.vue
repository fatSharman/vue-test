<template>
  <div id="main-business">
    <div class="left">
      <header>
        <top-head></top-head>
      </header>
      <div class="box">
        <aside>
          <left-menu></left-menu>
        </aside>
        <section>
          <router-view></router-view>
        </section>
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
import leftMenu from './layout/menu'
import topHead from './layout/head'
export default {
  name: 'index',
  components: {
    leftMenu,
    topHead
  },
  mounted () {
    document.getElementById('main-business').style.height = window.innerHeight + 'px'
  },
  data () {
    return {}
  },
  methods: {
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped lang="less">
  #main-business{
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    font-family: Microsoft YaHei sans-serif;
    overflow: hidden;
    .left{
      flex: 1;
      height: 100%;
      header{
        height: 64px;
        background-color: #1b2e33;
        color: #ffffff;
        font-size: 14px;
      }
      .box{
        height: calc(100% - 64px);
        overflow: hidden;
        display: flex;
        flex-wrap: nowrap;
        aside{
          flex: none;
          width: 160px;
          background-color: #264047;
          color: #b1bfc4;
          font-size: 14px;
        }
        section{
          flex: 1;
          height: 100%;
          background-color: #e6ebe9;
          overflow-y: auto;
          overflow-x: hidden;
        }
      }
    }
    .right{
      flex: none;
      width: 36px;
      background-color: #e6ebe9;
      box-shadow: -1px 0 5px rgba(0,0,0,.1);
    }
  }
</style>
