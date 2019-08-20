<template>
  <div class="aside">
    <ul>
      <li v-for="item in menuList" :key="item.id">
        <router-link :to="item.url" tag="div" class="menu-item" @click="item.url ? $router.push(item.url) : ''">
          <i :class="item.icon"></i>
          <span>{{item.title}}</span>
          <div class="submenu">
            <ul>
              <li v-for="subItem in item.childList" :key="subItem.id">
                <router-link :to="subItem.url" tag="div" class="menu-item" @click="subItem.url ? $router.push(subItem.url) : ''">
                  <i :class="subItem.icon"></i>
                  <span>{{subItem.title}}</span>
                </router-link>
              </li>
            </ul>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import menuList from '../../../data/main'
export default {
  name: 'leftMenu',
  data () {
    return {
      menuList
    }
  }
}
</script>

<style scoped lang="less">
  .aside{
    ul{
      list-style: none;
      padding: 0;
      margin: 0;
      li{
        cursor: pointer;
        .menu-item{
          height: 42px;
          line-height: 42px;
          color: #b1bfc4;
          position: relative;
          i{
            display: inline-block;
            margin: 0 10px;
          }
          .submenu{
            position: absolute;
            background-color: #264047;
            top: 0;
            left: 100%;
            z-index: 10;
            width: 160px;
            display: none;
          }
        }
        &:hover{
          background-color: #52ccba;
          transition: all 0.5s ease;
          .menu-item{
            color: #ffffff;
          }
          .submenu{
            display: block;
            transition: all 0.5s ease;
          }
        }
      }
    }
  }
</style>
