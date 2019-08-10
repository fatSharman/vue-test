<template>
    <div class="nav-menu">
      <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="navIsCollapse"
               background-color="#545c64"
               text-color="#fff"
               active-text-color="#ffd04b">
        <el-menu-item index="1">
          <i class="el-icon-orange"></i>
          <span slot="title">组件试用</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">组件试用</span>
          </template>
          <el-menu-item index="2-1">DatePicker 日期选择器</el-menu-item>
          <el-menu-item index="2-2">11111111111111111111111111111111111111</el-menu-item>
          <el-submenu index="2-4">
            <span slot="title">选项4</span>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </div>
</template>

<script>
export default {
  name: 'NavMenu',
  data () {
    return {

    }
  },
  computed: {
    navIsCollapse () {
      return this.$store.state.first.navIsCollapse
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped lang="less">
  .nav-menu{
    height: 100%;
    background-color: #545c64;
  }
</style>
<style lang="less">
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
