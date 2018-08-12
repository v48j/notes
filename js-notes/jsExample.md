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

### 改变 select 下拉箭头样式
