# 数组：数据的集合

var numArr = [20,21,30,40,18]
如何获取数组内的某个值数据
var firstNum = numArr[0]

所有的对象都由属性和方法组成
数组的属性 length 获取数组的长度
**注:判断一个数组是否是空数组，判断它的长度是否是 0**

## 数组的方法

### 增

- **push()**
  var numArr = [1,2,3,4]
  var num = numArr.push(5,6,1,2) 向数组的最后添加一项或多项 并返回新数组的长度，修改了原数组

- **numArr.unshift(0,2)** 向数组开头添加一项或多项并返回新数组的长度，修改了原数组

- **splice(a,b,c)** 添加或删除数组 a 添加或删除的位置，b 删除的个数，c 添加的元素，先删除后添加 原数组改变，返回由被删除的元素组成的数组，会改变原数组

### 删

- **numArr.shift()** 删除数组的第一项 并返回被删除的数据，修改了原数组
  console.log(num1) 返回 1

- **numArr.pop()** 删除数字的最后一项并返回被删除的数据，修改了原数组

### 查

- **foreach**
  array.forEach(function(ele, index, array){
  //do something
  }, this)
  为数组中每个元素执行的函数，该函数接收三个参数：
  ele(当前元素)：数组中正在处理的当前元素。
  index(索引)：数组中正在处理的当前元素的索引。
  array：forEach()方法正在操作的数组。
  this:可有可无。

**indexOf(val,start)** 在数组中查找是否存在(值和类型都相等)val 搜索的值,start 开始搜索位置，存在的话返回第一次查找到的索引值，不存在的话返回-1
arr.indexOf(arr[i])

- **find** 返回一个搜索结果，不改变原数组
- **findIndex** 返回搜索结果位置

```js
var student = students.find(function(ele) {
  return ele.name === "aaa"
})
```

---

- **使用技巧!!!!!!!!!!!!!!!!!!!!!!!!!**
  选择数组中符合正则表达式的元素

```js
var arr=[1,2,3,4,5,6,7,2]
var re=/[2]/
function del(arr,val) {
    for (var i = 0; i < arr.length; i++) {
        if (re.test(arr[i])) {   --------------------注：此行if内的内容为核心
            arr.splice(i,1)
        };
    };
}
del(arr,re)
```

if 内的内容可以填很多形式，以判断各种不同的需求而选择到数组中符合要求的数据
例如 选择内容是奇偶数的元素 if(arr[i]%2==0)/if(arr[i]%2==1)
选择指定字符串 if(arr[i]===val)
选择符合正则表达式的元素 if (re.test(arr[i]))

---

### 改

- **concat()**
  concat()方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。

```ruby
var num1 = [1, 2, 3],
    num2 = [4, 5, 6],
    num3 = [7, 8, 9];
var nums = num1.concat(num2, num3);
console.log(nums);
//results in [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

- **join()** 方法将一个数组所有元素连接成一个字符串并返回这个字符串

  > join() 所有元素以逗号连接
  > join('') 所有元素直接连接
  > join('-') 所有元素用-连接

- **reserve()**方法将数组中元素位置颠倒，返回新数组，原数组改变

- **slice()** 方法返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。且原始数组不会被修改。

```js
var animals = ["ant", "bison", "camel", "duck", "elephant"]

console.log(animals.slice(2))
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4))
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5))
// expected output: Array ["bison", "camel", "duck", "elephant"]
```

- **sort** 排序 sort(函数 a) 将数字进行排序,会改变原数组，返回值是一个新的数组
  var arr = [1,2,333,22,1,4,5,20,2]
  var newArr = arr.sort(function(a,b){return a-b}) 数字排序，从小到大。b-a 从大到小
  var newArr = arr.sort() 按照首字符进行排序
  console.log(arr)

**filter** 筛选并返回一个数组，不改变原数组

> ```ruby
> var student = [
>    {
>        name:'aaa',
>        age:26
>    },
>    {
>        name:'sss',
>        age:23
>    },
>    {
>        name:'ddd',
>        age:25
>    },
> ]
>
> filter(function(ele,index,array){return条件})   ele数组中每一项 index索引
> 返回一个筛选之后新的数组  不修改原数组
>
> var newArr = students.filter(function(ele,index){
>    return ele.age > 23
> })
> ```

- **map** 映射 将数组生成一个新的数组 数组个数不变

```js
var numArr = [1, 2, 3, 4]
var newNum = numArr.map(function(ele) {
  return ele * ele
})

输出1, 4, 9, 16
```

- **reduce**(函数，结果初始值) 通常用于一个数组变成一个数或者对象时使用

> ```ruby
> var shopping = [
>    {
>    goodsName:'car',
>    price:20000,
>    number:1
>    },
>    {
>    goodsName:'plane',
>    price:200000,
>    number:2
>    }
>    {
>    goodsName:'bike',
>    price:1000,
>    number:1
>    }
> ]
> ```

1.求和
var total = shoppingCart.reduce(function(result,ele,index,array){
//result 是结果,计算结束后的返回值
//result 和 ele 是必须的,后两个值可选
//reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
result = result + ele.price\*ele.number
return result
}，0)

```js
reduce((result, ele) => {
  //函数内容
  return result
}, 0)
```

reduce 里面放两个参数，一个是函数，另一个是结果的初始值
函数里面第一个参数是结果，第二个结果是每一项

---
