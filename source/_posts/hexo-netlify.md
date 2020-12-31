---
title: 使用 Netlify 自动部署 Hexo
abbrlink: d355488e
date: 2020-12-31 12:31:22
updated: 2020-12-31 13:57:54
tags:
  - Hexo
categories:
  - Hexo
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

#### 添加netlify配置
  在 blog 根目录下 `_config.yml` 文件中添加以下内容
``` yml
netlify_cms:
  config_file: netlify.yaml
```
然后在blog根目录下添加 `netlify.yaml` 文件, 文件内容如下:
``` yaml
backend:
  name: git-gateway
  branch: hexo

media_folder: source/images
public_folder: /images
publish_mode: editorial_workflow

# pages auto generate
pages: 
  enabled: true
  # over page collection config
  # if fields not set, would use posts fields config
  config:
    label: "Page"
    delete: false
    editor:
      preview: true
    # fields: 
# through hexo config over fields
over_format: true
scripts:
  - js/cms/youtube.js
  - js/cms/img.js

# A list of collections the CMS should be able to edit
collections:
  # Used in routes, ie.: /admin/collections/:slug/edit
  - name: "posts"
    # Used in the UI, ie.: "New Post"
    label: "Post"
    folder: "source/_posts" # The path to the folder where the documents are stored
    sort: "date:desc"
    create: true # Allow users to create new documents in this collection
    editor:
      preview: true
    fields: # The fields each document in this collection have
      - {label: "Title", name: "title", widget: "string"}
      - {label: "Publish Date", name: "date", widget: "datetime", format: "YYYY-MM-DD HH:mm:ss", dateFormat: "YYYY-MM-DD", timeFormat: "HH:mm:ss", required: false}
      - {label: "Updeted Date", name: "updated", widget: "datetime", format: "YYYY-MM-DD HH:mm:ss", required: false}
      - {label: "Tags", name: "tags", widget: "list", required: false}
      - {label: "Categories", name: "categories", widget: "list", required: false}
      - {label: "Body", name: "body", widget: "markdown", required: false}
      - {label: "Permalink", name: "permalink", widget: "string", required: false}
      - {label: "Comments", name: "comments", widget: "boolean", default: true, required: false}
```

#### 在 Netlify 网站设置 Identity
Identity -> service -> enable Git Gateway
Identity -> Registration -> 设置为 invite only

#### invite user
邀请自己注册Identity账号

