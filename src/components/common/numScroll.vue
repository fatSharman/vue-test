<template>
  <div class="effect-box data-scroll">
    <div class="container">
      <div class="data-box" :style="'width:' + 22 * dataList.length + 'px'" style="transition: all 400ms ease">
        <div v-for="(item, index) in dataList" :key="index" data-num="5" class="num-box" :style="'left:' + 22 * index + 'px'" style="">
          <div v-for="(v, i) in numArr" :key="i" :class="['num', v.toString() === item ? 'active' : '']">{{ v }}</div>
        </div>
      </div>
      <el-button v-if="showChangeBtn" type="primary" size="mini" style="margin-top: 20px" @click="changeNum">change</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'effect',
  props: {
    initValue: {
      type: Number,
      default: 52364
    },
    size: {
      type: String,
      default: 'normal'
    },
    showChangeBtn: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      num: 0,
      numArr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  },
  created () {
    this.num = this.initValue
    this.render()
  },
  computed: {
    dataList () {
      return this.num.toString().split('')
    }
  },
  watch: {
    initValue (newVal) {
      this.num = newVal
      this.render()
    }
  },
  methods: {
    changeNum () {
      this.num = this.randomNum(this.dataList.length)
      this.render()
    },
    render () {
      this.$nextTick(() => {
        let numBox = document.getElementsByClassName('num-box')
        for (let i = 0; i < numBox.length; i++) {
          for (let j = 0; j < numBox[i].children.length; j++) {
            if (numBox[i].children[j].className.indexOf('active') > 0) {
              numBox[i].style.top = -30 * j + 'px'
            }
          }
        }
      })
    },
    randomNum (n) {
      return parseInt(Math.random() * Math.pow(10, n))
    }
  }
}
</script>

<style scoped lang="less">
  .effect-box{
    .title{
      margin: 0;
      height: 30px;
      line-height: 30px;
    }
    .container{
      .data-box{
        min-width: 90px;
        border: 1px solid #eaeaea;
        display: flex;
        overflow: hidden;
        position: relative;
        height: 30px;
        .num-box{
          position: absolute;
          padding: 0 5px;
          text-align: center;
          width: 12px;
          font-size: 20px;
          height: 30px;
          transition: all 400ms ease;
          .num{
            line-height: 30px;
          }
        }
      }
    }
  }
</style>
