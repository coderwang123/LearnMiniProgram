// pages/home/home.js
Page({
  data:{
    name:"coderwang",
    age:18,
    students:[
      {id:1,name:"佐助",age:18},
      { id: 2, name: "鸣人", age: 18 },
      { id: 3, name: "卡卡西", age: 20 },
      { id: 4, name: "带土", age: 30 }
    ],
    counter: 0,
  },
  jiabtnclick() {
    this.setData({
      counter:this.data.counter +1
    })
  },
  jianbtnclick() {
    this.setData({
      counter: this.data.counter -1
    })
  }
})