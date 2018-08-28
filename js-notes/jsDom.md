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

```r
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

```r
btn.onclick = function(){
    document.getElementsByClassName('box')[0].style.backgroundColor = 'red'
}
```

注意的是，由于选择器一次只能选中一个dom元素，因此如果想要给多个标签绑定事件，有两种方法，一是通过for循环绑定，二是通过事件委托的方式绑定

>+ **事件委托**
>
>```r
>ele.onclick=function aa(){
>    var target=this.target
>    if(target.tagName==='A'){
>        函数内容
>    }
>}
>```

+ **2.js代码中定义函数，html中调用**

```r
<button onclick="test()"> 删除 </button>

js:
    function test() {
        alert(1)
    }

```

+ **3.添加监听事件的方式给元素添加事件**

这样做的优点是可以添加，不会覆盖之前写好的事件，便于维护

```r
ele.addEventListener('click',function(){
  内容
},boolean)

boolean 选填，事件冒泡
```

注：阻止事件冒泡  event.cancelBubble=true

--------------------------

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

```r
 <input type="checkbox" name="" id="all"><label for="all">全选</label>

js：

 ele.onchange = function(){
    var state = this.checked
    console.log(state)
}
```
