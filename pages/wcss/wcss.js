Page({
    mixins: [require('./mixin/themeChanged')],
    data: {
        inputShowed: false,
        inputVal: ""
    },
    showInput: function () {
        this.setData({
            inputShowed: true
        });
    },
    hideInput: function () {
        this.setData({
            inputVal: "",
            inputShowed: false
        });
    },
    clearInput: function () {
        this.setData({
            inputVal: ""
        });
    },
    inputTyping: function (e) {
      console.log('dsaas')
        this.setData({
            inputVal: e.detail.value
        });
    }
});