### shell 基本命令

- **ls 命令:查看当前目录下文件**

  -a:查看隐藏文件

  -l:查看详细信息

- **cd 命令：跳转目录**

  cd D: 跳转盘符

  cd test/ 跳转到 test 文件下

  cd test/aaa/

  cd ../跳转到上一级

- **pwd 命令：输出所在文件位置**

- **touch 命令：创建文件**

  touch a.ppt b.html 创建文件 a.ppt b.html

- **mkdir 命令：创建文件夹**

  mkdir mozan/

  mkdir mozan/ && touch index.html 创建文件夹和文件

  mkdir ../mozan 在上级创建文件 在写文件或文件夹的地方都可以写路径

- **rm 命令：删除文件或文件夹**

  rm index.html 删除文件

  rm -r mozan/ 删除文件夹，需要参数-r

  rm -rf mozan/ 删除，参数-f 是强制删除

  注： ./ 当前目录 ../上级目录 \*所有文件 例如 rm . /\*删除本文件夹下所有文件

- **cat 命令：查看文件内容**

  cat index.html

- **cp 命令：复制文件或文件夹**

  cp a.txt ../bbb/new.txt 把 a.txt 复制到 bbb 下，改名为 new.txt

  cp aaa/ bbb/

- **mv 命令：移动文件或文件夹**

  与 cp 命令用法一样，只是把文件剪切过去 123456a

- **ifconfig 命令：查看自己的 ip**

win10 看 ipv4
