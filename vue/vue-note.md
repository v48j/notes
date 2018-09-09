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
Vue.use(VueRouter)

const routes = [
  { path: "/", component: Home },
  { path: "/post/:id", component: Post }
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
        <router-link :to="`/post/${ele.id}`" >{{ele.title}}</router-link>
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
