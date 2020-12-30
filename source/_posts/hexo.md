---
title: Windows 下 Hexo + Github Pages 搭建 blog
tags:
  - Hexo
categories:
  - Hexo
abbrlink: 922ca1c7
date: 2020-12-26 23:10:49
---

### 安装Hexo
* 新建一个blog文件夹
* 使用npm安装Hexo
``` bash
npm install -g hexo-cli
```
<!--more-->
### 启动Hexo
* 进入blog目录，初始化hexo并安装依赖包
```
hexo init
npm install
```
* 生成页面
``` bash
# hexo 生成页面
hexo g

# 启动hexo服务
hexo s
```
* 在浏览器输入`http://localhost:4000`即可看到hexo页面

### 部署Hexo到Github Pages
* 安装hexo-deployer-git
``` bash
npm install hexo-deployer-git --save
```

* 修改`_config.yml`文件，在末尾添加以下内容
``` yml
# Deployment
## Docs: https://hexo.io/docs/one-command-deployment
deploy:
  type: 'git'
  repository: https://github.com/用户名/用户名.github.io
  branch: master
```

* 部署Hexo
``` bash
hexo d
```

### Hexo 更换Next 主题
* Clone Next 主题到本地
```
git clone https://github.com/iissnan/hexo-theme-next themes/next
```
* 修改`_config.yml`
``` yml
## Themes: https://hexo.io/themes/
theme: next
```

### Hexo 常用命令
``` bash
hexo new "name"       # 新建文章
hexo new page "name"  # 新建页面
hexo g                # 生成页面
hexo d                # 部署
hexo g -d             # 生成页面并部署
hexo s                # 本地预览
hexo clean            # 清除缓存和已生成的静态文件
hexo help             # 帮助
```

### Hexo 常见问题
#### bash: hexo: command not found
将blog目录下的`\node_modules\.bin` 配置到path环境变量中， 然后重新打开git bash.

