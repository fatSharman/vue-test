const showDialog = {
  data () {
    return {
      isShowDialog: false,
      num: 123,
      demo1: {
        name: 'jack',
        age: 16,
        sss: 5869
      }
    }
  },
  methods: {
    toggle () {
      this.isShowDialog = !this.isShowDialog
    },
    changeNum () {
      this.num = this.num + 200
      console.log(this.num)
    }
  }
}

export {
  showDialog
}
