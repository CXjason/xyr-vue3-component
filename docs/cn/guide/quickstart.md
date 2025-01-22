---
title: 快速上手
lang: cn
---

# 快速开始

本节将介绍如何在项目中使用 xyr-vue3-component

## 用法

### 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```ts
// main.ts
import { createApp } from "vue";
import LonsdorVue from "xyr-vue3-component";
import "xyr-vue3-component/dist/index.css";
import App from "./App.vue";

const app = createApp(App);

app.use(LonsdorVue);
app.mount("#app");
```

### 手动导入

> App.vue

```html
<template>
  <el-button>I am ElButton</el-button>
</template>
<script>
  import { LonsdorDragVirtuleList } from "xyr-vue3-component";
  export default {
    components: { LonsdorDragVirtuleList }
  };
</script>
```
