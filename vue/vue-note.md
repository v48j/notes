# Vue

## Vue 指令

npm i -g @vue/cli 安装
vue create vue-hello 创建
npm run serve 启动服务，在 localhost:8080 下查看网页

## Vue 格式

```js
<template>
  <div id="app">
    <span @click="" :class="active:isActive" style="{fontSize:15+'px'}">app</span>
    <Home/>
  </div>
</template>

<style>
#id{
  color:red
}
.active{
  color:green
}
</style>

<script>
import Home from "./components/Home"
export default{
  name:"app",
  props:["xxx","xxx"]
  components:{Home,xxx,xxx},
  computed:{getTotal(){return this.pen.map(...)}},
  data:()=>({pen:0,type:"all",isActive}),
  methods:{change:function(){xxx},click:function(){xxx}},
  mounted:{},
  destrioyed{}
}
</script>
//注意文件后缀名是.vue
```

## Vue 路由

### 安装依赖项

`npm install vue-router`

### 新建所需文件

在 src 下新建文件夹 router，下面新建文件 index.js

```js
import VueRouter from "vue-router"
import Vue from "vue"
import Home from "../components/Home"
import Post from "../components/Post"
import ShowList from "../components/ShowList"
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: Home,
    children: [
      { path: "/", component: ShowList },
      { path: "welcome/:tab", name: "ShowList", component: ShowList }
    ]
  },
  { path: "*", redirect: "/404" },
  { path: "/pins", component: Pins },
  { path: "/events", component: Events },
  { path: "/404", component: Error1 },
  { path: "/user", component: User }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
```

### 配置 main

main 文件改动

```js
import Vue from "vue"
import App from "./App.vue"
import "./assets/global.css"
import router from "./router"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount("#app")
```

### 展示路由

例如，在 App 组件中展示

```js
<template>
  <div>
    <router-view></router-view>
  </div>

</template>
<script>
import Post from "./components/Post"
import Home from "./components/Home"
export default {
  name: "app",
  components: {
    Post,
    Home
  }
}
</script>
```

### 组件路由

```js
<template>
  <div class="topics-list">
    <ul>
      <li v-for='ele in posts' :key="ele.id">
        <router-link :to="`/post/${ele.id}`" active-class="class">{{this.$route.params.tab}}</router-link>
      </li>
      <li>
          <router-link :to="{name:'ShowList',params:{tab:'frontend'}}" active-class="active1">前端</router-link>
        </li>
    </ul>
  </div>
</template>

export default {
  name: "home",
  data: () => ({
    posts: []
  })
}
</script>


<style>
.class{
  color:red;
}
</style>
```

### 返回历史与跳转

```js
<template>
  <div>
    user
    <button @click="$router.back()">返回</button>
    <button @click="go">首页</button>
  </div>
</template>

<script>
export default {
  name: "user",
  methods: {
    go: function() {
      this.$router.push("/")
    }
  }
}
</script>
```

**push 里面有三个参数 router.push(location, onComplete?, onAbort?) 其中第一个是地址，可以用字符串的方式填写路径或者组件名，第二个和第三个这些回调将会在导航成功完成 (在所有的异步钩子被解析之后) 或终止 (导航到相同的路由、或在当前导航完成之前导航到另一个不同的路由) 的时候进行相应的调用**

## 绑定事件，调用数据注意事项

在组件的 templete 中，在标签中绑定事件，调用 data 数据，直接写名字，函数不用写括号，也不要写 this。直接写需要数据的名字！函数中不可以写 this，this 指向不对，例如@click 中不可以写 this。**因此在 templete 中不要写 this，在 script 中普通函数中写 this**

### 滚动条事件

注意，函数的节流和防抖。减少函数出发次数

```js
<script>
import ShowList from "./ShowList"
export default {
  name: "main1",
  mounted() {
    window.onscroll = function() {
      console.log(1)
    }
  }
}
</script>
```

## Vue 过渡动画

```js
<template>
  <div class="comment">
    <transition-group name="list" tag="ul" v-else>
      <li v-for="ele in comments" key="id">
        <span>内容</span>
      </li>
    </transition-group>
  </div>
</template>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.75s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
```

使用时，如果是多个，用 transition-group 包裹，单个用 transition 包裹
里面的 name 属性规定前缀，tag 属性规定标签代表什么
下面的 style 中根据前缀写样式
active 表示动画过程中
enter 表示 出现
leave 表示 消失
to 表示 结束
什么都没有表示 开始，初始状态

## Vuex

- 安装

`npm install vuex --save`

- 创建相关文件

### modules/模块文件名.js

在 src 下新建文件夹 modules 放置模块

src/modules/模块文件名(goods.js)

```js
import axios from "axios"

const state = {
  goods: []
}

const mutations = {
  getGoods(state, newGoods) {
    state.goods.push(...newGoods)
  }
}

const actions = {
  getGoods({ commit }，{id，参数2}) {
    const uri = `http://localhost:3008/goods${id}`
    axios.get(uri).then(res => {
      commit("getGoods", res.data)
    })
  }
}

const getters = {
  goodsNameList(state) {
    return state.goods.map(ele => ele.name)
  },
  functionname(state){
    return function(id){
      //函数内容
    }
  }
}

const goods = {
  state,
  mutations,
  actions,
  getters
}

export default goods
```

一个模块文件，包含
state，
mutations（存放修改 state 的方法，默认接受参数 state），
actions（存放负责发送异步请求函数，并调用 mutations 下函数，函数默认接收参数 context，通常使用{commit}用于调用 mutations 同名函数），
getters（计算衍生数据，方便组件使用，还可以接收参数。默认接受参数 state。**注意：要有返回值，接受参数时返回值是一个函数，在函数里写参数**）

流程：组件通过发送 dispatch 触发 actions， actions 负责发送 axios 请求，请求成功后，通过 commit 执行 mutation 中的同名的函数，这个同名函数负责修改 state 中的数据。getters 的作用是返回一个衍生数据，不同于 computed，它可以接受参数。将他们整合在一起，通过 export 暴露出来，需要的地方使用。

**commit 执行同名文件，commit 是自带的，不需要引入，本文件只需要引入 axios 即可**

### 创建 store/index.js

在 src 下新建文件夹 store，里面有 index.js

模块化创建

src/store/index.js

```js
import Vuex from "vuex"
import Vue from "vue"
import number from "../modules/number"
import count from "../modules/count"
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    count,
    number
  }
})

export default store
```

store 是创建好之后的 store

### 在 main.js 中引入并使用

```js
import Vue from "vue"
import App from "./App.vue"
import "./assets/global.css"
import store from "./store/index"
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount("#app")
```

### components 使用、修改 store 中的数据

```html
<template>
  <div id="app">
    <button @click="$store.state.count--">-</button>
    <span>{{$store.state.count.count}}</span>
    <button @click="$store.commit('increment')">+</button>
  </div>
</template>

<script>
import Home from "./components/Home"
export default {
  name: "app",
  components: { Home },
  mounted() {
    this.$store.dispatch("getGoods"，{id，参数2})//触发action下函数
    this.$store.getters.functionname(param1,param2)//触发getters下函数
    this.$store.commit("addToCart", 参数1，参数2)//触发mutations下函数
  }
}
</script>
```

初始化时发送 dispatch 去触发 actions 下的 getGoods 来获得数据存储到 store 中，然后展示在页面中，由于异步请求，因此展示的东西可能不存在或者报错，因此注意使用 v-show 或者 v-if，v-else 展示

- **在非模块化中**在任意组件内部可以使用`this.$store.state`可以访问数据.**在模块化组件中**，使用`this.$store.模块名.数据名`访问，可以使用`this.$store.commit('mutation 内的函数名')`触发 mutation 从而修改 store

## Vue 中使用 sass

- 安装包

`npm i node-sass sass-loader`

- 创建文件

在 assets 下新建文件 style.scss

- 在组件中使用

```css
<style lang="scss">
@import "./assets/style.scss";
.type {
  border: 1px solid #ccc;
}
</style>
```

## better scroll
