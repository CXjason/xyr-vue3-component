<template>
  <div>
    <xyr-drag-virtual-list
      ref="dragVirtualListRef"
      v-model:data="dataList"
      :props="defaultProps"
      :isShowCheckbox="false"
      @change="changeFn"
    ></xyr-drag-virtual-list>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
interface Item {
  id: number;
  text: string;
}
const generData = (len = 10000): Item[] =>
  Array.from({ length: len }).map((item, index) => ({
    id: index + 1,
    index,
    text: `row-${index + 1}`
  }));

const dragVirtualListRef = ref();
const dataList = ref(generData(10));

const defaultProps = {
  key: "id",
  label: "text"
};

function changeFn(val: any) {
  console.log(val);
}

// setTimeout(() => {
//   console.log(dragVirtualListRef?.value);

//   let dataList = dragVirtualListRef?.value.getList();
//   console.log(dataList);
// }, 5000);
</script>
