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
