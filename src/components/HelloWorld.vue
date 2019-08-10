<template>
  <div class="hello">
    <header>
      <div class="">
        <i :class="navIsCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'" @click="toggleNavMenu"></i>
      </div>
    </header>
    <div class="container">
      <aside>
        <navMenu></navMenu>
      </aside>
      <section>
        <transition model="out-in" name="section">
          <component :is="componentName"></component>
        </transition>
      </section>
    </div>
    <footer></footer>
  </div>
</template>

<script>
import navMenu from './layout/navMenu'
import componentTest from './section/component/componentTest'
export default {
  name: 'HelloWorld',
  components: {
    navMenu,
    componentTest
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      componentName: 'componentTest'
    }
  },
  computed: {
    navIsCollapse () {
      return this.$store.state.first.navIsCollapse
    }
  },
  methods: {
    toggleNavMenu () {
      this.$store.commit('first/toggleNavCollapseStatus')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .hello{
    height: 100%;
    width: 1200px;
    margin: 0 auto;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    header{
      flex: none;
      height: 64px;
      background-color: #545c64;
      padding: 0 10px 0 16px;
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
    }
    .container{
      flex: 1;
      display: flex;
      flex-wrap: nowrap;
      aside{
        flex: none;
        max-width: 200px;
        overflow: hidden;
      }
      section{
        flex: 1;
        background-color: #ffffff;
        padding: 16px;
      }
    }
    footer{
      flex: none;
      height: 100px;
      background-color: black;
    }
  }
</style>
<!--修改elementUI组件样式-->
<style lang="less">
  .el-icon-s-fold,.el-icon-s-unfold{
    font-size: 36px;
    cursor: pointer;
    color: white;
  }
</style>
