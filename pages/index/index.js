Page({
  data:{
    showIcon:true,
    type:"recommend",
    tabs:[
      {name:'推荐',type:'recommend',url:'601bd59c0001fc1800900090.jpg'},
      {name:'路径',type:'path',url:'601bd5b2000180bb00900090.jpg'},
      {name:'实战',type:'project',url:'601bd5ba0001fbfa00900090.jpg'},
      {name:'活动',type:'activity',url:'635ff0170001449200900090.jpg'},
    ],
    activity:[{imgUrl:"https://img3.mukewang.com/5f45d3a909f0456f18000600.png"},
    {imgUrl:"https://img2.mukewang.com/5f43234308c3e6d916000533.jpg"},
    {imgUrl:"https://img3.mukewang.com/5e52a624096b42c618000600.png"},
    {imgUrl:"https://img2.mukewang.com/5ed9ddc50001f7f609000200.jpg"}]
  },
  handleInputChange(e){
    const value=e.detail.value
    this.setData({
      showIcon:value?false:true
    })
  },
  changeType(e){
    console.log(e)
    const type=e.currentTarget.dataset.type
    this.setData({
      type
    })
  }
})
