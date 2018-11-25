# jQuery

## 选择与事件

### 选择器（查找类方法）

 **括号内填写css选择器,然后用引号包起来**

.find() 寻找后代,括号内一定有内容

.siblings() 寻找兄弟

.parent() 寻找父代

.parents() 寻找所有上级元素

.eq() 准确寻找第几个元素  从0开始计数，里面填写变量的时候不需要用引号包起来

.children()  寻找子代 括号可以为空

.first()/.last() 第一个/最后一个

.next()/.prev()  同级的下一个/上一个兄弟 括号里不用填选择器

### 方法

.index() 获取所选元素的索引值(相对于父级是第几个元素) 从0开始计数

.attr() 获取/改变 元素的属性值   里面填一个属性值就是获取，填属性值和改变的值即为改变

.height() / .width()  获取/设置 选中元素的宽高，括号内没有东西时是获取，括号内有值时是赋值

.css() 改变css样式在行内 ```$(".box").css('background-color','red');$(".box").css({"background-color":"blue","width":"50px"})```

.addClass()/.removeClass()/toggleClass() 添加/删除样式，给元素添加/删除class名

.text() 改变文本内容

.val() 改变input的值 `$(input).val('值')`

.hover(function(){},function(){}) 滑入/滑出执行的两个函数，也可以写一个函数，代表只滑入时执行函数

.scrollTop()  获取元素的页面顶部距离顶部距离值

.offset().top / .offset().left 获取元素到顶部/左侧 的距离值注意没有括号

.length  获取元素个数

.position().top / .position().left 获得元素相对于父级relative的坐标

event.stopPropagation() 阻止事件向上触发，写在子级事件内，就不会触发祖先的事件

### 事件

.click() 单击时

.scroll() 滚动时

.mousemove 鼠标移动事件     event.pageX/ event.pageY  获取鼠标相对于body的坐标值

.mouseup()/.musedown() 鼠标抬起/鼠标按下

.focus() 获得焦点

.blur() 失去焦点

a.trigger('事件名')  模拟触发a的某些事件(click等)

### 对DOM的操作

.text() 获取，设置文本内容

.html() 获取，设置文本，标签内容

a.prepend(b) / b.prependTo(a) 将b添加到a的内部子级的第一个

a.append(b) / b.appendTo(a) 将b添加到a的内部子级的最后一个

a.remove() 删除a

a.after(b) / b.insertAfter(a) 给a的后面添加一个同级兄弟

a.before(b) / b.insertBefore(a) 给a的前面添加一个同级兄弟

a.empty() 清除标签内所有内容

.clone() 括号内不添加参数，则只复制html结构；添加参数true，则完全复制，包括事件处理等

$('<标签名>').empty()  清空标签之间的内容

### 动画类方法

.hide() / .show()  消失/出现 括号内填写毫秒数，不写的话没有动画，也可以写'slow'  'fast'

.toggle() 切换消失/出现 括号内数据同上

.slideUp()/.slideDown()/.slideToggle 上卷/下拉/ 切换括号内不填写时间数字也会有动画

.fadeIn()/.fadeOut()/.fadeToggle() 渐入/渐出/切换

.animate({},1000,[fn(可有可无)]) 自定义，只能改变带数字的属性，背景颜色之类不能改变

.delay(200)  延时200毫秒执行下一动画，仅限动画

### event

event.stopPropagation() 阻止事件冒泡

event.preventDefault() 阻止跳转

event.which  鼠标，键盘按键 鼠标左1 滚轮2 右3 键盘回车13 注意没有括号

注：使用变量时不用引号包起来

## 如何使用jq？

1.引入

- 本地引入 ```<script src="文件路径"></script>```

- cdn ```<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>```

2.使用

**jq选择对象 绑定事件**

```js
$(".main").click(function(){
    //点击要做的事
    alert("内容")
})
```

on可以绑定多个事件处理，让多个事件绑定同一个函数,off解绑,one事件只触发1次

```js
$('.box button').on('click mouseenter',function(){
  alert("内容")
})
```

**键盘事件**

1.在窗口按下键盘触发事件 事件要绑定在 window 身上

2.大部分键盘事件 都绑定在输入框input上

keydown keyup keypress

```js
$(window).keydown(function(){
  //内容
})
```

**鼠标事件**

.mousemove()事件  鼠标移动事件

如何获取 鼠标坐标   获得相对于body的横纵坐标，与父级无关

```js
$('.box').mousemove(function(event){
    var x = event.pageX
    var y = event.pageY
})
```

.mousedown()事件  鼠标按下事件

```js
$('.box2').mousedown(function(event){
  //如何判断按下的是鼠标的哪个按键
  //event.which 获取鼠标按键的按键码
  //左键1 滚轮2 右键3
  //console.log(event.which)
  //event.type 获取该事件的事件类型(在这里是mousedown)
  if(event.which == 1){
    //按下左键要做的事
    $('.box2').mousemove(function(){
       console.log(1)
    })
  }
})

//1.在鼠标的mouseup事件中解除mousemove事件的绑定
//2.在鼠标的mouseleave事件中解除mousemove事件的绑定
$('.box2').mouseup(function(){
  $(this).off('mousemove')
})
$('.box2').mouseleave(function(){
  $(this).off('mousemove')
})
```


**dom元素加载完毕之后执行**

```js
$('document').ready(function(){
  //内容
})
//简写$.function(){}
```

## 方法

**遍历整个数组，为每个数组内容执行函数**

```js
$.each(arr[],fcuntion(index,ele){         
  //this.各种操作(this就是每个数组内容)
})
```

## 动画

.animate({},1000,[fn(可有可无)]) 自定义，只能改变带数字的属性，背景颜色之类不能改变

.animate({"width":300,"opacity":0.5},1000)  用1s时间把宽度改变为300px,同时不透明度变为0.5

动画回调 某个动画执行完毕之后再执行其他事情  方法:在时间后面加一个function(){}

```js
     $(".box").animate({"width":300},1000,function(){
            $(".box").animate({"width":300},1000)
    })
```

jq的所有动画都可以在最后面添加一个函数当做动画的回调,除了animate外其他动画要添加动画回调时，必须填1时间2速度曲线3函数

```js
    fadeOut(1000,'linear',function(){})
    //linear:匀速
```

    