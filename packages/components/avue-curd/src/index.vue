vue
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import "../style/index.scss";

defineOptions({
  name: "xyrAvueCurd"
});
const emits = defineEmits(["select"]);

type PropsType = {
  data: any;
  rowKey: any;
};

let props = withDefaults(defineProps<PropsType>(), {
  data: () => [],
  rowKey: "id"
});

// 是否按住shift按键
let isShift = false;
// 最后一次点击选中或未选中
let lastRow = null;
const avueCrudRef = ref();

const selectFn = (selection, row) => {
  // 按住shift键
  if (isShift) {
    // 是否选中
    let isSelect = selection.some(
      item => item[props.rowKey] === row[props.rowKey]
    );
    let startIndex = lastRow
      ? props.data.findIndex(
          item => item[props.rowKey] === lastRow[props.rowKey]
        )
      : 0;
    let endIndex = props.data.findIndex(
      item => item[props.rowKey] === row[props.rowKey]
    );

    toggleSelectionRange(startIndex, endIndex, isSelect);
  }

  lastRow = selection.length ? row : null;

  emits("select", selection, row);
};

// 选取某一段数据选中或者移除选中
function toggleSelectionRange(startIndex, endIndex, isSelect) {
  let min = Math.min(startIndex, endIndex);
  let max = Math.max(startIndex, endIndex);
  let sliceArr = props.data.slice(min, max + 1);

  for (let item of sliceArr) {
    avueCrudRef.value.toggleRowSelection(item, isSelect);
  }

  nextTick(() => {
    let selectResult = avueCrudRef.value.$refs.table.getSelectionRows();
    avueCrudRef.value.selectionChange(selectResult);
  });

  //console.log(min, max, lastRow?.id);
}

function keyDown(e) {
  e.stopPropagation(); // 阻止事件冒泡
  if (e.keyCode === 16) {
    isShift = true;
  }
  e.preventDefault();
}

function keyUp(e) {
  e.stopPropagation(); // 阻止事件冒泡
  isShift = false;
  e.preventDefault();
}

onMounted(() => {
  document.addEventListener("keydown", keyDown);
  document.addEventListener("keyup", keyUp);
});

onBeforeUnmount(() => {
  document.removeEventListener("keydown", keyDown);
  document.removeEventListener("keyup", keyUp);
});

defineExpose(
  new Proxy(
    {},
    {
      get(_target, prop) {
        return avueCrudRef.value?.[prop];
      },
      has(_target, prop) {
        return prop in avueCrudRef.value;
      }
    }
  )
);
</script>

<template>
  <avue-crud ref="avueCrudRef" :data="data" @select="selectFn" :rowKey="rowKey">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </avue-crud>
</template>
