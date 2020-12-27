---
title: linux 的常用命令
date: 2020-12-26 21:43:26
tags:
- Linux
categories:
- Linux
---

### `scp`
``` bash
# 上传本地文件到远程server
scp -i [rsa-path] /home/user/test.md remote-user-name@127.0.0.1:~/home

# 下载文件到本地
scp -i [rsa-path] remote-user-name@127.0.0.1:~/home/test.md /home/user/Desktop
```
<!--more-->

### `ssh`
``` bash
# 连接到远程的server
ssh user@127.0.0.1

# 使用秘钥登录
ssh -i [ras-path] user@127.0.0.1
```

### `tar`
``` bash
# 压缩文件
tar -xzvf test.tar.gz

# 解压文件
tar -zvf [解压后的文件名] [要解压的文件]

# 参数详解
-C <目录>：这个选项用在解压缩，若要在特定目录解压缩，可以使用这个选项。
-x或--extract或--get：从备份文件中还原文件；
-t或--list：列出备份文件的内容；
-z或--gzip或--ungzip：通过gzip指令处理备份文件；
-Z或--compress或--uncompress：通过compress指令处理备份文件；
-f<备份文件>或--file=<备份文件>：指定备份文件；
-v或--verbose：显示指令执行过程；
-r：添加文件到已经压缩的文件；
-u：添加改变了和现有的文件到已经存在的压缩文件；
-j：支持bzip2解压文件；
-v：显示操作过程；
-l：文件系统边界设置；
-k：保留原有文件不覆盖；
-m：保留文件不被覆盖；
-w：确认压缩文件的正确性；
-p或--same-permissions：用原来的文件权限还原文件；
-P或--absolute-names：文件名使用绝对名称，不移除文件名称前的“/”号；
```

### 文件和目录
#### `ls`
``` bash
# 查看文件的详细信息
ls -l

# 显示隐藏的文件
ls -a
```
#### `pwd`
``` bash
# 显示工作路径
pwd
```

#### `mkdir`
``` bash
# 创建目录
mkdir [dir1] [dir2] ... [dirn]
```

#### `rm`
``` bash
# 删除文件
rm -f test.md

# 删除目录
rm -rf test
```

#### `mv`
``` bash
# 重命名/移动
mv test.md ~/home/test1.md
```

#### `cp`
``` bash
# 复制一个目录下的所有文件到当前工作目录
cp dir/* .

# 复制一个目录到当前工作目录
cp -a /tmp/dir1 .

# 复制一个目录
cp -a dir1 dir2

# 复制一个目录及子目录
cp -r dir1 dir2
```

#### `df`
``` bash
# 显示已经挂载的分区列表 
df -h
```

#### `du`
``` bash
# 估算目录 'dir1' 已经使用的磁盘空间
du -sh dir1

# 以容量大小为依据依次显示文件和目录的大小
du -sk * | sort -rn
```