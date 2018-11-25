# 微信小程序

## 各文件作用

- app.js:存放全局所需要的变量数据，类似于vue的store
- app.json:全局配置
- utils/util.js:可以将一些公共的代码抽离成为一个单独的 js (utils.js)文件，作为一个模块; 模块只有通过 module.exports 或者 exports 才能对外暴露接口。 
- static/:公共静态文件，如共有的css或者图片

### utils.js 公共方法
```js
const aaa=()=>{
  console.log(1)
}

module.exports={
  aaa:aaa
  //'对外方法名':'本地方法名'
}
```

引用
```js
var util=require('../../utils/utils.js')
Page({
  data:[],
  onLoad:function(){
    util.aaa
  }
})
```

### app.json 全局配置

注意文件是json文件！
```json
{
  "pages": [
    "pages/index/index",
    "pages/search/search",
    "pages/thanks/thanks",
    "pages/settings/settings"
  ],
  "window": {
    "backgroundTextStyle": "light",
    "navigationBarBackgroundColor": "#000",
    "navigationBarTitleText": "WeChat",
    "navigationBarTextStyle": "white"
  },
  "tabBar": {
    "backgroundColor": "#000",
    "list": [
      {
        "pagePath": "pages/index/index",
        "text": "首页",
        "iconPath": "./static/images/home1296db.png",
        "selectedIconPath": "./static/images/homee16531.png"
      },

      {
        "pagePath": "pages/search/search",
        "text": "地市选择",
        "iconPath": "./static/images/place1296db.png",
        "selectedIconPath": "./static/images/placee16531.png"
      },
      {
        "pagePath": "pages/thanks/thanks",
        "text": "鸣谢",
        "iconPath": "./static/images/jrit1296db.png",
        "selectedIconPath": "./static/images/jrite16531.png"
      }
    ]
  }
}

```

### 组件

#### 路由跳转

```html
<navigator url="../info/info" open-type="switchTab">跳转到新页面</navigator>
```

小程序页面跳转方式有两种，一种是navigate，另一种是switchTab，注意在open-type中定义

- js中跳转

```js
wx.switchTab({
  url: '/index'
})
//url需要在app.json中声明
```

```js
wx.navigateTo({
  url: 'test?id=1'
})
```

#### 模板

当您的项目需要多次使用同一个布局和样式的时候，您就可以考虑使用template（模板）来减少冗余代码。

使用方式：

1.新建一个template文件夹来存放您的通用模板；

2.在文件夹里面新建一个wxml，wxss,进行模板和样式的定义；

定义：
```html
<template name="img">
  <open-data class="avatar-img" type="userAvatarUrl" animation="{{aniData}}" />
</template>
```
需要给一个name属性方便调用时使用

使用：使用前先引用
```html
<import src="../../template/courseList.wxml">
<template is="img" data="{{aniData}}"></template>
```
is属性指的是name，data属性制定模板内使用的数据

#### 事件

- bindtap 为标签绑定点击事件,点击按钮旋转

```html
<button bindtap="zhuan">转</button>
```

```js
Page({
  data:{
    aniData:{}
  },
  zhuan() {
    this.animation.rotate(360).step().rotate(0).step({ duration: '0' })
    this.setData({
      aniData: this.animation
    })
  }
})

```

#### input表单

- 让input受控

```html
<input class="search" placeholder="请输入地址" bindinput="search" type="text" confirm-type="done" bindconfirm="go" />
```

```js
Page({
  data:{
    input:''
  },
  search(e) {
    this.setData({
      input: e.detail.value
    })
  }
})
```

#### 列表渲染

```html
<view class="suggest-box" wx:for="{{suggestArr}}" wx:key="{{index}}">
  <view>{{item.tipt}}:{{item.zs}}</view>
  <view>{{item.des}}</view>
</view>
```

注意，不同于vue，wx的for写在li上(vue写在ul上)每一项自动是item，索引是index，无需指定。