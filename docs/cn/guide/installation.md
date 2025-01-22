---
title: Installation
lang: cn
---

# 安装

## 环境支持 ^(2.5.0)

xyr-vue3-component 可以在支持 ES2018 和 ResizeObserver 的浏览器上运行。 如果您确实需要支持旧版本的浏览器，请自行添加 [Babel](https://babeljs.io/) 和相应的 Polyfill 。

| version | ![Chrome](https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png) <br> Chrome | ![IE](https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png) <br> Edge | ![Firefox](https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png) <br> Firefox | ![Safari](https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png) <br> Safari |
| ------- | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| < 2.5.0 | Chrome ≥ 64                                                                                | Edge ≥ 79                                                                        | Firefox ≥ 78                                                                                   | Safari ≥ 12                                                                                |
| 2.5.0 + | Chrome ≥ 85                                                                                | Edge ≥ 85                                                                        | Firefox ≥ 79                                                                                   | Safari ≥ 14.1                                                                              |

### 版本

xyr-vue3-component 目前还处于快速开发迭代中。

## 使用包管理器

```shell
# Choose a package manager you like.

# NPM
$ npm install xyr-vue3-component --save

# Yarn
$ yarn add xyr-vue3-component

# pnpm
$ pnpm install xyr-vue3-component
```

## 浏览器直接引入

直接通过浏览器的 HTML 标签导入 Element Plus，然后就可以使用全局变量 `LonsdorVue` 了。

### unpkg

```html
<head>
  <!-- Import style -->
  <link rel="stylesheet" href="//unpkg.com/xyr-vue3-component/dist/index.css" />
  <!-- Import Vue 3 -->
  <script src="//unpkg.com/vue@3"></script>
  <!-- Import component library -->
  <script src="//unpkg.com/xyr-vue3-component"></script>
</head>
```

### jsDelivr

```html
<head>
  <!-- Import style -->
  <link
    rel="stylesheet"
    href="//cdn.jsdelivr.net/npm/xyr-vue3-component/dist/index.css"
  />
  <!-- Import Vue 3 -->
  <script src="//cdn.jsdelivr.net/npm/vue@3"></script>
  <!-- Import component library -->
  <script src="//cdn.jsdelivr.net/npm/xyr-vue3-component"></script>
</head>
```

如果是通过包管理器安装，并希望配合打包工具使用，请阅读下一节：[快速上手](/cn/guide/quickstart)。
