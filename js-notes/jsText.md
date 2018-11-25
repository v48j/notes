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

```ruby
var student = students.find(function(ele){
    return ele.name === 'aaa'
})
```

---

- **使用技巧!!!!!!!!!!!!!!!!!!!!!!!!!**
  选择数组中符合正则表达式的元素

```ruby
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

```js
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
var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]
```

- **sort** 排序 sort(函数 a) 将数字进行排序,会改变原数组，返回值是一个新的数组
  var arr = [1,2,333,22,1,4,5,20,2]
  var newArr = arr.sort(function(a,b){return a-b}) 数字排序，从小到大。b-a 从大到小
  var newArr = arr.sort() 按照首字符进行排序
  console.log(arr)

- **filter** 筛选并返回一个数组，不改变原数组

> ```js
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
var numArr = [1,2,3,4]
var newNum = numArr.map(function(ele){
    return ele*ele
})

输出1,4,9,16
```

- **reduce**(函数，结果初始值) 通常用于一个数组变成一个数或者对象时使用

> ```js
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
>
> 1.求和
> var total = shoppingCart.reduce(function(result,ele,index,array){
> //result 是结果,计算结束后的返回值
> //result 和 ele 是必须的,后两个值可选
> //reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
> result = result + ele.price\*ele.number
> return result
> }，0)

---

# dom

## 获取元素

+ **获得一个标签对象**

document.getElementById('btn')  得到一个html标签
document.querySelector('.css选择器') 选择匹配的第一个元素  ie8

+ **获得一个类数组**

document.getElementsByClassName('btn')[0]  得到一个html标签  ie9
document.getElementByTagName('标签名') 获取的是一个类数组
document.querySelectorAll('.css选择器') 获得一个类数组  ie8

>*1.上述所有document都可以换成 dom 元素*
>*2.获得到类数组，后面需要加 [0]来获取到数组中的一个对象*
>*3.获取到的东西的本质是一个对象，后面可以根据对象的方式，给它赋值或者调用一些函数*

## 创建一个新元素

>var ele = docunment.createElement('div')  创建的本质是一个html标签对象操作

```js
var ele = document.createElement('div')  创建一个标签
ele.getAttribute('class','box1')
ele.innerText = '123'
```

## 对象的属性

+ **.style**  添加行内样式 

获取该元素的行内样式**对象**,修改该属性相当于添加行内样式
ele.style.backgroundColor = 'red'

+ **获取/修改文本**  

ele.innerText
ele.innerText = xxx

+ **设置属性（对象方法）**

获得原生对象属性  .getAttribute('属性名')
修改原生对象属性  .setAttribute('属性名','属性值')  可以赋class名
例如，可以在a标签内添加自定义属性 data-index='0'  然后再获取属性，可以获得想要的值
注意:一次只能获得/修改一个对象属性 要修改多个，需多写几次

+ **添加删除修改 class/id**

ele.className = ''  空即为删除，些内容即为添加/修改
ele.id  获取或设置id名

+ **设置标签内部内容**

ele.innerHTML 设置标签内部内容，包括文字和内容，但是赋值的值必须是字符串
ele.innerHTML = '<span class='aa'>你好</span>'

+ **获得/设置input的值**

ele.value
ele.value = 'xxx'

+ **获得标签名**

ele.tagName  得到的标签名始终是大写

+ **添加**

a.appendChild(b)  把b填到a里当最后一个
a.insertBefore(添加的元素b,添加到谁的前面元素c)
如果c是undefined，直接添加到最后，相当于appendChild
ul.insertBefore(li,ul.querySelect('li')) 把li添加到ul的最上面

+ **查找父级**  ele.parentNode 

+ **删除**

ele.removeChild(ele1)  父级ele中删除子级ele1

+ **获得表单元素状态**

ele.checked   值为true(选中)或fasle(未选中)  

## 绑定事件

原生绑定事件 只能是原生dom对象才能绑定
### 三种绑定方式

+ **1.js代码中找到元素，直接添加**

```js
btn.onclick = function(){
    document.getElementsByClassName('box')[0].style.backgroundColor = 'red'
}
```

注意的是，由于选择器一次只能选中一个dom元素，因此如果想要给多个标签绑定事件，有两种方法，一是通过for循环绑定，二是通过事件委托的方式绑定

>+ **事件委托**
>
>```js
>ele.onclick=function aa(){
>    var target=this.target
>    if(target.tagName==='A'){
>        函数内容
>    }
>}
>```

+ **2.js代码中定义函数，html中调用**

```js
<button onclick="test()"> 删除 </button>

js:
    function test() {
        alert(1)
    }

```

+ **3.添加监听事件的方式给元素添加事件**

这样做的优点是可以添加，不会覆盖之前写好的事件，便于维护

```js
ele.addEventListener('click',function(){
  内容
},boolean)

boolean 选填，事件冒泡
```

注：阻止事件冒泡  event.cancelBubble=true

--------------------------;

### 各种事件

+ **鼠标**   onmouseenter onmouseleave onmousemove onmousedown onmouseup onclick ondblclick
+ **键盘**  onkeyup onkeypress onkeydown
+ **其他**  onblur失去焦点  onfocus得到焦点
  
---------------------------;

### 表单元素的 dom 操作

表单元素的onchange事件指的是内容发生改变的时候触发，不要用onclick
onchange:  checkbox radio select----绑定onchange事件
获得选中状态

+ jquery做法  .prop('checked') 获取选中状态    .prop('checked',布尔值) 设置
+ 原生做法  基本上表单元素的所有属性都可以直接获取或修改

ele.checked  true(选中) false(未选中)

```js
 <input type="checkbox" name="" id="all"><label for="all">全选</label>

js：

 ele.onchange = function(){
    var state = this.checked
    console.log(state)
}
```
# 字符串

## 转换

+ **split(' ')**  是字符串的方法，将字符串转换成数组，转换之后数组内容是字符串类型 括号内天的东西是以什么为基准拆分数组
+ **join()**  是数组的方法，将数组转换成字符串

## 修改

不会改变原字符串，而是产生一个新的字符串：

+ **str.silce(a,b)**  字符串截取  包括开始，不包括结束  得到h
+ **substring(a,b)**  与上方法基本相同

a是截取的开始位置(必填) ,b是截取的结束位置,填负数表示倒数第几个字符，不填表示到结束(选填)

+ **substr(a,b)**  截取字符串，a代表开始位置,负数表示倒数第几个。b代表截取的长度，不填表示到结束(选填)

注意，增加字符串和删除字符串都基于上面的方法

+ **toLowerCase()  toUpperCase()**   字符串转换成小写，大写

+ **trim()**  去掉字符串左右的空白符(空格) 原字符串没有被改变
+ **trimLeft()  tripRight()**  去掉左/右边空白

+ **replace()**  字符串替换,源字符串不会改变

```javascript
var str1 = '2015 2016 2017'
srt1.replace('被替换的字符串或正则表达式','替换成的东西')
var str2 = str1.replace('/to/g' 'To')
```

## 查找

var str = 'hello'

+ **str.charAt(0)**         获得字符串对应的字符    获得h
+ **str.charCodeAt(0)**     获得对应字符的编码值

+ **str.endWith('abc')**    检测字符串是否以某段字符串结尾  返回对错
+ **startWith('aa')**       检测以什么为开始

+ **includes('aa')**        是否包含  结果为true 或false

+ **indexOf('aa',b)**         是否包含  结果为位置或-1,b是检索开始位置(选填)
+ **search()**              返回正确查找的开始位置 否则返回-1  可以填写正则表达式
+ **match(a)**           在字符串内检索指定的值，或找到一个或多个正则表达式的匹配
  >a是一个需要检索的字符串或者正则表达式
  >通常情况下匹配到第一个符合条件的元素就停止，返回值是符合条件的字符串，以及位置信息，没找到返回null
  >当检索内容是一个正则表达式，且有全局标志g的时候。会进行全局检索，返回多个符合条件的字符串组成的数组，但不会有位置信息，需要信息的话则用RegExp.exec()

注:三者区别
  >indexOf    只接受搜索字符串，可以调节开始位置  返回第一个位置信息
  >search     检索字符串或者正则表达式  不可调位置  返回第一个位置信息
  >match      检索字符串或正则表达式  可以返回多个符合条件的元素(数组)
  >取决于是否有全局标志g

## 增

参数说明：str表示原字符串变量，item表示要插入的字符串，index表示要插入的位置。

```r
function insert_item(str,item,index){
var newstr="";             //初始化一个空字符串
var tmp=str.substring(0,index);
var estr=str.substring(index,str.length);
newstr+=tmp+item+estr;
return newstr;
}
console.log(insert_item("你好","们",1));
```

## 删

1.删除指定位置的字符 x代表要删除的位置, num代表删除字符的个数
`str = str.substring(0,x) + str.substring(x+num,str.length);`

2.删除指定字符

```r
var str="xxxxxxxxabcxxxxxxxxxxxx";
var pattern = "abc";
str = str.replace(new RegExp(pattern), "");
console.log(str);
```

练习  找出一段文字中的温度数字
var str1='今天是12号，最高气温23℃，最低气温-2℃'
    var str2=str1.match(/-?[0-9]{1,2}[℃]/g)
    console.log(str2)

# 正则表达式

RegExp  检测某个字符串或某个数字是否符合规则，这个规则就是正则表达式

## 检测方法

+ **test()**  返回值 true 或者 false

>var str = 'asdbsc'
>var result = re.test(str)
>console.log(result)  结果是false

+ **exec()**  返回值 符合条件的字符串详细信息,没有返回null,返回一个类数组

>想要得到 正确匹配的某段字符串的时候 使用exec方法，使用exec方法得到的返回值[0]
>var result = re.exec(str)
>result[0]

## 规则

+ 包含 var re = /abc/   包含abc的规则
+ []代表一位
+ [0-9] 一位数字  [a-z] 一位小写字母 [A-Z] 一位大写字母 [A-z]一位字母或下划线
+ $结尾 ^开头
+ +(1到多) *(0到多) ?(0位或一位)  (?=a) 紧跟着a
+ | 或 ()分组
+ \d 任何数字  \D 任何非数字
+ \w 字母数字下划线  \W 反之(比如一些符号)
+ \s 一位空白符
+ \数字  和第几个分组内的第一位完全一样
+ [^a] 中括号里的倒三角是非的意思 非a的一位
+ [\u4E00-\u9FA5] 简体中文
+ 正则表达式后面紧跟一个字母，有特别的含义

>i：不区分大小写
>g：正则表达式全局匹配

```r
例如var re = /[a-z]/i
var re = /[ab]/  一位a或一位b
console.log(re.test('abc'))   结果是true
```

+ **实例**

var re = /[a][a]/
大括号作用于前一位，相当于乘号，等价于 var re = /[a]{2}/
console.log(re.test('aabac')  true
var re = /[a]{0,2}/  零到二位有a
var re = /$[A-z]{1,2}^/
var re = /^1[6-8][0-9]{9}$/   1开头 第二位6或者7或者8 第三位到第十一位是数字，切以之为结尾
/^1(6|7)4$/          1开头 第二位6或者7 下一位是4，且是结尾