Page({
  data: {
    listData:{
      actualCombatWeek:[{
        imgUrl:'https://img3.mukewang.com/szimg/6380338b09edb25005400304.png',
        title:'前端性能优化--6大角度综合型优化方案'
      },{
        imgUrl:' https://img4.mukewang.com/szimg/634e6c9509ca28b205400304.png',
        title:'剑指java面试-offer直通车'
      },{
        imgUrl:'https://img2.mukewang.com/szimg/6364defd090e2d6f05400304.png',
        title:'Vue2.5 开发去哪儿网App'
      },{
        imgUrl:'https://img2.mukewang.com/szimg/6364defd090e2d6f05400304.png',
        title:'计算机组成原理+操作系统+计算机网络'
      },{
        imgUrl:'https://img2.mukewang.com/szimg/6364defd090e2d6f05400304.png',
        title:'计算机组成原理+操作系统+计算机网络'
      },{
        imgUrl:'https://img3.mukewang.com/szimg/6380338b09edb25005400304.png',
        title:'前端性能优化--6大角度综合型优化方案'
      }],
      actualCombatMonth:[{
        imgUrl:'https://img3.mukewang.com/szimg/6380338b09edb25005400304.png',
        title:'前端性能优化--6大角度综合型优化方案'
      },{
        imgUrl:' https://img4.mukewang.com/szimg/634e6c9509ca28b205400304.png',
        title:'剑指java面试-offer直通车'
      },{
        imgUrl:'https://img2.mukewang.com/szimg/6364defd090e2d6f05400304.png',
        title:'Vue2.5 开发去哪儿网App'
      },{
        imgUrl:'https://img2.mukewang.com/szimg/6364defd090e2d6f05400304.png',
        title:'计算机组成原理+操作系统+计算机网络'
      },{
        imgUrl:'https://img2.mukewang.com/szimg/6364defd090e2d6f05400304.png',
        title:'计算机组成原理+操作系统+计算机网络'
      }],
      pathWeek:[{
        imgUrl:'https://img3.mukewang.com/szimg/6380338b09edb25005400304.png',
        title:'前端性能优化--6大角度综合型优化方案'
      },{
        imgUrl:' https://img4.mukewang.com/szimg/634e6c9509ca28b205400304.png',
        title:'剑指java面试-offer直通车'
      },{
        imgUrl:'https://img2.mukewang.com/szimg/6364defd090e2d6f05400304.png',
        title:'计算机组成原理+操作系统+计算机网络'
      },{
        imgUrl:'https://img2.mukewang.com/szimg/6364defd090e2d6f05400304.png',
        title:'计算机组成原理+操作系统+计算机网络'
      },{
        imgUrl:'https://img2.mukewang.com/szimg/6364defd090e2d6f05400304.png',
        title:'计算机组成原理+操作系统+计算机网络'
      }],
      pathMonth:[{
        imgUrl:'https://img2.mukewang.com/szimg/6364defd090e2d6f05400304.png',
        title:'计算机组成原理+操作系统+计算机网络'
      },{
        imgUrl:'https://img3.mukewang.com/szimg/6380338b09edb25005400304.png',
        title:'前端性能优化--6大角度综合型优化方案'
      },{
        imgUrl:' https://img4.mukewang.com/szimg/634e6c9509ca28b205400304.png',
        title:'剑指java面试-offer直通车'
      },{
        imgUrl:'https://img2.mukewang.com/szimg/6364defd090e2d6f05400304.png',
        title:'计算机组成原理+操作系统+计算机网络'
      }]
    },
    rankType:'project',
    rankPeriod:'week',
    rankPeriods:[{
      title:'周',
      value:'week'
    },{
      title:'月',
      value:'month'
    }],
    currentList:[{
      imgUrl:'https://img3.mukewang.com/szimg/6380338b09edb25005400304.png',
      title:'前端性能优化--6大角度综合型优化方案'
    },{
      imgUrl:' https://img4.mukewang.com/szimg/634e6c9509ca28b205400304.png',
      title:'剑指java面试-offer直通车'
    },{
      imgUrl:'https://img2.mukewang.com/szimg/6364defd090e2d6f05400304.png',
      title:'Vue2.5 开发去哪儿网App'
    },{
      imgUrl:'https://img2.mukewang.com/szimg/6364defd090e2d6f05400304.png',
      title:'计算机组成原理+操作系统+计算机网络'
    },{
      imgUrl:'https://img2.mukewang.com/szimg/6364defd090e2d6f05400304.png',
      title:'计算机组成原理+操作系统+计算机网络'
    },{
      imgUrl:'https://img3.mukewang.com/szimg/6380338b09edb25005400304.png',
      title:'前端性能优化--6大角度综合型优化方案'
    }]
  },
  toggle(rankType,rankPeriod){
    let currentList=[] 
    if(rankType==='project'&&rankPeriod==='week'){
      currentList=this.data.listData.actualCombatWeek
    }else if(rankType==='project'&&rankPeriod==='month'){
      currentList=this.data.listData.actualCombatMonth
    }else if(rankType==='path'&&rankPeriod==='week'){
      currentList=this.data.listData.pathWeek
    }else{
      currentList=this.data.listData.pathMonth
    }
    this.setData({
      currentList
    })
  },
  handleTapChange(e){
    const type=e.currentTarget.dataset.type
    this.setData({
      rankType:type
    })
    this.toggle(this.data.rankType,this.data.rankPeriod)
  },
  handleTimeChange(e){
    const rankPeriod=e.currentTarget.dataset.type
    this.setData({
      rankPeriod
    })
    this.toggle(this.data.rankType,this.data.rankPeriod)
  }
})