<template>
  <div>
    <xyr-avue-curd ref="avueCurdRef" row-key="id" :data="data" :option="option">
      <template #name="{ row }">
        {{ row.name + "_2" }}
      </template>
    </xyr-avue-curd>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const avueCurdRef = ref();
const data = ref([
  { id: 1, name: "张三", sex: "男" },
  { id: 2, name: "李四", sex: "女" },
  { id: 3, name: "王五", sex: "男" },
  { id: 4, name: "赵六", sex: "女" },
  { id: 5, name: "钱琪", sex: "男" },
  { id: 6, name: "拔桩", sex: "女" },
  { id: 7, name: "danile", sex: "男" },
  { id: 8, name: "jason", sex: "女" }
]);

const option = ref({
  height: 600,
  selection: true,
  column: [
    { label: "姓名", prop: "name", width: 200, fixed: true },
    { label: "性别", prop: "sex", width: 300 }
  ]
});

// setTimeout(() => {
//   avueCurdRef.value.toggleSelection(data.value.slice(1, 4), true);
// }, 2000);
</script>
