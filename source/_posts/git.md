---
title: Git 的配置及使用
date: 2020-12-24 21:21:37
tags:
- Git
categories:
- Git
---

### vscode 配置 git
#### `vscode 配置git终端`
``` bash
"terminal.integrated.shell.windows": "D:\\Program Files\\Git\\bin\\bash.exe"
```

#### `vscode 添加git插件`
``` bash
Gitlens
```

<!--more-->
### git 生成秘钥
#### `一个账号`
``` bash
# 生成秘钥
ssh-keygen

# 添加秘钥到SSH Agent
ssh-agent bash
ssh-add ~/.ssh/id_rsa
ssh-add ~/.ssh/id_rsa_star_plan
```

#### `多个账号`
``` bash
# 生成秘钥
ssh-keygen -t rsa  -f ~/.ssh/id_rsa_oschina

# 在D:\Program Files\Git\etc\ssh\ssh_config 文件末尾添加以下内容

# 配置github.com
Host github.com
HostName ssh.github.com
IdentityFile C:\\Users\\[yourname]\\.ssh\\id_rsa_1
PreferredAuthentications publickey
User [username]
Port 443

# 配置gitLab 
Host [gitLab url]
HostName [hostname]
IdentityFile C:\\Users\\[yourname]\\.ssh\\id_rsa_2
PreferredAuthentications publickey
User [username]
```

### 连接git
``` bash
ssh -T git@github.com
```

### 用户名和邮箱的配置
`因为一台电脑上配置了多个git账号，所以就不能再配置全局的用户名和邮箱了，而是在不同的仓库下，如果需要连接不同的git账号,配置相应的局部用户名和邮箱即可，如果之前配置过全局的用户名和邮箱,需要取消配置`

#### `全局配置`
``` bash
# 取消全局配置
git config --global --unset user.name
git config --global --unset user.email

# 设置全局配置
git config --global user.name "xxxx"
git config --global user.email "xxxx@xx.com"
```

#### `局部配置`
``` bash
# 局部配置
git config user.name "xxxx"
git config user.email "xxxx@xx.com"
```

### git 基本常用命令
#### `git add`
``` bash
# 将改动的文件添加到缓存区, 以下两种都可以
git add -A
git add .
```

#### `git commit`
``` bash
# git commit
git commit -m "comment"

# 将改动提交到最新的commit中
# 撤销--amend, 进入vi模式下, 将comment注释掉， 保存退出即可
git commit --amend

# 删除某个commit, [commit-id]： 要删除的commit的前一个commit id, 进入编辑模式后， 将要删除的commit前面的pick改成drop
git rebase -i [commit-id]

# 回到某个commit
git reset [commit-id]
```

#### `git push`
``` bash
# 将代码提交到远程分支
git push origin [branch-name]
```

#### `git stash`
``` bash
# 将代码stash到本地
git stash save "comment"

# 查看stashlist
git stash list

# 这个指令将缓存堆栈中的第一个stash删除，并将对应修改应用到当前的工作目录下
git stash pop

# 将缓存堆栈中的stash多次应用到工作目录中，但并不删除stash拷贝
git stash apply [stash-name]

# 移除stash
git stash drop

# 删除所有缓存的stash
git stash clear
```

#### `git branch`
``` bash
# 查看当前本地所有分支
git branch

# 修改branch 的名字
git branch -m [old] [new]

# 切换分支
git checkout [branch-name]

# 基于远程的某个分支创建新的分支
git checkout -b [branch-name] origin/[origin-brnach-name]

# 基于某个commit创建分支
git checkout -b [branch-name] [commit-id]
```

#### `git tag`
``` bash
# 基于某个commit创建tag
git tag -a [tagname] [commit-id] -m [comments]

# 查看tag
git tag --list

# push tag
git push origin --tag [tagname] [commit-id]

# 删除tag
git tag -d [tagname]
```


