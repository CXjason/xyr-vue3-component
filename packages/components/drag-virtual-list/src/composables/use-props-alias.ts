import { computed } from "vue";

import type { DragVirtualListPropsAlias } from "../drag-virtual-list";

export const usePropsAlias = (props: { props: DragVirtualListPropsAlias }) => {
  const initProps: Required<DragVirtualListPropsAlias> = {
    label: "label",
    key: "key",
    disabled: "disabled"
  };

  return computed(() => ({
    ...initProps,
    ...props.props
  }));
};
