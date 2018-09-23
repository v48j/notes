### webpack 的使用

开始打包 npx webpack

依据配置文件打包 npx webpack --config webpack.config.js

### webpack 的简单使用

**由于我们使用了 npm 管理我们的项目，所以 js 就变成了模块，但是模块的导入导出的方法浏览器不支持，所以需要编译。webpack 就可以实现。**

- 在 npm 项目中安装 webpack 工具

  ```js
  npm install webpack webpack-cli --save-dev
  ```

- 新建 dist 文件夹，将项目的 index.html 放在里面。index.html 内引入 main.js 文件。
- 新建 src 文件夹，将 index.js 放在里面。
- 然后执行 `npx webpack` 命令。浏览器打开 index.html 发现原本 index.js 内不支持的语法现在成功执行了

**这`npx webpack`命令，是将项目下的 src 内的 index.js 文件打包到 dist 文件夹下的 main.js。打包过程会对 js 进行编译(将浏览器不能识别的模块倒入导出编译成浏览器识别的语法)，并对 index.js 导入的模块进行打捆全部写入到 main.js 内。这样 index.html 直接引入 main.js 就可以看到 index.js 所写内容了**

### webpack 配置文件的使用

- 新建一个文件夹 （比如 webpack-demo）
- 将该文件夹初始化为 npm 项目 `npm init -y`
- 安装 webpack 相关模块 `npm i webpack webpack-cli -D`
- 在项目根目录下添加 webpack 配置文件 webpack.config.js,添加以下代码

  ```js
  const path = require("path")

  module.exports = {
    entry: "./index.js",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "build")
    }
  }
  ```

entry 代表入口文件，即要被编译打包的文件，路径填好即可。
output 代表出口文件，即打包之后编译好的文件。filename 为文件名，path 后的 build 为文件夹名。

- 然后 package.json 文件下，script->test 下一行 添加一行脚本命令

  ```js
  "build"："webpack"
  ```

- 在命令行中执行 npm 脚本命令 `npm run build`,就会开始打包，成功之后会生成 build 文件夹和 bundle.js。
