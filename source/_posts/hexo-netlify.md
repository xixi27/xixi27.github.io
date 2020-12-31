---
title: 使用 Netlify 自动部署 Hexo
abbrlink: d355488e
date: 2020-12-31 12:31:22
tags:
categories:
---


### 注册Netlify账号
官网: https://app.netlify.com/
使用Github 账号进行注册

<!-- more -->
![netlify-register](netlify-register.PNG)

### 登录成功之后，创建site
![new-site-from-git](new-site-from-git.PNG)

选择 git 地址
![new-site-select-git](new-site-select-git.PNG)

选择 repository
![new-site-select-repository](new-site-select-repository.PNG)

### Deploy
创建成功之后，填写deploy参数
![build-setting](build-setting.PNG)

`部署成功之后，就可以查看网站了，以后只需要提交代码到github就行了，不需要手动部署了`

### Netlify CMS
Netlify CMS 可以帮助我们在线编辑blog

#### 安装 Netlify CMS
``` bash
npm i hexo-netlify-cms --save
```