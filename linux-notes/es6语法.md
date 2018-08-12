### es6 Modules 模块

- 模块的导出方式 命名导出 和 默认导出

  1.命名导出:可以随意使用

  ```js
  const  a = 10
  export {a}   ||   export {a,b,c}  || export const a = 10
  ```

  2.默认导出：只能用一次，不能多次使用

  ```js
  const a = 10
  export default a
  ```

- 模块的导入方式 命名导入 和 默认导入

  1.命名导入： 导出什么名必须导入什么名 as 可以修改

  ```js
  import {a} from './xxx.js'  || import {a as xx} from './xxx.js'
  ```

  2.默认导入： 只能使用一次默认导出

  ```js
  import xx from "./xxx.js"
  ```

改名，用 as
不上传 git ignore?

---

axios 底层是使用 promise 实现
promise
安装 axios npm i axios
导入第三方包 import axios from 'axios'
发送请求

```js
import axios from "axios"
axios
  .get("接口 https://jsonplaceholder.typicode.com/posts")
  .then(res => {
    console.log(res.data)
  })
  .catch(err => {
    console.log(err)
  })
```

axios 是 promise 的一个实例

```js
let thing = new Promise(function(resolve, reject) {
  console.log("running")
  //放一个异步操作
  setTimeout(function() {
    resolve() //必须调用resolve，下面的then才会生效，同样，必须调用reject，下面的catch才能生效
  }, 3000)
})
//事情执行完，再执行这个函数
thing.then(function() {
  console.log("thing.then()...")
})
//事情执行失败，执行这个函数
thing.catch(function() {
  console.log("thing.catch()...")
})
```

Promise 里面先放一个异步操作，接受两个参数，两个参数是两个函数。异步操作执行完执行 resolve，异步操作出问题执行 reject
then 可以写成链式 thing.then().then()
Promise 里的异步操作中，必须分别调用 resolve()和 reject()，下面的 then 和 reject 才会生效

promise.all() 处理多个请求成功之后要做某件事
promise.all([p1,p2,p3]) 函数内部放入一个数组，数组内容放数据请求

```js
let p1 = axios.get("https://jsonplaceholder.typicode.com/posts")
let p2 = axios.get("https://jsonplaceholder.typicode.com/posts/1")
let promise = Promise.all([p1, p2])
promise.then(function(res) {
  console.log(res)
})
```

### 函数的语法糖 箭头函数

1.箭头函数简化了函数的定义

2.箭头函数内部this的指向发生了改变

语法   var function name = (a,b,c) => {dosomething;return sth}

有些时候，可以写成匿名函数的形式，没有名字，立刻调用(a=>a*a)

- 函数的参数个数是一个的话 小括号可以省略
- 箭头右侧直接写表达式意思是返回值
- 如果右侧想要写执行语句的话需要用大括号，但是就不能直接作为返回值了，需要使用return写返回值
- 函数体内的this对象，就是定义时所在的对象，而不是调用时所在的对象

#### 写法

例如 旧写法：
```js
function funcName(params) {
return params + 2;
}
funcName(2);
// 4
```

箭头函数写法：

```js
var funcName = params => params + 2
funcName(2);
// 4
```

一些实例

```js
// 两个参数:
(x, y) => x * x + y * y

// 无参数:
() => 3.14

// 可变参数:
(x, y, ...rest) => {
    var i, sum = x + y;
    for (i=0; i<rest.length; i++) {
        sum += rest[i];
    }
    return sum;
}
```

#### 箭头函数的 this 指向

通常函数中的 this 指向的是，谁调用这个函数 this 就指向谁。

箭头函数中的 this 指向的是，根据词法作用域在定义的时候就绑定好指向，这个箭头函数属于哪个对象，this就指向那个对象

例如：

```js
var obj = {
    birth: 1990,
    getAge: function () {
        var b = this.birth; // 1990
        var fn = () => new Date().getFullYear() - this.birth; // this指向obj对象
        return fn();
    }
};
obj.getAge(); // 25
```

对比，非箭头函数：

```js
var obj = {
    birth: 1990,
    getAge: function () {
        var b = this.birth; // 1990
        var fn = function () {
            return new Date().getFullYear() - this.birth; // this指向window或undefined
        };
        return fn();
    }
};
```

#### 函数的剩余参数

 ...rest(必须写在最后面) 代表的是剩下的实参组成的数组

 ```js
 function test(a, b, c, ...rest) {
   console.log(rest)
 }
 test(1, 2, 3)
```

**注**

如果箭头函数返回值是一个对象，那么会与语法()=>{}产生冲突 这时候要在对象返回值加一个括号()=>({对象})

---

数组的方法
filter 筛选多个 find 查找一个 findIndex 查找一个索引 map 映射 reduce(函数，最终结果初始值) 函数内的第一个参数是最终结果，第二项是数组的每一项，函数的返回值也是最终结果，reduce 函数的返回值就是内部函数的 最终结果。

```js
let arr = [1, 2, 3, 4, 5, 6]
let newArr = arr.map(number => number * number)

let arr = [
  {
    goodsName: "nike",
    price: 1000,
    num: 10
  },
  {
    goodsName: "cache",
    price: 400,
    num: 5
  }
]

let total = arr.reduce((res, ele) => {
  res = res + ele.price * ele.num
  return res
}, 0)
```
