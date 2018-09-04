### 本地修改，更新网上仓库内容

- 操作类命令
  sudo apt-get install git _安装_
  git --version _看版本_
  git clone xxx _下载仓库_
  cd Sunny-zz.github.io/ _进入仓库_
  code . _打开编辑工具_
  git add . _上传所有文件到本地缓存区_
  git commit -m'xx' _给本地缓存区的文件写版本留言_
  git push _把文件传到网上_

  git diff _查看本地仓库是否被修改_

  git branch _查看本地分支_

* 新建密钥
  ssh-keygen 创建 ssh 密钥，文件存在 cd ～ cd .ssh cat id_rsa.pub

- 查看信息类命令
  git log 查看版本信息 q 退出
  git diff 查看对仓库进行哪些修改
  git status 查看当前版本本地仓库库各个文件的状态

### 将本地做好的项目推送到 git

- 网上新建一个空仓库
- 本地文件夹初始化为 git 仓库

  ```r
  git init
  ```

- 接下来使用 git 常用三步操作推送代码
- 首次推送代码时，本地不知道推送到远端哪个仓库，需要使用以下命令

  ```r
  git remote add origin <仓库地址>
  git push -u origin master
  ```

- git pull
- 远端更新和本地更新不冲突，此时 `git pull` 的时候，会弹出 nano 编辑界面，提示用户合并两个不冲突的更新并提交版本留言，使用 `ctrl + x`，选择 Y 同意，然后直接回车，即可离开 nano 编辑界面。执行完毕之后会生成一个新的版本，即合并远端和本地更新的版本，此时在执行 `git push` 远端和本地就同步了。
- 远端更新和本地冲突（修改的是同一文件的相同位置），此时也需要 `git pull` 拉去远端更新,但是提示拉取失败，需要用户手动处理冲突，处理之后相当于修改了文件，所有直接使用 `git add . git commit -m'' git push` 即可提交成功。

### git 分支操作

- 查看本地分支 git branch

  > git branch -a 查看所有分支，包括本地和远端
  > git branch -r 查看远端分支

- 创建新的分支 git branch 分支名

  > git branch gh-pages

- 切换分支 git checkout 分支名

  > _创建新的分支，分支内默认和 master 分支内的内容相同。想要将本地创建好的分支同步到远端，直接执行 git push -u origin 分支名_

- 把分支推送到网上

  > git push -u origin 分支名

**gh-pages 分支比较特殊，该分支上的内容可以使用 github 账户名.github.io/仓库名 地址访问**

- 拉取主分支上的更新

  > git pull origin master

- 拉取其他分支上的更新

  > git merge 分支名

  _拉取完之后自动生成新的版本，之后直接使用 git push 就可以同步更新到云端_

**将其他分支合并到主分支流程：1.跳到主分支上（checkout） 2.拉去其他分支更新（merge） 3.上传 git push。在 1 之前，可以先拉去主分支上更新（origin），确保本地版本和网上是一致的**

### 实现历史回滚

- git reset --hard 版本号
  > 回滚之后想要直接同步到远端，由于远端的版本优先于本地，所以直接 `git push` 失败. 使用`git push -f` 强制推送到远端。想要回滚之后再回到原来的版本，版本号找不到了，我们使用`git reflog` ，可查看所有版本的修改，就可以看到所有的版本号了。

### 上传项目

如何将 react 项目部署到 github 的 gh-pages 分支
方案一
验证我们的项目在 npm start 环境下可以正常运行
package.json 内添加 homapage: "http://Sunny-zz.github.io/react-cart"
网上新建仓库将我们的项目传到网上
本地新建 gh-pages 分支
切换到 gh-pages 分支，执行 npm run build 然后将里面的所有内容删除 只留下 .git .gitignore 以及 build 文件夹下的所有内容(不需要 build 文件夹)
然后 git 三步 更新 gh-pages
最后到 http://Sunny-zz.github.io/react-cart 就可以访问项目了
如果 homepage 填写错误，想要更改的话，需要先到 mster 分支更新 package.json 的 homepage，然后执行 npm run build 将 build 内的 文件拷贝，再然后切换到 gh-pages 分支，将拷贝的内容粘贴到这里。最后更新 gh-pages 分支。

方案二
验证我们的项目在 npm start 环境下可以正常运行
package.json 内添加 "homepage": "http://v48j.github.io/react-cart"
安装 gh-pages 包 `npm i -D gh-pages`
在 package.json 中的 script 字段下添加 "predeploy": "npm run build", "deploy": "gh-pages -d build"
网上新建仓库将我们的项目传到网上(主分支)
执行 npm run deploy
最后到 http://v48j.github.io/react-cart 就可以访问项目了

方案三
将 react 项目部署到 netlify 免费服务器
将我们的项目上传到 github 仓库
到 netlify 网站上点击 New sit from Git，选择 GItHub，点击你要部署的仓库名
Branch to Deploy 选择 master 分支，Build command 填写 npm run build ,Publish directory 填写 build/
最后点击 Deploy site ，在弹出的页面等待几分钟就部署成功了。
注意：该方法不需要在 package.json 添加 homepage
