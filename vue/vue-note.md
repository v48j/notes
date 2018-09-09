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
