---
title: Hexo 和 Next 的简单配置及常见问题
date: 2020-12-29 17:08:21
tags:
- Hexo
categories:
- Hexo
---

### Next 主题中文配置不生效
将`\themes\next\_config.yml`下的language设置成`zh-Hans`
``` yml
language: zh-Hans
```
若设置不生效，查看`\themes\next\languages\`目录下是否有`zh-Hans.yml`, 如果没有，则将`zh-CN.yml`文件名改为`zh-Hans.yml`

### 设置symbols_count_time统计单词
#### 在Hexo的根目录下安装symbols_count_time
``` bash
npm install hexo-symbols-count-time
```

<!-- more -->

#### 配置 hexo 站点配置文件 `_config.yml` 添加以下内容
``` yml
# 设置博客单词统计
symbols_count_time:
  # 文章字数统计
  symbols: true
  # 文章阅读时间统计
  time: true
  # 站点总字数统计
  total_symbols: false
  # 站点总阅读时间统计
  total_time: false
  exclude_codeblock: false
```

#### 在 `\themes\next\_config.yml` 配置单词统计功能
``` yml
# Post wordcount display settings
# Dependencies: https://github.com/theme-next/hexo-symbols-count-time
# 设置博客单词统计
symbols_count_time:
  # 是否另起一行（true的话不和发表时间等同一行）
  separated_meta: true
  # 首页文章统计数量前是否显示文字描述（本文字数、阅读时长）
  item_text_post: true
  # 页面底部统计数量前是否显示文字描述（站点总字数、站点阅读时长）
  item_text_total: false
  # 平均字长
  awl: 4
  # 每分钟阅读字数
  wpm: 275
```

#### 重新生成 hexo
``` bash
hexo clean && hexo g && hexo s
```
### hexo 添加多个categories
#### 子分类
```
categories:
  - Java
  - Servlet
```

```
categories: [Java, Servlet]
```

#### 多个分类
```
categories:
  - [Java]
  - [Servlet]
```

