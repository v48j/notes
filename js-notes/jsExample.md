### 判断手机号

```js
function checkPhone() {
  var phone = document.querySelector(".phone-reg").value
  if (!/^1[34578]\d{9}$/.test(phone)) {
    alert("手机号码有误，请重新填写")
    return false
  }
}
```

### 手机号中间 4 位加密

```js
var str = "1366668888"
var str2 = str.substr(0, 3) + "****" + str.substr(7)
alert(str2)
```

### 密码框 input type='password' 没有默认填写

```html
<input autocomplete="off">  谷歌浏览器无效，其他浏览器有效
<input autocomplete="new-password">  谷歌浏览器有效
```

### select 默认样式

```html
<select autocomplete="off">
  <option value="0">单选</option>
  <option value="1" selected="selected">多选</option>
</select>
```

普通浏览器直接在 option 下加 select="selected" 就可以修改默认选择样式，火狐浏览器不行，需要给 select 添加 autocomplete="off"

### 设置高度为屏幕高度

css 样式

```css
.classname {
  position: absolute;
  top: 0;
  bottom: 0;
  height: 100%;
  overflow: hidden;
}
```

### 改变 input type='checkbox' 样式

```html
<div class="box">
    <input id='test' type="checkbox">
    <label for="test" class="test">
      测试按钮
    </label>
  </div>
```

```css
.box {
  position: relative;
  padding-left: 30px;
}

.box input[type="checkbox"] {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.test::before {
  left: 0;
  content: "";
  display: block;
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  background-color: #ccc;
  top: 0;
}

.test::after {
  top: 0;
  left: 0;
  content: "";
  display: block;
  position: absolute;
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

.box input:checked + .test::before {
  background-color: #00b3d4;
}

.box input:checked + .test::after {
  background-image: url("./img/勾.png");
}
/* 注：before是背景颜色，after是背景图片，有些时候可以合二为一，只用一个 */
```

### 改变 select 下拉箭头样式

### 无法选中(双击无法变蓝)

### 函数的节流和防抖(减少函数执行次数)

### input checkbox 默认选中

```html
<input type="checkbox" checked="true">
```

### 用 JS 在字符过长时加省略号

```js
var str = document.getElementById("td1").innerHTML
var cd = str.length
if (cd > 5) {
  document.getElementById("td1").innerHTML = str.substring(0, 5) + "..."
}
```

