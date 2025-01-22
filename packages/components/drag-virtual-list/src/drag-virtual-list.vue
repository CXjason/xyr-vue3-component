<script setup lang="ts">
import { ref } from "vue";
import { DndProvider } from "vue3-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Container from "./components/container.vue";
import "element-plus/es/components/checkbox/style/css";
import "element-plus/es/components/dropdown/style/css";
import "../style/index.scss";

defineOptions({
  name: "xyrDragVirtualList"
});

let comRef = ref();

defineExpose(
  new Proxy(
    {},
    {
      get(_target, prop) {
        return comRef.value?.[prop];
      },
      has(_target, prop) {
        return prop in comRef.value;
      }
    }
  )
);
</script>

<template>
  <DndProvider :backend="HTML5Backend">
    <Container :="$attrs" ref="comRef" />
  </DndProvider>
</template>
