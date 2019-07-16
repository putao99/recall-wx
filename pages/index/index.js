
Page({
  data: {
    "bnrUrl": [{
      "url": "/image/index1.jpg"
    }, {
        "url": "/image/index2.jpg"
    }, {
        "url": "/image/index3.jpg"
    }, {
        "url": "/image/index4.jpg"
    }],
    rubbishName:'',
    rubbishDefine: '',
    rubbishConclude:'',
    rubbishRequest:''
  },

  search:function(e){
    var keyword = e.detail.value
    var that = this
    wx.request({
      url: 'http://127.0.0.1:5000/query', //仅为示例，并非真实的接口地址
      data: {
        keyword: keyword
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        var result = res.data
        console.log(result)

        if(result == "") {
          that.setData({
            rubbishDefine: "",
            rubbishConclude: "",
            rubbishRequest: ""
          })
          return
        }
        
        if(result == "湿垃圾") {
          that.setData({
            rubbishName: "",
            rubbishDefine: "湿垃圾是指:日常生活垃圾产生的容易腐烂的生物质废弃物",
            rubbishConclude: "湿垃圾主要包括:剩菜剩饭、瓜皮果核、花卉绿植、过期食品等",
            rubbishRequest: "湿垃圾投放要求:纯流质的食物垃圾，如牛奶等，应直接倒进下水口有包装物的湿垃圾应将包装物去除后分类投放，包装物请投放到对应的可回收物或干垃圾容器"
          })
        }else if(result == "有害垃圾"){
          that.setData({
            rubbishDefine: "有害垃圾是指：对人体健康或者自然环境造成直接或潜在危害的废弃物",
            rubbishConclude: "有害垃圾主要包括:废电池、油漆桶、荧光灯管、废药品及其包装物等",
            rubbishRequest: "有害垃圾投放要求:投放时请注意轻放;易破损的请连带包装或包裹后轻放;如易挥发，请密封后投放"
          })
        }
        else if (result == "干垃圾") {
          that.setData({
            rubbishDefine: "干垃圾是指：除有害垃圾、可回收物、 湿垃圾以外的其他生活废弃物",
            rubbishConclude: "干垃圾主要包括:餐盒、餐巾纸、湿纸巾、卫生间用纸、塑料袋、 食品包装袋、污染严重的纸、烟蒂、纸尿裤、 一次性杯子、大骨头、贝壳、花盆、陶瓷等",
            rubbishRequest: "干垃圾投放要求:尽量沥干水分;难以辨识类别的生活垃圾投入干垃圾容器内"
          })
        } else if (result == "可回收物") {
          that.setData({
            rubbishDefine: "可回收物是指：适宜回收利用和资源化利 用的，如：玻、金、塑、 纸、衣",
            rubbishConclude: "可回收物主要包括：酱油瓶、玻璃杯、平板玻璃、易拉罐、饮料瓶、 洗发水瓶、塑料玩具、书本、报纸、广告单、 纸板箱、衣服、床上用品等",
            rubbishRequest: "可回收物投放要求:轻投轻放  清洁干燥，避免污染  废纸尽量平整  立体包装物请清空内容物，清洁后压扁投放  有尖锐边角的，应包裹后投放"
          })
        }


        that.setData({
          rubbishName: keyword + "是：" + result
        })
      }
    })
  },
  getSuggest: function (e) {
    var keyword = e.detail.value
    wx.request({
      url: 'http://127.0.0.1:5000/suggest', //仅为示例，并非真实的接口地址
      data: {
        keyword: '小龙虾'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
      }
    })
  },

});
