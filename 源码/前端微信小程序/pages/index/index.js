//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    JIELONG_ANS: [
      "多采有舍短手难得鸡早覆不长舞兼不夜起地翻黑大收旁无吁水赞博学叹兵袖善厌作众",
      "不世言下不代传蒙沫",
      "同栩同合雅生共赏目",
      "差人自然人天天地雪",
      "坐山谷仗灵结妙可怒非",
      "百针血调顺苟名遣残文敢败",
      "贤母丹争思迁朝夕朝暮秋代",
      "耳面清敬宾觑来春来吁眼叹来",
      "匪静万不所默同苦冥新而重长",
      "路多毛不得替义脚行相彰拔刀朝",
      "胜如添涌飞天海诺金缝针分翼衣"
    ],

    JIELONG_INIT: [
      "1211211111122221222为1天11并11121121222长1道1111211222观22梦2112111121闻2221211211121121222已1贪222111111211诈1",
      "112可一21211吴1卑11世1归112落2明1代1正11阿1亢1代2相211211111濡111111111以1111111112111111111111111111111111111111111",
      "11111112111121111流1111栩1志2道21111如11甘1污11212死与21111俗11不1苦1111共11瞑1111112心悦211111111111111111111111111",
      "1112111111111强111111111212111111春意盎21三1111回11而1211漫1大1浑然2成112长2久111虎11飞11111111121111111111111111111",
      "11111111111112吃2空1111111112111111211幽111211义2金兰111丹11执1刚11112不2言121111药111面目全21111111111111111111111",
      "11111112111111111依11一2见2111百112111风2雨211不22同1兵111121延1121111112兵2将111111喘111111111111111111111111111",
      "1111111孟1111只12妻良2112121111三11凤1朝1见异22112令2改11前111阳112思2想111111换11后111千2万211111111111111111111111111",
      "2提2命111111根1面1突1111121相2如21111静121其11111111说2话长1112去秋2112111111说11短111眉22去11211111111111111111111111",
      "111111111111111212112死2辞1夷1思11象1可1121211更1212思2想1121日1口111111121婆1111111语2心2111111111111111111111111",
      "212如牛21111见1情11手11112可多21毛1211平121四22天1121111112112111111道112得益2111111助11111111111111111111111111111",
      "思11不22负1112虎22111111泉11而11111121一2冲212111121121底1111千11无1捞111121见2插211111111111111111111111111111111"
    ],

    JIELONG_FINISH: [
      "1地11兼111111覆水难收1大有作为1天11并111舍11翻1博采众长1道1111学11袖手旁观夜长梦多11善1111吁1闻鸡起舞1兵11短111早11不1赞叹不已1贪得无厌111111黑11诈1",
      "11不可一世1言11吴1卑11世1归11下落不明1代1正11阿1亢1代代相传11蒙11111濡111111111以111111111沫111111111111111111111111111111111", "1111111同1111栩1111流1111栩1志同道合1111如11甘1污11雅1生死与共1111俗11不1苦1111共11瞑111111赏心悦目11111111111111111111111111", "111差111111111强111111111人1自111111春意盎然1三1111回11而1人11漫1大1浑然天成11天长地久111虎11飞111111111雪1111111111111111111", "1111111111111坐吃山空111111111谷111111仗11幽111灵11义结金兰111丹11执1刚1111妙不可言1怒1111药111面目全非1111111111111111111111", "1111111百111111111依11一针见血111百11文111风调雨顺11不敢苟同1兵1111名1延11遣111111残兵败将111111喘111111111111111111111111111", "1111111孟1111只1贤妻良母11丹1争1111三11凤1朝1见异思迁11朝令夕改11前111阳11朝思暮想111111换11后111千秋万代11111111111111111111111111", "耳提面命111111根1面1突11111清1相敬如宾1111静1觑1其11111111说来话长111春去秋来11吁111111说11短111眉来眼去11叹11111111111111111111111", "111111111111111匪1静11万死不辞1夷1思11象1可11所1默11更1同1苦思冥想11新1日1口1111111而1婆1111111语重心长111111111111111111111111", "路1多如牛毛1111见1情11手1111不可多得1毛1替11平1义1四脚朝天11拔111111行11刀111111道11相得益彰111111助11111111111111111111111111111", "思11不分胜负111如虎添翼111111泉11而111111涌1一飞冲天1海1111诺11衣1底1111千11无1捞1111金1见缝插针11111111111111111111111111111111"
    ],

    ichoice:0,
    level_ans: '', //答案
    level_init: '', //初始答案
    level_finish: '', //最终答案
    level: 1, //关卡
    dlevel: 0,
    background_color: [], //按钮颜色
    array: [], //数组
    cur_select: '', //当前下标F
    get_ansData: [],
    time_out: 100,
    timer: '',
    judge: 0,


    EMPTY_BG: "#8E8E8E",    //空颜色
    NOR_BG: "#ffffff",    //选项颜色
    SEL_BG: "#893f00",    //选择颜色
    SUC_BG: "#00FF00",    //正确颜色

  },

  Voiceplay: function () {
    this.data.innerAudioContext.seek(0)
    this.data.innerAudioContext.play()
  },

  time_out_fun: function () {
    if (this.data.time_out > 0) {
      this.data.time_out = this.data.time_out - 1
      // console.log(this.data.time_out)
      this.setData({
        now_time: this.data.time_out
      })
    } else {
      clearInterval(this.data.timer)
      if (this.data.judge == 0) {
        this.time_end()
        this.data.innerAudioContext.src = '/media/wrong.mp3'    //超时音频导入
        this.Voiceplay()
        console.log("结束")
      }

    }
  },

  time_end: function () {
    var that = this
    wx.showModal({
      confirmText: '重新开始',
      cancelText: '返回',
      title: '时间到！',
      content: '很遗憾你闯关失败！！！',
      success(res) {
        if (res.confirm) {
          console.log('用户点击下一关')
          wx.redirectTo({
            url: '/pages/index/index?pointid=' + (that.data.level)
          })
        } else if (res.cancel) {
          console.log('用户点击返回')
          wx.redirectTo({
            url: '/pages/main/main'
          })
        }
      }
    })
  },

  getWordData: function () {
    var that = this
    wx.request({
      url: 'http://127.0.0.1:8001/get_word/',
      method: 'POST',
      data: {
        W_level: (that.data.level + 1)
      },
      header: {
        'content-type': "application/json"
      },
      success: function (res) {
        console.log(res.data.res_video[0])
        that.data.get_ansData = res.data.res_video[0]   //取回的数据字典
        console.log(that.data.get_ansData['W_ans'])
        console.log(that.data.get_ansData['W_init'])
        console.log(that.data.get_ansData['W_finish'])

        that.data.level_ans = that.data.get_ansData['W_ans']
        that.data.level_init = that.data.get_ansData['W_init']
        that.data.level_finish = that.data.get_ansData['W_finish']

        //设置颜色
        that.setdata()
        that.setcolor()
        var now_level_ans = []
        for (var i = 0; i < that.data.level_ans.length; i++) {
          now_level_ans[i] = that.data.level_ans[i]
        }
        now_level_ans = now_level_ans.sort(that.randomSort)   //打乱答案顺序
        console.log('now_level_ans')
        console.log(now_level_ans)
        that.setData({
          array: that.data.array,
          ans_array: now_level_ans,
          array_url: that.data.background_color,
        })
        that.data.now_level_ans = now_level_ans.join('') //合并
        that.data.level_ans = that.data.now_level_ans
      },
      fail: function (error) {
        console.log(error)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.data.level = parseInt(options.pointid)
    console.log("测试测试测试测试测试测试22222")
    console.log(this.data.level)
    var now_num1 = wx.getStorageSync('now_num1')
    this.data.ichoice = wx.getStorageSync('judge')
    if (this.data.ichoice==1){
      if (isNaN(this.data.level)) {
        var now_num1 = wx.getStorageSync('now_num1')
        this.data.level = now_num1
      }
    }
    if (this.data.ichoice == 2) {
      if (isNaN(this.data.level)) {
        var now_num2 = wx.getStorageSync('now_num2')
        this.data.level = now_num2
      }
    }
    if (this.data.ichoice == 3) {
      if (isNaN(this.data.level)) {
        var now_num3 = wx.getStorageSync('now_num3')
        this.data.level = now_num3
      }
    }
    this.setData({
      dlevel: this.data.level + 1,
    })
    this.data.innerAudioContext = wx.createInnerAudioContext()
    this.data.judge = 0
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  setcolor: function () { //渲染颜色
    var flag = 0
    console.log('setcolor')
    for (var i = 0; i < this.data.level_init.length; i++) {
      if (this.data.level_init[i] == '1') {
        this.data.background_color[i] = '#8E8E8E'
      } else if (flag == 0 && this.data.level_init[i] == '2' && this.data.array[i] == '') {
        flag = 1
        this.data.background_color[i] = '#893f00'
        this.data.cur_select = i
      } else {
        this.data.background_color[i] = '#ffffff'
      }
    }

    this.setData({
      array_url: this.data.background_color
    })
  },

  setdata() { //数据处理
    for (var i = 0; i < this.data.level_init.length; i++) {
      if (this.data.level_init[i] == '1' || this.data.level_init[i] == '2') {
        this.data.array[i] = ''
      } else {
        this.data.array[i] = this.data.level_init[i]
      }
    }
  },

  clickItem: function (event) {
    var select = event.target.dataset.item //用于激活，表示下标
    console.log('clickItem')
    console.log(select)
    if (select != this.data.cur_select) {
      if (this.data.background_color[select] == this.data.SUC_BG) { } else {
        if (this.data.array[select] == '' && this.data.level_init[select] == '2') {
          this.data.background_color[select] = '#893f00'
          this.data.background_color[this.data.cur_select] = '#ffffff'
          this.data.cur_select = select
          console.log(this.data.cur_select)
        }
        if (this.data.array[select] != '' && this.data.level_init[select] == '2') {
          var level_ans = this.data.level_ans.split('') //操作为数组
          level_ans.push(this.data.array[select])
          this.data.level_ans = level_ans.join('') //合并
          this.data.array[select] = ''
          this.data.background_color[select] = '#893f00'
          if (this.data.background_color[this.data.cur_select] != this.data.SUC_BG) {
            this.data.background_color[this.data.cur_select] = '#ffffff'
          }
          this.data.cur_select = select
        }

        if (this.data.level_ans.length == 0) {
          var level_ans = this.data.level_ans.split('') //操作为数组
          level_ans.push(this.data.array[select])
          this.data.level_ans = level_ans.join('') //合并
          this.data.array[select] = ''
          this.data.background_color[select] = '#893f00'
          this.data.cur_select = select
        }
      }
    }


    this.setData({
      array: this.data.array,
      array_url: this.data.background_color,
      ans_array: this.data.level_ans
    })
  },

  //随机排序函数
  randomSort: function (a, b) {
    return Math.random() > 0.5 ? -1 : 1;
  },

  clickAns: function (event) {     //答案点击
    var select = parseInt(event.target.dataset.item) //选择的下标
    console.log('select')
    console.log(select)
    var level_ans = this.data.level_ans.split('') //操作为数组
    console.log('level_ans')
    console.log(level_ans)
    var cur_select = level_ans.splice(select, 1) //删除改下标值并返回
    this.data.level_ans = level_ans.join('') //合并
    console.log('cur_select1111')
    console.log(cur_select)
    var re_select = this.data.cur_select //用于下面判断正确函数的前一个下标
    console.log('re_select')
    console.log(re_select)

    this.setData({
      ans_array: this.data.level_ans
    })
    console.log('curslecet2222')
    console.log(this.data.array[this.data.cur_select])
    this.data.array[this.data.cur_select] = cur_select[0] //替换之前的数组元素
    console.log('this.data.array[this.data.cur_select]')
    console.log(this.data.array[this.data.cur_select])
    this.data.background_color[this.data.cur_select] = '#ffffff' //更换颜色

    this.setData({
      array_url: this.data.background_color,
      array: this.data.array
    })

    this.next_ans(re_select) //下一方格
    this.ans_correct(re_select) //判断答案正确与否

    if (this.data.level_ans.length == 0) {
      var now_array = []
      for (var i = 0; i < this.data.array.length; i++) {
        if (this.data.array[i] == '') {
          now_array[i] = 1
        } else {
          now_array[i] = this.data.array[i]
        }
      }
      console.log('now_array')
      console.log(now_array)
      if (now_array.join('') == this.data.level_finish) {
        clearInterval(this.data.timer)
        this.data.judge = 1
        console.log('当前关卡放进缓存')
        console.log(this.data.level)
        console.log(this.data.ichoice)
        if (this.data.ichoice==1){
          var now_num1 = this.data.level+1
          var x=wx.getStorageSync('now_num1')
          if(now_num1>x){
            wx.setStorageSync('now_num1', now_num1);     //当前关卡放进缓存
            var nickName2 = wx.getStorageSync('name')
            wx.request({
              url: 'http://127.0.0.1:8001/rank/',

              method: 'POST',
              data: {
                nickName: nickName2,
                level: now_num1+1,
                role: 1,
              },
              success: function (res) {

              },
              fail: function (error) {

              }
            })
          }
        

          var getStorage1 = wx.getStorageSync('Storage1')   //解锁关卡
          getStorage1[String(now_num1 + 1)] = true
          wx.setStorageSync('Storage1', getStorage1)
        }
        if (this.data.ichoice == 2) {
          var now_num2 = this.data.level+1
          var y = wx.getStorageSync('now_num2')
          if (now_num2>y){
            wx.setStorageSync('now_num2', now_num2);     //当前关卡放进缓存
            var nickName2 = wx.getStorageSync('name')
            wx.request({
              url: 'http://127.0.0.1:8001/rank/',

              method: 'POST',
              data: {
                nickName: nickName2,
                level: now_num2+1,
                role: 1,
              },
              success: function (res) {

              },
              fail: function (error) {

              }
            })
          }
          var getStorage2 = wx.getStorageSync('Storage2')   //解锁关卡
          getStorage2[String(now_num2 + 1)] = true
          wx.setStorageSync('Storage2', getStorage2)
        }
        if (this.data.ichoice == 3) {
          var now_num3 = this.data.level +1
          var z = wx.getStorageSync('now_num3')
          if (now_num3>z){
            wx.setStorageSync('now_num3', now_num3);     //当前关卡放进缓存
            var nickName2 = wx.getStorageSync('name')
            
            wx.request({
              url: 'http://127.0.0.1:8001/rank/',

              method: 'POST',
              data: {
                nickName: nickName2,
                level: now_num3+1,
                role: 1,
              },
              success: function (res) {

              },
              fail: function (error) {

              }
            })
          }

          var getStorage3 = wx.getStorageSync('Storage3')   //解锁关卡
          getStorage3[String(now_num3 + 1)] = true
          wx.setStorageSync('Storage3', getStorage3)
        }
        console.log("SSSSSSBBBBBBBB")
        this.data.innerAudioContext.src = '/media/win.mp3'    //闯关成功音频导入
        this.Voiceplay()
        console.log("结束")
        
        var that = this
        wx.showModal({
          confirmText: '下一关',
          cancelText: '返回',
          title: '闯关成功！',
          content: '恭喜你闯关成功！！',
          success(res) {
            if (res.confirm) {
              console.log('用户点击下一关')
              
              wx.redirectTo({
                url: '/pages/index/index?pointid=' + (that.data.level + 1)
              })

            } else if (res.cancel) {
              console.log('用户点击返回')
              wx.redirectTo({
                url: '/pages/main/main'
              })
            }
          }
        })
      } else {
        console.log('shibai jixu ')
      }
    }

  },

  next_ans: function (re_select) {
    var finish_ans = this.data.level_finish.split('')
    console.log('finish_ans')
    console.log(finish_ans)
    var now_ans = this.data.array
    console.log('now_ans')
    console.log(now_ans)
    var now_n = re_select //从之前的当前位置开始 左下标
    var now_m = re_select //从之前的当前位置开始 右下标

    now_n = this.toLeft(finish_ans, now_n)
    now_m = this.toRight(finish_ans, now_m)
    var flag = 0

    if (now_m - now_n == 4) {
      console.log('横向判断')
      flag = this.juge_next(flag, now_n, now_m, now_ans) //横向扫描不成功返回0
    }

    if (flag == 0) {
      console.log('横向判断不成功纵向判断')
      now_n = re_select //从之前的当前位置开始 左下标
      now_m = re_select //从之前的当前位置开始 右下标
      now_n = this.toTop(finish_ans, now_n)
      now_m = this.toBottom(finish_ans, now_m) //继续纵向扫描

      if (now_m - now_n == 40) {
        for (var i = now_n; i < now_m; i = i + 10) {
          if (now_ans[i] == '') {
            this.data.background_color[i] = '#893f00'
            this.data.cur_select = i
            flag = 1
            console.log('下一个坐标，纵向向判断成功咯')
            break
          }
        }
      }
    }
    if (flag == 0) { //横向纵向都没有就从头
      console.log('横向纵向判断不成功，从头判断')
      for (var i = 0; i < this.data.array.length; i++) {
        if (this.data.level_init[i] == '2' && this.data.array[i] == '') {
          this.data.background_color[i] = '#893f00'
          this.data.cur_select = i
          console.log('下一个坐标，横向纵向判断成功咯')
          break
        }
      }
    }
    this.setData({
      array_url: this.data.background_color
    })
  },

  juge_next: function (flag, now_n, now_m, now_ans) {
    if (flag == 0) {
      for (var i = now_n; i < now_m; i++) {
        if (now_ans[i] == '') {
          this.data.background_color[i] = '#893f00'
          this.data.cur_select = i
          flag = 1
          console.log('下一个坐标，横向判断成功咯')
          break
        }
      }
    }
    return flag
  },

  ans_correct: function (re_select) {

    this.toRow(re_select)
    this.toColum(re_select)
  },

  correctColor: function (a, now_n, now_m) { //a = 1 表示横向，， 2表示纵向
    if (a == 1) {
      for (var i = now_n; i < now_m; i++) {
        this.data.background_color[i] = this.data.SUC_BG
      }
    } else {
      this.data.background_color[now_n] = this.data.SUC_BG
      this.data.background_color[now_n + 10] = this.data.SUC_BG
      this.data.background_color[now_n + 20] = this.data.SUC_BG
      this.data.background_color[now_n + 30] = this.data.SUC_BG
    }

    this.data.background_color = this.data.background_color

    this.setData({
      array_url: this.data.background_color
    })

  },

  toRow: function (re_select) { //横向方向判断
    var finish_ans = this.data.level_finish.split('')
    var now_ans = this.data.array
    var now_n = re_select //从之前的当前位置开始 左下标
    var now_m = re_select //从之前的当前位置开始 右下标

    //筛选出向左的连贯四字
    console.log('//筛选出向左的连贯四字')
    console.log('finish_ans')
    console.log(finish_ans)
    console.log('now_ans')
    console.log(now_ans)
    console.log('****************88')
    console.log(re_select)
    console.log(re_select % 10)
    console.log('****************88')

    now_n = this.toLeft(finish_ans, now_n)
    var now_n_n = now_n
    console.log("now_n_n")
    console.log(now_n_n)
    now_m = this.toRight(finish_ans, now_m)
    var now_m_m = now_m
    console.log("now_m_m")
    console.log(now_m_m)
    var sit_n = (now_n) % 10
    var sit_m = (now_m) % 10
    if (sit_m == 0) {
      sit_m = 10
    }
    console.log("sit_n")
    console.log(sit_n)
    console.log("sit_m")
    console.log(sit_m)

    if (sit_m - sit_n == 4) { //会有特殊情况所以这么判断
      var a = finish_ans.slice(now_n_n, now_m)
      console.log('a')
      console.log(a)
      var b = now_ans.slice(now_n_n, now_m)
      console.log('b')
      console.log(b)
      if (a.toString() == b.toString()) {
        console.log(' 横向扫描成功')
        //变色
        this.correctColor(1, now_n_n, now_m_m)
      }
    } else if (sit_m - sit_n > 4) {
      var a = finish_ans.slice(now_n_n, now_n_n + 4)
      console.log('a')
      console.log(a)
      var b = now_ans.slice(now_n_n, now_n_n + 4)
      console.log('b')
      console.log(b)

      var c = finish_ans.slice(now_m - 4, now_m)
      console.log('c')
      console.log(c)
      var d = now_ans.slice(now_m - 4, now_m)
      console.log('d')
      console.log(d)

      if (a.toString() == b.toString()) {
        console.log(' 横向扫描成功')
        //变色
        this.correctColor(1, now_n_n, now_n_n + 4)
      }
      if (c.toString() == d.toString()) {
        console.log(' 横向扫描成功2')
        //变色
        this.correctColor(1, now_m_m - 4, now_m_m)
      }

    }
  },


  toColum: function (re_select) { //纵向方向判断
    var ans = []
    var cur_ans = []
    var ans1 = []
    var cur_ans1 = []
    var ans2 = []
    var cur_ans2 = []
    var finish_ans = this.data.level_finish.split('')
    var now_ans = this.data.array
    var now_n = re_select //从之前的当前位置开始 上下标
    var now_m = re_select //从之前的当前位置开始 下下标

    now_n = this.toTop(finish_ans, now_n)
    now_m = this.toBottom(finish_ans, now_m)
    var now_n_n = now_n
    var now_m_m = now_m
    var sit_n = parseInt((now_n) / 10)
    var sit_m = parseInt((now_m) / 10)

    console.log("$$$$$$$$$$$$$$$$$$$$$")
    console.log(sit_n)
    console.log(sit_m)
    console.log(now_n)
    console.log(now_m)

    if (sit_m - sit_n == 4) {
      ans[0] = finish_ans[now_n + 0]
      ans[1] = finish_ans[now_n + 10]
      ans[2] = finish_ans[now_n + 20]
      ans[3] = finish_ans[now_n + 30]

      cur_ans[0] = now_ans[now_n + 0]
      cur_ans[1] = now_ans[now_n + 10]
      cur_ans[2] = now_ans[now_n + 20]
      cur_ans[3] = now_ans[now_n + 30]

      console.log(ans)
      console.log(cur_ans)
      if (ans.toString() == cur_ans.toString()) {
        console.log('纵向扫描成功')
        this.correctColor(2, now_n, now_m)

      }
    } else if (sit_m - sit_n > 4) {
      ans1[0] = finish_ans[now_n + 0]
      ans1[1] = finish_ans[now_n + 10]
      ans1[2] = finish_ans[now_n + 20]
      ans1[3] = finish_ans[now_n + 30]

      cur_ans1[0] = now_ans[now_n + 0]
      cur_ans1[1] = now_ans[now_n + 10]
      cur_ans1[2] = now_ans[now_n + 20]
      cur_ans1[3] = now_ans[now_n + 30]

      console.log(ans1)
      console.log(cur_ans1)
      ans2[0] = finish_ans[now_m - 10]
      ans2[1] = finish_ans[now_m - 20]
      ans2[2] = finish_ans[now_m - 30]
      ans2[3] = finish_ans[now_m - 40]

      cur_ans2[0] = now_ans[now_m - 10]
      cur_ans2[1] = now_ans[now_m - 20]
      cur_ans2[2] = now_ans[now_m - 30]
      cur_ans2[3] = now_ans[now_m - 40]

      console.log(ans2)
      console.log(cur_ans2)
      if (ans1.toString() == cur_ans1.toString()) {
        console.log('纵向扫描成功1')
        this.correctColor(2, now_n, now_n + 30)

      }
      if (ans2.toString() == cur_ans2.toString()) {
        console.log('纵向扫描成功2')
        this.correctColor(2, now_m - 40, now_m)

      }

    }

  },

  toTop: function (finish_ans, now_n) {
    now_n = parseInt(now_n)
    console.log('now_n888888')
    console.log(now_n)
    var flag_n = 1
    while (flag_n) { //向上查找
      if (finish_ans[now_n] != 1 && now_n >= 0) {
        now_n = now_n - 10
      } else {
        flag_n = 0
      }
    }
    console.log('当前下标')
    console.log(now_n)

    return now_n + 10
  },

  toBottom: function (finish_ans, now_m) {
    now_m = parseInt(now_m)
    console.log("111111")
    console.log(now_m)
    var flag_m = 1
    while (flag_m) { //向下查找
      if (finish_ans[now_m] != 1) {
        console.log('finish_ans[now_m]')
        console.log(finish_ans[now_m])
        if ((now_m / 10) < 9) {
          now_m = parseInt(now_m + 10)
        } else {
          now_m = parseInt(now_m + 10)
          flag_m = 0
        }

      } else {
        flag_m = 0
      }
    }
    console.log('当前右下标')
    console.log(now_m)
    return now_m
  },

  toLeft: function (finish_ans, now_n) {
    now_n = parseInt(now_n)
    var flag_n = 1
    while (flag_n) { //向左查找
      if (finish_ans[now_n] != 1) {
        if ((now_n % 10) > 0) {
          now_n = parseInt(now_n - 1)
          // console.log('1234567890')
        } else {
          now_n = parseInt(now_n - 1)
          flag_n = 0
        }

      } else {
        flag_n = 0
      }
    }
    console.log('当前左下标')
    console.log(now_n)


    return now_n + 1
  },

  toRight: function (finish_ans, now_m) {
    var flag_m = 1
    now_m = parseInt(now_m)

    while (flag_m) { //向右查找
      if (finish_ans[now_m] != 1) {
        if ((now_m % 10) < 9) {
          now_m = parseInt(now_m + 1)
        } else {
          now_m = parseInt(now_m + 1)
          flag_m = 0
        }

      } else {
        flag_m = 0
      }
    }

    console.log('当前右下标')
    console.log(now_m)
    return now_m
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getWordData()

    this.data.timer = setInterval(this.time_out_fun, 1000)

    // this.data.level_ans = this.data.JIELONG_ANS[this.data.level]
    // this.data.level_init = this.data.JIELONG_INIT[this.data.level]
    // this.data.level_finish = this.data.JIELONG_FINISH[this.data.level]

    // //设置颜色
    // this.setdata()
    // this.setcolor()


    // this.setData({
    //   array: this.data.array,
    //   ans_array: this.data.level_ans,
    //   array_url: this.data.background_color,
    // })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    clearInterval(this.data.timer)
    this.data.innerAudioContext.destroy()
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})

