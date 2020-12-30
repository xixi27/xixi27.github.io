---
title: Hexo 和 Next 的简单配置及常见问题
tags:
  - Hexo
categories:
  - Hexo
abbrlink: f19bf38c
date: 2020-12-29 17:08:21
---

# Next 主题中文配置不生效
将`\themes\next\_config.yml`下的language设置成`zh-Hans`
``` yml
language: zh-Hans
```
若设置不生效，查看`\themes\next\languages\`目录下是否有`zh-Hans.yml`, 如果没有，则将`zh-CN.yml`文件名改为`zh-Hans.yml`

# 设置symbols_count_time统计单词
## 在Hexo的根目录下安装symbols_count_time
``` bash
npm install hexo-symbols-count-time
```

<!-- more -->

## 配置 hexo 站点配置文件 `_config.yml` 添加以下内容
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

## 在 `\themes\next\_config.yml` 配置单词统计功能
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

## 重新生成 hexo
``` bash
hexo clean && hexo g && hexo s
```
# hexo 添加多个categories
## 子分类
```
categories:
  - Java
  - Servlet
```

```
categories: [Java, Servlet]
```

## 多个分类
```
categories:
  - [Java]
  - [Servlet]
```

# hexo 修改字体大小
在 `themes\next\_config.yml` 文件中修改 `font`, `enable` 要设置为`true`
``` yml
font:
  enable: true

  # Uri of fonts host, e.g. https://fonts.googleapis.com (Default).
  host:

  # Font options:
  # `external: true` will load this font family from `host` above.
  # `family: Times New Roman`. Without any quotes.
  # `size: x.x`. Use `em` as unit. Default: 1 (16px)

  # Global font settings used for all elements inside <body>.
  global:
    external: true
    family: Lato
    size: 0.8

  # Font settings for site title (.site-title).
  title:
    external: true
    family:
    size: 0.8

  # Font settings for headlines (<h1> to <h6>).
  headings:
    external: true
    family:
    size: 1.8

  # Font settings for posts (.post-body).
  posts:
    external: true
    family:

  # Font settings for <code> and code blocks.
  codes:
    external: true
    family:
```

# 没有 `custom` 文件
在 `next\_config.yml` 文件中, 找到 `custom_file_path`, 定义custom文件路径
``` yml
custom_file_path:
  #head: source/_data/head.swig
  #header: source/_data/header.swig
  #sidebar: source/_data/sidebar.swig
  #postMeta: source/_data/post-meta.swig
  #postBodyEnd: source/_data/post-body-end.swig
  #footer: source/_data/footer.swig
  #bodyEnd: source/_data/body-end.swig
  #variable: source/_data/variables.styl
  #mixin: source/_data/mixins.styl
  style: source/_data/styles.styl
```

<p style="color: orange; font-weight: bold">在blog根目录下创建source/_data/styles.styl</p>

# 修改加载特效
在 `next\_config.yml` 文件中找到 `pace`
``` yml
# Progress bar in the top during page loading.
# Dependencies: https://github.com/theme-next/theme-next-pace
# For more information: https://github.com/HubSpot/pace
pace:
  enable: true
  # Themes list:
  # big-counter | bounce | barber-shop | center-atom | center-circle | center-radar | center-simple
  # corner-indicator | fill-left | flat-top | flash | loading-bar | mac-osx | material | minimal
  theme: fill-left
```

# 修改文章链接
``` bash
npm install hexo-abbrlink --save
```
修改根目录站点配置文件 `_config.yml`
``` yml
permalink: posts/:abbrlink/
abbrlink:
	alg: crc32   #算法： crc16(default) and crc32
	rep: hex     #进制： dec(default) and hex
```
<p style="color: orange; font-weight: bold">abbrlink有四种生成方式</p>

``` bash
crc16 & hex
crc16 & dec
crc32 & hex
crc32 & dec
```

