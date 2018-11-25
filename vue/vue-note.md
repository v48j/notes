# Vue

## Vue 安装

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

## Vue 指令

1. v-text：主要用来更新textContent，可以等同于JS的text属性。

    `<span v-text="msg"></span>`

    这两者等价：

    `<span>{{msg}}</span>`

2. v-html:双大括号的方式会将数据解释为纯文本，而非HTML。为了输出真正的HTML，可以用v-html指令。它等同于JS的innerHtml属性。
  
    `<div v-html="rawHtml"></div>`

这个div的内容将会替换成属性值rawHtml，直接作为HTML进行渲染。

3. v-bind:用来动态的绑定一个或者多个特性。没有参数时，可以绑定到一个包含键值对的对象。常用于动态绑定class和style。以及href等。简写为一个冒号【 ：】

   `<div :class="{'is-active':isActive, 'text-danger':hasError}"></div>`

4. v-model:这个指令用于在表单上创建双向数据绑定。v-model会忽略所有表单元素的value、checked、selected特性的初始值。因为它选择Vue实例数据做为具体的值。

     ```js
    <input v-model="somebody">
    //v-model的修饰符
    <input v-model.lazy="msg">
    //默认情况下，v-model同步输入框的值和数据。可以通过这个修饰符，转变为在change事件再同步。
    <input v-model.number="msg">//自动将用户的输入值转化为数值类型
    <input v-model.trim="msg">//自动过滤用户输入的首尾空格
     ```

5. v-on:v-on主要用来监听dom事件，以便执行一些代码块。表达式可以是一个方法名。简写为：【 @ 】

     ```js
     <button @click="consoleLog"></button>
     //阻止单击事件继续传播
     <a v-on:click.stop="doThis"></a>
     //提交事件不再重载页面
     <form v-on:submit.prevent="onSubmit"></form>
     ```

     事件修饰符

    .stop 阻止事件继续传播

    .prevent 事件不再重载页面

    .capture 使用事件捕获模式,即元素自身触发的事件先在此处处理，然后才交由内部元素进行处理

    .self 只当在 event.target 是当前元素自身时触发处理函数

    .once 事件将只会触发一次

    .passive 告诉浏览器你不想阻止事件的默认行为

6. v-for:用v-for指令根据遍历数组来进行渲染,有下面两种遍历形式

    ```js
    //使用in，index是一个可选参数，表示当前项的索引
    <div v-for="(item,index) in items"></div>   
    //使用of
    <div v-for="item of items"></div>  

    <ul id="app">
        <li v-for="item in items">
            {{parent}}-{{item.text}}
        </li>
    </ul>

    //注意：当v-for和v-if同处于一个节点时，v-for的优先级比v-if更高。这意味着v-if将运行在每个v-for循环中
    ```

7. v-if:可以实现条件渲染，Vue会根据表达式的值的真假条件来渲染元素。

    ```js
    //如果属性值ok为true，则显示。否则，不会渲染这个元素。
    <a v-if="ok">yes</a>
    ```

8. v-else:搭配v-if使用的，它必须紧跟在v-if或者v-else-if后面，否则不起作用。

    ```html
    <a v-if="ok">yes</a>
    <a v-else>No</a>
    ```

9. v-show:也是用于根据条件展示元素。和v-if不同的是，如果v-if的值是false，则这个元素被销毁，不在dom中。但是v-show的元素会始终被渲染并保存在dom中，它只是简单的切换css的dispaly属性。

    ```html
    <h1 v-show="ok">hello world</h1>
    ```

    注意：v-if有更高的切换开销。v-show有更高的初始渲染开销。因此，如果要非常频繁的切换，则使用v-show较好；如果在运行时条件不太可能改变，则v-if较好

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
  { path: "/user", component: User },
  //按需加载，组件不用在用important引入。绝对路径可以在webpack.base.conf中的resolve下的alias配置简写。例如 '@':resolve('src')
  { path: "/mytask", component: resolve=>require(['组件的绝对路径']，resolve)}
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

## Vue 生命周期函数

1.beforeCreate  :实例、组件通过new Vue() 创建出来之后会初始化事件和生命周期，然后就会执行beforeCreate钩子函数，这个时候，数据还没有挂载呢，只是一个空壳，无法访问到数据和真实的dom，一般不做操作。可添加过场载入动画。el 和 data 并未初始化。

2.create        :挂载数据，绑定事件等等，然后执行created函数，这个时候已经可以使用到数据，也可以更改数据,在这里更改数据不会触发updated函数，在这里可以在渲染前倒数第二次更改数据的机会，不会触发其他的钩子函数，一般可以在这里做初始数据的获取。完成了 data 数据的初始化，el没有。

3.beforeMount   :接下来开始找实例或者组件对应的模板，编译模板为虚拟dom放入到render函数中准备渲染，然后执行beforeMount钩子函数，在这个函数中虚拟dom已经创建完成，马上就要渲染,在这里也可以更改数据，不会触发updated，在这里可以在渲染前最后一次更改数据的机会，不会触发其他的钩子函数，一般可以在这里做初始数据的获取。完成了 el 和 data 初始化。

4.mounted       :接下来开始render，渲染出真实dom，然后执行mounted钩子函数，此时，组件已经出现在页面中，数据、真实dom都已经处理好了,事件都已经挂载好了，可以在这里操作真实dom等事情...完成挂载。

5.beforeUpdate  :data中数据发生改变，会重新渲染，调用beforeUpdate。

6.updated       :data中数据发生改变，会重新渲染，调用updated。

7.beforeDestory :钩子函数在实例销毁之前调用。在这一步，实例仍然完全可用。

8.destoryed     :钩子函数在Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。

**总结**

+ beforecreate : 举个栗子：可以在这加个loading事件 

+ created ：在这结束loading，还做一些初始化，实现函数自执行 

+ mounted ： 在这发起后端请求，拿回数据，配合路由钩子做一些事情

+ beforeDestroy： 你确认删除XX吗？ destroyed ：当前组件已被删除，清空相关内容

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

## 元素受控

多用于input。

```js
<input type="checkbox" v-model="boolen">
```
checkbox 的绑定通过 v-model绑定，前面不需要冒号，可以直接写变量，也不用绑定其他方法

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

## Vue 发送请求

### Vue 中使用vue-resource插件发送请求

1.引入

```js
<script src="js/vue.js"></script>
<script src="js/vue-resource.js"></script>
```

2.另一种引入

`npm install vue-resource --save-dev`

main.js中用import引入进来

`import VueResource from 'vue-resource'`

同样，main.js中注册，同vue-router

`Vue.use(VueResource)`

3.直接在对应页面的created钩子函数配置即可

```js
created() {
    this.$http.get("http://jsonplaceholder.typicode.com/todos")
    .then((data) => {
        this.arrs = data.body;
})
```

4.根据拿到的数据结构和内容对应渲染页面中直接渲染使用：

```js
<li v-for="item in arrs" v-on:click="item.completed = ! item.completed">
    <!-- {{item}} -->
    <span class="id">{{item.userId}} </span>
    <span class="title">{{item.title}}</span>
    <span class="completed" v-show="item.completed">选中</span>
</li>
```

5.格式

```js
this.$http.get('/someUrl', [options]).then(successCallback, errorCallback);
this.$http.post('/someUrl', [body], [options]).then(successCallback, errorCallback);
```

then方法的回调函数也有两种写法，第一种是传统的函数写法，第二种是更为简洁的ES 6的Lambda写法：

```js
// 传统写法
this.$http.get('/someUrl', [options]).then(function(response){
  // 响应成功回调
}, function(response){
  // 响应错误回调
});
// Lambda写法
this.$http.get('/someUrl', [options]).then((response) => {
  // 响应成功回调
}, (response) => {
  // 响应错误回调
});
```

vue-resource的请求API是按照REST风格设计的，它提供了7种请求API：

```js
get(url, [options])
head(url, [options])
delete(url, [options])
jsonp(url, [options])
post(url, [body], [options])
put(url, [body], [options])
patch(url, [body], [options])
```

options对象

```js
headers; Object; request header(请求头)
timeout; number; 单位为毫秒的请求超时时间 (0 表示无超时时间)
body; Object, FormData string; request body
```

### 使用axios插件发送请求

1.安装axios

`npm install --save axios`

2. 在入口main.js中导入axios 并将axios写入vue的原型，这样就能更简单的使用。

```js

import axios from 'axios'
import Qs from 'qs'
//QS是axios库中带的，不需要我们再npm安装一个
 
Vue.prototype.axios = axios;
Vue.prototype.qs = Qs;
```

3.在项目里愉快的使用axios

```js
this.axios.post('/api/test',this.qs.stringify({'name':'xiaoming','sex':'nan'}),{
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
          .then(function(res){
            console.log(res.data)
               //bind(this)可以不用
          }.bind(this))
          .catch(function(err){
            if(err.response) {
              console.log(err.response)
            }
                //bind(this)可以不用
          }.bind(this))
```

4.进阶，手动配置axios

在项目中新建api/index.js文件，用以配置axios

api/index.js

```js
import axios from 'axios';

let http = axios.create({
  baseURL: 'http://localhost:8080/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  },
  transformRequest: [function (data) {
    let newData = '';
    for (let k in data) {
      if (data.hasOwnProperty(k) === true) {
        newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&';
      }
    }
    return newData;
  }]
});

function apiAxios(method, url, params, response) {
  http({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
  }).then(function (res) {
    response(res);
  }).catch(function (err) {
    response(err);
  })
}

export default {
  get: function (url, params, response) {
    return apiAxios('GET', url, params, response)
  },
  post: function (url, params, response) {
    return apiAxios('POST', url, params, response)
  },
  put: function (url, params, response) {
    return apiAxios('PUT', url, params, response)
  },
  delete: function (url, params, response) {
    return apiAxios('DELETE', url, params, response)
  }
}
```

这里的配置了POST、GET、PUT、DELETE方法。并且自动将JSON格式数据转为URL拼接的方式

同时配置了跨域，不需要的话将withCredentials设置为false即可

并且设置了默认头部地址为：http://localhost:8080/，这样调用的时候只需写访问方法即可

5.使用配置后的axios

首先在main.js中引入方法

```js
import Api from './api/index.js';
Vue.prototype.$api = Api;
```

然后在需要的地方调用即可

```js
this.$api.post('user/login.do(地址)', {
    "参数名": "参数值"
}, response => {
     if (response.status >= 200 && response.status < 300) {
        console.log(response.data);\\请求成功，response为成功信息参数
     } else {
        console.log(response.message);\\请求失败，response为失败信息
     }
});
```


## better scroll(vue移动端滚轮插件)

