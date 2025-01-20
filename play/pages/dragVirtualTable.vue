<template>
  <div>
    <drag-virtual-table
      ref="dragVirtualListRef"
      :data="tableData"
      :columns="columns"
      :isHeader="false"
      show-overflow
      height="500"
      id="id"
      size="small"
      :dragSlot="true"
      :row-config="{ isHover: true, useKey: false }"
      :scroll-y="{ enabled: true }"
      :isNumSort="true"
      :resizable="true"
    >
      <template #name_default="{ row }">
        {{ row.name }}
      </template>
    </drag-virtual-table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
const loading = ref(true);
const tableData = ref<any>([]);

const columns = [
  // {
  //   type: "seq" as const,
  //   field: "seq",
  //   title: "序号",
  //   width: 60,
  //   //slots: { default: "seq_default" },
  // },
  {
    field: "id",
    title: "id",
    width: 100
  },
  {
    field: "name",
    title: "名称",
    sortable: true,
    slots: { default: "name_default" }
  },
  { field: "role", title: "角色" },
  { field: "sex", title: "性别" }
];

async function onSearch() {
  loading.value = true;
  // 模拟数据
  const mockList: any[] = [];
  for (let index = 0; index < 20000; index++) {
    mockList.push({
      id: index + 1,
      name: "Test" + index,
      role: "Developer",
      sex: "男"
    });
  }
  tableData.value = mockList;
  loading.value = false;
}

onMounted(() => {
  onSearch();
});
</script>
