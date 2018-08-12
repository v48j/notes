### 如何将本地做好的项目推送到 git

- 网上新建一个空仓库(仓库名最好和本地文件夹重名)
- 本地文件夹初始化为 git 仓库
  ```shell
  git init
  ```
- 接下来就是用 git 常用三部操作推送代码

- 首次推送代码的时候，本地不知道推送到远端哪个仓库 需要使用 以下命令

  ```shell
  git remote add origin <仓库地址>
  git push -u origin master
  ```

### git pull 使用

当远端的版本优先于本地的版本，而本地又做了新的版本要提交的时候，会提示提交失败。建议使用 `git pull` 拉取远端的更新。但是拉取的时候会有两种情况

- 远端更新和本地更新不冲突，此时 `git pull` 的时候，会弹出 nano 编辑界面，提示用户合并两个不冲突的更新并提交版本留言，使用 `ctrl + x`，选择 Y 同意，然后直接回车，即可离开 nano 编辑界面。执行完毕之后会生成一个新的版本，即合并远端和本地更新的版本，此时在执行 `git push` 远端和本地就同步了。
- 远端更新和本地冲突（修改的是同一文件的相同位置），此时也需要 `git pull` 拉去远端更新,但是提示拉取失败，需要用户手动处理冲突，处理之后相当于修改了文件，所有直接使用 `git add . git commit -m'' git push` 即可提交成功。

### git 分支操作

- 查看本地分支

  ```
  git branch
  ```

- 创建新分支  
  -a 参数 查看所有分支(本地和远端)
  -r 参数 查看远端分支

  ```
  git branch [分支名]
  ```

- 切换分支

  ```
  git checkout [分支名]
  ```

**创建新的分支之后，分支内默认和 master 分支内的内容相同。想要将本地创建好的分支同步到远端，直接执行 `git push -u origin [分支名]` 即可，以后想要更新 `gh-pages` 分支，直接按照原来的 git 三步即可。**

**`gh-pages` 分支比较特殊，该分支上的内容可以使用 `github账户名.github.io/仓库名` 地址访问**

- 合并其他分支上的更新

  ```
  git merge [分支名]
  ```

**拉取更新之后，直接使用 `git push` 就可以同步更新到远端。**

- 拉取主分支上的更新

  ```
  git pull origin master
  ```

### git 实现历史回滚

```
git reset --hard [版本号]
```

**回滚之后想要直接同步到远端，由于远端的版本优先于本地，所以直接 `git push` 失败。使用 `git push -f` 强制推送到远端。想要回滚之后在回到原来的版本，版本号找不到了，我们使用 `git reflog` 命令，可查看所有版本的修改，就可以看到所有的版本号了。**

### node 的安装与使用

#### 安装

- linux 系统
  使用 `sudo apt-get install curl` ，
  再使用 `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash` 安装 nvm，
  然后后就可以使用 nvm 安装 node 了。

  ```
  nvm install v10.8.0
  ```

**linux 系统上安装好 node 之后关闭了命令行 node 命令就找不到了，这是因为 node 没有被添加到系统环境变量内所以需要执行以下命令，将 node 添加到系统的环境变量中**

    ```
    cd ~/.nvm/versions/node/v8.11.1/bin
    pwd
    ```

拿到 `/home/sunny-zz/.nvm/versions/node/v8.11.1/bin`
添加这行到 `.bashrc` 的最后，(在用户主目录下 `code .bashrc` 就可以在 vscode 中打开 .bashrc 文件)
`export PATH="$PATH:/home/zzt/.nvm/versions/node/v9.2.0/bin"`
然后保存，重启命令行

- windows 系统直接到 node 官网下载最新安装包安装即可

### node 的模块

- node 模块分类:核心模块 第三方模块 自定义模块
- node 模块导入导出，使用 require('模块名') 导入核心模块和第三方模块。自定义模块需要使用 module.exports 导出，require('路径') 导入。
  **node 模块自带作用域，不会污染全局环境，js 文件之间可以相互引用，减少 html 文件的 js 引入。**

### npm 的简单使用

`npm init` 初始化文件夹为 npm 项目
`npm install [包名]` npm 的安装命令 -g 参数将包安装到全局下(在任何位置都可以使用这个包) --save-dev(-D) 参数安装非必需项目依赖
`npm unstall [包名]` npm 卸载包
`npm i` 依据 package.json 的记录，下载全部的项目依赖。
`npm update [包名]` 更新项目依赖

### webpack 的简单使用

**由于我们使用了 npm 管理我们的项目，所以 js 就变成了模块，但是模块的导入导出的方法浏览器不支持，所以需要编译。webpack 就可以实现。**

- 在 npm 项目中安装 webpack 工具

  ```
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
  const path = require('path')

  module.exports = {
    entry: './index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'build')
    }
  }
  ```

entry 代表入口文件，即要被编译打包的文件，路径填好即可。
output 代表出口文件，即打包之后编译好的文件。filename 为文件名，path 后的 build 为文件夹名。

- 然后 package.json 文件下，添加一行脚本命令

  ```
  "build"："webpack"
  ```

- 在命令行中执行 npm 脚本命令 `npm run build`,就会开始打包，成功之后会生成 build 文件夹和 bundle.js。

### es6 Modules 模块

- 模块的导出方式 命名导出 和 默认导出

  1.命名导出:

  ```js
  const  a = 10
  export {a}   ||   export {a,b,c}  || export const a = 10
  ```

  2.默认导出：

  ```js
  const a = 10
  export default a
  ```

- 模块的导入方式 命名导入 和 默认导入

  1.命名导入： 导出什么名必须导入什么名 as 可以修改

  ```js
  import {a} from './xxx.js'  || import {a as xx} from './xxx.js'
  ```

  2.默认导入： 只能使用一次默认导出

  ```js
  import xx from './xxx.js'
  ```
