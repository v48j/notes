json-server --version
json-server --watch db.json -p 3008

# 发送请求

## Ajax

Ajax 是一种无需重新加载整个网页的情况下，能够更新部分网页的技术
异步和同步
### jq中的ajax

```js
$.ajax({
    //服务器储存数据的地址  get请求接受参数
    url:'https://cnodejs.org/api/v1/topics?tab=ask&page=2'
    //请求的方法 get post，默认get，注意要大学
    type:'GET'
    //解决跨域问题，是jq的解决方法,只能解决get方法，不能解决post方法
    dataType:'jasonp'
    //后台设置了允许跨域之后前台设置
    //crossDomain：true
    //请求成功之后执行的函数 里面的参数 data是请求的结果,data是什么样子由后台决定
    //data.data 是我们需要的数据
    success:function(data){
        console.log(data.data)
    },
    //err错误信息
    error:function(err){
        console.log(err)
    }
})
```

另一种写法

```js
$.ajax({
        url: 'https://cnodejs.org/api/v1/topics',
        type: 'GET',
        //data:{内容}    向后台发送数据，通常是一个对象
        data:{accesstoken:'9948d556-1825-416f-934f-b3ce046403e3'}
    })
    .done(function(data) {
        console.log(data);
    })
    .fail(function(err) {
        console.log("error");
    })
```

上传数据
```js
$.ajax({
      url: 'http://localhost:3008/comments',
      type: 'POST',
      data: {body: comment,aa:val}
    })
    .done(function() {
      console.log("success");
    })
    .fail(function() {
      console.log("error");
    })
```
json  格式
对象的属性名用双引号包裹，属性值是字符串的话也用双引号，属性之间用逗号，最后一项没有逗号

删除数据
```js
$.ajax({
      url: 'http://localhost:3008/comments/id',
      type: 'DELETE'
    })
    .done(function() {
      console.log("success");
    })
    .fail(function() {
      console.log("error");
    })
```
----------------------------------------------------------------------------

### 本地存储

将token的信息 存储到本地浏览器

用户名和头像以及用户id全部存到本地浏览器

h5的本地储存 localStorage  sessionStorage  cookie

sessionStorage  其实就是一个对象

f12下的 application 可以查询到本地存储的信息

var token = 'asd' (后台发送得到)

sessionStorage 方法存储信息,关闭页面就会消失

sessionStorage.token = token

sessionStorage.user_name = 'zzt'

清除sessionStorage 存储  .removeItem('属性名')

  sessionStorage.removeItem('token')

删除所有数据sessionStorage.clear()

获取sessionStorage某些数据

  var data = sessionStorage.getItem('key')

保存数据到sessionStorage

  sessionStorage.setItem('key','value')


localStorage 方法存储信息，页面关闭不会消失

localStorage.token = token

localStorage.removeItem('token')

### 原生ajax

```js
//1.想要发送ajax请求必须创建 XMLHttpRequest 对象
var xml = new XMLHttpRequest()
//2.发请求使用该对象的 open() 方法创建一个请求并使用 send 发送请求
//open(a,b,c) a:发送请求的类型(GET,POST,DELETE) b:请求的地址 c:同步还是异步，绝大多数情况是异步，值为true
xml.open('GET','http://xxx',true)
xml.setRequestHeader("Content-type","application/json") //请求头仅限于POST类型
xml.send(str)   //str 仅限于 POST 请求
//3.接收请求后的结果 使用该对象的 onreadystatechange 事件监听请求过程
xml.onreadystatechange = function(){
    //请求成功标志  xml.readyState状态  xml.status状态码
    if(xml.readyState == 4 && xml.status == 200){
    //状态为4：请求已完成，且响应已就绪 状态码200
    //xml.responseText 是成功之后返回的数据是json串类型(字符串)
    //我们要使用 json 对象的 parse 方法转化为对象形式
    //对应的 json 对象的 stringify 方法可以将对象转化为 json 字符串
    console.log(JSON.parse(xml.responseText))
    //JSON.parse(xml.responseText)就是返回来的数据
    console.log(JSON.stringify(xxx))

    }
}
```

## 使用axios插件发送请求

### axios库方法：增删改

**获得一个   地址去掉/id获得所有**
```js
axios.get('地址/id')
.then(function(res){

})
.catch(function(err){

})

axios.post('地址',{body:'123456'})
.then(function(res){

})
.catch(function(err){

})
```
**改(put或者patch)**
```js
axios.put('地址/id',{body:'123456'})
.then(function(res){
res是更新好的数据
})
.catch(function(err){

})
//put是完全更新，patch是合并更新。
```
**删**
```js
axios.delete('地址/id')
.then(function(res){

})
.catch(function(err){

})
```

### 手动配置axios

1.请求配置

**下面是所有可用的*请求配置*项，只有url是必填，默认的请求方法是GET，如果没有指定请求方法的话**

```js
{
  // `url` 是请求的接口地址
  url: '/user',

  // `method` 是请求的方法
  method: 'get', // 默认值

  // 如果url不是绝对路径，那么会将baseURL和url拼接作为请求的接口地址
  // 用来区分不同环境，建议使用
  baseURL: 'https://some-domain.com/api/',

  // 用于请求之前对请求数据进行操作
  // 只用当请求方法为‘PUT’，‘POST’和‘PATCH’时可用
  // 最后一个函数需return出相应数据
  // 可以修改headers
  transformRequest: [function (data, headers) {
    // 可以对data做任何操作

    return data;
  }],

  // 用于对相应数据进行处理
  // 它会通过then或者catch
  transformResponse: [function (data) {
    // 可以对data做任何操作

    return data;
  }],

  // `headers` are custom headers to be sent
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // URL参数
  // 必须是一个纯对象或者 URL参数对象
  params: {
    ID: 12345
  },

  // 是一个可选的函数负责序列化`params`
  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  paramsSerializer: function(params) {
    return Qs.stringify(params, {arrayFormat: 'brackets'})
  },

  // 请求体数据
  // 只有当请求方法为'PUT', 'POST',和'PATCH'时可用
  // 当没有设置`transformRequest`时，必须是以下几种格式
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - Browser only: FormData, File, Blob
  // - Node only: Stream, Buffer
  data: {
    firstName: 'Fred'
  },

  // 请求超时时间（毫秒）
  timeout: 1000,

  // 是否携带cookie信息
  withCredentials: false, // default

  // 统一处理request让测试更加容易
  // 返回一个promise并提供一个可用的response
  // 其实我并不知道这个是干嘛的！！！！
  // (see lib/adapters/README.md).
  adapter: function (config) {
    /* ... */
  },

  // `auth` indicates that HTTP Basic auth should be used, and supplies credentials.
  // This will set an `Authorization` header, overwriting any existing
  // `Authorization` custom headers you have set using `headers`.
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },

  // 响应格式
  // 可选项 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType: 'json', // 默认值是json

  // `xsrfCookieName` is the name of the cookie to use as a value for xsrf token
  xsrfCookieName: 'XSRF-TOKEN', // default

  // `xsrfHeaderName` is the name of the http header that carries the xsrf token value
  xsrfHeaderName: 'X-XSRF-TOKEN', // default

  // 处理上传进度事件
  onUploadProgress: function (progressEvent) {
    // Do whatever you want with the native progress event
  },

  // 处理下载进度事件
  onDownloadProgress: function (progressEvent) {
    // Do whatever you want with the native progress event
  },

  // 设置http响应内容的最大长度
  maxContentLength: 2000,

  // 定义可获得的http响应状态码
  // return true、设置为null或者undefined，promise将resolved,否则将rejected
  validateStatus: function (status) {
    return status >= 200 && status < 300; // default
  },

  // `maxRedirects` defines the maximum number of redirects to follow in node.js.
  // If set to 0, no redirects will be followed.
  // 最大重定向次数？没用过不清楚
  maxRedirects: 5, // default

  // `httpAgent` and `httpsAgent` define a custom agent to be used when performing http
  // and https requests, respectively, in node.js. This allows options to be added like
  // `keepAlive` that are not enabled by default.
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // 'proxy' defines the hostname and port of the proxy server
  // Use `false` to disable proxies, ignoring environment variables.
  // `auth` indicates that HTTP Basic auth should be used to connect to the proxy, and
  // supplies credentials.
  // This will set an `Proxy-Authorization` header, overwriting any existing
  // `Proxy-Authorization` custom headers you have set using `headers`.
  // 代理
  proxy: {
    host: '127.0.0.1',
    port: 9000,
    auth: {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  },

  // `cancelToken` specifies a cancel token that can be used to cancel the request
  // (see Cancellation section below for details)
  // 用于取消请求？又是一个不知道怎么用的配置项
  cancelToken: new CancelToken(function (cancel) {
  })
}
```

2.默认配置及其修改

全局修改axios默认配置
```js
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.timeout = 5000;
```

实例默认配置
```js
// 创建实例时修改配置
var instance = axios.create({
  baseURL: 'https://api.example.com'
});

// 实例创建之后修改配置
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
```

配置优先级
```js
// 创建一个实例，这时的超时时间为系统默认的 0
var instance = axios.create();

// 通过instance.defaults重新设置超时时间为2.5s，因为优先级比系统默认高
instance.defaults.timeout = 2500;

// 通过request config重新设置超时时间为5s，因为优先级比instance.defaults和系统默认都高
instance.get('/longRequest', {
  timeout: 5000
});
```

### 为axios添加拦截器

你可以在then和catch之前拦截请求和响应。

```js
// 添加一个请求拦截器
axios.interceptors.request.use(function (config) {
    //数据发送前做些事情，例如，可以添加判断防止重复请求同一url，添加请求头等事情
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
  }, function (error) {
    //请求失败做的事情，例如，根据返回的状态码自定义报错
    return Promise.reject(error);
  });
```

移除拦截器

```js
var myInterceptor = axios.interceptors.request.use(function () {/*...*/});
axios.interceptors.request.eject(myInterceptor);
```

你也可以为axios实例添加一个拦截器
```js
var instance = axios.create();
instance.interceptors.request.use(function () {/*...*/});
```

### 错误处理
```js
axios.get('/user/12345')
  .catch(function (error) {
    if (error.response) {
      // 发送请求后，服务端返回的响应码不是 2xx   
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // 发送请求但是没有响应返回
      console.log(error.request);
    } else {
      // 其他错误
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
```

你可以用validateStatus定义一个http状态码返回的范围.

```js
axios.get('/user/12345', {
  validateStatus: function (status) {
    return status < 500; // Reject only if the status code is greater than or equal to 500
  }
})
```

### 取消请求

```js
var CancelToken = axios.CancelToken;
var source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token
}).catch(function(thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
  } else {
    // handle error
  }
});

// cancel the request (the message parameter is optional)
source.cancel('Operation canceled by the user.');
```