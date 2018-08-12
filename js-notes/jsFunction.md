### call() 和 apply()

call()和 apply() 作用一样，调用一个对象的某个方法，用另一个对象替代当前对象

语法上的差异,call 参数直接传入，apply 参数写成数组传入

fn.call(obj,p1,p2,p3)

fn.apply(obj,[p1,p2,p3])

实例：

```js
var name = "小白"
var obj = { name: "小红" }
function sayName() {
  return this.name
}
console.log(sayName.call(this)) //输出小白
console.log(sayName.call(obj)) //输入小红
```

实例 2，实现继承：

```js
//父类 Person
function Person() {
  this.sayName = function() {
    return this.name
  }
}
//子类 Chinese
function Chinese(name) {
  //借助 call 实现继承
  Person.call(this)
  this.name = name
  this.ch = function() {
    alert("我是中国人")
  }
}
//子类 America
function America(name) {
  //借助 call 实现继承
  Person.call(this)
  this.name = name
  this.am = function() {
    alert("我是美国人")
  }
}
//测试
var chinese = new Chinese("成龙")
//调用 父类方法
console.log(chinese.sayName()) //输出 成龙
var america = new America("America")
//调用 父类方法
console.log(america.sayName()) //输出 America
```
