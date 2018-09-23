### node 的安装与使用

#### 安装

- linux 安装

  > 使用`sudo apt-get install curl`
  > 再使用 `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash` 安装 nvm，
  > 然后后就可以使用 nvm 安装 node 了。

  ```r
  nvm install v10.8.0
  ```

**linux 系统上安装好 node 之后关闭了命令行 node 命令就找不到了，这是因为 node 没有被添加到系统环境变量内所以需要执行以下命令，将 node 添加到系统的环境变量中**

```r
cd ~/.nvm/versions/node/v8.11.1/bin
pwd
```

拿到 `/home/v48j/.nvm/versions/node/v10.8.0/bin`
添加这行到 `.bashrc` 的最后
`exportPATH="$PATH:/home/zzt/.nvm/versions/node/v9.2.0/bin"`
然后保存，重启命令行

- windows 系统直接到 node 官网下载最新安装包安装即可

- 进入 node 直接输入指令 node 即可进入

### npm 的简单使用

`npm init` 初始化文件夹为 npm 项目 -y 参数：所有选项全部选 yes

`npm install 包名` npm 的安装命令 -g 参数将包安装在全局下（在任何位置都可以使用这个包）--save-dev(简写为-D) 参数安装非必须项目依赖 （install 可以简写成 i）
_例如 npm i -g serve_
_npm install jquery@1.11.1_

`npm i` 依据 package.json 的记录，下载全部的项目依赖

`npm uninstall 包名` npm 卸载包,也分全局不全局

`npm update 包名` npm 更新项目依赖

### 在 js 中使用 npm 下载的包

#### node 方式

- 写法只有一种

var $=require('包名/路径')

#### es6 方式（模块的导入和导出）

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
