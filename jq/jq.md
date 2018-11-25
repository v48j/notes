# jQuery

## 选择器（查找类方法）

 **括号内填写css选择器,然后用引号包起来**

.find() 寻找后代,括号内一定有内容
.siblings() 寻找兄弟
.parent() 寻找父代
.parents() 寻找所有上级元素
.eq() 准确寻找第几个元素  从0开始计数，里面填写变量的时候不需要用引号包起来
.children()  寻找子代 括号可以为空
.first()/.last() 第一个/最后一个
.next()/.prev()  同级的下一个/上一个兄弟 括号里不用填选择器

## 方法

.index() 获取所选元素的索引值(相对于父级是第几个元素) 从0开始计数
.attr() 获取/改变 元素的属性值   里面填一个属性值就是获取，填属性值和改变的值即为改变
.height() / .width()  获取/设置 选中元素的宽高，括号内没有东西时是获取，括号内有值时是赋值
.css() 改变css样式在行内
.addClass()/.removeClass()/toggleClass() 添加/删除样式，给元素添加/删除class名
.text() 改变文本内容
.hover(function(){},function(){}) 滑入/滑出执行的两个函数，也可以写一个函数，代表只滑入时执行函数
.scrollTop()  获取元素的页面顶部距离顶部距离值
.offset().top / .offset().left 获取元素到顶部/左侧 的距离值注意没有括号
.length  获取元素个数
.position().top / .position().left 获得元素相对于父级relative的坐标


## 事件

.click() 单击时
.scroll() 滚动时
.mousemove 鼠标移动事件     event.pageX/ event.pageY  获取鼠标相对于body的坐标值
.mouseup()/.musedown() 鼠标抬起/鼠标按下
.focus() 获得焦点
.blur() 失去焦点


## 对DOM的操作

.text() 获取，设置文本内容
.html() 获取，设置文本，标签内容
a.prepend(b) / b.prependTo(a) 将b添加到a的内部子级的第一个
a.append(b) / b.appendTo(a) 将b添加到a的内部子级的最后一个
a.remove() 删除a
a.after(b) / b.insertAfter(a) 给a的后面添加一个同级兄弟
a.before(b) / b.insertBefore(a) 给a的前面添加一个同级兄弟
a.empty() 清除标签内所有内容
.clone() 括号内不添加参数，则只复制html结构；添加参数true，则完全复制，包括事件处理等

## 动画类方法

.hide() / .show()  消失/出现 括号内填写毫秒数，不写的话没有动画，也可以写'slow'  'fast'
.toggle() 切换消失/出现 括号内数据同上
.slideUp()/.slideDown()/.slideToggle 上卷/下拉/ 切换括号内不填写时间数字也会有动画
.fadeIn()/.fadeOut()/.fadeToggle() 渐入/渐出/切换
.animate({},1000,[fn(可有可无)]) 自定义，只能改变带数字的属性，背景颜色之类不能改变
.delay(200)  延时200毫秒执行下一动画，仅限动画



## event

event.stopPropagation() 阻止事件冒泡
event.preventDefault() 阻止跳转
event.which  鼠标，键盘按键 鼠标左1 滚轮2 右3 键盘回车13 注意没有括号

注：使用变量时不用引号包起来

## 如何使用jq？
**引入**
   1本地引入:
        在</body>的上一行写<script src="文件路径"></script>
   2cdn引入（百度搜索jquery cdn）
        <script src="网上路径"></script>

**使用**
jq选择对象 绑定事件

```js

$(".main").click(function(){
    //点击要做的事
    alert("内容")
    //.css('样式名'，'样式值')  改单个样式
    //.css({"名":"值","名":"值"}) 改多个样式
    //jq写的css样式写在行内里了
    $(".box").css('background-color','red')
    $(".box").css({"background-color":"blue","width":"50px"})
})

```

在点击事件的最后写 return false 阻止a默认跳转
修改标签的属性.attr("名","值")
获取标签的属性.attr("名")   名  如a中的href
``` $(".pic img").attr("src","地址") ```

```js

$(".list a").click(function{
    //特殊选择器 获取点击的这个对象
    //$(this) 只能选一个 触发事件的那一个
    //jq如何获取文本内容
    //.text()获取文本内容
    //如何将获取的文本内容和路径拼接到一起
    //"images/"+变量+".jpg"
})
```

**查找**

.parent()父级 .siblings()其他兄弟 .find()后代 .parents()所有父级
括号内可以填css选择器，筛选
```js
$(this).parent().siblings('li').find('a').css(内容)

console.log()  在控制台打印
mouseenter()鼠标移入
mouseleave()鼠标移出
```

-----------------2018.06.14-------------------------
jq中所有单位px可以省略
数字在js中可以直接使用，不用引号包起来
background-color：rgba(0,0,0,0.5)  前三个数是颜色，第四个数是不透明度
opacity：0.5   不透明度

----------------2018.06.15-----------------------------
jQuery添加和删除class
.addClass("class名")    注意class名不要有.
.removeClass("class名") 注意class名不要有.
先在css样式里写好激活状态的css，然后在addClass,removeClass切换样式
$("li:even")  选择li中的索引数(0开始)是偶数

.animate({},1000,[fn(可有可无)]) 自定义，只能改变带数字的属性，背景颜色之类不能改变
.animate({"width":300,"opacity":0.5},1000)  用1s时间把宽度改变为300px,同时不透明度变为0.5
动画回调 某个动画执行完毕之后再执行其他事情  方法:在时间后面加一个function(){}
    例如 $(".box").animate({"width":300},1000,function(){
            $(".box").animate({"width":300},1000)
    })
jq的所有动画都可以在最后面添加一个函数当做动画的回调,除了animate外其他动画要添加动画回调时，必须填1时间2速度曲线3函数
    例如 fadeOut(1000,'linear',function(){})
    linear:匀速

-------------------2018.06.20------------------------
jq的多个动画 如果作用在同一个元素身上，就会把上一个动画执行完毕才会执行下一个动画
jq提供一个stop方法来停止动画 写在某个动画前面，就会将该动画前面所有未执行完毕的动画停止
jq的链式操作  只要用的方法是操作类 后面可以继续使用其他方法，使用获取类方法则不行
窗口用window 表示 jq 里面使用$(window)选择窗口
滚动事件.scroll()
获取发生事件对象(滚动条)距离顶部距离.scrollTop()

判断语句
if(条件){条件成立执行的事}else{条件不成立执行的事}
     if(topNumber >= 300){
       $('.btn').fadeIn(300)
     }else{
       $('.btn').fadeOut(500)
     }

函数
function 后面小括号内写的event 代表的是 点击事件的事件对象
通过这个事件对象下的一些方法我们可以做 阻止默认href跳转 获取鼠标坐标等
  $('.back').click(function(event){
    event.preventDefault()
  })

  jq 如果要给滚动条添加动画的话 要使用animate 但是还得注意 选择的是 $('body,html')修改body或html的scrollTop样式，让滚动条产生动画
  xx.offset().top  元素距离顶部的距离
  xx.offset().left 元素距离左部的距离

  -------------2018.06.21-------------------------------------
.mousemove()事件  鼠标移动事件
如何获取 鼠标坐标   获得相对于body的横纵坐标，与父级无关
$('.box').mousemove(function(event){
    var x = event.pageX
    var y = event.pageY
})

.mousedown()事件  鼠标按下时间
$('.box2').mousedown(function(event){
  //如何判断按下的是鼠标的哪个按键
  //event.which 获取鼠标按键的按键码
  //左键1 滚轮2 右键3
  //console.log(event.which)
  //event.type 获取该事件的时间类型(在这里是mousedown)
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


.position().left/.position().top 获得元素相对于父级relative的坐标
-------------2018.06.22------------------------------
对DOM的操作
事件委托 将后代的事件委托给祖先级 (后代->新创建的元素，祖先->一直存在的)
因为点击子级可以触发祖先的点击事件，所以可以进行事件委托 事件冒泡  event.stopPropagation() 阻止事件向上触发，写在子级事件内，就不会触发祖先的事件

事件
on可以绑定多个事件处理，让多个事件绑定同一个函数
off解绑
one事件只触发1次
$('.box button').on('click mouseenter',function(){
  内容
})

键盘事件
1.在窗口按下键盘触发事件 事件要绑定在 window 身上
2.大部分键盘事件 都绑定在输入框input上
keydown keyup keypress
$(window).keydown(function(){
  内容
})

a.trigger('事件名')  模拟触发a的某些事件

dom元素加载完毕之后执行
$('document').ready(function(){

})

简写$.function(){}


npm i -g serve
serve . -p 5000

------------------------------------------------------
$.each(arr[],fcuntion(index,ele){         遍历整个数组，为每个数组内容执行函数
  this.各种操作                  this就是每个数组内容
})


$('<ul>').empty()  清空标签之间的内容
