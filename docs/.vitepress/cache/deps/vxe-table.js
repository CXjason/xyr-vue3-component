import {
  VxeUI,
  index_esm_default,
  require_xe_utils
} from "./chunk-EE2ZVN7L.js";
import {
  Teleport,
  TransitionGroup,
  computed,
  createCommentVNode,
  defineComponent,
  h,
  init_vue_runtime_esm_bundler,
  inject,
  nextTick,
  onActivated,
  onBeforeUnmount,
  onDeactivated,
  onMounted,
  onUnmounted,
  provide,
  reactive,
  ref,
  resolveComponent,
  watch
} from "./chunk-ZK4PPNBG.js";
import "./chunk-DRCVFZUG.js";
import {
  __export,
  __toESM
} from "./chunk-EWTE5DHJ.js";

// node_modules/.pnpm/vxe-table@4.7.86_vue@3.5.12_typescript@5.6.3_/node_modules/vxe-table/es/components.js
var components_exports = {};
__export(components_exports, {
  Colgroup: () => Colgroup,
  Column: () => Column,
  Grid: () => Grid,
  Table: () => Table,
  Toolbar: () => Toolbar,
  VXETable: () => VXETable,
  VxeColgroup: () => VxeColgroup,
  VxeColumn: () => VxeColumn,
  VxeGrid: () => VxeGrid,
  VxeTable: () => VxeTable,
  VxeToolbar: () => VxeToolbar,
  VxeUI: () => VxeUI,
  _t: () => _t,
  clipboard: () => clipboard,
  commands: () => commands,
  config: () => config,
  formats: () => formats,
  getConfig: () => getConfig,
  getI18n: () => getI18n,
  getIcon: () => getIcon,
  getTheme: () => getTheme,
  globalEvents: () => globalEvents,
  globalResize: () => globalResize,
  hooks: () => hooks,
  install: () => install,
  interceptor: () => interceptor,
  log: () => log,
  menus: () => menus,
  modal: () => modal,
  print: () => print,
  readFile: () => readFile,
  renderer: () => renderer,
  saveFile: () => saveFile,
  setConfig: () => setConfig,
  setI18n: () => setI18n,
  setIcon: () => setIcon,
  setLanguage: () => setLanguage,
  setTheme: () => setTheme,
  setup: () => setup,
  t: () => t,
  use: () => use,
  validators: () => validators,
  version: () => version
});

// node_modules/.pnpm/vxe-table@4.7.86_vue@3.5.12_typescript@5.6.3_/node_modules/vxe-table/es/ui/src/utils.js
var import_xe_utils = __toESM(require_xe_utils());
function isEnableConf(conf) {
  return conf && conf.enabled !== false;
}
function isEmptyValue(cellValue) {
  return cellValue === null || cellValue === void 0 || cellValue === "";
}
function parseFile(file) {
  const name = file.name;
  const tIndex = import_xe_utils.default.lastIndexOf(name, ".");
  const type = name.substring(tIndex + 1, name.length).toLowerCase();
  const filename = name.substring(0, tIndex);
  return { filename, type };
}
function nextZIndex() {
  return index_esm_default.getNext();
}
function getLastZIndex() {
  return index_esm_default.getCurrent();
}
function hasChildrenList(item) {
  return item && item.children && item.children.length > 0;
}
function getFuncText(content, args) {
  if (content) {
    const translate = VxeUI.getConfig().translate;
    return import_xe_utils.default.toValueString(translate ? translate("" + content, args) : content);
  }
  return "";
}
function formatText(value, placeholder) {
  return "" + (isEmptyValue(value) ? placeholder ? VxeUI.getConfig().emptyCell : "" : value);
}
function eqEmptyValue(cellValue) {
  return cellValue === "" || import_xe_utils.default.eqNull(cellValue);
}

// node_modules/.pnpm/vxe-table@4.7.86_vue@3.5.12_typescript@5.6.3_/node_modules/vxe-table/es/ui/index.js
var version = "4.7.86";
VxeUI.version = version;
VxeUI.tableVersion = "4.7.86";
VxeUI.setConfig({
  emptyCell: "　",
  table: {
    fit: true,
    showHeader: true,
    animat: true,
    delayHover: 250,
    autoResize: true,
    padding: true,
    minHeight: 144,
    // keepSource: false,
    // showOverflow: null,
    // showHeaderOverflow: null,
    // showFooterOverflow: null,
    // resizeInterval: 500,
    // size: null,
    // zIndex: null,
    // stripe: false,
    // border: false,
    // round: false,
    // emptyText: '暂无数据',
    // emptyRender: {
    //   name: ''
    // },
    // rowConfig: {
    //   keyField: '_X_ROW_KEY' // 行数据的唯一主键字段名
    // },
    resizeConfig: {
      refreshDelay: 250
    },
    radioConfig: {
      // trigger: 'default'
      strict: true
    },
    checkboxConfig: {
      // trigger: 'default',
      strict: true
    },
    tooltipConfig: {
      enterable: true
    },
    validConfig: {
      showMessage: true,
      autoClear: true,
      autoPos: true,
      message: "inline",
      msgMode: "single"
    },
    columnConfig: {
      maxFixedSize: 4
    },
    // menuConfig: {
    //   visibleMethod () {}
    // },
    customConfig: {
      allowVisible: true,
      allowResizable: true,
      allowFixed: true,
      allowSort: true,
      showFooter: true,
      placement: "top-right",
      //  storage: false,
      //  checkMethod () {},
      modalOptions: {
        showMaximize: true,
        mask: true,
        lockView: true,
        resize: true,
        escClosable: true
      }
    },
    sortConfig: {
      // remote: false,
      // trigger: 'default',
      // orders: ['asc', 'desc', null],
      // sortMethod: null,
      showIcon: true,
      iconLayout: "vertical"
    },
    filterConfig: {
      // remote: false,
      // filterMethod: null,
      showIcon: true
    },
    treeConfig: {
      rowField: "id",
      parentField: "parentId",
      childrenField: "children",
      hasChildField: "hasChild",
      mapChildrenField: "_X_ROW_CHILD",
      indent: 20,
      showIcon: true
    },
    expandConfig: {
      // trigger: 'default',
      showIcon: true
    },
    editConfig: {
      // mode: 'cell',
      showIcon: true,
      showAsterisk: true,
      autoFocus: true
    },
    importConfig: {
      _typeMaps: {
        csv: 1,
        html: 1,
        xml: 1,
        txt: 1
      }
    },
    exportConfig: {
      _typeMaps: {
        csv: 1,
        html: 1,
        xml: 1,
        txt: 1
      }
    },
    printConfig: {},
    mouseConfig: {
      extension: true
    },
    keyboardConfig: {
      isEsc: true
    },
    areaConfig: {
      autoClear: true,
      selectCellByHeader: true
    },
    clipConfig: {
      isCopy: true,
      isCut: true,
      isPaste: true
    },
    fnrConfig: {
      isFind: true,
      isReplace: true
    },
    scrollX: {
      // enabled: false,
      gt: 60
      // oSize: 0
    },
    scrollY: {
      // enabled: false,
      gt: 100
      // oSize: 0
    }
  },
  // export: {
  //   types: {}
  // },
  grid: {
    // size: null,
    // zoomConfig: {
    //   escRestore: true
    // },
    formConfig: {
      enabled: true
    },
    pagerConfig: {
      enabled: true
      // perfect: false
    },
    toolbarConfig: {
      enabled: true
      // perfect: false
    },
    proxyConfig: {
      enabled: true,
      autoLoad: true,
      showResponseMsg: true,
      showActiveMsg: true,
      props: {
        list: null,
        result: "result",
        total: "page.total",
        message: "message"
      }
      // beforeItem: null,
      // beforeColumn: null,
      // beforeQuery: null,
      // afterQuery: null,
      // beforeDelete: null,
      // afterDelete: null,
      // beforeSave: null,
      // afterSave: null
    }
  },
  toolbar: {
    // size: null,
    // import: {
    //   mode: 'covering'
    // },
    // export: {
    //   types: ['csv', 'html', 'xml', 'txt']
    // },
    // buttons: []
  }
});
var iconPrefix = "vxe-table-icon-";
VxeUI.setIcon({
  // table
  TABLE_SORT_ASC: iconPrefix + "caret-up",
  TABLE_SORT_DESC: iconPrefix + "caret-down",
  TABLE_FILTER_NONE: iconPrefix + "funnel",
  TABLE_FILTER_MATCH: iconPrefix + "funnel",
  TABLE_EDIT: iconPrefix + "edit",
  TABLE_TITLE_PREFIX: iconPrefix + "question-circle-fill",
  TABLE_TITLE_SUFFIX: iconPrefix + "question-circle-fill",
  TABLE_TREE_LOADED: iconPrefix + "spinner roll",
  TABLE_TREE_OPEN: iconPrefix + "caret-right rotate90",
  TABLE_TREE_CLOSE: iconPrefix + "caret-right",
  TABLE_EXPAND_LOADED: iconPrefix + "spinner roll",
  TABLE_EXPAND_OPEN: iconPrefix + "arrow-right rotate90",
  TABLE_EXPAND_CLOSE: iconPrefix + "arrow-right",
  TABLE_CHECKBOX_CHECKED: iconPrefix + "checkbox-checked-fill",
  TABLE_CHECKBOX_UNCHECKED: iconPrefix + "checkbox-unchecked",
  TABLE_CHECKBOX_INDETERMINATE: iconPrefix + "checkbox-indeterminate-fill",
  TABLE_RADIO_CHECKED: iconPrefix + "radio-checked-fill",
  TABLE_RADIO_UNCHECKED: iconPrefix + "radio-unchecked",
  TABLE_CUSTOM_SORT: iconPrefix + "drag-handle",
  TABLE_MENU_OPTIONS: iconPrefix + "arrow-right",
  // toolbar
  TOOLBAR_TOOLS_REFRESH: iconPrefix + "repeat",
  TOOLBAR_TOOLS_REFRESH_LOADING: iconPrefix + "repeat roll",
  TOOLBAR_TOOLS_IMPORT: iconPrefix + "upload",
  TOOLBAR_TOOLS_EXPORT: iconPrefix + "download",
  TOOLBAR_TOOLS_PRINT: iconPrefix + "print",
  TOOLBAR_TOOLS_FULLSCREEN: iconPrefix + "fullscreen",
  TOOLBAR_TOOLS_MINIMIZE: iconPrefix + "minimize",
  TOOLBAR_TOOLS_CUSTOM: iconPrefix + "custom-column",
  TOOLBAR_TOOLS_FIXED_LEFT: iconPrefix + "fixed-left",
  TOOLBAR_TOOLS_FIXED_LEFT_ACTIVE: iconPrefix + "fixed-left-fill",
  TOOLBAR_TOOLS_FIXED_RIGHT: iconPrefix + "fixed-right",
  TOOLBAR_TOOLS_FIXED_RIGHT_ACTIVE: iconPrefix + "fixed-right-fill"
});
var setTheme = VxeUI.setTheme;
var getTheme = VxeUI.getTheme;
var setConfig = VxeUI.setConfig;
var getConfig = VxeUI.getConfig;
var setIcon = VxeUI.setIcon;
var getIcon = VxeUI.getIcon;
var setLanguage = VxeUI.setLanguage;
var setI18n = VxeUI.setI18n;
var getI18n = VxeUI.getI18n;
var globalEvents = VxeUI.globalEvents;
var globalResize = VxeUI.globalResize;
var renderer = VxeUI.renderer;
var validators = VxeUI.validators;
var menus = VxeUI.menus;
var formats = VxeUI.formats;
var commands = VxeUI.commands;
var interceptor = VxeUI.interceptor;
var clipboard = VxeUI.clipboard;
var log = VxeUI.log;
var hooks = VxeUI.hooks;
var use = VxeUI.use;
var setup = (options) => {
  return VxeUI.setConfig(options);
};
VxeUI.setup = setup;
var config = (options) => {
  return VxeUI.setConfig(options);
};
VxeUI.config = config;
var t = (key, args) => {
  return VxeUI.getI18n(key, args);
};
VxeUI.t = t;
var _t = (content, args) => {
  return getFuncText(content, args);
};
VxeUI._t = _t;
var VXETable = VxeUI;
var saveFile = (options) => {
  return VxeUI.saveFile(options);
};
var readFile = (options) => {
  return VxeUI.readFile(options);
};
var print = (options) => {
  return VxeUI.print(options);
};
var modal = {
  /**
   * 已废弃，兼容老版本
   * @deprecated
   */
  get(id) {
    return VxeUI.modal.get(id);
  },
  /**
   * 已废弃，兼容老版本
   * @deprecated
   */
  close(id) {
    return VxeUI.modal.close(id);
  },
  /**
   * 已废弃，兼容老版本
   * @deprecated
   */
  open(options) {
    return VxeUI.modal.open(options);
  },
  /**
   * 已废弃，兼容老版本
   * @deprecated
   */
  alert(content, title, options) {
    return VxeUI.modal.alert(content, title, options);
  },
  /**
   * 已废弃，兼容老版本
   * @deprecated
   */
  confirm(content, title, options) {
    return VxeUI.modal.confirm(content, title, options);
  },
  /**
   * 已废弃，兼容老版本
   * @deprecated
   */
  message(content, options) {
    return VxeUI.modal.message(content, options);
  },
  /**
   * 已废弃，兼容老版本
   * @deprecated
   */
  notification(content, title, options) {
    return VxeUI.modal.notification(content, title, options);
  }
};

// node_modules/.pnpm/vxe-table@4.7.86_vue@3.5.12_typescript@5.6.3_/node_modules/vxe-table/es/table/src/column.js
init_vue_runtime_esm_bundler();

// node_modules/.pnpm/vxe-table@4.7.86_vue@3.5.12_typescript@5.6.3_/node_modules/vxe-table/es/table/src/util.js
init_vue_runtime_esm_bundler();
var import_xe_utils4 = __toESM(require_xe_utils());

// node_modules/.pnpm/vxe-table@4.7.86_vue@3.5.12_typescript@5.6.3_/node_modules/vxe-table/es/table/src/columnInfo.js
var import_xe_utils2 = __toESM(require_xe_utils());

// node_modules/.pnpm/vxe-table@4.7.86_vue@3.5.12_typescript@5.6.3_/node_modules/vxe-table/es/ui/src/log.js
var { log: log2 } = VxeUI;
var version2 = `table v${"4.7.86"}`;
var warnLog = log2.create("warn", version2);
var errLog = log2.create("error", version2);

// node_modules/.pnpm/vxe-table@4.7.86_vue@3.5.12_typescript@5.6.3_/node_modules/vxe-table/es/table/src/columnInfo.js
var { getI18n: getI18n2, formats: formats2 } = VxeUI;
var ColumnInfo = class {
  /* eslint-disable @typescript-eslint/no-use-before-define */
  constructor($xeTable, _vm, { renderHeader, renderCell, renderFooter, renderData } = {}) {
    const $xeGrid = $xeTable.xegrid;
    const formatter = _vm.formatter;
    const visible = import_xe_utils2.default.isBoolean(_vm.visible) ? _vm.visible : true;
    if (true) {
      const types = ["seq", "checkbox", "radio", "expand", "html"];
      if (_vm.type && types.indexOf(_vm.type) === -1) {
        warnLog("vxe.error.errProp", [`type=${_vm.type}`, types.join(", ")]);
      }
      if (import_xe_utils2.default.isBoolean(_vm.cellRender) || _vm.cellRender && !import_xe_utils2.default.isObject(_vm.cellRender)) {
        warnLog("vxe.error.errProp", [`column.cell-render=${_vm.cellRender}`, "column.cell-render={}"]);
      }
      if (import_xe_utils2.default.isBoolean(_vm.editRender) || _vm.editRender && !import_xe_utils2.default.isObject(_vm.editRender)) {
        warnLog("vxe.error.errProp", [`column.edit-render=${_vm.editRender}`, "column.edit-render={}"]);
      }
      if (_vm.cellRender && _vm.editRender) {
        warnLog("vxe.error.errConflicts", ["column.cell-render", "column.edit-render"]);
      }
      if (_vm.type === "expand") {
        const { props: tableProps } = $xeTable;
        const { treeConfig } = tableProps;
        const { computeTreeOpts } = $xeTable.getComputeMaps();
        const treeOpts = computeTreeOpts.value;
        if (treeConfig && (treeOpts.showLine || treeOpts.line)) {
          errLog("vxe.error.errConflicts", ["tree-config.showLine", "column.type=expand"]);
        }
      }
      if (formatter) {
        if (import_xe_utils2.default.isString(formatter)) {
          const gFormatOpts = formats2.get(formatter) || import_xe_utils2.default[formatter];
          if (!gFormatOpts || !import_xe_utils2.default.isFunction(gFormatOpts.tableCellFormatMethod || gFormatOpts.cellFormatMethod)) {
            errLog("vxe.error.notFormats", [formatter]);
          }
        } else if (import_xe_utils2.default.isArray(formatter)) {
          const gFormatOpts = formats2.get(formatter[0]) || import_xe_utils2.default[formatter[0]];
          if (!gFormatOpts || !import_xe_utils2.default.isFunction(gFormatOpts.tableCellFormatMethod || gFormatOpts.cellFormatMethod)) {
            errLog("vxe.error.notFormats", [formatter[0]]);
          }
        }
      }
    }
    Object.assign(this, {
      // 基本属性
      type: _vm.type,
      property: _vm.field,
      field: _vm.field,
      title: _vm.title,
      width: _vm.width,
      minWidth: _vm.minWidth,
      maxWidth: _vm.maxWidth,
      resizable: _vm.resizable,
      fixed: _vm.fixed,
      align: _vm.align,
      headerAlign: _vm.headerAlign,
      footerAlign: _vm.footerAlign,
      showOverflow: _vm.showOverflow,
      showHeaderOverflow: _vm.showHeaderOverflow,
      showFooterOverflow: _vm.showFooterOverflow,
      className: _vm.className,
      headerClassName: _vm.headerClassName,
      footerClassName: _vm.footerClassName,
      formatter,
      footerFormatter: _vm.footerFormatter,
      sortable: _vm.sortable,
      sortBy: _vm.sortBy,
      sortType: _vm.sortType,
      filters: toFilters(_vm.filters),
      filterMultiple: import_xe_utils2.default.isBoolean(_vm.filterMultiple) ? _vm.filterMultiple : true,
      filterMethod: _vm.filterMethod,
      filterResetMethod: _vm.filterResetMethod,
      filterRecoverMethod: _vm.filterRecoverMethod,
      filterRender: _vm.filterRender,
      treeNode: _vm.treeNode,
      cellType: _vm.cellType,
      cellRender: _vm.cellRender,
      editRender: _vm.editRender,
      contentRender: _vm.contentRender,
      headerExportMethod: _vm.headerExportMethod,
      exportMethod: _vm.exportMethod,
      footerExportMethod: _vm.footerExportMethod,
      titleHelp: _vm.titleHelp,
      titlePrefix: _vm.titlePrefix,
      titleSuffix: _vm.titleSuffix,
      // 自定义参数
      params: _vm.params,
      // 渲染属性
      id: _vm.colId || import_xe_utils2.default.uniqueId("col_"),
      parentId: null,
      visible,
      // 内部属性（一旦被使用，将导致不可升级版本）
      halfVisible: false,
      defaultVisible: visible,
      defaultFixed: _vm.fixed,
      checked: false,
      halfChecked: false,
      disabled: false,
      // 分组层级
      level: 1,
      // 跨行
      rowSpan: 1,
      // 跨列
      colSpan: 1,
      // 数据排序
      order: null,
      sortTime: 0,
      // 列排序
      sortNumber: 0,
      renderSortNumber: 0,
      renderFixed: "",
      renderVisible: false,
      renderWidth: 0,
      renderHeight: 0,
      renderResizeWidth: 0,
      renderAutoWidth: 0,
      resizeWidth: 0,
      renderLeft: 0,
      renderArgs: [],
      model: {},
      renderHeader: renderHeader || _vm.renderHeader,
      renderCell: renderCell || _vm.renderCell,
      renderFooter: renderFooter || _vm.renderFooter,
      renderData,
      // 单元格插槽，只对 grid 有效
      slots: _vm.slots
    });
    if ($xeGrid) {
      const { computeProxyOpts } = $xeGrid.getComputeMaps();
      const proxyOpts = computeProxyOpts.value;
      if (proxyOpts.beforeColumn) {
        proxyOpts.beforeColumn({ $grid: $xeGrid, column: this });
      }
    }
  }
  getTitle() {
    return getFuncText(this.title || (this.type === "seq" ? getI18n2("vxe.table.seqTitle") : ""));
  }
  getKey() {
    const { type } = this;
    return this.field || (type ? `type=${type}` : null);
  }
  update(name, value) {
    if (name !== "filters") {
      if (name === "field") {
        this.property = value;
      }
      this[name] = value;
    }
  }
};

// node_modules/.pnpm/vxe-table@4.7.86_vue@3.5.12_typescript@5.6.3_/node_modules/vxe-table/es/ui/src/dom.js
var import_xe_utils3 = __toESM(require_xe_utils());
var reClsMap = {};
var browse = import_xe_utils3.default.browse();
function getPropClass(property, params) {
  return property ? import_xe_utils3.default.isFunction(property) ? property(params) : property : "";
}
function getClsRE(cls) {
  if (!reClsMap[cls]) {
    reClsMap[cls] = new RegExp(`(?:^|\\s)${cls}(?!\\S)`, "g");
  }
  return reClsMap[cls];
}
function getNodeOffset(elem, container, rest) {
  if (elem) {
    const parentElem = elem.parentNode;
    rest.top += elem.offsetTop;
    rest.left += elem.offsetLeft;
    if (parentElem && parentElem !== document.documentElement && parentElem !== document.body) {
      rest.top -= parentElem.scrollTop;
      rest.left -= parentElem.scrollLeft;
    }
    if (container && (elem === container || elem.offsetParent === container) ? 0 : elem.offsetParent) {
      return getNodeOffset(elem.offsetParent, container, rest);
    }
  }
  return rest;
}
function isPx(val) {
  return val && /^\d+(px)?$/.test(val);
}
function isScale(val) {
  return val && /^\d+%$/.test(val);
}
function hasClass(elem, cls) {
  return elem && elem.className && elem.className.match && elem.className.match(getClsRE(cls));
}
function removeClass(elem, cls) {
  if (elem && hasClass(elem, cls)) {
    elem.className = elem.className.replace(getClsRE(cls), "");
  }
}
function addClass(elem, cls) {
  if (elem && !hasClass(elem, cls)) {
    removeClass(elem, cls);
    elem.className = `${elem.className} ${cls}`;
  }
}
function getDomNode() {
  const documentElement = document.documentElement;
  const bodyElem = document.body;
  return {
    scrollTop: documentElement.scrollTop || bodyElem.scrollTop,
    scrollLeft: documentElement.scrollLeft || bodyElem.scrollLeft,
    visibleHeight: documentElement.clientHeight || bodyElem.clientHeight,
    visibleWidth: documentElement.clientWidth || bodyElem.clientWidth
  };
}
function getOffsetHeight(elem) {
  return elem ? elem.offsetHeight : 0;
}
function getPaddingTopBottomSize(elem) {
  if (elem) {
    const computedStyle = getComputedStyle(elem);
    const paddingTop = import_xe_utils3.default.toNumber(computedStyle.paddingTop);
    const paddingBottom = import_xe_utils3.default.toNumber(computedStyle.paddingBottom);
    return paddingTop + paddingBottom;
  }
  return 0;
}
function setScrollTop(elem, scrollTop) {
  if (elem) {
    elem.scrollTop = scrollTop;
  }
}
function setScrollLeft(elem, scrollLeft) {
  if (elem) {
    elem.scrollLeft = scrollLeft;
  }
}
function updateCellTitle(overflowElem, column) {
  const content = column.type === "html" ? overflowElem.innerText : overflowElem.textContent;
  if (overflowElem.getAttribute("title") !== content) {
    overflowElem.setAttribute("title", content);
  }
}
function getEventTargetNode(evnt, container, queryCls, queryMethod) {
  let targetElem;
  let target = evnt.target.shadowRoot && evnt.composed ? evnt.composedPath()[0] || evnt.target : evnt.target;
  while (target && target.nodeType && target !== document) {
    if (queryCls && hasClass(target, queryCls) && (!queryMethod || queryMethod(target))) {
      targetElem = target;
    } else if (target === container) {
      return { flag: queryCls ? !!targetElem : true, container, targetElem };
    }
    target = target.parentNode;
  }
  return { flag: false };
}
function getOffsetPos(elem, container) {
  return getNodeOffset(elem, container, { left: 0, top: 0 });
}
function getAbsolutePos(elem) {
  const bounding = elem.getBoundingClientRect();
  const boundingTop = bounding.top;
  const boundingLeft = bounding.left;
  const { scrollTop, scrollLeft, visibleHeight, visibleWidth } = getDomNode();
  return { boundingTop, top: scrollTop + boundingTop, boundingLeft, left: scrollLeft + boundingLeft, visibleHeight, visibleWidth };
}
var scrollIntoViewIfNeeded = "scrollIntoViewIfNeeded";
var scrollIntoView = "scrollIntoView";
function scrollToView(elem) {
  if (elem) {
    if (elem[scrollIntoViewIfNeeded]) {
      elem[scrollIntoViewIfNeeded]();
    } else if (elem[scrollIntoView]) {
      elem[scrollIntoView]();
    }
  }
}
function triggerEvent(targetElem, type) {
  if (targetElem) {
    targetElem.dispatchEvent(new Event(type));
  }
}
function isNodeElement(elem) {
  return elem && elem.nodeType === 1;
}

// node_modules/.pnpm/vxe-table@4.7.86_vue@3.5.12_typescript@5.6.3_/node_modules/vxe-table/es/table/src/util.js
var getAllConvertColumns = (columns, parentColumn) => {
  const result = [];
  columns.forEach((column) => {
    column.parentId = parentColumn ? parentColumn.id : null;
    if (column.visible) {
      if (column.children && column.children.length && column.children.some((column2) => column2.visible)) {
        result.push(column);
        result.push(...getAllConvertColumns(column.children, column));
      } else {
        result.push(column);
      }
    }
  });
  return result;
};
var convertHeaderColumnToRows = (originColumns) => {
  let maxLevel = 1;
  const traverse = (column, parent) => {
    if (parent) {
      column.level = parent.level + 1;
      if (maxLevel < column.level) {
        maxLevel = column.level;
      }
    }
    if (column.children && column.children.length && column.children.some((column2) => column2.visible)) {
      let colSpan = 0;
      column.children.forEach((subColumn) => {
        if (subColumn.visible) {
          traverse(subColumn, column);
          colSpan += subColumn.colSpan;
        }
      });
      column.colSpan = colSpan;
    } else {
      column.colSpan = 1;
    }
  };
  originColumns.forEach((column) => {
    column.level = 1;
    traverse(column);
  });
  const rows = [];
  for (let i = 0; i < maxLevel; i++) {
    rows.push([]);
  }
  const allColumns = getAllConvertColumns(originColumns);
  allColumns.forEach((column) => {
    if (column.children && column.children.length && column.children.some((column2) => column2.visible)) {
      column.rowSpan = 1;
    } else {
      column.rowSpan = maxLevel - column.level + 1;
    }
    rows[column.level - 1].push(column);
  });
  return rows;
};
function restoreScrollLocation($xeTable, scrollLeft, scrollTop) {
  const { internalData } = $xeTable;
  return $xeTable.clearScroll().then(() => {
    if (scrollLeft || scrollTop) {
      internalData.lastScrollLeft = 0;
      internalData.lastScrollTop = 0;
      return $xeTable.scrollTo(scrollLeft, scrollTop);
    }
  });
}
function removeScrollListener(scrollElem) {
  if (scrollElem && scrollElem._onscroll) {
    scrollElem.onscroll = null;
  }
}
function restoreScrollListener(scrollElem) {
  if (scrollElem && scrollElem._onscroll) {
    scrollElem.onscroll = scrollElem._onscroll;
  }
}
function getRowUniqueId() {
  return import_xe_utils4.default.uniqueId("row_");
}
function getRowkey($xeTable) {
  const { props } = $xeTable;
  const { computeRowOpts } = $xeTable.getComputeMaps();
  const { rowId } = props;
  const rowOpts = computeRowOpts.value;
  return rowId || rowOpts.keyField || "_X_ROW_KEY";
}
function getRowid($xeTable, row) {
  const rowid = import_xe_utils4.default.get(row, getRowkey($xeTable));
  return import_xe_utils4.default.eqNull(rowid) ? "" : encodeURIComponent(rowid);
}
var handleFieldOrColumn = ($xeTable, fieldOrColumn) => {
  if (fieldOrColumn) {
    return import_xe_utils4.default.isString(fieldOrColumn) ? $xeTable.getColumnByField(fieldOrColumn) : fieldOrColumn;
  }
  return null;
};
function getPaddingLeftRightSize(elem) {
  if (elem) {
    const computedStyle = getComputedStyle(elem);
    const paddingLeft = import_xe_utils4.default.toNumber(computedStyle.paddingLeft);
    const paddingRight = import_xe_utils4.default.toNumber(computedStyle.paddingRight);
    return paddingLeft + paddingRight;
  }
  return 0;
}
function getElemenMarginWidth(elem) {
  if (elem) {
    const computedStyle = getComputedStyle(elem);
    const marginLeft = import_xe_utils4.default.toNumber(computedStyle.marginLeft);
    const marginRight = import_xe_utils4.default.toNumber(computedStyle.marginRight);
    return elem.offsetWidth + marginLeft + marginRight;
  }
  return 0;
}
function queryCellElement(cell, selector) {
  return cell.querySelector(".vxe-cell" + selector);
}
function toFilters(filters) {
  if (filters && import_xe_utils4.default.isArray(filters)) {
    return filters.map(({ label, value, data, resetValue, checked }) => {
      return { label, value, data, resetValue, checked: !!checked, _checked: !!checked };
    });
  }
  return filters;
}
function toTreePathSeq(path) {
  return path.map((num, i) => i % 2 === 0 ? Number(num) + 1 : ".").join("");
}
function getCellValue(row, column) {
  return import_xe_utils4.default.get(row, column.field);
}
function setCellValue(row, column, value) {
  return import_xe_utils4.default.set(row, column.field, value);
}
function getColReMinWidth(params) {
  const { $table, column, cell } = params;
  const { props: tableProps } = $table;
  const { computeResizableOpts } = $table.getComputeMaps();
  const resizableOpts = computeResizableOpts.value;
  const { minWidth: reMinWidth } = resizableOpts;
  if (reMinWidth) {
    const customMinWidth = import_xe_utils4.default.isFunction(reMinWidth) ? reMinWidth(params) : reMinWidth;
    if (customMinWidth !== "auto") {
      return Math.max(1, import_xe_utils4.default.toNumber(customMinWidth));
    }
  }
  const { showHeaderOverflow: allColumnHeaderOverflow } = tableProps;
  const { showHeaderOverflow, minWidth: colMinWidth } = column;
  const headOverflow = import_xe_utils4.default.isUndefined(showHeaderOverflow) || import_xe_utils4.default.isNull(showHeaderOverflow) ? allColumnHeaderOverflow : showHeaderOverflow;
  const showEllipsis = headOverflow === "ellipsis";
  const showTitle = headOverflow === "title";
  const showTooltip = headOverflow === true || headOverflow === "tooltip";
  const hasEllipsis = showTitle || showTooltip || showEllipsis;
  const minTitleWidth = import_xe_utils4.default.floor((import_xe_utils4.default.toNumber(getComputedStyle(cell).fontSize) || 14) * 1.6);
  const paddingLeftRight = getPaddingLeftRightSize(cell) + getPaddingLeftRightSize(queryCellElement(cell, ""));
  let mWidth = minTitleWidth + paddingLeftRight;
  if (hasEllipsis) {
    const checkboxIconWidth = getPaddingLeftRightSize(queryCellElement(cell, "--title>.vxe-cell--checkbox"));
    const requiredIconWidth = getElemenMarginWidth(queryCellElement(cell, ">.vxe-cell--required-icon"));
    const editIconWidth = getElemenMarginWidth(queryCellElement(cell, ">.vxe-cell--edit-icon"));
    const prefixIconWidth = getElemenMarginWidth(queryCellElement(cell, ">.vxe-cell-title-prefix-icon"));
    const suffixIconWidth = getElemenMarginWidth(queryCellElement(cell, ">.vxe-cell-title-suffix-icon"));
    const sortIconWidth = getElemenMarginWidth(queryCellElement(cell, ">.vxe-cell--sort"));
    const filterIconWidth = getElemenMarginWidth(queryCellElement(cell, ">.vxe-cell--filter"));
    mWidth += checkboxIconWidth + requiredIconWidth + editIconWidth + prefixIconWidth + suffixIconWidth + filterIconWidth + sortIconWidth;
  }
  if (colMinWidth) {
    const { refTableBody } = $table.getRefMaps();
    const tableBody = refTableBody.value;
    const bodyElem = tableBody ? tableBody.$el : null;
    if (bodyElem) {
      if (isScale(colMinWidth)) {
        const bodyWidth = bodyElem.clientWidth - 1;
        const meanWidth = bodyWidth / 100;
        return Math.max(mWidth, Math.floor(import_xe_utils4.default.toInteger(colMinWidth) * meanWidth));
      } else if (isPx(colMinWidth)) {
        return Math.max(mWidth, import_xe_utils4.default.toInteger(colMinWidth));
      }
    }
  }
  return mWidth;
}
function isColumnInfo(column) {
  return column && (column.constructor === ColumnInfo || column instanceof ColumnInfo);
}
function createColumn($xeTable, options, renderOptions) {
  return isColumnInfo(options) ? options : reactive(new ColumnInfo($xeTable, options, renderOptions));
}
function watchColumn($xeTable, props, column) {
  Object.keys(props).forEach((name) => {
    watch(() => props[name], (value) => {
      column.update(name, value);
      if ($xeTable) {
        if (name === "filters") {
          $xeTable.setFilter(column, value);
          $xeTable.handleUpdateDataQueue();
        } else if (["visible", "fixed", "width", "minWidth", "maxWidth"].includes(name)) {
          $xeTable.handleRefreshColumnQueue();
        }
      }
    });
  });
}
function assembleColumn($xeTable, elem, column, colgroup) {
  const { reactData } = $xeTable;
  const { staticColumns } = reactData;
  const parentElem = elem.parentNode;
  const parentColumn = colgroup ? colgroup.columnConfig : null;
  const parentCols = parentColumn ? parentColumn.children : staticColumns;
  if (parentElem && parentCols) {
    parentCols.splice(import_xe_utils4.default.arrayIndexOf(parentElem.children, elem), 0, column);
    reactData.staticColumns = staticColumns.slice(0);
  }
}
function destroyColumn($xeTable, column) {
  const { reactData } = $xeTable;
  const { staticColumns } = reactData;
  const matchObj = import_xe_utils4.default.findTree(staticColumns, (item) => item.id === column.id, { children: "children" });
  if (matchObj) {
    matchObj.items.splice(matchObj.index, 1);
  }
  reactData.staticColumns = staticColumns.slice(0);
}
function getRootColumn($xeTable, column) {
  const { internalData } = $xeTable;
  const { fullColumnIdData } = internalData;
  if (!column) {
    return null;
  }
  let parentColId = column.parentId;
  while (fullColumnIdData[parentColId]) {
    const column2 = fullColumnIdData[parentColId].column;
    parentColId = column2.parentId;
    if (!parentColId) {
      return column2;
    }
  }
  return column;
}
function mergeBodyMethod(mergeList, _rowIndex, _columnIndex) {
  for (let mIndex = 0; mIndex < mergeList.length; mIndex++) {
    const { row: mergeRowIndex, col: mergeColIndex, rowspan: mergeRowspan, colspan: mergeColspan } = mergeList[mIndex];
    if (mergeColIndex > -1 && mergeRowIndex > -1 && mergeRowspan && mergeColspan) {
      if (mergeRowIndex === _rowIndex && mergeColIndex === _columnIndex) {
        return { rowspan: mergeRowspan, colspan: mergeColspan };
      }
      if (_rowIndex >= mergeRowIndex && _rowIndex < mergeRowIndex + mergeRowspan && _columnIndex >= mergeColIndex && _columnIndex < mergeColIndex + mergeColspan) {
        return { rowspan: 0, colspan: 0 };
      }
    }
  }
}
function clearTableDefaultStatus($xeTable) {
  const { props, internalData } = $xeTable;
  internalData.initStatus = false;
  $xeTable.clearSort();
  $xeTable.clearCurrentRow();
  $xeTable.clearCurrentColumn();
  $xeTable.clearRadioRow();
  $xeTable.clearRadioReserve();
  $xeTable.clearCheckboxRow();
  $xeTable.clearCheckboxReserve();
  $xeTable.clearRowExpand();
  $xeTable.clearTreeExpand();
  $xeTable.clearTreeExpandReserve();
  $xeTable.clearPendingRow();
  if ($xeTable.clearFilter) {
    $xeTable.clearFilter();
  }
  if ($xeTable.clearSelected && (props.keyboardConfig || props.mouseConfig)) {
    $xeTable.clearSelected();
  }
  if ($xeTable.clearCellAreas && props.mouseConfig) {
    $xeTable.clearCellAreas();
    $xeTable.clearCopyCellArea();
  }
  return $xeTable.clearScroll();
}
function clearTableAllStatus($xeTable) {
  if ($xeTable.clearFilter) {
    $xeTable.clearFilter();
  }
  return clearTableDefaultStatus($xeTable);
}
function rowToVisible($xeTable, row) {
  const { reactData, internalData } = $xeTable;
  const { refTableBody } = $xeTable.getRefMaps();
  const { scrollYLoad } = reactData;
  const { afterFullData, scrollYStore } = internalData;
  const tableBody = refTableBody.value;
  const bodyElem = tableBody ? tableBody.$el : null;
  if (bodyElem) {
    const trElem = bodyElem.querySelector(`[rowid="${getRowid($xeTable, row)}"]`);
    if (trElem) {
      const bodyHeight = bodyElem.clientHeight;
      const bodySrcollTop = bodyElem.scrollTop;
      const trOffsetParent = trElem.offsetParent;
      const trOffsetTop = trElem.offsetTop + (trOffsetParent ? trOffsetParent.offsetTop : 0);
      const trHeight = trElem.clientHeight;
      if (trOffsetTop < bodySrcollTop || trOffsetTop > bodySrcollTop + bodyHeight) {
        return $xeTable.scrollTo(null, trOffsetTop);
      } else if (trOffsetTop + trHeight >= bodyHeight + bodySrcollTop) {
        return $xeTable.scrollTo(null, bodySrcollTop + trHeight);
      }
    } else {
      if (scrollYLoad) {
        return $xeTable.scrollTo(null, ($xeTable.findRowIndexOf(afterFullData, row) - 1) * scrollYStore.rowHeight);
      }
    }
  }
  return Promise.resolve();
}
function colToVisible($xeTable, column) {
  const { reactData, internalData } = $xeTable;
  const { refTableBody } = $xeTable.getRefMaps();
  const { scrollXLoad } = reactData;
  const { visibleColumn } = internalData;
  const tableBody = refTableBody.value;
  const bodyElem = tableBody ? tableBody.$el : null;
  if (bodyElem) {
    const tdElem = bodyElem.querySelector(`.${column.id}`);
    if (tdElem) {
      const bodyWidth = bodyElem.clientWidth;
      const bodySrcollLeft = bodyElem.scrollLeft;
      const tdOffsetParent = tdElem.offsetParent;
      const tdOffsetLeft = tdElem.offsetLeft + (tdOffsetParent ? tdOffsetParent.offsetLeft : 0);
      const tdWidth = tdElem.clientWidth;
      if (tdOffsetLeft < bodySrcollLeft || tdOffsetLeft > bodySrcollLeft + bodyWidth) {
        return $xeTable.scrollTo(tdOffsetLeft);
      } else if (tdOffsetLeft + tdWidth >= bodyWidth + bodySrcollLeft) {
        return $xeTable.scrollTo(bodySrcollLeft + tdWidth);
      }
    } else {
      if (scrollXLoad) {
        let scrollLeft = 0;
        for (let index = 0; index < visibleColumn.length; index++) {
          const currCol = visibleColumn[index];
          if (currCol === column || currCol.id === column.id) {
            break;
          }
          scrollLeft += currCol.renderWidth;
        }
        return $xeTable.scrollTo(scrollLeft);
      }
    }
  }
  return Promise.resolve();
}

// node_modules/.pnpm/vxe-table@4.7.86_vue@3.5.12_typescript@5.6.3_/node_modules/vxe-table/es/table/src/cell.js
init_vue_runtime_esm_bundler();
var import_xe_utils6 = __toESM(require_xe_utils());

// node_modules/.pnpm/vxe-table@4.7.86_vue@3.5.12_typescript@5.6.3_/node_modules/vxe-table/es/ui/src/vn.js
var import_xe_utils5 = __toESM(require_xe_utils());
function getOnName(type) {
  return "on" + type.substring(0, 1).toLocaleUpperCase() + type.substring(1);
}
function getModelEvent(renderOpts) {
  switch (renderOpts.name) {
    case "input":
    case "textarea":
      return "input";
    case "select":
      return "change";
  }
  return "update:modelValue";
}
function getChangeEvent(renderOpts) {
  switch (renderOpts.name) {
    case "input":
    case "textarea":
    case "VxeInput":
    case "VxeNumberInput":
    case "VxeTextarea":
    case "$input":
    case "$textarea":
      return "input";
  }
  return "change";
}
function getSlotVNs(vns) {
  if (import_xe_utils5.default.isArray(vns)) {
    return vns;
  }
  return [vns];
}

// node_modules/.pnpm/vxe-table@4.7.86_vue@3.5.12_typescript@5.6.3_/node_modules/vxe-table/es/table/src/cell.js
var { getI18n: getI18n3, getIcon: getIcon2, renderer: renderer2, formats: formats3 } = VxeUI;
function renderTitlePrefixIcon(params) {
  const { $table, column } = params;
  const titlePrefix = column.titlePrefix || column.titleHelp;
  return titlePrefix ? [
    h("i", {
      class: ["vxe-cell-title-prefix-icon", titlePrefix.icon || getIcon2().TABLE_TITLE_PREFIX],
      onMouseenter(evnt) {
        $table.triggerHeaderTitleEvent(evnt, titlePrefix, params);
      },
      onMouseleave(evnt) {
        $table.handleTargetLeaveEvent(evnt);
      }
    })
  ] : [];
}
function renderTitleSuffixIcon(params) {
  const { $table, column } = params;
  const titleSuffix = column.titleSuffix;
  return titleSuffix ? [
    h("i", {
      class: ["vxe-cell-title-suffix-icon", titleSuffix.icon || getIcon2().TABLE_TITLE_SUFFIX],
      onMouseenter(evnt) {
        $table.triggerHeaderTitleEvent(evnt, titleSuffix, params);
      },
      onMouseleave(evnt) {
        $table.handleTargetLeaveEvent(evnt);
      }
    })
  ] : [];
}
function renderTitleContent(params, content) {
  const { $table, column } = params;
  const { props, reactData } = $table;
  const { computeTooltipOpts } = $table.getComputeMaps();
  const { showHeaderOverflow: allColumnHeaderOverflow } = props;
  const { type, showHeaderOverflow } = column;
  const tooltipOpts = computeTooltipOpts.value;
  const showAllTip = tooltipOpts.showAll;
  const headOverflow = import_xe_utils6.default.isUndefined(showHeaderOverflow) || import_xe_utils6.default.isNull(showHeaderOverflow) ? allColumnHeaderOverflow : showHeaderOverflow;
  const showTitle = headOverflow === "title";
  const showTooltip = headOverflow === true || headOverflow === "tooltip";
  const ons = {};
  if (showTitle || showTooltip || showAllTip) {
    ons.onMouseenter = (evnt) => {
      if (reactData._isResize) {
        return;
      }
      if (showTitle) {
        updateCellTitle(evnt.currentTarget, column);
      } else if (showTooltip || showAllTip) {
        $table.triggerHeaderTooltipEvent(evnt, params);
      }
    };
  }
  if (showTooltip || showAllTip) {
    ons.onMouseleave = (evnt) => {
      if (reactData._isResize) {
        return;
      }
      if (showTooltip || showAllTip) {
        $table.handleTargetLeaveEvent(evnt);
      }
    };
  }
  return [
    type === "html" && import_xe_utils6.default.isString(content) ? h("span", Object.assign({ class: "vxe-cell--title", innerHTML: content }, ons)) : h("span", Object.assign({ class: "vxe-cell--title" }, ons), getSlotVNs(content))
  ];
}
function formatFooterLabel(footerFormatter, params) {
  if (import_xe_utils6.default.isFunction(footerFormatter)) {
    return footerFormatter(params);
  }
  const isArr = import_xe_utils6.default.isArray(footerFormatter);
  const gFormatOpts = isArr ? formats3.get(footerFormatter[0]) : formats3.get(footerFormatter);
  const footerFormatMethod = gFormatOpts ? gFormatOpts.tableFooterCellFormatMethod : null;
  if (footerFormatMethod) {
    return isArr ? footerFormatMethod(params, ...footerFormatter.slice(1)) : footerFormatMethod(params);
  }
  return "";
}
function getFooterContent(params) {
  const { $table, column, _columnIndex, items, row } = params;
  const { slots, editRender, cellRender, footerFormatter } = column;
  const renderOpts = editRender || cellRender;
  const footerSlot = slots ? slots.footer : null;
  if (footerSlot) {
    return $table.callSlot(footerSlot, params);
  }
  if (renderOpts) {
    const compConf = renderer2.get(renderOpts.name);
    if (compConf) {
      const rtFooter = compConf.renderTableFooter || compConf.renderFooter;
      if (rtFooter) {
        return getSlotVNs(rtFooter(renderOpts, params));
      }
    }
  }
  let itemValue = "";
  if (import_xe_utils6.default.isArray(items)) {
    itemValue = items[_columnIndex];
    return [
      footerFormatter ? formatFooterLabel(footerFormatter, {
        itemValue,
        column,
        row,
        items,
        _columnIndex
      }) : formatText(itemValue, 1)
    ];
  }
  itemValue = import_xe_utils6.default.get(row, column.field);
  return [
    footerFormatter ? formatFooterLabel(footerFormatter, {
      itemValue,
      column,
      row,
      items,
      _columnIndex
    }) : formatText(itemValue, 1)
  ];
}
function getDefaultCellLabel(params) {
  const { $table, row, column } = params;
  return formatText($table.getCellLabel(row, column), 1);
}
var Cell = {
  createColumn($xeTable, columnOpts) {
    const { type, sortable, filters, editRender, treeNode } = columnOpts;
    const { props } = $xeTable;
    const { editConfig } = props;
    const { computeEditOpts, computeCheckboxOpts } = $xeTable.getComputeMaps();
    const checkboxOpts = computeCheckboxOpts.value;
    const editOpts = computeEditOpts.value;
    const renConfs = {
      renderHeader: Cell.renderDefaultHeader,
      renderCell: treeNode ? Cell.renderTreeCell : Cell.renderDefaultCell,
      renderFooter: Cell.renderDefaultFooter
    };
    switch (type) {
      case "seq":
        renConfs.renderHeader = Cell.renderSeqHeader;
        renConfs.renderCell = treeNode ? Cell.renderTreeIndexCell : Cell.renderSeqCell;
        break;
      case "radio":
        renConfs.renderHeader = Cell.renderRadioHeader;
        renConfs.renderCell = treeNode ? Cell.renderTreeRadioCell : Cell.renderRadioCell;
        break;
      case "checkbox":
        renConfs.renderHeader = Cell.renderCheckboxHeader;
        renConfs.renderCell = checkboxOpts.checkField ? treeNode ? Cell.renderTreeSelectionCellByProp : Cell.renderCheckboxCellByProp : treeNode ? Cell.renderTreeSelectionCell : Cell.renderCheckboxCell;
        break;
      case "expand":
        renConfs.renderCell = Cell.renderExpandCell;
        renConfs.renderData = Cell.renderExpandData;
        break;
      case "html":
        renConfs.renderCell = treeNode ? Cell.renderTreeHTMLCell : Cell.renderHTMLCell;
        if (filters && sortable) {
          renConfs.renderHeader = Cell.renderSortAndFilterHeader;
        } else if (sortable) {
          renConfs.renderHeader = Cell.renderSortHeader;
        } else if (filters) {
          renConfs.renderHeader = Cell.renderFilterHeader;
        }
        break;
      default:
        if (editConfig && editRender) {
          renConfs.renderHeader = Cell.renderEditHeader;
          renConfs.renderCell = editOpts.mode === "cell" ? treeNode ? Cell.renderTreeCellEdit : Cell.renderCellEdit : treeNode ? Cell.renderTreeRowEdit : Cell.renderRowEdit;
        } else if (filters && sortable) {
          renConfs.renderHeader = Cell.renderSortAndFilterHeader;
        } else if (sortable) {
          renConfs.renderHeader = Cell.renderSortHeader;
        } else if (filters) {
          renConfs.renderHeader = Cell.renderFilterHeader;
        }
    }
    return createColumn($xeTable, columnOpts, renConfs);
  },
  /**
   * 单元格
   */
  renderHeaderTitle(params) {
    const { $table, column } = params;
    const { slots, editRender, cellRender } = column;
    const renderOpts = editRender || cellRender;
    const headerSlot = slots ? slots.header : null;
    if (headerSlot) {
      return renderTitleContent(params, $table.callSlot(headerSlot, params));
    }
    if (renderOpts) {
      const compConf = renderer2.get(renderOpts.name);
      if (compConf) {
        const rtHeader = compConf.renderTableHeader || compConf.renderHeader;
        if (rtHeader) {
          return renderTitleContent(params, getSlotVNs(rtHeader(renderOpts, params)));
        }
      }
    }
    return renderTitleContent(params, formatText(column.getTitle(), 1));
  },
  renderDefaultHeader(params) {
    return renderTitlePrefixIcon(params).concat(Cell.renderHeaderTitle(params)).concat(renderTitleSuffixIcon(params));
  },
  renderDefaultCell(params) {
    const { $table, row, column } = params;
    const { slots, editRender, cellRender } = column;
    const renderOpts = editRender || cellRender;
    const defaultSlot = slots ? slots.default : null;
    if (defaultSlot) {
      return $table.callSlot(defaultSlot, params);
    }
    if (renderOpts) {
      const compConf = renderer2.get(renderOpts.name);
      if (compConf) {
        const rtCell = compConf.renderTableCell || compConf.renderCell;
        const rtDefault = compConf.renderTableDefault || compConf.renderDefault;
        const renderFn = editRender ? rtCell : rtDefault;
        if (renderFn) {
          return getSlotVNs(renderFn(renderOpts, Object.assign({ $type: editRender ? "edit" : "cell" }, params)));
        }
      }
    }
    const cellValue = $table.getCellLabel(row, column);
    const cellPlaceholder = editRender ? editRender.placeholder : "";
    return [
      h("span", {
        class: "vxe-cell--label"
      }, [
        // 如果设置占位符
        editRender && eqEmptyValue(cellValue) ? h("span", {
          class: "vxe-cell--placeholder"
        }, formatText(getFuncText(cellPlaceholder), 1)) : h("span", formatText(cellValue, 1))
      ])
    ];
  },
  renderTreeCell(params) {
    return Cell.renderTreeIcon(params, Cell.renderDefaultCell(params));
  },
  renderDefaultFooter(params) {
    return [
      h("span", {
        class: "vxe-cell--item"
      }, getFooterContent(params))
    ];
  },
  /**
   * 树节点
   */
  renderTreeIcon(params, cellVNodes) {
    const { $table, isHidden } = params;
    const { reactData, internalData } = $table;
    const { computeTreeOpts } = $table.getComputeMaps();
    const { treeExpandedMaps, treeExpandLazyLoadedMaps } = reactData;
    const { fullAllDataRowIdData } = internalData;
    const treeOpts = computeTreeOpts.value;
    const { row, column, level } = params;
    const { slots } = column;
    const { indent, lazy, trigger, iconLoaded, showIcon, iconOpen, iconClose } = treeOpts;
    const childrenField = treeOpts.children || treeOpts.childrenField;
    const hasChildField = treeOpts.hasChild || treeOpts.hasChildField;
    const rowChilds = row[childrenField];
    const hasChild = rowChilds && rowChilds.length;
    const iconSlot = slots ? slots.icon : null;
    let hasLazyChilds = false;
    let isAceived = false;
    let isLazyLoading = false;
    let isLazyLoaded = false;
    const ons = {};
    if (iconSlot) {
      return $table.callSlot(iconSlot, params);
    }
    if (!isHidden) {
      const rowid = getRowid($table, row);
      isAceived = !!treeExpandedMaps[rowid];
      if (lazy) {
        const rest = fullAllDataRowIdData[rowid];
        isLazyLoading = !!treeExpandLazyLoadedMaps[rowid];
        hasLazyChilds = row[hasChildField];
        isLazyLoaded = !!rest.treeLoaded;
      }
    }
    if (!trigger || trigger === "default") {
      ons.onClick = (evnt) => {
        $table.triggerTreeExpandEvent(evnt, params);
      };
    }
    return [
      h("div", {
        class: ["vxe-cell--tree-node", {
          "is--active": isAceived
        }],
        style: {
          paddingLeft: `${level * indent}px`
        }
      }, [
        showIcon && (lazy ? isLazyLoaded ? hasChild : hasLazyChilds : hasChild) ? [
          h("div", Object.assign({ class: "vxe-tree--btn-wrapper" }, ons), [
            h("i", {
              class: ["vxe-tree--node-btn", isLazyLoading ? iconLoaded || getIcon2().TABLE_TREE_LOADED : isAceived ? iconOpen || getIcon2().TABLE_TREE_OPEN : iconClose || getIcon2().TABLE_TREE_CLOSE]
            })
          ])
        ] : null,
        h("div", {
          class: "vxe-tree-cell"
        }, cellVNodes)
      ])
    ];
  },
  /**
   * 索引
   */
  renderSeqHeader(params) {
    const { $table, column } = params;
    const { slots } = column;
    const headerSlot = slots ? slots.header : null;
    return renderTitleContent(params, headerSlot ? $table.callSlot(headerSlot, params) : formatText(column.getTitle(), 1));
  },
  renderSeqCell(params) {
    const { $table, column } = params;
    const { props } = $table;
    const { treeConfig } = props;
    const { computeSeqOpts } = $table.getComputeMaps();
    const seqOpts = computeSeqOpts.value;
    const { slots } = column;
    const defaultSlot = slots ? slots.default : null;
    if (defaultSlot) {
      return $table.callSlot(defaultSlot, params);
    }
    const { seq } = params;
    const seqMethod = seqOpts.seqMethod;
    return [formatText(seqMethod ? seqMethod(params) : treeConfig ? seq : (seqOpts.startIndex || 0) + seq, 1)];
  },
  renderTreeIndexCell(params) {
    return Cell.renderTreeIcon(params, Cell.renderSeqCell(params));
  },
  /**
   * 单选
   */
  renderRadioHeader(params) {
    const { $table, column } = params;
    const { slots } = column;
    const headerSlot = slots ? slots.header : null;
    const titleSlot = slots ? slots.title : null;
    return renderTitleContent(params, headerSlot ? $table.callSlot(headerSlot, params) : [
      h("span", {
        class: "vxe-radio--label"
      }, titleSlot ? $table.callSlot(titleSlot, params) : formatText(column.getTitle(), 1))
    ]);
  },
  renderRadioCell(params) {
    const { $table, column, isHidden } = params;
    const { reactData } = $table;
    const { computeRadioOpts } = $table.getComputeMaps();
    const { selectRadioRow } = reactData;
    const radioOpts = computeRadioOpts.value;
    const { slots } = column;
    const { labelField, checkMethod, visibleMethod } = radioOpts;
    const { row } = params;
    const defaultSlot = slots ? slots.default : null;
    const radioSlot = slots ? slots.radio : null;
    const isChecked = $table.eqRow(row, selectRadioRow);
    const isVisible = !visibleMethod || visibleMethod({ row });
    let isDisabled = !!checkMethod;
    let ons;
    if (!isHidden) {
      ons = {
        onClick(evnt) {
          if (!isDisabled && isVisible) {
            $table.triggerRadioRowEvent(evnt, params);
          }
        }
      };
      if (checkMethod) {
        isDisabled = !checkMethod({ row });
      }
    }
    const radioParams = Object.assign(Object.assign({}, params), { checked: isChecked, disabled: isDisabled, visible: isVisible });
    if (radioSlot) {
      return $table.callSlot(radioSlot, radioParams);
    }
    const radioVNs = [];
    if (isVisible) {
      radioVNs.push(h("span", {
        class: ["vxe-radio--icon", isChecked ? getIcon2().TABLE_RADIO_CHECKED : getIcon2().TABLE_RADIO_UNCHECKED]
      }));
    }
    if (defaultSlot || labelField) {
      radioVNs.push(h("span", {
        class: "vxe-radio--label"
      }, defaultSlot ? $table.callSlot(defaultSlot, radioParams) : import_xe_utils6.default.get(row, labelField)));
    }
    return [
      h("span", Object.assign({ class: ["vxe-cell--radio", {
        "is--checked": isChecked,
        "is--disabled": isDisabled
      }] }, ons), radioVNs)
    ];
  },
  renderTreeRadioCell(params) {
    return Cell.renderTreeIcon(params, Cell.renderRadioCell(params));
  },
  /**
   * 多选
   */
  renderCheckboxHeader(params) {
    const { $table, column, isHidden } = params;
    const { reactData } = $table;
    const { computeIsAllCheckboxDisabled, computeCheckboxOpts } = $table.getComputeMaps();
    const { isAllSelected: isAllCheckboxSelected, isIndeterminate: isAllCheckboxIndeterminate } = reactData;
    const isAllCheckboxDisabled = computeIsAllCheckboxDisabled.value;
    const { slots } = column;
    const headerSlot = slots ? slots.header : null;
    const titleSlot = slots ? slots.title : null;
    const checkboxOpts = computeCheckboxOpts.value;
    const headerTitle = column.getTitle();
    let ons;
    if (!isHidden) {
      ons = {
        onClick(evnt) {
          if (!isAllCheckboxDisabled) {
            $table.triggerCheckAllEvent(evnt, !isAllCheckboxSelected);
          }
        }
      };
    }
    const checkboxParams = Object.assign(Object.assign({}, params), { checked: isAllCheckboxSelected, disabled: isAllCheckboxDisabled, indeterminate: isAllCheckboxIndeterminate });
    if (headerSlot) {
      return renderTitleContent(checkboxParams, $table.callSlot(headerSlot, checkboxParams));
    }
    if (checkboxOpts.checkStrictly ? !checkboxOpts.showHeader : checkboxOpts.showHeader === false) {
      return renderTitleContent(checkboxParams, [
        h("span", {
          class: "vxe-checkbox--label"
        }, titleSlot ? $table.callSlot(titleSlot, checkboxParams) : headerTitle)
      ]);
    }
    return renderTitleContent(checkboxParams, [
      h("span", Object.assign({ class: ["vxe-cell--checkbox", {
        "is--checked": isAllCheckboxSelected,
        "is--disabled": isAllCheckboxDisabled,
        "is--indeterminate": isAllCheckboxIndeterminate
      }], title: getI18n3("vxe.table.allTitle") }, ons), [
        h("span", {
          class: ["vxe-checkbox--icon", isAllCheckboxIndeterminate ? getIcon2().TABLE_CHECKBOX_INDETERMINATE : isAllCheckboxSelected ? getIcon2().TABLE_CHECKBOX_CHECKED : getIcon2().TABLE_CHECKBOX_UNCHECKED]
        })
      ].concat(titleSlot || headerTitle ? [
        h("span", {
          class: "vxe-checkbox--label"
        }, titleSlot ? $table.callSlot(titleSlot, checkboxParams) : headerTitle)
      ] : []))
    ]);
  },
  renderCheckboxCell(params) {
    const { $table, row, column, isHidden } = params;
    const { props, reactData } = $table;
    const { treeConfig } = props;
    const { selectCheckboxMaps, treeIndeterminateMaps } = reactData;
    const { computeCheckboxOpts } = $table.getComputeMaps();
    const checkboxOpts = computeCheckboxOpts.value;
    const { labelField, checkMethod, visibleMethod } = checkboxOpts;
    const { slots } = column;
    const defaultSlot = slots ? slots.default : null;
    const checkboxSlot = slots ? slots.checkbox : null;
    let indeterminate = false;
    let isChecked = false;
    const isVisible = !visibleMethod || visibleMethod({ row });
    let isDisabled = !!checkMethod;
    let ons;
    if (!isHidden) {
      const rowid = getRowid($table, row);
      isChecked = !!selectCheckboxMaps[rowid];
      ons = {
        onClick(evnt) {
          if (!isDisabled && isVisible) {
            $table.triggerCheckRowEvent(evnt, params, !isChecked);
          }
        }
      };
      if (checkMethod) {
        isDisabled = !checkMethod({ row });
      }
      if (treeConfig) {
        indeterminate = !!treeIndeterminateMaps[rowid];
      }
    }
    const checkboxParams = Object.assign(Object.assign({}, params), { checked: isChecked, disabled: isDisabled, visible: isVisible, indeterminate });
    if (checkboxSlot) {
      return $table.callSlot(checkboxSlot, checkboxParams);
    }
    const checkVNs = [];
    if (isVisible) {
      checkVNs.push(h("span", {
        class: ["vxe-checkbox--icon", indeterminate ? getIcon2().TABLE_CHECKBOX_INDETERMINATE : isChecked ? getIcon2().TABLE_CHECKBOX_CHECKED : getIcon2().TABLE_CHECKBOX_UNCHECKED]
      }));
    }
    if (defaultSlot || labelField) {
      checkVNs.push(h("span", {
        class: "vxe-checkbox--label"
      }, defaultSlot ? $table.callSlot(defaultSlot, checkboxParams) : import_xe_utils6.default.get(row, labelField)));
    }
    return [
      h("span", Object.assign({ class: ["vxe-cell--checkbox", {
        "is--checked": isChecked,
        "is--disabled": isDisabled,
        "is--indeterminate": indeterminate,
        "is--hidden": !isVisible
      }] }, ons), checkVNs)
    ];
  },
  renderTreeSelectionCell(params) {
    return Cell.renderTreeIcon(params, Cell.renderCheckboxCell(params));
  },
  renderCheckboxCellByProp(params) {
    const { $table, row, column, isHidden } = params;
    const { props, reactData } = $table;
    const { treeConfig } = props;
    const { treeIndeterminateMaps } = reactData;
    const { computeCheckboxOpts } = $table.getComputeMaps();
    const checkboxOpts = computeCheckboxOpts.value;
    const { labelField, checkField, checkMethod, visibleMethod } = checkboxOpts;
    const indeterminateField = checkboxOpts.indeterminateField || checkboxOpts.halfField;
    const { slots } = column;
    const defaultSlot = slots ? slots.default : null;
    const checkboxSlot = slots ? slots.checkbox : null;
    let isIndeterminate = false;
    let isChecked = false;
    const isVisible = !visibleMethod || visibleMethod({ row });
    let isDisabled = !!checkMethod;
    let ons;
    if (!isHidden) {
      const rowid = getRowid($table, row);
      isChecked = import_xe_utils6.default.get(row, checkField);
      ons = {
        onClick(evnt) {
          if (!isDisabled && isVisible) {
            $table.triggerCheckRowEvent(evnt, params, !isChecked);
          }
        }
      };
      if (checkMethod) {
        isDisabled = !checkMethod({ row });
      }
      if (treeConfig) {
        isIndeterminate = !!treeIndeterminateMaps[rowid];
      }
    }
    const checkboxParams = Object.assign(Object.assign({}, params), { checked: isChecked, disabled: isDisabled, visible: isVisible, indeterminate: isIndeterminate });
    if (checkboxSlot) {
      return $table.callSlot(checkboxSlot, checkboxParams);
    }
    const checkVNs = [];
    if (isVisible) {
      checkVNs.push(h("span", {
        class: ["vxe-checkbox--icon", isIndeterminate ? getIcon2().TABLE_CHECKBOX_INDETERMINATE : isChecked ? getIcon2().TABLE_CHECKBOX_CHECKED : getIcon2().TABLE_CHECKBOX_UNCHECKED]
      }));
      if (defaultSlot || labelField) {
        checkVNs.push(h("span", {
          class: "vxe-checkbox--label"
        }, defaultSlot ? $table.callSlot(defaultSlot, checkboxParams) : import_xe_utils6.default.get(row, labelField)));
      }
    }
    return [
      h("span", Object.assign({ class: ["vxe-cell--checkbox", {
        "is--checked": isChecked,
        "is--disabled": isDisabled,
        "is--indeterminate": indeterminateField && !isChecked ? row[indeterminateField] : isIndeterminate,
        "is--hidden": !isVisible
      }] }, ons), checkVNs)
    ];
  },
  renderTreeSelectionCellByProp(params) {
    return Cell.renderTreeIcon(params, Cell.renderCheckboxCellByProp(params));
  },
  /**
   * 展开行
   */
  renderExpandCell(params) {
    const { $table, isHidden, row, column } = params;
    const { reactData } = $table;
    const { rowExpandedMaps, rowExpandLazyLoadedMaps } = reactData;
    const { computeExpandOpts } = $table.getComputeMaps();
    const expandOpts = computeExpandOpts.value;
    const { lazy, labelField, iconLoaded, showIcon, iconOpen, iconClose, visibleMethod } = expandOpts;
    const { slots } = column;
    const defaultSlot = slots ? slots.default : null;
    const iconSlot = slots ? slots.icon : null;
    let isAceived = false;
    let isLazyLoading = false;
    if (iconSlot) {
      return $table.callSlot(iconSlot, params);
    }
    if (!isHidden) {
      const rowid = getRowid($table, row);
      isAceived = !!rowExpandedMaps[rowid];
      if (lazy) {
        isLazyLoading = !!rowExpandLazyLoadedMaps[rowid];
      }
    }
    return [
      showIcon && (!visibleMethod || visibleMethod(params)) ? h("span", {
        class: ["vxe-table--expanded", {
          "is--active": isAceived
        }],
        onClick(evnt) {
          $table.triggerRowExpandEvent(evnt, params);
        }
      }, [
        h("i", {
          class: ["vxe-table--expand-btn", isLazyLoading ? iconLoaded || getIcon2().TABLE_EXPAND_LOADED : isAceived ? iconOpen || getIcon2().TABLE_EXPAND_OPEN : iconClose || getIcon2().TABLE_EXPAND_CLOSE]
        })
      ]) : null,
      defaultSlot || labelField ? h("span", {
        class: "vxe-table--expand-label"
      }, defaultSlot ? $table.callSlot(defaultSlot, params) : import_xe_utils6.default.get(row, labelField)) : null
    ];
  },
  renderExpandData(params) {
    const { $table, column } = params;
    const { slots, contentRender } = column;
    const contentSlot = slots ? slots.content : null;
    if (contentSlot) {
      return $table.callSlot(contentSlot, params);
    }
    if (contentRender) {
      const compConf = renderer2.get(contentRender.name);
      if (compConf) {
        const rtExpand = compConf.renderTableExpand || compConf.renderExpand;
        if (rtExpand) {
          return getSlotVNs(rtExpand(contentRender, params));
        }
      }
    }
    return [];
  },
  /**
   * HTML 标签
   */
  renderHTMLCell(params) {
    const { $table, column } = params;
    const { slots } = column;
    const defaultSlot = slots ? slots.default : null;
    if (defaultSlot) {
      return $table.callSlot(defaultSlot, params);
    }
    return [
      h("span", {
        class: "vxe-cell--html",
        innerHTML: getDefaultCellLabel(params)
      })
    ];
  },
  renderTreeHTMLCell(params) {
    return Cell.renderTreeIcon(params, Cell.renderHTMLCell(params));
  },
  /**
   * 排序和筛选
   */
  renderSortAndFilterHeader(params) {
    return Cell.renderDefaultHeader(params).concat(Cell.renderSortIcon(params)).concat(Cell.renderFilterIcon(params));
  },
  /**
   * 排序
   */
  renderSortHeader(params) {
    return Cell.renderDefaultHeader(params).concat(Cell.renderSortIcon(params));
  },
  renderSortIcon(params) {
    const { $table, column } = params;
    const { computeSortOpts } = $table.getComputeMaps();
    const sortOpts = computeSortOpts.value;
    const { showIcon, iconLayout, iconAsc, iconDesc } = sortOpts;
    const { order } = column;
    if (showIcon) {
      return [
        h("span", {
          class: ["vxe-cell--sort", `vxe-cell--sort-${iconLayout}-layout`]
        }, [
          h("i", {
            class: ["vxe-sort--asc-btn", iconAsc || getIcon2().TABLE_SORT_ASC, {
              "sort--active": order === "asc"
            }],
            title: getI18n3("vxe.table.sortAsc"),
            onClick(evnt) {
              evnt.stopPropagation();
              $table.triggerSortEvent(evnt, column, "asc");
            }
          }),
          h("i", {
            class: ["vxe-sort--desc-btn", iconDesc || getIcon2().TABLE_SORT_DESC, {
              "sort--active": order === "desc"
            }],
            title: getI18n3("vxe.table.sortDesc"),
            onClick(evnt) {
              evnt.stopPropagation();
              $table.triggerSortEvent(evnt, column, "desc");
            }
          })
        ])
      ];
    }
    return [];
  },
  /**
   * 筛选
   */
  renderFilterHeader(params) {
    return Cell.renderDefaultHeader(params).concat(Cell.renderFilterIcon(params));
  },
  renderFilterIcon(params) {
    const { $table, column, hasFilter } = params;
    const { reactData } = $table;
    const { filterStore } = reactData;
    const { computeFilterOpts } = $table.getComputeMaps();
    const filterOpts = computeFilterOpts.value;
    const { showIcon, iconNone, iconMatch } = filterOpts;
    return showIcon ? [
      h("span", {
        class: ["vxe-cell--filter", {
          "is--active": filterStore.visible && filterStore.column === column
        }]
      }, [
        h("i", {
          class: ["vxe-filter--btn", hasFilter ? iconMatch || getIcon2().TABLE_FILTER_MATCH : iconNone || getIcon2().TABLE_FILTER_NONE],
          title: getI18n3("vxe.table.filter"),
          onClick(evnt) {
            if ($table.triggerFilterEvent) {
              $table.triggerFilterEvent(evnt, params.column, params);
            }
          }
        })
      ])
    ] : [];
  },
  /**
   * 可编辑
   */
  renderEditHeader(params) {
    const { $table, column } = params;
    const { props } = $table;
    const { computeEditOpts } = $table.getComputeMaps();
    const { editConfig, editRules } = props;
    const editOpts = computeEditOpts.value;
    const { sortable, filters, editRender } = column;
    let isRequired = false;
    if (editRules) {
      const columnRules = import_xe_utils6.default.get(editRules, column.field);
      if (columnRules) {
        isRequired = columnRules.some((rule) => rule.required);
      }
    }
    return (isEnableConf(editConfig) ? [
      isRequired && editOpts.showAsterisk ? h("i", {
        class: "vxe-cell--required-icon"
      }) : null,
      isEnableConf(editRender) && editOpts.showIcon ? h("i", {
        class: ["vxe-cell--edit-icon", editOpts.icon || getIcon2().TABLE_EDIT]
      }) : null
    ] : []).concat(Cell.renderDefaultHeader(params)).concat(sortable ? Cell.renderSortIcon(params) : []).concat(filters ? Cell.renderFilterIcon(params) : []);
  },
  // 行格编辑模式
  renderRowEdit(params) {
    const { $table, column } = params;
    const { reactData } = $table;
    const { editStore } = reactData;
    const { actived } = editStore;
    const { editRender } = column;
    return Cell.runRenderer(params, isEnableConf(editRender) && actived && actived.row === params.row);
  },
  renderTreeRowEdit(params) {
    return Cell.renderTreeIcon(params, Cell.renderRowEdit(params));
  },
  // 单元格编辑模式
  renderCellEdit(params) {
    const { $table, column } = params;
    const { reactData } = $table;
    const { editStore } = reactData;
    const { actived } = editStore;
    const { editRender } = column;
    return Cell.runRenderer(params, isEnableConf(editRender) && actived && actived.row === params.row && actived.column === params.column);
  },
  renderTreeCellEdit(params) {
    return Cell.renderTreeIcon(params, Cell.renderCellEdit(params));
  },
  runRenderer(params, isEdit) {
    const { $table, column } = params;
    const { slots, editRender, formatter } = column;
    const defaultSlot = slots ? slots.default : null;
    const editSlot = slots ? slots.edit : null;
    const compConf = renderer2.get(editRender.name);
    const rtEdit = compConf ? compConf.renderTableEdit || compConf.renderEdit : null;
    const cellParams = Object.assign({ $type: "", isEdit }, params);
    if (isEdit) {
      cellParams.$type = "edit";
      if (editSlot) {
        return $table.callSlot(editSlot, cellParams);
      }
      if (rtEdit) {
        return getSlotVNs(rtEdit(editRender, cellParams));
      }
      return [];
    }
    if (defaultSlot) {
      return $table.callSlot(defaultSlot, cellParams);
    }
    if (formatter) {
      return [
        h("span", {
          class: "vxe-cell--label"
        }, getDefaultCellLabel(cellParams))
      ];
    }
    return Cell.renderDefaultCell(cellParams);
  }
};
var cell_default = Cell;

// node_modules/.pnpm/vxe-table@4.7.86_vue@3.5.12_typescript@5.6.3_/node_modules/vxe-table/es/table/src/column.js
var columnProps = {
  // 列唯一主键
  colId: [String, Number],
  // 渲染类型 index,radio,checkbox,expand,html
  type: String,
  // 列字段名
  field: String,
  // 列标题
  title: String,
  // 列宽度
  width: [Number, String],
  // 列最小宽度，把剩余宽度按比例分配
  minWidth: [Number, String],
  // 列最大宽度
  maxWidth: [Number, String],
  // 是否允许拖动列宽调整大小
  resizable: {
    type: Boolean,
    default: null
  },
  // 将列固定在左侧或者右侧
  fixed: String,
  // 列对其方式
  align: String,
  // 表头对齐方式
  headerAlign: String,
  // 表尾列的对齐方式
  footerAlign: String,
  // 当内容过长时显示为省略号
  showOverflow: {
    type: [Boolean, String],
    default: null
  },
  // 当表头内容过长时显示为省略号
  showHeaderOverflow: {
    type: [Boolean, String],
    default: null
  },
  // 当表尾内容过长时显示为省略号
  showFooterOverflow: {
    type: [Boolean, String],
    default: null
  },
  // 给单元格附加 className
  className: [String, Function],
  // 给表头单元格附加 className
  headerClassName: [String, Function],
  // 给表尾单元格附加 className
  footerClassName: [String, Function],
  // 格式化显示内容
  formatter: [Function, Array, String],
  // 格式化表尾显示内容
  footerFormatter: [Function, Array, String],
  // 是否允许排序
  sortable: Boolean,
  // 自定义排序的属性
  sortBy: [String, Function],
  // 排序的字段类型，比如字符串转数值等
  sortType: String,
  // 配置筛选条件数组
  filters: {
    type: Array,
    default: null
  },
  // 筛选是否允许多选
  filterMultiple: {
    type: Boolean,
    default: true
  },
  // 自定义筛选方法
  filterMethod: Function,
  // 筛选重置方法
  filterResetMethod: Function,
  // 筛选复原方法
  filterRecoverMethod: Function,
  // 筛选模板配置项
  filterRender: Object,
  // 指定为树节点
  treeNode: Boolean,
  // 是否可视
  visible: {
    type: Boolean,
    default: null
  },
  // 表头单元格数据导出方法
  headerExportMethod: Function,
  // 单元格数据导出方法
  exportMethod: Function,
  // 表尾单元格数据导出方法
  footerExportMethod: Function,
  // 已废弃，被 titlePrefix 替换
  titleHelp: Object,
  // 标题前缀图标配置项
  titlePrefix: Object,
  // 标题后缀图标配置项
  titleSuffix: Object,
  // 单元格值类型
  cellType: String,
  // 单元格渲染配置项
  cellRender: Object,
  // 单元格编辑渲染配置项
  editRender: Object,
  // 内容渲染配置项
  contentRender: Object,
  // 额外的参数
  params: Object
};
var column_default = defineComponent({
  name: "VxeColumn",
  props: columnProps,
  setup(props, { slots }) {
    const refElem = ref();
    const $xeTable = inject("$xeTable", null);
    const $xeColgroup = inject("$xeColgroup", null);
    if (!$xeTable) {
      return () => createCommentVNode();
    }
    const columnConfig = cell_default.createColumn($xeTable, props);
    columnConfig.slots = slots;
    const renderVN = () => {
      return h("div", {
        ref: refElem
      });
    };
    const $xeColumn = {
      columnConfig,
      renderVN
    };
    watchColumn($xeTable, props, columnConfig);
    onMounted(() => {
      const elem = refElem.value;
      if (elem) {
        assembleColumn($xeTable, elem, columnConfig, $xeColgroup);
      }
    });
    onUnmounted(() => {
      destroyColumn($xeTable, columnConfig);
    });
    provide("$xeColumn", $xeColumn);
    provide("$xeGrid", null);
    return renderVN;
  }
});

// node_modules/.pnpm/vxe-table@4.7.86_vue@3.5.12_typescript@5.6.3_/node_modules/vxe-table/es/column/index.js
var VxeColumn = Object.assign({}, column_default, {
  install(app) {
    app.component(column_default.name, column_default);
    app.component("VxeTableColumn", column_default);
  }
});
if (VxeUI.dynamicApp) {
  VxeUI.dynamicApp.component(column_default.name, column_default);
  VxeUI.dynamicApp.component("VxeTableColumn", column_default);
}
VxeUI.component(column_default);
var Column = VxeColumn;

// node_modules/.pnpm/vxe-table@4.7.86_vue@3.5.12_typescript@5.6.3_/node_modules/vxe-table/es/table/src/group.js
init_vue_runtime_esm_bundler();
var group_default = defineComponent({
  name: "VxeColgroup",
  props: columnProps,
  setup(props, { slots }) {
    const refElem = ref();
    const $xeTable = inject("$xeTable", null);
    const $xeParentColgroup = inject("$xeColgroup", null);
    if (!$xeTable) {
      return () => createCommentVNode();
    }
    const columnConfig = cell_default.createColumn($xeTable, props);
    const columnSlots = {};
    if (slots.header) {
      columnSlots.header = slots.header;
    }
    columnConfig.slots = columnSlots;
    columnConfig.children = [];
    watchColumn($xeTable, props, columnConfig);
    onMounted(() => {
      const elem = refElem.value;
      if (elem) {
        assembleColumn($xeTable, elem, columnConfig, $xeParentColgroup);
      }
    });
    onUnmounted(() => {
      destroyColumn($xeTable, columnConfig);
    });
    const renderVN = () => {
      return h("div", {
        ref: refElem
      }, slots.default ? slots.default() : []);
    };
    const $xeColgroup = { columnConfig };
    provide("$xeColgroup", $xeColgroup);
    provide("$xeGrid", null);
    return renderVN;
  }
});

// node_modules/.pnpm/vxe-table@4.7.86_vue@3.5.12_typescript@5.6.3_/node_modules/vxe-table/es/colgroup/index.js
var VxeColgroup = Object.assign({}, group_default, {
  install(app) {
    app.component(group_default.name, group_default);
    app.component("VxeTableColgroup", group_default);
  }
});
if (VxeUI.dynamicApp) {
  VxeUI.dynamicApp.component(group_default.name, group_default);
  VxeUI.dynamicApp.component("VxeTableColgroup", group_default);
}
VxeUI.component(group_default);
var Colgroup = VxeColgroup;

// node_modules/.pnpm/vxe-table@4.7.86_vue@3.5.12_typescript@5.6.3_/node_modules/vxe-table/es/grid/src/grid.js
init_vue_runtime_esm_bundler();
var import_xe_utils25 = __toESM(require_xe_utils());

// node_modules/.pnpm/vxe-table@4.7.86_vue@3.5.12_typescript@5.6.3_/node_modules/vxe-table/es/table/src/table.js
init_vue_runtime_esm_bundler();
var import_xe_utils14 = __toESM(require_xe_utils());

// node_modules/.pnpm/vxe-table@4.7.86_vue@3.5.12_typescript@5.6.3_/node_modules/vxe-table/es/table/src/body.js
init_vue_runtime_esm_bundler();
var import_xe_utils7 = __toESM(require_xe_utils());
var { getI18n: getI18n4, renderer: renderer3 } = VxeUI;
var renderType = "body";
var lineOffsetSizes = {
  mini: 3,
  small: 2,
  medium: 1
};
var body_default = defineComponent({
  name: "VxeTableBody",
  props: {
    tableData: Array,
    tableColumn: Array,
    fixedColumn: Array,
    fixedType: {
      type: String,
      default: null
    }
  },
  setup(props) {
    const $xeTable = inject("$xeTable", {});
    const xesize = inject("xesize", null);
    const { xID, props: tableProps, context: tableContext, reactData: tableReactData, internalData: tableInternalData } = $xeTable;
    const { refTableHeader, refTableBody, refTableFooter, refTableLeftBody, refTableRightBody, refValidTooltip } = $xeTable.getRefMaps();
    const { computeEditOpts, computeMouseOpts, computeSYOpts, computeEmptyOpts, computeKeyboardOpts, computeTooltipOpts, computeRadioOpts, computeExpandOpts, computeTreeOpts, computeCheckboxOpts, computeValidOpts, computeRowOpts, computeColumnOpts } = $xeTable.getComputeMaps();
    const refElem = ref();
    const refBodyTable = ref();
    const refBodyColgroup = ref();
    const refBodyTBody = ref();
    const refBodyXSpace = ref();
    const refBodyYSpace = ref();
    const refBodyEmptyBlock = ref();
    const getOffsetSize = () => {
      if (xesize) {
        const vSize = xesize.value;
        if (vSize) {
          return lineOffsetSizes[vSize] || 0;
        }
      }
      return 0;
    };
    const isVMScrollProcess = () => {
      const { delayHover } = tableProps;
      const { lastScrollTime, _isResize } = tableReactData;
      return !!(_isResize || lastScrollTime && Date.now() < lastScrollTime + delayHover);
    };
    const countTreeExpand = (prevRow, params) => {
      let count = 1;
      if (!prevRow) {
        return count;
      }
      const treeOpts = computeTreeOpts.value;
      const childrenField = treeOpts.children || treeOpts.childrenField;
      const rowChildren = prevRow[childrenField];
      if (rowChildren && $xeTable.isTreeExpandByRow(prevRow)) {
        for (let index = 0; index < rowChildren.length; index++) {
          count += countTreeExpand(rowChildren[index], params);
        }
      }
      return count;
    };
    const calcTreeLine = (params, items, rIndex) => {
      let expandSize = 1;
      if (rIndex) {
        expandSize = countTreeExpand(items[rIndex - 1], params);
      }
      return tableReactData.rowHeight * expandSize - (rIndex ? 1 : 12 - getOffsetSize());
    };
    const renderLine = (params) => {
      const { row, column } = params;
      const { afterFullData } = tableInternalData;
      const { treeConfig } = tableProps;
      const treeOpts = computeTreeOpts.value;
      const { slots, treeNode } = column;
      const { fullAllDataRowIdData } = tableInternalData;
      const rowid = getRowid($xeTable, row);
      const rest = fullAllDataRowIdData[rowid];
      let rLevel = 0;
      let rIndex = 0;
      let items = [];
      if (rest) {
        rLevel = rest.level;
        rIndex = rest._index;
        items = rest.items;
      }
      if (slots && slots.line) {
        return $xeTable.callSlot(slots.line, params);
      }
      const isFirstRow = $xeTable.eqRow(afterFullData[0], row);
      if (treeConfig && treeNode && (treeOpts.showLine || treeOpts.line)) {
        return [
          h("div", {
            class: "vxe-tree--line-wrapper"
          }, [
            h("div", {
              class: "vxe-tree--line",
              style: {
                height: `${isFirstRow ? 1 : calcTreeLine(params, items, rIndex)}px`,
                left: `${rLevel * treeOpts.indent + (rLevel ? 2 - getOffsetSize() : 0) + 16}px`
              }
            })
          ])
        ];
      }
      return [];
    };
    const renderColumn = (seq, rowid, fixedType, rowLevel, row, rowIndex, $rowIndex, _rowIndex, column, $columnIndex, columns, items) => {
      const { columnKey, height, showOverflow: allColumnOverflow, cellClassName: allCellClassName, cellStyle, align: allAlign, spanMethod, mouseConfig, editConfig, editRules, tooltipConfig } = tableProps;
      const { tableData, overflowX, scrollYLoad, currentColumn, mergeList, editStore, isAllOverflow, validErrorMaps } = tableReactData;
      const { afterFullData } = tableInternalData;
      const validOpts = computeValidOpts.value;
      const checkboxOpts = computeCheckboxOpts.value;
      const editOpts = computeEditOpts.value;
      const tooltipOpts = computeTooltipOpts.value;
      const rowOpts = computeRowOpts.value;
      const sYOpts = computeSYOpts.value;
      const columnOpts = computeColumnOpts.value;
      const { type, cellRender, editRender, align, showOverflow, className, treeNode, slots } = column;
      const { actived } = editStore;
      const { rHeight: scrollYRHeight } = sYOpts;
      const { height: rowHeight } = rowOpts;
      const colid = column.id;
      const renderOpts = editRender || cellRender;
      const compConf = renderOpts ? renderer3.get(renderOpts.name) : null;
      const compCellClassName = compConf ? compConf.tableCellClassName || compConf.cellClassName : null;
      const compCellStyle = compConf ? compConf.tableCellStyle || compConf.cellStyle : "";
      const showAllTip = tooltipOpts.showAll;
      const columnIndex = $xeTable.getColumnIndex(column);
      const _columnIndex = $xeTable.getVTColumnIndex(column);
      const isEdit = isEnableConf(editRender);
      let fixedHiddenColumn = fixedType ? column.fixed !== fixedType : column.fixed && overflowX;
      const cellOverflow = import_xe_utils7.default.isUndefined(showOverflow) || import_xe_utils7.default.isNull(showOverflow) ? allColumnOverflow : showOverflow;
      let showEllipsis = cellOverflow === "ellipsis";
      const showTitle = cellOverflow === "title";
      const showTooltip = cellOverflow === true || cellOverflow === "tooltip";
      let hasEllipsis = showTitle || showTooltip || showEllipsis;
      let isDirty;
      const tdOns = {};
      const cellAlign = align || allAlign;
      const errorValidItem = validErrorMaps[`${rowid}:${colid}`];
      const showValidTip = editRules && validOpts.showMessage && (validOpts.message === "default" ? height || tableData.length > 1 : validOpts.message === "inline");
      const attrs = { colid };
      const params = {
        $table: $xeTable,
        $grid: $xeTable.xegrid,
        isEdit: false,
        seq,
        rowid,
        row,
        rowIndex,
        $rowIndex,
        _rowIndex,
        column,
        columnIndex,
        $columnIndex,
        _columnIndex,
        fixed: fixedType,
        type: renderType,
        isHidden: fixedHiddenColumn,
        level: rowLevel,
        visibleData: afterFullData,
        data: tableData,
        items
      };
      if (scrollYLoad && !hasEllipsis) {
        showEllipsis = hasEllipsis = true;
      }
      if (showTitle || showTooltip || showAllTip || tooltipConfig) {
        tdOns.onMouseenter = (evnt) => {
          if (isVMScrollProcess()) {
            return;
          }
          if (showTitle) {
            updateCellTitle(evnt.currentTarget, column);
          } else if (showTooltip || showAllTip) {
            $xeTable.triggerBodyTooltipEvent(evnt, params);
          }
          $xeTable.dispatchEvent("cell-mouseenter", Object.assign({ cell: evnt.currentTarget }, params), evnt);
        };
      }
      if (showTooltip || showAllTip || tooltipConfig) {
        tdOns.onMouseleave = (evnt) => {
          if (isVMScrollProcess()) {
            return;
          }
          if (showTooltip || showAllTip) {
            $xeTable.handleTargetLeaveEvent(evnt);
          }
          $xeTable.dispatchEvent("cell-mouseleave", Object.assign({ cell: evnt.currentTarget }, params), evnt);
        };
      }
      if (checkboxOpts.range || mouseConfig) {
        tdOns.onMousedown = (evnt) => {
          $xeTable.triggerCellMousedownEvent(evnt, params);
        };
      }
      tdOns.onClick = (evnt) => {
        $xeTable.triggerCellClickEvent(evnt, params);
      };
      tdOns.onDblclick = (evnt) => {
        $xeTable.triggerCellDblclickEvent(evnt, params);
      };
      if (mergeList.length) {
        const spanRest = mergeBodyMethod(mergeList, _rowIndex, _columnIndex);
        if (spanRest) {
          const { rowspan, colspan } = spanRest;
          if (!rowspan || !colspan) {
            return null;
          }
          if (rowspan > 1) {
            attrs.rowspan = rowspan;
          }
          if (colspan > 1) {
            attrs.colspan = colspan;
          }
        }
      } else if (spanMethod) {
        const { rowspan = 1, colspan = 1 } = spanMethod(params) || {};
        if (!rowspan || !colspan) {
          return null;
        }
        if (rowspan > 1) {
          attrs.rowspan = rowspan;
        }
        if (colspan > 1) {
          attrs.colspan = colspan;
        }
      }
      if (fixedHiddenColumn && mergeList) {
        if (attrs.colspan > 1 || attrs.rowspan > 1) {
          fixedHiddenColumn = false;
        }
      }
      if (!fixedHiddenColumn && editConfig && (editRender || cellRender) && (editOpts.showStatus || editOpts.showUpdateStatus)) {
        isDirty = $xeTable.isUpdateByRow(row, column.field);
      }
      const tdVNs = [];
      if (fixedHiddenColumn && (allColumnOverflow ? isAllOverflow : allColumnOverflow)) {
        tdVNs.push(h("div", {
          class: ["vxe-cell", {
            "c--title": showTitle,
            "c--tooltip": showTooltip,
            "c--ellipsis": showEllipsis
          }],
          style: {
            maxHeight: hasEllipsis && (scrollYRHeight || rowHeight) ? `${scrollYRHeight || rowHeight}px` : ""
          }
        }));
      } else {
        tdVNs.push(...renderLine(params), h("div", {
          class: ["vxe-cell", {
            "c--title": showTitle,
            "c--tooltip": showTooltip,
            "c--ellipsis": showEllipsis
          }],
          style: {
            maxHeight: hasEllipsis && (scrollYRHeight || rowHeight) ? `${scrollYRHeight || rowHeight}px` : ""
          },
          title: showTitle ? $xeTable.getCellLabel(row, column) : null
        }, column.renderCell(params)));
        if (showValidTip && errorValidItem) {
          const errRule = errorValidItem.rule;
          const validSlot = slots ? slots.valid : null;
          const validParams = Object.assign(Object.assign({}, params), errorValidItem);
          tdVNs.push(h("div", {
            class: ["vxe-cell--valid-error-hint", getPropClass(validOpts.className, validParams)],
            style: errRule && errRule.maxWidth ? {
              width: `${errRule.maxWidth}px`
            } : null
          }, validSlot ? $xeTable.callSlot(validSlot, validParams) : [
            h("span", {
              class: "vxe-cell--valid-error-msg"
            }, errorValidItem.content)
          ]));
        }
      }
      return h("td", Object.assign(Object.assign(Object.assign({ class: [
        "vxe-body--column",
        colid,
        {
          [`col--${cellAlign}`]: cellAlign,
          [`col--${type}`]: type,
          "col--last": $columnIndex === columns.length - 1,
          "col--tree-node": treeNode,
          "col--edit": isEdit,
          "col--ellipsis": hasEllipsis,
          "col--height": !!rowOpts.height,
          "fixed--hidden": fixedHiddenColumn,
          "col--dirty": isDirty,
          "col--active": editConfig && isEdit && (actived.row === row && (actived.column === column || editOpts.mode === "row")),
          "col--valid-error": !!errorValidItem,
          "col--current": currentColumn === column
        },
        getPropClass(compCellClassName, params),
        getPropClass(className, params),
        getPropClass(allCellClassName, params)
      ], key: columnKey || columnOpts.useKey ? colid : $columnIndex }, attrs), { style: Object.assign({
        height: hasEllipsis && (scrollYRHeight || rowHeight) ? `${scrollYRHeight || rowHeight}px` : ""
      }, import_xe_utils7.default.isFunction(compCellStyle) ? compCellStyle(params) : compCellStyle, import_xe_utils7.default.isFunction(cellStyle) ? cellStyle(params) : cellStyle) }), tdOns), tdVNs);
    };
    const renderRows = (fixedType, tableData, tableColumn) => {
      const { stripe, rowKey, highlightHoverRow, rowClassName, rowStyle, showOverflow: allColumnOverflow, editConfig, treeConfig } = tableProps;
      const { hasFixedColumn, treeExpandedMaps, scrollYLoad, rowExpandedMaps, expandColumn, selectRadioRow, pendingRowMaps, pendingRowList } = tableReactData;
      const { fullAllDataRowIdData } = tableInternalData;
      const checkboxOpts = computeCheckboxOpts.value;
      const radioOpts = computeRadioOpts.value;
      const treeOpts = computeTreeOpts.value;
      const editOpts = computeEditOpts.value;
      const rowOpts = computeRowOpts.value;
      const { transform } = treeOpts;
      const childrenField = treeOpts.children || treeOpts.childrenField;
      const rows = [];
      tableData.forEach((row, $rowIndex) => {
        const trOn = {};
        let rowIndex = $rowIndex;
        rowIndex = $xeTable.getRowIndex(row);
        if (rowOpts.isHover || highlightHoverRow) {
          trOn.onMouseenter = (evnt) => {
            if (isVMScrollProcess()) {
              return;
            }
            $xeTable.triggerHoverEvent(evnt, { row, rowIndex });
          };
          trOn.onMouseleave = () => {
            if (isVMScrollProcess()) {
              return;
            }
            $xeTable.clearHoverRow();
          };
        }
        const rowid = getRowid($xeTable, row);
        const rest = fullAllDataRowIdData[rowid];
        let rowLevel = 0;
        let seq = -1;
        let _rowIndex = 0;
        if (rest) {
          rowLevel = rest.level;
          seq = rest.seq;
          _rowIndex = rest._index;
        }
        const params = { $table: $xeTable, seq, rowid, fixed: fixedType, type: renderType, level: rowLevel, row, rowIndex, $rowIndex, _rowIndex };
        const isExpandRow = expandColumn && !!rowExpandedMaps[rowid];
        let isExpandTree = false;
        let rowChildren = [];
        let isNewRow = false;
        if (editConfig) {
          isNewRow = $xeTable.isInsertByRow(row);
        }
        if (treeConfig && !scrollYLoad && !transform) {
          rowChildren = row[childrenField];
          isExpandTree = rowChildren && rowChildren.length > 0 && !!treeExpandedMaps[rowid];
        }
        rows.push(h("tr", Object.assign({ class: [
          "vxe-body--row",
          treeConfig ? `row--level-${rowLevel}` : "",
          {
            "row--stripe": stripe && ($xeTable.getVTRowIndex(row) + 1) % 2 === 0,
            "is--new": isNewRow,
            "is--expand-row": isExpandRow,
            "is--expand-tree": isExpandTree,
            "row--new": isNewRow && (editOpts.showStatus || editOpts.showInsertStatus),
            "row--radio": radioOpts.highlight && $xeTable.eqRow(selectRadioRow, row),
            "row--checked": checkboxOpts.highlight && $xeTable.isCheckedByCheckboxRow(row),
            "row--pending": pendingRowList.length && !!pendingRowMaps[rowid]
          },
          getPropClass(rowClassName, params)
        ], rowid, style: rowStyle ? import_xe_utils7.default.isFunction(rowStyle) ? rowStyle(params) : rowStyle : null, key: rowKey || rowOpts.useKey || treeConfig ? rowid : $rowIndex }, trOn), tableColumn.map((column, $columnIndex) => {
          return renderColumn(seq, rowid, fixedType, rowLevel, row, rowIndex, $rowIndex, _rowIndex, column, $columnIndex, tableColumn, tableData);
        })));
        if (isExpandRow) {
          const expandOpts = computeExpandOpts.value;
          const { height: expandHeight, padding } = expandOpts;
          const cellStyle = {};
          if (expandHeight) {
            cellStyle.height = `${expandHeight}px`;
          }
          if (treeConfig) {
            cellStyle.paddingLeft = `${rowLevel * treeOpts.indent + 30}px`;
          }
          const { showOverflow } = expandColumn;
          const hasEllipsis = import_xe_utils7.default.isUndefined(showOverflow) || import_xe_utils7.default.isNull(showOverflow) ? allColumnOverflow : showOverflow;
          const expandParams = { $table: $xeTable, seq, column: expandColumn, fixed: fixedType, type: renderType, level: rowLevel, row, rowIndex, $rowIndex, _rowIndex };
          rows.push(h("tr", Object.assign({ class: ["vxe-body--expanded-row", {
            "is--padding": padding
          }], key: `expand_${rowid}`, style: rowStyle ? import_xe_utils7.default.isFunction(rowStyle) ? rowStyle(expandParams) : rowStyle : null }, trOn), [
            h("td", {
              class: {
                "vxe-body--expanded-column": 1,
                "fixed--hidden": fixedType && !hasFixedColumn,
                "col--ellipsis": hasEllipsis
              },
              colspan: tableColumn.length
            }, [
              h("div", {
                class: {
                  "vxe-body--expanded-cell": 1,
                  "is--ellipsis": expandHeight
                },
                style: cellStyle
              }, [
                expandColumn.renderData(expandParams)
              ])
            ])
          ]));
        }
        if (isExpandTree) {
          rows.push(...renderRows(fixedType, rowChildren, tableColumn));
        }
      });
      return rows;
    };
    let scrollProcessTimeout;
    const syncBodyScroll = (fixedType, scrollTop, elem1, elem2) => {
      if (elem1 || elem2) {
        if (elem1) {
          removeScrollListener(elem1);
          elem1.scrollTop = scrollTop;
        }
        if (elem2) {
          removeScrollListener(elem2);
          elem2.scrollTop = scrollTop;
        }
        clearTimeout(scrollProcessTimeout);
        scrollProcessTimeout = setTimeout(() => {
          restoreScrollListener(elem1);
          restoreScrollListener(elem2);
          tableReactData.lastScrollTime = Date.now();
        }, 300);
      }
    };
    const scrollLoadingTime = null;
    const scrollEvent = (evnt) => {
      const { fixedType } = props;
      const { highlightHoverRow } = tableProps;
      const { scrollXLoad, scrollYLoad } = tableReactData;
      const { elemStore, lastScrollTop, lastScrollLeft } = tableInternalData;
      const rowOpts = computeRowOpts.value;
      const tableHeader = refTableHeader.value;
      const tableBody = refTableBody.value;
      const tableFooter = refTableFooter.value;
      const leftBody = refTableLeftBody.value;
      const rightBody = refTableRightBody.value;
      const validTip = refValidTooltip.value;
      const scrollBodyElem = refElem.value;
      const headerElem = tableHeader ? tableHeader.$el : null;
      const footerElem = tableFooter ? tableFooter.$el : null;
      const bodyElem = tableBody.$el;
      const leftElem = leftBody ? leftBody.$el : null;
      const rightElem = rightBody ? rightBody.$el : null;
      const bodyYRef = elemStore["main-body-ySpace"];
      const bodyYElem = bodyYRef ? bodyYRef.value : null;
      const bodyXRef = elemStore["main-body-xSpace"];
      const bodyXElem = bodyXRef ? bodyXRef.value : null;
      const bodyHeight = scrollYLoad && bodyYElem ? bodyYElem.clientHeight : bodyElem.clientHeight;
      const bodyWidth = scrollXLoad && bodyXElem ? bodyXElem.clientWidth : bodyElem.clientWidth;
      let scrollTop = scrollBodyElem.scrollTop;
      const scrollLeft = bodyElem.scrollLeft;
      const isRollX = scrollLeft !== lastScrollLeft;
      const isRollY = scrollTop !== lastScrollTop;
      tableInternalData.lastScrollTop = scrollTop;
      tableInternalData.lastScrollLeft = scrollLeft;
      tableReactData.lastScrollTime = Date.now();
      if (rowOpts.isHover || highlightHoverRow) {
        $xeTable.clearHoverRow();
      }
      if (leftElem && fixedType === "left") {
        scrollTop = leftElem.scrollTop;
        syncBodyScroll(fixedType, scrollTop, bodyElem, rightElem);
      } else if (rightElem && fixedType === "right") {
        scrollTop = rightElem.scrollTop;
        syncBodyScroll(fixedType, scrollTop, bodyElem, leftElem);
      } else {
        if (isRollX) {
          if (headerElem) {
            headerElem.scrollLeft = bodyElem.scrollLeft;
          }
          if (footerElem) {
            footerElem.scrollLeft = bodyElem.scrollLeft;
          }
        }
        if (leftElem || rightElem) {
          $xeTable.checkScrolling();
          if (isRollY) {
            syncBodyScroll(fixedType, scrollTop, leftElem, rightElem);
          }
        }
      }
      if (scrollXLoad && isRollX) {
        $xeTable.triggerScrollXEvent(evnt);
      }
      if (scrollYLoad && isRollY) {
        $xeTable.triggerScrollYEvent(evnt);
      }
      if (scrollLoadingTime !== null) {
        clearTimeout(scrollLoadingTime);
      }
      if (isRollX && validTip && validTip.reactData.visible) {
        validTip.updatePlacement();
      }
      $xeTable.dispatchEvent("scroll", {
        type: renderType,
        fixed: fixedType,
        scrollTop,
        scrollLeft,
        scrollHeight: bodyElem.scrollHeight,
        scrollWidth: bodyElem.scrollWidth,
        bodyHeight,
        bodyWidth,
        isX: isRollX,
        isY: isRollY
      }, evnt);
    };
    let wheelTime;
    let wheelYSize = 0;
    let wheelYInterval = 0;
    let wheelYTotal = 0;
    let isPrevWheelTop = false;
    const handleWheel = (evnt, isTopWheel, deltaTop, isRollX, isRollY) => {
      const { elemStore } = tableInternalData;
      const { scrollXLoad, scrollYLoad } = tableReactData;
      const tableBody = refTableBody.value;
      const leftBody = refTableLeftBody.value;
      const rightBody = refTableRightBody.value;
      const leftElem = leftBody ? leftBody.$el : null;
      const rightElem = rightBody ? rightBody.$el : null;
      const bodyElem = tableBody.$el;
      const bodyYRef = elemStore["main-body-ySpace"];
      const bodyYElem = bodyYRef ? bodyYRef.value : null;
      const bodyXRef = elemStore["main-body-xSpace"];
      const bodyXElem = bodyXRef ? bodyXRef.value : null;
      const bodyHeight = scrollYLoad && bodyYElem ? bodyYElem.clientHeight : bodyElem.clientHeight;
      const bodyWidth = scrollXLoad && bodyXElem ? bodyXElem.clientWidth : bodyElem.clientWidth;
      const remainSize = isPrevWheelTop === isTopWheel ? Math.max(0, wheelYSize - wheelYTotal) : 0;
      isPrevWheelTop = isTopWheel;
      wheelYSize = Math.abs(isTopWheel ? deltaTop - remainSize : deltaTop + remainSize);
      wheelYInterval = 0;
      wheelYTotal = 0;
      clearTimeout(wheelTime);
      const handleSmooth = () => {
        if (wheelYTotal < wheelYSize) {
          const { fixedType } = props;
          wheelYInterval = Math.max(5, Math.floor(wheelYInterval * 1.5));
          wheelYTotal = wheelYTotal + wheelYInterval;
          if (wheelYTotal > wheelYSize) {
            wheelYInterval = wheelYInterval - (wheelYTotal - wheelYSize);
          }
          const { scrollTop, clientHeight, scrollHeight } = bodyElem;
          const targerTop = scrollTop + wheelYInterval * (isTopWheel ? -1 : 1);
          bodyElem.scrollTop = targerTop;
          if (leftElem) {
            leftElem.scrollTop = targerTop;
          }
          if (rightElem) {
            rightElem.scrollTop = targerTop;
          }
          if (isTopWheel ? targerTop < scrollHeight - clientHeight : targerTop >= 0) {
            wheelTime = setTimeout(handleSmooth, 10);
          }
          $xeTable.dispatchEvent("scroll", {
            type: renderType,
            fixed: fixedType,
            scrollTop: bodyElem.scrollTop,
            scrollLeft: bodyElem.scrollLeft,
            scrollHeight: bodyElem.scrollHeight,
            scrollWidth: bodyElem.scrollWidth,
            bodyHeight,
            bodyWidth,
            isX: isRollX,
            isY: isRollY
          }, evnt);
        }
      };
      handleSmooth();
    };
    const wheelEvent = (evnt) => {
      const { deltaY, deltaX } = evnt;
      const { highlightHoverRow } = tableProps;
      const { scrollYLoad } = tableReactData;
      const { lastScrollTop, lastScrollLeft } = tableInternalData;
      const rowOpts = computeRowOpts.value;
      const tableBody = refTableBody.value;
      const scrollBodyElem = refElem.value;
      const bodyElem = tableBody.$el;
      const deltaTop = deltaY;
      const deltaLeft = deltaX;
      const isTopWheel = deltaTop < 0;
      if (isTopWheel ? scrollBodyElem.scrollTop <= 0 : scrollBodyElem.scrollTop >= scrollBodyElem.scrollHeight - scrollBodyElem.clientHeight) {
        return;
      }
      const scrollTop = scrollBodyElem.scrollTop + deltaTop;
      const scrollLeft = bodyElem.scrollLeft + deltaLeft;
      const isRollX = scrollLeft !== lastScrollLeft;
      const isRollY = scrollTop !== lastScrollTop;
      if (isRollY) {
        evnt.preventDefault();
        tableInternalData.lastScrollTop = scrollTop;
        tableInternalData.lastScrollLeft = scrollLeft;
        tableReactData.lastScrollTime = Date.now();
        if (rowOpts.isHover || highlightHoverRow) {
          $xeTable.clearHoverRow();
        }
        handleWheel(evnt, isTopWheel, deltaTop, isRollX, isRollY);
        if (scrollYLoad) {
          $xeTable.triggerScrollYEvent(evnt);
        }
      }
    };
    onMounted(() => {
      nextTick(() => {
        const { fixedType } = props;
        const { elemStore } = tableInternalData;
        const prefix = `${fixedType || "main"}-body-`;
        const el = refElem.value;
        elemStore[`${prefix}wrapper`] = refElem;
        elemStore[`${prefix}table`] = refBodyTable;
        elemStore[`${prefix}colgroup`] = refBodyColgroup;
        elemStore[`${prefix}list`] = refBodyTBody;
        elemStore[`${prefix}xSpace`] = refBodyXSpace;
        elemStore[`${prefix}ySpace`] = refBodyYSpace;
        elemStore[`${prefix}emptyBlock`] = refBodyEmptyBlock;
        if (el) {
          el.onscroll = scrollEvent;
          el._onscroll = scrollEvent;
        }
      });
    });
    onBeforeUnmount(() => {
      const el = refElem.value;
      clearTimeout(wheelTime);
      if (el) {
        el._onscroll = null;
        el.onscroll = null;
      }
    });
    onUnmounted(() => {
      const { fixedType } = props;
      const { elemStore } = tableInternalData;
      const prefix = `${fixedType || "main"}-body-`;
      elemStore[`${prefix}wrapper`] = null;
      elemStore[`${prefix}table`] = null;
      elemStore[`${prefix}colgroup`] = null;
      elemStore[`${prefix}list`] = null;
      elemStore[`${prefix}xSpace`] = null;
      elemStore[`${prefix}ySpace`] = null;
      elemStore[`${prefix}emptyBlock`] = null;
    });
    const renderVN = () => {
      let { fixedColumn, fixedType, tableColumn } = props;
      const { keyboardConfig, showOverflow: allColumnOverflow, spanMethod, mouseConfig } = tableProps;
      const { tableData, mergeList, scrollYLoad, isAllOverflow } = tableReactData;
      const { visibleColumn } = tableInternalData;
      const { slots } = tableContext;
      const sYOpts = computeSYOpts.value;
      const emptyOpts = computeEmptyOpts.value;
      const keyboardOpts = computeKeyboardOpts.value;
      const mouseOpts = computeMouseOpts.value;
      if (fixedType) {
        if (!tableReactData.expandColumn && (scrollYLoad || (allColumnOverflow ? isAllOverflow : allColumnOverflow))) {
          if (!mergeList.length && !spanMethod && !(keyboardConfig && keyboardOpts.isMerge)) {
            tableColumn = fixedColumn;
          } else {
            tableColumn = visibleColumn;
          }
        } else {
          tableColumn = visibleColumn;
        }
      }
      let emptyContent;
      const emptySlot = slots ? slots.empty : null;
      if (emptySlot) {
        emptyContent = $xeTable.callSlot(emptySlot, { $table: $xeTable, $grid: $xeTable.xegrid });
      } else {
        const compConf = emptyOpts.name ? renderer3.get(emptyOpts.name) : null;
        const rtEmptyView = compConf ? compConf.renderTableEmpty || compConf.renderTableEmptyView || compConf.renderEmpty : null;
        if (rtEmptyView) {
          emptyContent = getSlotVNs(rtEmptyView(emptyOpts, { $table: $xeTable }));
        } else {
          emptyContent = tableProps.emptyText || getI18n4("vxe.table.emptyText");
        }
      }
      return h("div", Object.assign({ ref: refElem, class: ["vxe-table--body-wrapper", fixedType ? `fixed-${fixedType}--wrapper` : "body--wrapper"], xid: xID }, sYOpts.mode === "wheel" ? { onWheel: wheelEvent } : {}), [
        fixedType ? createCommentVNode() : h("div", {
          ref: refBodyXSpace,
          class: "vxe-body--x-space"
        }),
        h("div", {
          ref: refBodyYSpace,
          class: "vxe-body--y-space"
        }),
        h("table", {
          ref: refBodyTable,
          class: "vxe-table--body",
          xid: xID,
          cellspacing: 0,
          cellpadding: 0,
          border: 0
        }, [
          /**
           * 列宽
           */
          h("colgroup", {
            ref: refBodyColgroup
          }, tableColumn.map((column, $columnIndex) => {
            return h("col", {
              name: column.id,
              key: $columnIndex
            });
          })),
          /**
           * 内容
           */
          h("tbody", {
            ref: refBodyTBody
          }, renderRows(fixedType, tableData, tableColumn))
        ]),
        h("div", {
          class: "vxe-table--checkbox-range"
        }),
        mouseConfig && mouseOpts.area ? h("div", {
          class: "vxe-table--cell-area"
        }, [
          h("span", {
            class: "vxe-table--cell-main-area"
          }, mouseOpts.extension ? [
            h("span", {
              class: "vxe-table--cell-main-area-btn",
              onMousedown(evnt) {
                $xeTable.triggerCellExtendMousedownEvent(evnt, { $table: $xeTable, fixed: fixedType, type: renderType });
              }
            })
          ] : []),
          h("span", {
            class: "vxe-table--cell-copy-area"
          }),
          h("span", {
            class: "vxe-table--cell-extend-area"
          }),
          h("span", {
            class: "vxe-table--cell-multi-area"
          }),
          h("span", {
            class: "vxe-table--cell-active-area"
          })
        ]) : null,
        !fixedType ? h("div", {
          class: "vxe-table--empty-block",
          ref: refBodyEmptyBlock
        }, [
          h("div", {
            class: "vxe-table--empty-content"
          }, emptyContent)
        ]) : null
      ]);
    };
    return renderVN;
  }
});

// node_modules/.pnpm/vxe-table@4.7.86_vue@3.5.12_typescript@5.6.3_/node_modules/vxe-table/es/table/src/header.js
init_vue_runtime_esm_bundler();
var import_xe_utils8 = __toESM(require_xe_utils());
var renderType2 = "header";
var header_default = defineComponent({
  name: "VxeTableHeader",
  props: {
    tableData: Array,
    tableColumn: Array,
    tableGroupColumn: Array,
    fixedColumn: Array,
    fixedType: {
      type: String,
      default: null
    }
  },
  setup(props) {
    const $xeTable = inject("$xeTable", {});
    const { xID, props: tableProps, reactData: tableReactData, internalData: tableInternalData } = $xeTable;
    const { refElem: tableRefElem, refTableBody, refLeftContainer, refRightContainer, refCellResizeBar } = $xeTable.getRefMaps();
    const { computeColumnOpts } = $xeTable.getComputeMaps();
    const headerColumn = ref([]);
    const refElem = ref();
    const refHeaderTable = ref();
    const refHeaderColgroup = ref();
    const refHeaderTHead = ref();
    const refHeaderXSpace = ref();
    const refHeaderBorderRepair = ref();
    const uploadColumn = () => {
      const { isGroup } = tableReactData;
      headerColumn.value = isGroup ? convertHeaderColumnToRows(props.tableGroupColumn) : [];
    };
    const resizeMousedown = (evnt, params) => {
      const { column } = params;
      const { fixedType } = props;
      const tableBody = refTableBody.value;
      const leftContainerElem = refLeftContainer.value;
      const rightContainerElem = refRightContainer.value;
      const resizeBarElem = refCellResizeBar.value;
      const { clientX: dragClientX } = evnt;
      const wrapperElem = refElem.value;
      const dragBtnElem = evnt.target;
      const cell = params.cell = dragBtnElem.parentNode;
      let dragLeft = 0;
      const tableBodyElem = tableBody.$el;
      const pos = getOffsetPos(dragBtnElem, wrapperElem);
      const dragBtnWidth = dragBtnElem.clientWidth;
      const dragBtnOffsetWidth = Math.floor(dragBtnWidth / 2);
      const minInterval = getColReMinWidth(params) - dragBtnOffsetWidth;
      let dragMinLeft = pos.left - cell.clientWidth + dragBtnWidth + minInterval;
      let dragPosLeft = pos.left + dragBtnOffsetWidth;
      const domMousemove = document.onmousemove;
      const domMouseup = document.onmouseup;
      const isLeftFixed = fixedType === "left";
      const isRightFixed = fixedType === "right";
      const tableEl = tableRefElem.value;
      let fixedOffsetWidth = 0;
      if (isLeftFixed || isRightFixed) {
        const siblingProp = isLeftFixed ? "nextElementSibling" : "previousElementSibling";
        let tempCellElem = cell[siblingProp];
        while (tempCellElem) {
          if (hasClass(tempCellElem, "fixed--hidden")) {
            break;
          } else if (!hasClass(tempCellElem, "col--group")) {
            fixedOffsetWidth += tempCellElem.offsetWidth;
          }
          tempCellElem = tempCellElem[siblingProp];
        }
        if (isRightFixed && rightContainerElem) {
          dragPosLeft = rightContainerElem.offsetLeft + fixedOffsetWidth;
        }
      }
      const updateEvent = function(evnt2) {
        evnt2.stopPropagation();
        evnt2.preventDefault();
        const offsetX = evnt2.clientX - dragClientX;
        let left = dragPosLeft + offsetX;
        const scrollLeft = fixedType ? 0 : tableBodyElem.scrollLeft;
        if (isLeftFixed) {
          left = Math.min(left, (rightContainerElem ? rightContainerElem.offsetLeft : tableBodyElem.clientWidth) - fixedOffsetWidth - minInterval);
        } else if (isRightFixed) {
          dragMinLeft = (leftContainerElem ? leftContainerElem.clientWidth : 0) + fixedOffsetWidth + minInterval;
          left = Math.min(left, dragPosLeft + cell.clientWidth - minInterval);
        } else {
          dragMinLeft = Math.max(tableBodyElem.scrollLeft, dragMinLeft);
        }
        dragLeft = Math.max(left, dragMinLeft);
        resizeBarElem.style.left = `${dragLeft - scrollLeft}px`;
      };
      tableReactData._isResize = true;
      addClass(tableEl, "drag--resize");
      resizeBarElem.style.display = "block";
      document.onmousemove = updateEvent;
      document.onmouseup = function(evnt2) {
        document.onmousemove = domMousemove;
        document.onmouseup = domMouseup;
        const resizeWidth = column.renderWidth + (isRightFixed ? dragPosLeft - dragLeft : dragLeft - dragPosLeft);
        column.resizeWidth = resizeWidth;
        resizeBarElem.style.display = "none";
        tableReactData._isResize = false;
        tableInternalData._lastResizeTime = Date.now();
        $xeTable.analyColumnWidth();
        $xeTable.recalculate(true).then(() => {
          $xeTable.saveCustomStore("update:visible");
          $xeTable.updateCellAreas();
          $xeTable.dispatchEvent("resizable-change", Object.assign(Object.assign({}, params), { resizeWidth }), evnt2);
          setTimeout(() => $xeTable.recalculate(true), 300);
        });
        removeClass(tableEl, "drag--resize");
      };
      updateEvent(evnt);
      if ($xeTable.closeMenu) {
        $xeTable.closeMenu();
      }
    };
    watch(() => props.tableColumn, uploadColumn);
    onMounted(() => {
      nextTick(() => {
        const { fixedType } = props;
        const { internalData } = $xeTable;
        const { elemStore } = internalData;
        const prefix = `${fixedType || "main"}-header-`;
        elemStore[`${prefix}wrapper`] = refElem;
        elemStore[`${prefix}table`] = refHeaderTable;
        elemStore[`${prefix}colgroup`] = refHeaderColgroup;
        elemStore[`${prefix}list`] = refHeaderTHead;
        elemStore[`${prefix}xSpace`] = refHeaderXSpace;
        elemStore[`${prefix}repair`] = refHeaderBorderRepair;
        uploadColumn();
      });
    });
    onUnmounted(() => {
      const { fixedType } = props;
      const { internalData } = $xeTable;
      const { elemStore } = internalData;
      const prefix = `${fixedType || "main"}-header-`;
      elemStore[`${prefix}wrapper`] = null;
      elemStore[`${prefix}table`] = null;
      elemStore[`${prefix}colgroup`] = null;
      elemStore[`${prefix}list`] = null;
      elemStore[`${prefix}xSpace`] = null;
      elemStore[`${prefix}repair`] = null;
    });
    const renderVN = () => {
      const { fixedType, fixedColumn, tableColumn } = props;
      const { resizable, border, columnKey, headerRowClassName, headerCellClassName, headerRowStyle, headerCellStyle, showHeaderOverflow: allColumnHeaderOverflow, headerAlign: allHeaderAlign, align: allAlign, mouseConfig } = tableProps;
      const { isGroup, currentColumn, scrollXLoad, overflowX, scrollbarWidth } = tableReactData;
      const { visibleColumn } = tableInternalData;
      const columnOpts = computeColumnOpts.value;
      let headerGroups = headerColumn.value;
      let renderColumnList = tableColumn;
      if (isGroup) {
        renderColumnList = visibleColumn;
      } else {
        if (fixedType) {
          if (scrollXLoad || allColumnHeaderOverflow) {
            renderColumnList = fixedColumn;
          }
        }
        headerGroups = [renderColumnList];
      }
      return h("div", {
        ref: refElem,
        class: ["vxe-table--header-wrapper", fixedType ? `fixed-${fixedType}--wrapper` : "body--wrapper"],
        xid: xID
      }, [
        fixedType ? createCommentVNode() : h("div", {
          ref: refHeaderXSpace,
          class: "vxe-body--x-space"
        }),
        h("table", {
          ref: refHeaderTable,
          class: "vxe-table--header",
          xid: xID,
          cellspacing: 0,
          cellpadding: 0,
          border: 0
        }, [
          /**
           * 列宽
           */
          h("colgroup", {
            ref: refHeaderColgroup
          }, renderColumnList.map((column, $columnIndex) => {
            return h("col", {
              name: column.id,
              key: $columnIndex
            });
          }).concat(scrollbarWidth ? [
            h("col", {
              name: "col_gutter"
            })
          ] : [])),
          /**
           * 头部
           */
          h("thead", {
            ref: refHeaderTHead
          }, headerGroups.map((cols, $rowIndex) => {
            return h("tr", {
              class: ["vxe-header--row", headerRowClassName ? import_xe_utils8.default.isFunction(headerRowClassName) ? headerRowClassName({ $table: $xeTable, $rowIndex, fixed: fixedType, type: renderType2 }) : headerRowClassName : ""],
              style: headerRowStyle ? import_xe_utils8.default.isFunction(headerRowStyle) ? headerRowStyle({ $table: $xeTable, $rowIndex, fixed: fixedType, type: renderType2 }) : headerRowStyle : null
            }, cols.map((column, $columnIndex) => {
              const { type, showHeaderOverflow, headerAlign, align, headerClassName } = column;
              const colid = column.id;
              const isColGroup = column.children && column.children.length;
              const fixedHiddenColumn = fixedType ? column.fixed !== fixedType && !isColGroup : !!column.fixed && overflowX;
              const headOverflow = import_xe_utils8.default.eqNull(showHeaderOverflow) ? allColumnHeaderOverflow : showHeaderOverflow;
              const headAlign = headerAlign || align || allHeaderAlign || allAlign;
              let showEllipsis = headOverflow === "ellipsis";
              const showTitle = headOverflow === "title";
              const showTooltip = headOverflow === true || headOverflow === "tooltip";
              let hasEllipsis = showTitle || showTooltip || showEllipsis;
              const hasFilter = column.filters && column.filters.some((item) => item.checked);
              const columnIndex = $xeTable.getColumnIndex(column);
              const _columnIndex = $xeTable.getVTColumnIndex(column);
              const params = { $table: $xeTable, $grid: $xeTable.xegrid, $rowIndex, column, columnIndex, $columnIndex, _columnIndex, fixed: fixedType, type: renderType2, isHidden: fixedHiddenColumn, hasFilter };
              const thOns = {
                onClick: (evnt) => $xeTable.triggerHeaderCellClickEvent(evnt, params),
                onDblclick: (evnt) => $xeTable.triggerHeaderCellDblclickEvent(evnt, params)
              };
              if (scrollXLoad && !hasEllipsis) {
                showEllipsis = hasEllipsis = true;
              }
              if (mouseConfig) {
                thOns.onMousedown = (evnt) => $xeTable.triggerHeaderCellMousedownEvent(evnt, params);
              }
              return h("th", Object.assign(Object.assign({ class: [
                "vxe-header--column",
                colid,
                {
                  [`col--${headAlign}`]: headAlign,
                  [`col--${type}`]: type,
                  "col--last": $columnIndex === cols.length - 1,
                  "col--fixed": column.fixed,
                  "col--group": isColGroup,
                  "col--ellipsis": hasEllipsis,
                  "fixed--hidden": fixedHiddenColumn,
                  "is--sortable": column.sortable,
                  "col--filter": !!column.filters,
                  "is--filter-active": hasFilter,
                  "col--current": currentColumn === column
                },
                headerClassName ? import_xe_utils8.default.isFunction(headerClassName) ? headerClassName(params) : headerClassName : "",
                headerCellClassName ? import_xe_utils8.default.isFunction(headerCellClassName) ? headerCellClassName(params) : headerCellClassName : ""
              ], colid, colspan: column.colSpan > 1 ? column.colSpan : null, rowspan: column.rowSpan > 1 ? column.rowSpan : null, style: headerCellStyle ? import_xe_utils8.default.isFunction(headerCellStyle) ? headerCellStyle(params) : headerCellStyle : null }, thOns), { key: columnKey || columnOpts.useKey || isColGroup ? colid : $columnIndex }), [
                h("div", {
                  class: ["vxe-cell", {
                    "c--title": showTitle,
                    "c--tooltip": showTooltip,
                    "c--ellipsis": showEllipsis
                  }]
                }, column.renderHeader(params)),
                /**
                 * 列宽拖动
                 */
                !fixedHiddenColumn && !isColGroup && (import_xe_utils8.default.isBoolean(column.resizable) ? column.resizable : columnOpts.resizable || resizable) ? h("div", {
                  class: ["vxe-resizable", {
                    "is--line": !border || border === "none"
                  }],
                  onMousedown: (evnt) => resizeMousedown(evnt, params)
                }) : null
              ]);
            }).concat(scrollbarWidth ? [
              h("th", {
                class: "vxe-header--gutter col--gutter"
              })
            ] : []));
          }))
        ]),
        /**
         * 其他
         */
        h("div", {
          ref: refHeaderBorderRepair,
          class: "vxe-table--header-border-line"
        })
      ]);
    };
    return renderVN;
  }
});

// node_modules/.pnpm/vxe-table@4.7.86_vue@3.5.12_typescript@5.6.3_/node_modules/vxe-table/es/table/src/footer.js
init_vue_runtime_esm_bundler();
var import_xe_utils9 = __toESM(require_xe_utils());
var renderType3 = "footer";
function mergeFooterMethod(mergeFooterList, _rowIndex, _columnIndex) {
  for (let mIndex = 0; mIndex < mergeFooterList.length; mIndex++) {
    const { row: mergeRowIndex, col: mergeColIndex, rowspan: mergeRowspan, colspan: mergeColspan } = mergeFooterList[mIndex];
    if (mergeColIndex > -1 && mergeRowIndex > -1 && mergeRowspan && mergeColspan) {
      if (mergeRowIndex === _rowIndex && mergeColIndex === _columnIndex) {
        return { rowspan: mergeRowspan, colspan: mergeColspan };
      }
      if (_rowIndex >= mergeRowIndex && _rowIndex < mergeRowIndex + mergeRowspan && _columnIndex >= mergeColIndex && _columnIndex < mergeColIndex + mergeColspan) {
        return { rowspan: 0, colspan: 0 };
      }
    }
  }
}
var footer_default = defineComponent({
  name: "VxeTableFooter",
  props: {
    footerTableData: {
      type: Array,
      default: () => []
    },
    tableColumn: {
      type: Array,
      default: () => []
    },
    fixedColumn: {
      type: Array,
      default: () => []
    },
    fixedType: {
      type: String,
      default: null
    }
  },
  setup(props) {
    const $xeTable = inject("$xeTable", {});
    const { xID, props: tableProps, reactData: tableReactData, internalData: tableInternalData } = $xeTable;
    const { refTableHeader, refTableBody, refValidTooltip } = $xeTable.getRefMaps();
    const { computeTooltipOpts, computeColumnOpts } = $xeTable.getComputeMaps();
    const refElem = ref();
    const refFooterTable = ref();
    const refFooterColgroup = ref();
    const refFooterTFoot = ref();
    const refFooterXSpace = ref();
    const scrollEvent = (evnt) => {
      const { fixedType } = props;
      const { scrollXLoad } = tableReactData;
      const { lastScrollLeft } = tableInternalData;
      const validTip = refValidTooltip.value;
      const tableHeader = refTableHeader.value;
      const tableBody = refTableBody.value;
      const headerElem = tableHeader ? tableHeader.$el : null;
      const footerElem = refElem.value;
      const bodyElem = tableBody.$el;
      const scrollLeft = footerElem.scrollLeft;
      const isX = scrollLeft !== lastScrollLeft;
      tableInternalData.lastScrollLeft = scrollLeft;
      tableReactData.lastScrollTime = Date.now();
      if (headerElem) {
        headerElem.scrollLeft = scrollLeft;
      }
      if (bodyElem) {
        bodyElem.scrollLeft = scrollLeft;
      }
      if (scrollXLoad && isX) {
        $xeTable.triggerScrollXEvent(evnt);
      }
      if (isX && validTip && validTip.reactData.visible) {
        validTip.updatePlacement();
      }
      $xeTable.dispatchEvent("scroll", { type: renderType3, fixed: fixedType, scrollTop: bodyElem.scrollTop, scrollLeft, isX, isY: false }, evnt);
    };
    onMounted(() => {
      nextTick(() => {
        const { fixedType } = props;
        const { elemStore } = tableInternalData;
        const prefix = `${fixedType || "main"}-footer-`;
        elemStore[`${prefix}wrapper`] = refElem;
        elemStore[`${prefix}table`] = refFooterTable;
        elemStore[`${prefix}colgroup`] = refFooterColgroup;
        elemStore[`${prefix}list`] = refFooterTFoot;
        elemStore[`${prefix}xSpace`] = refFooterXSpace;
      });
    });
    onUnmounted(() => {
      const { fixedType } = props;
      const { elemStore } = tableInternalData;
      const prefix = `${fixedType || "main"}-footer-`;
      elemStore[`${prefix}wrapper`] = null;
      elemStore[`${prefix}table`] = null;
      elemStore[`${prefix}colgroup`] = null;
      elemStore[`${prefix}list`] = null;
      elemStore[`${prefix}xSpace`] = null;
    });
    const renderVN = () => {
      let { fixedType, fixedColumn, tableColumn, footerTableData } = props;
      const { footerRowClassName, footerCellClassName, footerRowStyle, footerCellStyle, footerAlign: allFooterAlign, footerSpanMethod, align: allAlign, columnKey, showFooterOverflow: allColumnFooterOverflow } = tableProps;
      const { visibleColumn } = tableInternalData;
      const { scrollXLoad, overflowX, scrollbarWidth, currentColumn, mergeFooterList } = tableReactData;
      const tooltipOpts = computeTooltipOpts.value;
      const columnOpts = computeColumnOpts.value;
      if (fixedType) {
        if (!tableReactData.expandColumn && (scrollXLoad || allColumnFooterOverflow)) {
          if (!mergeFooterList.length || !footerSpanMethod) {
            tableColumn = fixedColumn;
          } else {
            tableColumn = visibleColumn;
          }
        } else {
          tableColumn = visibleColumn;
        }
      }
      return h("div", {
        ref: refElem,
        class: ["vxe-table--footer-wrapper", fixedType ? `fixed-${fixedType}--wrapper` : "body--wrapper"],
        xid: xID,
        onScroll: scrollEvent
      }, [
        fixedType ? createCommentVNode() : h("div", {
          ref: refFooterXSpace,
          class: "vxe-body--x-space"
        }),
        h("table", {
          ref: refFooterTable,
          class: "vxe-table--footer",
          xid: xID,
          cellspacing: 0,
          cellpadding: 0,
          border: 0
        }, [
          /**
           * 列宽
           */
          h("colgroup", {
            ref: refFooterColgroup
          }, tableColumn.map((column, $columnIndex) => {
            return h("col", {
              name: column.id,
              key: $columnIndex
            });
          }).concat(scrollbarWidth ? [
            h("col", {
              name: "col_gutter"
            })
          ] : [])),
          /**
           * 底部
           */
          h("tfoot", {
            ref: refFooterTFoot
          }, footerTableData.map((list, _rowIndex) => {
            const $rowIndex = _rowIndex;
            const rowParams = { $table: $xeTable, row: list, _rowIndex, $rowIndex, fixed: fixedType, type: renderType3 };
            return h("tr", {
              class: ["vxe-footer--row", footerRowClassName ? import_xe_utils9.default.isFunction(footerRowClassName) ? footerRowClassName(rowParams) : footerRowClassName : ""],
              style: footerRowStyle ? import_xe_utils9.default.isFunction(footerRowStyle) ? footerRowStyle(rowParams) : footerRowStyle : null
            }, tableColumn.map((column, $columnIndex) => {
              const { type, showFooterOverflow, footerAlign, align, footerClassName } = column;
              const showAllTip = tooltipOpts.showAll;
              const isColGroup = column.children && column.children.length;
              const fixedHiddenColumn = fixedType ? column.fixed !== fixedType && !isColGroup : column.fixed && overflowX;
              const footOverflow = import_xe_utils9.default.eqNull(showFooterOverflow) ? allColumnFooterOverflow : showFooterOverflow;
              const footAlign = footerAlign || align || allFooterAlign || allAlign;
              let showEllipsis = footOverflow === "ellipsis";
              const showTitle = footOverflow === "title";
              const showTooltip = footOverflow === true || footOverflow === "tooltip";
              let hasEllipsis = showTitle || showTooltip || showEllipsis;
              const attrs = { colid: column.id };
              const tfOns = {};
              const columnIndex = $xeTable.getColumnIndex(column);
              const _columnIndex = $xeTable.getVTColumnIndex(column);
              const itemIndex = _columnIndex;
              const cellParams = {
                $table: $xeTable,
                $grid: $xeTable.xegrid,
                row: list,
                rowIndex: _rowIndex,
                _rowIndex,
                $rowIndex,
                column,
                columnIndex,
                $columnIndex,
                _columnIndex,
                itemIndex,
                items: list,
                fixed: fixedType,
                type: renderType3,
                data: footerTableData
              };
              if (scrollXLoad && !hasEllipsis) {
                showEllipsis = hasEllipsis = true;
              }
              if (showTitle || showTooltip || showAllTip) {
                tfOns.onMouseenter = (evnt) => {
                  if (showTitle) {
                    updateCellTitle(evnt.currentTarget, column);
                  } else if (showTooltip || showAllTip) {
                    $xeTable.triggerFooterTooltipEvent(evnt, cellParams);
                  }
                };
              }
              if (showTooltip || showAllTip) {
                tfOns.onMouseleave = (evnt) => {
                  if (showTooltip || showAllTip) {
                    $xeTable.handleTargetLeaveEvent(evnt);
                  }
                };
              }
              tfOns.onClick = (evnt) => {
                $xeTable.dispatchEvent("footer-cell-click", Object.assign({ cell: evnt.currentTarget }, cellParams), evnt);
              };
              tfOns.onDblclick = (evnt) => {
                $xeTable.dispatchEvent("footer-cell-dblclick", Object.assign({ cell: evnt.currentTarget }, cellParams), evnt);
              };
              if (mergeFooterList.length) {
                const spanRest = mergeFooterMethod(mergeFooterList, _rowIndex, _columnIndex);
                if (spanRest) {
                  const { rowspan, colspan } = spanRest;
                  if (!rowspan || !colspan) {
                    return null;
                  }
                  if (rowspan > 1) {
                    attrs.rowspan = rowspan;
                  }
                  if (colspan > 1) {
                    attrs.colspan = colspan;
                  }
                }
              } else if (footerSpanMethod) {
                const { rowspan = 1, colspan = 1 } = footerSpanMethod(cellParams) || {};
                if (!rowspan || !colspan) {
                  return null;
                }
                if (rowspan > 1) {
                  attrs.rowspan = rowspan;
                }
                if (colspan > 1) {
                  attrs.colspan = colspan;
                }
              }
              return h("td", Object.assign(Object.assign(Object.assign(Object.assign({ class: ["vxe-footer--column", column.id, {
                [`col--${footAlign}`]: footAlign,
                [`col--${type}`]: type,
                "col--last": $columnIndex === tableColumn.length - 1,
                "fixed--hidden": fixedHiddenColumn,
                "col--ellipsis": hasEllipsis,
                "col--current": currentColumn === column
              }, getPropClass(footerClassName, cellParams), getPropClass(footerCellClassName, cellParams)] }, attrs), { style: footerCellStyle ? import_xe_utils9.default.isFunction(footerCellStyle) ? footerCellStyle(cellParams) : footerCellStyle : null }), tfOns), { key: columnKey || columnOpts.useKey ? column.id : $columnIndex }), [
                h("div", {
                  class: ["vxe-cell", {
                    "c--title": showTitle,
                    "c--tooltip": showTooltip,
                    "c--ellipsis": showEllipsis
                  }]
                }, column.renderFooter(cellParams))
              ]);
            }).concat(scrollbarWidth ? [
              h("td", {
                class: "vxe-footer--gutter col--gutter"
              })
            ] : []));
          }))
        ])
      ]);
    };
    return renderVN;
  }
});

// node_modules/.pnpm/vxe-table@4.7.86_vue@3.5.12_typescript@5.6.3_/node_modules/vxe-table/es/table/src/props.js
var { getConfig: getConfig2 } = VxeUI;
var props_default = {
  /** 基本属性 */
  id: [String, Function],
  // 数据
  data: Array,
  // 表格的高度
  height: [Number, String],
  // 表格的最小高度
  minHeight: {
    type: [Number, String],
    default: () => getConfig2().table.minHeight
  },
  // 表格的最大高度
  maxHeight: [Number, String],
  // 已废弃，被 column-config.resizable 替换
  resizable: {
    type: Boolean,
    default: () => getConfig2().table.resizable
  },
  // 是否带有斑马纹
  stripe: {
    type: Boolean,
    default: () => getConfig2().table.stripe
  },
  // 是否带有边框
  border: {
    type: [Boolean, String],
    default: () => getConfig2().table.border
  },
  // 单元格是否有边距
  padding: {
    type: Boolean,
    default: () => getConfig2().table.padding
  },
  // 是否圆角边框
  round: {
    type: Boolean,
    default: () => getConfig2().table.round
  },
  // 表格的尺寸
  size: {
    type: String,
    default: () => getConfig2().table.size || getConfig2().size
  },
  // 列的宽度是否自撑开（可能会被废弃的参数，不要使用）
  fit: {
    type: Boolean,
    default: () => getConfig2().table.fit
  },
  // 表格是否加载中
  loading: Boolean,
  // 所有的列对其方式
  align: {
    type: String,
    default: () => getConfig2().table.align
  },
  // 所有的表头列的对齐方式
  headerAlign: {
    type: String,
    default: () => getConfig2().table.headerAlign
  },
  // 所有的表尾列的对齐方式
  footerAlign: {
    type: String,
    default: () => getConfig2().table.footerAlign
  },
  // 是否显示表头
  showHeader: {
    type: Boolean,
    default: () => getConfig2().table.showHeader
  },
  // （即将废弃）是否要高亮当前选中行
  highlightCurrentRow: {
    type: Boolean,
    default: () => getConfig2().table.highlightCurrentRow
  },
  // （即将废弃）鼠标移到行是否要高亮显示
  highlightHoverRow: {
    type: Boolean,
    default: () => getConfig2().table.highlightHoverRow
  },
  // （即将废弃）是否要高亮当前选中列
  highlightCurrentColumn: {
    type: Boolean,
    default: () => getConfig2().table.highlightCurrentColumn
  },
  // （即将废弃）鼠标移到列是否要高亮显示
  highlightHoverColumn: {
    type: Boolean,
    default: () => getConfig2().table.highlightHoverColumn
  },
  // （即将废弃）激活单元格编辑时是否高亮显示
  highlightCell: Boolean,
  // 是否显示表尾合计
  showFooter: Boolean,
  // 表尾数据
  footerData: Array,
  // 表尾合计的计算方法
  footerMethod: Function,
  // 给行附加 className
  rowClassName: [String, Function],
  // 给单元格附加 className
  cellClassName: [String, Function],
  // 给表头的行附加 className
  headerRowClassName: [String, Function],
  // 给表头的单元格附加 className
  headerCellClassName: [String, Function],
  // 给表尾的行附加 className
  footerRowClassName: [String, Function],
  // 给表尾的单元格附加 className
  footerCellClassName: [String, Function],
  // 给单元格附加样式
  cellStyle: [Object, Function],
  // 给表头单元格附加样式
  headerCellStyle: [Object, Function],
  // 给表尾单元格附加样式
  footerCellStyle: [Object, Function],
  // 给行附加样式
  rowStyle: [Object, Function],
  // 给表头行附加样式
  headerRowStyle: [Object, Function],
  // 给表尾行附加样式
  footerRowStyle: [Object, Function],
  // 合并指定单元格
  mergeCells: Array,
  // 合并指定的表尾
  mergeFooterItems: Array,
  // 自定义合并行或列的方法
  spanMethod: Function,
  // 表尾合并行或列
  footerSpanMethod: Function,
  // 设置所有内容过长时显示为省略号
  showOverflow: {
    type: [Boolean, String],
    default: () => getConfig2().table.showOverflow
  },
  // 设置表头所有内容过长时显示为省略号
  showHeaderOverflow: {
    type: [Boolean, String],
    default: () => getConfig2().table.showHeaderOverflow
  },
  // 设置表尾所有内容过长时显示为省略号
  showFooterOverflow: {
    type: [Boolean, String],
    default: () => getConfig2().table.showFooterOverflow
  },
  /** 高级属性 */
  // （即将废弃）columnKey 已废弃，被 column-config.useKey 替换
  columnKey: Boolean,
  // （即将废弃）rowKey 已废弃，被 row-config.useKey 替换
  rowKey: Boolean,
  // （即将废弃）rowId 已废弃，被 row-config.keyField 替换
  rowId: {
    type: String,
    default: () => getConfig2().table.rowId
  },
  zIndex: Number,
  emptyText: {
    type: String,
    default: () => getConfig2().table.emptyText
  },
  keepSource: {
    type: Boolean,
    default: () => getConfig2().table.keepSource
  },
  // 是否自动监听父容器变化去更新响应式表格宽高
  autoResize: {
    type: Boolean,
    default: () => getConfig2().table.autoResize
  },
  // 是否自动根据状态属性去更新响应式表格宽高
  syncResize: [Boolean, String, Number],
  // 响应式布局配置项
  resizeConfig: Object,
  // 列配置信息
  columnConfig: Object,
  // 行配置信息
  rowConfig: Object,
  // 列调整配置项
  resizableConfig: Object,
  // 序号配置项
  seqConfig: Object,
  // 排序配置项
  sortConfig: Object,
  // 筛选配置项
  filterConfig: Object,
  // 单选框配置
  radioConfig: Object,
  // 复选框配置项
  checkboxConfig: Object,
  // tooltip 配置项
  tooltipConfig: Object,
  // 导出配置项
  exportConfig: Object,
  // 导入配置项
  importConfig: Object,
  // 打印配置项
  printConfig: Object,
  // 展开行配置项
  expandConfig: Object,
  // 树形结构配置项
  treeConfig: Object,
  // 快捷菜单配置项
  menuConfig: Object,
  // 鼠标配置项
  mouseConfig: Object,
  // 区域配置项
  areaConfig: Object,
  // 按键配置项
  keyboardConfig: Object,
  // 复制粘/贴配置项
  clipConfig: Object,
  // 查找/替换配置项
  fnrConfig: Object,
  // 编辑配置项
  editConfig: Object,
  // 校验配置项
  validConfig: Object,
  // 校验规则配置项
  editRules: Object,
  // 加载中配置项
  loadingConfig: Object,
  // 空内容渲染配置项
  emptyRender: Object,
  // 自定义列配置项
  customConfig: Object,
  // 横向虚拟滚动配置项
  scrollX: Object,
  // 纵向虚拟滚动配置项
  scrollY: Object,
  // （即将废弃）优化相关
  animat: {
    type: Boolean,
    default: () => getConfig2().table.animat
  },
  // （可能会被废弃的参数，不要使用）
  delayHover: {
    type: Number,
    default: () => getConfig2().table.delayHover
  },
  // 额外的参数
  params: Object
};

// node_modules/.pnpm/vxe-table@4.7.86_vue@3.5.12_typescript@5.6.3_/node_modules/vxe-table/es/table/src/emits.js
var emits_default = [
  "update:data",
  "keydown-start",
  "keydown",
  "keydown-end",
  "paste",
  "copy",
  "cut",
  "current-change",
  "radio-change",
  "checkbox-change",
  "checkbox-all",
  "checkbox-range-start",
  "checkbox-range-change",
  "checkbox-range-end",
  "checkbox-range-select",
  "cell-click",
  "cell-dblclick",
  "cell-menu",
  "cell-mouseenter",
  "cell-mouseleave",
  "cell-selected",
  "cell-delete-value",
  "cell-backspace-value",
  "header-cell-click",
  "header-cell-dblclick",
  "header-cell-menu",
  "footer-cell-click",
  "footer-cell-dblclick",
  "footer-cell-menu",
  "clear-merge",
  "sort-change",
  "clear-sort",
  "filter-change",
  "filter-visible",
  "clear-filter",
  "resizable-change",
  "toggle-row-expand",
  "toggle-tree-expand",
  "menu-click",
  "edit-closed",
  "edit-actived",
  "edit-activated",
  "edit-disabled",
  "valid-error",
  "scroll",
  "custom",
  "change-fnr",
  "open-fnr",
  "show-fnr",
  "hide-fnr",
  "fnr-change",
  "fnr-find",
  "fnr-find-all",
  "fnr-replace",
  "fnr-replace-all",
  "cell-area-copy",
  "cell-area-cut",
  "cell-area-paste",
  "cell-area-merge",
  "clear-cell-area-selection",
  "clear-cell-area-merge",
  "header-cell-area-selection",
  "cell-area-selection-invalid",
  "cell-area-selection-start",
  "cell-area-selection-drag",
  "cell-area-selection-end",
  "cell-area-extension-start",
  "cell-area-extension-drag",
  "cell-area-extension-end",
  "cell-area-selection-all-start",
  "cell-area-selection-all-end",
  "cell-area-arrows-start",
  "cell-area-arrows-end",
  "active-cell-change-start",
  "active-cell-change-end"
];

// node_modules/.pnpm/vxe-table@4.7.86_vue@3.5.12_typescript@5.6.3_/node_modules/vxe-table/es/table/module/custom/panel.js
init_vue_runtime_esm_bundler();
var import_xe_utils10 = __toESM(require_xe_utils());
var { getI18n: getI18n5, getIcon: getIcon3 } = VxeUI;
var panel_default = defineComponent({
  name: "TableCustomPanel",
  props: {
    customStore: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const VxeUIModalComponent = VxeUI.getComponent("VxeModal");
    const VxeUIDrawerComponent = VxeUI.getComponent("VxeDrawer");
    const VxeUIButtonComponent = VxeUI.getComponent("VxeButton");
    const VxeUIInputComponent = VxeUI.getComponent("VxeInput");
    const VxeUITooltipComponent = VxeUI.getComponent("VxeTooltip");
    const VxeUIRadioGroupComponent = VxeUI.getComponent("VxeRadioGroup");
    const $xeTable = inject("$xeTable", {});
    const { reactData } = $xeTable;
    const { computeCustomOpts, computeColumnOpts, computeIsMaxFixedColumn } = $xeTable.getComputeMaps();
    const refElem = ref();
    const bodyElemRef = ref();
    const dragHintElemRef = ref();
    const dragColumnRef = ref();
    let prevDropTrEl;
    const handleWrapperMouseenterEvent = (evnt) => {
      const { customStore } = props;
      customStore.activeWrapper = true;
      $xeTable.customOpenEvent(evnt);
    };
    const handleWrapperMouseleaveEvent = (evnt) => {
      const { customStore } = props;
      customStore.activeWrapper = false;
      setTimeout(() => {
        if (!customStore.activeBtn && !customStore.activeWrapper) {
          $xeTable.customCloseEvent(evnt);
        }
      }, 300);
    };
    const confirmCustomEvent = ({ $event }) => {
      const { customColumnList } = reactData;
      const customOpts = computeCustomOpts.value;
      const { allowVisible, allowSort, allowFixed, allowResizable } = customOpts;
      import_xe_utils10.default.eachTree(customColumnList, (column, index, items, path, parent) => {
        if (parent) {
          column.fixed = parent.fixed;
        } else {
          if (allowSort) {
            const sortIndex = index + 1;
            column.renderSortNumber = sortIndex;
          }
          if (allowFixed) {
            column.fixed = column.renderFixed;
          }
        }
        if (allowResizable) {
          if (column.renderVisible && (!column.children || column.children.length)) {
            if (column.renderResizeWidth !== column.renderWidth) {
              column.resizeWidth = column.renderResizeWidth;
              column.renderWidth = column.renderResizeWidth;
            }
          }
        }
        if (allowVisible) {
          column.visible = column.renderVisible;
        }
      });
      $xeTable.closeCustom();
      $xeTable.emitCustomEvent("confirm", $event);
      $xeTable.saveCustomStore("confirm");
    };
    const cancelCloseEvent = ({ $event }) => {
      $xeTable.closeCustom();
      $xeTable.emitCustomEvent("close", $event);
    };
    const cancelCustomEvent = ({ $event }) => {
      const { customStore } = props;
      const { customColumnList } = reactData;
      const { oldSortMaps, oldFixedMaps, oldVisibleMaps } = customStore;
      const customOpts = computeCustomOpts.value;
      const { allowVisible, allowSort, allowFixed, allowResizable } = customOpts;
      import_xe_utils10.default.eachTree(customColumnList, (column) => {
        const colid = column.getKey();
        const visible = !!oldVisibleMaps[colid];
        const fixed = oldFixedMaps[colid] || "";
        if (allowVisible) {
          column.renderVisible = visible;
          column.visible = visible;
        }
        if (allowFixed) {
          column.renderFixed = fixed;
          column.fixed = fixed;
        }
        if (allowSort) {
          column.renderSortNumber = oldSortMaps[colid] || 0;
        }
        if (allowResizable) {
          column.renderResizeWidth = column.renderWidth;
        }
      }, { children: "children" });
      $xeTable.closeCustom();
      $xeTable.emitCustomEvent("cancel", $event);
    };
    const handleResetCustomEvent = (evnt) => {
      $xeTable.resetColumn(true);
      $xeTable.closeCustom();
      $xeTable.emitCustomEvent("reset", evnt);
    };
    const resetCustomEvent = ({ $event }) => {
      if (VxeUI.modal) {
        VxeUI.modal.confirm({
          content: getI18n5("vxe.custom.cstmConfirmRestore"),
          className: "vxe-table--ignore-clear",
          escClosable: true
        }).then((type) => {
          if (type === "confirm") {
            handleResetCustomEvent($event);
          }
        });
      } else {
        handleResetCustomEvent($event);
      }
    };
    const handleOptionCheck = (column) => {
      const { customColumnList } = reactData;
      const matchObj = import_xe_utils10.default.findTree(customColumnList, (item) => item === column);
      if (matchObj && matchObj.parent) {
        const { parent } = matchObj;
        if (parent.children && parent.children.length) {
          parent.renderVisible = parent.children.every((column2) => column2.renderVisible);
          parent.halfVisible = !parent.renderVisible && parent.children.some((column2) => column2.renderVisible || column2.halfVisible);
          handleOptionCheck(parent);
        }
      }
    };
    const changeCheckboxOption = (column) => {
      const isChecked = !column.renderVisible;
      const customOpts = computeCustomOpts.value;
      if (customOpts.immediate) {
        import_xe_utils10.default.eachTree([column], (item) => {
          item.visible = isChecked;
          item.renderVisible = isChecked;
          item.halfVisible = false;
        });
        $xeTable.handleCustom();
        $xeTable.saveCustomStore("update:visible");
      } else {
        import_xe_utils10.default.eachTree([column], (item) => {
          item.renderVisible = isChecked;
          item.halfVisible = false;
        });
      }
      handleOptionCheck(column);
      $xeTable.checkCustomStatus();
    };
    const changeFixedOption = (column, colFixed) => {
      const isMaxFixedColumn = computeIsMaxFixedColumn.value;
      const customOpts = computeCustomOpts.value;
      if (customOpts.immediate) {
        if (column.renderFixed === colFixed) {
          import_xe_utils10.default.eachTree([column], (col) => {
            col.fixed = "";
            col.renderFixed = "";
          });
        } else {
          if (!isMaxFixedColumn || column.renderFixed) {
            import_xe_utils10.default.eachTree([column], (col) => {
              col.fixed = colFixed;
              col.renderFixed = colFixed;
            });
          }
        }
        $xeTable.handleCustom();
        $xeTable.saveCustomStore("update:fixed");
      } else {
        if (column.renderFixed === colFixed) {
          import_xe_utils10.default.eachTree([column], (col) => {
            col.renderFixed = "";
          });
        } else {
          if (!isMaxFixedColumn || column.renderFixed) {
            import_xe_utils10.default.eachTree([column], (col) => {
              col.renderFixed = colFixed;
            });
          }
        }
      }
    };
    const allOptionEvent = () => {
      const { customStore } = props;
      const { customColumnList } = reactData;
      const customOpts = computeCustomOpts.value;
      const { checkMethod } = customOpts;
      const isAll = !customStore.isAll;
      if (customOpts.immediate) {
        import_xe_utils10.default.eachTree(customColumnList, (column) => {
          if (!checkMethod || checkMethod({ column })) {
            column.visible = isAll;
            column.renderVisible = isAll;
            column.halfVisible = false;
          }
        });
        customStore.isAll = isAll;
        $xeTable.handleCustom();
        $xeTable.saveCustomStore("update:visible");
      } else {
        import_xe_utils10.default.eachTree(customColumnList, (column) => {
          if (!checkMethod || checkMethod({ column })) {
            column.renderVisible = isAll;
            column.halfVisible = false;
          }
        });
        customStore.isAll = isAll;
      }
      $xeTable.checkCustomStatus();
    };
    const sortMousedownEvent = (evnt) => {
      const btnEl = evnt.currentTarget;
      const tdEl = btnEl.parentNode;
      const trEl = tdEl.parentNode;
      const colid = trEl.getAttribute("colid");
      const column = $xeTable.getColumnById(colid);
      trEl.draggable = true;
      dragColumnRef.value = column;
      addClass(trEl, "active--drag-origin");
    };
    const sortMouseupEvent = (evnt) => {
      const btnEl = evnt.currentTarget;
      const tdEl = btnEl.parentNode;
      const trEl = tdEl.parentNode;
      const dragHintEl = dragHintElemRef.value;
      trEl.draggable = false;
      dragColumnRef.value = null;
      removeClass(trEl, "active--drag-origin");
      if (dragHintEl) {
        dragHintEl.style.display = "";
      }
    };
    const sortDragstartEvent = (evnt) => {
      const img = new Image();
      if (evnt.dataTransfer) {
        evnt.dataTransfer.setDragImage(img, 0, 0);
      }
    };
    const sortDragendEvent = (evnt) => {
      const { customColumnList } = reactData;
      const customOpts = computeCustomOpts.value;
      const trEl = evnt.currentTarget;
      const dragHintEl = dragHintElemRef.value;
      if (prevDropTrEl) {
        if (prevDropTrEl !== trEl) {
          const dragOffset = prevDropTrEl.getAttribute("drag-pos");
          const colid = trEl.getAttribute("colid");
          const column = $xeTable.getColumnById(colid);
          if (!column) {
            return;
          }
          const cIndex = import_xe_utils10.default.findIndexOf(customColumnList, (item) => item.id === column.id);
          const targetColid = prevDropTrEl.getAttribute("colid");
          const targetColumn = $xeTable.getColumnById(targetColid);
          if (!targetColumn) {
            return;
          }
          customColumnList.splice(cIndex, 1);
          const tcIndex = import_xe_utils10.default.findIndexOf(customColumnList, (item) => item.id === targetColumn.id);
          customColumnList.splice(tcIndex + (dragOffset === "bottom" ? 1 : 0), 0, column);
        }
        prevDropTrEl.draggable = false;
        prevDropTrEl.removeAttribute("drag-pos");
        removeClass(prevDropTrEl, "active--drag-target");
      }
      dragColumnRef.value = null;
      trEl.draggable = false;
      trEl.removeAttribute("drag-pos");
      if (dragHintEl) {
        dragHintEl.style.display = "";
      }
      removeClass(trEl, "active--drag-target");
      removeClass(trEl, "active--drag-origin");
      if (customOpts.immediate) {
        import_xe_utils10.default.eachTree(customColumnList, (column, index, items, path, parent) => {
          if (!parent) {
            const sortIndex = index + 1;
            column.renderSortNumber = sortIndex;
          }
        });
        $xeTable.handleCustom();
        $xeTable.saveCustomStore("update:sort");
      }
    };
    const sortDragoverEvent = (evnt) => {
      const trEl = evnt.currentTarget;
      if (prevDropTrEl !== trEl) {
        removeClass(prevDropTrEl, "active--drag-target");
      }
      const colid = trEl.getAttribute("colid");
      const column = $xeTable.getColumnById(colid);
      if (column && column.level === 1) {
        evnt.preventDefault();
        const offsetY = evnt.clientY - trEl.getBoundingClientRect().y;
        const dragOffset = offsetY < trEl.clientHeight / 2 ? "top" : "bottom";
        addClass(trEl, "active--drag-target");
        trEl.setAttribute("drag-pos", dragOffset);
        prevDropTrEl = trEl;
      }
      updateDropHint(evnt);
    };
    const updateDropHint = (evnt) => {
      const dragHintEl = dragHintElemRef.value;
      const bodyEl = bodyElemRef.value;
      if (!bodyEl) {
        return;
      }
      if (dragHintEl) {
        const wrapperEl = bodyEl.parentNode;
        const wrapperRect = wrapperEl.getBoundingClientRect();
        dragHintEl.style.display = "block";
        dragHintEl.style.top = `${Math.min(wrapperEl.clientHeight - wrapperEl.scrollTop - dragHintEl.clientHeight, evnt.clientY - wrapperRect.y)}px`;
        dragHintEl.style.left = `${Math.min(wrapperEl.clientWidth - wrapperEl.scrollLeft - dragHintEl.clientWidth - 16, evnt.clientX - wrapperRect.x)}px`;
      }
    };
    const renderSimplePanel = () => {
      const { customStore } = props;
      const { customColumnList } = reactData;
      const customOpts = computeCustomOpts.value;
      const { maxHeight } = customStore;
      const { checkMethod, visibleMethod, allowVisible, allowSort, allowFixed, trigger, placement } = customOpts;
      const isMaxFixedColumn = computeIsMaxFixedColumn.value;
      const colVNs = [];
      const customWrapperOns = {};
      if (trigger === "hover") {
        customWrapperOns.onMouseenter = handleWrapperMouseenterEvent;
        customWrapperOns.onMouseleave = handleWrapperMouseleaveEvent;
      }
      import_xe_utils10.default.eachTree(customColumnList, (column, index, items, path, parent) => {
        const isVisible = visibleMethod ? visibleMethod({ column }) : true;
        if (isVisible) {
          const isChecked = column.renderVisible;
          const isIndeterminate = column.halfVisible;
          const isColGroup = column.children && column.children.length;
          const colTitle = formatText(column.getTitle(), 1);
          const isDisabled = checkMethod ? !checkMethod({ column }) : false;
          const isHidden = !isChecked;
          colVNs.push(h("li", {
            key: column.id,
            colid: column.id,
            class: ["vxe-table-custom--option", `level--${column.level}`, {
              "is--group": isColGroup
            }],
            onDragstart: sortDragstartEvent,
            onDragend: sortDragendEvent,
            onDragover: sortDragoverEvent
          }, [
            allowVisible ? h("div", {
              class: ["vxe-table-custom--checkbox-option", {
                "is--checked": isChecked,
                "is--indeterminate": isIndeterminate,
                "is--disabled": isDisabled
              }],
              title: getI18n5("vxe.custom.setting.colVisible"),
              onClick: () => {
                if (!isDisabled) {
                  changeCheckboxOption(column);
                }
              }
            }, [
              h("span", {
                class: ["vxe-checkbox--icon", isIndeterminate ? getIcon3().TABLE_CHECKBOX_INDETERMINATE : isChecked ? getIcon3().TABLE_CHECKBOX_CHECKED : getIcon3().TABLE_CHECKBOX_UNCHECKED]
              })
            ]) : createCommentVNode(),
            allowSort && column.level === 1 ? h("div", {
              class: "vxe-table-custom--sort-option"
            }, [
              h("span", Object.assign({ class: ["vxe-table-custom--sort-btn", {
                "is--disabled": isHidden
              }], title: getI18n5("vxe.custom.setting.sortHelpTip") }, isHidden ? {} : {
                onMousedown: sortMousedownEvent,
                onMouseup: sortMouseupEvent
              }), [
                h("i", {
                  class: getIcon3().TABLE_CUSTOM_SORT
                })
              ])
            ]) : createCommentVNode(),
            column.type === "html" ? h("div", {
              key: "1",
              class: "vxe-table-custom--checkbox-label",
              innerHTML: colTitle
            }) : h("div", {
              key: "0",
              class: "vxe-table-custom--checkbox-label"
            }, colTitle),
            !parent && allowFixed ? h("div", {
              class: "vxe-table-custom--fixed-option"
            }, [
              VxeUIButtonComponent ? h(VxeUIButtonComponent, {
                mode: "text",
                icon: column.renderFixed === "left" ? getIcon3().TOOLBAR_TOOLS_FIXED_LEFT_ACTIVE : getIcon3().TOOLBAR_TOOLS_FIXED_LEFT,
                status: column.renderFixed === "left" ? "primary" : "",
                disabled: isHidden || isMaxFixedColumn && !column.renderFixed,
                title: getI18n5(column.renderFixed === "left" ? "vxe.toolbar.cancelFixed" : "vxe.toolbar.fixedLeft"),
                onClick: () => {
                  changeFixedOption(column, "left");
                }
              }) : createCommentVNode(),
              VxeUIButtonComponent ? h(VxeUIButtonComponent, {
                mode: "text",
                icon: column.renderFixed === "right" ? getIcon3().TOOLBAR_TOOLS_FIXED_RIGHT_ACTIVE : getIcon3().TOOLBAR_TOOLS_FIXED_RIGHT,
                status: column.renderFixed === "right" ? "primary" : "",
                disabled: isHidden || isMaxFixedColumn && !column.renderFixed,
                title: getI18n5(column.renderFixed === "right" ? "vxe.toolbar.cancelFixed" : "vxe.toolbar.fixedRight"),
                onClick: () => {
                  changeFixedOption(column, "right");
                }
              }) : createCommentVNode()
            ]) : createCommentVNode()
          ]));
        }
      });
      const isAllChecked = customStore.isAll;
      const isAllIndeterminate = customStore.isIndeterminate;
      const dragColumn = dragColumnRef.value;
      return h("div", {
        ref: refElem,
        key: "simple",
        class: ["vxe-table-custom-wrapper", `placement--${placement}`, {
          "is--active": customStore.visible
        }],
        style: maxHeight && !["left", "right"].includes(placement) ? {
          maxHeight: `${maxHeight}px`
        } : {}
      }, customStore.visible ? [
        h("ul", {
          class: "vxe-table-custom--header"
        }, [
          h("li", {
            class: "vxe-table-custom--option"
          }, [
            allowVisible ? h("div", {
              class: ["vxe-table-custom--checkbox-option", {
                "is--checked": isAllChecked,
                "is--indeterminate": isAllIndeterminate
              }],
              title: getI18n5("vxe.table.allTitle"),
              onClick: allOptionEvent
            }, [
              h("span", {
                class: ["vxe-checkbox--icon", isAllIndeterminate ? getIcon3().TABLE_CHECKBOX_INDETERMINATE : isAllChecked ? getIcon3().TABLE_CHECKBOX_CHECKED : getIcon3().TABLE_CHECKBOX_UNCHECKED]
              }),
              h("span", {
                class: "vxe-checkbox--label"
              }, getI18n5("vxe.toolbar.customAll"))
            ]) : h("span", {
              class: "vxe-checkbox--label"
            }, getI18n5("vxe.table.customTitle"))
          ])
        ]),
        h("div", {
          ref: bodyElemRef,
          class: "vxe-table-custom--list-wrapper"
        }, [
          h(TransitionGroup, Object.assign({ class: "vxe-table-custom--body", name: "vxe-table-custom--list", tag: "ul" }, customWrapperOns), {
            default: () => colVNs
          }),
          h("div", {
            ref: dragHintElemRef,
            class: "vxe-table-custom-popup--drag-hint"
          }, getI18n5("vxe.custom.cstmDragTarget", [dragColumn && dragColumn.type !== "html" ? dragColumn.getTitle() : ""]))
        ]),
        customOpts.showFooter ? h("div", {
          class: "vxe-table-custom--footer"
        }, [
          VxeUIButtonComponent ? h(VxeUIButtonComponent, {
            mode: "text",
            content: customOpts.resetButtonText || getI18n5("vxe.table.customRestore"),
            onClick: resetCustomEvent
          }) : createCommentVNode(),
          customOpts.immediate ? VxeUIButtonComponent ? h(VxeUIButtonComponent, {
            mode: "text",
            content: customOpts.closeButtonText || getI18n5("vxe.table.customClose"),
            onClick: cancelCloseEvent
          }) : createCommentVNode() : VxeUIButtonComponent ? h(VxeUIButtonComponent, {
            mode: "text",
            content: customOpts.cancelButtonText || getI18n5("vxe.table.customCancel"),
            onClick: cancelCustomEvent
          }) : createCommentVNode(),
          customOpts.immediate ? createCommentVNode() : VxeUIButtonComponent ? h(VxeUIButtonComponent, {
            mode: "text",
            status: "primary",
            content: customOpts.confirmButtonText || getI18n5("vxe.table.customConfirm"),
            onClick: confirmCustomEvent
          }) : createCommentVNode()
        ]) : null
      ] : []);
    };
    const renderPopupPanel = () => {
      const { customStore } = props;
      const { customColumnList } = reactData;
      const customOpts = computeCustomOpts.value;
      const { modalOptions, drawerOptions, allowVisible, allowSort, allowFixed, allowResizable, checkMethod, visibleMethod } = customOpts;
      const columnOpts = computeColumnOpts.value;
      const { maxFixedSize } = columnOpts;
      const { mode } = customOpts;
      const modalOpts = Object.assign({}, modalOptions);
      const drawerOpts = Object.assign({}, drawerOptions);
      const isMaxFixedColumn = computeIsMaxFixedColumn.value;
      const trVNs = [];
      import_xe_utils10.default.eachTree(customColumnList, (column, index, items, path, parent) => {
        const isVisible = visibleMethod ? visibleMethod({ column }) : true;
        if (isVisible) {
          const isChecked = column.renderVisible;
          const isIndeterminate = column.halfVisible;
          const colTitle = formatText(column.getTitle(), 1);
          const isColGroup = column.children && column.children.length;
          const isDisabled = checkMethod ? !checkMethod({ column }) : false;
          const isHidden = !isChecked;
          trVNs.push(h("tr", {
            key: column.id,
            colid: column.id,
            class: [`vxe-table-custom-popup--row level--${column.level}`, {
              "is--group": isColGroup
            }],
            onDragstart: sortDragstartEvent,
            onDragend: sortDragendEvent,
            onDragover: sortDragoverEvent
          }, [
            allowVisible ? h("td", {
              class: "vxe-table-custom-popup--column-item col--visible"
            }, [
              h("div", {
                class: ["vxe-table-custom--checkbox-option", {
                  "is--checked": isChecked,
                  "is--indeterminate": isIndeterminate,
                  "is--disabled": isDisabled
                }],
                title: getI18n5("vxe.custom.setting.colVisible"),
                onClick: () => {
                  if (!isDisabled) {
                    changeCheckboxOption(column);
                  }
                }
              }, [
                h("span", {
                  class: ["vxe-checkbox--icon", isIndeterminate ? getIcon3().TABLE_CHECKBOX_INDETERMINATE : isChecked ? getIcon3().TABLE_CHECKBOX_CHECKED : getIcon3().TABLE_CHECKBOX_UNCHECKED]
                })
              ])
            ]) : createCommentVNode(),
            allowSort ? h("td", {
              class: "vxe-table-custom-popup--column-item col--sort"
            }, [
              column.level === 1 ? h("span", Object.assign({ class: ["vxe-table-custom-popup--column-sort-btn", {
                "is--disabled": isHidden
              }], title: getI18n5("vxe.custom.setting.sortHelpTip") }, isHidden ? {} : {
                onMousedown: sortMousedownEvent,
                onMouseup: sortMouseupEvent
              }), [
                h("i", {
                  class: getIcon3().TABLE_CUSTOM_SORT
                })
              ]) : h("span", "-")
            ]) : createCommentVNode(),
            h("td", {
              class: "vxe-table-custom-popup--column-item col--name"
            }, [
              column.type === "html" ? h("div", {
                key: "1",
                class: "vxe-table-custom-popup--name",
                innerHTML: colTitle
              }) : h("div", {
                key: "0",
                class: "vxe-table-custom-popup--name",
                title: colTitle
              }, colTitle)
            ]),
            allowResizable ? h("td", {
              class: "vxe-table-custom-popup--column-item col--resizable"
            }, [
              column.children && column.children.length ? h("span", "-") : VxeUIInputComponent ? h(VxeUIInputComponent, {
                type: "integer",
                disabled: isHidden,
                modelValue: column.renderResizeWidth,
                "onUpdate:modelValue"(value) {
                  column.renderResizeWidth = Math.max(0, Number(value));
                }
              }) : createCommentVNode()
            ]) : createCommentVNode(),
            allowFixed ? h("td", {
              class: "vxe-table-custom-popup--column-item col--fixed"
            }, [
              parent ? h("span", "-") : VxeUIRadioGroupComponent ? h(VxeUIRadioGroupComponent, {
                modelValue: column.renderFixed || "",
                type: "button",
                size: "mini",
                disabled: isHidden,
                options: [
                  { label: getI18n5("vxe.custom.setting.fixedLeft"), value: "left", disabled: isHidden || isMaxFixedColumn },
                  { label: getI18n5("vxe.custom.setting.fixedUnset"), value: "", disabled: isHidden },
                  { label: getI18n5("vxe.custom.setting.fixedRight"), value: "right", disabled: isHidden || isMaxFixedColumn }
                ],
                "onUpdate:modelValue"(value) {
                  column.renderFixed = value;
                }
              }) : createCommentVNode()
            ]) : createCommentVNode()
          ]));
        }
      });
      const isAllChecked = customStore.isAll;
      const isAllIndeterminate = customStore.isIndeterminate;
      const dragColumn = dragColumnRef.value;
      const scopedSlots = {
        default: () => {
          return h("div", {
            ref: bodyElemRef,
            class: "vxe-table-custom-popup--body"
          }, [
            h("div", {
              class: "vxe-table-custom-popup--table-wrapper"
            }, [
              h("table", {}, [
                h("colgroup", {}, [
                  allowVisible ? h("col", {
                    style: {
                      width: "80px"
                    }
                  }) : createCommentVNode(),
                  allowSort ? h("col", {
                    style: {
                      width: "80px"
                    }
                  }) : createCommentVNode(),
                  h("col", {
                    style: {
                      minWidth: "120px"
                    }
                  }),
                  allowResizable ? h("col", {
                    style: {
                      width: "140px"
                    }
                  }) : createCommentVNode(),
                  allowFixed ? h("col", {
                    style: {
                      width: "200px"
                    }
                  }) : createCommentVNode()
                ]),
                h("thead", {}, [
                  h("tr", {}, [
                    allowVisible ? h("th", {}, [
                      h("div", {
                        class: ["vxe-table-custom--checkbox-option", {
                          "is--checked": isAllChecked,
                          "is--indeterminate": isAllIndeterminate
                        }],
                        title: getI18n5("vxe.table.allTitle"),
                        onClick: allOptionEvent
                      }, [
                        h("span", {
                          class: ["vxe-checkbox--icon", isAllIndeterminate ? getIcon3().TABLE_CHECKBOX_INDETERMINATE : isAllChecked ? getIcon3().TABLE_CHECKBOX_CHECKED : getIcon3().TABLE_CHECKBOX_UNCHECKED]
                        }),
                        h("span", {
                          class: "vxe-checkbox--label"
                        }, getI18n5("vxe.toolbar.customAll"))
                      ])
                    ]) : createCommentVNode(),
                    allowSort ? h("th", {}, [
                      h("span", {
                        class: "vxe-table-custom-popup--table-sort-help-title"
                      }, getI18n5("vxe.custom.setting.colSort")),
                      VxeUITooltipComponent ? h(VxeUITooltipComponent, {
                        enterable: true,
                        content: getI18n5("vxe.custom.setting.sortHelpTip"),
                        popupClassName: "vxe-table--ignore-clear"
                      }, {
                        default: () => {
                          return h("i", {
                            class: "vxe-table-custom-popup--table-sort-help-icon vxe-icon-question-circle-fill"
                          });
                        }
                      }) : createCommentVNode()
                    ]) : createCommentVNode(),
                    h("th", {}, getI18n5("vxe.custom.setting.colTitle")),
                    allowResizable ? h("th", {}, getI18n5("vxe.custom.setting.colResizable")) : createCommentVNode(),
                    allowFixed ? h("th", {}, getI18n5(`vxe.custom.setting.${maxFixedSize ? "colFixedMax" : "colFixed"}`, [maxFixedSize])) : createCommentVNode()
                  ])
                ]),
                h(TransitionGroup, {
                  class: "vxe-table-custom--body",
                  tag: "tbody",
                  name: "vxe-table-custom--list"
                }, {
                  default: () => trVNs
                })
              ])
            ]),
            h("div", {
              ref: dragHintElemRef,
              class: "vxe-table-custom-popup--drag-hint"
            }, getI18n5("vxe.custom.cstmDragTarget", [dragColumn ? dragColumn.getTitle() : ""]))
          ]);
        },
        footer: () => {
          return h("div", {
            class: "vxe-table-custom-popup--footer"
          }, [
            VxeUIButtonComponent ? h(VxeUIButtonComponent, {
              content: customOpts.resetButtonText || getI18n5("vxe.custom.cstmRestore"),
              onClick: resetCustomEvent
            }) : createCommentVNode(),
            VxeUIButtonComponent ? h(VxeUIButtonComponent, {
              content: customOpts.resetButtonText || getI18n5("vxe.custom.cstmCancel"),
              onClick: cancelCustomEvent
            }) : createCommentVNode(),
            VxeUIButtonComponent ? h(VxeUIButtonComponent, {
              status: "primary",
              content: customOpts.confirmButtonText || getI18n5("vxe.custom.cstmConfirm"),
              onClick: confirmCustomEvent
            }) : createCommentVNode()
          ]);
        }
      };
      if (mode === "drawer") {
        return VxeUIDrawerComponent ? h(VxeUIDrawerComponent, {
          key: "drawer",
          className: ["vxe-table-custom-drawer-wrapper", "vxe-table--ignore-clear", drawerOpts.className || ""].join(" "),
          modelValue: customStore.visible,
          title: drawerOpts.title || getI18n5("vxe.custom.cstmTitle"),
          width: drawerOpts.width || Math.min(880, document.documentElement.clientWidth),
          position: drawerOpts.position,
          escClosable: !!drawerOpts.escClosable,
          destroyOnClose: true,
          showFooter: true,
          "onUpdate:modelValue"(value) {
            customStore.visible = value;
          }
        }, scopedSlots) : createCommentVNode();
      }
      return VxeUIModalComponent ? h(VxeUIModalComponent, {
        key: "modal",
        className: ["vxe-table-custom-modal-wrapper", "vxe-table--ignore-clear", modalOpts.className || ""].join(" "),
        modelValue: customStore.visible,
        title: modalOpts.title || getI18n5("vxe.custom.cstmTitle"),
        width: modalOpts.width || Math.min(880, document.documentElement.clientWidth),
        minWidth: modalOpts.minWidth || 700,
        height: modalOpts.height || Math.min(680, document.documentElement.clientHeight),
        minHeight: modalOpts.minHeight || 400,
        showZoom: modalOpts.showZoom,
        showMaximize: modalOpts.showMaximize,
        showMinimize: modalOpts.showMinimize,
        mask: modalOpts.mask,
        lockView: modalOpts.lockView,
        resize: modalOpts.resize,
        escClosable: !!modalOpts.escClosable,
        destroyOnClose: true,
        showFooter: true,
        "onUpdate:modelValue"(value) {
          customStore.visible = value;
        }
      }, scopedSlots) : createCommentVNode();
    };
    const renderVN = () => {
      const customOpts = computeCustomOpts.value;
      if (["modal", "drawer", "popup"].includes(`${customOpts.mode}`)) {
        return renderPopupPanel();
      }
      return renderSimplePanel();
    };
    if (true) {
      nextTick(() => {
        const customOpts = computeCustomOpts.value;
        const { mode } = customOpts;
        if (!VxeUIModalComponent) {
          errLog("vxe.error.reqComp", ["vxe-modal"]);
        }
        if (!VxeUIDrawerComponent && mode === "drawer") {
          errLog("vxe.error.reqComp", ["vxe-drawer"]);
        }
        if (!VxeUIButtonComponent) {
          errLog("vxe.error.reqComp", ["vxe-button"]);
        }
        if (!VxeUIInputComponent) {
          errLog("vxe.error.reqComp", ["vxe-input"]);
        }
        if (!VxeUITooltipComponent) {
          errLog("vxe.error.reqComp", ["vxe-tooltip"]);
        }
        if (!VxeUIRadioGroupComponent) {
          errLog("vxe.error.reqComp", ["vxe-radio-group"]);
        }
      });
    }
    return renderVN;
  }
});

// node_modules/.pnpm/vxe-table@4.7.86_vue@3.5.12_typescript@5.6.3_/node_modules/vxe-table/es/table/module/filter/panel.js
init_vue_runtime_esm_bundler();
var { getI18n: getI18n6, getIcon: getIcon4, renderer: renderer4 } = VxeUI;
var panel_default2 = defineComponent({
  name: "VxeTableFilterPanel",
  props: {
    filterStore: Object
  },
  setup(props) {
    const $xeTable = inject("$xeTable", {});
    const { reactData: tableReactData, internalData: tableInternalData, getComputeMaps } = $xeTable;
    const { computeFilterOpts } = getComputeMaps();
    const computeHasCheckOption = computed(() => {
      const { filterStore } = props;
      return filterStore && filterStore.options.some((option) => option.checked);
    });
    const filterCheckAllEvent = (evnt, value) => {
      const { filterStore } = props;
      filterStore.options.forEach((option) => {
        option._checked = value;
        option.checked = value;
      });
      filterStore.isAllSelected = value;
      filterStore.isIndeterminate = false;
    };
    const confirmFilter = (evnt) => {
      $xeTable.handleFilterConfirmFilter(evnt);
    };
    const changeRadioOption = (evnt, checked, item) => {
      $xeTable.handleFilterChangeRadioOption(evnt, checked, item);
    };
    const resetFilter = (evnt) => {
      $xeTable.handleFilterResetFilter(evnt);
    };
    const changeMultipleOption = (evnt, checked, item) => {
      $xeTable.handleFilterChangeMultipleOption(evnt, checked, item);
    };
    const changeOption = (evnt, checked, item) => {
      $xeTable.handleFilterChangeOption(evnt, checked, item);
    };
    const changeAllOption = (evnt, checked) => {
      const { filterStore } = props;
      if (filterStore.multiple) {
        filterCheckAllEvent(evnt, checked);
      } else {
        resetFilter(evnt);
      }
    };
    const $panel = {
      changeRadioOption,
      changeMultipleOption,
      changeAllOption,
      changeOption,
      confirmFilter,
      resetFilter
    };
    const renderOptions = (filterRender, compConf) => {
      const { filterStore } = props;
      const { column, multiple, maxHeight } = filterStore;
      const slots = column ? column.slots : null;
      const filterSlot = slots ? slots.filter : null;
      const params = Object.assign({}, tableInternalData._currFilterParams, { $panel, $table: $xeTable });
      const rtFilter = compConf ? compConf.renderTableFilter || compConf.renderFilter : null;
      if (filterSlot) {
        return [
          h("div", {
            class: "vxe-table--filter-template"
          }, $xeTable.callSlot(filterSlot, params))
        ];
      } else if (rtFilter) {
        return [
          h("div", {
            class: "vxe-table--filter-template"
          }, getSlotVNs(rtFilter(filterRender, params)))
        ];
      }
      const isAllChecked = multiple ? filterStore.isAllSelected : !filterStore.options.some((item) => item._checked);
      const isAllIndeterminate = multiple && filterStore.isIndeterminate;
      return [
        h("ul", {
          class: "vxe-table--filter-header"
        }, [
          h("li", {
            class: ["vxe-table--filter-option", {
              "is--checked": isAllChecked,
              "is--indeterminate": isAllIndeterminate
            }],
            title: getI18n6(multiple ? "vxe.table.allTitle" : "vxe.table.allFilter"),
            onClick: (evnt) => {
              changeAllOption(evnt, !filterStore.isAllSelected);
            }
          }, (multiple ? [
            h("span", {
              class: ["vxe-checkbox--icon", isAllIndeterminate ? getIcon4().TABLE_CHECKBOX_INDETERMINATE : isAllChecked ? getIcon4().TABLE_CHECKBOX_CHECKED : getIcon4().TABLE_CHECKBOX_UNCHECKED]
            })
          ] : []).concat([
            h("span", {
              class: "vxe-checkbox--label"
            }, getI18n6("vxe.table.allFilter"))
          ]))
        ]),
        h("ul", {
          class: "vxe-table--filter-body",
          style: maxHeight ? {
            maxHeight: `${maxHeight}px`
          } : {}
        }, filterStore.options.map((item) => {
          const isChecked = item._checked;
          const isIndeterminate = false;
          return h("li", {
            class: ["vxe-table--filter-option", {
              "is--checked": item._checked
            }],
            title: item.label,
            onClick: (evnt) => {
              changeOption(evnt, !item._checked, item);
            }
          }, (multiple ? [
            h("span", {
              class: ["vxe-checkbox--icon", isIndeterminate ? getIcon4().TABLE_CHECKBOX_INDETERMINATE : isChecked ? getIcon4().TABLE_CHECKBOX_CHECKED : getIcon4().TABLE_CHECKBOX_UNCHECKED]
            })
          ] : []).concat([
            h("span", {
              class: "vxe-checkbox--label"
            }, formatText(item.label, 1))
          ]));
        }))
      ];
    };
    const renderFooters = () => {
      const { filterStore } = props;
      const { column, multiple } = filterStore;
      const filterOpts = computeFilterOpts.value;
      const hasCheckOption = computeHasCheckOption.value;
      const { filterRender } = column;
      const compConf = isEnableConf(filterRender) ? renderer4.get(filterRender.name) : null;
      const isDisabled = !hasCheckOption && !filterStore.isAllSelected && !filterStore.isIndeterminate;
      return multiple && (compConf ? !(compConf.showTableFilterFooter === false || compConf.showFilterFooter === false || compConf.isFooter === false) : true) ? [
        h("div", {
          class: "vxe-table--filter-footer"
        }, [
          h("button", {
            class: {
              "is--disabled": isDisabled
            },
            disabled: isDisabled,
            onClick: confirmFilter
          }, filterOpts.confirmButtonText || getI18n6("vxe.table.confirmFilter")),
          h("button", {
            onClick: resetFilter
          }, filterOpts.resetButtonText || getI18n6("vxe.table.resetFilter"))
        ])
      ] : [];
    };
    const renderVN = () => {
      const { filterStore } = props;
      const { initStore } = tableReactData;
      const { column } = filterStore;
      const filterRender = column ? column.filterRender : null;
      const compConf = isEnableConf(filterRender) ? renderer4.get(filterRender.name) : null;
      const filterClassName = compConf ? compConf.tableFilterClassName || compConf.filterClassName : "";
      const params = Object.assign({}, tableInternalData._currFilterParams, { $panel, $table: $xeTable });
      return h("div", {
        class: [
          "vxe-table--filter-wrapper",
          "filter--prevent-default",
          getPropClass(filterClassName, params),
          {
            "is--animat": $xeTable.props.animat,
            "is--multiple": filterStore.multiple,
            "is--active": filterStore.visible
          }
        ],
        style: filterStore.style
      }, initStore.filter && column ? renderOptions(filterRender, compConf).concat(renderFooters()) : []);
    };
    return renderVN;
  }
});

// node_modules/.pnpm/vxe-table@4.7.86_vue@3.5.12_typescript@5.6.3_/node_modules/vxe-table/es/table/module/export/import-panel.js
init_vue_runtime_esm_bundler();
var import_xe_utils11 = __toESM(require_xe_utils());
var { getI18n: getI18n7, getIcon: getIcon5 } = VxeUI;
var import_panel_default = defineComponent({
  name: "VxeTableImportPanel",
  props: {
    defaultOptions: Object,
    storeData: Object
  },
  setup(props) {
    const VxeUIModalComponent = VxeUI.getComponent("VxeModal");
    const VxeUIButtonComponent = VxeUI.getComponent("VxeButton");
    const VxeUISelectComponent = VxeUI.getComponent("VxeSelect");
    const $xeTable = inject("$xeTable", {});
    const { computeImportOpts } = $xeTable.getComputeMaps();
    const reactData = reactive({
      loading: false
    });
    const refFileBtn = ref();
    const computeSelectName = computed(() => {
      const { storeData } = props;
      return `${storeData.filename}.${storeData.type}`;
    });
    const computeHasFile = computed(() => {
      const { storeData } = props;
      return storeData.file && storeData.type;
    });
    const computeParseTypeLabel = computed(() => {
      const { storeData } = props;
      const { type, typeList } = storeData;
      if (type) {
        const selectItem = import_xe_utils11.default.find(typeList, (item) => type === item.value);
        return selectItem ? selectItem.label : "*.*";
      }
      return `*.${typeList.map((item) => item.value).join(", *.")}`;
    });
    const clearFileEvent = () => {
      const { storeData } = props;
      Object.assign(storeData, {
        filename: "",
        sheetName: "",
        type: ""
      });
    };
    const selectFileEvent = () => {
      const { storeData, defaultOptions } = props;
      $xeTable.readFile(defaultOptions).then((params) => {
        const { file } = params;
        Object.assign(storeData, parseFile(file), { file });
      }).catch((e) => e);
    };
    const showEvent = () => {
      nextTick(() => {
        const targetElem = refFileBtn.value;
        if (targetElem) {
          targetElem.focus();
        }
      });
    };
    const cancelEvent = () => {
      const { storeData } = props;
      storeData.visible = false;
    };
    const importEvent = () => {
      const { storeData, defaultOptions } = props;
      const importOpts = computeImportOpts.value;
      reactData.loading = true;
      $xeTable.importByFile(storeData.file, Object.assign({}, importOpts, defaultOptions)).then(() => {
        reactData.loading = false;
        storeData.visible = false;
      }).catch(() => {
        reactData.loading = false;
      });
    };
    const renderVN = () => {
      const { defaultOptions, storeData } = props;
      const selectName = computeSelectName.value;
      const hasFile = computeHasFile.value;
      const parseTypeLabel = computeParseTypeLabel.value;
      return VxeUIModalComponent ? h(VxeUIModalComponent, {
        modelValue: storeData.visible,
        title: getI18n7("vxe.import.impTitle"),
        className: "vxe-table-import-popup-wrapper",
        width: 540,
        mask: true,
        lockView: true,
        showFooter: false,
        escClosable: true,
        maskClosable: true,
        loading: reactData.loading,
        "onUpdate:modelValue"(value) {
          storeData.visible = value;
        },
        onShow: showEvent
      }, {
        default: () => {
          return h("div", {
            class: "vxe-export--panel"
          }, [
            h("table", {
              cellspacing: 0,
              cellpadding: 0,
              border: 0
            }, [
              h("tbody", [
                h("tr", [
                  h("td", getI18n7("vxe.import.impFile")),
                  h("td", [
                    hasFile ? h("div", {
                      class: "vxe-import-selected--file",
                      title: selectName
                    }, [
                      h("span", selectName),
                      h("i", {
                        class: getIcon5().INPUT_CLEAR,
                        onClick: clearFileEvent
                      })
                    ]) : h("button", {
                      ref: refFileBtn,
                      class: "vxe-import-select--file",
                      onClick: selectFileEvent
                    }, getI18n7("vxe.import.impSelect"))
                  ])
                ]),
                h("tr", [
                  h("td", getI18n7("vxe.import.impType")),
                  h("td", parseTypeLabel)
                ]),
                h("tr", [
                  h("td", getI18n7("vxe.import.impMode")),
                  h("td", [
                    VxeUISelectComponent ? h(VxeUISelectComponent, {
                      modelValue: defaultOptions.mode,
                      options: storeData.modeList,
                      "onUpdate:modelValue"(value) {
                        defaultOptions.mode = value;
                      }
                    }) : createCommentVNode()
                  ])
                ])
              ])
            ]),
            h("div", {
              class: "vxe-export--panel-btns"
            }, [
              VxeUIButtonComponent ? h(VxeUIButtonComponent, {
                content: getI18n7("vxe.import.impCancel"),
                onClick: cancelEvent
              }) : createCommentVNode(),
              VxeUIButtonComponent ? h(VxeUIButtonComponent, {
                status: "primary",
                disabled: !hasFile,
                content: getI18n7("vxe.import.impConfirm"),
                onClick: importEvent
              }) : createCommentVNode()
            ])
          ]);
        }
      }) : createCommentVNode();
    };
    if (true) {
      nextTick(() => {
        if (!VxeUIModalComponent) {
          errLog("vxe.error.reqComp", ["vxe-modal"]);
        }
        if (!VxeUIButtonComponent) {
          errLog("vxe.error.reqComp", ["vxe-button"]);
        }
        if (!VxeUISelectComponent) {
          errLog("vxe.error.reqComp", ["vxe-select"]);
        }
      });
    }
    return renderVN;
  }
});

// node_modules/.pnpm/vxe-table@4.7.86_vue@3.5.12_typescript@5.6.3_/node_modules/vxe-table/es/table/module/export/export-panel.js
init_vue_runtime_esm_bundler();
var import_xe_utils12 = __toESM(require_xe_utils());
var { getI18n: getI18n8, getIcon: getIcon6 } = VxeUI;
var export_panel_default = defineComponent({
  name: "VxeTableExportPanel",
  props: {
    defaultOptions: Object,
    storeData: Object
  },
  setup(props) {
    const VxeUIModalComponent = VxeUI.getComponent("VxeModal");
    const VxeUIButtonComponent = VxeUI.getComponent("VxeButton");
    const VxeUISelectComponent = VxeUI.getComponent("VxeSelect");
    const VxeUIInputComponent = VxeUI.getComponent("VxeInput");
    const VxeUICheckboxComponent = VxeUI.getComponent("VxeCheckbox");
    const $xeTable = inject("$xeTable", {});
    const { computeExportOpts, computePrintOpts } = $xeTable.getComputeMaps();
    const reactData = reactive({
      isAll: false,
      isIndeterminate: false,
      loading: false
    });
    const xButtonConfirm = ref();
    const xInputFilename = ref();
    const xInputSheetname = ref();
    const computeCheckedAll = computed(() => {
      const { storeData } = props;
      return storeData.columns.every((column) => column.checked);
    });
    const computeShowSheet = computed(() => {
      const { defaultOptions } = props;
      return ["html", "xml", "xlsx", "pdf"].indexOf(defaultOptions.type) > -1;
    });
    const computeSupportMerge = computed(() => {
      const { storeData, defaultOptions } = props;
      return !defaultOptions.original && defaultOptions.mode === "current" && (storeData.isPrint || ["html", "xlsx"].indexOf(defaultOptions.type) > -1);
    });
    const computeSupportStyle = computed(() => {
      const { defaultOptions } = props;
      return !defaultOptions.original && ["xlsx"].indexOf(defaultOptions.type) > -1;
    });
    const handleOptionCheck = (column) => {
      const { storeData } = props;
      const matchObj = import_xe_utils12.default.findTree(storeData.columns, (item) => item === column);
      if (matchObj && matchObj.parent) {
        const { parent } = matchObj;
        if (parent.children && parent.children.length) {
          parent.checked = parent.children.every((column2) => column2.checked);
          parent.halfChecked = !parent.checked && parent.children.some((column2) => column2.checked || column2.halfChecked);
          handleOptionCheck(parent);
        }
      }
    };
    const checkStatus = () => {
      const { storeData } = props;
      const columns = storeData.columns;
      reactData.isAll = columns.every((column) => column.disabled || column.checked);
      reactData.isIndeterminate = !reactData.isAll && columns.some((column) => !column.disabled && (column.checked || column.halfChecked));
    };
    const changeOption = (column) => {
      const isChecked = !column.checked;
      import_xe_utils12.default.eachTree([column], (item) => {
        item.checked = isChecked;
        item.halfChecked = false;
      });
      handleOptionCheck(column);
      checkStatus();
    };
    const allColumnEvent = () => {
      const { storeData } = props;
      const isAll = !reactData.isAll;
      import_xe_utils12.default.eachTree(storeData.columns, (column) => {
        if (!column.disabled) {
          column.checked = isAll;
          column.halfChecked = false;
        }
      });
      reactData.isAll = isAll;
      checkStatus();
    };
    const showEvent = () => {
      nextTick(() => {
        const filenameInp = xInputFilename.value;
        const sheetnameInp = xInputSheetname.value;
        const confirmBtn = xButtonConfirm.value;
        const targetElem = filenameInp || sheetnameInp || confirmBtn;
        if (targetElem) {
          targetElem.focus();
        }
      });
      checkStatus();
    };
    const getExportOption = () => {
      const { storeData, defaultOptions } = props;
      const { hasMerge, columns } = storeData;
      const checkedAll = computeCheckedAll.value;
      const supportMerge = computeSupportMerge.value;
      const expColumns = import_xe_utils12.default.searchTree(columns, (column) => column.checked, { children: "children", mapChildren: "childNodes", original: true });
      return Object.assign({}, defaultOptions, {
        columns: expColumns,
        isMerge: hasMerge && supportMerge && checkedAll ? defaultOptions.isMerge : false
      });
    };
    const printEvent = () => {
      const { storeData } = props;
      const printOpts = computePrintOpts.value;
      storeData.visible = false;
      $xeTable.print(Object.assign({}, printOpts, getExportOption()));
    };
    const exportEvent = () => {
      const { storeData } = props;
      const exportOpts = computeExportOpts.value;
      reactData.loading = true;
      $xeTable.exportData(Object.assign({}, exportOpts, getExportOption())).then(() => {
        reactData.loading = false;
        storeData.visible = false;
      }).catch(() => {
        reactData.loading = false;
      });
    };
    const cancelEvent = () => {
      const { storeData } = props;
      storeData.visible = false;
    };
    const confirmEvent = () => {
      const { storeData } = props;
      if (storeData.isPrint) {
        printEvent();
      } else {
        exportEvent();
      }
    };
    const renderVN = () => {
      const { defaultOptions, storeData } = props;
      const { isAll: isAllChecked, isIndeterminate: isAllIndeterminate } = reactData;
      const { hasTree, hasMerge, isPrint, hasColgroup } = storeData;
      const { isHeader } = defaultOptions;
      const cols = [];
      const checkedAll = computeCheckedAll.value;
      const showSheet = computeShowSheet.value;
      const supportMerge = computeSupportMerge.value;
      const supportStyle = computeSupportStyle.value;
      import_xe_utils12.default.eachTree(storeData.columns, (column) => {
        const colTitle = formatText(column.getTitle(), 1);
        const isColGroup = column.children && column.children.length;
        const isChecked = column.checked;
        const indeterminate = column.halfChecked;
        const isHtml = column.type === "html";
        cols.push(h("li", {
          key: column.id,
          class: ["vxe-export--panel-column-option", `level--${column.level}`, {
            "is--group": isColGroup,
            "is--checked": isChecked,
            "is--indeterminate": indeterminate,
            "is--disabled": column.disabled
          }],
          title: isHtml ? "" : colTitle,
          onClick: () => {
            if (!column.disabled) {
              changeOption(column);
            }
          }
        }, [
          h("span", {
            class: ["vxe-checkbox--icon", indeterminate ? getIcon6().TABLE_CHECKBOX_INDETERMINATE : isChecked ? getIcon6().TABLE_CHECKBOX_CHECKED : getIcon6().TABLE_CHECKBOX_UNCHECKED]
          }),
          isHtml ? h("span", {
            key: "1",
            class: "vxe-checkbox--label",
            innerHTML: colTitle
          }) : h("span", {
            key: "0",
            class: "vxe-checkbox--label"
          }, colTitle)
        ]));
      });
      return VxeUIModalComponent ? h(VxeUIModalComponent, {
        modelValue: storeData.visible,
        title: getI18n8(isPrint ? "vxe.export.printTitle" : "vxe.export.expTitle"),
        className: "vxe-table-export-popup-wrapper",
        width: 660,
        mask: true,
        lockView: true,
        showFooter: false,
        escClosable: true,
        maskClosable: true,
        loading: reactData.loading,
        "onUpdate:modelValue"(value) {
          storeData.visible = value;
        },
        onShow: showEvent
      }, {
        default: () => {
          return h("div", {
            class: "vxe-export--panel"
          }, [
            h("table", {
              cellspacing: 0,
              cellpadding: 0,
              border: 0
            }, [
              h("tbody", [
                [
                  isPrint ? createCommentVNode() : h("tr", [
                    h("td", getI18n8("vxe.export.expName")),
                    h("td", [
                      VxeUIInputComponent ? h(VxeUIInputComponent, {
                        ref: xInputFilename,
                        modelValue: defaultOptions.filename,
                        type: "text",
                        clearable: true,
                        placeholder: getI18n8("vxe.export.expNamePlaceholder"),
                        "onUpdate:modelValue"(value) {
                          defaultOptions.filename = value;
                        }
                      }) : createCommentVNode()
                    ])
                  ]),
                  isPrint ? createCommentVNode() : h("tr", [
                    h("td", getI18n8("vxe.export.expType")),
                    h("td", [
                      VxeUISelectComponent ? h(VxeUISelectComponent, {
                        modelValue: defaultOptions.type,
                        options: storeData.typeList,
                        "onUpdate:modelValue"(value) {
                          defaultOptions.type = value;
                        }
                      }) : createCommentVNode()
                    ])
                  ]),
                  isPrint || showSheet ? h("tr", [
                    h("td", getI18n8("vxe.export.expSheetName")),
                    h("td", [
                      VxeUIInputComponent ? h(VxeUIInputComponent, {
                        ref: xInputSheetname,
                        modelValue: defaultOptions.sheetName,
                        type: "text",
                        clearable: true,
                        placeholder: getI18n8("vxe.export.expSheetNamePlaceholder"),
                        "onUpdate:modelValue"(value) {
                          defaultOptions.sheetName = value;
                        }
                      }) : createCommentVNode()
                    ])
                  ]) : createCommentVNode(),
                  h("tr", [
                    h("td", getI18n8("vxe.export.expMode")),
                    h("td", [
                      VxeUISelectComponent ? h(VxeUISelectComponent, {
                        modelValue: defaultOptions.mode,
                        options: storeData.modeList.map((item) => {
                          return {
                            value: item.value,
                            label: getI18n8(item.label)
                          };
                        }),
                        "onUpdate:modelValue"(value) {
                          defaultOptions.mode = value;
                        }
                      }) : createCommentVNode()
                    ])
                  ]),
                  h("tr", [
                    h("td", [getI18n8("vxe.export.expColumn")]),
                    h("td", [
                      h("div", {
                        class: "vxe-export--panel-column"
                      }, [
                        h("ul", {
                          class: "vxe-export--panel-column-header"
                        }, [
                          h("li", {
                            class: ["vxe-export--panel-column-option", {
                              "is--checked": isAllChecked,
                              "is--indeterminate": isAllIndeterminate
                            }],
                            title: getI18n8("vxe.table.allTitle"),
                            onClick: allColumnEvent
                          }, [
                            h("span", {
                              class: ["vxe-checkbox--icon", isAllIndeterminate ? getIcon6().TABLE_CHECKBOX_INDETERMINATE : isAllChecked ? getIcon6().TABLE_CHECKBOX_CHECKED : getIcon6().TABLE_CHECKBOX_UNCHECKED]
                            }),
                            h("span", {
                              class: "vxe-checkbox--label"
                            }, getI18n8("vxe.export.expCurrentColumn"))
                          ])
                        ]),
                        h("ul", {
                          class: "vxe-export--panel-column-body"
                        }, cols)
                      ])
                    ])
                  ]),
                  h("tr", [
                    h("td", getI18n8("vxe.export.expOpts")),
                    h("td", [
                      h("div", {
                        class: "vxe-export--panel-option-row"
                      }, [
                        VxeUICheckboxComponent ? h(VxeUICheckboxComponent, {
                          modelValue: defaultOptions.isHeader,
                          title: getI18n8("vxe.export.expHeaderTitle"),
                          content: getI18n8("vxe.export.expOptHeader"),
                          "onUpdate:modelValue"(value) {
                            defaultOptions.isHeader = value;
                          }
                        }) : createCommentVNode(),
                        VxeUICheckboxComponent ? h(VxeUICheckboxComponent, {
                          modelValue: defaultOptions.isFooter,
                          disabled: !storeData.hasFooter,
                          title: getI18n8("vxe.export.expFooterTitle"),
                          content: getI18n8("vxe.export.expOptFooter"),
                          "onUpdate:modelValue"(value) {
                            defaultOptions.isFooter = value;
                          }
                        }) : createCommentVNode(),
                        VxeUICheckboxComponent ? h(VxeUICheckboxComponent, {
                          modelValue: defaultOptions.original,
                          title: getI18n8("vxe.export.expOriginalTitle"),
                          content: getI18n8("vxe.export.expOptOriginal"),
                          "onUpdate:modelValue"(value) {
                            defaultOptions.original = value;
                          }
                        }) : createCommentVNode()
                      ]),
                      h("div", {
                        class: "vxe-export--panel-option-row"
                      }, [
                        VxeUICheckboxComponent ? h(VxeUICheckboxComponent, {
                          modelValue: isHeader && hasColgroup && supportMerge ? defaultOptions.isColgroup : false,
                          title: getI18n8("vxe.export.expColgroupTitle"),
                          disabled: !isHeader || !hasColgroup || !supportMerge,
                          content: getI18n8("vxe.export.expOptColgroup"),
                          "onUpdate:modelValue"(value) {
                            defaultOptions.isColgroup = value;
                          }
                        }) : createCommentVNode(),
                        VxeUICheckboxComponent ? h(VxeUICheckboxComponent, {
                          modelValue: hasMerge && supportMerge && checkedAll ? defaultOptions.isMerge : false,
                          title: getI18n8("vxe.export.expMergeTitle"),
                          disabled: !hasMerge || !supportMerge || !checkedAll,
                          content: getI18n8("vxe.export.expOptMerge"),
                          "onUpdate:modelValue"(value) {
                            defaultOptions.isMerge = value;
                          }
                        }) : createCommentVNode(),
                        isPrint || !VxeUICheckboxComponent ? createCommentVNode() : h(VxeUICheckboxComponent, {
                          modelValue: supportStyle ? defaultOptions.useStyle : false,
                          disabled: !supportStyle,
                          title: getI18n8("vxe.export.expUseStyleTitle"),
                          content: getI18n8("vxe.export.expOptUseStyle"),
                          "onUpdate:modelValue"(value) {
                            defaultOptions.useStyle = value;
                          }
                        }),
                        VxeUICheckboxComponent ? h(VxeUICheckboxComponent, {
                          modelValue: hasTree ? defaultOptions.isAllExpand : false,
                          disabled: !hasTree,
                          title: getI18n8("vxe.export.expAllExpandTitle"),
                          content: getI18n8("vxe.export.expOptAllExpand"),
                          "onUpdate:modelValue"(value) {
                            defaultOptions.isAllExpand = value;
                          }
                        }) : createCommentVNode()
                      ])
                    ])
                  ])
                ]
              ])
            ]),
            h("div", {
              class: "vxe-export--panel-btns"
            }, [
              VxeUIButtonComponent ? h(VxeUIButtonComponent, {
                content: getI18n8("vxe.export.expCancel"),
                onClick: cancelEvent
              }) : createCommentVNode(),
              VxeUIButtonComponent ? h(VxeUIButtonComponent, {
                ref: xButtonConfirm,
                status: "primary",
                content: getI18n8(isPrint ? "vxe.export.expPrint" : "vxe.export.expConfirm"),
                onClick: confirmEvent
              }) : createCommentVNode()
            ])
          ]);
        }
      }) : createCommentVNode();
    };
    if (true) {
      nextTick(() => {
        if (!VxeUIModalComponent) {
          errLog("vxe.error.reqComp", ["vxe-modal"]);
        }
        if (!VxeUIButtonComponent) {
          errLog("vxe.error.reqComp", ["vxe-button"]);
        }
        if (!VxeUISelectComponent) {
          errLog("vxe.error.reqComp", ["vxe-select"]);
        }
        if (!VxeUIInputComponent) {
          errLog("vxe.error.reqComp", ["vxe-input"]);
        }
        if (!VxeUICheckboxComponent) {
          errLog("vxe.error.reqComp", ["vxe-checkbox"]);
        }
      });
    }
    return renderVN;
  }
});

// node_modules/.pnpm/vxe-table@4.7.86_vue@3.5.12_typescript@5.6.3_/node_modules/vxe-table/es/table/module/menu/panel.js
init_vue_runtime_esm_bundler();
var import_xe_utils13 = __toESM(require_xe_utils());
var { getIcon: getIcon7 } = VxeUI;
var panel_default3 = defineComponent({
  name: "VxeTableMenuPanel",
  setup(props, context) {
    const xID = import_xe_utils13.default.uniqueId();
    const $xeTable = inject("$xeTable", {});
    const { reactData: tableReactData } = $xeTable;
    const refElem = ref();
    const refMaps = {
      refElem
    };
    const $xeMenuPanel = {
      xID,
      props,
      context,
      getRefMaps: () => refMaps
    };
    const renderVN = () => {
      const { ctxMenuStore } = tableReactData;
      const { computeMenuOpts } = $xeTable.getComputeMaps();
      const menuOpts = computeMenuOpts.value;
      return h(Teleport, {
        to: "body",
        disabled: false
      }, [
        h("div", {
          ref: refElem,
          class: ["vxe-table--context-menu-wrapper", menuOpts.className, {
            "is--visible": ctxMenuStore.visible
          }],
          style: ctxMenuStore.style
        }, ctxMenuStore.list.map((options, gIndex) => {
          return options.every((item) => item.visible === false) ? createCommentVNode() : h("ul", {
            class: "vxe-context-menu--option-wrapper",
            key: gIndex
          }, options.map((item, index) => {
            const hasChildMenus = item.children && item.children.some((child) => child.visible !== false);
            const prefixOpts = Object.assign({}, item.prefixConfig);
            const suffixOpts = Object.assign({}, item.suffixConfig);
            return item.visible === false ? null : h("li", {
              class: [item.className, {
                "link--disabled": item.disabled,
                "link--active": item === ctxMenuStore.selected
              }],
              key: `${gIndex}_${index}`
            }, [
              h("a", {
                class: "vxe-context-menu--link",
                onClick(evnt) {
                  $xeTable.ctxMenuLinkEvent(evnt, item);
                },
                onMouseover(evnt) {
                  $xeTable.ctxMenuMouseoverEvent(evnt, item);
                },
                onMouseout(evnt) {
                  $xeTable.ctxMenuMouseoutEvent(evnt, item);
                }
              }, [
                h("div", {
                  class: ["vxe-context-menu--link-prefix", prefixOpts.className || ""]
                }, [
                  h("i", {
                    class: prefixOpts.icon || item.prefixIcon
                  }),
                  prefixOpts.content ? h("span", {}, `${prefixOpts.content}`) : createCommentVNode()
                ]),
                h("div", {
                  class: "vxe-context-menu--link-content"
                }, getFuncText(item.name)),
                h("div", {
                  class: ["vxe-context-menu--link-suffix", suffixOpts.className || ""]
                }, [
                  h("i", {
                    class: suffixOpts.icon || item.suffixIcon || (hasChildMenus ? getIcon7().TABLE_MENU_OPTIONS : "")
                  }),
                  suffixOpts.content ? h("span", `${suffixOpts.content}`) : createCommentVNode()
                ])
              ]),
              hasChildMenus ? h("ul", {
                class: ["vxe-table--context-menu-clild-wrapper", {
                  "is--show": item === ctxMenuStore.selected && ctxMenuStore.showChild
                }]
              }, item.children.map((child, cIndex) => {
                const childPrefixOpts = Object.assign({}, child.prefixConfig);
                const childSuffixOpts = Object.assign({}, child.suffixConfig);
                return child.visible === false ? null : h("li", {
                  class: [child.className, {
                    "link--disabled": child.disabled,
                    "link--active": child === ctxMenuStore.selectChild
                  }],
                  key: `${gIndex}_${index}_${cIndex}`
                }, [
                  h("a", {
                    class: "vxe-context-menu--link",
                    onClick(evnt) {
                      $xeTable.ctxMenuLinkEvent(evnt, child);
                    },
                    onMouseover(evnt) {
                      $xeTable.ctxMenuMouseoverEvent(evnt, item, child);
                    },
                    onMouseout(evnt) {
                      $xeTable.ctxMenuMouseoutEvent(evnt, item);
                    }
                  }, [
                    h("div", {
                      class: ["vxe-context-menu--link-prefix", childPrefixOpts.className || ""]
                    }, [
                      h("i", {
                        class: childPrefixOpts.icon || child.prefixIcon
                      }),
                      childPrefixOpts.content ? h("span", `${childPrefixOpts.content}`) : createCommentVNode()
                    ]),
                    h("div", {
                      class: "vxe-context-menu--link-content"
                    }, getFuncText(child.name)),
                    h("div", {
                      class: ["vxe-context-menu--link-suffix", childSuffixOpts.className || ""]
                    }, [
                      h("i", {
                        class: childSuffixOpts.icon
                      }),
                      childSuffixOpts.content ? h("span", `${childSuffixOpts.content}`) : createCommentVNode()
                    ])
                  ])
                ]);
              })) : null
            ]);
          }));
        }))
      ]);
    };
    $xeMenuPanel.renderVN = renderVN;
    return $xeMenuPanel;
  },
  render() {
    return this.renderVN();
  }
});

// node_modules/.pnpm/vxe-table@4.7.86_vue@3.5.12_typescript@5.6.3_/node_modules/vxe-table/es/table/src/table.js
var { getConfig: getConfig3, getI18n: getI18n9, renderer: renderer5, formats: formats4, createEvent, globalResize: globalResize2, interceptor: interceptor2, hooks: hooks2, globalEvents: globalEvents2, GLOBAL_EVENT_KEYS, useFns } = VxeUI;
var isWebkit = browse["-webkit"] && !browse.edge;
var customStorageKey = "VXE_CUSTOM_STORE";
var table_default = defineComponent({
  name: "VxeTable",
  props: props_default,
  emits: emits_default,
  setup(props, context) {
    const { slots, emit } = context;
    const xID = import_xe_utils14.default.uniqueId();
    const VxeUILoadingComponent = VxeUI.getComponent("VxeLoading");
    const VxeUITooltipComponent = VxeUI.getComponent("VxeTooltip");
    const $xeTabs = inject("$xeTabs", null);
    const { computeSize } = useFns.useSize(props);
    const reactData = reactive({
      isCalcColumn: false,
      // 低性能的静态列
      staticColumns: [],
      // 渲染的列分组
      tableGroupColumn: [],
      // 可视区渲染的列
      tableColumn: [],
      // 渲染中的数据
      tableData: [],
      // 是否启用了横向 X 可视渲染方式加载
      scrollXLoad: false,
      // 是否启用了纵向 Y 可视渲染方式加载
      scrollYLoad: false,
      // 是否存在纵向滚动条
      overflowY: true,
      // 是否存在横向滚动条
      overflowX: false,
      // 纵向滚动条的宽度
      scrollbarWidth: 0,
      // 横向滚动条的高度
      scrollbarHeight: 0,
      // 最后滚动时间戳
      lastScrollTime: 0,
      // 行高
      rowHeight: 0,
      // 表格父容器的高度
      parentHeight: 0,
      // 是否使用分组表头
      isGroup: false,
      isAllOverflow: false,
      // 复选框属性，是否全选
      isAllSelected: false,
      // 复选框属性，有选中且非全选状态
      isIndeterminate: false,
      // 复选框属性，已选中的行集合
      selectCheckboxMaps: {},
      // 当前行
      currentRow: null,
      // 单选框属性，选中列
      currentColumn: null,
      // 单选框属性，选中行
      selectRadioRow: null,
      // 表尾合计数据
      footerTableData: [],
      // 展开列信息
      expandColumn: null,
      // 树节点列信息
      treeNodeColumn: null,
      hasFixedColumn: false,
      // 已展开的行集合
      rowExpandedMaps: {},
      // 懒加载中的展开行的集合
      rowExpandLazyLoadedMaps: {},
      // 已展开树节点集合
      treeExpandedMaps: {},
      // 懒加载中的树节点的集合
      treeExpandLazyLoadedMaps: {},
      // 树节点不确定状态的集合
      treeIndeterminateMaps: {},
      // 合并单元格的对象集
      mergeList: [],
      // 合并表尾数据的对象集
      mergeFooterList: [],
      // 刷新列标识，当列筛选被改变时，触发表格刷新数据
      upDataFlag: 0,
      // 刷新列标识，当列的特定属性被改变时，触发表格刷新列
      reColumnFlag: 0,
      // 已标记的对象集
      pendingRowMaps: {},
      // 已标记的行
      pendingRowList: [],
      // 初始化标识
      initStore: {
        filter: false,
        import: false,
        export: false,
        custom: false
      },
      // 自定义列相关的信息
      customStore: {
        btnEl: null,
        isAll: false,
        isIndeterminate: false,
        activeBtn: false,
        activeWrapper: false,
        visible: false,
        maxHeight: 0,
        oldSortMaps: {},
        oldFixedMaps: {},
        oldVisibleMaps: {}
      },
      customColumnList: [],
      // 当前选中的筛选列
      filterStore: {
        isAllSelected: false,
        isIndeterminate: false,
        style: null,
        options: [],
        column: null,
        multiple: false,
        visible: false,
        maxHeight: null
      },
      // 存放列相关的信息
      columnStore: {
        leftList: [],
        centerList: [],
        rightList: [],
        resizeList: [],
        pxList: [],
        pxMinList: [],
        autoMinList: [],
        scaleList: [],
        scaleMinList: [],
        autoList: [],
        remainList: []
      },
      // 存放快捷菜单的信息
      ctxMenuStore: {
        selected: null,
        visible: false,
        showChild: false,
        selectChild: null,
        list: [],
        style: null
      },
      // 存放可编辑相关信息
      editStore: {
        indexs: {
          columns: []
        },
        titles: {
          columns: []
        },
        // 选中源
        selected: {
          row: null,
          column: null
        },
        // 已复制源
        copyed: {
          cut: false,
          rows: [],
          columns: []
        },
        // 激活
        actived: {
          row: null,
          column: null
        },
        // 当前被强制聚焦单元格，只会在鼠标点击后算聚焦
        focused: {
          row: null,
          column: null
        },
        insertMaps: {},
        removeMaps: {}
      },
      // 存放 tooltip 相关信息
      tooltipStore: {
        row: null,
        column: null,
        content: null,
        visible: false,
        currOpts: {}
      },
      // 存放数据校验相关信息
      validStore: {
        visible: false
      },
      validErrorMaps: {},
      // 导入相关信息
      importStore: {
        inited: false,
        file: null,
        type: "",
        modeList: [],
        typeList: [],
        filename: "",
        visible: false
      },
      importParams: {
        mode: "",
        types: null,
        message: true
      },
      // 导出相关信息
      exportStore: {
        inited: false,
        name: "",
        modeList: [],
        typeList: [],
        columns: [],
        isPrint: false,
        hasFooter: false,
        hasMerge: false,
        hasTree: false,
        hasColgroup: false,
        visible: false
      },
      exportParams: {
        filename: "",
        sheetName: "",
        mode: "",
        type: "",
        isColgroup: false,
        isMerge: false,
        isAllExpand: false,
        useStyle: false,
        original: false,
        message: true,
        isHeader: false,
        isFooter: false
      },
      scrollVMLoading: false,
      _isResize: false,
      _isLoading: false
    });
    const internalData = {
      tZindex: 0,
      elemStore: {},
      // 存放横向 X 虚拟滚动相关的信息
      scrollXStore: {
        offsetSize: 0,
        visibleSize: 0,
        startIndex: 0,
        endIndex: 0
      },
      // 存放纵向 Y 虚拟滚动相关信息
      scrollYStore: {
        rowHeight: 0,
        offsetSize: 0,
        visibleSize: 0,
        startIndex: 0,
        endIndex: 0
      },
      // 表格宽度
      tableWidth: 0,
      // 表格高度
      tableHeight: 0,
      // 表头高度
      headerHeight: 0,
      // 表尾高度
      footerHeight: 0,
      customHeight: 0,
      customMinHeight: 0,
      customMaxHeight: 0,
      // 当前 hover 行
      hoverRow: null,
      // 最后滚动位置
      lastScrollLeft: 0,
      lastScrollTop: 0,
      // 单选框属性，已选中保留的行
      radioReserveRow: null,
      // 复选框属性，已选中保留的行集合
      checkboxReserveRowMap: {},
      // 行数据，已展开保留的行集合
      rowExpandedReserveRowMap: {},
      // 树结构数据，已展开保留的行集合
      treeExpandedReserveRowMap: {},
      // 树结构数据，不确定状态的集合
      treeIndeterminateRowMaps: {},
      // 列表完整数据、条件处理后
      tableFullData: [],
      afterFullData: [],
      afterTreeFullData: [],
      // 列表条件处理后数据集合
      afterFullRowMaps: {},
      // 树结构完整数据、条件处理后
      tableFullTreeData: [],
      tableSynchData: [],
      tableSourceData: [],
      // 收集的列配置（带分组）
      collectColumn: [],
      // 完整所有列（不带分组）
      tableFullColumn: [],
      // 渲染所有列
      visibleColumn: [],
      // 总的缓存数据集
      fullAllDataRowIdData: {},
      // 渲染中缓存数据
      sourceDataRowIdData: {},
      fullDataRowIdData: {},
      fullColumnIdData: {},
      fullColumnFieldData: {},
      // 列选取状态
      columnStatusMaps: {},
      // 行选取状态
      rowStatusMaps: {},
      inited: false,
      tooltipTimeout: null,
      initStatus: false,
      isActivated: false
    };
    let tableMethods = {};
    let tablePrivateMethods = {};
    const refElem = ref();
    const refTooltip = ref();
    const refCommTooltip = ref();
    const refValidTooltip = ref();
    const refTableMenu = ref();
    const refTableFilter = ref();
    const refTableCustom = ref();
    const refTableHeader = ref();
    const refTableBody = ref();
    const refTableFooter = ref();
    const refTableLeftHeader = ref();
    const refTableLeftBody = ref();
    const refTableLeftFooter = ref();
    const refTableRightHeader = ref();
    const refTableRightBody = ref();
    const refTableRightFooter = ref();
    const refLeftContainer = ref();
    const refRightContainer = ref();
    const refCellResizeBar = ref();
    const refEmptyPlaceholder = ref();
    const $xeGrid = inject("$xeGrid", null);
    let $xeToolbar;
    const computeTableId = computed(() => {
      const { id } = props;
      if (id) {
        if (import_xe_utils14.default.isFunction(id)) {
          return `${id({ $table: $xeTable, $grid: $xeGrid }) || ""}`;
        }
        return `${id}`;
      }
      return "";
    });
    const computeValidOpts = computed(() => {
      return Object.assign({}, import_xe_utils14.default.clone(getConfig3().table.validConfig, true), props.validConfig);
    });
    const computeSXOpts = computed(() => {
      return Object.assign({}, import_xe_utils14.default.clone(getConfig3().table.scrollX, true), props.scrollX);
    });
    const computeSYOpts = computed(() => {
      return Object.assign({}, import_xe_utils14.default.clone(getConfig3().table.scrollY, true), props.scrollY);
    });
    const computeRowHeightMaps = computed(() => {
      return {
        default: 48,
        medium: 44,
        small: 40,
        mini: 36
      };
    });
    const computeColumnOpts = computed(() => {
      return Object.assign({}, import_xe_utils14.default.clone(getConfig3().table.columnConfig, true), props.columnConfig);
    });
    const computeRowOpts = computed(() => {
      return Object.assign({}, import_xe_utils14.default.clone(getConfig3().table.rowConfig, true), props.rowConfig);
    });
    const computeResizeOpts = computed(() => {
      return Object.assign({}, import_xe_utils14.default.clone(getConfig3().table.resizeConfig, true), props.resizeConfig);
    });
    const computeResizableOpts = computed(() => {
      return Object.assign({}, import_xe_utils14.default.clone(getConfig3().table.resizableConfig, true), props.resizableConfig);
    });
    const computeSeqOpts = computed(() => {
      return Object.assign({ startIndex: 0 }, import_xe_utils14.default.clone(getConfig3().table.seqConfig, true), props.seqConfig);
    });
    const computeRadioOpts = computed(() => {
      return Object.assign({}, import_xe_utils14.default.clone(getConfig3().table.radioConfig, true), props.radioConfig);
    });
    const computeCheckboxOpts = computed(() => {
      return Object.assign({}, import_xe_utils14.default.clone(getConfig3().table.checkboxConfig, true), props.checkboxConfig);
    });
    let computeTooltipOpts = ref();
    computeTooltipOpts = computed(() => {
      return Object.assign({}, import_xe_utils14.default.clone(getConfig3().tooltip, true), import_xe_utils14.default.clone(getConfig3().table.tooltipConfig, true), props.tooltipConfig);
    });
    const computeTipConfig = computed(() => {
      const tooltipOpts = computeTooltipOpts.value;
      return Object.assign({}, tooltipOpts);
    });
    const computeValidTipOpts = computed(() => {
      const tooltipOpts = computeTooltipOpts.value;
      return Object.assign({ isArrow: false }, tooltipOpts);
    });
    const computeEditOpts = computed(() => {
      return Object.assign({}, import_xe_utils14.default.clone(getConfig3().table.editConfig, true), props.editConfig);
    });
    const computeSortOpts = computed(() => {
      return Object.assign({ orders: ["asc", "desc", null] }, import_xe_utils14.default.clone(getConfig3().table.sortConfig, true), props.sortConfig);
    });
    const computeFilterOpts = computed(() => {
      return Object.assign({}, import_xe_utils14.default.clone(getConfig3().table.filterConfig, true), props.filterConfig);
    });
    const computeMouseOpts = computed(() => {
      return Object.assign({}, import_xe_utils14.default.clone(getConfig3().table.mouseConfig, true), props.mouseConfig);
    });
    const computeAreaOpts = computed(() => {
      return Object.assign({}, import_xe_utils14.default.clone(getConfig3().table.areaConfig, true), props.areaConfig);
    });
    const computeKeyboardOpts = computed(() => {
      return Object.assign({}, import_xe_utils14.default.clone(getConfig3().table.keyboardConfig, true), props.keyboardConfig);
    });
    const computeClipOpts = computed(() => {
      return Object.assign({}, import_xe_utils14.default.clone(getConfig3().table.clipConfig, true), props.clipConfig);
    });
    const computeFNROpts = computed(() => {
      return Object.assign({}, import_xe_utils14.default.clone(getConfig3().table.fnrConfig, true), props.fnrConfig);
    });
    const computeMenuOpts = computed(() => {
      return Object.assign({}, import_xe_utils14.default.clone(getConfig3().table.menuConfig, true), props.menuConfig);
    });
    const computeHeaderMenu = computed(() => {
      const menuOpts = computeMenuOpts.value;
      const headerOpts = menuOpts.header;
      return headerOpts && headerOpts.options ? headerOpts.options : [];
    });
    const computeBodyMenu = computed(() => {
      const menuOpts = computeMenuOpts.value;
      const bodyOpts = menuOpts.body;
      return bodyOpts && bodyOpts.options ? bodyOpts.options : [];
    });
    const computeFooterMenu = computed(() => {
      const menuOpts = computeMenuOpts.value;
      const footerOpts = menuOpts.footer;
      return footerOpts && footerOpts.options ? footerOpts.options : [];
    });
    const computeIsMenu = computed(() => {
      const menuOpts = computeMenuOpts.value;
      const headerMenu = computeHeaderMenu.value;
      const bodyMenu = computeBodyMenu.value;
      const footerMenu = computeFooterMenu.value;
      return !!(props.menuConfig && isEnableConf(menuOpts) && (headerMenu.length || bodyMenu.length || footerMenu.length));
    });
    const computeMenuList = computed(() => {
      const { ctxMenuStore } = reactData;
      const rest = [];
      ctxMenuStore.list.forEach((list) => {
        list.forEach((item) => {
          rest.push(item);
        });
      });
      return rest;
    });
    const computeExportOpts = computed(() => {
      return Object.assign({}, import_xe_utils14.default.clone(getConfig3().table.exportConfig, true), props.exportConfig);
    });
    const computeImportOpts = computed(() => {
      return Object.assign({}, import_xe_utils14.default.clone(getConfig3().table.importConfig, true), props.importConfig);
    });
    const computePrintOpts = computed(() => {
      return Object.assign({}, import_xe_utils14.default.clone(getConfig3().table.printConfig, true), props.printConfig);
    });
    const computeExpandOpts = computed(() => {
      return Object.assign({}, import_xe_utils14.default.clone(getConfig3().table.expandConfig, true), props.expandConfig);
    });
    const computeTreeOpts = computed(() => {
      return Object.assign({}, import_xe_utils14.default.clone(getConfig3().table.treeConfig, true), props.treeConfig);
    });
    const computeEmptyOpts = computed(() => {
      return Object.assign({}, import_xe_utils14.default.clone(getConfig3().table.emptyRender, true), props.emptyRender);
    });
    const computeLoadingOpts = computed(() => {
      return Object.assign({}, import_xe_utils14.default.clone(getConfig3().table.loadingConfig, true), props.loadingConfig);
    });
    const computeCellOffsetWidth = computed(() => {
      return props.border ? Math.max(2, Math.ceil(reactData.scrollbarWidth / reactData.tableColumn.length)) : 1;
    });
    const computeCustomOpts = computed(() => {
      return Object.assign({}, import_xe_utils14.default.clone(getConfig3().table.customConfig, true), props.customConfig);
    });
    const computeAutoWidthColumnList = computed(() => {
      const { visibleColumn } = internalData;
      const { tableColumn } = reactData;
      return tableColumn.length || visibleColumn.length ? visibleColumn.filter((column) => column.width === "auto" || column.minWidth === "auto") : [];
    });
    const computeFixedColumnSize = computed(() => {
      const { collectColumn } = internalData;
      let fixedSize = 0;
      collectColumn.forEach((column) => {
        if (column.renderFixed) {
          fixedSize++;
        }
      });
      return fixedSize;
    });
    const computeIsMaxFixedColumn = computed(() => {
      const fixedColumnSize = computeFixedColumnSize.value;
      const columnOpts = computeColumnOpts.value;
      const { maxFixedSize } = columnOpts;
      if (maxFixedSize) {
        return fixedColumnSize >= maxFixedSize;
      }
      return false;
    });
    const computeTableBorder = computed(() => {
      const { border } = props;
      if (border === true) {
        return "full";
      }
      if (border) {
        return border;
      }
      return "default";
    });
    const computeIsAllCheckboxDisabled = computed(() => {
      const { treeConfig } = props;
      const { tableData } = reactData;
      const { tableFullData } = internalData;
      const checkboxOpts = computeCheckboxOpts.value;
      const { strict, checkMethod } = checkboxOpts;
      if (strict) {
        if (tableData.length || tableFullData.length) {
          if (checkMethod) {
            if (treeConfig) {
            }
            return tableFullData.every((row) => !checkMethod({ row }));
          }
          return false;
        }
        return true;
      }
      return false;
    });
    const refMaps = {
      refElem,
      refTooltip,
      refValidTooltip,
      refTableFilter,
      refTableCustom,
      refTableMenu,
      refTableHeader,
      refTableBody,
      refTableFooter,
      refTableLeftHeader,
      refTableLeftBody,
      refTableLeftFooter,
      refTableRightHeader,
      refTableRightBody,
      refTableRightFooter,
      refLeftContainer,
      refRightContainer,
      refCellResizeBar
    };
    const computeMaps = {
      computeSize,
      computeTableId,
      computeValidOpts,
      computeSXOpts,
      computeSYOpts,
      computeColumnOpts,
      computeRowOpts,
      computeResizeOpts,
      computeResizableOpts,
      computeSeqOpts,
      computeRadioOpts,
      computeCheckboxOpts,
      computeTooltipOpts,
      computeEditOpts,
      computeSortOpts,
      computeFilterOpts,
      computeMouseOpts,
      computeAreaOpts,
      computeKeyboardOpts,
      computeClipOpts,
      computeFNROpts,
      computeHeaderMenu,
      computeBodyMenu,
      computeFooterMenu,
      computeIsMenu,
      computeMenuOpts,
      computeExportOpts,
      computeImportOpts,
      computePrintOpts,
      computeExpandOpts,
      computeTreeOpts,
      computeEmptyOpts,
      computeLoadingOpts,
      computeCustomOpts,
      computeFixedColumnSize,
      computeIsMaxFixedColumn,
      computeIsAllCheckboxDisabled
    };
    const $xeTable = {
      xID,
      props,
      context,
      reactData,
      internalData,
      getRefMaps: () => refMaps,
      getComputeMaps: () => computeMaps,
      xegrid: $xeGrid
    };
    const eqCellValue = (row1, row2, field) => {
      const val1 = import_xe_utils14.default.get(row1, field);
      const val2 = import_xe_utils14.default.get(row2, field);
      if (eqEmptyValue(val1) && eqEmptyValue(val2)) {
        return true;
      }
      if (import_xe_utils14.default.isString(val1) || import_xe_utils14.default.isNumber(val1)) {
        return "" + val1 === "" + val2;
      }
      return import_xe_utils14.default.isEqual(val1, val2);
    };
    const getNextSortOrder = (column) => {
      const sortOpts = computeSortOpts.value;
      const { orders } = sortOpts;
      const currOrder = column.order || null;
      const oIndex = orders.indexOf(currOrder) + 1;
      return orders[oIndex < orders.length ? oIndex : 0];
    };
    const getCustomStorageMap = (id) => {
      const version3 = getConfig3().version;
      const rest = import_xe_utils14.default.toStringJSON(localStorage.getItem(customStorageKey) || "");
      const maps = rest && rest._v === version3 ? rest : { _v: version3 };
      return (id ? maps[id] : maps) || {};
    };
    const setCustomStorageMap = (id, data) => {
      const version3 = getConfig3().version;
      const maps = getCustomStorageMap();
      maps[id] = data || void 0;
      maps._v = version3;
      localStorage.setItem(customStorageKey, import_xe_utils14.default.toJSONString(maps));
    };
    const getRecoverRowMaps = (keyMaps) => {
      const { fullAllDataRowIdData } = internalData;
      const restKeys = {};
      import_xe_utils14.default.each(keyMaps, (row, rowid) => {
        if (fullAllDataRowIdData[rowid]) {
          restKeys[rowid] = row;
        }
      });
      return restKeys;
    };
    const handleReserveRow = (reserveRowMap) => {
      const { fullDataRowIdData } = internalData;
      const reserveList = [];
      import_xe_utils14.default.each(reserveRowMap, (item, rowid) => {
        if (fullDataRowIdData[rowid] && $xeTable.findRowIndexOf(reserveList, fullDataRowIdData[rowid].row) === -1) {
          reserveList.push(fullDataRowIdData[rowid].row);
        }
      });
      return reserveList;
    };
    const computeVirtualX = () => {
      const { visibleColumn } = internalData;
      const tableBody = refTableBody.value;
      const tableBodyElem = tableBody ? tableBody.$el : null;
      if (tableBodyElem) {
        const { scrollLeft, clientWidth } = tableBodyElem;
        const endWidth = scrollLeft + clientWidth;
        let toVisibleIndex = -1;
        let cWidth = 0;
        let visibleSize = 0;
        for (let colIndex = 0, colLen = visibleColumn.length; colIndex < colLen; colIndex++) {
          cWidth += visibleColumn[colIndex].renderWidth;
          if (toVisibleIndex === -1 && scrollLeft < cWidth) {
            toVisibleIndex = colIndex;
          }
          if (toVisibleIndex >= 0) {
            visibleSize++;
            if (cWidth > endWidth) {
              break;
            }
          }
        }
        return { toVisibleIndex: Math.max(0, toVisibleIndex), visibleSize: Math.max(6, visibleSize) };
      }
      return { toVisibleIndex: 0, visibleSize: 6 };
    };
    const computeVirtualY = () => {
      const tableHeader = refTableHeader.value;
      const tableBody = refTableBody.value;
      const tableBodyElem = tableBody ? tableBody.$el : null;
      const vSize = computeSize.value;
      const rowHeightMaps = computeRowHeightMaps.value;
      if (tableBodyElem) {
        const tableHeaderElem = tableHeader ? tableHeader.$el : null;
        let rowHeight = 0;
        let firstTrElem;
        firstTrElem = tableBodyElem.querySelector("tr");
        if (!firstTrElem && tableHeaderElem) {
          firstTrElem = tableHeaderElem.querySelector("tr");
        }
        if (firstTrElem) {
          rowHeight = firstTrElem.clientHeight;
        }
        if (!rowHeight) {
          rowHeight = rowHeightMaps[vSize || "default"];
        }
        const visibleSize = Math.max(8, Math.ceil(tableBodyElem.clientHeight / rowHeight) + 2);
        return { rowHeight, visibleSize };
      }
      return { rowHeight: 0, visibleSize: 8 };
    };
    const calculateMergerOffserIndex = (list, offsetItem, type) => {
      for (let mcIndex = 0, len = list.length; mcIndex < len; mcIndex++) {
        const mergeItem = list[mcIndex];
        const { startIndex, endIndex } = offsetItem;
        const mergeStartIndex = mergeItem[type];
        const mergeSpanNumber = mergeItem[type + "span"];
        const mergeEndIndex = mergeStartIndex + mergeSpanNumber;
        if (mergeStartIndex < startIndex && startIndex < mergeEndIndex) {
          offsetItem.startIndex = mergeStartIndex;
        }
        if (mergeStartIndex < endIndex && endIndex < mergeEndIndex) {
          offsetItem.endIndex = mergeEndIndex;
        }
        if (offsetItem.startIndex !== startIndex || offsetItem.endIndex !== endIndex) {
          mcIndex = -1;
        }
      }
    };
    const setMerges = (merges, mList, rowList) => {
      if (merges) {
        const { treeConfig } = props;
        const { visibleColumn } = internalData;
        if (!import_xe_utils14.default.isArray(merges)) {
          merges = [merges];
        }
        if (treeConfig && merges.length) {
          errLog("vxe.error.noTree", ["merge-cells | merge-footer-items"]);
        }
        merges.forEach((item) => {
          let { row, col, rowspan, colspan } = item;
          if (rowList && import_xe_utils14.default.isNumber(row)) {
            row = rowList[row];
          }
          if (import_xe_utils14.default.isNumber(col)) {
            col = visibleColumn[col];
          }
          if ((rowList ? row : import_xe_utils14.default.isNumber(row)) && col && (rowspan || colspan)) {
            rowspan = import_xe_utils14.default.toNumber(rowspan) || 1;
            colspan = import_xe_utils14.default.toNumber(colspan) || 1;
            if (rowspan > 1 || colspan > 1) {
              const mcIndex = import_xe_utils14.default.findIndexOf(mList, (item2) => (item2._row === row || getRowid($xeTable, item2._row) === getRowid($xeTable, row)) && (item2._col.id === col || item2._col.id === col.id));
              const mergeItem = mList[mcIndex];
              if (mergeItem) {
                mergeItem.rowspan = rowspan;
                mergeItem.colspan = colspan;
                mergeItem._rowspan = rowspan;
                mergeItem._colspan = colspan;
              } else {
                const mergeRowIndex = rowList ? $xeTable.findRowIndexOf(rowList, row) : row;
                const mergeColIndex = tableMethods.getVTColumnIndex(col);
                mList.push({
                  row: mergeRowIndex,
                  col: mergeColIndex,
                  rowspan,
                  colspan,
                  _row: row,
                  _col: col,
                  _rowspan: rowspan,
                  _colspan: colspan
                });
              }
            }
          }
        });
      }
    };
    const removeMerges = (merges, mList, rowList) => {
      const rest = [];
      if (merges) {
        const { treeConfig } = props;
        const { visibleColumn } = internalData;
        if (!import_xe_utils14.default.isArray(merges)) {
          merges = [merges];
        }
        if (treeConfig && merges.length) {
          errLog("vxe.error.noTree", ["merge-cells | merge-footer-items"]);
        }
        merges.forEach((item) => {
          let { row, col } = item;
          if (rowList && import_xe_utils14.default.isNumber(row)) {
            row = rowList[row];
          }
          if (import_xe_utils14.default.isNumber(col)) {
            col = visibleColumn[col];
          }
          const mcIndex = import_xe_utils14.default.findIndexOf(mList, (item2) => (item2._row === row || getRowid($xeTable, item2._row) === getRowid($xeTable, row)) && (item2._col.id === col || item2._col.id === col.id));
          if (mcIndex > -1) {
            const rItems = mList.splice(mcIndex, 1);
            rest.push(rItems[0]);
          }
        });
      }
      return rest;
    };
    const clearAllSort = () => {
      const { tableFullColumn } = internalData;
      tableFullColumn.forEach((column) => {
        column.order = null;
      });
    };
    const calcHeight = (key) => {
      const { parentHeight } = reactData;
      const val = props[key];
      let num = 0;
      if (val) {
        if (val === "100%" || val === "auto") {
          num = parentHeight;
        } else {
          const excludeHeight = $xeTable.getExcludeHeight();
          if (isScale(val)) {
            num = Math.floor((import_xe_utils14.default.toInteger(val) || 1) / 100 * parentHeight);
          } else {
            num = import_xe_utils14.default.toNumber(val);
          }
          num = Math.max(40, num - excludeHeight);
        }
      }
      return num;
    };
    const handleCustomRestore = (storeData) => {
      let { collectColumn } = internalData;
      const { resizableData, sortData, visibleData, fixedData } = storeData;
      let hasCustomSort = false;
      if (resizableData || sortData || visibleData || fixedData) {
        import_xe_utils14.default.eachTree(collectColumn, (column, index, items, path, parent) => {
          const colKey = column.getKey();
          if (!parent) {
            if (fixedData && fixedData[colKey]) {
              column.fixed = fixedData[colKey];
            }
            if (sortData && import_xe_utils14.default.isNumber(sortData[colKey])) {
              hasCustomSort = true;
              column.renderSortNumber = sortData[colKey];
            }
          }
          if (resizableData && import_xe_utils14.default.isNumber(resizableData[colKey])) {
            column.resizeWidth = resizableData[colKey];
          }
          if (visibleData && import_xe_utils14.default.isBoolean(visibleData[colKey])) {
            column.visible = visibleData[colKey];
          }
        });
        if (hasCustomSort) {
          collectColumn = import_xe_utils14.default.orderBy(collectColumn, "renderSortNumber");
          internalData.collectColumn = collectColumn;
          internalData.tableFullColumn = getColumnList(collectColumn);
        }
      }
    };
    const restoreCustomStorage = () => {
      const { customConfig } = props;
      const tableId = computeTableId.value;
      const customOpts = computeCustomOpts.value;
      const { storage, restoreStore } = customOpts;
      const isAllCustom = storage === true;
      const storageOpts = isAllCustom ? {} : Object.assign({}, storage || {});
      const isCustomResizable = isAllCustom || storageOpts.resizable;
      const isCustomVisible = isAllCustom || storageOpts.visible;
      const isCustomFixed = isAllCustom || storageOpts.fixed;
      const isCustomSort = isAllCustom || storageOpts.sort;
      if (customConfig && (isCustomResizable || isCustomVisible || isCustomFixed || isCustomSort)) {
        if (!tableId) {
          errLog("vxe.error.reqProp", ["id"]);
          return;
        }
        const storeData = getCustomStorageMap(tableId);
        if (restoreStore) {
          return Promise.resolve(restoreStore({ id: tableId, type: "restore", storeData })).then((storeData2) => {
            if (!storeData2) {
              return;
            }
            return handleCustomRestore(storeData2);
          }).catch((e) => e);
        } else {
          return handleCustomRestore(storeData);
        }
      }
    };
    const cacheColumnMap = () => {
      const { tableFullColumn, collectColumn } = internalData;
      const fullColumnIdData = internalData.fullColumnIdData = {};
      const fullColumnFieldData = internalData.fullColumnFieldData = {};
      const mouseOpts = computeMouseOpts.value;
      const columnOpts = computeColumnOpts.value;
      const rowOpts = computeRowOpts.value;
      const isGroup = collectColumn.some(hasChildrenList);
      let isAllOverflow = !!props.showOverflow;
      let expandColumn;
      let treeNodeColumn;
      let checkboxColumn;
      let radioColumn;
      let htmlColumn;
      let hasFixed;
      const handleFunc = (column, index, items, path, parent) => {
        const { id: colid, field, fixed, type, treeNode } = column;
        const rest = { column, colid, index, items, parent };
        if (field) {
          if (true) {
            if (fullColumnFieldData[field]) {
              warnLog("vxe.error.colRepet", ["field", field]);
            }
          }
          fullColumnFieldData[field] = rest;
        }
        if (!hasFixed && fixed) {
          hasFixed = fixed;
        }
        if (!htmlColumn && type === "html") {
          htmlColumn = column;
        }
        if (treeNode) {
          if (true) {
            if (treeNodeColumn) {
              warnLog("vxe.error.colRepet", ["tree-node", treeNode]);
            }
          }
          if (!treeNodeColumn) {
            treeNodeColumn = column;
          }
        } else if (type === "expand") {
          if (true) {
            if (expandColumn) {
              warnLog("vxe.error.colRepet", ["type", type]);
            }
          }
          if (!expandColumn) {
            expandColumn = column;
          }
        }
        if (true) {
          if (type === "checkbox") {
            if (checkboxColumn) {
              warnLog("vxe.error.colRepet", ["type", type]);
            }
            if (!checkboxColumn) {
              checkboxColumn = column;
            }
          } else if (type === "radio") {
            if (radioColumn) {
              warnLog("vxe.error.colRepet", ["type", type]);
            }
            if (!radioColumn) {
              radioColumn = column;
            }
          }
        }
        if (isAllOverflow && column.showOverflow === false) {
          isAllOverflow = false;
        }
        if (fullColumnIdData[colid]) {
          errLog("vxe.error.colRepet", ["colId", colid]);
        }
        fullColumnIdData[colid] = rest;
      };
      if (isGroup) {
        import_xe_utils14.default.eachTree(collectColumn, (column, index, items, path, parent, nodes) => {
          column.level = nodes.length;
          handleFunc(column, index, items, path, parent);
        });
      } else {
        tableFullColumn.forEach(handleFunc);
      }
      if (true) {
        if (expandColumn && mouseOpts.area) {
          errLog("vxe.error.errConflicts", ["mouse-config.area", "column.type=expand"]);
        }
      }
      if (true) {
        if (htmlColumn) {
          if (!columnOpts.useKey) {
            errLog("vxe.error.reqProp", ["column-config.useKey", "column.type=html"]);
          }
          if (!rowOpts.useKey) {
            errLog("vxe.error.reqProp", ["row-config.useKey", "column.type=html"]);
          }
        }
      }
      reactData.isGroup = isGroup;
      reactData.treeNodeColumn = treeNodeColumn;
      reactData.expandColumn = expandColumn;
      reactData.isAllOverflow = isAllOverflow;
    };
    const updateHeight = () => {
      internalData.customHeight = calcHeight("height");
      internalData.customMinHeight = calcHeight("minHeight");
      internalData.customMaxHeight = calcHeight("maxHeight");
    };
    const calcCellWidth = () => {
      const { tableData } = reactData;
      const autoWidthColumnList = computeAutoWidthColumnList.value;
      if (!tableData.length || !autoWidthColumnList.length) {
        reactData.isCalcColumn = false;
        return nextTick();
      }
      reactData.isCalcColumn = true;
      return nextTick().then(() => {
        const el = refElem.value;
        if (el) {
          autoWidthColumnList.forEach((column) => {
            const cellElList = el.querySelectorAll(`.vxe-header--column.${column.id}>.vxe-cell,.vxe-body--column.${column.id}>.vxe-cell,.vxe-footer--column.${column.id}>.vxe-cell`);
            const firstCellEl = cellElList[0];
            let paddingSize = 0;
            if (firstCellEl) {
              const cellStyle = getComputedStyle(firstCellEl);
              paddingSize = Math.floor(import_xe_utils14.default.toNumber(cellStyle.paddingLeft) + import_xe_utils14.default.toNumber(cellStyle.paddingRight)) + 2;
            }
            let colWidth = column.renderAutoWidth - paddingSize;
            import_xe_utils14.default.arrayEach(cellElList, (itemEl) => {
              const cellEl = itemEl;
              const thElem = cellEl.parentNode;
              let titleWidth = 0;
              if (`${thElem.tagName}`.toLowerCase() === "th") {
                import_xe_utils14.default.arrayEach(cellEl.children, (btnEl) => {
                  titleWidth += btnEl.offsetWidth + 1;
                });
              } else {
                const labelEl = cellEl.firstChild;
                titleWidth = labelEl.offsetWidth;
              }
              if (titleWidth) {
                colWidth = Math.max(colWidth, Math.ceil(titleWidth) + 4);
              }
            });
            column.renderAutoWidth = colWidth + paddingSize;
          });
          tablePrivateMethods.analyColumnWidth();
        }
        reactData.isCalcColumn = false;
      });
    };
    const autoCellWidth = () => {
      const tableHeader = refTableHeader.value;
      const tableBody = refTableBody.value;
      const tableFooter = refTableFooter.value;
      const bodyElem = tableBody ? tableBody.$el : null;
      const headerElem = tableHeader ? tableHeader.$el : null;
      const footerElem = tableFooter ? tableFooter.$el : null;
      if (!bodyElem) {
        return;
      }
      let tableWidth = 0;
      const minCellWidth = 40;
      const bodyWidth = bodyElem.clientWidth - 1;
      let remainWidth = bodyWidth;
      let meanWidth = remainWidth / 100;
      const { fit } = props;
      const { columnStore } = reactData;
      const { resizeList, pxMinList, autoMinList, pxList, scaleList, scaleMinList, autoList, remainList } = columnStore;
      pxMinList.forEach((column) => {
        const minWidth = import_xe_utils14.default.toInteger(column.minWidth);
        tableWidth += minWidth;
        column.renderWidth = minWidth;
      });
      autoMinList.forEach((column) => {
        const scaleWidth = Math.max(60, import_xe_utils14.default.toInteger(column.renderAutoWidth));
        tableWidth += scaleWidth;
        column.renderWidth = scaleWidth;
      });
      scaleMinList.forEach((column) => {
        const scaleWidth = Math.floor(import_xe_utils14.default.toInteger(column.minWidth) * meanWidth);
        tableWidth += scaleWidth;
        column.renderWidth = scaleWidth;
      });
      scaleList.forEach((column) => {
        const scaleWidth = Math.floor(import_xe_utils14.default.toInteger(column.width) * meanWidth);
        tableWidth += scaleWidth;
        column.renderWidth = scaleWidth;
      });
      pxList.forEach((column) => {
        const width = import_xe_utils14.default.toInteger(column.width);
        tableWidth += width;
        column.renderWidth = width;
      });
      autoList.forEach((column) => {
        const width = Math.max(60, import_xe_utils14.default.toInteger(column.renderAutoWidth));
        tableWidth += width;
        column.renderWidth = width;
      });
      resizeList.forEach((column) => {
        const width = import_xe_utils14.default.toInteger(column.resizeWidth);
        tableWidth += width;
        column.renderWidth = width;
      });
      remainWidth -= tableWidth;
      meanWidth = remainWidth > 0 ? Math.floor(remainWidth / (scaleMinList.length + pxMinList.length + autoMinList.length + remainList.length)) : 0;
      if (fit) {
        if (remainWidth > 0) {
          scaleMinList.concat(pxMinList).concat(autoMinList).forEach((column) => {
            tableWidth += meanWidth;
            column.renderWidth += meanWidth;
          });
        }
      } else {
        meanWidth = minCellWidth;
      }
      remainList.forEach((column) => {
        const width = Math.max(meanWidth, minCellWidth);
        column.renderWidth = width;
        tableWidth += width;
      });
      if (fit) {
        const dynamicList = scaleList.concat(scaleMinList).concat(pxMinList).concat(autoMinList).concat(remainList);
        let dynamicSize = dynamicList.length - 1;
        if (dynamicSize > 0) {
          let odiffer = bodyWidth - tableWidth;
          if (odiffer > 0) {
            while (odiffer > 0 && dynamicSize >= 0) {
              odiffer--;
              dynamicList[dynamicSize--].renderWidth++;
            }
            tableWidth = bodyWidth;
          }
        }
      }
      const tableHeight = bodyElem.offsetHeight;
      const overflowY = bodyElem.scrollHeight > bodyElem.clientHeight;
      let scrollbarWidth = 0;
      if (overflowY) {
        scrollbarWidth = Math.max(bodyElem.offsetWidth - bodyElem.clientWidth, 0);
      }
      reactData.scrollbarWidth = scrollbarWidth;
      reactData.overflowY = overflowY;
      internalData.tableWidth = tableWidth;
      internalData.tableHeight = tableHeight;
      let headerHeight = 0;
      if (headerElem) {
        headerHeight = headerElem.clientHeight;
        nextTick(() => {
          if (headerElem && bodyElem && headerElem.scrollLeft !== bodyElem.scrollLeft) {
            headerElem.scrollLeft = bodyElem.scrollLeft;
          }
        });
      }
      internalData.headerHeight = headerHeight;
      let overflowX = false;
      let footerHeight = 0;
      let scrollbarHeight = 0;
      if (footerElem) {
        footerHeight = footerElem.offsetHeight;
        overflowX = tableWidth > footerElem.clientWidth;
        scrollbarHeight = Math.max(footerHeight - footerElem.clientHeight, 0);
      } else {
        overflowX = tableWidth > bodyWidth;
        scrollbarHeight = Math.max(tableHeight - bodyElem.clientHeight, 0);
      }
      internalData.footerHeight = footerHeight;
      reactData.overflowX = overflowX;
      reactData.scrollbarHeight = scrollbarHeight;
      updateHeight();
      reactData.parentHeight = Math.max(internalData.headerHeight + footerHeight + 20, tablePrivateMethods.getParentHeight());
      if (overflowX) {
        tablePrivateMethods.checkScrolling();
      }
    };
    const getOrderField = (column) => {
      const { sortBy, sortType } = column;
      return (row) => {
        let cellValue;
        if (sortBy) {
          cellValue = import_xe_utils14.default.isFunction(sortBy) ? sortBy({ row, column }) : import_xe_utils14.default.get(row, sortBy);
        } else {
          cellValue = tableMethods.getCellLabel(row, column);
        }
        if (!sortType || sortType === "auto") {
          return isNaN(cellValue) ? cellValue : import_xe_utils14.default.toNumber(cellValue);
        } else if (sortType === "number") {
          return import_xe_utils14.default.toNumber(cellValue);
        } else if (sortType === "string") {
          return import_xe_utils14.default.toValueString(cellValue);
        }
        return cellValue;
      };
    };
    const updateAfterDataIndex = () => {
      const { treeConfig } = props;
      const { afterFullData, fullDataRowIdData, fullAllDataRowIdData } = internalData;
      const { afterTreeFullData } = internalData;
      const treeOpts = computeTreeOpts.value;
      const childrenField = treeOpts.children || treeOpts.childrenField;
      const fullMaps = {};
      if (treeConfig) {
        import_xe_utils14.default.eachTree(afterTreeFullData, (row, index, items, path) => {
          const rowid = getRowid($xeTable, row);
          const allrest = fullAllDataRowIdData[rowid];
          const seq = path.map((num, i) => i % 2 === 0 ? Number(num) + 1 : ".").join("");
          if (allrest) {
            allrest.seq = seq;
            allrest._index = index;
          } else {
            const rest = { row, rowid, seq, index: -1, $index: -1, _index: index, items: [], parent: null, level: 0 };
            fullAllDataRowIdData[rowid] = rest;
            fullDataRowIdData[rowid] = rest;
          }
          fullMaps[rowid] = row;
        }, { children: treeOpts.transform ? treeOpts.mapChildrenField : childrenField });
      } else {
        afterFullData.forEach((row, index) => {
          const rowid = getRowid($xeTable, row);
          const allrest = fullAllDataRowIdData[rowid];
          const seq = index + 1;
          if (allrest) {
            allrest.seq = seq;
            allrest._index = index;
          } else {
            const rest = { row, rowid, seq, index: -1, $index: -1, _index: index, items: [], parent: null, level: 0 };
            fullAllDataRowIdData[rowid] = rest;
            fullDataRowIdData[rowid] = rest;
          }
          fullMaps[rowid] = row;
        });
      }
      internalData.afterFullRowMaps = fullMaps;
    };
    const handleVirtualTreeToList = () => {
      const { treeConfig } = props;
      const { treeExpandedMaps } = reactData;
      const treeOpts = computeTreeOpts.value;
      if (treeConfig && treeOpts.transform) {
        const fullData = [];
        const expandMaps = {};
        import_xe_utils14.default.eachTree(internalData.afterTreeFullData, (row, index, items, path, parent) => {
          const rowid = getRowid($xeTable, row);
          const parentRowid = getRowid($xeTable, parent);
          if (!parent || expandMaps[parentRowid] && treeExpandedMaps[parentRowid]) {
            expandMaps[rowid] = 1;
            fullData.push(row);
          }
        }, { children: treeOpts.mapChildrenField });
        internalData.afterFullData = fullData;
        updateScrollYStatus(fullData);
        return fullData;
      }
      return internalData.afterFullData;
    };
    const updateAfterFullData = () => {
      const { treeConfig } = props;
      const { tableFullColumn, tableFullData, tableFullTreeData } = internalData;
      const filterOpts = computeFilterOpts.value;
      const sortOpts = computeSortOpts.value;
      const treeOpts = computeTreeOpts.value;
      const { transform } = treeOpts;
      const { remote: allRemoteFilter, filterMethod: allFilterMethod } = filterOpts;
      const { remote: allRemoteSort, sortMethod: allSortMethod, multiple: sortMultiple, chronological } = sortOpts;
      let tableData = [];
      let tableTree = [];
      if (!allRemoteFilter || !allRemoteSort) {
        const filterColumns = [];
        let orderColumns = [];
        tableFullColumn.forEach((column) => {
          const { field, sortable, order, filters } = column;
          if (!allRemoteFilter && filters && filters.length) {
            const valueList = [];
            const itemList = [];
            filters.forEach((item) => {
              if (item.checked) {
                itemList.push(item);
                valueList.push(item.value);
              }
            });
            if (itemList.length) {
              filterColumns.push({ column, valueList, itemList });
            }
          }
          if (!allRemoteSort && sortable && order) {
            orderColumns.push({ column, field, property: field, order, sortTime: column.sortTime });
          }
        });
        if (sortMultiple && chronological && orderColumns.length > 1) {
          orderColumns = import_xe_utils14.default.orderBy(orderColumns, "sortTime");
        }
        if (!allRemoteFilter && filterColumns.length) {
          const handleFilter = (row) => {
            return filterColumns.every(({ column, valueList, itemList }) => {
              const { filterMethod, filterRender } = column;
              const compConf = isEnableConf(filterRender) ? renderer5.get(filterRender.name) : null;
              const compFilterMethod = compConf ? compConf.tableFilterMethod || compConf.filterMethod : null;
              const tdFilterMethod = compConf ? compConf.tableFilterDefaultMethod || compConf.defaultTableFilterMethod || compConf.defaultFilterMethod : null;
              const cellValue = getCellValue(row, column);
              if (filterMethod) {
                return itemList.some((item) => filterMethod({ value: item.value, option: item, cellValue, row, column, $table: $xeTable }));
              } else if (compFilterMethod) {
                return itemList.some((item) => compFilterMethod({ value: item.value, option: item, cellValue, row, column, $table: $xeTable }));
              } else if (allFilterMethod) {
                return allFilterMethod({ options: itemList, values: valueList, cellValue, row, column });
              } else if (tdFilterMethod) {
                return itemList.some((item) => tdFilterMethod({ value: item.value, option: item, cellValue, row, column, $table: $xeTable }));
              }
              return valueList.indexOf(import_xe_utils14.default.get(row, column.field)) > -1;
            });
          };
          if (treeConfig && transform) {
            tableTree = import_xe_utils14.default.searchTree(tableFullTreeData, handleFilter, Object.assign(Object.assign({}, treeOpts), { original: true }));
            tableData = tableTree;
          } else {
            tableData = treeConfig ? tableFullTreeData.filter(handleFilter) : tableFullData.filter(handleFilter);
            tableTree = tableData;
          }
        } else {
          if (treeConfig && transform) {
            tableTree = import_xe_utils14.default.searchTree(tableFullTreeData, () => true, Object.assign(Object.assign({}, treeOpts), { original: true }));
            tableData = tableTree;
          } else {
            tableData = treeConfig ? tableFullTreeData.slice(0) : tableFullData.slice(0);
            tableTree = tableData;
          }
        }
        if (!allRemoteSort && orderColumns.length) {
          if (treeConfig && transform) {
            if (allSortMethod) {
              const sortRests = allSortMethod({ data: tableTree, sortList: orderColumns, $table: $xeTable });
              tableTree = import_xe_utils14.default.isArray(sortRests) ? sortRests : tableTree;
            } else {
              tableTree = import_xe_utils14.default.orderBy(tableTree, orderColumns.map(({ column, order }) => [getOrderField(column), order]));
            }
            tableData = tableTree;
          } else {
            if (allSortMethod) {
              const sortRests = allSortMethod({ data: tableData, sortList: orderColumns, $table: $xeTable });
              tableData = import_xe_utils14.default.isArray(sortRests) ? sortRests : tableData;
            } else {
              tableData = import_xe_utils14.default.orderBy(tableData, orderColumns.map(({ column, order }) => [getOrderField(column), order]));
            }
            tableTree = tableData;
          }
        }
      } else {
        if (treeConfig && transform) {
          tableTree = import_xe_utils14.default.searchTree(tableFullTreeData, () => true, Object.assign(Object.assign({}, treeOpts), { original: true }));
          tableData = tableTree;
        } else {
          tableData = treeConfig ? tableFullTreeData.slice(0) : tableFullData.slice(0);
          tableTree = tableData;
        }
      }
      internalData.afterFullData = tableData;
      internalData.afterTreeFullData = tableTree;
      updateAfterDataIndex();
    };
    const updateStyle = () => {
      const { border, showFooter, showOverflow: allColumnOverflow, showHeaderOverflow: allColumnHeaderOverflow, showFooterOverflow: allColumnFooterOverflow, mouseConfig, spanMethod, footerSpanMethod, keyboardConfig } = props;
      const { isGroup, currentRow, tableColumn, scrollXLoad, scrollYLoad, scrollbarWidth, scrollbarHeight, columnStore, editStore, mergeList, mergeFooterList, isAllOverflow } = reactData;
      let { visibleColumn, fullColumnIdData, tableHeight, tableWidth, headerHeight, footerHeight, elemStore, customHeight, customMinHeight, customMaxHeight } = internalData;
      const containerList = ["main", "left", "right"];
      const emptyPlaceholderElem = refEmptyPlaceholder.value;
      const cellOffsetWidth = computeCellOffsetWidth.value;
      const mouseOpts = computeMouseOpts.value;
      const keyboardOpts = computeKeyboardOpts.value;
      const bodyWrapperRef = elemStore["main-body-wrapper"];
      const bodyWrapperElem = bodyWrapperRef ? bodyWrapperRef.value : null;
      if (emptyPlaceholderElem) {
        emptyPlaceholderElem.style.top = `${headerHeight}px`;
        emptyPlaceholderElem.style.height = bodyWrapperElem ? `${bodyWrapperElem.offsetHeight - scrollbarHeight}px` : "";
      }
      if (customHeight > 0) {
        if (showFooter) {
          customHeight += scrollbarHeight;
        }
      }
      containerList.forEach((name, index) => {
        const fixedType = index > 0 ? name : "";
        const layoutList = ["header", "body", "footer"];
        const isFixedLeft = fixedType === "left";
        let fixedColumn = [];
        let fixedWrapperElem;
        if (fixedType) {
          fixedColumn = isFixedLeft ? columnStore.leftList : columnStore.rightList;
          fixedWrapperElem = isFixedLeft ? refLeftContainer.value : refRightContainer.value;
        }
        layoutList.forEach((layout) => {
          const wrapperRef = elemStore[`${name}-${layout}-wrapper`];
          const wrapperElem = wrapperRef ? wrapperRef.value : null;
          const tableRef = elemStore[`${name}-${layout}-table`];
          const tableElem = tableRef ? tableRef.value : null;
          if (layout === "header") {
            let tWidth = tableWidth;
            let renderColumnList = tableColumn;
            if (isGroup) {
              renderColumnList = visibleColumn;
            } else {
              if (fixedType) {
                if (scrollXLoad || allColumnHeaderOverflow) {
                  renderColumnList = fixedColumn;
                }
              }
            }
            tWidth = renderColumnList.reduce((previous, column) => previous + column.renderWidth, 0);
            if (tableElem) {
              tableElem.style.width = tWidth ? `${tWidth + scrollbarWidth}px` : "";
            }
            const repairRef = elemStore[`${name}-${layout}-repair`];
            const repairElem = repairRef ? repairRef.value : null;
            if (repairElem) {
              repairElem.style.width = `${tableWidth}px`;
            }
            const listRef = elemStore[`${name}-${layout}-list`];
            const listElem = listRef ? listRef.value : null;
            if (isGroup && listElem) {
              import_xe_utils14.default.arrayEach(listElem.querySelectorAll(".col--group"), (thElem) => {
                const colNode = tableMethods.getColumnNode(thElem);
                if (colNode) {
                  const column = colNode.item;
                  const { showHeaderOverflow } = column;
                  const cellOverflow = import_xe_utils14.default.isBoolean(showHeaderOverflow) ? showHeaderOverflow : allColumnHeaderOverflow;
                  const showEllipsis = cellOverflow === "ellipsis";
                  const showTitle = cellOverflow === "title";
                  const showTooltip = cellOverflow === true || cellOverflow === "tooltip";
                  const hasEllipsis = showTitle || showTooltip || showEllipsis;
                  let childWidth = 0;
                  let countChild = 0;
                  if (hasEllipsis) {
                    import_xe_utils14.default.eachTree(column.children, (item) => {
                      if (!item.children || !column.children.length) {
                        countChild++;
                      }
                      childWidth += item.renderWidth;
                    }, { children: "children" });
                  }
                  thElem.style.width = hasEllipsis ? `${childWidth - countChild - (border ? 2 : 0)}px` : "";
                }
              });
            }
          } else if (layout === "body") {
            const emptyBlockRef = elemStore[`${name}-${layout}-emptyBlock`];
            const emptyBlockElem = emptyBlockRef ? emptyBlockRef.value : null;
            if (isNodeElement(wrapperElem)) {
              let bodyMaxHeight = 0;
              const bodyMinHeight = customMinHeight - headerHeight - footerHeight;
              if (customMaxHeight) {
                bodyMaxHeight = customMaxHeight - headerHeight - footerHeight;
                if (fixedType) {
                  bodyMaxHeight -= showFooter ? 0 : scrollbarHeight;
                }
                bodyMaxHeight = Math.max(bodyMinHeight, bodyMaxHeight);
                wrapperElem.style.maxHeight = `${bodyMaxHeight}px`;
              }
              if (customHeight) {
                let bodyHeight = customHeight - headerHeight - footerHeight;
                if (fixedType) {
                  bodyHeight -= showFooter ? 0 : scrollbarHeight;
                }
                if (bodyMaxHeight) {
                  bodyHeight = Math.min(bodyMaxHeight, bodyHeight);
                }
                wrapperElem.style.height = `${Math.max(bodyMinHeight, bodyHeight)}px`;
              } else {
                wrapperElem.style.height = "";
              }
              wrapperElem.style.minHeight = `${bodyMinHeight}px`;
            }
            if (fixedWrapperElem) {
              if (isNodeElement(wrapperElem)) {
                wrapperElem.style.top = `${headerHeight}px`;
              }
              fixedWrapperElem.style.height = `${(customHeight > 0 ? customHeight - headerHeight - footerHeight : tableHeight) + headerHeight + footerHeight - scrollbarHeight * (showFooter ? 2 : 1)}px`;
              fixedWrapperElem.style.width = `${fixedColumn.reduce((previous, column) => previous + column.renderWidth, isFixedLeft ? 0 : scrollbarWidth)}px`;
            }
            let tWidth = tableWidth;
            let renderColumnList = tableColumn;
            if (fixedType) {
              if (!reactData.expandColumn && (scrollYLoad || (allColumnOverflow ? isAllOverflow : allColumnOverflow))) {
                if (!mergeList.length && !spanMethod && !(keyboardConfig && keyboardOpts.isMerge)) {
                  renderColumnList = fixedColumn;
                } else {
                  renderColumnList = visibleColumn;
                }
              } else {
                renderColumnList = visibleColumn;
              }
            }
            tWidth = renderColumnList.reduce((previous, column) => previous + column.renderWidth, 0);
            if (tableElem) {
              tableElem.style.width = tWidth ? `${tWidth}px` : "";
              tableElem.style.paddingRight = scrollbarWidth && fixedType && (browse["-moz"] || browse.safari) ? `${scrollbarWidth}px` : "";
            }
            if (emptyBlockElem) {
              emptyBlockElem.style.width = tWidth ? `${tWidth}px` : "";
            }
          } else if (layout === "footer") {
            let tWidth = tableWidth;
            let renderColumnList = tableColumn;
            if (fixedType) {
              if (!reactData.expandColumn && (scrollXLoad || allColumnFooterOverflow)) {
                if (!mergeFooterList.length || !footerSpanMethod) {
                  renderColumnList = fixedColumn;
                } else {
                  renderColumnList = visibleColumn;
                }
              } else {
                renderColumnList = visibleColumn;
              }
            }
            tWidth = renderColumnList.reduce((previous, column) => previous + column.renderWidth, 0);
            if (isNodeElement(wrapperElem)) {
              if (fixedWrapperElem) {
                wrapperElem.style.top = `${customHeight > 0 ? customHeight - footerHeight : tableHeight + headerHeight}px`;
              }
              wrapperElem.style.marginTop = `${-Math.max(1, scrollbarHeight)}px`;
            }
            if (tableElem) {
              tableElem.style.width = tWidth ? `${tWidth + scrollbarWidth}px` : "";
            }
          }
          const colgroupRef = elemStore[`${name}-${layout}-colgroup`];
          const colgroupElem = colgroupRef ? colgroupRef.value : null;
          if (colgroupElem) {
            import_xe_utils14.default.arrayEach(colgroupElem.children, (colElem) => {
              const colid = colElem.getAttribute("name");
              if (colid === "col_gutter") {
                colElem.style.width = `${scrollbarWidth}px`;
              }
              if (fullColumnIdData[colid]) {
                const column = fullColumnIdData[colid].column;
                const { showHeaderOverflow, showFooterOverflow, showOverflow } = column;
                let cellOverflow;
                colElem.style.width = `${column.renderWidth}px`;
                if (layout === "header") {
                  cellOverflow = import_xe_utils14.default.isUndefined(showHeaderOverflow) || import_xe_utils14.default.isNull(showHeaderOverflow) ? allColumnHeaderOverflow : showHeaderOverflow;
                } else if (layout === "footer") {
                  cellOverflow = import_xe_utils14.default.isUndefined(showFooterOverflow) || import_xe_utils14.default.isNull(showFooterOverflow) ? allColumnFooterOverflow : showFooterOverflow;
                } else {
                  cellOverflow = import_xe_utils14.default.isUndefined(showOverflow) || import_xe_utils14.default.isNull(showOverflow) ? allColumnOverflow : showOverflow;
                }
                const showEllipsis = cellOverflow === "ellipsis";
                const showTitle = cellOverflow === "title";
                const showTooltip = cellOverflow === true || cellOverflow === "tooltip";
                let hasEllipsis = showTitle || showTooltip || showEllipsis;
                const listRef = elemStore[`${name}-${layout}-list`];
                const listElem = listRef ? listRef.value : null;
                if (scrollYLoad && !hasEllipsis) {
                  hasEllipsis = true;
                }
                if (listElem) {
                  import_xe_utils14.default.arrayEach(listElem.querySelectorAll(`.${column.id}`), (elem) => {
                    const colspan = parseInt(elem.getAttribute("colspan") || 1);
                    const cellElem = elem.querySelector(".vxe-cell");
                    let colWidth = column.renderWidth;
                    if (cellElem) {
                      if (colspan > 1) {
                        const columnIndex = tableMethods.getColumnIndex(column);
                        for (let index2 = 1; index2 < colspan; index2++) {
                          const nextColumn = tableMethods.getColumns(columnIndex + index2);
                          if (nextColumn) {
                            colWidth += nextColumn.renderWidth;
                          }
                        }
                      }
                      cellElem.style.width = hasEllipsis ? `${colWidth - cellOffsetWidth * colspan}px` : "";
                    }
                  });
                }
              }
            });
          }
        });
      });
      if (currentRow) {
        tableMethods.setCurrentRow(currentRow);
      }
      if (mouseConfig && mouseOpts.selected && editStore.selected.row && editStore.selected.column) {
        $xeTable.addCellSelectedClass();
      }
      return nextTick();
    };
    const checkValidate = (type) => {
      if ($xeTable.triggerValidate) {
        return $xeTable.triggerValidate(type);
      }
      return nextTick();
    };
    const handleChangeCell = (evnt, params) => {
      checkValidate("blur").catch((e) => e).then(() => {
        $xeTable.handleEdit(params, evnt).then(() => checkValidate("change")).catch((e) => e);
      });
    };
    const handleDefaultSort = () => {
      const { sortConfig } = props;
      if (sortConfig) {
        const sortOpts = computeSortOpts.value;
        let { defaultSort } = sortOpts;
        if (defaultSort) {
          if (!import_xe_utils14.default.isArray(defaultSort)) {
            defaultSort = [defaultSort];
          }
          if (defaultSort.length) {
            (sortConfig.multiple ? defaultSort : defaultSort.slice(0, 1)).forEach((item, index) => {
              const { field, order } = item;
              if (field && order) {
                const column = tableMethods.getColumnByField(field);
                if (column && column.sortable) {
                  column.order = order;
                  column.sortTime = Date.now() + index;
                }
              }
            });
            if (!sortOpts.remote) {
              tablePrivateMethods.handleTableData(true).then(updateStyle);
            }
          }
        }
      }
    };
    const handleDefaultSelectionChecked = () => {
      const { checkboxConfig } = props;
      if (checkboxConfig) {
        const { fullDataRowIdData } = internalData;
        const checkboxOpts = computeCheckboxOpts.value;
        const { checkAll, checkRowKeys } = checkboxOpts;
        if (checkAll) {
          handleCheckedAllCheckboxRow(true, true);
        } else if (checkRowKeys) {
          const defSelection = [];
          checkRowKeys.forEach((rowid) => {
            if (fullDataRowIdData[rowid]) {
              defSelection.push(fullDataRowIdData[rowid].row);
            }
          });
          handleCheckedCheckboxRow(defSelection, true, true);
        }
      }
    };
    const handleDefaultRadioChecked = () => {
      const { radioConfig } = props;
      if (radioConfig) {
        const { fullDataRowIdData } = internalData;
        const radioOpts = computeRadioOpts.value;
        const { checkRowKey: rowid, reserve } = radioOpts;
        if (rowid) {
          if (fullDataRowIdData[rowid]) {
            handleCheckedRadioRow(fullDataRowIdData[rowid].row, true);
          }
          if (reserve) {
            const rowkey = getRowkey($xeTable);
            internalData.radioReserveRow = { [rowkey]: rowid };
          }
        }
      }
    };
    const handleDefaultRowExpand = () => {
      const { expandConfig } = props;
      if (expandConfig) {
        const { fullDataRowIdData } = internalData;
        const expandOpts = computeExpandOpts.value;
        const { expandAll, expandRowKeys } = expandOpts;
        if (expandAll) {
          tableMethods.setAllRowExpand(true);
        } else if (expandRowKeys) {
          const defExpandeds = [];
          expandRowKeys.forEach((rowid) => {
            if (fullDataRowIdData[rowid]) {
              defExpandeds.push(fullDataRowIdData[rowid].row);
            }
          });
          tableMethods.setRowExpand(defExpandeds, true);
        }
      }
    };
    const handleRadioReserveRow = (row) => {
      const radioOpts = computeRadioOpts.value;
      if (radioOpts.reserve) {
        internalData.radioReserveRow = row;
      }
    };
    const handleCheckboxReserveRow = (row, checked) => {
      const { checkboxReserveRowMap } = internalData;
      const checkboxOpts = computeCheckboxOpts.value;
      if (checkboxOpts.reserve) {
        const rowid = getRowid($xeTable, row);
        if (checked) {
          checkboxReserveRowMap[rowid] = row;
        } else if (checkboxReserveRowMap[rowid]) {
          delete checkboxReserveRowMap[rowid];
        }
      }
    };
    const handleCheckedRadioRow = (row, isForce) => {
      const radioOpts = computeRadioOpts.value;
      const { checkMethod } = radioOpts;
      if (row && (isForce || (!checkMethod || checkMethod({ row })))) {
        reactData.selectRadioRow = row;
        handleRadioReserveRow(row);
      }
      return nextTick();
    };
    const handleCheckedCheckboxRow = (rows, value, isForce) => {
      if (rows && !import_xe_utils14.default.isArray(rows)) {
        rows = [rows];
      }
      tablePrivateMethods.handleBatchSelectRows(rows, !!value, isForce);
      tablePrivateMethods.checkSelectionStatus();
      return nextTick();
    };
    const handleCheckedAllCheckboxRow = (value, isForce) => {
      const { treeConfig } = props;
      const { selectCheckboxMaps } = reactData;
      const { afterFullData, checkboxReserveRowMap } = internalData;
      const treeOpts = computeTreeOpts.value;
      const childrenField = treeOpts.children || treeOpts.childrenField;
      const checkboxOpts = computeCheckboxOpts.value;
      const { checkField, reserve, checkStrictly, checkMethod } = checkboxOpts;
      const indeterminateField = checkboxOpts.indeterminateField || checkboxOpts.halfField;
      const selectRowMaps = {};
      if (checkStrictly) {
        reactData.isAllSelected = value;
      } else {
        if (checkField) {
          const checkValFn = (row) => {
            if (isForce || (!checkMethod || checkMethod({ row }))) {
              if (value) {
                selectRowMaps[getRowid($xeTable, row)] = row;
              }
              import_xe_utils14.default.set(row, checkField, value);
            }
            if (treeConfig && indeterminateField) {
              import_xe_utils14.default.set(row, indeterminateField, false);
            }
          };
          if (treeConfig) {
            import_xe_utils14.default.eachTree(afterFullData, checkValFn, { children: childrenField });
          } else {
            afterFullData.forEach(checkValFn);
          }
        } else {
          if (treeConfig) {
            if (value) {
              import_xe_utils14.default.eachTree(afterFullData, (row) => {
                if (isForce || (!checkMethod || checkMethod({ row }))) {
                  selectRowMaps[getRowid($xeTable, row)] = row;
                }
              }, { children: childrenField });
            } else {
              if (!isForce && checkMethod) {
                import_xe_utils14.default.eachTree(afterFullData, (row) => {
                  const rowid = getRowid($xeTable, row);
                  if (checkMethod({ row }) ? 0 : selectCheckboxMaps[rowid]) {
                    selectRowMaps[rowid] = row;
                  }
                }, { children: childrenField });
              }
            }
          } else {
            if (value) {
              if (!isForce && checkMethod) {
                afterFullData.forEach((row) => {
                  const rowid = getRowid($xeTable, row);
                  if (selectCheckboxMaps[rowid] || checkMethod({ row })) {
                    selectRowMaps[rowid] = row;
                  }
                });
              } else {
                afterFullData.forEach((row) => {
                  selectRowMaps[getRowid($xeTable, row)] = row;
                });
              }
            } else {
              if (!isForce && checkMethod) {
                afterFullData.forEach((row) => {
                  const rowid = getRowid($xeTable, row);
                  if (checkMethod({ row }) ? 0 : selectCheckboxMaps[rowid]) {
                    selectRowMaps[rowid] = row;
                  }
                });
              }
            }
          }
        }
        if (reserve) {
          if (value) {
            import_xe_utils14.default.each(selectRowMaps, (row, rowid) => {
              checkboxReserveRowMap[rowid] = row;
            });
          } else {
            afterFullData.forEach((row) => handleCheckboxReserveRow(row, false));
          }
        }
        reactData.selectCheckboxMaps = checkField ? {} : selectRowMaps;
      }
      reactData.treeIndeterminateMaps = {};
      internalData.treeIndeterminateRowMaps = {};
      tablePrivateMethods.checkSelectionStatus();
      return nextTick();
    };
    const handleReserveStatus = () => {
      const { treeConfig } = props;
      const { expandColumn, currentRow, selectCheckboxMaps, selectRadioRow, rowExpandedMaps, treeExpandedMaps } = reactData;
      const { fullDataRowIdData, fullAllDataRowIdData, radioReserveRow } = internalData;
      const expandOpts = computeExpandOpts.value;
      const treeOpts = computeTreeOpts.value;
      const radioOpts = computeRadioOpts.value;
      const checkboxOpts = computeCheckboxOpts.value;
      if (selectRadioRow && !fullAllDataRowIdData[getRowid($xeTable, selectRadioRow)]) {
        reactData.selectRadioRow = null;
      }
      if (radioOpts.reserve && radioReserveRow) {
        const rowid = getRowid($xeTable, radioReserveRow);
        if (fullDataRowIdData[rowid]) {
          handleCheckedRadioRow(fullDataRowIdData[rowid].row, true);
        }
      }
      reactData.selectCheckboxMaps = getRecoverRowMaps(selectCheckboxMaps);
      if (checkboxOpts.reserve) {
        handleCheckedCheckboxRow(handleReserveRow(internalData.checkboxReserveRowMap), true, true);
      }
      if (currentRow && !fullAllDataRowIdData[getRowid($xeTable, currentRow)]) {
        reactData.currentRow = null;
      }
      reactData.rowExpandedMaps = expandColumn ? getRecoverRowMaps(rowExpandedMaps) : {};
      if (expandColumn && expandOpts.reserve) {
        tableMethods.setRowExpand(handleReserveRow(internalData.rowExpandedReserveRowMap), true);
      }
      reactData.treeExpandedMaps = treeConfig ? getRecoverRowMaps(treeExpandedMaps) : {};
      if (treeConfig && treeOpts.reserve) {
        tableMethods.setTreeExpand(handleReserveRow(internalData.treeExpandedReserveRowMap), true);
      }
    };
    const handleDefaultTreeExpand = () => {
      const { treeConfig } = props;
      if (treeConfig) {
        const { tableFullData } = internalData;
        const treeOpts = computeTreeOpts.value;
        const { expandAll, expandRowKeys } = treeOpts;
        const childrenField = treeOpts.children || treeOpts.childrenField;
        if (expandAll) {
          tableMethods.setAllTreeExpand(true);
        } else if (expandRowKeys) {
          const defExpandeds = [];
          const rowkey = getRowkey($xeTable);
          expandRowKeys.forEach((rowid) => {
            const matchObj = import_xe_utils14.default.findTree(tableFullData, (item) => rowid === import_xe_utils14.default.get(item, rowkey), { children: childrenField });
            if (matchObj) {
              defExpandeds.push(matchObj.item);
            }
          });
          tableMethods.setTreeExpand(defExpandeds, true);
        }
      }
    };
    const handleAsyncTreeExpandChilds = (row) => {
      const treeOpts = computeTreeOpts.value;
      const checkboxOpts = computeCheckboxOpts.value;
      const { transform, loadMethod } = treeOpts;
      const { checkStrictly } = checkboxOpts;
      return new Promise((resolve) => {
        if (loadMethod) {
          const { treeExpandLazyLoadedMaps } = reactData;
          const { fullAllDataRowIdData } = internalData;
          const rowid = getRowid($xeTable, row);
          const rest = fullAllDataRowIdData[rowid];
          treeExpandLazyLoadedMaps[rowid] = row;
          Promise.resolve(loadMethod({ $table: $xeTable, row })).then((childRecords) => {
            rest.treeLoaded = true;
            if (treeExpandLazyLoadedMaps[rowid]) {
              delete treeExpandLazyLoadedMaps[rowid];
            }
            if (!import_xe_utils14.default.isArray(childRecords)) {
              childRecords = [];
            }
            if (childRecords) {
              return tableMethods.loadTreeChildren(row, childRecords).then((childRows) => {
                const { treeExpandedMaps } = reactData;
                if (childRows.length && !treeExpandedMaps[rowid]) {
                  treeExpandedMaps[rowid] = row;
                }
                if (!checkStrictly && tableMethods.isCheckedByCheckboxRow(row)) {
                  handleCheckedCheckboxRow(childRows, true);
                }
                return nextTick().then(() => {
                  if (transform) {
                    return tablePrivateMethods.handleTableData();
                  }
                });
              });
            }
          }).catch(() => {
            const { treeExpandLazyLoadedMaps: treeExpandLazyLoadedMaps2 } = reactData;
            rest.treeLoaded = false;
            if (treeExpandLazyLoadedMaps2[rowid]) {
              delete treeExpandLazyLoadedMaps2[rowid];
            }
          }).finally(() => {
            nextTick().then(() => tableMethods.recalculate()).then(() => resolve());
          });
        } else {
          resolve();
        }
      });
    };
    const handleTreeExpandReserve = (row, expanded) => {
      const { treeExpandedReserveRowMap } = internalData;
      const treeOpts = computeTreeOpts.value;
      if (treeOpts.reserve) {
        const rowid = getRowid($xeTable, row);
        if (expanded) {
          treeExpandedReserveRowMap[rowid] = row;
        } else if (treeExpandedReserveRowMap[rowid]) {
          delete treeExpandedReserveRowMap[rowid];
        }
      }
    };
    const handleAsyncRowExpand = (row) => {
      return new Promise((resolve) => {
        const expandOpts = computeExpandOpts.value;
        const { loadMethod } = expandOpts;
        if (loadMethod) {
          const { fullAllDataRowIdData } = internalData;
          const { rowExpandLazyLoadedMaps } = reactData;
          const rowid = getRowid($xeTable, row);
          const rest = fullAllDataRowIdData[rowid];
          rowExpandLazyLoadedMaps[rowid] = row;
          loadMethod({ $table: $xeTable, row, rowIndex: tableMethods.getRowIndex(row), $rowIndex: tableMethods.getVMRowIndex(row) }).then(() => {
            const { rowExpandedMaps } = reactData;
            rest.expandLoaded = true;
            rowExpandedMaps[rowid] = row;
          }).catch(() => {
            rest.expandLoaded = false;
          }).finally(() => {
            const { rowExpandLazyLoadedMaps: rowExpandLazyLoadedMaps2 } = reactData;
            if (rowExpandLazyLoadedMaps2[rowid]) {
              delete rowExpandLazyLoadedMaps2[rowid];
            }
            nextTick().then(() => tableMethods.recalculate()).then(() => resolve());
          });
        } else {
          resolve();
        }
      });
    };
    const handleRowExpandReserve = (row, expanded) => {
      const { rowExpandedReserveRowMap } = internalData;
      const expandOpts = computeExpandOpts.value;
      if (expandOpts.reserve) {
        const rowid = getRowid($xeTable, row);
        if (expanded) {
          rowExpandedReserveRowMap[rowid] = row;
        } else if (rowExpandedReserveRowMap[rowid]) {
          delete rowExpandedReserveRowMap[rowid];
        }
      }
    };
    const handleDefaultMergeCells = () => {
      const { mergeCells } = props;
      if (mergeCells) {
        tableMethods.setMergeCells(mergeCells);
      }
    };
    const handleDefaultMergeFooterItems = () => {
      const { mergeFooterItems } = props;
      if (mergeFooterItems) {
        tableMethods.setMergeFooterItems(mergeFooterItems);
      }
    };
    const computeScrollLoad = () => {
      return nextTick().then(() => {
        const { scrollXLoad, scrollYLoad } = reactData;
        const { scrollXStore, scrollYStore } = internalData;
        const sYOpts = computeSYOpts.value;
        const sXOpts = computeSXOpts.value;
        if (scrollXLoad) {
          const { visibleSize: visibleXSize } = computeVirtualX();
          const offsetXSize = sXOpts.oSize ? import_xe_utils14.default.toNumber(sXOpts.oSize) : browse.edge ? 5 : 0;
          scrollXStore.offsetSize = offsetXSize;
          scrollXStore.visibleSize = visibleXSize;
          scrollXStore.endIndex = Math.max(scrollXStore.startIndex + scrollXStore.visibleSize + offsetXSize, scrollXStore.endIndex);
          tablePrivateMethods.updateScrollXData();
        } else {
          tablePrivateMethods.updateScrollXSpace();
        }
        const { rowHeight, visibleSize: visibleYSize } = computeVirtualY();
        scrollYStore.rowHeight = rowHeight;
        if (scrollYLoad) {
          const offsetYSize = sYOpts.oSize ? import_xe_utils14.default.toNumber(sYOpts.oSize) : browse.edge ? 10 : 0;
          scrollYStore.offsetSize = offsetYSize;
          scrollYStore.visibleSize = visibleYSize;
          scrollYStore.endIndex = Math.max(scrollYStore.startIndex + visibleYSize + offsetYSize, scrollYStore.endIndex);
          tablePrivateMethods.updateScrollYData();
        } else {
          tablePrivateMethods.updateScrollYSpace();
        }
        reactData.rowHeight = rowHeight;
        nextTick(updateStyle);
      });
    };
    const loadTableData = (datas) => {
      const { keepSource, treeConfig } = props;
      const { editStore, scrollYLoad: oldScrollYLoad } = reactData;
      const { scrollYStore, scrollXStore, lastScrollLeft, lastScrollTop } = internalData;
      const treeOpts = computeTreeOpts.value;
      const { transform } = treeOpts;
      const childrenField = treeOpts.children || treeOpts.childrenField;
      let treeData = [];
      let fullData = reactive(datas ? datas.slice(0) : []);
      if (treeConfig) {
        if (transform) {
          if (true) {
            if (!treeOpts.rowField) {
              errLog("vxe.error.reqProp", ["tree-config.rowField"]);
            }
            if (!treeOpts.parentField) {
              errLog("vxe.error.reqProp", ["tree-config.parentField"]);
            }
            if (!childrenField) {
              errLog("vxe.error.reqProp", ["tree-config.childrenField"]);
            }
            if (!treeOpts.mapChildrenField) {
              errLog("vxe.error.reqProp", ["tree-config.mapChildrenField"]);
            }
            if (childrenField === treeOpts.mapChildrenField) {
              errLog("vxe.error.errConflicts", ["tree-config.childrenField", "tree-config.mapChildrenField"]);
            }
          }
          treeData = import_xe_utils14.default.toArrayTree(fullData, {
            key: treeOpts.rowField,
            parentKey: treeOpts.parentField,
            children: childrenField,
            mapChildren: treeOpts.mapChildrenField
          });
          fullData = treeData.slice(0);
        } else {
          treeData = fullData.slice(0);
        }
      }
      scrollYStore.startIndex = 0;
      scrollYStore.endIndex = 1;
      scrollXStore.startIndex = 0;
      scrollXStore.endIndex = 1;
      reactData.scrollVMLoading = false;
      editStore.insertMaps = {};
      editStore.removeMaps = {};
      const sYLoad = updateScrollYStatus(fullData);
      reactData.scrollYLoad = sYLoad;
      internalData.tableFullData = fullData;
      internalData.tableFullTreeData = treeData;
      tablePrivateMethods.cacheRowMap(true);
      internalData.tableSynchData = datas;
      if (keepSource) {
        tablePrivateMethods.cacheSourceMap(fullData);
      }
      if (true) {
        if (sYLoad) {
          if (!(props.height || props.maxHeight)) {
            errLog("vxe.error.reqProp", ["table.height | table.max-height | table.scroll-y={enabled: false}"]);
          }
          if (!props.showOverflow) {
            warnLog("vxe.error.reqProp", ["table.show-overflow"]);
          }
          if (props.spanMethod) {
            warnLog("vxe.error.scrollErrProp", ["table.span-method"]);
          }
        }
      }
      if ($xeTable.clearCellAreas && props.mouseConfig) {
        $xeTable.clearCellAreas();
        $xeTable.clearCopyCellArea();
      }
      tableMethods.clearMergeCells();
      tableMethods.clearMergeFooterItems();
      tablePrivateMethods.handleTableData(true);
      tableMethods.updateFooter();
      return nextTick().then(() => {
        updateHeight();
        updateStyle();
      }).then(() => {
        computeScrollLoad();
      }).then(() => {
        if (sYLoad) {
          scrollYStore.endIndex = scrollYStore.visibleSize;
        }
        handleReserveStatus();
        tablePrivateMethods.checkSelectionStatus();
        return new Promise((resolve) => {
          nextTick().then(() => tableMethods.recalculate()).then(() => {
            let targetScrollLeft = lastScrollLeft;
            let targetScrollTop = lastScrollTop;
            const sXOpts = computeSXOpts.value;
            const sYOpts = computeSYOpts.value;
            if (sXOpts.scrollToLeftOnChange) {
              targetScrollLeft = 0;
            }
            if (sYOpts.scrollToTopOnChange) {
              targetScrollTop = 0;
            }
            if (oldScrollYLoad === sYLoad) {
              restoreScrollLocation($xeTable, targetScrollLeft, targetScrollTop).then(resolve);
            } else {
              setTimeout(() => restoreScrollLocation($xeTable, targetScrollLeft, targetScrollTop).then(resolve));
            }
          });
        });
      });
    };
    const handleLoadDefaults = () => {
      handleDefaultSelectionChecked();
      handleDefaultRadioChecked();
      handleDefaultRowExpand();
      handleDefaultTreeExpand();
      handleDefaultMergeCells();
      handleDefaultMergeFooterItems();
      nextTick(() => setTimeout(() => tableMethods.recalculate()));
    };
    const handleInitDefaults = () => {
      handleDefaultSort();
    };
    const handleTableColumn = () => {
      const { scrollXLoad } = reactData;
      const { visibleColumn, scrollXStore, fullColumnIdData } = internalData;
      const tableColumn = scrollXLoad ? visibleColumn.slice(scrollXStore.startIndex, scrollXStore.endIndex) : visibleColumn.slice(0);
      tableColumn.forEach((column, $index) => {
        const colid = column.id;
        const rest = fullColumnIdData[colid];
        if (rest) {
          rest.$index = $index;
        }
      });
      reactData.tableColumn = tableColumn;
    };
    const loadScrollXData = () => {
      const { mergeList, mergeFooterList } = reactData;
      const { scrollXStore } = internalData;
      const { startIndex, endIndex, offsetSize } = scrollXStore;
      const { toVisibleIndex, visibleSize } = computeVirtualX();
      const offsetItem = {
        startIndex: Math.max(0, toVisibleIndex - 1 - offsetSize),
        endIndex: toVisibleIndex + visibleSize + offsetSize
      };
      calculateMergerOffserIndex(mergeList.concat(mergeFooterList), offsetItem, "col");
      const { startIndex: offsetStartIndex, endIndex: offsetEndIndex } = offsetItem;
      if (toVisibleIndex <= startIndex || toVisibleIndex >= endIndex - visibleSize - 1) {
        if (startIndex !== offsetStartIndex || endIndex !== offsetEndIndex) {
          scrollXStore.startIndex = offsetStartIndex;
          scrollXStore.endIndex = offsetEndIndex;
          tablePrivateMethods.updateScrollXData();
        }
      }
      tableMethods.closeTooltip();
    };
    const getColumnList = (columns) => {
      const result = [];
      columns.forEach((column) => {
        result.push(...column.children && column.children.length ? getColumnList(column.children) : [column]);
      });
      return result;
    };
    const parseColumns = () => {
      const leftList = [];
      const centerList = [];
      const rightList = [];
      const { isGroup, columnStore } = reactData;
      const sXOpts = computeSXOpts.value;
      const { collectColumn, tableFullColumn, scrollXStore, fullColumnIdData } = internalData;
      if (isGroup) {
        const leftGroupList = [];
        const centerGroupList = [];
        const rightGroupList = [];
        import_xe_utils14.default.eachTree(collectColumn, (column, index, items, path, parent) => {
          const isColGroup = hasChildrenList(column);
          if (parent && parent.fixed) {
            column.fixed = parent.fixed;
          }
          if (parent && column.fixed !== parent.fixed) {
            errLog("vxe.error.groupFixed");
          }
          if (isColGroup) {
            column.visible = !!import_xe_utils14.default.findTree(column.children, (subColumn) => hasChildrenList(subColumn) ? false : subColumn.visible);
          } else if (column.visible) {
            if (column.fixed === "left") {
              leftList.push(column);
            } else if (column.fixed === "right") {
              rightList.push(column);
            } else {
              centerList.push(column);
            }
          }
        });
        collectColumn.forEach((column) => {
          if (column.visible) {
            if (column.fixed === "left") {
              leftGroupList.push(column);
            } else if (column.fixed === "right") {
              rightGroupList.push(column);
            } else {
              centerGroupList.push(column);
            }
          }
        });
        reactData.tableGroupColumn = leftGroupList.concat(centerGroupList).concat(rightGroupList);
      } else {
        tableFullColumn.forEach((column) => {
          if (column.visible) {
            if (column.fixed === "left") {
              leftList.push(column);
            } else if (column.fixed === "right") {
              rightList.push(column);
            } else {
              centerList.push(column);
            }
          }
        });
      }
      const visibleColumn = leftList.concat(centerList).concat(rightList);
      const scrollXLoad = !!sXOpts.enabled && sXOpts.gt > -1 && (sXOpts.gt === 0 || sXOpts.gt < tableFullColumn.length);
      reactData.hasFixedColumn = leftList.length > 0 || rightList.length > 0;
      Object.assign(columnStore, { leftList, centerList, rightList });
      if (scrollXLoad) {
        if (true) {
          if (props.spanMethod) {
            warnLog("vxe.error.scrollErrProp", ["span-method"]);
          }
          if (props.footerSpanMethod) {
            warnLog("vxe.error.scrollErrProp", ["footer-span-method"]);
          }
        }
        const { visibleSize } = computeVirtualX();
        scrollXStore.startIndex = 0;
        scrollXStore.endIndex = visibleSize;
        scrollXStore.visibleSize = visibleSize;
      }
      if (visibleColumn.length !== internalData.visibleColumn.length || !internalData.visibleColumn.every((column, index) => column === visibleColumn[index])) {
        tableMethods.clearMergeCells();
        tableMethods.clearMergeFooterItems();
      }
      reactData.scrollXLoad = scrollXLoad;
      visibleColumn.forEach((column, index) => {
        const colid = column.id;
        const rest = fullColumnIdData[colid];
        if (rest) {
          rest._index = index;
        }
      });
      internalData.visibleColumn = visibleColumn;
      handleTableColumn();
      return tableMethods.updateFooter().then(() => {
        return tableMethods.recalculate();
      }).then(() => {
        tableMethods.updateCellAreas();
        return tableMethods.recalculate();
      });
    };
    const initColumnSort = () => {
      const { collectColumn } = internalData;
      collectColumn.forEach((column, index) => {
        const sortIndex = index + 1;
        column.sortNumber = sortIndex;
        column.renderSortNumber = sortIndex;
      });
    };
    const handleColumn = (collectColumn) => {
      internalData.collectColumn = collectColumn;
      const tableFullColumn = getColumnList(collectColumn);
      internalData.tableFullColumn = tableFullColumn;
      reactData._isLoading = true;
      initColumnSort();
      return Promise.resolve(restoreCustomStorage()).then(() => {
        reactData._isLoading = false;
        cacheColumnMap();
        parseColumns().then(() => {
          if (reactData.scrollXLoad) {
            loadScrollXData();
          }
        });
        tableMethods.clearMergeCells();
        tableMethods.clearMergeFooterItems();
        tablePrivateMethods.handleTableData(true);
        if (true) {
          if ((reactData.scrollXLoad || reactData.scrollYLoad) && reactData.expandColumn) {
            warnLog("vxe.error.scrollErrProp", ["column.type=expand"]);
          }
        }
        return nextTick().then(() => {
          if ($xeToolbar) {
            $xeToolbar.syncUpdate({ collectColumn, $table: $xeTable });
          }
          return tableMethods.recalculate();
        });
      });
    };
    const updateScrollYStatus = (fullData) => {
      const { treeConfig } = props;
      const sYOpts = computeSYOpts.value;
      const treeOpts = computeTreeOpts.value;
      const { transform } = treeOpts;
      const allList = fullData || internalData.tableFullData;
      const scrollYLoad = (transform || !treeConfig) && !!sYOpts.enabled && sYOpts.gt > -1 && (sYOpts.gt === 0 || sYOpts.gt < allList.length);
      reactData.scrollYLoad = scrollYLoad;
      return scrollYLoad;
    };
    const handleBaseTreeExpand = (rows, expanded) => {
      const { treeExpandedMaps, treeExpandLazyLoadedMaps, treeNodeColumn } = reactData;
      const treeTempExpandedMaps = Object.assign({}, treeExpandedMaps);
      const { fullAllDataRowIdData, tableFullData } = internalData;
      const treeOpts = computeTreeOpts.value;
      const { reserve, lazy, accordion, toggleMethod } = treeOpts;
      const childrenField = treeOpts.children || treeOpts.childrenField;
      const hasChildField = treeOpts.hasChild || treeOpts.hasChildField;
      const result = [];
      const columnIndex = tableMethods.getColumnIndex(treeNodeColumn);
      const $columnIndex = tableMethods.getVMColumnIndex(treeNodeColumn);
      let validRows = toggleMethod ? rows.filter((row) => toggleMethod({ $table: $xeTable, expanded, column: treeNodeColumn, columnIndex, $columnIndex, row })) : rows;
      if (accordion) {
        validRows = validRows.length ? [validRows[validRows.length - 1]] : [];
        const matchObj = import_xe_utils14.default.findTree(tableFullData, (item) => item === validRows[0], { children: childrenField });
        if (matchObj) {
          matchObj.items.forEach((item) => {
            const rowid = getRowid($xeTable, item);
            if (treeTempExpandedMaps[rowid]) {
              delete treeTempExpandedMaps[rowid];
            }
          });
        }
      }
      if (expanded) {
        validRows.forEach((row) => {
          const rowid = getRowid($xeTable, row);
          if (!treeTempExpandedMaps[rowid]) {
            const rest = fullAllDataRowIdData[rowid];
            const isLoad = lazy && row[hasChildField] && !rest.treeLoaded && !treeExpandLazyLoadedMaps[rowid];
            if (isLoad) {
              result.push(handleAsyncTreeExpandChilds(row));
            } else {
              if (row[childrenField] && row[childrenField].length) {
                treeTempExpandedMaps[rowid] = row;
              }
            }
          }
        });
      } else {
        validRows.forEach((item) => {
          const rowid = getRowid($xeTable, item);
          if (treeTempExpandedMaps[rowid]) {
            delete treeTempExpandedMaps[rowid];
          }
        });
      }
      if (reserve) {
        validRows.forEach((row) => handleTreeExpandReserve(row, expanded));
      }
      reactData.treeExpandedMaps = treeTempExpandedMaps;
      return Promise.all(result).then(() => {
        return tableMethods.recalculate();
      });
    };
    const handleVirtualTreeExpand = (rows, expanded) => {
      return handleBaseTreeExpand(rows, expanded).then(() => {
        handleVirtualTreeToList();
        return tablePrivateMethods.handleTableData();
      }).then(() => {
        return tableMethods.recalculate();
      });
    };
    const handleCheckAllEvent = (evnt, value) => {
      handleCheckedAllCheckboxRow(value);
      if (evnt) {
        tableMethods.dispatchEvent("checkbox-all", {
          records: tableMethods.getCheckboxRecords(),
          reserves: tableMethods.getCheckboxReserveRecords(),
          indeterminates: tableMethods.getCheckboxIndeterminateRecords(),
          checked: value
        }, evnt);
      }
    };
    const loadScrollYData = (evnt) => {
      const { mergeList } = reactData;
      const { scrollYStore } = internalData;
      const { startIndex, endIndex, visibleSize, offsetSize, rowHeight } = scrollYStore;
      const scrollBodyElem = evnt.currentTarget || evnt.target;
      const scrollTop = scrollBodyElem.scrollTop;
      const toVisibleIndex = Math.floor(scrollTop / rowHeight);
      const offsetItem = {
        startIndex: Math.max(0, toVisibleIndex - 1 - offsetSize),
        endIndex: toVisibleIndex + visibleSize + offsetSize
      };
      calculateMergerOffserIndex(mergeList, offsetItem, "row");
      const { startIndex: offsetStartIndex, endIndex: offsetEndIndex } = offsetItem;
      if (toVisibleIndex <= startIndex || toVisibleIndex >= endIndex - visibleSize - 1) {
        if (startIndex !== offsetStartIndex || endIndex !== offsetEndIndex) {
          scrollYStore.startIndex = offsetStartIndex;
          scrollYStore.endIndex = offsetEndIndex;
          tablePrivateMethods.updateScrollYData();
        }
      }
    };
    const createGetRowCacheProp = (prop) => {
      return function(row) {
        const { fullAllDataRowIdData } = internalData;
        if (row) {
          const rowid = getRowid($xeTable, row);
          const rest = fullAllDataRowIdData[rowid];
          if (rest) {
            return rest[prop];
          }
        }
        return -1;
      };
    };
    const createGetColumnCacheProp = (prop) => {
      return function(column) {
        const { fullColumnIdData } = internalData;
        if (column) {
          const rest = fullColumnIdData[column.id];
          if (rest) {
            return rest[prop];
          }
        }
        return -1;
      };
    };
    const debounceScrollY = import_xe_utils14.default.debounce(function(evnt) {
      loadScrollYData(evnt);
    }, 20, { leading: false, trailing: true });
    let keyCtxTimeout;
    tableMethods = {
      dispatchEvent(type, params, evnt) {
        emit(type, createEvent(evnt, { $table: $xeTable, $grid: $xeGrid }, params));
      },
      /**
       * 重置表格的一切数据状态
       */
      clearAll() {
        return clearTableAllStatus($xeTable);
      },
      /**
       * 同步 data 数据（即将废弃）
       * 如果用了该方法，那么组件将不再记录增删改的状态，只能自行实现对应逻辑
       * 对于某些特殊的场景，比如深层树节点元素发生变动时可能会用到
       */
      syncData() {
        warnLog("vxe.error.delFunc", ["syncData", "getData"]);
        return nextTick().then(() => {
          reactData.tableData = [];
          emit("update:data", internalData.tableFullData);
          return nextTick();
        });
      },
      /**
       * 手动处理数据，用于手动排序与筛选
       * 对于手动更改了排序、筛选...等条件后需要重新处理数据时可能会用到
       */
      updateData() {
        const { scrollXLoad, scrollYLoad } = reactData;
        return tablePrivateMethods.handleTableData(true).then(() => {
          tableMethods.updateFooter();
          if (scrollXLoad || scrollYLoad) {
            if (scrollXLoad) {
              tablePrivateMethods.updateScrollXSpace();
            }
            if (scrollYLoad) {
              tablePrivateMethods.updateScrollYSpace();
            }
            return tableMethods.refreshScroll();
          }
        }).then(() => {
          tableMethods.updateCellAreas();
          return tableMethods.recalculate(true);
        }).then(() => {
          setTimeout(() => $xeTable.recalculate(), 50);
        });
      },
      /**
       * 重新加载数据，不会清空表格状态
       * @param {Array} datas 数据
       */
      loadData(datas) {
        const { inited, initStatus } = internalData;
        return loadTableData(datas).then(() => {
          internalData.inited = true;
          internalData.initStatus = true;
          if (!initStatus) {
            handleLoadDefaults();
          }
          if (!inited) {
            handleInitDefaults();
          }
          return tableMethods.recalculate();
        });
      },
      /**
       * 重新加载数据，会清空表格状态
       * @param {Array} datas 数据
       */
      reloadData(datas) {
        const { inited } = internalData;
        return tableMethods.clearAll().then(() => {
          internalData.inited = true;
          internalData.initStatus = true;
          return loadTableData(datas);
        }).then(() => {
          handleLoadDefaults();
          if (!inited) {
            handleInitDefaults();
          }
          return tableMethods.recalculate();
        });
      },
      /**
       * 修改行数据
       */
      setRow(rows, record) {
        if (rows && record) {
          let rest = rows;
          if (!import_xe_utils14.default.isArray(rows)) {
            rest = [rows];
          }
          const rowkey = getRowkey($xeTable);
          rest.forEach((row) => {
            const rowid = getRowid($xeTable, row);
            const newRecord = import_xe_utils14.default.clone(Object.assign({}, record), true);
            import_xe_utils14.default.set(newRecord, rowkey, rowid);
            Object.assign(row, newRecord);
          });
        }
        return nextTick();
      },
      /**
       * 局部加载行数据并恢复到初始状态
       * 对于行数据需要局部更改的场景中可能会用到
       * @param {Row} row 行对象
       * @param {Object} record 新数据
       * @param {String} field 字段名
       */
      reloadRow(row, record, field) {
        const { keepSource } = props;
        const { tableData } = reactData;
        const { tableSourceData } = internalData;
        if (keepSource) {
          const rowIndex = tableMethods.getRowIndex(row);
          const oRow = tableSourceData[rowIndex];
          if (oRow && row) {
            if (field) {
              const newValue = import_xe_utils14.default.clone(import_xe_utils14.default.get(record || row, field), true);
              import_xe_utils14.default.set(row, field, newValue);
              import_xe_utils14.default.set(oRow, field, newValue);
            } else {
              const rowkey = getRowkey($xeTable);
              const rowid = getRowid($xeTable, row);
              const newRecord = import_xe_utils14.default.clone(Object.assign({}, record), true);
              import_xe_utils14.default.set(newRecord, rowkey, rowid);
              import_xe_utils14.default.destructuring(oRow, Object.assign(row, newRecord));
            }
          }
          reactData.tableData = tableData.slice(0);
        } else {
          if (true) {
            warnLog("vxe.error.reqProp", ["keep-source"]);
          }
        }
        return nextTick();
      },
      getParams() {
        return props.params;
      },
      /**
       * 用于树结构，给行数据加载子节点
       */
      loadTreeChildren(row, childRecords) {
        const { keepSource } = props;
        const { tableSourceData, fullDataRowIdData, fullAllDataRowIdData, sourceDataRowIdData } = internalData;
        const treeOpts = computeTreeOpts.value;
        const { transform, mapChildrenField } = treeOpts;
        const childrenField = treeOpts.children || treeOpts.childrenField;
        const parentRest = fullAllDataRowIdData[getRowid($xeTable, row)];
        const parentLevel = parentRest ? parentRest.level : 0;
        return tableMethods.createData(childRecords).then((rows) => {
          if (keepSource) {
            const rowid = getRowid($xeTable, row);
            const matchObj = import_xe_utils14.default.findTree(tableSourceData, (item) => rowid === getRowid($xeTable, item), { children: childrenField });
            if (matchObj) {
              matchObj.item[childrenField] = import_xe_utils14.default.clone(rows, true);
            }
            rows.forEach((childRow) => {
              const rowid2 = getRowid($xeTable, childRow);
              sourceDataRowIdData[rowid2] = import_xe_utils14.default.clone(childRow, true);
            });
          }
          import_xe_utils14.default.eachTree(rows, (childRow, index, items, path, parent, nodes) => {
            const rowid = getRowid($xeTable, childRow);
            const parentRow = parent || parentRest.row;
            const rest = { row: childRow, rowid, seq: -1, index, _index: -1, $index: -1, items, parent: parentRow, level: parentLevel + nodes.length };
            fullDataRowIdData[rowid] = rest;
            fullAllDataRowIdData[rowid] = rest;
          }, { children: childrenField });
          row[childrenField] = rows;
          if (transform) {
            row[mapChildrenField] = import_xe_utils14.default.clone(rows, false);
          }
          updateAfterDataIndex();
          return rows;
        });
      },
      /**
       * 加载列配置
       * 对于表格列需要重载、局部递增场景下可能会用到
       * @param {ColumnInfo} columns 列配置
       */
      loadColumn(columns) {
        const collectColumn = import_xe_utils14.default.mapTree(columns, (column) => reactive(cell_default.createColumn($xeTable, column)));
        return handleColumn(collectColumn);
      },
      /**
       * 加载列配置并恢复到初始状态
       * 对于表格列需要重载、局部递增场景下可能会用到
       * @param {ColumnInfo} columns 列配置
       */
      reloadColumn(columns) {
        return tableMethods.clearAll().then(() => {
          return tableMethods.loadColumn(columns);
        });
      },
      /**
       * 根据 tr 元素获取对应的 row 信息
       * @param {Element} tr 元素
       */
      getRowNode(tr) {
        if (tr) {
          const { fullAllDataRowIdData } = internalData;
          const rowid = tr.getAttribute("rowid");
          if (rowid) {
            const rest = fullAllDataRowIdData[rowid];
            if (rest) {
              return { rowid: rest.rowid, item: rest.row, index: rest.index, items: rest.items, parent: rest.parent };
            }
          }
        }
        return null;
      },
      /**
       * 根据 th/td 元素获取对应的 column 信息
       * @param {Element} cell 元素
       */
      getColumnNode(cell) {
        if (cell) {
          const { fullColumnIdData } = internalData;
          const colid = cell.getAttribute("colid");
          if (colid) {
            const rest = fullColumnIdData[colid];
            if (rest) {
              return { colid: rest.colid, item: rest.column, index: rest.index, items: rest.items, parent: rest.parent };
            }
          }
        }
        return null;
      },
      /**
       * 根据 row 获取序号
       * @param {Row} row 行对象
       */
      getRowSeq: createGetRowCacheProp("seq"),
      /**
       * 根据 row 获取相对于 data 中的索引
       * @param {Row} row 行对象
       */
      getRowIndex: createGetRowCacheProp("index"),
      /**
       * 根据 row 获取相对于当前数据中的索引
       * @param {Row} row 行对象
       */
      getVTRowIndex: createGetRowCacheProp("_index"),
      /**
       * 根据 row 获取渲染中的虚拟索引
       * @param {Row} row 行对象
       */
      getVMRowIndex: createGetRowCacheProp("$index"),
      /**
       * 根据 column 获取相对于 columns 中的索引
       * @param {ColumnInfo} column 列配置
       */
      getColumnIndex: createGetColumnCacheProp("index"),
      /**
       * 根据 column 获取相对于当前表格列中的索引
       * @param {ColumnInfo} column 列配置
       */
      getVTColumnIndex: createGetColumnCacheProp("_index"),
      /**
       * 根据 column 获取渲染中的虚拟索引
       * @param {ColumnInfo} column 列配置
       */
      getVMColumnIndex: createGetColumnCacheProp("$index"),
      /**
       * 创建 data 对象
       * 对于某些特殊场景可能会用到，会自动对数据的字段名进行检测，如果不存在就自动定义
       * @param {Array} records 新数据
       */
      createData(records) {
        return nextTick().then(() => {
          return reactive(tablePrivateMethods.defineField(records));
        });
      },
      /**
       * 创建 Row|Rows 对象
       * 对于某些特殊场景需要对数据进行手动插入时可能会用到
       * @param {Array/Object} records 新数据
       */
      createRow(records) {
        const isArr = import_xe_utils14.default.isArray(records);
        if (!isArr) {
          records = [records || {}];
        }
        return tableMethods.createData(records).then((rows) => isArr ? rows : rows[0]);
      },
      /**
       * 还原数据
       * 如果不传任何参数，则还原整个表格
       * 如果传 row 则还原一行
       * 如果传 rows 则还原多行
       * 如果还额外传了 field 则还原指定的单元格数据
       */
      revertData(rows, field) {
        const { keepSource } = props;
        const { tableSourceData, sourceDataRowIdData } = internalData;
        if (!keepSource) {
          if (true) {
            warnLog("vxe.error.reqProp", ["keep-source"]);
          }
          return nextTick();
        }
        let targetRows = rows;
        if (rows) {
          if (!import_xe_utils14.default.isArray(rows)) {
            targetRows = [rows];
          }
        } else {
          targetRows = import_xe_utils14.default.toArray($xeTable.getUpdateRecords());
        }
        if (targetRows.length) {
          targetRows.forEach((row) => {
            if (!tableMethods.isInsertByRow(row)) {
              const rowid = getRowid($xeTable, row);
              const oRow = sourceDataRowIdData[rowid];
              if (oRow && row) {
                if (field) {
                  import_xe_utils14.default.set(row, field, import_xe_utils14.default.clone(import_xe_utils14.default.get(oRow, field), true));
                } else {
                  import_xe_utils14.default.destructuring(row, import_xe_utils14.default.clone(oRow, true));
                }
              }
            }
          });
        }
        if (rows) {
          return nextTick();
        }
        return tableMethods.reloadData(tableSourceData);
      },
      /**
       * 清空单元格内容
       * 如果不创参数，则清空整个表格内容
       * 如果传 row 则清空一行内容
       * 如果传 rows 则清空多行内容
       * 如果还额外传了 field 则清空指定单元格内容
       * @param {Array/Row} rows 行数据
       * @param {String} field 字段名
       */
      clearData(rows, field) {
        const { tableFullData, visibleColumn } = internalData;
        if (!arguments.length) {
          rows = tableFullData;
        } else if (rows && !import_xe_utils14.default.isArray(rows)) {
          rows = [rows];
        }
        if (field) {
          rows.forEach((row) => import_xe_utils14.default.set(row, field, null));
        } else {
          rows.forEach((row) => {
            visibleColumn.forEach((column) => {
              if (column.field) {
                setCellValue(row, column, null);
              }
            });
          });
        }
        return nextTick();
      },
      getCellElement(row, fieldOrColumn) {
        const column = handleFieldOrColumn($xeTable, fieldOrColumn);
        if (!column) {
          return null;
        }
        const rowid = getRowid($xeTable, row);
        const tableBody = refTableBody.value;
        const leftBody = refTableLeftBody.value;
        const rightBody = refTableRightBody.value;
        let bodyElem;
        if (column) {
          if (column.fixed) {
            if (column.fixed === "left") {
              if (leftBody) {
                bodyElem = leftBody.$el;
              }
            } else {
              if (rightBody) {
                bodyElem = rightBody.$el;
              }
            }
          }
          if (!bodyElem) {
            bodyElem = tableBody.$el;
          }
          if (bodyElem) {
            return bodyElem.querySelector(`.vxe-body--row[rowid="${rowid}"] .${column.id}`);
          }
        }
        return null;
      },
      getCellLabel(row, fieldOrColumn) {
        const column = handleFieldOrColumn($xeTable, fieldOrColumn);
        if (!column) {
          return null;
        }
        const formatter = column.formatter;
        const cellValue = getCellValue(row, column);
        let cellLabel = cellValue;
        if (formatter) {
          let formatData;
          const { fullAllDataRowIdData } = internalData;
          const rowid = getRowid($xeTable, row);
          const colid = column.id;
          const rest = fullAllDataRowIdData[rowid];
          if (rest) {
            formatData = rest.formatData;
            if (!formatData) {
              formatData = fullAllDataRowIdData[rowid].formatData = {};
            }
            if (rest && formatData[colid]) {
              if (formatData[colid].value === cellValue) {
                return formatData[colid].label;
              }
            }
          }
          const formatParams = { cellValue, row, rowIndex: tableMethods.getRowIndex(row), column, columnIndex: tableMethods.getColumnIndex(column) };
          if (import_xe_utils14.default.isString(formatter)) {
            const gFormatOpts = formats4.get(formatter);
            const tcFormatMethod = gFormatOpts ? gFormatOpts.tableCellFormatMethod || gFormatOpts.cellFormatMethod : null;
            cellLabel = tcFormatMethod ? tcFormatMethod(formatParams) : "";
          } else if (import_xe_utils14.default.isArray(formatter)) {
            const gFormatOpts = formats4.get(formatter[0]);
            const tcFormatMethod = gFormatOpts ? gFormatOpts.tableCellFormatMethod || gFormatOpts.cellFormatMethod : null;
            cellLabel = tcFormatMethod ? tcFormatMethod(formatParams, ...formatter.slice(1)) : "";
          } else {
            cellLabel = formatter(formatParams);
          }
          if (formatData) {
            formatData[colid] = { value: cellValue, label: cellLabel };
          }
        }
        return cellLabel;
      },
      /**
       * 检查是否为临时行数据
       * @param {Row} row 行对象
       */
      isInsertByRow(row) {
        const { editStore } = reactData;
        const rowid = getRowid($xeTable, row);
        return editStore.insertMaps[rowid];
      },
      /**
       * 删除所有新增的临时数据
       * @returns
       */
      removeInsertRow() {
        const { editStore } = reactData;
        editStore.insertMaps = {};
        return $xeTable.remove($xeTable.getInsertRecords());
      },
      /**
       * 检查行或列数据是否发生改变
       * @param {Row} row 行对象
       * @param {String} field 字段名
       */
      isUpdateByRow(row, field) {
        const { keepSource } = props;
        const { tableFullColumn, fullDataRowIdData, sourceDataRowIdData } = internalData;
        if (keepSource) {
          const rowid = getRowid($xeTable, row);
          if (!fullDataRowIdData[rowid]) {
            return false;
          }
          const oRow = sourceDataRowIdData[rowid];
          if (oRow) {
            if (arguments.length > 1) {
              return !eqCellValue(oRow, row, field);
            }
            for (let index = 0, len = tableFullColumn.length; index < len; index++) {
              const property = tableFullColumn[index].field;
              if (property && !eqCellValue(oRow, row, property)) {
                return true;
              }
            }
          }
        }
        return false;
      },
      /**
       * 获取表格的可视列，也可以指定索引获取列
       * @param {Number} columnIndex 索引
       */
      getColumns(columnIndex) {
        const columns = internalData.visibleColumn;
        return import_xe_utils14.default.isUndefined(columnIndex) ? columns.slice(0) : columns[columnIndex];
      },
      /**
       * 根据列获取列的唯一主键
       */
      getColid(fieldOrColumn) {
        const column = handleFieldOrColumn($xeTable, fieldOrColumn);
        return column ? column.id : null;
      },
      /**
       * 根据列的唯一主键获取列
       * @param {String} colid 列主键
       */
      getColumnById(colid) {
        const fullColumnIdData = internalData.fullColumnIdData;
        return colid && fullColumnIdData[colid] ? fullColumnIdData[colid].column : null;
      },
      /**
       * 根据列的字段名获取列
       * @param {String} field 字段名
       */
      getColumnByField(field) {
        const fullColumnFieldData = internalData.fullColumnFieldData;
        return field && fullColumnFieldData[field] ? fullColumnFieldData[field].column : null;
      },
      getParentColumn(fieldOrColumn) {
        const fullColumnIdData = internalData.fullColumnIdData;
        const column = handleFieldOrColumn($xeTable, fieldOrColumn);
        return column && column.parentId && fullColumnIdData[column.parentId] ? fullColumnIdData[column.parentId].column : null;
      },
      /**
       * 获取当前表格的列
       * 收集到的全量列、全量表头列、处理条件之后的全量表头列、当前渲染中的表头列
       */
      getTableColumn() {
        return {
          collectColumn: internalData.collectColumn.slice(0),
          fullColumn: internalData.tableFullColumn.slice(0),
          visibleColumn: internalData.visibleColumn.slice(0),
          tableColumn: reactData.tableColumn.slice(0)
        };
      },
      /**
       * 获取数据，和 data 的行为一致，也可以指定索引获取数据
       */
      getData(rowIndex) {
        const tableSynchData = props.data || internalData.tableSynchData;
        return import_xe_utils14.default.isUndefined(rowIndex) ? tableSynchData.slice(0) : tableSynchData[rowIndex];
      },
      /**
       * 用于多选行，获取已选中的数据
       */
      getCheckboxRecords(isFull) {
        const { treeConfig } = props;
        const { tableFullData, afterFullData, afterTreeFullData, tableFullTreeData, fullDataRowIdData, afterFullRowMaps } = internalData;
        const treeOpts = computeTreeOpts.value;
        const checkboxOpts = computeCheckboxOpts.value;
        const { transform, mapChildrenField } = treeOpts;
        const { checkField } = checkboxOpts;
        const childrenField = treeOpts.children || treeOpts.childrenField;
        let rowList = [];
        const currTableData = isFull ? transform ? tableFullTreeData : tableFullData : transform ? afterTreeFullData : afterFullData;
        if (checkField) {
          if (treeConfig) {
            rowList = import_xe_utils14.default.filterTree(currTableData, (row) => import_xe_utils14.default.get(row, checkField), { children: transform ? mapChildrenField : childrenField });
          } else {
            rowList = currTableData.filter((row) => import_xe_utils14.default.get(row, checkField));
          }
        } else {
          const { selectCheckboxMaps } = reactData;
          import_xe_utils14.default.each(selectCheckboxMaps, (row, rowid) => {
            if (isFull) {
              if (fullDataRowIdData[rowid]) {
                rowList.push(fullDataRowIdData[rowid].row);
              }
            } else {
              if (afterFullRowMaps[rowid]) {
                rowList.push(afterFullRowMaps[rowid]);
              }
            }
          });
        }
        return rowList;
      },
      /**
       * 只对 tree-config 有效，获取行的父级
       */
      getParentRow(rowOrRowid) {
        const { treeConfig } = props;
        const { fullDataRowIdData } = internalData;
        if (rowOrRowid && treeConfig) {
          let rowid;
          if (import_xe_utils14.default.isString(rowOrRowid)) {
            rowid = rowOrRowid;
          } else {
            rowid = getRowid($xeTable, rowOrRowid);
          }
          if (rowid) {
            const rest = fullDataRowIdData[rowid];
            return rest ? rest.parent : null;
          }
        }
        return null;
      },
      /**
       * 根据行的唯一主键获取行
       * @param {String/Number} rowid 行主键
       */
      getRowById(cellValue) {
        const { fullDataRowIdData } = internalData;
        const rowid = import_xe_utils14.default.eqNull(cellValue) ? "" : encodeURIComponent(cellValue || "");
        return fullDataRowIdData[rowid] ? fullDataRowIdData[rowid].row : null;
      },
      /**
       * 根据行获取行的唯一主键
       * @param {Row} row 行对象
       */
      getRowid(row) {
        return getRowid($xeTable, row);
      },
      /**
       * 获取处理后的表格数据
       * 如果存在筛选条件，继续处理
       * 如果存在排序，继续处理
       */
      getTableData() {
        const { tableData, footerTableData } = reactData;
        const { tableFullData, afterFullData, tableFullTreeData } = internalData;
        return {
          fullData: props.treeConfig ? tableFullTreeData.slice(0) : tableFullData.slice(0),
          visibleData: afterFullData.slice(0),
          tableData: tableData.slice(0),
          footerData: footerTableData.slice(0)
        };
      },
      /**
       * 设置为固定列
       */
      setColumnFixed(fieldOrColumn, fixed) {
        const column = handleFieldOrColumn($xeTable, fieldOrColumn);
        const targetColumn = getRootColumn($xeTable, column);
        const isMaxFixedColumn = computeIsMaxFixedColumn.value;
        const columnOpts = computeColumnOpts.value;
        if (targetColumn && targetColumn.fixed !== fixed) {
          if (!targetColumn.fixed && isMaxFixedColumn) {
            if (VxeUI.modal) {
              VxeUI.modal.message({
                status: "error",
                content: getI18n9("vxe.table.maxFixedCol", [columnOpts.maxFixedSize])
              });
            }
            return nextTick();
          }
          import_xe_utils14.default.eachTree([targetColumn], (column2) => {
            column2.fixed = fixed;
          });
          tablePrivateMethods.saveCustomStore("update:fixed");
          return tableMethods.refreshColumn();
        }
        return nextTick();
      },
      /**
       * 取消指定固定列
       */
      clearColumnFixed(fieldOrColumn) {
        const column = handleFieldOrColumn($xeTable, fieldOrColumn);
        const targetColumn = getRootColumn($xeTable, column);
        if (targetColumn && targetColumn.fixed) {
          import_xe_utils14.default.eachTree([targetColumn], (column2) => {
            column2.fixed = null;
          });
          tablePrivateMethods.saveCustomStore("update:fixed");
          return tableMethods.refreshColumn();
        }
        return nextTick();
      },
      /**
       * 隐藏指定列
       */
      hideColumn(fieldOrColumn) {
        const column = handleFieldOrColumn($xeTable, fieldOrColumn);
        if (column && column.visible) {
          column.visible = false;
          return tablePrivateMethods.handleCustom();
        }
        return nextTick();
      },
      /**
       * 显示指定列
       */
      showColumn(fieldOrColumn) {
        const column = handleFieldOrColumn($xeTable, fieldOrColumn);
        if (column && !column.visible) {
          column.visible = true;
          return tablePrivateMethods.handleCustom();
        }
        return nextTick();
      },
      setColumnWidth(fieldOrColumn, width) {
        const column = handleFieldOrColumn($xeTable, fieldOrColumn);
        if (column) {
          const colWidth = import_xe_utils14.default.toInteger(width);
          let rdWidth = colWidth;
          if (isScale(width)) {
            const tableBody = refTableBody.value;
            const bodyElem = tableBody ? tableBody.$el : null;
            const bodyWidth = bodyElem ? bodyElem.clientWidth - 1 : 0;
            rdWidth = Math.floor(colWidth * bodyWidth);
          }
          column.resizeWidth = rdWidth;
          return tableMethods.refreshColumn();
        }
        return nextTick();
      },
      getColumnWidth(fieldOrColumn) {
        const column = handleFieldOrColumn($xeTable, fieldOrColumn);
        if (column) {
          return column.renderWidth;
        }
        return 0;
      },
      /**
       * 手动重置列的显示隐藏、列宽拖动的状态、固定列、排序列；
       * 如果为 true 则重置所有状态
       * 如果已关联工具栏，则会同步更新
       */
      resetColumn(options) {
        const { collectColumn } = internalData;
        const customOpts = computeCustomOpts.value;
        const { checkMethod } = customOpts;
        const opts = Object.assign({
          visible: true,
          resizable: options === true,
          fixed: options === true,
          sort: options === true
        }, options);
        import_xe_utils14.default.eachTree(collectColumn, (column) => {
          if (opts.resizable) {
            column.resizeWidth = 0;
          }
          if (opts.fixed) {
            column.fixed = column.defaultFixed;
          }
          if (opts.sort) {
            column.renderSortNumber = column.sortNumber;
          }
          if (!checkMethod || checkMethod({ column })) {
            column.visible = column.defaultVisible;
          }
          column.renderResizeWidth = column.renderWidth;
        });
        $xeTable.saveCustomStore("reset");
        return tablePrivateMethods.handleCustom();
      },
      /**
       * 刷新列信息
       * 将固定的列左边、右边分别靠边
       * 如果传 true 则会检查列顺序并排序
       */
      refreshColumn(initOrder) {
        if (initOrder) {
          const columnList = import_xe_utils14.default.orderBy(internalData.collectColumn, "renderSortNumber");
          internalData.collectColumn = columnList;
          const tableFullColumn = getColumnList(columnList);
          internalData.tableFullColumn = tableFullColumn;
          cacheColumnMap();
        }
        return parseColumns().then(() => {
          return tableMethods.refreshScroll();
        }).then(() => {
          return tableMethods.recalculate();
        });
      },
      /**
       * 刷新滚动操作，手动同步滚动相关位置（对于某些特殊的操作，比如滚动条错位、固定列不同步）
       */
      refreshScroll() {
        const { lastScrollLeft, lastScrollTop } = internalData;
        const tableBody = refTableBody.value;
        const tableFooter = refTableFooter.value;
        const leftBody = refTableLeftBody.value;
        const rightBody = refTableRightBody.value;
        const tableBodyElem = tableBody ? tableBody.$el : null;
        const leftBodyElem = leftBody ? leftBody.$el : null;
        const rightBodyElem = rightBody ? rightBody.$el : null;
        const tableFooterElem = tableFooter ? tableFooter.$el : null;
        return new Promise((resolve) => {
          if (lastScrollLeft || lastScrollTop) {
            return restoreScrollLocation($xeTable, lastScrollLeft, lastScrollTop).then().then(() => {
              setTimeout(resolve, 30);
            });
          }
          setScrollTop(tableBodyElem, lastScrollTop);
          setScrollTop(leftBodyElem, lastScrollTop);
          setScrollTop(rightBodyElem, lastScrollTop);
          setScrollLeft(tableFooterElem, lastScrollLeft);
          setTimeout(resolve, 30);
        });
      },
      /**
       * 计算单元格列宽，动态分配可用剩余空间
       * 支持 width=? width=?px width=?% min-width=? min-width=?px min-width=?%
       */
      recalculate(reFull) {
        const el = refElem.value;
        if (!el || !el.clientWidth) {
          return nextTick();
        }
        calcCellWidth();
        autoCellWidth();
        if (reFull === true) {
          return computeScrollLoad().then(() => {
            autoCellWidth();
            return computeScrollLoad();
          });
        }
        return computeScrollLoad();
      },
      openTooltip(target, content) {
        const $commTip = refCommTooltip.value;
        if ($commTip && $commTip.open) {
          return $commTip.open(target, content);
        }
        return nextTick();
      },
      /**
       * 关闭 tooltip
       */
      closeTooltip() {
        const { tooltipStore } = reactData;
        const $tooltip = refTooltip.value;
        const $commTip = refCommTooltip.value;
        if (tooltipStore.visible) {
          Object.assign(tooltipStore, {
            row: null,
            column: null,
            content: null,
            visible: false,
            currOpts: {}
          });
          if ($tooltip && $tooltip.close) {
            $tooltip.close();
          }
        }
        if ($commTip && $commTip.close) {
          $commTip.close();
        }
        return nextTick();
      },
      /**
       * 判断列头复选框是否被选中
       */
      isAllCheckboxChecked() {
        return reactData.isAllSelected;
      },
      /**
       * 判断列头复选框是否被半选
       */
      isAllCheckboxIndeterminate() {
        return !reactData.isAllSelected && reactData.isIndeterminate;
      },
      /**
       * 获取复选框半选状态的行数据
       */
      getCheckboxIndeterminateRecords(isFull) {
        const { treeConfig } = props;
        const { fullDataRowIdData } = internalData;
        const { treeIndeterminateMaps } = reactData;
        if (treeConfig) {
          const fullRest = [];
          const defRest = [];
          import_xe_utils14.default.each(treeIndeterminateMaps, (item, rowid) => {
            if (item) {
              fullRest.push(item);
              if (fullDataRowIdData[rowid]) {
                defRest.push(item);
              }
            }
          });
          if (isFull) {
            return fullRest;
          }
          return defRest;
        }
        return [];
      },
      /**
       * 用于多选行，设置行为选中状态，第二个参数为选中与否
       * @param {Array/Row} rows 行数据
       * @param {Boolean} value 是否选中
       */
      setCheckboxRow(rows, value) {
        if (rows && !import_xe_utils14.default.isArray(rows)) {
          rows = [rows];
        }
        return handleCheckedCheckboxRow(rows, value, true);
      },
      isCheckedByCheckboxRow(row) {
        const { selectCheckboxMaps } = reactData;
        const checkboxOpts = computeCheckboxOpts.value;
        const { checkField } = checkboxOpts;
        if (checkField) {
          return import_xe_utils14.default.get(row, checkField);
        }
        return !!selectCheckboxMaps[getRowid($xeTable, row)];
      },
      isIndeterminateByCheckboxRow(row) {
        const { treeIndeterminateMaps } = reactData;
        return !!treeIndeterminateMaps[getRowid($xeTable, row)] && !tableMethods.isCheckedByCheckboxRow(row);
      },
      /**
       * 多选，切换某一行的选中状态
       */
      toggleCheckboxRow(row) {
        const { selectCheckboxMaps } = reactData;
        const checkboxOpts = computeCheckboxOpts.value;
        const { checkField } = checkboxOpts;
        const value = checkField ? !import_xe_utils14.default.get(row, checkField) : !selectCheckboxMaps[getRowid($xeTable, row)];
        tablePrivateMethods.handleSelectRow({ row }, value, true);
        tablePrivateMethods.checkSelectionStatus();
        return nextTick();
      },
      /**
       * 用于多选行，设置所有行的选中状态
       * @param {Boolean} value 是否选中
       */
      setAllCheckboxRow(value) {
        return handleCheckedAllCheckboxRow(value, true);
      },
      /**
       * 获取单选框保留选中的行
       */
      getRadioReserveRecord(isFull) {
        const { treeConfig } = props;
        const { fullDataRowIdData, radioReserveRow, afterFullData } = internalData;
        const radioOpts = computeRadioOpts.value;
        const treeOpts = computeTreeOpts.value;
        const childrenField = treeOpts.children || treeOpts.childrenField;
        if (radioOpts.reserve && radioReserveRow) {
          const rowid = getRowid($xeTable, radioReserveRow);
          if (isFull) {
            if (!fullDataRowIdData[rowid]) {
              return radioReserveRow;
            }
          } else {
            const rowkey = getRowkey($xeTable);
            if (treeConfig) {
              const matchObj = import_xe_utils14.default.findTree(afterFullData, (row) => rowid === import_xe_utils14.default.get(row, rowkey), { children: childrenField });
              if (matchObj) {
                return radioReserveRow;
              }
            } else {
              if (!afterFullData.some((row) => rowid === import_xe_utils14.default.get(row, rowkey))) {
                return radioReserveRow;
              }
            }
          }
        }
        return null;
      },
      clearRadioReserve() {
        internalData.radioReserveRow = null;
        return nextTick();
      },
      /**
       * 获取复选框保留选中的行
       */
      getCheckboxReserveRecords(isFull) {
        const { treeConfig } = props;
        const { afterFullData, fullDataRowIdData, checkboxReserveRowMap } = internalData;
        const checkboxOpts = computeCheckboxOpts.value;
        const treeOpts = computeTreeOpts.value;
        const childrenField = treeOpts.children || treeOpts.childrenField;
        const reserveSelection = [];
        if (checkboxOpts.reserve) {
          const afterFullIdMaps = {};
          if (treeConfig) {
            import_xe_utils14.default.eachTree(afterFullData, (row) => {
              afterFullIdMaps[getRowid($xeTable, row)] = 1;
            }, { children: childrenField });
          } else {
            afterFullData.forEach((row) => {
              afterFullIdMaps[getRowid($xeTable, row)] = 1;
            });
          }
          import_xe_utils14.default.each(checkboxReserveRowMap, (oldRow, oldRowid) => {
            if (oldRow) {
              if (isFull) {
                if (!fullDataRowIdData[oldRowid]) {
                  reserveSelection.push(oldRow);
                }
              } else {
                if (!afterFullIdMaps[oldRowid]) {
                  reserveSelection.push(oldRow);
                }
              }
            }
          });
        }
        return reserveSelection;
      },
      clearCheckboxReserve() {
        internalData.checkboxReserveRowMap = {};
        return nextTick();
      },
      /**
       * 多选，切换所有行的选中状态
       */
      toggleAllCheckboxRow() {
        handleCheckAllEvent(null, !reactData.isAllSelected);
        return nextTick();
      },
      /**
       * 用于多选行，手动清空用户的选择
       * 清空行为不管是否被禁用还是保留记录，都将彻底清空选中状态
       */
      clearCheckboxRow() {
        const { treeConfig } = props;
        const { tableFullData } = internalData;
        const treeOpts = computeTreeOpts.value;
        const childrenField = treeOpts.children || treeOpts.childrenField;
        const checkboxOpts = computeCheckboxOpts.value;
        const { checkField, reserve } = checkboxOpts;
        const indeterminateField = checkboxOpts.indeterminateField || checkboxOpts.halfField;
        if (checkField) {
          const handleClearChecked = (item) => {
            if (treeConfig && indeterminateField) {
              import_xe_utils14.default.set(item, indeterminateField, false);
            }
            import_xe_utils14.default.set(item, checkField, false);
          };
          if (treeConfig) {
            import_xe_utils14.default.eachTree(tableFullData, handleClearChecked, { children: childrenField });
          } else {
            tableFullData.forEach(handleClearChecked);
          }
        }
        if (reserve) {
          tableFullData.forEach((row) => handleCheckboxReserveRow(row, false));
        }
        reactData.isAllSelected = false;
        reactData.isIndeterminate = false;
        reactData.selectCheckboxMaps = {};
        reactData.treeIndeterminateMaps = {};
        return nextTick();
      },
      /**
       * 用于当前行，设置某一行为高亮状态
       * @param {Row} row 行对象
       */
      setCurrentRow(row) {
        const rowOpts = computeRowOpts.value;
        const el = refElem.value;
        tableMethods.clearCurrentRow();
        reactData.currentRow = row;
        if (rowOpts.isCurrent || props.highlightCurrentRow) {
          if (el) {
            import_xe_utils14.default.arrayEach(el.querySelectorAll(`[rowid="${getRowid($xeTable, row)}"]`), (elem) => addClass(elem, "row--current"));
          }
        }
        return nextTick();
      },
      isCheckedByRadioRow(row) {
        return $xeTable.eqRow(reactData.selectRadioRow, row);
      },
      /**
       * 用于单选行，设置某一行为选中状态
       * @param {Row} row 行对象
       */
      setRadioRow(row) {
        return handleCheckedRadioRow(row, true);
      },
      /**
       * 用于当前行，手动清空当前高亮的状态
       */
      clearCurrentRow() {
        const el = refElem.value;
        reactData.currentRow = null;
        internalData.hoverRow = null;
        if (el) {
          import_xe_utils14.default.arrayEach(el.querySelectorAll(".row--current"), (elem) => removeClass(elem, "row--current"));
        }
        return nextTick();
      },
      /**
       * 用于单选行，手动清空用户的选择
       */
      clearRadioRow() {
        reactData.selectRadioRow = null;
        return nextTick();
      },
      /**
       * 用于当前行，获取当前行的数据
       */
      getCurrentRecord() {
        const rowOpts = computeRowOpts.value;
        return rowOpts.isCurrent || props.highlightCurrentRow ? reactData.currentRow : null;
      },
      /**
       * 用于单选行，获取当已选中的数据
       */
      getRadioRecord(isFull) {
        const { fullDataRowIdData, afterFullRowMaps } = internalData;
        const { selectRadioRow } = reactData;
        if (selectRadioRow) {
          const rowid = getRowid($xeTable, selectRadioRow);
          if (isFull) {
            if (fullDataRowIdData[rowid]) {
              return selectRadioRow;
            }
          } else {
            if (afterFullRowMaps[rowid]) {
              return selectRadioRow;
            }
          }
        }
        return null;
      },
      getCurrentColumn() {
        const columnOpts = computeColumnOpts.value;
        return columnOpts.isCurrent || props.highlightCurrentColumn ? reactData.currentColumn : null;
      },
      /**
       * 用于当前列，设置某列行为高亮状态
       */
      setCurrentColumn(fieldOrColumn) {
        const column = handleFieldOrColumn($xeTable, fieldOrColumn);
        if (column) {
          tableMethods.clearCurrentColumn();
          reactData.currentColumn = column;
        }
        return nextTick();
      },
      /**
       * 用于当前列，手动清空当前高亮的状态
       */
      clearCurrentColumn() {
        reactData.currentColumn = null;
        return nextTick();
      },
      setPendingRow(rows, status) {
        const pendingMaps = Object.assign({}, reactData.pendingRowMaps);
        const pendingList = [...reactData.pendingRowList];
        if (rows && !import_xe_utils14.default.isArray(rows)) {
          rows = [rows];
        }
        if (status) {
          rows.forEach((row) => {
            const rowid = getRowid($xeTable, row);
            if (rowid && !pendingMaps[rowid]) {
              pendingList.push(row);
              pendingMaps[rowid] = row;
            }
          });
        } else {
          rows.forEach((row) => {
            const rowid = getRowid($xeTable, row);
            if (rowid && pendingMaps[rowid]) {
              const pendingIndex = $xeTable.findRowIndexOf(pendingList, row);
              if (pendingIndex > -1) {
                pendingList.splice(pendingIndex, 1);
              }
              delete pendingMaps[rowid];
            }
          });
        }
        reactData.pendingRowMaps = pendingMaps;
        reactData.pendingRowList = pendingList;
        return nextTick();
      },
      togglePendingRow(rows) {
        const pendingMaps = Object.assign({}, reactData.pendingRowMaps);
        const pendingList = [...reactData.pendingRowList];
        if (rows && !import_xe_utils14.default.isArray(rows)) {
          rows = [rows];
        }
        rows.forEach((row) => {
          const rowid = getRowid($xeTable, row);
          if (rowid) {
            if (pendingMaps[rowid]) {
              const pendingIndex = $xeTable.findRowIndexOf(pendingList, row);
              if (pendingIndex > -1) {
                pendingList.splice(pendingIndex, 1);
              }
              delete pendingMaps[rowid];
            } else {
              pendingList.push(row);
              pendingMaps[rowid] = row;
            }
          }
        });
        reactData.pendingRowMaps = pendingMaps;
        reactData.pendingRowList = pendingList;
        return nextTick();
      },
      hasPendingByRow(row) {
        return tableMethods.isPendingByRow(row);
      },
      isPendingByRow(row) {
        const { pendingRowMaps } = reactData;
        const rowid = getRowid($xeTable, row);
        return !!pendingRowMaps[rowid];
      },
      getPendingRecords() {
        const { pendingRowList } = reactData;
        return pendingRowList.slice(0);
      },
      clearPendingRow() {
        reactData.pendingRowMaps = {};
        reactData.pendingRowList = [];
        return nextTick();
      },
      sort(sortConfs, sortOrder) {
        const sortOpts = computeSortOpts.value;
        const { multiple, remote, orders } = sortOpts;
        if (sortConfs) {
          if (import_xe_utils14.default.isString(sortConfs)) {
            sortConfs = [
              { field: sortConfs, order: sortOrder }
            ];
          }
        }
        if (!import_xe_utils14.default.isArray(sortConfs)) {
          sortConfs = [sortConfs];
        }
        if (sortConfs.length) {
          if (!multiple) {
            clearAllSort();
          }
          (multiple ? sortConfs : [sortConfs[0]]).forEach((confs, index) => {
            let { field, order } = confs;
            let column = field;
            if (import_xe_utils14.default.isString(field)) {
              column = tableMethods.getColumnByField(field);
            }
            if (column && column.sortable) {
              if (orders.indexOf(order) === -1) {
                order = getNextSortOrder(column);
              }
              if (column.order !== order) {
                column.order = order;
              }
              column.sortTime = Date.now() + index;
            }
          });
          if (!remote) {
            tablePrivateMethods.handleTableData(true);
          }
          return nextTick().then(() => {
            tableMethods.updateCellAreas();
            return updateStyle();
          });
        }
        return nextTick();
      },
      /**
       * 清空指定列的排序条件
       * 如果为空则清空所有列的排序条件
       * @param {String} fieldOrColumn 列或字段名
       */
      clearSort(fieldOrColumn) {
        const sortOpts = computeSortOpts.value;
        if (fieldOrColumn) {
          const column = handleFieldOrColumn($xeTable, fieldOrColumn);
          if (column) {
            column.order = null;
          }
        } else {
          clearAllSort();
        }
        if (!sortOpts.remote) {
          tablePrivateMethods.handleTableData(true);
        }
        return nextTick().then(updateStyle);
      },
      isSort(fieldOrColumn) {
        if (fieldOrColumn) {
          const column = handleFieldOrColumn($xeTable, fieldOrColumn);
          return column ? column.sortable && !!column.order : false;
        }
        return tableMethods.getSortColumns().length > 0;
      },
      getSortColumns() {
        const sortOpts = computeSortOpts.value;
        const { multiple, chronological } = sortOpts;
        const sortList = [];
        const { tableFullColumn } = internalData;
        tableFullColumn.forEach((column) => {
          const { field, order } = column;
          if (column.sortable && order) {
            sortList.push({ column, field, property: field, order, sortTime: column.sortTime });
          }
        });
        if (multiple && chronological && sortList.length > 1) {
          return import_xe_utils14.default.orderBy(sortList, "sortTime");
        }
        return sortList;
      },
      /**
       * 关闭筛选
       * @param {Event} evnt 事件
       */
      closeFilter() {
        const { filterStore } = reactData;
        const { column, visible } = filterStore;
        Object.assign(filterStore, {
          isAllSelected: false,
          isIndeterminate: false,
          options: [],
          visible: false
        });
        if (visible) {
          $xeTable.dispatchEvent("filter-visible", { column, property: column.field, field: column.field, filterList: $xeTable.getCheckedFilters(), visible: false }, null);
        }
        return nextTick();
      },
      /**
       * 判断指定列是否为筛选状态，如果为空则判断所有列
       * @param {String} fieldOrColumn 字段名
       */
      isActiveFilterByColumn(fieldOrColumn) {
        const column = handleFieldOrColumn($xeTable, fieldOrColumn);
        if (column) {
          return column.filters && column.filters.some((option) => option.checked);
        }
        return $xeTable.getCheckedFilters().length > 0;
      },
      isFilter(fieldOrColumn) {
        return tableMethods.isActiveFilterByColumn(fieldOrColumn);
      },
      /**
       * 判断展开行是否懒加载完成
       * @param {Row} row 行对象
       */
      isRowExpandLoaded(row) {
        const { fullAllDataRowIdData } = internalData;
        const rest = fullAllDataRowIdData[getRowid($xeTable, row)];
        return rest && !!rest.expandLoaded;
      },
      clearRowExpandLoaded(row) {
        const { rowExpandLazyLoadedMaps } = reactData;
        const { fullAllDataRowIdData } = internalData;
        const expandOpts = computeExpandOpts.value;
        const { lazy } = expandOpts;
        const rowid = getRowid($xeTable, row);
        const rest = fullAllDataRowIdData[rowid];
        if (lazy && rest) {
          rest.expandLoaded = false;
          delete rowExpandLazyLoadedMaps[rowid];
        }
        return nextTick();
      },
      /**
       * 重新懒加载展开行，并展开内容
       * @param {Row} row 行对象
       */
      reloadRowExpand(row) {
        const { rowExpandLazyLoadedMaps } = reactData;
        const expandOpts = computeExpandOpts.value;
        const { lazy } = expandOpts;
        const rowid = getRowid($xeTable, row);
        if (lazy && !rowExpandLazyLoadedMaps[rowid]) {
          tableMethods.clearRowExpandLoaded(row).then(() => handleAsyncRowExpand(row));
        }
        return nextTick();
      },
      reloadExpandContent(row) {
        if (true) {
          warnLog("vxe.error.delFunc", ["reloadExpandContent", "reloadRowExpand"]);
        }
        return tableMethods.reloadRowExpand(row);
      },
      /**
       * 切换展开行
       */
      toggleRowExpand(row) {
        return tableMethods.setRowExpand(row, !tableMethods.isRowExpandByRow(row));
      },
      /**
       * 设置所有行的展开与否
       * @param {Boolean} expanded 是否展开
       */
      setAllRowExpand(expanded) {
        const treeOpts = computeTreeOpts.value;
        const { tableFullData, tableFullTreeData } = internalData;
        const childrenField = treeOpts.children || treeOpts.childrenField;
        let expandedRows = [];
        if (props.treeConfig) {
          import_xe_utils14.default.eachTree(tableFullTreeData, (row) => {
            expandedRows.push(row);
          }, { children: childrenField });
        } else {
          expandedRows = tableFullData;
        }
        return tableMethods.setRowExpand(expandedRows, expanded);
      },
      /**
       * 设置展开行，二个参数设置这一行展开与否
       * 支持单行
       * 支持多行
       * @param {Array/Row} rows 行数据
       * @param {Boolean} expanded 是否展开
       */
      setRowExpand(rows, expanded) {
        const { rowExpandedMaps, rowExpandLazyLoadedMaps, expandColumn: column } = reactData;
        const { fullAllDataRowIdData } = internalData;
        let rExpandedMaps = Object.assign({}, rowExpandedMaps);
        const expandOpts = computeExpandOpts.value;
        const { reserve, lazy, accordion, toggleMethod } = expandOpts;
        const lazyRests = [];
        const columnIndex = tableMethods.getColumnIndex(column);
        const $columnIndex = tableMethods.getVMColumnIndex(column);
        if (rows) {
          if (!import_xe_utils14.default.isArray(rows)) {
            rows = [rows];
          }
          if (accordion) {
            rExpandedMaps = {};
            rows = rows.slice(rows.length - 1, rows.length);
          }
          const validRows = toggleMethod ? rows.filter((row) => toggleMethod({ $table: $xeTable, expanded, column, columnIndex, $columnIndex, row, rowIndex: tableMethods.getRowIndex(row), $rowIndex: tableMethods.getVMRowIndex(row) })) : rows;
          if (expanded) {
            validRows.forEach((row) => {
              const rowid = getRowid($xeTable, row);
              if (!rExpandedMaps[rowid]) {
                const rest = fullAllDataRowIdData[rowid];
                const isLoad = lazy && !rest.expandLoaded && !rowExpandLazyLoadedMaps[rowid];
                if (isLoad) {
                  lazyRests.push(handleAsyncRowExpand(row));
                } else {
                  rExpandedMaps[rowid] = row;
                }
              }
            });
          } else {
            validRows.forEach((item) => {
              const rowid = getRowid($xeTable, item);
              if (rExpandedMaps[rowid]) {
                delete rExpandedMaps[rowid];
              }
            });
          }
          if (reserve) {
            validRows.forEach((row) => handleRowExpandReserve(row, expanded));
          }
        }
        reactData.rowExpandedMaps = rExpandedMaps;
        return Promise.all(lazyRests).then(() => tableMethods.recalculate());
      },
      /**
       * 判断行是否为展开状态
       * @param {Row} row 行对象
       */
      isRowExpandByRow(row) {
        const { rowExpandedMaps } = reactData;
        const rowid = getRowid($xeTable, row);
        return !!rowExpandedMaps[rowid];
      },
      isExpandByRow(row) {
        if (true) {
          warnLog("vxe.error.delFunc", ["isExpandByRow", "isRowExpandByRow"]);
        }
        return tableMethods.isRowExpandByRow(row);
      },
      /**
       * 手动清空展开行状态，数据会恢复成未展开的状态
       */
      clearRowExpand() {
        const { tableFullData } = internalData;
        const expandOpts = computeExpandOpts.value;
        const { reserve } = expandOpts;
        const expList = tableMethods.getRowExpandRecords();
        reactData.rowExpandedMaps = {};
        if (reserve) {
          tableFullData.forEach((row) => handleRowExpandReserve(row, false));
        }
        return nextTick().then(() => {
          if (expList.length) {
            tableMethods.recalculate();
          }
        });
      },
      clearRowExpandReserve() {
        internalData.rowExpandedReserveRowMap = {};
        return nextTick();
      },
      getRowExpandRecords() {
        const rest = [];
        import_xe_utils14.default.each(reactData.rowExpandedMaps, (item) => {
          if (item) {
            rest.push(item);
          }
        });
        return rest;
      },
      getTreeExpandRecords() {
        const rest = [];
        import_xe_utils14.default.each(reactData.treeExpandedMaps, (item) => {
          if (item) {
            rest.push(item);
          }
        });
        return rest;
      },
      /**
       * 判断树节点是否懒加载完成
       * @param {Row} row 行对象
       */
      isTreeExpandLoaded(row) {
        const { fullAllDataRowIdData } = internalData;
        const rest = fullAllDataRowIdData[getRowid($xeTable, row)];
        return rest && !!rest.treeLoaded;
      },
      clearTreeExpandLoaded(row) {
        const { treeExpandedMaps } = reactData;
        const { fullAllDataRowIdData } = internalData;
        const treeOpts = computeTreeOpts.value;
        const { transform, lazy } = treeOpts;
        const rowid = getRowid($xeTable, row);
        const rest = fullAllDataRowIdData[rowid];
        if (lazy && rest) {
          rest.treeLoaded = false;
          if (treeExpandedMaps[rowid]) {
            delete treeExpandedMaps[rowid];
          }
        }
        if (transform) {
          handleVirtualTreeToList();
          return tablePrivateMethods.handleTableData();
        }
        return nextTick();
      },
      /**
       * 重新懒加载树节点，并展开该节点
       * @param {Row} row 行对象
       */
      reloadTreeExpand(row) {
        const { treeExpandLazyLoadedMaps } = reactData;
        const treeOpts = computeTreeOpts.value;
        const hasChildField = treeOpts.hasChild || treeOpts.hasChildField;
        const { transform, lazy } = treeOpts;
        const rowid = getRowid($xeTable, row);
        if (lazy && row[hasChildField] && !treeExpandLazyLoadedMaps[rowid]) {
          tableMethods.clearTreeExpandLoaded(row).then(() => {
            return handleAsyncTreeExpandChilds(row);
          }).then(() => {
            if (transform) {
              handleVirtualTreeToList();
              return tablePrivateMethods.handleTableData();
            }
          }).then(() => {
            return tableMethods.recalculate();
          });
        }
        return nextTick();
      },
      reloadTreeChilds(row) {
        if (true) {
          warnLog("vxe.error.delFunc", ["reloadTreeChilds", "reloadTreeExpand"]);
        }
        return tableMethods.reloadTreeExpand(row);
      },
      /**
       * 切换/展开树节点
       */
      toggleTreeExpand(row) {
        return tableMethods.setTreeExpand(row, !tableMethods.isTreeExpandByRow(row));
      },
      /**
       * 设置所有树节点的展开与否
       * @param {Boolean} expanded 是否展开
       */
      setAllTreeExpand(expanded) {
        const { tableFullData } = internalData;
        const treeOpts = computeTreeOpts.value;
        const { transform, lazy } = treeOpts;
        const childrenField = treeOpts.children || treeOpts.childrenField;
        const expandeds = [];
        import_xe_utils14.default.eachTree(tableFullData, (row) => {
          const rowChildren = row[childrenField];
          if (lazy || rowChildren && rowChildren.length) {
            expandeds.push(row);
          }
        }, { children: childrenField });
        return tableMethods.setTreeExpand(expandeds, expanded).then(() => {
          if (transform) {
            handleVirtualTreeToList();
            return tableMethods.recalculate();
          }
        });
      },
      /**
       * 设置展开树形节点，二个参数设置这一行展开与否
       * 支持单行
       * 支持多行
       * @param {Array/Row} rows 行数据
       * @param {Boolean} expanded 是否展开
       */
      setTreeExpand(rows, expanded) {
        const treeOpts = computeTreeOpts.value;
        const { transform } = treeOpts;
        if (rows) {
          if (!import_xe_utils14.default.isArray(rows)) {
            rows = [rows];
          }
          if (rows.length) {
            if (transform) {
              return handleVirtualTreeExpand(rows, expanded);
            } else {
              return handleBaseTreeExpand(rows, expanded);
            }
          }
        }
        return nextTick();
      },
      /**
       * 判断行是否为树形节点展开状态
       * @param {Row} row 行对象
       */
      isTreeExpandByRow(row) {
        const { treeExpandedMaps } = reactData;
        return !!treeExpandedMaps[getRowid($xeTable, row)];
      },
      /**
       * 手动清空树形节点的展开状态，数据会恢复成未展开的状态
       */
      clearTreeExpand() {
        const { tableFullTreeData } = internalData;
        const treeOpts = computeTreeOpts.value;
        const childrenField = treeOpts.children || treeOpts.childrenField;
        const { transform, reserve } = treeOpts;
        const expList = tableMethods.getTreeExpandRecords();
        reactData.treeExpandedMaps = {};
        if (reserve) {
          import_xe_utils14.default.eachTree(tableFullTreeData, (row) => handleTreeExpandReserve(row, false), { children: childrenField });
        }
        return tablePrivateMethods.handleTableData().then(() => {
          if (transform) {
            handleVirtualTreeToList();
            return tablePrivateMethods.handleTableData();
          }
        }).then(() => {
          if (expList.length) {
            return tableMethods.recalculate();
          }
        });
      },
      clearTreeExpandReserve() {
        internalData.treeExpandedReserveRowMap = {};
        return nextTick();
      },
      /**
       * 获取表格的滚动状态
       */
      getScroll() {
        const { scrollXLoad, scrollYLoad } = reactData;
        const tableBody = refTableBody.value;
        const bodyElem = tableBody.$el;
        return {
          virtualX: scrollXLoad,
          virtualY: scrollYLoad,
          scrollTop: bodyElem.scrollTop,
          scrollLeft: bodyElem.scrollLeft
        };
      },
      /**
       * 如果有滚动条，则滚动到对应的位置
       * @param {Number} scrollLeft 左距离
       * @param {Number} scrollTop 上距离
       */
      scrollTo(scrollLeft, scrollTop) {
        const tableBody = refTableBody.value;
        const tableFooter = refTableFooter.value;
        const rightBody = refTableRightBody.value;
        const tableBodyElem = tableBody ? tableBody.$el : null;
        const rightBodyElem = rightBody ? rightBody.$el : null;
        const tableFooterElem = tableFooter ? tableFooter.$el : null;
        if (import_xe_utils14.default.isNumber(scrollLeft)) {
          setScrollLeft(tableFooterElem || tableBodyElem, scrollLeft);
        }
        if (import_xe_utils14.default.isNumber(scrollTop)) {
          setScrollTop(rightBodyElem || tableBodyElem, scrollTop);
        }
        if (reactData.scrollXLoad || reactData.scrollYLoad) {
          return new Promise((resolve) => {
            setTimeout(() => {
              nextTick(() => {
                resolve();
              });
            }, 50);
          });
        }
        return nextTick();
      },
      /**
       * 如果有滚动条，则滚动到对应的行
       * @param {Row} row 行对象
       * @param {ColumnInfo} fieldOrColumn 列配置
       */
      scrollToRow(row, fieldOrColumn) {
        const rest = [];
        if (row) {
          if (props.treeConfig) {
            rest.push(tablePrivateMethods.scrollToTreeRow(row));
          } else {
            rest.push(rowToVisible($xeTable, row));
          }
        }
        if (fieldOrColumn) {
          rest.push(tableMethods.scrollToColumn(fieldOrColumn));
        }
        return Promise.all(rest);
      },
      /**
       * 如果有滚动条，则滚动到对应的列
       */
      scrollToColumn(fieldOrColumn) {
        const { fullColumnIdData } = internalData;
        const column = handleFieldOrColumn($xeTable, fieldOrColumn);
        if (column && fullColumnIdData[column.id]) {
          return colToVisible($xeTable, column);
        }
        return nextTick();
      },
      /**
       * 手动清除滚动相关信息，还原到初始状态
       */
      clearScroll() {
        const { scrollXStore, scrollYStore } = internalData;
        const tableBody = refTableBody.value;
        const tableFooter = refTableFooter.value;
        const rightBody = refTableRightBody.value;
        const tableBodyElem = tableBody ? tableBody.$el : null;
        const rightBodyElem = rightBody ? rightBody.$el : null;
        const tableFooterElem = tableFooter ? tableFooter.$el : null;
        if (rightBodyElem) {
          restoreScrollListener(rightBodyElem);
          rightBodyElem.scrollTop = 0;
        }
        if (tableFooterElem) {
          tableFooterElem.scrollLeft = 0;
        }
        if (tableBodyElem) {
          restoreScrollListener(tableBodyElem);
          tableBodyElem.scrollTop = 0;
          tableBodyElem.scrollLeft = 0;
        }
        scrollXStore.startIndex = 0;
        scrollXStore.endIndex = scrollXStore.visibleSize;
        scrollYStore.startIndex = 0;
        scrollYStore.endIndex = scrollYStore.visibleSize;
        return nextTick();
      },
      /**
       * 更新表尾合计
       */
      updateFooter() {
        const { showFooter, footerData, footerMethod } = props;
        const { visibleColumn, afterFullData } = internalData;
        let footData = [];
        if (showFooter && footerData && footerData.length) {
          footData = footerData.slice(0);
        } else if (showFooter && footerMethod) {
          footData = visibleColumn.length ? footerMethod({ columns: visibleColumn, data: afterFullData, $table: $xeTable, $grid: $xeGrid }) : [];
        }
        reactData.footerTableData = footData;
        return nextTick();
      },
      /**
       * 更新列状态 updateStatus({ row, column }, cellValue)
       * 如果组件值 v-model 发生 change 时，调用改函数用于更新某一列编辑状态
       * 如果单元格配置了校验规则，则会进行校验
       */
      updateStatus(slotParams, cellValue) {
        const customVal = !import_xe_utils14.default.isUndefined(cellValue);
        return nextTick().then(() => {
          const { editRules } = props;
          const { validStore } = reactData;
          const tableBody = refTableBody.value;
          if (slotParams && tableBody && editRules) {
            const { row, column } = slotParams;
            const type = "change";
            if ($xeTable.hasCellRules) {
              if ($xeTable.hasCellRules(type, row, column)) {
                const cell = tableMethods.getCellElement(row, column);
                if (cell) {
                  return $xeTable.validCellRules(type, row, column, cellValue).then(() => {
                    if (customVal && validStore.visible) {
                      setCellValue(row, column, cellValue);
                    }
                    $xeTable.clearValidate(row, column);
                  }).catch(({ rule }) => {
                    if (customVal) {
                      setCellValue(row, column, cellValue);
                    }
                    $xeTable.showValidTooltip({ rule, row, column, cell });
                  });
                }
              }
            }
          }
        });
      },
      /**
       * 设置合并单元格
       * @param {TableMergeConfig[]} merges { row: Row|number, column: ColumnInfo|number, rowspan: number, colspan: number }
       */
      setMergeCells(merges) {
        if (props.spanMethod) {
          errLog("vxe.error.errConflicts", ["merge-cells", "span-method"]);
        }
        setMerges(merges, reactData.mergeList, internalData.afterFullData);
        return nextTick().then(() => {
          tableMethods.updateCellAreas();
          return updateStyle();
        });
      },
      /**
       * 移除单元格合并
       * @param {TableMergeConfig[]} merges 多个或数组 [{row:Row|number, col:ColumnInfo|number}]
       */
      removeMergeCells(merges) {
        if (props.spanMethod) {
          errLog("vxe.error.errConflicts", ["merge-cells", "span-method"]);
        }
        const rest = removeMerges(merges, reactData.mergeList, internalData.afterFullData);
        return nextTick().then(() => {
          tableMethods.updateCellAreas();
          updateStyle();
          return rest;
        });
      },
      /**
       * 获取所有被合并的单元格
       */
      getMergeCells() {
        return reactData.mergeList.slice(0);
      },
      /**
       * 清除所有单元格合并
       */
      clearMergeCells() {
        reactData.mergeList = [];
        return nextTick().then(() => {
          return updateStyle();
        });
      },
      setMergeFooterItems(merges) {
        if (props.footerSpanMethod) {
          errLog("vxe.error.errConflicts", ["merge-footer-items", "footer-span-method"]);
        }
        setMerges(merges, reactData.mergeFooterList);
        return nextTick().then(() => {
          tableMethods.updateCellAreas();
          return updateStyle();
        });
      },
      removeMergeFooterItems(merges) {
        if (props.footerSpanMethod) {
          errLog("vxe.error.errConflicts", ["merge-footer-items", "footer-span-method"]);
        }
        const rest = removeMerges(merges, reactData.mergeFooterList);
        return nextTick().then(() => {
          tableMethods.updateCellAreas();
          updateStyle();
          return rest;
        });
      },
      /**
       * 获取所有被合并的表尾
       */
      getMergeFooterItems() {
        return reactData.mergeFooterList.slice(0);
      },
      /**
       * 清除所有表尾合并
       */
      clearMergeFooterItems() {
        reactData.mergeFooterList = [];
        return nextTick().then(() => {
          return updateStyle();
        });
      },
      updateCellAreas() {
        const { mouseConfig } = props;
        const mouseOpts = computeMouseOpts.value;
        if (mouseConfig && mouseOpts.area && $xeTable.handleUpdateCellAreas) {
          return $xeTable.handleUpdateCellAreas();
        }
        return nextTick();
      },
      getCustomStoreData() {
        const { id } = props;
        const customOpts = computeCustomOpts.value;
        const { collectColumn } = internalData;
        const { checkMethod } = customOpts;
        const resizableData = {};
        const sortData = {};
        const visibleData = {};
        const fixedData = {};
        const storeData = {
          resizableData: void 0,
          sortData: void 0,
          visibleData: void 0,
          fixedData: void 0
        };
        if (!id) {
          errLog("vxe.error.reqProp", ["id"]);
          return storeData;
        }
        let hasResizable = 0;
        let hasSort = 0;
        let hasFixedt = 0;
        let hasVisible = 0;
        import_xe_utils14.default.eachTree(collectColumn, (column, index, items, path, parent) => {
          if (!parent) {
            collectColumn.forEach((column2) => {
              const colKey = column2.getKey();
              if (colKey) {
                hasSort = 1;
                sortData[colKey] = column2.renderSortNumber;
              }
            });
            if (column.fixed && column.fixed !== column.defaultFixed) {
              const colKey = column.getKey();
              if (colKey) {
                hasFixedt = 1;
                fixedData[colKey] = column.fixed;
              }
            }
          }
          if (column.resizeWidth) {
            const colKey = column.getKey();
            if (colKey) {
              hasResizable = 1;
              resizableData[colKey] = column.renderWidth;
            }
          }
          if (!checkMethod || checkMethod({ column })) {
            if (!column.visible && column.defaultVisible) {
              const colKey = column.getKey();
              if (colKey) {
                hasVisible = 1;
                visibleData[colKey] = false;
              }
            } else if (column.visible && !column.defaultVisible) {
              const colKey = column.getKey();
              if (colKey) {
                hasVisible = 1;
                visibleData[colKey] = true;
              }
            }
          }
        });
        if (hasResizable) {
          storeData.resizableData = resizableData;
        }
        if (hasSort) {
          storeData.sortData = sortData;
        }
        if (hasFixedt) {
          storeData.fixedData = fixedData;
        }
        if (hasVisible) {
          storeData.visibleData = visibleData;
        }
        return storeData;
      },
      focus() {
        internalData.isActivated = true;
        return nextTick();
      },
      blur() {
        internalData.isActivated = false;
        return nextTick();
      },
      /**
       * 连接工具栏
       * @param $toolbar
       */
      connect($toolbar) {
        if ($toolbar) {
          $xeToolbar = $toolbar;
          $xeToolbar.syncUpdate({ collectColumn: internalData.collectColumn, $table: $xeTable });
        } else {
          errLog("vxe.error.barUnableLink");
        }
        return nextTick();
      }
    };
    const handleGlobalMousedownEvent = (evnt) => {
      const { editStore, ctxMenuStore, filterStore, customStore } = reactData;
      const { mouseConfig, editRules } = props;
      const el = refElem.value;
      const editOpts = computeEditOpts.value;
      const validOpts = computeValidOpts.value;
      const areaOpts = computeAreaOpts.value;
      const { actived } = editStore;
      const $validTooltip = refValidTooltip.value;
      const tableFilter = refTableFilter.value;
      const tableCustom = refTableCustom.value;
      const tableMenu = refTableMenu.value;
      if (tableFilter) {
        if (getEventTargetNode(evnt, el, "vxe-cell--filter").flag) {
        } else if (getEventTargetNode(evnt, tableFilter.$el).flag) {
        } else {
          if (!getEventTargetNode(evnt, document.body, "vxe-table--ignore-clear").flag) {
            tablePrivateMethods.preventEvent(evnt, "event.clearFilter", filterStore.args, tableMethods.closeFilter);
          }
        }
      }
      if (tableCustom) {
        if (customStore.btnEl === evnt.target || getEventTargetNode(evnt, document.body, "vxe-toolbar-custom-target").flag) {
        } else if (getEventTargetNode(evnt, tableCustom.$el).flag) {
        } else {
          if (!getEventTargetNode(evnt, document.body, "vxe-table--ignore-clear").flag) {
            tablePrivateMethods.preventEvent(evnt, "event.clearCustom", {}, () => {
              if ($xeTable.closeCustom) {
                $xeTable.closeCustom();
              }
            });
          }
        }
      }
      if (actived.row) {
        if (!(editOpts.autoClear === false)) {
          const cell = actived.args.cell;
          if (!cell || !getEventTargetNode(evnt, cell).flag) {
            if ($validTooltip && getEventTargetNode(evnt, $validTooltip.$el).flag) {
            } else if (!internalData._lastCallTime || internalData._lastCallTime + 50 < Date.now()) {
              if (!getEventTargetNode(evnt, document.body, "vxe-table--ignore-clear").flag) {
                tablePrivateMethods.preventEvent(evnt, "event.clearEdit", actived.args, () => {
                  let isClear;
                  if (editOpts.mode === "row") {
                    const rowTargetNode = getEventTargetNode(evnt, el, "vxe-body--row");
                    const rowNodeRest = rowTargetNode.flag ? tableMethods.getRowNode(rowTargetNode.targetElem) : null;
                    isClear = rowNodeRest ? !$xeTable.eqRow(rowNodeRest.item, actived.args.row) : false;
                  } else {
                    isClear = !getEventTargetNode(evnt, el, "col--edit").flag;
                  }
                  if (!isClear) {
                    isClear = getEventTargetNode(evnt, el, "vxe-header--row").flag;
                  }
                  if (!isClear) {
                    isClear = getEventTargetNode(evnt, el, "vxe-footer--row").flag;
                  }
                  if (!isClear && props.height && !reactData.overflowY) {
                    const bodyWrapperElem = evnt.target;
                    if (hasClass(bodyWrapperElem, "vxe-table--body-wrapper")) {
                      isClear = evnt.offsetY < bodyWrapperElem.clientHeight;
                    }
                  }
                  if (isClear || // 如果点击了当前表格之外
                  !getEventTargetNode(evnt, el).flag) {
                    setTimeout(() => $xeTable.clearEdit(evnt));
                  }
                });
              }
            }
          }
        }
      } else if (mouseConfig) {
        if (!getEventTargetNode(evnt, el).flag && !($xeGrid && getEventTargetNode(evnt, $xeGrid.getRefMaps().refElem.value).flag) && !(tableMenu && getEventTargetNode(evnt, tableMenu.getRefMaps().refElem.value).flag) && !($xeToolbar && getEventTargetNode(evnt, $xeToolbar.getRefMaps().refElem.value).flag)) {
          if ($xeTable.clearSelected) {
            $xeTable.clearSelected();
          }
          if (areaOpts.autoClear) {
            if ($xeTable.getCellAreas) {
              const cellAreas = $xeTable.getCellAreas();
              if (cellAreas && cellAreas.length && !getEventTargetNode(evnt, document.body, "vxe-table--ignore-areas-clear").flag) {
                tablePrivateMethods.preventEvent(evnt, "event.clearAreas", {}, () => {
                  $xeTable.clearCellAreas();
                  $xeTable.clearCopyCellArea();
                  $xeTable.dispatchEvent("clear-cell-area-selection", { cellAreas }, evnt);
                });
              }
            }
          }
        }
      }
      if ($xeTable.closeMenu) {
        if (ctxMenuStore.visible && tableMenu && !getEventTargetNode(evnt, tableMenu.getRefMaps().refElem.value).flag) {
          $xeTable.closeMenu();
        }
      }
      const isActivated = getEventTargetNode(evnt, $xeGrid ? $xeGrid.getRefMaps().refElem.value : el).flag;
      if (!isActivated && editRules && validOpts.autoClear) {
        reactData.validErrorMaps = {};
      }
      internalData.isActivated = isActivated;
    };
    const handleGlobalBlurEvent = () => {
      tableMethods.closeFilter();
      if ($xeTable.closeMenu) {
        $xeTable.closeMenu();
      }
    };
    const handleGlobalMousewheelEvent = () => {
      tableMethods.closeTooltip();
      if ($xeTable.closeMenu) {
        $xeTable.closeMenu();
      }
    };
    const keydownEvent = (evnt) => {
      const { mouseConfig, keyboardConfig } = props;
      const { filterStore, ctxMenuStore, editStore } = reactData;
      const mouseOpts = computeMouseOpts.value;
      const keyboardOpts = computeKeyboardOpts.value;
      const { actived } = editStore;
      const isEsc = globalEvents2.hasKey(evnt, GLOBAL_EVENT_KEYS.ESCAPE);
      if (isEsc) {
        tablePrivateMethods.preventEvent(evnt, "event.keydown", null, () => {
          tableMethods.dispatchEvent("keydown-start", {}, evnt);
          if (keyboardConfig && mouseConfig && mouseOpts.area && $xeTable.handleKeyboardEvent) {
            $xeTable.handleKeyboardEvent(evnt);
          } else if (actived.row || filterStore.visible || ctxMenuStore.visible) {
            evnt.stopPropagation();
            if ($xeTable.closeMenu) {
              $xeTable.closeMenu();
            }
            tableMethods.closeFilter();
            if (keyboardConfig && keyboardOpts.isEsc) {
              if (actived.row) {
                const params = actived.args;
                $xeTable.clearEdit(evnt);
                if (mouseOpts.selected) {
                  nextTick(() => $xeTable.handleSelected(params, evnt));
                }
              }
            }
          }
          tableMethods.dispatchEvent("keydown", {}, evnt);
          tableMethods.dispatchEvent("keydown-end", {}, evnt);
        });
      }
    };
    const handleGlobalKeydownEvent = (evnt) => {
      if (internalData.isActivated) {
        tablePrivateMethods.preventEvent(evnt, "event.keydown", null, () => {
          const { mouseConfig, keyboardConfig, treeConfig, editConfig, highlightCurrentRow } = props;
          const { ctxMenuStore, editStore, currentRow } = reactData;
          const isMenu = computeIsMenu.value;
          const bodyMenu = computeBodyMenu.value;
          const keyboardOpts = computeKeyboardOpts.value;
          const mouseOpts = computeMouseOpts.value;
          const editOpts = computeEditOpts.value;
          const treeOpts = computeTreeOpts.value;
          const menuList = computeMenuList.value;
          const rowOpts = computeRowOpts.value;
          const { selected, actived } = editStore;
          const childrenField = treeOpts.children || treeOpts.childrenField;
          const keyCode = evnt.keyCode;
          const isEsc = globalEvents2.hasKey(evnt, GLOBAL_EVENT_KEYS.ESCAPE);
          const hasBackspaceKey = globalEvents2.hasKey(evnt, GLOBAL_EVENT_KEYS.BACKSPACE);
          const isTab = globalEvents2.hasKey(evnt, GLOBAL_EVENT_KEYS.TAB);
          const isEnter = globalEvents2.hasKey(evnt, GLOBAL_EVENT_KEYS.ENTER);
          const isSpacebar = globalEvents2.hasKey(evnt, GLOBAL_EVENT_KEYS.SPACEBAR);
          const isLeftArrow = globalEvents2.hasKey(evnt, GLOBAL_EVENT_KEYS.ARROW_LEFT);
          const isUpArrow = globalEvents2.hasKey(evnt, GLOBAL_EVENT_KEYS.ARROW_UP);
          const isRightArrow = globalEvents2.hasKey(evnt, GLOBAL_EVENT_KEYS.ARROW_RIGHT);
          const isDwArrow = globalEvents2.hasKey(evnt, GLOBAL_EVENT_KEYS.ARROW_DOWN);
          const hasDeleteKey = globalEvents2.hasKey(evnt, GLOBAL_EVENT_KEYS.DELETE);
          const isF2 = globalEvents2.hasKey(evnt, GLOBAL_EVENT_KEYS.F2);
          const isContextMenu = globalEvents2.hasKey(evnt, GLOBAL_EVENT_KEYS.CONTEXT_MENU);
          const hasMetaKey = evnt.metaKey;
          const hasCtrlKey = evnt.ctrlKey;
          const hasShiftKey = evnt.shiftKey;
          const isAltKey = evnt.altKey;
          const operArrow = isLeftArrow || isUpArrow || isRightArrow || isDwArrow;
          const operCtxMenu = isMenu && ctxMenuStore.visible && (isEnter || isSpacebar || operArrow);
          const isEditStatus = isEnableConf(editConfig) && actived.column && actived.row;
          const beforeEditMethod = editOpts.beforeEditMethod || editOpts.activeMethod;
          if (operCtxMenu) {
            evnt.preventDefault();
            if (ctxMenuStore.showChild && hasChildrenList(ctxMenuStore.selected)) {
              $xeTable.moveCtxMenu(evnt, ctxMenuStore, "selectChild", isLeftArrow, false, ctxMenuStore.selected.children);
            } else {
              $xeTable.moveCtxMenu(evnt, ctxMenuStore, "selected", isRightArrow, true, menuList);
            }
          } else if (keyboardConfig && mouseConfig && mouseOpts.area && $xeTable.handleKeyboardEvent) {
            $xeTable.handleKeyboardEvent(evnt);
          } else if (isEsc) {
            if ($xeTable.closeMenu) {
              $xeTable.closeMenu();
            }
            tableMethods.closeFilter();
            if (keyboardConfig && keyboardOpts.isEsc) {
              if (actived.row) {
                const params = actived.args;
                $xeTable.clearEdit(evnt);
                if (mouseOpts.selected) {
                  nextTick(() => $xeTable.handleSelected(params, evnt));
                }
              }
            }
          } else if (isSpacebar && keyboardConfig && keyboardOpts.isChecked && selected.row && selected.column && (selected.column.type === "checkbox" || selected.column.type === "radio")) {
            evnt.preventDefault();
            if (selected.column.type === "checkbox") {
              tablePrivateMethods.handleToggleCheckRowEvent(evnt, selected.args);
            } else {
              tablePrivateMethods.triggerRadioRowEvent(evnt, selected.args);
            }
          } else if (isF2 && isEnableConf(editConfig)) {
            if (!isEditStatus) {
              if (selected.row && selected.column) {
                evnt.preventDefault();
                $xeTable.handleEdit(selected.args, evnt);
              }
            }
          } else if (isContextMenu) {
            internalData._keyCtx = selected.row && selected.column && bodyMenu.length;
            clearTimeout(keyCtxTimeout);
            keyCtxTimeout = setTimeout(() => {
              internalData._keyCtx = false;
            }, 1e3);
          } else if (isEnter && !isAltKey && keyboardConfig && keyboardOpts.isEnter && (selected.row || actived.row || treeConfig && (rowOpts.isCurrent || highlightCurrentRow) && currentRow)) {
            if (hasCtrlKey) {
              if (actived.row) {
                const params = actived.args;
                $xeTable.clearEdit(evnt);
                if (mouseOpts.selected) {
                  nextTick(() => $xeTable.handleSelected(params, evnt));
                }
              }
            } else {
              if (selected.row || actived.row) {
                const targetArgs = selected.row ? selected.args : actived.args;
                if (hasShiftKey) {
                  if (keyboardOpts.enterToTab) {
                    $xeTable.moveTabSelected(targetArgs, hasShiftKey, evnt);
                  } else {
                    $xeTable.moveSelected(targetArgs, isLeftArrow, true, isRightArrow, false, evnt);
                  }
                } else {
                  if (keyboardOpts.enterToTab) {
                    $xeTable.moveTabSelected(targetArgs, hasShiftKey, evnt);
                  } else {
                    $xeTable.moveSelected(targetArgs, isLeftArrow, false, isRightArrow, true, evnt);
                  }
                }
              } else if (treeConfig && (rowOpts.isCurrent || highlightCurrentRow) && currentRow) {
                const childrens = currentRow[childrenField];
                if (childrens && childrens.length) {
                  evnt.preventDefault();
                  const targetRow = childrens[0];
                  const params = {
                    $table: $xeTable,
                    row: targetRow,
                    rowIndex: tableMethods.getRowIndex(targetRow),
                    $rowIndex: tableMethods.getVMRowIndex(targetRow)
                  };
                  tableMethods.setTreeExpand(currentRow, true).then(() => tableMethods.scrollToRow(targetRow)).then(() => tablePrivateMethods.triggerCurrentRowEvent(evnt, params));
                }
              }
            }
          } else if (operArrow && keyboardConfig && keyboardOpts.isArrow) {
            if (!isEditStatus) {
              if (selected.row && selected.column) {
                $xeTable.moveSelected(selected.args, isLeftArrow, isUpArrow, isRightArrow, isDwArrow, evnt);
              } else if ((isUpArrow || isDwArrow) && (rowOpts.isCurrent || highlightCurrentRow)) {
                $xeTable.moveCurrentRow(isUpArrow, isDwArrow, evnt);
              }
            }
          } else if (isTab && keyboardConfig && keyboardOpts.isTab) {
            if (selected.row || selected.column) {
              $xeTable.moveTabSelected(selected.args, hasShiftKey, evnt);
            } else if (actived.row || actived.column) {
              $xeTable.moveTabSelected(actived.args, hasShiftKey, evnt);
            }
          } else if (keyboardConfig && keyboardOpts.isDel && hasDeleteKey && isEnableConf(editConfig) && (selected.row || selected.column)) {
            if (!isEditStatus) {
              const { delMethod } = keyboardOpts;
              const params = {
                row: selected.row,
                rowIndex: tableMethods.getRowIndex(selected.row),
                column: selected.column,
                columnIndex: tableMethods.getColumnIndex(selected.column),
                $table: $xeTable,
                $grid: $xeGrid
              };
              if (!beforeEditMethod || beforeEditMethod(params)) {
                if (delMethod) {
                  delMethod(params);
                } else {
                  setCellValue(selected.row, selected.column, null);
                }
                tableMethods.updateFooter();
                $xeTable.dispatchEvent("cell-delete-value", params, evnt);
              }
            }
          } else if (hasBackspaceKey && keyboardConfig && keyboardOpts.isBack && isEnableConf(editConfig) && (selected.row || selected.column)) {
            if (!isEditStatus) {
              const { backMethod } = keyboardOpts;
              if (keyboardOpts.isDel && isEnableConf(editConfig) && (selected.row || selected.column)) {
                const params = {
                  row: selected.row,
                  rowIndex: tableMethods.getRowIndex(selected.row),
                  column: selected.column,
                  columnIndex: tableMethods.getColumnIndex(selected.column),
                  $table: $xeTable,
                  $grid: $xeGrid
                };
                if (!beforeEditMethod || beforeEditMethod(params)) {
                  if (backMethod) {
                    backMethod(params);
                  } else {
                    setCellValue(selected.row, selected.column, null);
                    $xeTable.handleEdit(selected.args, evnt);
                  }
                  $xeTable.dispatchEvent("cell-backspace-value", params, evnt);
                }
              }
            }
          } else if (hasBackspaceKey && keyboardConfig && treeConfig && keyboardOpts.isBack && (rowOpts.isCurrent || highlightCurrentRow) && currentRow) {
            const { parent: parentRow } = import_xe_utils14.default.findTree(internalData.afterTreeFullData, (item) => item === currentRow, { children: childrenField });
            if (parentRow) {
              evnt.preventDefault();
              const params = {
                row: parentRow,
                rowIndex: tableMethods.getRowIndex(parentRow),
                $rowIndex: tableMethods.getVMRowIndex(parentRow),
                $table: $xeTable,
                $grid: $xeGrid
              };
              tableMethods.setTreeExpand(parentRow, false).then(() => tableMethods.scrollToRow(parentRow)).then(() => tablePrivateMethods.triggerCurrentRowEvent(evnt, params));
            }
          } else if (keyboardConfig && isEnableConf(editConfig) && keyboardOpts.isEdit && !hasCtrlKey && !hasMetaKey && (isSpacebar || keyCode >= 48 && keyCode <= 57 || keyCode >= 65 && keyCode <= 90 || keyCode >= 96 && keyCode <= 111 || keyCode >= 186 && keyCode <= 192 || keyCode >= 219 && keyCode <= 222)) {
            const { editMethod } = keyboardOpts;
            if (selected.column && selected.row && isEnableConf(selected.column.editRender)) {
              const beforeEditMethod2 = editOpts.beforeEditMethod || editOpts.activeMethod;
              const params = {
                row: selected.row,
                rowIndex: tableMethods.getRowIndex(selected.row),
                column: selected.column,
                columnIndex: tableMethods.getColumnIndex(selected.column),
                $table: $xeTable,
                $grid: $xeGrid
              };
              if (!beforeEditMethod2 || beforeEditMethod2(Object.assign(Object.assign({}, selected.args), { $table: $xeTable, $grid: $xeGrid }))) {
                if (editMethod) {
                  editMethod(params);
                } else {
                  setCellValue(selected.row, selected.column, null);
                  $xeTable.handleEdit(selected.args, evnt);
                }
              }
            }
          }
          tableMethods.dispatchEvent("keydown", {}, evnt);
        });
      }
    };
    const handleGlobalPasteEvent = (evnt) => {
      const { keyboardConfig, mouseConfig } = props;
      const { editStore, filterStore } = reactData;
      const { isActivated } = internalData;
      const mouseOpts = computeMouseOpts.value;
      const keyboardOpts = computeKeyboardOpts.value;
      const { actived } = editStore;
      if (isActivated && !filterStore.visible) {
        if (!(actived.row || actived.column)) {
          if (keyboardConfig && keyboardOpts.isClip && mouseConfig && mouseOpts.area && $xeTable.handlePasteCellAreaEvent) {
            $xeTable.handlePasteCellAreaEvent(evnt);
          }
        }
        tableMethods.dispatchEvent("paste", {}, evnt);
      }
    };
    const handleGlobalCopyEvent = (evnt) => {
      const { keyboardConfig, mouseConfig } = props;
      const { editStore, filterStore } = reactData;
      const { isActivated } = internalData;
      const mouseOpts = computeMouseOpts.value;
      const keyboardOpts = computeKeyboardOpts.value;
      const { actived } = editStore;
      if (isActivated && !filterStore.visible) {
        if (!(actived.row || actived.column)) {
          if (keyboardConfig && keyboardOpts.isClip && mouseConfig && mouseOpts.area && $xeTable.handleCopyCellAreaEvent) {
            $xeTable.handleCopyCellAreaEvent(evnt);
          }
        }
        tableMethods.dispatchEvent("copy", {}, evnt);
      }
    };
    const handleGlobalCutEvent = (evnt) => {
      const { keyboardConfig, mouseConfig } = props;
      const { editStore, filterStore } = reactData;
      const { isActivated } = internalData;
      const mouseOpts = computeMouseOpts.value;
      const keyboardOpts = computeKeyboardOpts.value;
      const { actived } = editStore;
      if (isActivated && !filterStore.visible) {
        if (!(actived.row || actived.column)) {
          if (keyboardConfig && keyboardOpts.isClip && mouseConfig && mouseOpts.area && $xeTable.handleCutCellAreaEvent) {
            $xeTable.handleCutCellAreaEvent(evnt);
          }
        }
        tableMethods.dispatchEvent("cut", {}, evnt);
      }
    };
    const handleGlobalResizeEvent = () => {
      if ($xeTable.closeMenu) {
        $xeTable.closeMenu();
      }
      const el = refElem.value;
      if (!el || !el.clientWidth) {
        return nextTick();
      }
      tableMethods.updateCellAreas();
      tableMethods.recalculate(true);
    };
    const handleTargetEnterEvent = (isClear) => {
      const $tooltip = refTooltip.value;
      clearTimeout(internalData.tooltipTimeout);
      if (isClear) {
        tableMethods.closeTooltip();
      } else {
        if ($tooltip && $tooltip.setActived) {
          $tooltip.setActived(true);
        }
      }
    };
    const handleTooltip = (evnt, cell, overflowElem, tipElem, params) => {
      params.cell = cell;
      const { tooltipStore } = reactData;
      const tooltipOpts = computeTooltipOpts.value;
      const { column, row } = params;
      const { showAll, contentMethod } = tooltipOpts;
      const customContent = contentMethod ? contentMethod(params) : null;
      const useCustom = contentMethod && !import_xe_utils14.default.eqNull(customContent);
      const content = useCustom ? customContent : import_xe_utils14.default.toString(column.type === "html" ? overflowElem.innerText : overflowElem.textContent).trim();
      const isCellOverflow = overflowElem.scrollWidth > overflowElem.clientWidth;
      if (content && (showAll || useCustom || isCellOverflow)) {
        Object.assign(tooltipStore, {
          row,
          column,
          visible: true,
          currOpts: {}
        });
        nextTick(() => {
          const $tooltip = refTooltip.value;
          if ($tooltip && $tooltip.open) {
            $tooltip.open(isCellOverflow ? overflowElem : tipElem || overflowElem, formatText(content));
          }
        });
      }
      return nextTick();
    };
    tablePrivateMethods = {
      getSetupOptions() {
        return getConfig3();
      },
      updateAfterDataIndex,
      callSlot(slotFunc, params) {
        if (slotFunc) {
          if ($xeGrid) {
            return $xeGrid.callSlot(slotFunc, params);
          }
          if (import_xe_utils14.default.isFunction(slotFunc)) {
            return getSlotVNs(slotFunc(params));
          }
        }
        return [];
      },
      /**
       * 获取父容器元素
       */
      getParentElem() {
        const el = refElem.value;
        if ($xeGrid) {
          const gridEl = $xeGrid.getRefMaps().refElem.value;
          return gridEl ? gridEl.parentNode : null;
        }
        return el ? el.parentNode : null;
      },
      /**
       * 获取父容器的高度
       */
      getParentHeight() {
        const { height } = props;
        const el = refElem.value;
        if (el) {
          const parentElem = el.parentNode;
          const parentPaddingSize = height === "100%" || height === "auto" ? getPaddingTopBottomSize(parentElem) : 0;
          return Math.floor($xeGrid ? $xeGrid.getParentHeight() : import_xe_utils14.default.toNumber(getComputedStyle(parentElem).height) - parentPaddingSize);
        }
        return 0;
      },
      /**
       * 获取需要排除的高度
       * 但渲染表格高度时，需要排除工具栏或分页等相关组件的高度
       * 如果存在表尾合计滚动条，则需要排除滚动条高度
       */
      getExcludeHeight() {
        return $xeGrid ? $xeGrid.getExcludeHeight() : 0;
      },
      /**
       * 定义行数据中的列属性，如果不存在则定义
       * @param {Row} records 行数据
       */
      defineField(records) {
        const { treeConfig } = props;
        const expandOpts = computeExpandOpts.value;
        const treeOpts = computeTreeOpts.value;
        const radioOpts = computeRadioOpts.value;
        const checkboxOpts = computeCheckboxOpts.value;
        const childrenField = treeOpts.children || treeOpts.childrenField;
        const rowkey = getRowkey($xeTable);
        if (!import_xe_utils14.default.isArray(records)) {
          records = [records];
        }
        return records.map((record) => {
          internalData.tableFullColumn.forEach((column) => {
            const { field, editRender } = column;
            if (field && !import_xe_utils14.default.has(record, field) && !record[field]) {
              let cellValue = null;
              if (editRender) {
                const { defaultValue } = editRender;
                if (import_xe_utils14.default.isFunction(defaultValue)) {
                  cellValue = defaultValue({ column });
                } else if (!import_xe_utils14.default.isUndefined(defaultValue)) {
                  cellValue = defaultValue;
                }
              }
              import_xe_utils14.default.set(record, field, cellValue);
            }
          });
          const otherFields = [radioOpts.labelField, checkboxOpts.checkField, checkboxOpts.labelField, expandOpts.labelField];
          otherFields.forEach((key) => {
            if (key && eqEmptyValue(import_xe_utils14.default.get(record, key))) {
              import_xe_utils14.default.set(record, key, null);
            }
          });
          if (treeConfig && treeOpts.lazy && import_xe_utils14.default.isUndefined(record[childrenField])) {
            record[childrenField] = null;
          }
          if (eqEmptyValue(import_xe_utils14.default.get(record, rowkey))) {
            import_xe_utils14.default.set(record, rowkey, getRowUniqueId());
          }
          return record;
        });
      },
      handleTableData(force) {
        const { scrollYLoad } = reactData;
        const { scrollYStore, fullDataRowIdData } = internalData;
        let fullList = internalData.afterFullData;
        if (force) {
          updateAfterFullData();
          fullList = handleVirtualTreeToList();
        }
        const tableData = scrollYLoad ? fullList.slice(scrollYStore.startIndex, scrollYStore.endIndex) : fullList.slice(0);
        tableData.forEach((row, $index) => {
          const rowid = getRowid($xeTable, row);
          const rest = fullDataRowIdData[rowid];
          if (rest) {
            rest.$index = $index;
          }
        });
        reactData.tableData = tableData;
        return nextTick();
      },
      /**
       * 更新数据行的 Map
       * 牺牲数据组装的耗时，用来换取使用过程中的流畅
       */
      cacheRowMap(isSource) {
        const { treeConfig } = props;
        const treeOpts = computeTreeOpts.value;
        let { fullDataRowIdData, fullAllDataRowIdData, tableFullData, tableFullTreeData } = internalData;
        const childrenField = treeOpts.children || treeOpts.childrenField;
        const hasChildField = treeOpts.hasChild || treeOpts.hasChildField;
        const rowkey = getRowkey($xeTable);
        const isLazy = treeConfig && treeOpts.lazy;
        const handleRow = (row, index, items, path, parent, nodes) => {
          let rowid = getRowid($xeTable, row);
          const seq = treeConfig && path ? toTreePathSeq(path) : index + 1;
          const level = nodes ? nodes.length - 1 : 0;
          if (eqEmptyValue(rowid)) {
            rowid = getRowUniqueId();
            import_xe_utils14.default.set(row, rowkey, rowid);
          }
          if (isLazy && row[hasChildField] && import_xe_utils14.default.isUndefined(row[childrenField])) {
            row[childrenField] = null;
          }
          const rest = { row, rowid, seq, index: treeConfig && parent ? -1 : index, _index: -1, $index: -1, items, parent, level };
          if (isSource) {
            fullDataRowIdData[rowid] = rest;
          }
          fullAllDataRowIdData[rowid] = rest;
        };
        if (isSource) {
          fullDataRowIdData = internalData.fullDataRowIdData = {};
        }
        fullAllDataRowIdData = internalData.fullAllDataRowIdData = {};
        if (treeConfig) {
          import_xe_utils14.default.eachTree(tableFullTreeData, handleRow, { children: childrenField });
        } else {
          tableFullData.forEach(handleRow);
        }
      },
      cacheSourceMap(fullData) {
        const { treeConfig } = props;
        const treeOpts = computeTreeOpts.value;
        let { sourceDataRowIdData } = internalData;
        const sourceData = import_xe_utils14.default.clone(fullData, true);
        const rowkey = getRowkey($xeTable);
        sourceDataRowIdData = internalData.sourceDataRowIdData = {};
        const handleSourceRow = (row) => {
          let rowid = getRowid($xeTable, row);
          if (eqEmptyValue(rowid)) {
            rowid = getRowUniqueId();
            import_xe_utils14.default.set(row, rowkey, rowid);
          }
          sourceDataRowIdData[rowid] = row;
        };
        if (treeConfig) {
          const childrenField = treeOpts.children || treeOpts.childrenField;
          import_xe_utils14.default.eachTree(sourceData, handleSourceRow, { children: treeOpts.transform ? treeOpts.mapChildrenField : childrenField });
        } else {
          sourceData.forEach(handleSourceRow);
        }
        internalData.tableSourceData = sourceData;
      },
      /**
       * 指定列宽的列进行拆分
       */
      analyColumnWidth() {
        const { tableFullColumn } = internalData;
        const columnOpts = computeColumnOpts.value;
        const { width: defaultWidth, minWidth: defaultMinWidth } = columnOpts;
        const resizeList = [];
        const pxList = [];
        const pxMinList = [];
        const autoMinList = [];
        const scaleList = [];
        const scaleMinList = [];
        const autoList = [];
        const remainList = [];
        tableFullColumn.forEach((column) => {
          if (defaultWidth && !column.width) {
            column.width = defaultWidth;
          }
          if (defaultMinWidth && !column.minWidth) {
            column.minWidth = defaultMinWidth;
          }
          if (column.visible) {
            if (column.resizeWidth) {
              resizeList.push(column);
            } else if (column.width === "auto") {
              autoList.push(column);
            } else if (isPx(column.width)) {
              pxList.push(column);
            } else if (isScale(column.width)) {
              scaleList.push(column);
            } else if (isPx(column.minWidth)) {
              pxMinList.push(column);
            } else if (column.minWidth === "auto") {
              autoMinList.push(column);
            } else if (isScale(column.minWidth)) {
              scaleMinList.push(column);
            } else {
              remainList.push(column);
            }
          }
        });
        Object.assign(reactData.columnStore, { resizeList, pxList, pxMinList, autoMinList, scaleList, scaleMinList, autoList, remainList });
      },
      saveCustomStore(type) {
        const tableId = computeTableId.value;
        const customOpts = computeCustomOpts.value;
        const { updateStore, storage } = customOpts;
        const isAllCustom = storage === true;
        const storageOpts = isAllCustom ? {} : Object.assign({}, storage || {});
        const isCustomResizable = isAllCustom || storageOpts.resizable;
        const isCustomVisible = isAllCustom || storageOpts.visible;
        const isCustomFixed = isAllCustom || storageOpts.fixed;
        const isCustomSort = isAllCustom || storageOpts.sort;
        if (isCustomResizable || isCustomVisible || isCustomFixed || isCustomSort) {
          if (!tableId) {
            errLog("vxe.error.reqProp", ["id"]);
            return nextTick();
          }
          const storeData = type === "reset" ? {
            resizableData: {},
            sortData: {},
            visibleData: {},
            fixedData: {}
          } : tableMethods.getCustomStoreData();
          if (updateStore) {
            return updateStore({
              id: tableId,
              type,
              storeData
            });
          } else {
            setCustomStorageMap(tableId, type === "reset" ? null : storeData);
          }
        }
        return nextTick();
      },
      handleCustom() {
        const { mouseConfig } = props;
        if (mouseConfig) {
          if ($xeTable.clearSelected) {
            $xeTable.clearSelected();
          }
          if ($xeTable.clearCellAreas) {
            $xeTable.clearCellAreas();
            $xeTable.clearCopyCellArea();
          }
        }
        tablePrivateMethods.analyColumnWidth();
        return tableMethods.refreshColumn(true);
      },
      handleUpdateDataQueue() {
        reactData.upDataFlag++;
      },
      handleRefreshColumnQueue() {
        reactData.reColumnFlag++;
      },
      preventEvent(evnt, type, args, next, end) {
        let evntList = interceptor2.get(type);
        if (!evntList.length && type === "event.clearEdit") {
          evntList = interceptor2.get("event.clearActived");
          if (true) {
            if (evntList.length) {
              warnLog("vxe.error.delEvent", ["event.clearActived", "event.clearEdit"]);
            }
          }
        }
        let rest;
        if (!evntList.some((func) => func(Object.assign({ $grid: $xeGrid, $table: $xeTable, $event: evnt }, args)) === false)) {
          if (next) {
            rest = next();
          }
        }
        if (end) {
          end();
        }
        return rest;
      },
      checkSelectionStatus() {
        const { treeConfig } = props;
        const { selectCheckboxMaps, treeIndeterminateMaps } = reactData;
        const { afterFullData } = internalData;
        const checkboxOpts = computeCheckboxOpts.value;
        const { checkField, checkStrictly, checkMethod } = checkboxOpts;
        const indeterminateField = checkboxOpts.indeterminateField || checkboxOpts.halfField;
        if (!checkStrictly) {
          const disableRows = [];
          const checkRows = [];
          let isAllResolve = false;
          let isAllSelected = false;
          let isIndeterminate = false;
          if (checkField) {
            isAllResolve = afterFullData.every(checkMethod ? (row) => {
              if (!checkMethod({ row })) {
                disableRows.push(row);
                return true;
              }
              if (import_xe_utils14.default.get(row, checkField)) {
                checkRows.push(row);
                return true;
              }
              return false;
            } : (row) => import_xe_utils14.default.get(row, checkField));
            isAllSelected = isAllResolve && afterFullData.length !== disableRows.length;
            if (treeConfig) {
              if (indeterminateField) {
                isIndeterminate = !isAllSelected && afterFullData.some((row) => import_xe_utils14.default.get(row, checkField) || import_xe_utils14.default.get(row, indeterminateField) || !!treeIndeterminateMaps[getRowid($xeTable, row)]);
              } else {
                isIndeterminate = !isAllSelected && afterFullData.some((row) => import_xe_utils14.default.get(row, checkField) || !!treeIndeterminateMaps[getRowid($xeTable, row)]);
              }
            } else {
              if (indeterminateField) {
                isIndeterminate = !isAllSelected && afterFullData.some((row) => import_xe_utils14.default.get(row, checkField) || import_xe_utils14.default.get(row, indeterminateField));
              } else {
                isIndeterminate = !isAllSelected && afterFullData.some((row) => import_xe_utils14.default.get(row, checkField));
              }
            }
          } else {
            isAllResolve = afterFullData.every(checkMethod ? (row) => {
              if (!checkMethod({ row })) {
                disableRows.push(row);
                return true;
              }
              if (selectCheckboxMaps[getRowid($xeTable, row)]) {
                checkRows.push(row);
                return true;
              }
              return false;
            } : (row) => selectCheckboxMaps[getRowid($xeTable, row)]);
            isAllSelected = isAllResolve && afterFullData.length !== disableRows.length;
            if (treeConfig) {
              isIndeterminate = !isAllSelected && afterFullData.some((row) => {
                const itemRid = getRowid($xeTable, row);
                return treeIndeterminateMaps[itemRid] || selectCheckboxMaps[itemRid];
              });
            } else {
              isIndeterminate = !isAllSelected && afterFullData.some((row) => selectCheckboxMaps[getRowid($xeTable, row)]);
            }
          }
          reactData.isAllSelected = isAllSelected;
          reactData.isIndeterminate = isIndeterminate;
        }
      },
      /**
       * 多行
       * 多选，行选中事件
       * value 选中true 不选false 半选-1
       */
      handleBatchSelectRows(rows, value, isForce) {
        const { treeConfig } = props;
        const { selectCheckboxMaps } = reactData;
        const selectRowMaps = Object.assign({}, selectCheckboxMaps);
        const checkboxOpts = computeCheckboxOpts.value;
        const { checkField, checkStrictly, checkMethod } = checkboxOpts;
        if (checkField) {
          if (treeConfig && !checkStrictly) {
            rows.forEach((row) => {
              tablePrivateMethods.handleSelectRow({ row }, value, isForce);
            });
          } else {
            rows.forEach((row) => {
              if (isForce || (!checkMethod || checkMethod({ row }))) {
                import_xe_utils14.default.set(row, checkField, value);
                handleCheckboxReserveRow(row, value);
              }
            });
          }
        } else {
          if (treeConfig && !checkStrictly) {
            rows.forEach((row) => {
              tablePrivateMethods.handleSelectRow({ row }, value, isForce);
            });
          } else {
            rows.forEach((row) => {
              const rowid = getRowid($xeTable, row);
              if (isForce || (!checkMethod || checkMethod({ row }))) {
                if (value) {
                  if (!selectRowMaps[rowid]) {
                    selectRowMaps[rowid] = row;
                  }
                } else {
                  if (selectRowMaps[rowid]) {
                    delete selectRowMaps[rowid];
                  }
                }
                handleCheckboxReserveRow(row, value);
              }
            });
          }
        }
        reactData.selectCheckboxMaps = selectRowMaps;
      },
      /**
       * 单行
       * 多选，行选中事件
       * value 选中true 不选false 半选-1
       */
      handleSelectRow({ row }, value, isForce) {
        const { treeConfig } = props;
        const { selectCheckboxMaps, treeIndeterminateMaps } = reactData;
        const selectRowMaps = Object.assign({}, selectCheckboxMaps);
        const { afterFullData } = internalData;
        const treeOpts = computeTreeOpts.value;
        const childrenField = treeOpts.children || treeOpts.childrenField;
        const checkboxOpts = computeCheckboxOpts.value;
        const { checkField, checkStrictly, checkMethod } = checkboxOpts;
        const indeterminateField = checkboxOpts.indeterminateField || checkboxOpts.halfField;
        const rowid = getRowid($xeTable, row);
        if (checkField) {
          if (treeConfig && !checkStrictly) {
            if (value === -1) {
              if (!treeIndeterminateMaps[rowid]) {
                if (indeterminateField) {
                  import_xe_utils14.default.set(row, indeterminateField, true);
                }
                treeIndeterminateMaps[rowid] = row;
              }
              import_xe_utils14.default.set(row, checkField, false);
            } else {
              import_xe_utils14.default.eachTree([row], (item) => {
                if ($xeTable.eqRow(item, row) || (isForce || (!checkMethod || checkMethod({ row: item })))) {
                  import_xe_utils14.default.set(item, checkField, value);
                  if (indeterminateField) {
                    import_xe_utils14.default.set(row, indeterminateField, false);
                  }
                  delete treeIndeterminateMaps[getRowid($xeTable, item)];
                  handleCheckboxReserveRow(row, value);
                }
              }, { children: childrenField });
            }
            const matchObj = import_xe_utils14.default.findTree(afterFullData, (item) => $xeTable.eqRow(item, row), { children: childrenField });
            if (matchObj && matchObj.parent) {
              let parentStatus;
              const vItems = [];
              const vItemMaps = {};
              if (!isForce && checkMethod) {
                matchObj.items.forEach((item) => {
                  if (checkMethod({ row: item })) {
                    const itemRid = getRowid($xeTable, item);
                    vItemMaps[itemRid] = item;
                    vItems.push(item);
                  }
                });
              } else {
                matchObj.items.forEach((item) => {
                  const itemRid = getRowid($xeTable, item);
                  vItemMaps[itemRid] = item;
                  vItems.push(item);
                });
              }
              const indeterminatesItem = import_xe_utils14.default.find(matchObj.items, (item) => !!treeIndeterminateMaps[getRowid($xeTable, item)]);
              if (indeterminatesItem) {
                parentStatus = -1;
              } else {
                const selectItems = [];
                matchObj.items.forEach((item) => {
                  if (import_xe_utils14.default.get(item, checkField)) {
                    selectItems.push(item);
                  }
                });
                parentStatus = selectItems.filter((item) => vItemMaps[getRowid($xeTable, item)]).length === vItems.length ? true : selectItems.length || value === -1 ? -1 : false;
              }
              reactData.selectCheckboxMaps = selectRowMaps;
              tablePrivateMethods.handleSelectRow({ row: matchObj.parent }, parentStatus, isForce);
              return;
            }
          } else {
            if (isForce || (!checkMethod || checkMethod({ row }))) {
              import_xe_utils14.default.set(row, checkField, value);
              handleCheckboxReserveRow(row, value);
            }
          }
        } else {
          if (treeConfig && !checkStrictly) {
            if (value === -1) {
              if (!treeIndeterminateMaps[rowid]) {
                if (indeterminateField) {
                  import_xe_utils14.default.set(row, indeterminateField, true);
                }
                treeIndeterminateMaps[rowid] = row;
              }
              if (selectRowMaps[rowid]) {
                delete selectRowMaps[rowid];
              }
            } else {
              import_xe_utils14.default.eachTree([row], (item) => {
                const itemRid = getRowid($xeTable, item);
                if ($xeTable.eqRow(item, row) || (isForce || (!checkMethod || checkMethod({ row: item })))) {
                  if (value) {
                    selectRowMaps[itemRid] = item;
                  } else {
                    if (selectRowMaps[itemRid]) {
                      delete selectRowMaps[itemRid];
                    }
                  }
                  if (indeterminateField) {
                    import_xe_utils14.default.set(row, indeterminateField, false);
                  }
                  delete treeIndeterminateMaps[getRowid($xeTable, item)];
                  handleCheckboxReserveRow(row, value);
                }
              }, { children: childrenField });
            }
            const matchObj = import_xe_utils14.default.findTree(afterFullData, (item) => $xeTable.eqRow(item, row), { children: childrenField });
            if (matchObj && matchObj.parent) {
              let parentStatus;
              const vItems = [];
              const vItemMaps = {};
              if (!isForce && checkMethod) {
                matchObj.items.forEach((item) => {
                  if (checkMethod({ row: item })) {
                    const itemRid = getRowid($xeTable, item);
                    vItemMaps[itemRid] = item;
                    vItems.push(item);
                  }
                });
              } else {
                matchObj.items.forEach((item) => {
                  const itemRid = getRowid($xeTable, item);
                  vItemMaps[itemRid] = item;
                  vItems.push(item);
                });
              }
              const indeterminatesItem = import_xe_utils14.default.find(matchObj.items, (item) => !!treeIndeterminateMaps[getRowid($xeTable, item)]);
              if (indeterminatesItem) {
                parentStatus = -1;
              } else {
                const selectItems = [];
                matchObj.items.forEach((item) => {
                  const itemRid = getRowid($xeTable, item);
                  if (selectRowMaps[itemRid]) {
                    selectItems.push(item);
                  }
                });
                parentStatus = selectItems.filter((item) => vItemMaps[getRowid($xeTable, item)]).length === vItems.length ? true : selectItems.length || value === -1 ? -1 : false;
              }
              reactData.selectCheckboxMaps = selectRowMaps;
              tablePrivateMethods.handleSelectRow({ row: matchObj.parent }, parentStatus, isForce);
              return;
            }
          } else {
            if (isForce || (!checkMethod || checkMethod({ row }))) {
              if (value) {
                if (!selectRowMaps[rowid]) {
                  selectRowMaps[rowid] = row;
                }
              } else {
                if (selectRowMaps[rowid]) {
                  delete selectRowMaps[rowid];
                }
              }
              handleCheckboxReserveRow(row, value);
            }
          }
        }
        reactData.selectCheckboxMaps = selectRowMaps;
      },
      triggerHeaderTitleEvent(evnt, iconParams, params) {
        const tipContent = iconParams.content || iconParams.message;
        if (tipContent) {
          const { tooltipStore } = reactData;
          const { column } = params;
          const content = getFuncText(tipContent);
          handleTargetEnterEvent(true);
          tooltipStore.row = null;
          tooltipStore.column = column;
          tooltipStore.visible = true;
          tooltipStore.currOpts = iconParams;
          nextTick(() => {
            const $tooltip = refTooltip.value;
            if ($tooltip && $tooltip.open) {
              $tooltip.open(evnt.currentTarget, content);
            }
          });
        }
      },
      /**
       * 触发表头 tooltip 事件
       */
      triggerHeaderTooltipEvent(evnt, params) {
        const { tooltipStore } = reactData;
        const { column } = params;
        const titleElem = evnt.currentTarget;
        handleTargetEnterEvent(true);
        if (tooltipStore.column !== column || !tooltipStore.visible) {
          handleTooltip(evnt, titleElem, titleElem, null, params);
        }
      },
      /**
       * 触发单元格 tooltip 事件
       */
      triggerBodyTooltipEvent(evnt, params) {
        const { editConfig } = props;
        const { editStore } = reactData;
        const { tooltipStore } = reactData;
        const editOpts = computeEditOpts.value;
        const { actived } = editStore;
        const { row, column } = params;
        const cell = evnt.currentTarget;
        handleTargetEnterEvent(tooltipStore.column !== column || tooltipStore.row !== row);
        if (column.editRender && isEnableConf(editConfig)) {
          if (editOpts.mode === "row" && actived.row === row) {
            return;
          }
          if (actived.row === row && actived.column === column) {
            return;
          }
        }
        if (tooltipStore.column !== column || tooltipStore.row !== row || !tooltipStore.visible) {
          let overflowElem;
          let tipElem;
          if (column.treeNode) {
            overflowElem = cell.querySelector(".vxe-tree-cell");
            if (column.type === "html") {
              tipElem = cell.querySelector(".vxe-cell--html");
            }
          } else {
            tipElem = cell.querySelector(column.type === "html" ? ".vxe-cell--html" : ".vxe-cell--label");
          }
          handleTooltip(evnt, cell, overflowElem || cell.children[0], tipElem, params);
        }
      },
      /**
       * 触发表尾 tooltip 事件
       */
      triggerFooterTooltipEvent(evnt, params) {
        const { column } = params;
        const { tooltipStore } = reactData;
        const cell = evnt.currentTarget;
        handleTargetEnterEvent(tooltipStore.column !== column || !!tooltipStore.row);
        if (tooltipStore.column !== column || !tooltipStore.visible) {
          handleTooltip(evnt, cell, cell.querySelector(".vxe-cell--item") || cell.children[0], null, params);
        }
      },
      handleTargetLeaveEvent() {
        const tooltipOpts = computeTooltipOpts.value;
        let $tooltip = refTooltip.value;
        if ($tooltip && $tooltip.setActived) {
          $tooltip.setActived(false);
        }
        if (tooltipOpts.enterable) {
          internalData.tooltipTimeout = setTimeout(() => {
            $tooltip = refTooltip.value;
            if ($tooltip && $tooltip.isActived && !$tooltip.isActived()) {
              tableMethods.closeTooltip();
            }
          }, tooltipOpts.leaveDelay);
        } else {
          tableMethods.closeTooltip();
        }
      },
      triggerHeaderCellClickEvent(evnt, params) {
        const { _lastResizeTime } = internalData;
        const sortOpts = computeSortOpts.value;
        const columnOpts = computeColumnOpts.value;
        const { column } = params;
        const cell = evnt.currentTarget;
        const triggerResizable = _lastResizeTime && _lastResizeTime > Date.now() - 300;
        const triggerSort = getEventTargetNode(evnt, cell, "vxe-cell--sort").flag;
        const triggerFilter = getEventTargetNode(evnt, cell, "vxe-cell--filter").flag;
        if (sortOpts.trigger === "cell" && !(triggerResizable || triggerSort || triggerFilter)) {
          tablePrivateMethods.triggerSortEvent(evnt, column, getNextSortOrder(column));
        }
        tableMethods.dispatchEvent("header-cell-click", Object.assign({ triggerResizable, triggerSort, triggerFilter, cell }, params), evnt);
        if (columnOpts.isCurrent || props.highlightCurrentColumn) {
          tablePrivateMethods.triggerCurrentColumnEvent(evnt, params);
        }
      },
      triggerHeaderCellDblclickEvent(evnt, params) {
        tableMethods.dispatchEvent("header-cell-dblclick", Object.assign({ cell: evnt.currentTarget }, params), evnt);
      },
      /**
       * 列点击事件
       * 如果是单击模式，则激活为编辑状态
       * 如果是双击模式，则单击后选中状态
       */
      triggerCellClickEvent(evnt, params) {
        const { highlightCurrentRow, editConfig } = props;
        const { editStore } = reactData;
        const expandOpts = computeExpandOpts.value;
        const editOpts = computeEditOpts.value;
        const treeOpts = computeTreeOpts.value;
        const radioOpts = computeRadioOpts.value;
        const checkboxOpts = computeCheckboxOpts.value;
        const keyboardOpts = computeKeyboardOpts.value;
        const rowOpts = computeRowOpts.value;
        const { actived, focused } = editStore;
        const { row, column } = params;
        const { type, treeNode } = column;
        const isRadioType = type === "radio";
        const isCheckboxType = type === "checkbox";
        const isExpandType = type === "expand";
        const cell = evnt.currentTarget;
        const triggerRadio = isRadioType && getEventTargetNode(evnt, cell, "vxe-cell--radio").flag;
        const triggerCheckbox = isCheckboxType && getEventTargetNode(evnt, cell, "vxe-cell--checkbox").flag;
        const triggerTreeNode = treeNode && getEventTargetNode(evnt, cell, "vxe-tree--btn-wrapper").flag;
        const triggerExpandNode = isExpandType && getEventTargetNode(evnt, cell, "vxe-table--expanded").flag;
        params = Object.assign({ cell, triggerRadio, triggerCheckbox, triggerTreeNode, triggerExpandNode }, params);
        if (!triggerCheckbox && !triggerRadio) {
          if (!triggerExpandNode && (expandOpts.trigger === "row" || isExpandType && expandOpts.trigger === "cell")) {
            tablePrivateMethods.triggerRowExpandEvent(evnt, params);
          }
          if (treeOpts.trigger === "row" || treeNode && treeOpts.trigger === "cell") {
            tablePrivateMethods.triggerTreeExpandEvent(evnt, params);
          }
        }
        if (!triggerTreeNode) {
          if (!triggerExpandNode) {
            if (rowOpts.isCurrent || highlightCurrentRow) {
              if (!triggerCheckbox && !triggerRadio) {
                tablePrivateMethods.triggerCurrentRowEvent(evnt, params);
              }
            }
            if (!triggerRadio && (radioOpts.trigger === "row" || isRadioType && radioOpts.trigger === "cell")) {
              tablePrivateMethods.triggerRadioRowEvent(evnt, params);
            }
            if (!triggerCheckbox && (checkboxOpts.trigger === "row" || isCheckboxType && checkboxOpts.trigger === "cell")) {
              tablePrivateMethods.handleToggleCheckRowEvent(evnt, params);
            }
          }
          if (isEnableConf(editConfig)) {
            if (keyboardOpts.arrowCursorLock && evnt && editOpts.mode === "cell" && evnt.target && /^input|textarea$/i.test(evnt.target.tagName)) {
              focused.column = column;
              focused.row = row;
            }
            if (editOpts.trigger === "manual") {
              if (actived.args && actived.row === row && column !== actived.column) {
                handleChangeCell(evnt, params);
              }
            } else if (!actived.args || row !== actived.row || column !== actived.column) {
              if (editOpts.trigger === "click") {
                handleChangeCell(evnt, params);
              } else if (editOpts.trigger === "dblclick") {
                if (editOpts.mode === "row" && actived.row === row) {
                  handleChangeCell(evnt, params);
                }
              }
            }
          }
        }
        tableMethods.dispatchEvent("cell-click", params, evnt);
      },
      /**
       * 列双击点击事件
       * 如果是双击模式，则激活为编辑状态
       */
      triggerCellDblclickEvent(evnt, params) {
        const { editConfig } = props;
        const { editStore } = reactData;
        const editOpts = computeEditOpts.value;
        const { actived } = editStore;
        const cell = evnt.currentTarget;
        params = Object.assign({ cell }, params);
        if (isEnableConf(editConfig) && editOpts.trigger === "dblclick") {
          if (!actived.args || evnt.currentTarget !== actived.args.cell) {
            if (editOpts.mode === "row") {
              checkValidate("blur").catch((e) => e).then(() => {
                $xeTable.handleEdit(params, evnt).then(() => checkValidate("change")).catch((e) => e);
              });
            } else if (editOpts.mode === "cell") {
              $xeTable.handleEdit(params, evnt).then(() => checkValidate("change")).catch((e) => e);
            }
          }
        }
        tableMethods.dispatchEvent("cell-dblclick", params, evnt);
      },
      handleToggleCheckRowEvent(evnt, params) {
        const { selectCheckboxMaps } = reactData;
        const checkboxOpts = computeCheckboxOpts.value;
        const { checkField, trigger } = checkboxOpts;
        const { row } = params;
        if (trigger === "manual") {
          return;
        }
        let value = false;
        if (checkField) {
          value = !import_xe_utils14.default.get(row, checkField);
        } else {
          value = !selectCheckboxMaps[getRowid($xeTable, row)];
        }
        if (evnt) {
          tablePrivateMethods.triggerCheckRowEvent(evnt, params, value);
        } else {
          tablePrivateMethods.handleSelectRow(params, value);
          tablePrivateMethods.checkSelectionStatus();
        }
      },
      triggerCheckRowEvent(evnt, params, value) {
        const checkboxOpts = computeCheckboxOpts.value;
        const { row } = params;
        const { afterFullData } = internalData;
        const { checkMethod, trigger } = checkboxOpts;
        if (trigger === "manual") {
          return;
        }
        evnt.stopPropagation();
        if (checkboxOpts.isShiftKey && evnt.shiftKey && !props.treeConfig) {
          const checkboxRecords = tableMethods.getCheckboxRecords();
          if (checkboxRecords.length) {
            const firstRow = checkboxRecords[0];
            const _rowIndex = tableMethods.getVTRowIndex(row);
            const _firstRowIndex = tableMethods.getVTRowIndex(firstRow);
            if (_rowIndex !== _firstRowIndex) {
              tableMethods.setAllCheckboxRow(false);
              const rangeRows = _rowIndex < _firstRowIndex ? afterFullData.slice(_rowIndex, _firstRowIndex + 1) : afterFullData.slice(_firstRowIndex, _rowIndex + 1);
              handleCheckedCheckboxRow(rangeRows, true, false);
              tableMethods.dispatchEvent("checkbox-range-select", Object.assign({ rangeRecords: rangeRows }, params), evnt);
              return;
            }
          }
        }
        if (!checkMethod || checkMethod({ row })) {
          tablePrivateMethods.handleSelectRow(params, value);
          tablePrivateMethods.checkSelectionStatus();
          tableMethods.dispatchEvent("checkbox-change", Object.assign({
            records: tableMethods.getCheckboxRecords(),
            reserves: tableMethods.getCheckboxReserveRecords(),
            indeterminates: tableMethods.getCheckboxIndeterminateRecords(),
            checked: value
          }, params), evnt);
        }
      },
      /**
       * 多选，选中所有事件
       */
      triggerCheckAllEvent(evnt, value) {
        const checkboxOpts = computeCheckboxOpts.value;
        const { trigger } = checkboxOpts;
        if (trigger === "manual") {
          return;
        }
        if (evnt) {
          evnt.stopPropagation();
        }
        handleCheckAllEvent(evnt, value);
      },
      /**
       * 单选，行选中事件
       */
      triggerRadioRowEvent(evnt, params) {
        const { selectRadioRow: oldValue } = reactData;
        const { row } = params;
        const radioOpts = computeRadioOpts.value;
        const { trigger } = radioOpts;
        if (trigger === "manual") {
          return;
        }
        evnt.stopPropagation();
        let newValue = row;
        let isChange = oldValue !== newValue;
        if (isChange) {
          handleCheckedRadioRow(newValue);
        } else if (!radioOpts.strict) {
          isChange = oldValue === newValue;
          if (isChange) {
            newValue = null;
            tableMethods.clearRadioRow();
          }
        }
        if (isChange) {
          tableMethods.dispatchEvent("radio-change", Object.assign({ oldValue, newValue }, params), evnt);
        }
      },
      triggerCurrentColumnEvent(evnt, params) {
        const columnOpts = computeColumnOpts;
        const { currentMethod } = columnOpts.value;
        const { column } = params;
        if (!currentMethod || currentMethod({ column })) {
          tableMethods.setCurrentColumn(column);
        }
      },
      triggerCurrentRowEvent(evnt, params) {
        const { currentRow: oldValue } = reactData;
        const rowOpts = computeRowOpts;
        const { currentMethod } = rowOpts.value;
        const { row: newValue } = params;
        const isChange = oldValue !== newValue;
        if (!currentMethod || currentMethod({ row: newValue })) {
          tableMethods.setCurrentRow(newValue);
          if (isChange) {
            tableMethods.dispatchEvent("current-change", Object.assign({ oldValue, newValue }, params), evnt);
          }
        }
      },
      /**
       * 展开行事件
       */
      triggerRowExpandEvent(evnt, params) {
        const { rowExpandLazyLoadedMaps, expandColumn: column } = reactData;
        const expandOpts = computeExpandOpts.value;
        const { row } = params;
        const { lazy, trigger } = expandOpts;
        if (trigger === "manual") {
          return;
        }
        evnt.stopPropagation();
        const rowid = getRowid($xeTable, row);
        if (!lazy || !rowExpandLazyLoadedMaps[rowid]) {
          const expanded = !tableMethods.isRowExpandByRow(row);
          const columnIndex = tableMethods.getColumnIndex(column);
          const $columnIndex = tableMethods.getVMColumnIndex(column);
          tableMethods.setRowExpand(row, expanded);
          tableMethods.dispatchEvent("toggle-row-expand", {
            expanded,
            column,
            columnIndex,
            $columnIndex,
            row,
            rowIndex: tableMethods.getRowIndex(row),
            $rowIndex: tableMethods.getVMRowIndex(row)
          }, evnt);
        }
      },
      /**
       * 展开树节点事件
       */
      triggerTreeExpandEvent(evnt, params) {
        const { treeExpandLazyLoadedMaps } = reactData;
        const treeOpts = computeTreeOpts.value;
        const { row, column } = params;
        const { lazy, trigger } = treeOpts;
        if (trigger === "manual") {
          return;
        }
        evnt.stopPropagation();
        const rowid = getRowid($xeTable, row);
        if (!lazy || !treeExpandLazyLoadedMaps[rowid]) {
          const expanded = !tableMethods.isTreeExpandByRow(row);
          const columnIndex = tableMethods.getColumnIndex(column);
          const $columnIndex = tableMethods.getVMColumnIndex(column);
          tableMethods.setTreeExpand(row, expanded);
          tableMethods.dispatchEvent("toggle-tree-expand", { expanded, column, columnIndex, $columnIndex, row }, evnt);
        }
      },
      /**
       * 点击排序事件
       */
      triggerSortEvent(evnt, column, order) {
        const { mouseConfig } = props;
        const sortOpts = computeSortOpts.value;
        const mouseOpts = computeMouseOpts.value;
        const { field, sortable } = column;
        if (sortable) {
          if (!order || column.order === order) {
            tableMethods.clearSort(sortOpts.multiple ? column : null);
          } else {
            tableMethods.sort({ field, order });
          }
          const params = { $table: $xeTable, $event: evnt, column, field, property: field, order: column.order, sortList: tableMethods.getSortColumns(), sortTime: column.sortTime };
          if (mouseConfig && mouseOpts.area && $xeTable.handleSortEvent) {
            $xeTable.handleSortEvent(evnt, params);
          }
          tableMethods.dispatchEvent("sort-change", params, evnt);
        }
      },
      /**
       * 横向 X 可视渲染事件处理
       */
      triggerScrollXEvent() {
        loadScrollXData();
      },
      /**
       * 纵向 Y 可视渲染事件处理
       */
      triggerScrollYEvent(evnt) {
        const { scrollYStore } = internalData;
        const { adaptive, offsetSize, visibleSize } = scrollYStore;
        if (isWebkit && adaptive && offsetSize * 2 + visibleSize <= 40) {
          loadScrollYData(evnt);
        } else {
          debounceScrollY(evnt);
        }
      },
      /**
       * 对于树形结构中，可以直接滚动到指定深层节点中
       * 对于某些特定的场景可能会用到，比如定位到某一节点
       * @param {Row} row 行对象
       */
      scrollToTreeRow(row) {
        const { treeConfig } = props;
        const { tableFullData } = internalData;
        const rests = [];
        if (treeConfig) {
          const treeOpts = computeTreeOpts.value;
          const childrenField = treeOpts.children || treeOpts.childrenField;
          const matchObj = import_xe_utils14.default.findTree(tableFullData, (item) => $xeTable.eqRow(item, row), { children: childrenField });
          if (matchObj) {
            const nodes = matchObj.nodes;
            nodes.forEach((row2, index) => {
              if (index < nodes.length - 1 && !tableMethods.isTreeExpandByRow(row2)) {
                rests.push(tableMethods.setTreeExpand(row2, true));
              }
            });
          }
        }
        return Promise.all(rests).then(() => rowToVisible($xeTable, row));
      },
      updateScrollYStatus,
      // 更新横向 X 可视渲染上下剩余空间大小
      updateScrollXSpace() {
        const { isGroup, scrollXLoad, scrollbarWidth } = reactData;
        const { visibleColumn, scrollXStore, elemStore, tableWidth } = internalData;
        const tableHeader = refTableHeader.value;
        const tableBody = refTableBody.value;
        const tableFooter = refTableFooter.value;
        const tableBodyElem = tableBody ? tableBody.$el : null;
        if (tableBodyElem) {
          const tableHeaderElem = tableHeader ? tableHeader.$el : null;
          const tableFooterElem = tableFooter ? tableFooter.$el : null;
          const headerElem = tableHeaderElem ? tableHeaderElem.querySelector(".vxe-table--header") : null;
          const bodyElem = tableBodyElem.querySelector(".vxe-table--body");
          const footerElem = tableFooterElem ? tableFooterElem.querySelector(".vxe-table--footer") : null;
          const leftSpaceWidth = visibleColumn.slice(0, scrollXStore.startIndex).reduce((previous, column) => previous + column.renderWidth, 0);
          let marginLeft = "";
          if (scrollXLoad) {
            marginLeft = `${leftSpaceWidth}px`;
          }
          if (headerElem) {
            headerElem.style.marginLeft = isGroup ? "" : marginLeft;
          }
          bodyElem.style.marginLeft = marginLeft;
          if (footerElem) {
            footerElem.style.marginLeft = marginLeft;
          }
          const containerList = ["main"];
          containerList.forEach((name) => {
            const layoutList = ["header", "body", "footer"];
            layoutList.forEach((layout) => {
              const xSpaceRef = elemStore[`${name}-${layout}-xSpace`];
              const xSpaceElem = xSpaceRef ? xSpaceRef.value : null;
              if (xSpaceElem) {
                xSpaceElem.style.width = scrollXLoad ? `${tableWidth + (layout === "header" ? scrollbarWidth : 0)}px` : "";
              }
            });
          });
          nextTick(updateStyle);
        }
      },
      // 更新纵向 Y 可视渲染上下剩余空间大小
      updateScrollYSpace() {
        const { scrollYLoad } = reactData;
        const { scrollYStore, elemStore, afterFullData } = internalData;
        const { startIndex, rowHeight } = scrollYStore;
        const bodyHeight = afterFullData.length * rowHeight;
        const topSpaceHeight = Math.max(0, startIndex * rowHeight);
        const containerList = ["main", "left", "right"];
        let marginTop = "";
        let ySpaceHeight = "";
        if (scrollYLoad) {
          marginTop = `${topSpaceHeight}px`;
          ySpaceHeight = `${bodyHeight}px`;
        }
        containerList.forEach((name) => {
          const layoutList = ["header", "body", "footer"];
          const tableRef = elemStore[`${name}-body-table`];
          const tableElem = tableRef ? tableRef.value : null;
          if (tableElem) {
            tableElem.style.marginTop = marginTop;
          }
          layoutList.forEach((layout) => {
            const ySpaceRef = elemStore[`${name}-${layout}-ySpace`];
            const ySpaceElem = ySpaceRef ? ySpaceRef.value : null;
            if (ySpaceElem) {
              ySpaceElem.style.height = ySpaceHeight;
            }
          });
        });
        nextTick(updateStyle);
      },
      updateScrollXData() {
        nextTick(() => {
          handleTableColumn();
          tablePrivateMethods.updateScrollXSpace();
        });
      },
      updateScrollYData() {
        nextTick(() => {
          tablePrivateMethods.handleTableData();
          tablePrivateMethods.updateScrollYSpace();
        });
      },
      /**
       * 处理固定列的显示状态
       */
      checkScrolling() {
        const leftContainerElem = refLeftContainer.value;
        const rightContainerElem = refRightContainer.value;
        const tableBody = refTableBody.value;
        const bodyElem = tableBody ? tableBody.$el : null;
        if (bodyElem) {
          if (leftContainerElem) {
            if (bodyElem.scrollLeft > 0) {
              addClass(leftContainerElem, "scrolling--middle");
            } else {
              removeClass(leftContainerElem, "scrolling--middle");
            }
          }
          if (rightContainerElem) {
            if (bodyElem.clientWidth < bodyElem.scrollWidth - Math.ceil(bodyElem.scrollLeft)) {
              addClass(rightContainerElem, "scrolling--middle");
            } else {
              removeClass(rightContainerElem, "scrolling--middle");
            }
          }
        }
      },
      updateZindex() {
        if (props.zIndex) {
          internalData.tZindex = props.zIndex;
        } else if (internalData.tZindex < getLastZIndex()) {
          internalData.tZindex = nextZIndex();
        }
      },
      handleCheckedCheckboxRow,
      /**
       * 行 hover 事件
       */
      triggerHoverEvent(evnt, { row }) {
        tablePrivateMethods.setHoverRow(row);
      },
      setHoverRow(row) {
        const rowid = getRowid($xeTable, row);
        const el = refElem.value;
        tablePrivateMethods.clearHoverRow();
        if (el) {
          import_xe_utils14.default.arrayEach(el.querySelectorAll(`[rowid="${rowid}"]`), (elem) => addClass(elem, "row--hover"));
        }
        internalData.hoverRow = row;
      },
      clearHoverRow() {
        const el = refElem.value;
        if (el) {
          import_xe_utils14.default.arrayEach(el.querySelectorAll(".vxe-body--row.row--hover"), (elem) => removeClass(elem, "row--hover"));
        }
        internalData.hoverRow = null;
      },
      /**
       * 已废弃，被 getCellElement 替换
       * @deprecated
       */
      getCell(row, column) {
        return tableMethods.getCellElement(row, column);
      },
      findRowIndexOf(list, row) {
        return row ? import_xe_utils14.default.findIndexOf(list, (item) => $xeTable.eqRow(item, row)) : -1;
      },
      eqRow(row1, row2) {
        if (row1 && row2) {
          if (row1 === row2) {
            return true;
          }
          return getRowid($xeTable, row1) === getRowid($xeTable, row2);
        }
        return false;
      }
    };
    if (true) {
      "openExport,openPrint,exportData,openImport,importData,saveFile,readFile,importByFile,print".split(",").forEach((name) => {
        $xeTable[name] = function() {
          errLog("vxe.error.reqModule", ["VxeTableExportModule"]);
        };
      });
      "clearValidate,fullValidate,validate".split(",").forEach((name) => {
        $xeTable[name] = function() {
          errLog("vxe.error.reqModule", ["VxeTableValidatorModule"]);
        };
      });
    }
    Object.assign($xeTable, tableMethods, tablePrivateMethods);
    const renderFixed = (fixedType) => {
      const { showHeader, showFooter } = props;
      const { tableData, tableColumn, tableGroupColumn, columnStore, footerTableData } = reactData;
      const isFixedLeft = fixedType === "left";
      const fixedColumn = isFixedLeft ? columnStore.leftList : columnStore.rightList;
      return h("div", {
        ref: isFixedLeft ? refLeftContainer : refRightContainer,
        class: `vxe-table--fixed-${fixedType}-wrapper`
      }, [
        showHeader ? h(header_default, {
          ref: isFixedLeft ? refTableLeftHeader : refTableRightHeader,
          fixedType,
          tableData,
          tableColumn,
          tableGroupColumn,
          fixedColumn
        }) : createCommentVNode(),
        h(body_default, {
          ref: isFixedLeft ? refTableLeftBody : refTableRightBody,
          fixedType,
          tableData,
          tableColumn,
          fixedColumn
        }),
        showFooter ? h(footer_default, {
          ref: isFixedLeft ? refTableLeftFooter : refTableRightFooter,
          footerTableData,
          tableColumn,
          fixedColumn,
          fixedType
        }) : createCommentVNode()
      ]);
    };
    const renderEmptyContenet = () => {
      const emptyOpts = computeEmptyOpts.value;
      const params = { $table: $xeTable };
      if (slots.empty) {
        return slots.empty(params);
      } else {
        const compConf = emptyOpts.name ? renderer5.get(emptyOpts.name) : null;
        const rtEmptyView = compConf ? compConf.renderTableEmpty || compConf.renderTableEmptyView || compConf.renderEmpty : null;
        if (rtEmptyView) {
          return getSlotVNs(rtEmptyView(emptyOpts, params));
        }
      }
      return getFuncText(props.emptyText) || getI18n9("vxe.table.emptyText");
    };
    function handleUupdateResize() {
      const el = refElem.value;
      if (el && el.clientWidth && el.clientHeight) {
        tableMethods.recalculate();
      }
    }
    const renderVN = () => {
      const { loading, stripe, showHeader, height, treeConfig, mouseConfig, showFooter, highlightCell, highlightHoverRow, highlightHoverColumn, editConfig, editRules } = props;
      const { isCalcColumn, isGroup, overflowX, overflowY, scrollXLoad, scrollYLoad, scrollbarHeight, tableData, tableColumn, tableGroupColumn, footerTableData, initStore, columnStore, filterStore, customStore, tooltipStore } = reactData;
      const { leftList, rightList } = columnStore;
      const loadingSlot = slots.loading;
      const tipConfig = computeTipConfig.value;
      const validOpts = computeValidOpts.value;
      const checkboxOpts = computeCheckboxOpts.value;
      const treeOpts = computeTreeOpts.value;
      const rowOpts = computeRowOpts.value;
      const columnOpts = computeColumnOpts.value;
      const vSize = computeSize.value;
      const tableBorder = computeTableBorder.value;
      const mouseOpts = computeMouseOpts.value;
      const validTipOpts = computeValidTipOpts.value;
      const loadingOpts = computeLoadingOpts.value;
      const isMenu = computeIsMenu.value;
      const currLoading = reactData._isLoading || loading;
      return h("div", {
        ref: refElem,
        class: ["vxe-table", "vxe-table--render-default", `tid_${xID}`, `border--${tableBorder}`, {
          [`size--${vSize}`]: vSize,
          [`valid-msg--${validOpts.msgMode}`]: !!editRules,
          "vxe-editable": !!editConfig,
          "old-cell-valid": editRules && getConfig3().cellVaildMode === "obsolete",
          "cell--highlight": highlightCell,
          "cell--selected": mouseConfig && mouseOpts.selected,
          "cell--area": mouseConfig && mouseOpts.area,
          "row--highlight": rowOpts.isHover || highlightHoverRow,
          "column--highlight": columnOpts.isHover || highlightHoverColumn,
          "checkbox--range": checkboxOpts.range,
          "column--calc": isCalcColumn,
          "is--header": showHeader,
          "is--footer": showFooter,
          "is--group": isGroup,
          "is--tree-line": treeConfig && (treeOpts.showLine || treeOpts.line),
          "is--fixed-left": leftList.length,
          "is--fixed-right": rightList.length,
          "is--animat": !!props.animat,
          "is--padding": props.padding,
          "is--round": props.round,
          "is--stripe": !treeConfig && stripe,
          "is--loading": currLoading,
          "is--empty": !currLoading && !tableData.length,
          "is--scroll-y": overflowY,
          "is--scroll-x": overflowX,
          "is--virtual-x": scrollXLoad,
          "is--virtual-y": scrollYLoad
        }],
        spellcheck: false,
        onKeydown: keydownEvent
      }, [
        /**
         * 隐藏列
         */
        h("div", {
          class: "vxe-table-slots"
        }, slots.default ? slots.default({}) : []),
        h("div", {
          class: "vxe-table--render-wrapper"
        }, [
          h("div", {
            class: "vxe-table--main-wrapper"
          }, [
            /**
             * 表头
             */
            showHeader ? h(header_default, {
              ref: refTableHeader,
              tableData,
              tableColumn,
              tableGroupColumn
            }) : createCommentVNode(),
            /**
             * 表体
             */
            h(body_default, {
              ref: refTableBody,
              tableData,
              tableColumn
            }),
            /**
             * 表尾
             */
            showFooter ? h(footer_default, {
              ref: refTableFooter,
              footerTableData,
              tableColumn
            }) : createCommentVNode()
          ]),
          h("div", {
            class: "vxe-table--fixed-wrapper"
          }, [
            /**
             * 左侧固定区域
             */
            leftList && leftList.length && overflowX ? renderFixed("left") : createCommentVNode(),
            /**
             * 右侧固定区域
             */
            rightList && rightList.length && overflowX ? renderFixed("right") : createCommentVNode()
          ])
        ]),
        /**
         * 空数据
         */
        h("div", {
          ref: refEmptyPlaceholder,
          class: "vxe-table--empty-placeholder"
        }, [
          h("div", {
            class: "vxe-table--empty-content"
          }, renderEmptyContenet())
        ]),
        /**
         * 边框线
         */
        h("div", {
          class: "vxe-table--border-line"
        }),
        /**
         * 列宽线
         */
        h("div", {
          ref: refCellResizeBar,
          class: "vxe-table--resizable-bar",
          style: overflowX ? {
            "padding-bottom": `${scrollbarHeight}px`
          } : null
        }),
        /**
         * 加载中
         */
        VxeUILoadingComponent ? h(VxeUILoadingComponent, {
          class: "vxe-table--loading",
          modelValue: currLoading,
          icon: loadingOpts.icon,
          text: loadingOpts.text
        }, loadingSlot ? {
          default: () => loadingSlot({ $table: $xeTable, $grid: $xeGrid })
        } : {}) : createCommentVNode(),
        /**
         * 自定义列
         */
        initStore.custom ? h(panel_default, {
          ref: refTableCustom,
          customStore
        }) : createCommentVNode(),
        /**
         * 筛选
         */
        initStore.filter ? h(panel_default2, {
          ref: refTableFilter,
          filterStore
        }) : createCommentVNode(),
        /**
         * 导入
         */
        initStore.import && props.importConfig ? h(import_panel_default, {
          defaultOptions: reactData.importParams,
          storeData: reactData.importStore
        }) : createCommentVNode(),
        /**
         * 导出
         */
        initStore.export && (props.exportConfig || props.printConfig) ? h(export_panel_default, {
          defaultOptions: reactData.exportParams,
          storeData: reactData.exportStore
        }) : createCommentVNode(),
        /**
         * 快捷菜单
         */
        isMenu ? h(panel_default3, {
          ref: refTableMenu
        }) : createCommentVNode(),
        /**
         * 提示相关
         */
        VxeUITooltipComponent ? h("div", {}, [
          /**
           * 通用提示
           */
          h(VxeUITooltipComponent, {
            ref: refCommTooltip,
            isArrow: false,
            enterable: false
          }),
          /**
            * 工具提示
            */
          h(VxeUITooltipComponent, Object.assign({
            ref: refTooltip
          }, tipConfig, tooltipStore.currOpts)),
          /**
            * 校验提示
            */
          props.editRules && validOpts.showMessage && (validOpts.message === "default" ? !height : validOpts.message === "tooltip") ? h(VxeUITooltipComponent, Object.assign({ ref: refValidTooltip, class: [{
            "old-cell-valid": editRules && getConfig3().cellVaildMode === "obsolete"
          }, "vxe-table--valid-error"] }, validOpts.message === "tooltip" || tableData.length === 1 ? validTipOpts : {})) : createCommentVNode()
        ]) : createCommentVNode()
      ]);
    };
    const dataFlag = ref(0);
    watch(() => props.data ? props.data.length : -1, () => {
      dataFlag.value++;
    });
    watch(() => props.data, () => {
      dataFlag.value++;
    });
    watch(dataFlag, () => {
      const { inited, initStatus } = internalData;
      loadTableData(props.data || []).then(() => {
        const { scrollXLoad, scrollYLoad, expandColumn } = reactData;
        internalData.inited = true;
        internalData.initStatus = true;
        if (!initStatus) {
          handleLoadDefaults();
        }
        if (!inited) {
          handleInitDefaults();
        }
        if (true) {
          if ((scrollXLoad || scrollYLoad) && expandColumn) {
            warnLog("vxe.error.scrollErrProp", ["column.type=expand"]);
          }
        }
        tableMethods.recalculate();
      });
    });
    const staticColumnFlag = ref(0);
    watch(() => reactData.staticColumns.length, () => {
      staticColumnFlag.value++;
    });
    watch(() => reactData.staticColumns, () => {
      staticColumnFlag.value++;
    });
    watch(staticColumnFlag, () => {
      handleColumn(reactData.staticColumns);
    });
    const tableColumnFlag = ref(0);
    watch(() => reactData.tableColumn.length, () => {
      tableColumnFlag.value++;
    });
    watch(() => reactData.tableColumn, () => {
      tableColumnFlag.value++;
    });
    watch(tableColumnFlag, () => {
      tablePrivateMethods.analyColumnWidth();
    });
    watch(() => reactData.upDataFlag, () => {
      nextTick(() => {
        tableMethods.updateData();
      });
    });
    watch(() => reactData.reColumnFlag, () => {
      nextTick(() => {
        tableMethods.refreshColumn();
      });
    });
    watch(() => props.showHeader, () => {
      nextTick(() => {
        tableMethods.recalculate(true).then(() => tableMethods.refreshScroll());
      });
    });
    watch(() => props.showFooter, () => {
      nextTick(() => {
        tableMethods.recalculate(true).then(() => tableMethods.refreshScroll());
      });
    });
    const footFlag = ref(0);
    watch(() => props.footerData ? props.footerData.length : -1, () => {
      footFlag.value++;
    });
    watch(() => props.footerData, () => {
      footFlag.value++;
    });
    watch(footFlag, () => {
      tableMethods.updateFooter();
    });
    watch(() => props.height, () => {
      nextTick(() => tableMethods.recalculate(true));
    });
    watch(() => props.maxHeight, () => {
      nextTick(() => tableMethods.recalculate(true));
    });
    watch(() => props.syncResize, (value) => {
      if (value) {
        handleUupdateResize();
        nextTick(() => {
          handleUupdateResize();
          setTimeout(() => handleUupdateResize());
        });
      }
    });
    const mergeCellFlag = ref(0);
    watch(() => props.mergeCells ? props.mergeCells.length : -1, () => {
      mergeCellFlag.value++;
    });
    watch(() => props.mergeCells, () => {
      mergeCellFlag.value++;
    });
    watch(mergeCellFlag, () => {
      tableMethods.clearMergeCells();
      nextTick(() => {
        if (props.mergeCells) {
          tableMethods.setMergeCells(props.mergeCells);
        }
      });
    });
    const mergeFooterItemFlag = ref(0);
    watch(() => props.mergeFooterItems ? props.mergeFooterItems.length : -1, () => {
      mergeFooterItemFlag.value++;
    });
    watch(() => props.mergeFooterItems, () => {
      mergeFooterItemFlag.value++;
    });
    watch(mergeFooterItemFlag, () => {
      tableMethods.clearMergeFooterItems();
      nextTick(() => {
        if (props.mergeFooterItems) {
          tableMethods.setMergeFooterItems(props.mergeFooterItems);
        }
      });
    });
    if ($xeTabs) {
      watch(() => $xeTabs ? $xeTabs.reactData.resizeFlag : null, () => {
        handleGlobalResizeEvent();
      });
    }
    hooks2.forEach((options) => {
      const { setupTable } = options;
      if (setupTable) {
        const hookRest = setupTable($xeTable);
        if (hookRest && import_xe_utils14.default.isObject(hookRest)) {
          Object.assign($xeTable, hookRest);
        }
      }
    });
    tablePrivateMethods.preventEvent(null, "created", { $table: $xeTable });
    let resizeObserver;
    onActivated(() => {
      tableMethods.recalculate().then(() => tableMethods.refreshScroll());
      tablePrivateMethods.preventEvent(null, "activated", { $table: $xeTable });
    });
    onDeactivated(() => {
      internalData.isActivated = false;
      tablePrivateMethods.preventEvent(null, "deactivated", { $table: $xeTable });
    });
    onMounted(() => {
      nextTick(() => {
        const { data, treeConfig, showOverflow } = props;
        const { scrollXStore, scrollYStore } = internalData;
        const sYOpts = computeSYOpts.value;
        const editOpts = computeEditOpts.value;
        const treeOpts = computeTreeOpts.value;
        const radioOpts = computeRadioOpts.value;
        const checkboxOpts = computeCheckboxOpts.value;
        const expandOpts = computeExpandOpts.value;
        const rowOpts = computeRowOpts.value;
        if (true) {
          if (props.rowId) {
            warnLog("vxe.error.delProp", ["row-id", "row-config.keyField"]);
          }
          if (props.rowKey) {
            warnLog("vxe.error.delProp", ["row-key", "row-config.useKey"]);
          }
          if (props.columnKey) {
            warnLog("vxe.error.delProp", ["column-id", "column-config.useKey"]);
          }
          if (!(props.rowId || rowOpts.keyField) && (checkboxOpts.reserve || checkboxOpts.checkRowKeys || radioOpts.reserve || radioOpts.checkRowKey || expandOpts.expandRowKeys || treeOpts.expandRowKeys)) {
            warnLog("vxe.error.reqProp", ["row-config.keyField"]);
          }
          if (props.editConfig && (editOpts.showStatus || editOpts.showUpdateStatus || editOpts.showInsertStatus) && !props.keepSource) {
            warnLog("vxe.error.reqProp", ["keep-source"]);
          }
          if (treeConfig && (treeOpts.showLine || treeOpts.line) && (!(props.rowKey || rowOpts.useKey) || !showOverflow)) {
            warnLog("vxe.error.reqProp", ["row-config.useKey | show-overflow"]);
          }
          if (treeConfig && props.stripe) {
            warnLog("vxe.error.noTree", ["stripe"]);
          }
          if (props.showFooter && !(props.footerMethod || props.footerData)) {
            warnLog("vxe.error.reqProp", ["footer-data | footer-method"]);
          }
          const { exportConfig, importConfig } = props;
          const exportOpts = computeExportOpts.value;
          const importOpts = computeImportOpts.value;
          if (importConfig && importOpts.types && !importOpts.importMethod && !import_xe_utils14.default.includeArrays(import_xe_utils14.default.keys(importOpts._typeMaps), importOpts.types)) {
            warnLog("vxe.error.errProp", [`export-config.types=${importOpts.types.join(",")}`, importOpts.types.filter((type) => import_xe_utils14.default.includes(import_xe_utils14.default.keys(importOpts._typeMaps), type)).join(",") || import_xe_utils14.default.keys(importOpts._typeMaps).join(",")]);
          }
          if (exportConfig && exportOpts.types && !exportOpts.exportMethod && !import_xe_utils14.default.includeArrays(import_xe_utils14.default.keys(exportOpts._typeMaps), exportOpts.types)) {
            warnLog("vxe.error.errProp", [`export-config.types=${exportOpts.types.join(",")}`, exportOpts.types.filter((type) => import_xe_utils14.default.includes(import_xe_utils14.default.keys(exportOpts._typeMaps), type)).join(",") || import_xe_utils14.default.keys(exportOpts._typeMaps).join(",")]);
          }
        }
        if (true) {
          const customOpts = computeCustomOpts.value;
          const mouseOpts = computeMouseOpts.value;
          const rowOpts2 = computeRowOpts.value;
          if (!props.id && props.customConfig && (customOpts.storage === true || customOpts.storage && customOpts.storage.resizable || customOpts.storage && customOpts.storage.visible)) {
            errLog("vxe.error.reqProp", ["id"]);
          }
          if (props.treeConfig && checkboxOpts.range) {
            errLog("vxe.error.noTree", ["checkbox-config.range"]);
          }
          if (rowOpts2.height && !props.showOverflow) {
            warnLog("vxe.error.notProp", ["table.show-overflow"]);
          }
          if (!$xeTable.handleUpdateCellAreas) {
            if (props.clipConfig) {
              warnLog("vxe.error.notProp", ["clip-config"]);
            }
            if (props.fnrConfig) {
              warnLog("vxe.error.notProp", ["fnr-config"]);
            }
            if (mouseOpts.area) {
              errLog("vxe.error.notProp", ["mouse-config.area"]);
              return;
            }
          }
          if (props.treeConfig && treeOpts.children) {
            warnLog("vxe.error.delProp", ["tree-config.children", "tree-config.childrenField"]);
          }
          if (props.treeConfig && treeOpts.line) {
            warnLog("vxe.error.delProp", ["tree-config.line", "tree-config.showLine"]);
          }
          if (mouseOpts.area && mouseOpts.selected) {
            warnLog("vxe.error.errConflicts", ["mouse-config.area", "mouse-config.selected"]);
          }
          if (props.treeConfig && mouseOpts.area) {
            errLog("vxe.error.noTree", ["mouse-config.area"]);
          }
          if (props.editConfig && editOpts.activeMethod) {
            warnLog("vxe.error.delProp", ["edit-config.activeMethod", "edit-config.beforeEditMethod"]);
          }
          if (props.treeConfig && checkboxOpts.isShiftKey) {
            errLog("vxe.error.errConflicts", ["tree-config", "checkbox-config.isShiftKey"]);
          }
          if (checkboxOpts.halfField) {
            warnLog("vxe.error.delProp", ["checkbox-config.halfField", "checkbox-config.indeterminateField"]);
          }
        }
        if (true) {
          if (props.editConfig && !$xeTable.insert) {
            errLog("vxe.error.reqModule", ["Edit"]);
          }
          if (props.editRules && !$xeTable.validate) {
            errLog("vxe.error.reqModule", ["Validator"]);
          }
          if ((checkboxOpts.range || props.keyboardConfig || props.mouseConfig) && !$xeTable.triggerCellMousedownEvent) {
            errLog("vxe.error.reqModule", ["Keyboard"]);
          }
          if ((props.printConfig || props.importConfig || props.exportConfig) && !$xeTable.exportData) {
            errLog("vxe.error.reqModule", ["Export"]);
          }
        }
        Object.assign(scrollYStore, {
          startIndex: 0,
          endIndex: 0,
          visibleSize: 0,
          adaptive: sYOpts.adaptive !== false
        });
        Object.assign(scrollXStore, {
          startIndex: 0,
          endIndex: 0,
          visibleSize: 0
        });
        loadTableData(data || []).then(() => {
          if (data && data.length) {
            internalData.inited = true;
            internalData.initStatus = true;
            handleLoadDefaults();
            handleInitDefaults();
          }
          updateStyle();
        });
        if (props.autoResize) {
          const resizeOpts = computeResizeOpts.value;
          const { refreshDelay } = resizeOpts;
          const el = refElem.value;
          const parentEl = tablePrivateMethods.getParentElem();
          const handleOptimizeResize = refreshDelay ? import_xe_utils14.default.throttle(() => tableMethods.recalculate(true), refreshDelay, { leading: true, trailing: true }) : null;
          resizeObserver = globalResize2.create(handleOptimizeResize ? () => {
            if (props.autoResize) {
              handleOptimizeResize();
            }
          } : () => {
            if (props.autoResize) {
              tableMethods.recalculate(true);
            }
          });
          if (el) {
            resizeObserver.observe(el);
          }
          if (parentEl) {
            resizeObserver.observe(parentEl);
          }
        }
      });
      globalEvents2.on($xeTable, "paste", handleGlobalPasteEvent);
      globalEvents2.on($xeTable, "copy", handleGlobalCopyEvent);
      globalEvents2.on($xeTable, "cut", handleGlobalCutEvent);
      globalEvents2.on($xeTable, "mousedown", handleGlobalMousedownEvent);
      globalEvents2.on($xeTable, "blur", handleGlobalBlurEvent);
      globalEvents2.on($xeTable, "mousewheel", handleGlobalMousewheelEvent);
      globalEvents2.on($xeTable, "keydown", handleGlobalKeydownEvent);
      globalEvents2.on($xeTable, "resize", handleGlobalResizeEvent);
      globalEvents2.on($xeTable, "contextmenu", $xeTable.handleGlobalContextmenuEvent);
      tablePrivateMethods.preventEvent(null, "mounted", { $table: $xeTable });
    });
    onBeforeUnmount(() => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      tableMethods.closeFilter();
      if ($xeTable.closeMenu) {
        $xeTable.closeMenu();
      }
      tablePrivateMethods.preventEvent(null, "beforeUnmount", { $table: $xeTable });
    });
    onUnmounted(() => {
      globalEvents2.off($xeTable, "paste");
      globalEvents2.off($xeTable, "copy");
      globalEvents2.off($xeTable, "cut");
      globalEvents2.off($xeTable, "mousedown");
      globalEvents2.off($xeTable, "blur");
      globalEvents2.off($xeTable, "mousewheel");
      globalEvents2.off($xeTable, "keydown");
      globalEvents2.off($xeTable, "resize");
      globalEvents2.off($xeTable, "contextmenu");
      tablePrivateMethods.preventEvent(null, "unmounted", { $table: $xeTable });
    });
    if (true) {
      nextTick(() => {
        if (props.loading) {
          if (!VxeUILoadingComponent) {
            errLog("vxe.error.reqComp", ["vxe-loading"]);
          }
        }
        if (props.showOverflow === true || props.showOverflow === "tooltip" || (props.showHeaderOverflow === true || props.showHeaderOverflow === "tooltip") || (props.showFooterOverflow === true || props.showFooterOverflow === "tooltip") || props.tooltipConfig || props.editRules) {
          if (!VxeUITooltipComponent) {
            errLog("vxe.error.reqComp", ["vxe-tooltip"]);
          }
        }
      });
    }
    provide("$xeColgroup", null);
    provide("$xeTable", $xeTable);
    $xeTable.renderVN = renderVN;
    return $xeTable;
  },
  render() {
    return this.renderVN();
  }
});

// node_modules/.pnpm/vxe-table@4.7.86_vue@3.5.12_typescript@5.6.3_/node_modules/vxe-table/es/table/src/use/cell-view.js
init_vue_runtime_esm_bundler();
var import_xe_utils15 = __toESM(require_xe_utils());
function useCellView(props) {
  const currColumn = computed(() => {
    const { renderParams } = props;
    return renderParams.column;
  });
  const currRow = computed(() => {
    const { renderParams } = props;
    return renderParams.row;
  });
  const cellOptions = computed(() => {
    const { renderOpts } = props;
    return renderOpts.props || {};
  });
  const cellModel = computed({
    get() {
      const { renderParams } = props;
      const { row, column } = renderParams;
      return import_xe_utils15.default.get(row, column.field);
    },
    set(value) {
      const { renderParams } = props;
      const { row, column } = renderParams;
      return import_xe_utils15.default.set(row, column.field, value);
    }
  });
  return {
    currColumn,
    currRow,
    cellModel,
    cellOptions
  };
}

// node_modules/.pnpm/vxe-table@4.7.86_vue@3.5.12_typescript@5.6.3_/node_modules/vxe-table/es/table/module/filter/hook.js
init_vue_runtime_esm_bundler();
var import_xe_utils16 = __toESM(require_xe_utils());
var { renderer: renderer6, hooks: hooks3 } = VxeUI;
var tableFilterMethodKeys = ["openFilter", "setFilter", "clearFilter", "getCheckedFilters", "updateFilterOptionStatus"];
hooks3.add("tableFilterModule", {
  setupTable($xeTable) {
    const { props, reactData, internalData } = $xeTable;
    const { refTableHeader, refTableBody, refTableFilter } = $xeTable.getRefMaps();
    const { computeFilterOpts, computeMouseOpts } = $xeTable.getComputeMaps();
    const confirmFilter = (evnt) => {
      const { filterStore } = reactData;
      filterStore.options.forEach((option) => {
        option.checked = option._checked;
      });
      $xeTable.confirmFilterEvent(evnt);
    };
    const changeRadioOption = (evnt, checked, item) => {
      const { filterStore } = reactData;
      filterStore.options.forEach((option) => {
        option._checked = false;
      });
      item._checked = checked;
      $xeTable.checkFilterOptions();
      confirmFilter(evnt);
    };
    const changeMultipleOption = (evnt, checked, item) => {
      item._checked = checked;
      $xeTable.checkFilterOptions();
    };
    const resetFilter = (evnt) => {
      const { filterStore } = reactData;
      $xeTable.handleClearFilter(filterStore.column);
      $xeTable.confirmFilterEvent(evnt);
    };
    const filterPrivateMethods = {
      checkFilterOptions() {
        const { filterStore } = reactData;
        filterStore.isAllSelected = filterStore.options.every((item) => item._checked);
        filterStore.isIndeterminate = !filterStore.isAllSelected && filterStore.options.some((item) => item._checked);
      },
      /**
       * 点击筛选事件
       * 当筛选图标被点击时触发
       * 更新选项是否全部状态
       * 打开筛选面板
       * @param {Event} evnt 事件
       * @param {ColumnInfo} column 列配置
       * @param {Object} params 参数
       */
      triggerFilterEvent(evnt, column, params) {
        const { initStore, filterStore } = reactData;
        if (filterStore.column === column && filterStore.visible) {
          filterStore.visible = false;
        } else {
          const { target: targetElem, pageX } = evnt;
          const { visibleWidth } = getDomNode();
          const { filters, filterMultiple, filterRender } = column;
          const compConf = isEnableConf(filterRender) ? renderer6.get(filterRender.name) : null;
          const frMethod = column.filterRecoverMethod || (compConf ? compConf.tableFilterRecoverMethod || compConf.filterRecoverMethod : null);
          internalData._currFilterParams = params;
          Object.assign(filterStore, {
            multiple: filterMultiple,
            options: filters,
            column,
            style: null
          });
          filterStore.options.forEach((option) => {
            const { _checked, checked } = option;
            option._checked = checked;
            if (!checked && _checked !== checked) {
              if (frMethod) {
                frMethod({ option, column, $table: $xeTable });
              }
            }
          });
          this.checkFilterOptions();
          filterStore.visible = true;
          initStore.filter = true;
          nextTick(() => {
            const tableHeader = refTableHeader.value;
            const tableBody = refTableBody.value;
            const headerElem = tableHeader ? tableHeader.$el : null;
            const bodyElem = tableBody.$el;
            if (!bodyElem) {
              return;
            }
            const tableFilter = refTableFilter.value;
            const filterWrapperElem = tableFilter ? tableFilter.$el : null;
            if (!filterWrapperElem) {
              return;
            }
            const filterWidth = filterWrapperElem.offsetWidth;
            const filterHeight = filterWrapperElem.offsetHeight;
            const filterHeadElem = filterWrapperElem.querySelector(".vxe-table--filter-header");
            const filterFootElem = filterWrapperElem.querySelector(".vxe-table--filter-footer");
            const centerWidth = filterWidth / 2;
            const minMargin = 10;
            const maxLeft = bodyElem.clientWidth - filterWidth - minMargin;
            let left, right;
            const style = {
              top: `${targetElem.offsetTop + targetElem.offsetParent.offsetTop + targetElem.offsetHeight}px`
            };
            let maxHeight = null;
            const bodyHeight = bodyElem.clientHeight - (headerElem ? headerElem.clientHeight / 2 : 0);
            if (filterHeight >= bodyHeight) {
              maxHeight = Math.max(40, bodyHeight - (filterFootElem ? filterFootElem.offsetHeight : 0) - (filterHeadElem ? filterHeadElem.offsetHeight : 0));
            }
            if (column.fixed === "left") {
              left = targetElem.offsetLeft + targetElem.offsetParent.offsetLeft - centerWidth;
            } else if (column.fixed === "right") {
              right = targetElem.offsetParent.offsetWidth - targetElem.offsetLeft + (targetElem.offsetParent.offsetParent.offsetWidth - targetElem.offsetParent.offsetLeft) - column.renderWidth - centerWidth;
            } else {
              left = targetElem.offsetLeft + targetElem.offsetParent.offsetLeft - centerWidth - bodyElem.scrollLeft;
            }
            if (left) {
              const overflowWidth = pageX + filterWidth - centerWidth + minMargin - visibleWidth;
              if (overflowWidth > 0) {
                left -= overflowWidth;
              }
              style.left = `${Math.min(maxLeft, Math.max(minMargin, left))}px`;
            } else if (right) {
              const overflowWidth = pageX + filterWidth - centerWidth + minMargin - visibleWidth;
              if (overflowWidth > 0) {
                right += overflowWidth;
              }
              style.right = `${Math.max(minMargin, right)}px`;
            }
            filterStore.style = style;
            filterStore.maxHeight = maxHeight;
          });
        }
        $xeTable.dispatchEvent("filter-visible", { column, field: column.field, property: column.field, filterList: $xeTable.getCheckedFilters(), visible: filterStore.visible }, evnt);
      },
      handleClearFilter(column) {
        if (column) {
          const { filters, filterRender } = column;
          if (filters) {
            const compConf = isEnableConf(filterRender) ? renderer6.get(filterRender.name) : null;
            const frMethod = column.filterResetMethod || (compConf ? compConf.tableFilterResetMethod || compConf.filterResetMethod : null);
            filters.forEach((item) => {
              item._checked = false;
              item.checked = false;
              if (!frMethod) {
                item.data = import_xe_utils16.default.clone(item.resetValue, true);
              }
            });
            if (frMethod) {
              frMethod({ options: filters, column, $table: $xeTable });
            }
          }
        }
      },
      /**
       * 确认筛选
       * 当筛选面板中的确定按钮被按下时触发
       * @param {Event} evnt 事件
       */
      confirmFilterEvent(evnt) {
        const { mouseConfig } = props;
        const { filterStore, scrollXLoad: oldScrollXLoad, scrollYLoad: oldScrollYLoad } = reactData;
        const filterOpts = computeFilterOpts.value;
        const mouseOpts = computeMouseOpts.value;
        const { column } = filterStore;
        const { field } = column;
        const values = [];
        const datas = [];
        column.filters.forEach((item) => {
          if (item.checked) {
            values.push(item.value);
            datas.push(item.data);
          }
        });
        const filterList = $xeTable.getCheckedFilters();
        const params = { $table: $xeTable, $event: evnt, column, field, property: field, values, datas, filters: filterList, filterList };
        if (!filterOpts.remote) {
          $xeTable.handleTableData(true);
          $xeTable.checkSelectionStatus();
        }
        if (mouseConfig && mouseOpts.area && $xeTable.handleFilterEvent) {
          $xeTable.handleFilterEvent(evnt, params);
        }
        $xeTable.dispatchEvent("filter-change", params, evnt);
        $xeTable.closeFilter();
        $xeTable.updateFooter().then(() => {
          const { scrollXLoad, scrollYLoad } = reactData;
          if (oldScrollXLoad || scrollXLoad || (oldScrollYLoad || scrollYLoad)) {
            if (oldScrollXLoad || scrollXLoad) {
              $xeTable.updateScrollXSpace();
            }
            if (oldScrollYLoad || scrollYLoad) {
              $xeTable.updateScrollYSpace();
            }
            return $xeTable.refreshScroll();
          }
        }).then(() => {
          $xeTable.updateCellAreas();
          return $xeTable.recalculate(true);
        }).then(() => {
          setTimeout(() => $xeTable.recalculate(), 50);
        });
      },
      handleFilterChangeRadioOption: changeRadioOption,
      handleFilterChangeMultipleOption: changeMultipleOption,
      // 筛选发生改变
      handleFilterChangeOption(evnt, checked, item) {
        const { filterStore } = reactData;
        if (filterStore.multiple) {
          changeMultipleOption(evnt, checked, item);
        } else {
          changeRadioOption(evnt, checked, item);
        }
      },
      handleFilterConfirmFilter: confirmFilter,
      handleFilterResetFilter: resetFilter
    };
    const filterMethods = {
      /**
       * 手动弹出筛选面板
       * @param column
       */
      openFilter(fieldOrColumn) {
        const column = handleFieldOrColumn($xeTable, fieldOrColumn);
        if (column && column.filters) {
          const { elemStore } = internalData;
          const { fixed } = column;
          return $xeTable.scrollToColumn(column).then(() => {
            const headerWrapperRef = elemStore[`${fixed || "main"}-header-wrapper`] || elemStore["main-header-wrapper"];
            const headerWrapperElem = headerWrapperRef ? headerWrapperRef.value : null;
            if (headerWrapperElem) {
              const filterBtnElem = headerWrapperElem.querySelector(`.vxe-header--column.${column.id} .vxe-filter--btn`);
              triggerEvent(filterBtnElem, "click");
            }
          });
        }
        return nextTick();
      },
      /**
       * 修改筛选条件列表
       * @param {ColumnInfo} fieldOrColumn 列或字段名
       * @param {Array} options 选项
       */
      setFilter(fieldOrColumn, options) {
        const column = handleFieldOrColumn($xeTable, fieldOrColumn);
        if (column && column.filters) {
          column.filters = toFilters(options || []);
        }
        return nextTick();
      },
      /**
       * 清空指定列的筛选条件
       * 如果为空则清空所有列的筛选条件
       * @param {String} fieldOrColumn 列或字段名
       */
      clearFilter(fieldOrColumn) {
        const { filterStore } = reactData;
        const { tableFullColumn } = internalData;
        const filterOpts = computeFilterOpts.value;
        let column;
        if (fieldOrColumn) {
          column = handleFieldOrColumn($xeTable, fieldOrColumn);
          if (column) {
            filterPrivateMethods.handleClearFilter(column);
          }
        } else {
          tableFullColumn.forEach(filterPrivateMethods.handleClearFilter);
        }
        if (!fieldOrColumn || column !== filterStore.column) {
          Object.assign(filterStore, {
            isAllSelected: false,
            isIndeterminate: false,
            style: null,
            options: [],
            column: null,
            multiple: false,
            visible: false
          });
        }
        if (!filterOpts.remote) {
          return $xeTable.updateData();
        }
        return nextTick();
      },
      getCheckedFilters() {
        const { tableFullColumn } = internalData;
        const filterList = [];
        tableFullColumn.forEach((column) => {
          const { field, filters } = column;
          const valueList = [];
          const dataList = [];
          if (filters && filters.length) {
            filters.forEach((item) => {
              if (item.checked) {
                valueList.push(item.value);
                dataList.push(item.data);
              }
            });
            if (valueList.length) {
              filterList.push({ column, field, property: field, values: valueList, datas: dataList });
            }
          }
        });
        return filterList;
      },
      updateFilterOptionStatus(item, checked) {
        item._checked = checked;
        item.checked = checked;
        return nextTick();
      }
    };
    return Object.assign(Object.assign({}, filterMethods), filterPrivateMethods);
  },
  setupGrid($xeGrid) {
    return $xeGrid.extendTableMethods(tableFilterMethodKeys);
  }
});

// node_modules/.pnpm/vxe-table@4.7.86_vue@3.5.12_typescript@5.6.3_/node_modules/vxe-table/es/table/module/menu/hook.js
init_vue_runtime_esm_bundler();
var import_xe_utils17 = __toESM(require_xe_utils());
var { menus: menus2, hooks: hooks4, globalEvents: globalEvents3, GLOBAL_EVENT_KEYS: GLOBAL_EVENT_KEYS2 } = VxeUI;
var tableMenuMethodKeys = ["closeMenu"];
hooks4.add("tableMenuModule", {
  setupTable($xeTable) {
    const { xID, props, reactData, internalData } = $xeTable;
    const { refElem, refTableFilter, refTableMenu } = $xeTable.getRefMaps();
    const { computeMouseOpts, computeIsMenu, computeMenuOpts } = $xeTable.getComputeMaps();
    let menuMethods = {};
    let menuPrivateMethods = {};
    const handleOpenMenuEvent = (evnt, type, params) => {
      const { ctxMenuStore } = reactData;
      const isMenu = computeIsMenu.value;
      const menuOpts = computeMenuOpts.value;
      const config2 = menuOpts[type];
      const visibleMethod = menuOpts.visibleMethod;
      if (config2) {
        const { options, disabled } = config2;
        if (disabled) {
          evnt.preventDefault();
        } else if (isMenu && options && options.length) {
          params.options = options;
          $xeTable.preventEvent(evnt, "event.showMenu", params, () => {
            if (!visibleMethod || visibleMethod(params)) {
              evnt.preventDefault();
              $xeTable.updateZindex();
              const { scrollTop, scrollLeft, visibleHeight, visibleWidth } = getDomNode();
              let top = evnt.clientY + scrollTop;
              let left = evnt.clientX + scrollLeft;
              const handleVisible = () => {
                internalData._currMenuParams = params;
                Object.assign(ctxMenuStore, {
                  visible: true,
                  list: options,
                  selected: null,
                  selectChild: null,
                  showChild: false,
                  style: {
                    zIndex: internalData.tZindex,
                    top: `${top}px`,
                    left: `${left}px`
                  }
                });
                nextTick(() => {
                  const tableMenu = refTableMenu.value;
                  const ctxElem = tableMenu.getRefMaps().refElem.value;
                  const clientHeight = ctxElem.clientHeight;
                  const clientWidth = ctxElem.clientWidth;
                  const { boundingTop, boundingLeft } = getAbsolutePos(ctxElem);
                  const offsetTop = boundingTop + clientHeight - visibleHeight;
                  const offsetLeft = boundingLeft + clientWidth - visibleWidth;
                  if (offsetTop > -10) {
                    ctxMenuStore.style.top = `${Math.max(scrollTop + 2, top - clientHeight - 2)}px`;
                  }
                  if (offsetLeft > -10) {
                    ctxMenuStore.style.left = `${Math.max(scrollLeft + 2, left - clientWidth - 2)}px`;
                  }
                });
              };
              const { keyboard, row, column } = params;
              if (keyboard && row && column) {
                $xeTable.scrollToRow(row, column).then(() => {
                  const cell = $xeTable.getCellElement(row, column);
                  if (cell) {
                    const { boundingTop, boundingLeft } = getAbsolutePos(cell);
                    top = boundingTop + scrollTop + Math.floor(cell.offsetHeight / 2);
                    left = boundingLeft + scrollLeft + Math.floor(cell.offsetWidth / 2);
                  }
                  handleVisible();
                });
              } else {
                handleVisible();
              }
            } else {
              menuMethods.closeMenu();
            }
          });
        }
      }
      $xeTable.closeFilter();
    };
    menuMethods = {
      /**
       * 关闭快捷菜单
       */
      closeMenu() {
        Object.assign(reactData.ctxMenuStore, {
          visible: false,
          selected: null,
          selectChild: null,
          showChild: false
        });
        return nextTick();
      }
    };
    menuPrivateMethods = {
      /**
       * 处理菜单的移动
       */
      moveCtxMenu(evnt, ctxMenuStore, property, hasOper, operRest, menuList) {
        let selectItem;
        const selectIndex = import_xe_utils17.default.findIndexOf(menuList, (item) => ctxMenuStore[property] === item);
        if (hasOper) {
          if (operRest && hasChildrenList(ctxMenuStore.selected)) {
            ctxMenuStore.showChild = true;
          } else {
            ctxMenuStore.showChild = false;
            ctxMenuStore.selectChild = null;
          }
        } else if (globalEvents3.hasKey(evnt, GLOBAL_EVENT_KEYS2.ARROW_UP)) {
          for (let len = selectIndex - 1; len >= 0; len--) {
            if (menuList[len].visible !== false) {
              selectItem = menuList[len];
              break;
            }
          }
          ctxMenuStore[property] = selectItem || menuList[menuList.length - 1];
        } else if (globalEvents3.hasKey(evnt, GLOBAL_EVENT_KEYS2.ARROW_DOWN)) {
          for (let index = selectIndex + 1; index < menuList.length; index++) {
            if (menuList[index].visible !== false) {
              selectItem = menuList[index];
              break;
            }
          }
          ctxMenuStore[property] = selectItem || menuList[0];
        } else if (ctxMenuStore[property] && (globalEvents3.hasKey(evnt, GLOBAL_EVENT_KEYS2.ENTER) || globalEvents3.hasKey(evnt, GLOBAL_EVENT_KEYS2.SPACEBAR))) {
          menuPrivateMethods.ctxMenuLinkEvent(evnt, ctxMenuStore[property]);
        }
      },
      handleOpenMenuEvent,
      /**
       * 快捷菜单事件处理
       */
      handleGlobalContextmenuEvent(evnt) {
        const { mouseConfig, menuConfig } = props;
        const { editStore, ctxMenuStore } = reactData;
        const { visibleColumn } = internalData;
        const tableFilter = refTableFilter.value;
        const tableMenu = refTableMenu.value;
        const mouseOpts = computeMouseOpts.value;
        const menuOpts = computeMenuOpts.value;
        const el = refElem.value;
        const { selected } = editStore;
        const layoutList = ["header", "body", "footer"];
        if (isEnableConf(menuConfig)) {
          if (ctxMenuStore.visible && tableMenu && getEventTargetNode(evnt, tableMenu.getRefMaps().refElem.value).flag) {
            evnt.preventDefault();
            return;
          }
          if (internalData._keyCtx) {
            const type = "body";
            const params = { type, $table: $xeTable, keyboard: true, columns: visibleColumn.slice(0), $event: evnt };
            if (mouseConfig && mouseOpts.area) {
              const activeArea = $xeTable.getActiveCellArea();
              if (activeArea && activeArea.row && activeArea.column) {
                params.row = activeArea.row;
                params.column = activeArea.column;
                handleOpenMenuEvent(evnt, type, params);
                return;
              }
            } else if (mouseConfig && mouseOpts.selected) {
              if (selected.row && selected.column) {
                params.row = selected.row;
                params.column = selected.column;
                handleOpenMenuEvent(evnt, type, params);
                return;
              }
            }
          }
          for (let index = 0; index < layoutList.length; index++) {
            const layout = layoutList[index];
            const columnTargetNode = getEventTargetNode(evnt, el, `vxe-${layout}--column`, (target) => {
              return target.parentNode.parentNode.parentNode.getAttribute("xid") === xID;
            });
            const params = { type: layout, $table: $xeTable, columns: visibleColumn.slice(0), $event: evnt };
            if (columnTargetNode.flag) {
              const cell = columnTargetNode.targetElem;
              const columnNodeRest = $xeTable.getColumnNode(cell);
              const column = columnNodeRest ? columnNodeRest.item : null;
              let typePrefix = `${layout}-`;
              if (column) {
                Object.assign(params, { column, columnIndex: $xeTable.getColumnIndex(column), cell });
              }
              if (layout === "body") {
                const rowNodeRest = $xeTable.getRowNode(cell.parentNode);
                const row = rowNodeRest ? rowNodeRest.item : null;
                typePrefix = "";
                if (row) {
                  params.row = row;
                  params.rowIndex = $xeTable.getRowIndex(row);
                }
              }
              const eventType = `${typePrefix}cell-menu`;
              handleOpenMenuEvent(evnt, layout, params);
              $xeTable.dispatchEvent(eventType, params, evnt);
              return;
            } else if (getEventTargetNode(evnt, el, `vxe-table--${layout}-wrapper`, (target) => target.getAttribute("xid") === xID).flag) {
              if (menuOpts.trigger === "cell") {
                evnt.preventDefault();
              } else {
                handleOpenMenuEvent(evnt, layout, params);
              }
              return;
            }
          }
        }
        if (tableFilter && !getEventTargetNode(evnt, tableFilter.$el).flag) {
          $xeTable.closeFilter();
        }
        menuMethods.closeMenu();
      },
      ctxMenuMouseoverEvent(evnt, item, child) {
        const menuElem = evnt.currentTarget;
        const { ctxMenuStore } = reactData;
        evnt.preventDefault();
        evnt.stopPropagation();
        ctxMenuStore.selected = item;
        ctxMenuStore.selectChild = child;
        if (!child) {
          ctxMenuStore.showChild = hasChildrenList(item);
          if (ctxMenuStore.showChild) {
            nextTick(() => {
              const childWrapperElem = menuElem.nextElementSibling;
              if (childWrapperElem) {
                const { boundingTop, boundingLeft, visibleHeight, visibleWidth } = getAbsolutePos(menuElem);
                const posTop = boundingTop + menuElem.offsetHeight;
                const posLeft = boundingLeft + menuElem.offsetWidth;
                let left = "";
                let right = "";
                if (posLeft + childWrapperElem.offsetWidth > visibleWidth - 10) {
                  left = "auto";
                  right = `${menuElem.offsetWidth}px`;
                }
                let top = "";
                let bottom = "";
                if (posTop + childWrapperElem.offsetHeight > visibleHeight - 10) {
                  top = "auto";
                  bottom = "0";
                }
                childWrapperElem.style.left = left;
                childWrapperElem.style.right = right;
                childWrapperElem.style.top = top;
                childWrapperElem.style.bottom = bottom;
              }
            });
          }
        }
      },
      ctxMenuMouseoutEvent(evnt, item) {
        const { ctxMenuStore } = reactData;
        if (!item.children) {
          ctxMenuStore.selected = null;
        }
        ctxMenuStore.selectChild = null;
      },
      /**
       * 快捷菜单点击事件
       */
      ctxMenuLinkEvent(evnt, menu) {
        if (!menu.disabled && (menu.code || !menu.children || !menu.children.length)) {
          const gMenuOpts = menus2.get(menu.code);
          const params = Object.assign({}, internalData._currMenuParams, { menu, $table: $xeTable, $grid: $xeTable.xegrid, $event: evnt });
          const tmMethod = gMenuOpts ? gMenuOpts.tableMenuMethod || gMenuOpts.menuMethod : null;
          if (tmMethod) {
            tmMethod(params, evnt);
          }
          $xeTable.dispatchEvent("menu-click", params, evnt);
          menuMethods.closeMenu();
        }
      }
    };
    return Object.assign(Object.assign({}, menuMethods), menuPrivateMethods);
  },
  setupGrid($xeGrid) {
    return $xeGrid.extendTableMethods(tableMenuMethodKeys);
  }
});

// node_modules/.pnpm/vxe-table@4.7.86_vue@3.5.12_typescript@5.6.3_/node_modules/vxe-table/es/table/module/edit/hook.js
init_vue_runtime_esm_bundler();
var import_xe_utils18 = __toESM(require_xe_utils());
var { getConfig: getConfig4, renderer: renderer7, hooks: hooks5, getI18n: getI18n10 } = VxeUI;
var tableEditMethodKeys = ["insert", "insertAt", "insertNextAt", "remove", "removeCheckboxRow", "removeRadioRow", "removeCurrentRow", "getRecordset", "getInsertRecords", "getRemoveRecords", "getUpdateRecords", "getEditRecord", "getActiveRecord", "getSelectedCell", "clearEdit", "clearActived", "clearSelected", "isEditByRow", "isActiveByRow", "setEditRow", "setActiveRow", "setEditCell", "setActiveCell", "setSelectCell"];
hooks5.add("tableEditModule", {
  setupTable($xeTable) {
    const { props, reactData, internalData } = $xeTable;
    const { refElem } = $xeTable.getRefMaps();
    const { computeMouseOpts, computeEditOpts, computeCheckboxOpts, computeTreeOpts } = $xeTable.getComputeMaps();
    let editMethods = {};
    let editPrivateMethods = {};
    const getEditColumnModel = (row, column) => {
      const { model, editRender } = column;
      if (editRender) {
        model.value = getCellValue(row, column);
        model.update = false;
      }
    };
    const setEditColumnModel = (row, column) => {
      const { model, editRender } = column;
      if (editRender && model.update) {
        setCellValue(row, column, model.value);
        model.update = false;
        model.value = null;
      }
    };
    const removeCellSelectedClass = () => {
      const el = refElem.value;
      if (el) {
        const cell = el.querySelector(".col--selected");
        if (cell) {
          removeClass(cell, "col--selected");
        }
      }
    };
    function syncActivedCell() {
      const { editStore, tableColumn } = reactData;
      const editOpts = computeEditOpts.value;
      const { actived } = editStore;
      const { row, column } = actived;
      if (row || column) {
        if (editOpts.mode === "row") {
          tableColumn.forEach((column2) => setEditColumnModel(row, column2));
        } else {
          setEditColumnModel(row, column);
        }
      }
    }
    function insertTreeRow(newRecords, isAppend) {
      const { tableFullTreeData, afterFullData, fullDataRowIdData, fullAllDataRowIdData } = internalData;
      const treeOpts = computeTreeOpts.value;
      const { rowField, parentField, mapChildrenField } = treeOpts;
      const childrenField = treeOpts.children || treeOpts.childrenField;
      const funcName = isAppend ? "push" : "unshift";
      newRecords.forEach((item) => {
        const parentRowId = item[parentField];
        const rowid = getRowid($xeTable, item);
        const matchObj = parentRowId ? import_xe_utils18.default.findTree(tableFullTreeData, (item2) => parentRowId === item2[rowField], { children: mapChildrenField }) : null;
        if (matchObj) {
          const { item: parentRow } = matchObj;
          const parentRest = fullAllDataRowIdData[getRowid($xeTable, parentRow)];
          const parentLevel = parentRest ? parentRest.level : 0;
          let parentChilds = parentRow[childrenField];
          let mapChilds = parentRow[mapChildrenField];
          if (!import_xe_utils18.default.isArray(parentChilds)) {
            parentChilds = parentRow[childrenField] = [];
          }
          if (!import_xe_utils18.default.isArray(mapChilds)) {
            mapChilds = parentRow[childrenField] = [];
          }
          parentChilds[funcName](item);
          mapChilds[funcName](item);
          const rest = { row: item, rowid, seq: -1, index: -1, _index: -1, $index: -1, items: parentChilds, parent: parentRow, level: parentLevel + 1 };
          fullDataRowIdData[rowid] = rest;
          fullAllDataRowIdData[rowid] = rest;
        } else {
          if (true) {
            if (parentRowId) {
              warnLog("vxe.error.unableInsert");
            }
          }
          afterFullData[funcName](item);
          tableFullTreeData[funcName](item);
          const rest = { row: item, rowid, seq: -1, index: -1, _index: -1, $index: -1, items: tableFullTreeData, parent: null, level: 0 };
          fullDataRowIdData[rowid] = rest;
          fullAllDataRowIdData[rowid] = rest;
        }
      });
    }
    const handleInsertRowAt = (records, row, isInsertNextRow) => {
      const { treeConfig } = props;
      const { mergeList, editStore } = reactData;
      const { tableFullTreeData, afterFullData, tableFullData, fullDataRowIdData, fullAllDataRowIdData } = internalData;
      const treeOpts = computeTreeOpts.value;
      const { transform, rowField, mapChildrenField } = treeOpts;
      const childrenField = treeOpts.children || treeOpts.childrenField;
      if (!import_xe_utils18.default.isArray(records)) {
        records = [records];
      }
      const newRecords = reactive($xeTable.defineField(records.map((record) => Object.assign(treeConfig && transform ? { [mapChildrenField]: [], [childrenField]: [] } : {}, record))));
      if (import_xe_utils18.default.eqNull(row)) {
        if (treeConfig && transform) {
          insertTreeRow(newRecords, false);
        } else {
          afterFullData.unshift(...newRecords);
          tableFullData.unshift(...newRecords);
          mergeList.forEach((mergeItem) => {
            const { row: mergeRowIndex } = mergeItem;
            if (mergeRowIndex > 0) {
              mergeItem.row = mergeRowIndex + newRecords.length;
            }
          });
        }
      } else {
        if (row === -1) {
          if (treeConfig && transform) {
            insertTreeRow(newRecords, true);
          } else {
            afterFullData.push(...newRecords);
            tableFullData.push(...newRecords);
            mergeList.forEach((mergeItem) => {
              const { row: mergeRowIndex, rowspan: mergeRowspan } = mergeItem;
              if (mergeRowIndex + mergeRowspan > afterFullData.length) {
                mergeItem.rowspan = mergeRowspan + newRecords.length;
              }
            });
          }
        } else {
          if (treeConfig && transform) {
            const matchMapObj = import_xe_utils18.default.findTree(tableFullTreeData, (item) => row[rowField] === item[rowField], { children: mapChildrenField });
            if (matchMapObj) {
              const { parent: parentRow } = matchMapObj;
              const parentMapChilds = parentRow ? parentRow[mapChildrenField] : tableFullTreeData;
              const parentRest = fullAllDataRowIdData[getRowid($xeTable, parentRow)];
              const parentLevel = parentRest ? parentRest.level : 0;
              newRecords.forEach((item, i) => {
                const rowid = getRowid($xeTable, item);
                if (true) {
                  if (item[treeOpts.parentField]) {
                    if (parentRow && item[treeOpts.parentField] !== parentRow[rowField]) {
                      errLog("vxe.error.errProp", [`${treeOpts.parentField}=${item[treeOpts.parentField]}`, `${treeOpts.parentField}=${parentRow[rowField]}`]);
                    }
                  }
                }
                if (parentRow) {
                  item[treeOpts.parentField] = parentRow[rowField];
                }
                let targetIndex = matchMapObj.index + i;
                if (isInsertNextRow) {
                  targetIndex = targetIndex + 1;
                }
                parentMapChilds.splice(targetIndex, 0, item);
                const rest = { row: item, rowid, seq: -1, index: -1, _index: -1, $index: -1, items: parentMapChilds, parent: parentRow, level: parentLevel + 1 };
                fullDataRowIdData[rowid] = rest;
                fullAllDataRowIdData[rowid] = rest;
              });
              if (parentRow) {
                const matchObj = import_xe_utils18.default.findTree(tableFullTreeData, (item) => row[rowField] === item[rowField], { children: childrenField });
                if (matchObj) {
                  const parentChilds = matchObj.items;
                  let targetIndex = matchObj.index;
                  if (isInsertNextRow) {
                    targetIndex = targetIndex + 1;
                  }
                  parentChilds.splice(targetIndex, 0, ...newRecords);
                }
              }
            } else {
              if (true) {
                warnLog("vxe.error.unableInsert");
              }
              insertTreeRow(newRecords, true);
            }
          } else {
            if (treeConfig) {
              throw new Error(getI18n10("vxe.error.noTree", ["insert"]));
            }
            let afIndex = -1;
            if (import_xe_utils18.default.isNumber(row)) {
              if (row < afterFullData.length) {
                afIndex = row;
              }
            } else {
              afIndex = $xeTable.findRowIndexOf(afterFullData, row);
            }
            if (isInsertNextRow) {
              afIndex = Math.min(afterFullData.length, afIndex + 1);
            }
            if (afIndex === -1) {
              throw new Error(getI18n10("vxe.error.unableInsert"));
            }
            afterFullData.splice(afIndex, 0, ...newRecords);
            tableFullData.splice($xeTable.findRowIndexOf(tableFullData, row), 0, ...newRecords);
            mergeList.forEach((mergeItem) => {
              const { row: mergeRowIndex, rowspan: mergeRowspan } = mergeItem;
              if (mergeRowIndex > afIndex) {
                mergeItem.row = mergeRowIndex + newRecords.length;
              } else if (mergeRowIndex + mergeRowspan > afIndex) {
                mergeItem.rowspan = mergeRowspan + newRecords.length;
              }
            });
          }
        }
      }
      const { insertMaps } = editStore;
      newRecords.forEach((newRow) => {
        const rowid = getRowid($xeTable, newRow);
        insertMaps[rowid] = newRow;
      });
      $xeTable.cacheRowMap();
      $xeTable.updateScrollYStatus();
      $xeTable.handleTableData(treeConfig && transform);
      if (!(treeConfig && transform)) {
        $xeTable.updateAfterDataIndex();
      }
      $xeTable.updateFooter();
      $xeTable.checkSelectionStatus();
      if (reactData.scrollYLoad) {
        $xeTable.updateScrollYSpace();
      }
      return nextTick().then(() => {
        $xeTable.updateCellAreas();
        return $xeTable.recalculate();
      }).then(() => {
        return {
          row: newRecords.length ? newRecords[newRecords.length - 1] : null,
          rows: newRecords
        };
      });
    };
    editMethods = {
      /**
       * 往表格中插入临时数据
       *
       * @param {*} records
       */
      insert(records) {
        return handleInsertRowAt(records, null);
      },
      /**
       * 往表格指定行中插入临时数据
       * 如果 row 为空则从插入到顶部，如果为树结构，则插入到目标节点顶部
       * 如果 row 为 -1 则从插入到底部，如果为树结构，则插入到目标节点底部
       * 如果 row 为有效行则插入到该行的位置，如果为树结构，则有插入到效的目标节点该行的位置
       * @param {Object/Array} records 新的数据
       * @param {Row} row 指定行
       */
      insertAt(records, row) {
        return handleInsertRowAt(records, row);
      },
      insertNextAt(records, row) {
        return handleInsertRowAt(records, row, true);
      },
      /**
       * 删除指定行数据
       * 如果传 row 则删除一行
       * 如果传 rows 则删除多行
       * 如果为空则删除所有
       */
      remove(rows) {
        const { treeConfig } = props;
        const { mergeList, editStore, selectCheckboxMaps } = reactData;
        const { tableFullTreeData, afterFullData, tableFullData } = internalData;
        const checkboxOpts = computeCheckboxOpts.value;
        const treeOpts = computeTreeOpts.value;
        const { transform, mapChildrenField } = treeOpts;
        const childrenField = treeOpts.children || treeOpts.childrenField;
        const { actived, removeMaps, insertMaps } = editStore;
        const { checkField } = checkboxOpts;
        let delList = [];
        if (!rows) {
          rows = tableFullData;
        } else if (!import_xe_utils18.default.isArray(rows)) {
          rows = [rows];
        }
        rows.forEach((row) => {
          if (!$xeTable.isInsertByRow(row)) {
            const rowid = getRowid($xeTable, row);
            removeMaps[rowid] = row;
          }
        });
        if (!checkField) {
          const selectRowMaps = Object.assign({}, selectCheckboxMaps);
          rows.forEach((row) => {
            const rowid = getRowid($xeTable, row);
            if (selectRowMaps[rowid]) {
              delete selectRowMaps[rowid];
            }
          });
          reactData.selectCheckboxMaps = selectRowMaps;
        }
        if (tableFullData === rows) {
          rows = delList = tableFullData.slice(0);
          internalData.tableFullData = [];
          internalData.afterFullData = [];
          $xeTable.clearMergeCells();
        } else {
          if (treeConfig && transform) {
            rows.forEach((row) => {
              const rowid = getRowid($xeTable, row);
              const matchMapObj = import_xe_utils18.default.findTree(tableFullTreeData, (item) => rowid === getRowid($xeTable, item), { children: mapChildrenField });
              if (matchMapObj) {
                const rItems = matchMapObj.items.splice(matchMapObj.index, 1);
                delList.push(rItems[0]);
              }
              const matchObj = import_xe_utils18.default.findTree(tableFullTreeData, (item) => rowid === getRowid($xeTable, item), { children: childrenField });
              if (matchObj) {
                matchObj.items.splice(matchObj.index, 1);
              }
              const afIndex = $xeTable.findRowIndexOf(afterFullData, row);
              if (afIndex > -1) {
                afterFullData.splice(afIndex, 1);
              }
            });
          } else {
            rows.forEach((row) => {
              const tfIndex = $xeTable.findRowIndexOf(tableFullData, row);
              if (tfIndex > -1) {
                const rItems = tableFullData.splice(tfIndex, 1);
                delList.push(rItems[0]);
              }
              const afIndex = $xeTable.findRowIndexOf(afterFullData, row);
              if (afIndex > -1) {
                mergeList.forEach((mergeItem) => {
                  const { row: mergeRowIndex, rowspan: mergeRowspan } = mergeItem;
                  if (mergeRowIndex > afIndex) {
                    mergeItem.row = mergeRowIndex - 1;
                  } else if (mergeRowIndex + mergeRowspan > afIndex) {
                    mergeItem.rowspan = mergeRowspan - 1;
                  }
                });
                afterFullData.splice(afIndex, 1);
              }
            });
          }
        }
        if (actived.row && $xeTable.findRowIndexOf(rows, actived.row) > -1) {
          editMethods.clearEdit();
        }
        rows.forEach((row) => {
          const rowid = getRowid($xeTable, row);
          if (insertMaps[rowid]) {
            delete insertMaps[rowid];
          }
        });
        $xeTable.updateFooter();
        $xeTable.cacheRowMap();
        $xeTable.handleTableData(treeConfig && transform);
        if (!(treeConfig && transform)) {
          $xeTable.updateAfterDataIndex();
        }
        $xeTable.checkSelectionStatus();
        if (reactData.scrollYLoad) {
          $xeTable.updateScrollYSpace();
        }
        return nextTick().then(() => {
          $xeTable.updateCellAreas();
          return $xeTable.recalculate();
        }).then(() => {
          return { row: delList.length ? delList[delList.length - 1] : null, rows: delList };
        });
      },
      /**
       * 删除复选框选中的数据
       */
      removeCheckboxRow() {
        return editMethods.remove($xeTable.getCheckboxRecords()).then((params) => {
          $xeTable.clearCheckboxRow();
          return params;
        });
      },
      /**
       * 删除单选框选中的数据
       */
      removeRadioRow() {
        const radioRecord = $xeTable.getRadioRecord();
        return editMethods.remove(radioRecord || []).then((params) => {
          $xeTable.clearRadioRow();
          return params;
        });
      },
      /**
       * 删除当前行选中的数据
       */
      removeCurrentRow() {
        const currentRecord = $xeTable.getCurrentRecord();
        return editMethods.remove(currentRecord || []).then((params) => {
          $xeTable.clearCurrentRow();
          return params;
        });
      },
      /**
       * 获取表格数据集，包含新增、删除、修改、标记
       */
      getRecordset() {
        const removeRecords = editMethods.getRemoveRecords();
        const pendingRecords = $xeTable.getPendingRecords();
        const delRecords = removeRecords.concat(pendingRecords);
        const updateRecords = editMethods.getUpdateRecords().filter((row) => {
          return !delRecords.some((item) => $xeTable.eqRow(item, row));
        });
        return {
          insertRecords: editMethods.getInsertRecords(),
          removeRecords,
          updateRecords,
          pendingRecords
        };
      },
      /**
       * 获取新增的临时数据
       */
      getInsertRecords() {
        const { editStore } = reactData;
        const { fullAllDataRowIdData } = internalData;
        const { insertMaps } = editStore;
        const insertRecords = [];
        import_xe_utils18.default.each(insertMaps, (row, rowid) => {
          if (fullAllDataRowIdData[rowid]) {
            insertRecords.push(row);
          }
        });
        return insertRecords;
      },
      /**
       * 获取已删除的数据
       */
      getRemoveRecords() {
        const { editStore } = reactData;
        const { removeMaps } = editStore;
        const removeRecords = [];
        import_xe_utils18.default.each(removeMaps, (row) => {
          removeRecords.push(row);
        });
        return removeRecords;
      },
      /**
       * 获取更新数据
       * 只精准匹配 row 的更改
       * 如果是树表格，子节点更改状态不会影响父节点的更新状态
       */
      getUpdateRecords() {
        const { keepSource, treeConfig } = props;
        const { tableFullData } = internalData;
        const treeOpts = computeTreeOpts.value;
        if (keepSource) {
          syncActivedCell();
          if (treeConfig) {
            return import_xe_utils18.default.filterTree(tableFullData, (row) => $xeTable.isUpdateByRow(row), treeOpts);
          }
          return tableFullData.filter((row) => $xeTable.isUpdateByRow(row));
        }
        return [];
      },
      getActiveRecord() {
        if (true) {
          warnLog("vxe.error.delFunc", ["getActiveRecord", "getEditRecord"]);
        }
        return this.getEditRecord();
      },
      getEditRecord() {
        const { editStore } = reactData;
        const { afterFullData } = internalData;
        const el = refElem.value;
        const { args, row } = editStore.actived;
        if (args && $xeTable.findRowIndexOf(afterFullData, row) > -1 && el.querySelectorAll(".vxe-body--column.col--active").length) {
          return Object.assign({}, args);
        }
        return null;
      },
      /**
       * 获取选中的单元格
       */
      getSelectedCell() {
        const { editStore } = reactData;
        const { args, column } = editStore.selected;
        if (args && column) {
          return Object.assign({}, args);
        }
        return null;
      },
      clearActived(evnt) {
        if (true) {
          warnLog("vxe.error.delFunc", ["clearActived", "clearEdit"]);
        }
        return this.clearEdit(evnt);
      },
      /**
       * 清除激活的编辑
       */
      clearEdit(evnt) {
        const { editStore } = reactData;
        const { actived, focused } = editStore;
        const { row, column } = actived;
        if (row || column) {
          syncActivedCell();
          actived.args = null;
          actived.row = null;
          actived.column = null;
          $xeTable.updateFooter();
          $xeTable.dispatchEvent("edit-closed", {
            row,
            rowIndex: $xeTable.getRowIndex(row),
            $rowIndex: $xeTable.getVMRowIndex(row),
            column,
            columnIndex: $xeTable.getColumnIndex(column),
            $columnIndex: $xeTable.getVMColumnIndex(column)
          }, evnt || null);
        }
        if (getConfig4().cellVaildMode === "obsolete") {
          if ($xeTable.clearValidate) {
            return $xeTable.clearValidate();
          }
        }
        focused.row = null;
        focused.column = null;
        return nextTick();
      },
      /**
       * 清除所选中源状态
       */
      clearSelected() {
        const { editStore } = reactData;
        const { selected } = editStore;
        selected.row = null;
        selected.column = null;
        removeCellSelectedClass();
        return nextTick();
      },
      isActiveByRow(row) {
        if (true) {
          warnLog("vxe.error.delFunc", ["isActiveByRow", "isEditByRow"]);
        }
        return this.isEditByRow(row);
      },
      /**
       * 判断行是否为激活编辑状态
       * @param {Row} row 行对象
       */
      isEditByRow(row) {
        const { editStore } = reactData;
        return editStore.actived.row === row;
      },
      setActiveRow(row) {
        if (true) {
          warnLog("vxe.error.delFunc", ["setActiveRow", "setEditRow"]);
        }
        return editMethods.setEditRow(row);
      },
      /**
       * 激活行编辑
       */
      setEditRow(row, fieldOrColumn) {
        const { visibleColumn } = internalData;
        let column = import_xe_utils18.default.find(visibleColumn, (column2) => isEnableConf(column2.editRender));
        if (fieldOrColumn) {
          column = import_xe_utils18.default.isString(fieldOrColumn) ? $xeTable.getColumnByField(fieldOrColumn) : fieldOrColumn;
        }
        return $xeTable.setEditCell(row, column);
      },
      setActiveCell(row, fieldOrColumn) {
        if (true) {
          warnLog("vxe.error.delFunc", ["setActiveCell", "setEditCell"]);
        }
        return editMethods.setEditCell(row, fieldOrColumn);
      },
      /**
       * 激活单元格编辑
       */
      setEditCell(row, fieldOrColumn) {
        const { editConfig } = props;
        const column = import_xe_utils18.default.isString(fieldOrColumn) ? $xeTable.getColumnByField(fieldOrColumn) : fieldOrColumn;
        if (row && column && isEnableConf(editConfig) && isEnableConf(column.editRender)) {
          return $xeTable.scrollToRow(row, column).then(() => {
            const cell = $xeTable.getCellElement(row, column);
            if (cell) {
              editPrivateMethods.handleEdit({
                row,
                rowIndex: $xeTable.getRowIndex(row),
                column,
                columnIndex: $xeTable.getColumnIndex(column),
                cell,
                $table: $xeTable
              });
              internalData._lastCallTime = Date.now();
            }
            return nextTick();
          });
        }
        return nextTick();
      },
      /**
       * 只对 trigger=dblclick 有效，选中单元格
       */
      setSelectCell(row, fieldOrColumn) {
        const { tableData } = reactData;
        const editOpts = computeEditOpts.value;
        const column = import_xe_utils18.default.isString(fieldOrColumn) ? $xeTable.getColumnByField(fieldOrColumn) : fieldOrColumn;
        if (row && column && editOpts.trigger !== "manual") {
          const rowIndex = $xeTable.findRowIndexOf(tableData, row);
          if (rowIndex > -1 && column) {
            const cell = $xeTable.getCellElement(row, column);
            const params = {
              row,
              rowIndex,
              column,
              columnIndex: $xeTable.getColumnIndex(column),
              cell
            };
            $xeTable.handleSelected(params, {});
          }
        }
        return nextTick();
      }
    };
    editPrivateMethods = {
      /**
       * 处理激活编辑
       */
      handleEdit(params, evnt) {
        const { editConfig, mouseConfig } = props;
        const { editStore, tableColumn } = reactData;
        const editOpts = computeEditOpts.value;
        const { mode } = editOpts;
        const { actived, focused } = editStore;
        const { row, column } = params;
        const { editRender } = column;
        const cell = params.cell || $xeTable.getCellElement(row, column);
        const beforeEditMethod = editOpts.beforeEditMethod || editOpts.activeMethod;
        params.cell = cell;
        if (cell && isEnableConf(editConfig) && isEnableConf(editRender)) {
          if (!$xeTable.hasPendingByRow(row)) {
            if (actived.row !== row || (mode === "cell" ? actived.column !== column : false)) {
              let type = "edit-disabled";
              if (!beforeEditMethod || beforeEditMethod(Object.assign(Object.assign({}, params), { $table: $xeTable, $grid: $xeTable.xegrid }))) {
                if (mouseConfig) {
                  editMethods.clearSelected();
                  if ($xeTable.clearCellAreas) {
                    $xeTable.clearCellAreas();
                    $xeTable.clearCopyCellArea();
                  }
                }
                $xeTable.closeTooltip();
                if (actived.column) {
                  editMethods.clearEdit(evnt);
                }
                type = "edit-activated";
                column.renderHeight = cell.offsetHeight;
                actived.args = params;
                actived.row = row;
                actived.column = column;
                if (mode === "row") {
                  tableColumn.forEach((column2) => getEditColumnModel(row, column2));
                } else {
                  getEditColumnModel(row, column);
                }
                const afterEditMethod = editOpts.afterEditMethod;
                nextTick(() => {
                  editPrivateMethods.handleFocus(params, evnt);
                  if (afterEditMethod) {
                    afterEditMethod(Object.assign(Object.assign({}, params), { $table: $xeTable, $grid: $xeTable.xegrid }));
                  }
                });
              }
              $xeTable.dispatchEvent(type, {
                row,
                rowIndex: $xeTable.getRowIndex(row),
                $rowIndex: $xeTable.getVMRowIndex(row),
                column,
                columnIndex: $xeTable.getColumnIndex(column),
                $columnIndex: $xeTable.getVMColumnIndex(column)
              }, evnt);
              if (type === "edit-activated") {
                $xeTable.dispatchEvent("edit-actived", {
                  row,
                  rowIndex: $xeTable.getRowIndex(row),
                  $rowIndex: $xeTable.getVMRowIndex(row),
                  column,
                  columnIndex: $xeTable.getColumnIndex(column),
                  $columnIndex: $xeTable.getVMColumnIndex(column)
                }, evnt);
              }
            } else {
              const { column: oldColumn } = actived;
              if (mouseConfig) {
                editMethods.clearSelected();
                if ($xeTable.clearCellAreas) {
                  $xeTable.clearCellAreas();
                  $xeTable.clearCopyCellArea();
                }
              }
              if (oldColumn !== column) {
                const { model: oldModel } = oldColumn;
                if (oldModel.update) {
                  setCellValue(row, oldColumn, oldModel.value);
                }
                if ($xeTable.clearValidate) {
                  $xeTable.clearValidate(row, column);
                }
              }
              column.renderHeight = cell.offsetHeight;
              actived.args = params;
              actived.column = column;
              setTimeout(() => {
                editPrivateMethods.handleFocus(params, evnt);
              });
            }
            focused.column = null;
            focused.row = null;
            $xeTable.focus();
          }
        }
        return nextTick();
      },
      /**
       * @deprecated
       */
      handleActived(params, evnt) {
        return editPrivateMethods.handleEdit(params, evnt);
      },
      /**
       * 处理聚焦
       */
      handleFocus(params) {
        const { row, column, cell } = params;
        const { editRender } = column;
        const editOpts = computeEditOpts.value;
        if (isEnableConf(editRender)) {
          const compRender = renderer7.get(editRender.name);
          let autoFocus = editRender.autofocus || editRender.autoFocus;
          let autoSelect = editRender.autoSelect || editRender.autoselect;
          let inputElem;
          if (editOpts.autoFocus) {
            if (!autoFocus && compRender) {
              autoFocus = compRender.tableAutoFocus || compRender.tableAutofocus || compRender.autofocus;
            }
            if (!autoSelect && compRender) {
              autoSelect = compRender.tableAutoSelect || compRender.autoselect;
            }
            if (import_xe_utils18.default.isFunction(autoFocus)) {
              inputElem = autoFocus(params);
            } else if (autoFocus) {
              inputElem = cell.querySelector(autoFocus);
              if (inputElem) {
                inputElem.focus();
              }
            }
          }
          if (inputElem) {
            if (autoSelect) {
              inputElem.select();
            } else {
              if (browse.msie) {
                const textRange = inputElem.createTextRange();
                textRange.collapse(false);
                textRange.select();
              }
            }
          } else {
            if (editOpts.autoPos) {
              if (!column.fixed) {
                $xeTable.scrollToRow(row, column);
              }
            }
          }
        }
      },
      /**
       * 处理选中源
       */
      handleSelected(params, evnt) {
        const { mouseConfig } = props;
        const { editStore } = reactData;
        const mouseOpts = computeMouseOpts.value;
        const editOpts = computeEditOpts.value;
        const { actived, selected } = editStore;
        const { row, column } = params;
        const isMouseSelected = mouseConfig && mouseOpts.selected;
        const selectMethod = () => {
          if (isMouseSelected && (selected.row !== row || selected.column !== column)) {
            if (actived.row !== row || (editOpts.mode === "cell" ? actived.column !== column : false)) {
              editMethods.clearEdit(evnt);
              editMethods.clearSelected();
              if ($xeTable.clearCellAreas) {
                $xeTable.clearCellAreas();
                $xeTable.clearCopyCellArea();
              }
              selected.args = params;
              selected.row = row;
              selected.column = column;
              if (isMouseSelected) {
                editPrivateMethods.addCellSelectedClass();
              }
              $xeTable.focus();
              if (evnt) {
                $xeTable.dispatchEvent("cell-selected", params, evnt);
              }
            }
          }
          return nextTick();
        };
        return selectMethod();
      },
      addCellSelectedClass() {
        const { editStore } = reactData;
        const { selected } = editStore;
        const { row, column } = selected;
        removeCellSelectedClass();
        if (row && column) {
          const cell = $xeTable.getCellElement(row, column);
          if (cell) {
            addClass(cell, "col--selected");
          }
        }
      }
    };
    return Object.assign(Object.assign({}, editMethods), editPrivateMethods);
  },
  setupGrid($xeGrid) {
    return $xeGrid.extendTableMethods(tableEditMethodKeys);
  }
});

// node_modules/.pnpm/vxe-table@4.7.86_vue@3.5.12_typescript@5.6.3_/node_modules/vxe-table/es/table/module/export/hook.js
init_vue_runtime_esm_bundler();
var import_xe_utils19 = __toESM(require_xe_utils());

// node_modules/.pnpm/vxe-table@4.7.86_vue@3.5.12_typescript@5.6.3_/node_modules/vxe-table/es/table/module/export/util.js
var defaultHtmlStyle = 'body{margin:0;padding: 0 1px;color:#333333;font-size:14px;font-family:"Microsoft YaHei",微软雅黑,"MicrosoftJhengHei",华文细黑,STHeiti,MingLiu}body *{-webkit-box-sizing:border-box;box-sizing:border-box}.vxe-table{border-collapse:collapse;text-align:left;border-spacing:0}.vxe-table:not(.is--print){table-layout:fixed}.vxe-table,.vxe-table th,.vxe-table td,.vxe-table td{border-color:#D0D0D0;border-style:solid;border-width:0}.vxe-table.is--print{width:100%}.border--default,.border--full,.border--outer{border-top-width:1px}.border--default,.border--full,.border--outer{border-left-width:1px}.border--outer,.border--default th,.border--default td,.border--full th,.border--full td,.border--outer th,.border--inner th,.border--inner td{border-bottom-width:1px}.border--default,.border--outer,.border--full th,.border--full td{border-right-width:1px}.border--default th,.border--full th,.border--outer th{background-color:#f8f8f9}.vxe-table td>div,.vxe-table th>div{padding:.5em .4em}.col--center{text-align:center}.col--right{text-align:right}.vxe-table:not(.is--print) .col--ellipsis>div{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-break:break-all}.vxe-table--tree-node{text-align:left}.vxe-table--tree-node-wrapper{position:relative}.vxe-table--tree-icon-wrapper{position:absolute;top:50%;width:1em;height:1em;text-align:center;-webkit-transform:translateY(-50%);transform:translateY(-50%);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer}.vxe-table--tree-unfold-icon,.vxe-table--tree-fold-icon{position:absolute;width:0;height:0;border-style:solid;border-width:.5em;border-right-color:transparent;border-bottom-color:transparent}.vxe-table--tree-unfold-icon{left:.3em;top:0;border-left-color:#939599;border-top-color:transparent}.vxe-table--tree-fold-icon{left:0;top:.3em;border-left-color:transparent;border-top-color:#939599}.vxe-table--tree-cell{display:block;padding-left:1.5em}.vxe-table input[type="checkbox"]{margin:0}.vxe-table input[type="checkbox"],.vxe-table input[type="radio"],.vxe-table input[type="checkbox"]+span,.vxe-table input[type="radio"]+span{vertical-align:middle;padding-left:0.4em}';
function getExportBlobByContent(content, options) {
  return new Blob([content], { type: `text/${options.type};charset=utf-8;` });
}
function createHtmlPage(opts, content) {
  const { style } = opts;
  return [
    "<!DOCTYPE html><html>",
    "<head>",
    '<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui">',
    `<title>${opts.sheetName}</title>`,
    '<style media="print">.vxe-page-break-before{page-break-before:always;}.vxe-page-break-after{page-break-after:always;}</style>',
    `<style>${defaultHtmlStyle}</style>`,
    style ? `<style>${style}</style>` : "",
    "</head>",
    `<body>${content}</body>`,
    "</html>"
  ].join("");
}

// node_modules/.pnpm/vxe-table@4.7.86_vue@3.5.12_typescript@5.6.3_/node_modules/vxe-table/es/table/module/export/hook.js
var { getI18n: getI18n11, hooks: hooks6, renderer: renderer8 } = VxeUI;
var htmlCellElem;
var csvBOM = "\uFEFF";
var enterSymbol = "\r\n";
function defaultFilterExportColumn(column) {
  return column.property || ["seq", "checkbox", "radio"].indexOf(column.type) > -1;
}
var getConvertColumns = (columns) => {
  const result = [];
  columns.forEach((column) => {
    if (column.childNodes && column.childNodes.length) {
      result.push(column);
      result.push(...getConvertColumns(column.childNodes));
    } else {
      result.push(column);
    }
  });
  return result;
};
var convertToRows = (originColumns) => {
  let maxLevel = 1;
  const traverse = (column, parent) => {
    if (parent) {
      column._level = parent._level + 1;
      if (maxLevel < column._level) {
        maxLevel = column._level;
      }
    }
    if (column.childNodes && column.childNodes.length) {
      let colSpan = 0;
      column.childNodes.forEach((subColumn) => {
        traverse(subColumn, column);
        colSpan += subColumn._colSpan;
      });
      column._colSpan = colSpan;
    } else {
      column._colSpan = 1;
    }
  };
  originColumns.forEach((column) => {
    column._level = 1;
    traverse(column);
  });
  const rows = [];
  for (let i = 0; i < maxLevel; i++) {
    rows.push([]);
  }
  const allColumns = getConvertColumns(originColumns);
  allColumns.forEach((column) => {
    if (column.childNodes && column.childNodes.length) {
      column._rowSpan = 1;
    } else {
      column._rowSpan = maxLevel - column._level + 1;
    }
    rows[column._level - 1].push(column);
  });
  return rows;
};
function toTableBorder(border) {
  if (border === true) {
    return "full";
  }
  if (border) {
    return border;
  }
  return "default";
}
function getBooleanValue(cellValue) {
  return cellValue === "TRUE" || cellValue === "true" || cellValue === true;
}
function getFooterData(opts, footerTableData) {
  const { footerFilterMethod } = opts;
  return footerFilterMethod ? footerTableData.filter((items, index) => footerFilterMethod({ items, $rowIndex: index })) : footerTableData;
}
function getCsvCellTypeLabel(column, cellValue) {
  if (cellValue) {
    if (column.type === "seq") {
      return `	${cellValue}`;
    }
    switch (column.cellType) {
      case "string":
        if (!isNaN(cellValue)) {
          return `	${cellValue}`;
        }
        break;
      case "number":
        break;
      default:
        if (cellValue.length >= 12 && !isNaN(cellValue)) {
          return `	${cellValue}`;
        }
        break;
    }
  }
  return cellValue;
}
function toTxtCellLabel(val) {
  if (/[",\s\n]/.test(val)) {
    return `"${val.replace(/"/g, '""')}"`;
  }
  return val;
}
function getElementsByTagName(elem, qualifiedName) {
  return elem.getElementsByTagName(qualifiedName);
}
function getTxtCellKey(now) {
  return `#${now}@${import_xe_utils19.default.uniqueId()}`;
}
function replaceTxtCell(cell, vMaps) {
  return cell.replace(/#\d+@\d+/g, (key) => import_xe_utils19.default.hasOwnProp(vMaps, key) ? vMaps[key] : key);
}
function getTxtCellValue(val, vMaps) {
  const rest = replaceTxtCell(val, vMaps);
  return rest.replace(/^"+$/g, (qVal) => '"'.repeat(Math.ceil(qVal.length / 2)));
}
function parseCsvAndTxt(columns, content, cellSeparator) {
  const list = content.split(enterSymbol);
  const rows = [];
  let fields = [];
  if (list.length) {
    const vMaps = {};
    const now = Date.now();
    list.forEach((rVal) => {
      if (rVal) {
        const item = {};
        rVal = rVal.replace(/("")|(\n)/g, (text, dVal) => {
          const key = getTxtCellKey(now);
          vMaps[key] = dVal ? '"' : "\n";
          return key;
        }).replace(/"(.*?)"/g, (text, cVal) => {
          const key = getTxtCellKey(now);
          vMaps[key] = replaceTxtCell(cVal, vMaps);
          return key;
        });
        const cells = rVal.split(cellSeparator);
        if (!fields.length) {
          fields = cells.map((val) => getTxtCellValue(val.trim(), vMaps));
        } else {
          cells.forEach((val, colIndex) => {
            if (colIndex < fields.length) {
              item[fields[colIndex]] = getTxtCellValue(val.trim(), vMaps);
            }
          });
          rows.push(item);
        }
      }
    });
  }
  return { fields, rows };
}
function parseCsv(columns, content) {
  return parseCsvAndTxt(columns, content, ",");
}
function parseTxt(columns, content) {
  return parseCsvAndTxt(columns, content, "	");
}
function parseHTML(columns, content) {
  const domParser = new DOMParser();
  const xmlDoc = domParser.parseFromString(content, "text/html");
  const bodyNodes = getElementsByTagName(xmlDoc, "body");
  const rows = [];
  const fields = [];
  if (bodyNodes.length) {
    const tableNodes = getElementsByTagName(bodyNodes[0], "table");
    if (tableNodes.length) {
      const theadNodes = getElementsByTagName(tableNodes[0], "thead");
      if (theadNodes.length) {
        import_xe_utils19.default.arrayEach(getElementsByTagName(theadNodes[0], "tr"), (rowNode) => {
          import_xe_utils19.default.arrayEach(getElementsByTagName(rowNode, "th"), (cellNode) => {
            fields.push(cellNode.textContent);
          });
        });
        const tbodyNodes = getElementsByTagName(tableNodes[0], "tbody");
        if (tbodyNodes.length) {
          import_xe_utils19.default.arrayEach(getElementsByTagName(tbodyNodes[0], "tr"), (rowNode) => {
            const item = {};
            import_xe_utils19.default.arrayEach(getElementsByTagName(rowNode, "td"), (cellNode, colIndex) => {
              if (fields[colIndex]) {
                item[fields[colIndex]] = cellNode.textContent || "";
              }
            });
            rows.push(item);
          });
        }
      }
    }
  }
  return { fields, rows };
}
function parseXML(columns, content) {
  const domParser = new DOMParser();
  const xmlDoc = domParser.parseFromString(content, "application/xml");
  const sheetNodes = getElementsByTagName(xmlDoc, "Worksheet");
  const rows = [];
  const fields = [];
  if (sheetNodes.length) {
    const tableNodes = getElementsByTagName(sheetNodes[0], "Table");
    if (tableNodes.length) {
      const rowNodes = getElementsByTagName(tableNodes[0], "Row");
      if (rowNodes.length) {
        import_xe_utils19.default.arrayEach(getElementsByTagName(rowNodes[0], "Cell"), (cellNode) => {
          fields.push(cellNode.textContent);
        });
        import_xe_utils19.default.arrayEach(rowNodes, (rowNode, index) => {
          if (index) {
            const item = {};
            const cellNodes = getElementsByTagName(rowNode, "Cell");
            import_xe_utils19.default.arrayEach(cellNodes, (cellNode, colIndex) => {
              if (fields[colIndex]) {
                item[fields[colIndex]] = cellNode.textContent;
              }
            });
            rows.push(item);
          }
        });
      }
    }
  }
  return { fields, rows };
}
function clearColumnConvert(columns) {
  import_xe_utils19.default.eachTree(columns, (column) => {
    delete column._level;
    delete column._colSpan;
    delete column._rowSpan;
    delete column._children;
    delete column.childNodes;
  }, { children: "children" });
}
function checkImportData(columns, fields) {
  const tableFields = [];
  columns.forEach((column) => {
    const field = column.property;
    if (field) {
      tableFields.push(field);
    }
  });
  return fields.some((field) => tableFields.indexOf(field) > -1);
}
var tableExportMethodKeys = ["exportData", "importByFile", "importData", "saveFile", "readFile", "print", "getPrintHtml", "openImport", "openExport", "openPrint"];
hooks6.add("tableExportModule", {
  setupTable($xeTable) {
    const { props, reactData, internalData } = $xeTable;
    const { computeTreeOpts, computePrintOpts, computeExportOpts, computeImportOpts, computeCustomOpts, computeSeqOpts, computeRadioOpts, computeCheckboxOpts, computeColumnOpts } = $xeTable.getComputeMaps();
    const $xeGrid = inject("$xeGrid", null);
    const hasTreeChildren = (row) => {
      const treeOpts = computeTreeOpts.value;
      const childrenField = treeOpts.children || treeOpts.childrenField;
      return row[childrenField] && row[childrenField].length;
    };
    const getSeq = (cellValue, row, $rowIndex, column, $columnIndex) => {
      const seqOpts = computeSeqOpts.value;
      const seqMethod = seqOpts.seqMethod || column.seqMethod;
      if (seqMethod) {
        return seqMethod({
          row,
          rowIndex: $xeTable.getRowIndex(row),
          $rowIndex,
          column,
          columnIndex: $xeTable.getColumnIndex(column),
          $columnIndex
        });
      }
      return cellValue;
    };
    function getHeaderTitle(opts, column) {
      const columnOpts = computeColumnOpts.value;
      const headExportMethod = column.headerExportMethod || columnOpts.headerExportMethod;
      return headExportMethod ? headExportMethod({ column, options: opts, $table: $xeTable }) : (opts.original ? column.property : column.getTitle()) || "";
    }
    const toBooleanValue = (cellValue) => {
      return import_xe_utils19.default.isBoolean(cellValue) ? cellValue ? "TRUE" : "FALSE" : cellValue;
    };
    const getLabelData = (opts, columns, datas) => {
      const { isAllExpand, mode } = opts;
      const { treeConfig } = props;
      const radioOpts = computeRadioOpts.value;
      const checkboxOpts = computeCheckboxOpts.value;
      const treeOpts = computeTreeOpts.value;
      const columnOpts = computeColumnOpts.value;
      if (!htmlCellElem) {
        htmlCellElem = document.createElement("div");
      }
      if (treeConfig) {
        const childrenField = treeOpts.children || treeOpts.childrenField;
        const rest = [];
        const expandMaps = /* @__PURE__ */ new Map();
        import_xe_utils19.default.eachTree(datas, (item, $rowIndex, items, path, parent, nodes) => {
          const row = item._row || item;
          const parentRow = parent && parent._row ? parent._row : parent;
          if (isAllExpand || !parentRow || expandMaps.has(parentRow) && $xeTable.isTreeExpandByRow(parentRow)) {
            const hasRowChild = hasTreeChildren(row);
            const item2 = {
              _row: row,
              _level: nodes.length - 1,
              _hasChild: hasRowChild,
              _expand: hasRowChild && $xeTable.isTreeExpandByRow(row)
            };
            columns.forEach((column, $columnIndex) => {
              let cellValue = "";
              const renderOpts = column.editRender || column.cellRender;
              let bodyExportMethod = column.exportMethod;
              if (!bodyExportMethod && renderOpts && renderOpts.name) {
                const compConf = renderer8.get(renderOpts.name);
                if (compConf) {
                  bodyExportMethod = compConf.tableExportMethod || compConf.exportMethod;
                }
              }
              if (!bodyExportMethod) {
                bodyExportMethod = columnOpts.exportMethod;
              }
              if (bodyExportMethod) {
                cellValue = bodyExportMethod({ $table: $xeTable, row, column, options: opts });
              } else {
                switch (column.type) {
                  case "seq": {
                    const seqVal = path.map((num, i) => i % 2 === 0 ? Number(num) + 1 : ".").join("");
                    cellValue = mode === "all" ? seqVal : getSeq(seqVal, row, $rowIndex, column, $columnIndex);
                    break;
                  }
                  case "checkbox":
                    cellValue = toBooleanValue($xeTable.isCheckedByCheckboxRow(row));
                    item2._checkboxLabel = checkboxOpts.labelField ? import_xe_utils19.default.get(row, checkboxOpts.labelField) : "";
                    item2._checkboxDisabled = checkboxOpts.checkMethod && !checkboxOpts.checkMethod({ row });
                    break;
                  case "radio":
                    cellValue = toBooleanValue($xeTable.isCheckedByRadioRow(row));
                    item2._radioLabel = radioOpts.labelField ? import_xe_utils19.default.get(row, radioOpts.labelField) : "";
                    item2._radioDisabled = radioOpts.checkMethod && !radioOpts.checkMethod({ row });
                    break;
                  default:
                    if (opts.original) {
                      cellValue = getCellValue(row, column);
                    } else {
                      cellValue = `${$xeTable.getCellLabel(row, column)}`;
                      if (column.type === "html") {
                        htmlCellElem.innerHTML = cellValue;
                        cellValue = htmlCellElem.innerText.trim();
                      } else {
                        const cell = $xeTable.getCellElement(row, column);
                        if (cell) {
                          cellValue = cell.innerText.trim();
                        }
                      }
                    }
                }
              }
              item2[column.id] = import_xe_utils19.default.toValueString(cellValue);
            });
            expandMaps.set(row, 1);
            rest.push(Object.assign(item2, row));
          }
        }, { children: childrenField });
        return rest;
      }
      return datas.map((row, $rowIndex) => {
        const item = {
          _row: row
        };
        columns.forEach((column, $columnIndex) => {
          let cellValue = "";
          const renderOpts = column.editRender || column.cellRender;
          let exportLabelMethod = column.exportMethod;
          if (!exportLabelMethod && renderOpts && renderOpts.name) {
            const compConf = renderer8.get(renderOpts.name);
            if (compConf) {
              exportLabelMethod = compConf.exportMethod;
            }
          }
          if (exportLabelMethod) {
            cellValue = exportLabelMethod({ $table: $xeTable, row, column, options: opts });
          } else {
            switch (column.type) {
              case "seq": {
                const seqValue = $rowIndex + 1;
                cellValue = mode === "all" ? seqValue : getSeq(seqValue, row, $rowIndex, column, $columnIndex);
                break;
              }
              case "checkbox":
                cellValue = toBooleanValue($xeTable.isCheckedByCheckboxRow(row));
                item._checkboxLabel = checkboxOpts.labelField ? import_xe_utils19.default.get(row, checkboxOpts.labelField) : "";
                item._checkboxDisabled = checkboxOpts.checkMethod && !checkboxOpts.checkMethod({ row });
                break;
              case "radio":
                cellValue = toBooleanValue($xeTable.isCheckedByRadioRow(row));
                item._radioLabel = radioOpts.labelField ? import_xe_utils19.default.get(row, radioOpts.labelField) : "";
                item._radioDisabled = radioOpts.checkMethod && !radioOpts.checkMethod({ row });
                break;
              default:
                if (opts.original) {
                  cellValue = getCellValue(row, column);
                } else {
                  cellValue = `${$xeTable.getCellLabel(row, column)}`;
                  if (column.type === "html") {
                    htmlCellElem.innerHTML = cellValue;
                    cellValue = htmlCellElem.innerText.trim();
                  } else {
                    const cell = $xeTable.getCellElement(row, column);
                    if (cell) {
                      cellValue = cell.innerText.trim();
                    }
                  }
                }
            }
          }
          item[column.id] = import_xe_utils19.default.toValueString(cellValue);
        });
        return item;
      });
    };
    const getExportData = (opts) => {
      const { columns, dataFilterMethod } = opts;
      let datas = opts.data;
      if (dataFilterMethod) {
        datas = datas.filter((row, index) => dataFilterMethod({ row, $rowIndex: index }));
      }
      return getLabelData(opts, columns, datas);
    };
    const getFooterCellValue = (opts, row, column) => {
      const columnOpts = computeColumnOpts.value;
      const renderOpts = column.editRender || column.cellRender;
      let footLabelMethod = column.footerExportMethod;
      if (!footLabelMethod && renderOpts && renderOpts.name) {
        const compConf = renderer8.get(renderOpts.name);
        if (compConf) {
          footLabelMethod = compConf.tableFooterExportMethod || compConf.footerExportMethod;
        }
      }
      if (!footLabelMethod) {
        footLabelMethod = columnOpts.footerExportMethod;
      }
      const _columnIndex = $xeTable.getVTColumnIndex(column);
      if (footLabelMethod) {
        return footLabelMethod({ $table: $xeTable, items: row, itemIndex: _columnIndex, row, _columnIndex, column, options: opts });
      }
      if (import_xe_utils19.default.isArray(row)) {
        return import_xe_utils19.default.toValueString(row[_columnIndex]);
      }
      return import_xe_utils19.default.get(row, column.field);
    };
    const toCsv = (opts, columns, datas) => {
      let content = csvBOM;
      if (opts.isHeader) {
        content += columns.map((column) => toTxtCellLabel(getHeaderTitle(opts, column))).join(",") + enterSymbol;
      }
      datas.forEach((row) => {
        content += columns.map((column) => toTxtCellLabel(getCsvCellTypeLabel(column, row[column.id]))).join(",") + enterSymbol;
      });
      if (opts.isFooter) {
        const { footerTableData } = reactData;
        const footers = getFooterData(opts, footerTableData);
        footers.forEach((row) => {
          content += columns.map((column) => toTxtCellLabel(getFooterCellValue(opts, row, column))).join(",") + enterSymbol;
        });
      }
      return content;
    };
    const toTxt = (opts, columns, datas) => {
      let content = "";
      if (opts.isHeader) {
        content += columns.map((column) => toTxtCellLabel(getHeaderTitle(opts, column))).join("	") + enterSymbol;
      }
      datas.forEach((row) => {
        content += columns.map((column) => toTxtCellLabel(row[column.id])).join("	") + enterSymbol;
      });
      if (opts.isFooter) {
        const { footerTableData } = reactData;
        const footers = getFooterData(opts, footerTableData);
        footers.forEach((row) => {
          content += columns.map((column) => toTxtCellLabel(getFooterCellValue(opts, row, column))).join(",") + enterSymbol;
        });
      }
      return content;
    };
    const hasEllipsis = (column, property, allColumnOverflow) => {
      const columnOverflow = column[property];
      const headOverflow = import_xe_utils19.default.isUndefined(columnOverflow) || import_xe_utils19.default.isNull(columnOverflow) ? allColumnOverflow : columnOverflow;
      const showEllipsis = headOverflow === "ellipsis";
      const showTitle = headOverflow === "title";
      const showTooltip = headOverflow === true || headOverflow === "tooltip";
      let isEllipsis = showTitle || showTooltip || showEllipsis;
      const { scrollXLoad, scrollYLoad } = reactData;
      if ((scrollXLoad || scrollYLoad) && !isEllipsis) {
        isEllipsis = true;
      }
      return isEllipsis;
    };
    const toHtml = (opts, columns, datas) => {
      const { id, border, treeConfig, headerAlign: allHeaderAlign, align: allAlign, footerAlign: allFooterAlign, showOverflow: allColumnOverflow, showHeaderOverflow: allColumnHeaderOverflow } = props;
      const { isAllSelected, isIndeterminate, mergeList } = reactData;
      const treeOpts = computeTreeOpts.value;
      const { print: isPrint, isHeader, isFooter, isColgroup, isMerge, colgroups, original } = opts;
      const allCls = "check-all";
      const clss = [
        "vxe-table",
        `border--${toTableBorder(border)}`,
        isPrint ? "is--print" : "",
        isHeader ? "is--header" : ""
      ].filter((cls) => cls);
      const tables = [
        `<table class="${clss.join(" ")}" border="0" cellspacing="0" cellpadding="0">`,
        `<colgroup>${columns.map((column) => `<col style="width:${column.renderWidth}px">`).join("")}</colgroup>`
      ];
      if (isHeader) {
        tables.push("<thead>");
        if (isColgroup && !original) {
          colgroups.forEach((cols) => {
            tables.push(`<tr>${cols.map((column) => {
              const headAlign = column.headerAlign || column.align || allHeaderAlign || allAlign;
              const classNames = hasEllipsis(column, "showHeaderOverflow", allColumnHeaderOverflow) ? ["col--ellipsis"] : [];
              const cellTitle = getHeaderTitle(opts, column);
              let childWidth = 0;
              let countChild = 0;
              import_xe_utils19.default.eachTree([column], (item) => {
                if (!item.childNodes || !column.childNodes.length) {
                  countChild++;
                }
                childWidth += item.renderWidth;
              }, { children: "childNodes" });
              const cellWidth = childWidth - countChild;
              if (headAlign) {
                classNames.push(`col--${headAlign}`);
              }
              if (column.type === "checkbox") {
                return `<th class="${classNames.join(" ")}" colspan="${column._colSpan}" rowspan="${column._rowSpan}"><div ${isPrint ? "" : `style="width: ${cellWidth}px"`}><input type="checkbox" class="${allCls}" ${isAllSelected ? "checked" : ""}><span>${cellTitle}</span></div></th>`;
              }
              return `<th class="${classNames.join(" ")}" colspan="${column._colSpan}" rowspan="${column._rowSpan}" title="${cellTitle}"><div ${isPrint ? "" : `style="width: ${cellWidth}px"`}><span>${formatText(cellTitle, true)}</span></div></th>`;
            }).join("")}</tr>`);
          });
        } else {
          tables.push(`<tr>${columns.map((column) => {
            const headAlign = column.headerAlign || column.align || allHeaderAlign || allAlign;
            const classNames = hasEllipsis(column, "showHeaderOverflow", allColumnHeaderOverflow) ? ["col--ellipsis"] : [];
            const cellTitle = getHeaderTitle(opts, column);
            if (headAlign) {
              classNames.push(`col--${headAlign}`);
            }
            if (column.type === "checkbox") {
              return `<th class="${classNames.join(" ")}"><div ${isPrint ? "" : `style="width: ${column.renderWidth}px"`}><input type="checkbox" class="${allCls}" ${isAllSelected ? "checked" : ""}><span>${cellTitle}</span></div></th>`;
            }
            return `<th class="${classNames.join(" ")}" title="${cellTitle}"><div ${isPrint ? "" : `style="width: ${column.renderWidth}px"`}><span>${formatText(cellTitle, true)}</span></div></th>`;
          }).join("")}</tr>`);
        }
        tables.push("</thead>");
      }
      if (datas.length) {
        tables.push("<tbody>");
        if (treeConfig) {
          datas.forEach((item) => {
            tables.push("<tr>" + columns.map((column) => {
              const cellAlign = column.align || allAlign;
              const classNames = hasEllipsis(column, "showOverflow", allColumnOverflow) ? ["col--ellipsis"] : [];
              const cellValue = item[column.id];
              if (cellAlign) {
                classNames.push(`col--${cellAlign}`);
              }
              if (column.treeNode) {
                let treeIcon = "";
                if (item._hasChild) {
                  treeIcon = `<i class="${item._expand ? "vxe-table--tree-fold-icon" : "vxe-table--tree-unfold-icon"}"></i>`;
                }
                classNames.push("vxe-table--tree-node");
                if (column.type === "radio") {
                  return `<td class="${classNames.join(" ")}" title="${cellValue}"><div ${isPrint ? "" : `style="width: ${column.renderWidth}px"`}><div class="vxe-table--tree-node-wrapper" style="padding-left: ${item._level * treeOpts.indent}px"><div class="vxe-table--tree-icon-wrapper">${treeIcon}</div><div class="vxe-table--tree-cell"><input type="radio" name="radio_${id}" ${item._radioDisabled ? "disabled " : ""}${getBooleanValue(cellValue) ? "checked" : ""}><span>${item._radioLabel}</span></div></div></div></td>`;
                } else if (column.type === "checkbox") {
                  return `<td class="${classNames.join(" ")}" title="${cellValue}"><div ${isPrint ? "" : `style="width: ${column.renderWidth}px"`}><div class="vxe-table--tree-node-wrapper" style="padding-left: ${item._level * treeOpts.indent}px"><div class="vxe-table--tree-icon-wrapper">${treeIcon}</div><div class="vxe-table--tree-cell"><input type="checkbox" ${item._checkboxDisabled ? "disabled " : ""}${getBooleanValue(cellValue) ? "checked" : ""}><span>${item._checkboxLabel}</span></div></div></div></td>`;
                }
                return `<td class="${classNames.join(" ")}" title="${cellValue}"><div ${isPrint ? "" : `style="width: ${column.renderWidth}px"`}><div class="vxe-table--tree-node-wrapper" style="padding-left: ${item._level * treeOpts.indent}px"><div class="vxe-table--tree-icon-wrapper">${treeIcon}</div><div class="vxe-table--tree-cell">${cellValue}</div></div></div></td>`;
              }
              if (column.type === "radio") {
                return `<td class="${classNames.join(" ")}"><div ${isPrint ? "" : `style="width: ${column.renderWidth}px"`}><input type="radio" name="radio_${id}" ${item._radioDisabled ? "disabled " : ""}${getBooleanValue(cellValue) ? "checked" : ""}><span>${item._radioLabel}</span></div></td>`;
              } else if (column.type === "checkbox") {
                return `<td class="${classNames.join(" ")}"><div ${isPrint ? "" : `style="width: ${column.renderWidth}px"`}><input type="checkbox" ${item._checkboxDisabled ? "disabled " : ""}${getBooleanValue(cellValue) ? "checked" : ""}><span>${item._checkboxLabel}</span></div></td>`;
              }
              return `<td class="${classNames.join(" ")}" title="${cellValue}"><div ${isPrint ? "" : `style="width: ${column.renderWidth}px"`}>${formatText(cellValue, true)}</div></td>`;
            }).join("") + "</tr>");
          });
        } else {
          datas.forEach((item) => {
            tables.push("<tr>" + columns.map((column) => {
              const cellAlign = column.align || allAlign;
              const classNames = hasEllipsis(column, "showOverflow", allColumnOverflow) ? ["col--ellipsis"] : [];
              const cellValue = item[column.id];
              let rowSpan = 1;
              let colSpan = 1;
              if (isMerge && mergeList.length) {
                const _rowIndex = $xeTable.getVTRowIndex(item._row);
                const _columnIndex = $xeTable.getVTColumnIndex(column);
                const spanRest = mergeBodyMethod(mergeList, _rowIndex, _columnIndex);
                if (spanRest) {
                  const { rowspan, colspan } = spanRest;
                  if (!rowspan || !colspan) {
                    return "";
                  }
                  if (rowspan > 1) {
                    rowSpan = rowspan;
                  }
                  if (colspan > 1) {
                    colSpan = colspan;
                  }
                }
              }
              if (cellAlign) {
                classNames.push(`col--${cellAlign}`);
              }
              if (column.type === "radio") {
                return `<td class="${classNames.join(" ")}" rowspan="${rowSpan}" colspan="${colSpan}"><div ${isPrint ? "" : `style="width: ${column.renderWidth}px"`}><input type="radio" name="radio_${id}" ${item._radioDisabled ? "disabled " : ""}${getBooleanValue(cellValue) ? "checked" : ""}><span>${item._radioLabel}</span></div></td>`;
              } else if (column.type === "checkbox") {
                return `<td class="${classNames.join(" ")}" rowspan="${rowSpan}" colspan="${colSpan}"><div ${isPrint ? "" : `style="width: ${column.renderWidth}px"`}><input type="checkbox" ${item._checkboxDisabled ? "disabled " : ""}${getBooleanValue(cellValue) ? "checked" : ""}><span>${item._checkboxLabel}</span></div></td>`;
              }
              return `<td class="${classNames.join(" ")}" rowspan="${rowSpan}" colspan="${colSpan}" title="${cellValue}"><div ${isPrint ? "" : `style="width: ${column.renderWidth}px"`}>${formatText(cellValue, true)}</div></td>`;
            }).join("") + "</tr>");
          });
        }
        tables.push("</tbody>");
      }
      if (isFooter) {
        const { footerTableData } = reactData;
        const footers = getFooterData(opts, footerTableData);
        if (footers.length) {
          tables.push("<tfoot>");
          footers.forEach((row) => {
            tables.push(`<tr>${columns.map((column) => {
              const footAlign = column.footerAlign || column.align || allFooterAlign || allAlign;
              const classNames = hasEllipsis(column, "showOverflow", allColumnOverflow) ? ["col--ellipsis"] : [];
              const cellValue = getFooterCellValue(opts, row, column);
              if (footAlign) {
                classNames.push(`col--${footAlign}`);
              }
              return `<td class="${classNames.join(" ")}" title="${cellValue}"><div ${isPrint ? "" : `style="width: ${column.renderWidth}px"`}>${formatText(cellValue, true)}</div></td>`;
            }).join("")}</tr>`);
          });
          tables.push("</tfoot>");
        }
      }
      const script = !isAllSelected && isIndeterminate ? `<script>(function(){var a=document.querySelector(".${allCls}");if(a){a.indeterminate=true}})()<\/script>` : "";
      tables.push("</table>", script);
      return isPrint ? tables.join("") : createHtmlPage(opts, tables.join(""));
    };
    const toXML = (opts, columns, datas) => {
      let xml = [
        '<?xml version="1.0"?>',
        '<?mso-application progid="Excel.Sheet"?>',
        '<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet" xmlns:html="http://www.w3.org/TR/REC-html40">',
        '<DocumentProperties xmlns="urn:schemas-microsoft-com:office:office">',
        "<Version>16.00</Version>",
        "</DocumentProperties>",
        '<ExcelWorkbook xmlns="urn:schemas-microsoft-com:office:excel">',
        "<WindowHeight>7920</WindowHeight>",
        "<WindowWidth>21570</WindowWidth>",
        "<WindowTopX>32767</WindowTopX>",
        "<WindowTopY>32767</WindowTopY>",
        "<ProtectStructure>False</ProtectStructure>",
        "<ProtectWindows>False</ProtectWindows>",
        "</ExcelWorkbook>",
        `<Worksheet ss:Name="${opts.sheetName}">`,
        "<Table>",
        columns.map((column) => `<Column ss:Width="${column.renderWidth}"/>`).join("")
      ].join("");
      if (opts.isHeader) {
        xml += `<Row>${columns.map((column) => `<Cell><Data ss:Type="String">${getHeaderTitle(opts, column)}</Data></Cell>`).join("")}</Row>`;
      }
      datas.forEach((row) => {
        xml += "<Row>" + columns.map((column) => `<Cell><Data ss:Type="String">${row[column.id]}</Data></Cell>`).join("") + "</Row>";
      });
      if (opts.isFooter) {
        const { footerTableData } = reactData;
        const footers = getFooterData(opts, footerTableData);
        footers.forEach((row) => {
          xml += `<Row>${columns.map((column) => `<Cell><Data ss:Type="String">${getFooterCellValue(opts, row, column)}</Data></Cell>`).join("")}</Row>`;
        });
      }
      return `${xml}</Table></Worksheet></Workbook>`;
    };
    const getContent = (opts, columns, datas) => {
      if (columns.length) {
        switch (opts.type) {
          case "csv":
            return toCsv(opts, columns, datas);
          case "txt":
            return toTxt(opts, columns, datas);
          case "html":
            return toHtml(opts, columns, datas);
          case "xml":
            return toXML(opts, columns, datas);
        }
      }
      return "";
    };
    const downloadFile = (opts, content) => {
      const { filename, type, download } = opts;
      if (!download) {
        const blob = getExportBlobByContent(content, opts);
        return Promise.resolve({ type, content, blob });
      }
      if (VxeUI.saveFile) {
        VxeUI.saveFile({ filename, type, content }).then(() => {
          if (opts.message !== false) {
            if (VxeUI.modal) {
              VxeUI.modal.message({ content: getI18n11("vxe.table.expSuccess"), status: "success" });
            }
          }
        });
      }
    };
    const handleExport = (opts) => {
      const { remote, columns, colgroups, exportMethod, afterExportMethod } = opts;
      return new Promise((resolve) => {
        if (remote) {
          const params = { options: opts, $table: $xeTable, $grid: $xeGrid };
          resolve(exportMethod ? exportMethod(params) : params);
        } else {
          const datas = getExportData(opts);
          resolve($xeTable.preventEvent(null, "event.export", { options: opts, columns, colgroups, datas }, () => {
            return downloadFile(opts, getContent(opts, columns, datas));
          }));
        }
      }).then((params) => {
        clearColumnConvert(columns);
        if (!opts.print) {
          if (afterExportMethod) {
            afterExportMethod({ status: true, options: opts, $table: $xeTable, $grid: $xeGrid });
          }
        }
        return Object.assign({ status: true }, params);
      }).catch(() => {
        clearColumnConvert(columns);
        if (!opts.print) {
          if (afterExportMethod) {
            afterExportMethod({ status: false, options: opts, $table: $xeTable, $grid: $xeGrid });
          }
        }
        const params = { status: false };
        return Promise.reject(params);
      });
    };
    const handleImport = (content, opts) => {
      const { tableFullColumn, _importResolve, _importReject } = internalData;
      let rest = { fields: [], rows: [] };
      switch (opts.type) {
        case "csv":
          rest = parseCsv(tableFullColumn, content);
          break;
        case "txt":
          rest = parseTxt(tableFullColumn, content);
          break;
        case "html":
          rest = parseHTML(tableFullColumn, content);
          break;
        case "xml":
          rest = parseXML(tableFullColumn, content);
          break;
      }
      const { fields, rows } = rest;
      const status = checkImportData(tableFullColumn, fields);
      if (status) {
        $xeTable.createData(rows).then((data) => {
          let loadRest;
          if (opts.mode === "insert" || opts.mode === "insertBottom") {
            loadRest = $xeTable.insertAt(data, -1);
          }
          if (opts.mode === "insertTop") {
            loadRest = $xeTable.insert(data);
          } else {
            loadRest = $xeTable.reloadData(data);
          }
          if (opts.message !== false) {
            if (VxeUI.modal) {
              VxeUI.modal.message({ content: getI18n11("vxe.table.impSuccess", [rows.length]), status: "success" });
            }
          }
          return loadRest.then(() => {
            if (_importResolve) {
              _importResolve({ status: true });
            }
          });
        });
      } else if (opts.message !== false) {
        if (VxeUI.modal) {
          VxeUI.modal.message({ content: getI18n11("vxe.error.impFields"), status: "error" });
        }
        if (_importReject) {
          _importReject({ status: false });
        }
      }
    };
    const handleFileImport = (file, opts) => {
      const { importMethod, afterImportMethod } = opts;
      const { type, filename } = parseFile(file);
      const importOpts = computeImportOpts.value;
      if (!importMethod && !import_xe_utils19.default.includes(import_xe_utils19.default.keys(importOpts._typeMaps), type)) {
        if (opts.message !== false) {
          if (VxeUI.modal) {
            VxeUI.modal.message({ content: getI18n11("vxe.error.notType", [type]), status: "error" });
          }
        }
        const params = { status: false };
        return Promise.reject(params);
      }
      const rest = new Promise((resolve, reject) => {
        const _importResolve = (params) => {
          resolve(params);
          internalData._importResolve = null;
          internalData._importReject = null;
        };
        const _importReject = (params) => {
          reject(params);
          internalData._importResolve = null;
          internalData._importReject = null;
        };
        internalData._importResolve = _importResolve;
        internalData._importReject = _importReject;
        if (window.FileReader) {
          const options = Object.assign({ mode: "insertTop" }, opts, { type, filename });
          if (options.remote) {
            if (importMethod) {
              Promise.resolve(importMethod({ file, options, $table: $xeTable })).then(() => {
                _importResolve({ status: true });
              }).catch(() => {
                _importResolve({ status: true });
              });
            } else {
              _importResolve({ status: true });
            }
          } else {
            const { tableFullColumn } = internalData;
            $xeTable.preventEvent(null, "event.import", { file, options, columns: tableFullColumn }, () => {
              const reader = new FileReader();
              reader.onerror = () => {
                errLog("vxe.error.notType", [type]);
                _importReject({ status: false });
              };
              reader.onload = (e) => {
                handleImport(e.target.result, options);
              };
              reader.readAsText(file, options.encoding || "UTF-8");
            });
          }
        } else {
          if (true) {
            errLog("vxe.error.notExp");
          }
          _importResolve({ status: true });
        }
      });
      return rest.then(() => {
        if (afterImportMethod) {
          afterImportMethod({ status: true, options: opts, $table: $xeTable });
        }
      }).catch((e) => {
        if (afterImportMethod) {
          afterImportMethod({ status: false, options: opts, $table: $xeTable });
        }
        return Promise.reject(e);
      });
    };
    const handleExportAndPrint = (options, isPrint) => {
      const { treeConfig, showHeader, showFooter } = props;
      const { initStore, mergeList, isGroup, footerTableData, exportStore, exportParams } = reactData;
      const { collectColumn } = internalData;
      const exportOpts = computeExportOpts.value;
      const hasTree = treeConfig;
      const customOpts = computeCustomOpts.value;
      const selectRecords = $xeTable.getCheckboxRecords();
      const proxyOpts = $xeGrid ? $xeGrid.getComputeMaps().computeProxyOpts.value : {};
      const hasFooter = !!footerTableData.length;
      const hasMerge = !hasTree && mergeList.length;
      const defOpts = Object.assign({
        message: true,
        isHeader: showHeader,
        isFooter: showFooter,
        current: "current",
        modes: ["current", "selected"].concat(proxyOpts.ajax && proxyOpts.ajax.queryAll ? ["all"] : [])
      }, options);
      const types = defOpts.types || import_xe_utils19.default.keys(exportOpts._typeMaps);
      const modes = defOpts.modes || [];
      const checkMethod = customOpts.checkMethod;
      const exportColumns = collectColumn.slice(0);
      const { columns } = defOpts;
      const typeList = types.map((value) => {
        return {
          value,
          label: getI18n11(`vxe.export.types.${value}`)
        };
      });
      const modeList = modes.map((item) => {
        if (item && item.value) {
          return {
            value: item.value,
            label: item.label || item.value
          };
        }
        return {
          value: item,
          label: getI18n11(`vxe.export.modes.${item}`)
        };
      });
      import_xe_utils19.default.eachTree(exportColumns, (column, index, items, path, parent) => {
        const isColGroup = column.children && column.children.length;
        if (isColGroup || defaultFilterExportColumn(column)) {
          column.checked = columns ? columns.some((item) => {
            if (isColumnInfo(item)) {
              return column === item;
            } else if (import_xe_utils19.default.isString(item)) {
              return column.field === item;
            } else {
              const colid = item.id || item.colId;
              const type = item.type;
              const field = item.property || item.field;
              if (colid) {
                return column.id === colid;
              } else if (field && type) {
                return column.property === field && column.type === type;
              } else if (field) {
                return column.property === field;
              } else if (type) {
                return column.type === type;
              }
            }
            return false;
          }) : column.visible;
          column.halfChecked = false;
          column.disabled = parent && parent.disabled || (checkMethod ? !checkMethod({ column }) : false);
        }
      });
      Object.assign(exportStore, {
        columns: exportColumns,
        typeList,
        modeList,
        hasFooter,
        hasMerge,
        hasTree,
        isPrint,
        hasColgroup: isGroup,
        visible: true
      });
      Object.assign(exportParams, {
        mode: selectRecords.length ? "selected" : "current"
      }, defOpts);
      if (!modeList.some((item) => item.value === exportParams.mode)) {
        exportParams.mode = modeList[0].value;
      }
      if (!typeList.some((item) => item.value === exportParams.type)) {
        exportParams.type = typeList[0].value;
      }
      initStore.export = true;
      return nextTick();
    };
    const exportMethods = {
      /**
       * 导出文件，支持 csv/html/xml/txt
       * 如果是树表格，则默认是导出所有节点
       * 如果是启用了虚拟滚动，则只能导出数据源，可以配合 dataFilterMethod 函数自行转换数据
       * @param {Object} options 参数
       */
      exportData(options) {
        const { treeConfig } = props;
        const { isGroup, tableGroupColumn } = reactData;
        const { tableFullColumn, afterFullData } = internalData;
        const exportOpts = computeExportOpts.value;
        const treeOpts = computeTreeOpts.value;
        const opts = Object.assign({
          // filename: '',
          // sheetName: '',
          // original: false,
          // message: false,
          isHeader: true,
          isFooter: true,
          isColgroup: true,
          // isMerge: false,
          // isAllExpand: false,
          download: true,
          type: "csv",
          mode: "current"
          // data: null,
          // remote: false,
          // dataFilterMethod: null,
          // footerFilterMethod: null,
          // exportMethod: null,
          // columnFilterMethod: null,
          // beforeExportMethod: null,
          // afterExportMethod: null
        }, exportOpts, {
          print: false
        }, options);
        const { type, mode, columns, original, beforeExportMethod } = opts;
        let groups = [];
        const customCols = columns && columns.length ? columns : null;
        let columnFilterMethod = opts.columnFilterMethod;
        if (!customCols && !columnFilterMethod) {
          columnFilterMethod = original ? ({ column }) => column.property : ({ column }) => defaultFilterExportColumn(column);
        }
        if (customCols) {
          opts._isCustomColumn = true;
          groups = import_xe_utils19.default.searchTree(import_xe_utils19.default.mapTree(customCols, (item) => {
            let targetColumn;
            if (item) {
              if (isColumnInfo(item)) {
                targetColumn = item;
              } else if (import_xe_utils19.default.isString(item)) {
                targetColumn = $xeTable.getColumnByField(item);
              } else {
                const colid = item.id || item.colId;
                const type2 = item.type;
                const field = item.property || item.field;
                if (colid) {
                  targetColumn = $xeTable.getColumnById(colid);
                } else if (field && type2) {
                  targetColumn = tableFullColumn.find((column) => column.property === field && column.type === type2);
                } else if (field) {
                  targetColumn = $xeTable.getColumnByField(field);
                } else if (type2) {
                  targetColumn = tableFullColumn.find((column) => column.type === type2);
                }
              }
              return targetColumn || {};
            }
          }, {
            children: "childNodes",
            mapChildren: "_children"
          }), (column, index) => isColumnInfo(column) && (!columnFilterMethod || columnFilterMethod({ column, $columnIndex: index })), {
            children: "_children",
            mapChildren: "childNodes",
            original: true
          });
        } else {
          groups = import_xe_utils19.default.searchTree(isGroup ? tableGroupColumn : tableFullColumn, (column, index) => column.visible && (!columnFilterMethod || columnFilterMethod({ column, $columnIndex: index })), { children: "children", mapChildren: "childNodes", original: true });
        }
        const cols = [];
        import_xe_utils19.default.eachTree(groups, (column) => {
          const isColGroup = column.children && column.children.length;
          if (!isColGroup) {
            cols.push(column);
          }
        }, { children: "childNodes" });
        opts.columns = cols;
        opts.colgroups = convertToRows(groups);
        if (!opts.filename) {
          opts.filename = getI18n11(opts.original ? "vxe.table.expOriginFilename" : "vxe.table.expFilename", [import_xe_utils19.default.toDateString(Date.now(), "yyyyMMddHHmmss")]);
        }
        if (!opts.sheetName) {
          opts.sheetName = document.title;
        }
        if (!opts.exportMethod && !import_xe_utils19.default.includes(import_xe_utils19.default.keys(exportOpts._typeMaps), type)) {
          if (true) {
            errLog("vxe.error.notType", [type]);
          }
          const params = { status: false };
          return Promise.reject(params);
        }
        if (!opts.print) {
          if (beforeExportMethod) {
            beforeExportMethod({ options: opts, $table: $xeTable, $grid: $xeGrid });
          }
        }
        if (!opts.data) {
          opts.data = [];
          if (mode === "selected") {
            const selectRecords = $xeTable.getCheckboxRecords();
            if (["html", "pdf"].indexOf(type) > -1 && treeConfig) {
              opts.data = import_xe_utils19.default.searchTree($xeTable.getTableData().fullData, (item) => $xeTable.findRowIndexOf(selectRecords, item) > -1, Object.assign({}, treeOpts, { data: "_row" }));
            } else {
              opts.data = selectRecords;
            }
          } else if (mode === "all") {
            if (true) {
              if (!$xeGrid) {
                warnLog("vxe.error.errProp", ["all", "mode=current,selected"]);
              }
            }
            if ($xeGrid && !opts.remote) {
              const { reactData: gridReactData } = $xeGrid;
              const { computeProxyOpts } = $xeGrid.getComputeMaps();
              const { sortData } = gridReactData;
              const proxyOpts = computeProxyOpts.value;
              const { beforeQueryAll, afterQueryAll, ajax = {}, props: props2 = {} } = proxyOpts;
              const ajaxMethods = ajax.queryAll;
              const queryAllSuccessMethods = ajax.queryAllSuccess;
              const queryAllErrorMethods = ajax.queryAllError;
              if (true) {
                if (!ajaxMethods) {
                  warnLog("vxe.error.notFunc", ["proxy-config.ajax.queryAll"]);
                }
              }
              if (ajaxMethods) {
                const params = {
                  $table: $xeTable,
                  $grid: $xeGrid,
                  sort: sortData.length ? sortData[0] : {},
                  sorts: sortData,
                  filters: gridReactData.filterData,
                  form: gridReactData.formData,
                  options: opts
                };
                return Promise.resolve((beforeQueryAll || ajaxMethods)(params)).then((rest) => {
                  opts.data = (props2.list ? import_xe_utils19.default.get(rest, props2.list) : rest) || [];
                  if (afterQueryAll) {
                    afterQueryAll(params);
                  }
                  if (queryAllSuccessMethods) {
                    queryAllSuccessMethods(Object.assign(Object.assign({}, params), { response: rest }));
                  }
                  return handleExport(opts);
                }).catch((rest) => {
                  if (queryAllErrorMethods) {
                    queryAllErrorMethods(Object.assign(Object.assign({}, params), { response: rest }));
                  }
                });
              }
            }
          } else if (mode === "current") {
            opts.data = afterFullData;
          }
        }
        return handleExport(opts);
      },
      importByFile(file, options) {
        const opts = Object.assign({}, options);
        const { beforeImportMethod } = opts;
        if (beforeImportMethod) {
          beforeImportMethod({ options: opts, $table: $xeTable });
        }
        return handleFileImport(file, opts);
      },
      importData(options) {
        const importOpts = computeImportOpts.value;
        const opts = Object.assign({
          types: import_xe_utils19.default.keys(importOpts._typeMaps)
          // beforeImportMethod: null,
          // afterImportMethod: null
        }, importOpts, options);
        const { beforeImportMethod, afterImportMethod } = opts;
        if (beforeImportMethod) {
          beforeImportMethod({ options: opts, $table: $xeTable });
        }
        return VxeUI.readFile(opts).catch((e) => {
          if (afterImportMethod) {
            afterImportMethod({ status: false, options: opts, $table: $xeTable });
          }
          return Promise.reject(e);
        }).then((params) => {
          const { file } = params;
          return handleFileImport(file, opts);
        });
      },
      saveFile(options) {
        return VxeUI.saveFile(options);
      },
      readFile(options) {
        return VxeUI.readFile(options);
      },
      print(options) {
        const printOpts = computePrintOpts.value;
        const opts = Object.assign({
          original: false
          // beforePrintMethod
        }, printOpts, options, {
          type: "html",
          download: false,
          remote: false,
          print: true
        });
        if (!opts.sheetName) {
          opts.sheetName = document.title;
        }
        const beforePrintMethod = opts.beforePrintMethod;
        const tableHtml = opts.html || opts.content;
        return new Promise((resolve, reject) => {
          if (VxeUI.print) {
            if (tableHtml) {
              resolve(VxeUI.print({
                title: opts.sheetName,
                html: tableHtml,
                customStyle: opts.style,
                beforeMethod: beforePrintMethod ? ({ html }) => {
                  return beforePrintMethod({
                    html,
                    content: html,
                    options: opts,
                    $table: $xeTable
                  });
                } : void 0
              }));
            } else {
              resolve(exportMethods.exportData(opts).then(({ content }) => {
                return VxeUI.print({
                  title: opts.sheetName,
                  html: content,
                  customStyle: opts.style,
                  beforeMethod: beforePrintMethod ? ({ html }) => {
                    return beforePrintMethod({
                      html,
                      content: html,
                      options: opts,
                      $table: $xeTable
                    });
                  } : void 0
                });
              }));
            }
          } else {
            const e = { status: false };
            reject(e);
          }
        });
      },
      getPrintHtml(options) {
        const printOpts = computePrintOpts.value;
        const opts = Object.assign({
          original: false
          // beforePrintMethod
        }, printOpts, options, {
          type: "html",
          download: false,
          remote: false,
          print: true
        });
        return exportMethods.exportData(opts).then(({ content }) => {
          return {
            html: content
          };
        });
      },
      openImport(options) {
        const { treeConfig, importConfig } = props;
        const { initStore, importStore, importParams } = reactData;
        const importOpts = computeImportOpts.value;
        const defOpts = Object.assign({
          mode: "insertTop",
          message: true,
          types: import_xe_utils19.default.keys(importOpts._typeMaps),
          modes: ["insertTop", "covering"]
        }, importOpts, options);
        const types = defOpts.types || [];
        const modes = defOpts.modes || [];
        const isTree = !!treeConfig;
        if (isTree) {
          if (defOpts.message) {
            if (VxeUI.modal) {
              VxeUI.modal.message({ content: getI18n11("vxe.error.treeNotImp"), status: "error" });
            }
          }
          return;
        }
        if (!importConfig) {
          errLog("vxe.error.reqProp", ["import-config"]);
        }
        const typeList = types.map((value) => {
          return {
            value,
            label: getI18n11(`vxe.export.types.${value}`)
          };
        });
        const modeList = modes.map((item) => {
          if (item && item.value) {
            return {
              value: item.value,
              label: item.label || item.value
            };
          }
          return {
            value: item,
            label: getI18n11(`vxe.import.modes.${item}`)
          };
        });
        Object.assign(importStore, {
          file: null,
          type: "",
          filename: "",
          modeList,
          typeList,
          visible: true
        });
        Object.assign(importParams, defOpts);
        if (!modeList.some((item) => item.value === importParams.mode)) {
          importParams.mode = modeList[0].value;
        }
        initStore.import = true;
      },
      openExport(options) {
        const exportOpts = computeExportOpts.value;
        const defOpts = Object.assign({
          message: true,
          types: import_xe_utils19.default.keys(exportOpts._typeMaps)
        }, exportOpts, options);
        if (true) {
          if (!props.exportConfig) {
            errLog("vxe.error.reqProp", ["export-config"]);
          }
        }
        handleExportAndPrint(defOpts);
      },
      openPrint(options) {
        const printOpts = computePrintOpts.value;
        const defOpts = Object.assign({
          message: true
        }, printOpts, options);
        if (true) {
          if (!props.printConfig) {
            errLog("vxe.error.reqProp", ["print-config"]);
          }
        }
        handleExportAndPrint(defOpts, true);
      }
    };
    return exportMethods;
  },
  setupGrid($xeGrid) {
    return $xeGrid.extendTableMethods(tableExportMethodKeys);
  }
});

// node_modules/.pnpm/vxe-table@4.7.86_vue@3.5.12_typescript@5.6.3_/node_modules/vxe-table/es/table/module/keyboard/hook.js
var import_xe_utils20 = __toESM(require_xe_utils());
var { hooks: hooks7 } = VxeUI;
function getTargetOffset(target, container) {
  let offsetTop = 0;
  let offsetLeft = 0;
  const triggerCheckboxLabel = !browse.firefox && hasClass(target, "vxe-checkbox--label");
  if (triggerCheckboxLabel) {
    const checkboxLabelStyle = getComputedStyle(target);
    offsetTop -= import_xe_utils20.default.toNumber(checkboxLabelStyle.paddingTop);
    offsetLeft -= import_xe_utils20.default.toNumber(checkboxLabelStyle.paddingLeft);
  }
  while (target && target !== container) {
    offsetTop += target.offsetTop;
    offsetLeft += target.offsetLeft;
    target = target.offsetParent;
    if (triggerCheckboxLabel) {
      const checkboxStyle = getComputedStyle(target);
      offsetTop -= import_xe_utils20.default.toNumber(checkboxStyle.paddingTop);
      offsetLeft -= import_xe_utils20.default.toNumber(checkboxStyle.paddingLeft);
    }
  }
  return { offsetTop, offsetLeft };
}
hooks7.add("tableKeyboardModule", {
  setupTable($xeTable) {
    const { props, reactData, internalData } = $xeTable;
    const { refElem } = $xeTable.getRefMaps();
    const { computeEditOpts, computeCheckboxOpts, computeMouseOpts, computeTreeOpts } = $xeTable.getComputeMaps();
    function getCheckboxRangeRows(params, targetTrElem, moveRange) {
      let countHeight = 0;
      let rangeRows = [];
      const isDown = moveRange > 0;
      const moveSize = moveRange > 0 ? moveRange : Math.abs(moveRange) + targetTrElem.offsetHeight;
      const { scrollYLoad } = reactData;
      const { afterFullData, scrollYStore } = internalData;
      if (scrollYLoad) {
        const _rowIndex = $xeTable.getVTRowIndex(params.row);
        if (isDown) {
          rangeRows = afterFullData.slice(_rowIndex, _rowIndex + Math.ceil(moveSize / scrollYStore.rowHeight));
        } else {
          rangeRows = afterFullData.slice(_rowIndex - Math.floor(moveSize / scrollYStore.rowHeight) + 1, _rowIndex + 1);
        }
      } else {
        const siblingProp = isDown ? "next" : "previous";
        while (targetTrElem && countHeight < moveSize) {
          const rowNodeRest = $xeTable.getRowNode(targetTrElem);
          if (rowNodeRest) {
            rangeRows.push(rowNodeRest.item);
            countHeight += targetTrElem.offsetHeight;
            targetTrElem = targetTrElem[`${siblingProp}ElementSibling`];
          }
        }
      }
      return rangeRows;
    }
    const handleCheckboxRangeEvent = (evnt, params) => {
      const { column, cell } = params;
      if (column.type === "checkbox") {
        const el = refElem.value;
        const { elemStore } = internalData;
        const disX = evnt.clientX;
        const disY = evnt.clientY;
        const bodyWrapperRef = elemStore[`${column.fixed || "main"}-body-wrapper`] || elemStore["main-body-wrapper"];
        const bodyWrapperElem = bodyWrapperRef ? bodyWrapperRef.value : null;
        if (!bodyWrapperElem) {
          return;
        }
        const checkboxRangeElem = bodyWrapperElem.querySelector(".vxe-table--checkbox-range");
        const domMousemove = document.onmousemove;
        const domMouseup = document.onmouseup;
        const trElem = cell.parentNode;
        const selectRecords = $xeTable.getCheckboxRecords();
        let lastRangeRows = [];
        const marginSize = 1;
        const offsetRest = getTargetOffset(evnt.target, bodyWrapperElem);
        const startTop = offsetRest.offsetTop + evnt.offsetY;
        const startLeft = offsetRest.offsetLeft + evnt.offsetX;
        const startScrollTop = bodyWrapperElem.scrollTop;
        const rowHeight = trElem.offsetHeight;
        let mouseScrollTimeout = null;
        let isMouseScrollDown = false;
        let mouseScrollSpaceSize = 1;
        const triggerEvent2 = (type, evnt2) => {
          $xeTable.dispatchEvent(`checkbox-range-${type}`, { records: $xeTable.getCheckboxRecords(), reserves: $xeTable.getCheckboxReserveRecords() }, evnt2);
        };
        const handleChecked = (evnt2) => {
          const { clientX, clientY } = evnt2;
          const offsetLeft = clientX - disX;
          const offsetTop = clientY - disY + (bodyWrapperElem.scrollTop - startScrollTop);
          let rangeHeight = Math.abs(offsetTop);
          let rangeWidth = Math.abs(offsetLeft);
          let rangeTop = startTop;
          let rangeLeft = startLeft;
          if (offsetTop < marginSize) {
            rangeTop += offsetTop;
            if (rangeTop < marginSize) {
              rangeTop = marginSize;
              rangeHeight = startTop;
            }
          } else {
            rangeHeight = Math.min(rangeHeight, bodyWrapperElem.scrollHeight - startTop - marginSize);
          }
          if (offsetLeft < marginSize) {
            rangeLeft += offsetLeft;
            if (rangeWidth > startLeft) {
              rangeLeft = marginSize;
              rangeWidth = startLeft;
            }
          } else {
            rangeWidth = Math.min(rangeWidth, bodyWrapperElem.clientWidth - startLeft - marginSize);
          }
          checkboxRangeElem.style.height = `${rangeHeight}px`;
          checkboxRangeElem.style.width = `${rangeWidth}px`;
          checkboxRangeElem.style.left = `${rangeLeft}px`;
          checkboxRangeElem.style.top = `${rangeTop}px`;
          checkboxRangeElem.style.display = "block";
          const rangeRows = getCheckboxRangeRows(params, trElem, offsetTop < marginSize ? -rangeHeight : rangeHeight);
          if (rangeHeight > 10 && rangeRows.length !== lastRangeRows.length) {
            lastRangeRows = rangeRows;
            if (evnt2.ctrlKey) {
              rangeRows.forEach((row) => {
                $xeTable.handleSelectRow({ row }, selectRecords.indexOf(row) === -1);
              });
            } else {
              $xeTable.setAllCheckboxRow(false);
              $xeTable.handleCheckedCheckboxRow(rangeRows, true, false);
            }
            triggerEvent2("change", evnt2);
          }
        };
        const stopMouseScroll = () => {
          clearTimeout(mouseScrollTimeout);
          mouseScrollTimeout = null;
        };
        const startMouseScroll = (evnt2) => {
          stopMouseScroll();
          mouseScrollTimeout = setTimeout(() => {
            if (mouseScrollTimeout) {
              const { scrollLeft, scrollTop, clientHeight, scrollHeight } = bodyWrapperElem;
              const topSize = Math.ceil(mouseScrollSpaceSize * 50 / rowHeight);
              if (isMouseScrollDown) {
                if (scrollTop + clientHeight < scrollHeight) {
                  $xeTable.scrollTo(scrollLeft, scrollTop + topSize);
                  startMouseScroll(evnt2);
                  handleChecked(evnt2);
                } else {
                  stopMouseScroll();
                }
              } else {
                if (scrollTop) {
                  $xeTable.scrollTo(scrollLeft, scrollTop - topSize);
                  startMouseScroll(evnt2);
                  handleChecked(evnt2);
                } else {
                  stopMouseScroll();
                }
              }
            }
          }, 50);
        };
        addClass(el, "drag--range");
        document.onmousemove = (evnt2) => {
          evnt2.preventDefault();
          evnt2.stopPropagation();
          const { clientY } = evnt2;
          const { boundingTop } = getAbsolutePos(bodyWrapperElem);
          if (clientY < boundingTop) {
            isMouseScrollDown = false;
            mouseScrollSpaceSize = boundingTop - clientY;
            if (!mouseScrollTimeout) {
              startMouseScroll(evnt2);
            }
          } else if (clientY > boundingTop + bodyWrapperElem.clientHeight) {
            isMouseScrollDown = true;
            mouseScrollSpaceSize = clientY - boundingTop - bodyWrapperElem.clientHeight;
            if (!mouseScrollTimeout) {
              startMouseScroll(evnt2);
            }
          } else if (mouseScrollTimeout) {
            stopMouseScroll();
          }
          handleChecked(evnt2);
        };
        document.onmouseup = (evnt2) => {
          stopMouseScroll();
          removeClass(el, "drag--range");
          checkboxRangeElem.removeAttribute("style");
          document.onmousemove = domMousemove;
          document.onmouseup = domMouseup;
          triggerEvent2("end", evnt2);
        };
        triggerEvent2("start", evnt);
      }
    };
    const handleCellMousedownEvent = (evnt, params) => {
      const { editConfig, checkboxConfig, mouseConfig } = props;
      const checkboxOpts = computeCheckboxOpts.value;
      const mouseOpts = computeMouseOpts.value;
      const editOpts = computeEditOpts.value;
      if (mouseConfig && mouseOpts.area && $xeTable.handleCellAreaEvent) {
        return $xeTable.handleCellAreaEvent(evnt, params);
      } else {
        if (checkboxConfig && checkboxOpts.range) {
          handleCheckboxRangeEvent(evnt, params);
        }
        if (mouseConfig && mouseOpts.selected) {
          if (!editConfig || editOpts.mode === "cell") {
            $xeTable.handleSelected(params, evnt);
          }
        }
      }
    };
    const keyboardMethods = {
      // 处理 Tab 键移动
      moveTabSelected(args, isLeft, evnt) {
        const { editConfig } = props;
        const { afterFullData, visibleColumn } = internalData;
        const editOpts = computeEditOpts.value;
        let targetRow;
        let targetRowIndex;
        let targetColumnIndex;
        const params = Object.assign({}, args);
        const _rowIndex = $xeTable.getVTRowIndex(params.row);
        const _columnIndex = $xeTable.getVTColumnIndex(params.column);
        evnt.preventDefault();
        if (isLeft) {
          if (_columnIndex <= 0) {
            if (_rowIndex > 0) {
              targetRowIndex = _rowIndex - 1;
              targetRow = afterFullData[targetRowIndex];
              targetColumnIndex = visibleColumn.length - 1;
            }
          } else {
            targetColumnIndex = _columnIndex - 1;
          }
        } else {
          if (_columnIndex >= visibleColumn.length - 1) {
            if (_rowIndex < afterFullData.length - 1) {
              targetRowIndex = _rowIndex + 1;
              targetRow = afterFullData[targetRowIndex];
              targetColumnIndex = 0;
            }
          } else {
            targetColumnIndex = _columnIndex + 1;
          }
        }
        const targetColumn = visibleColumn[targetColumnIndex];
        if (targetColumn) {
          if (targetRow) {
            params.rowIndex = targetRowIndex;
            params.row = targetRow;
          } else {
            params.rowIndex = _rowIndex;
          }
          params.columnIndex = targetColumnIndex;
          params.column = targetColumn;
          params.cell = $xeTable.getCellElement(params.row, params.column);
          if (editConfig) {
            if (editOpts.trigger === "click" || editOpts.trigger === "dblclick") {
              if (editOpts.mode === "row") {
                $xeTable.handleEdit(params, evnt);
              } else {
                $xeTable.scrollToRow(params.row, params.column).then(() => $xeTable.handleSelected(params, evnt));
              }
            }
          } else {
            $xeTable.scrollToRow(params.row, params.column).then(() => $xeTable.handleSelected(params, evnt));
          }
        }
      },
      // 处理当前行方向键移动
      moveCurrentRow(isUpArrow, isDwArrow, evnt) {
        const { treeConfig } = props;
        const { currentRow } = reactData;
        const { afterFullData } = internalData;
        const treeOpts = computeTreeOpts.value;
        const childrenField = treeOpts.children || treeOpts.childrenField;
        let targetRow;
        evnt.preventDefault();
        if (currentRow) {
          if (treeConfig) {
            const { index, items } = import_xe_utils20.default.findTree(afterFullData, (item) => item === currentRow, { children: childrenField });
            if (isUpArrow && index > 0) {
              targetRow = items[index - 1];
            } else if (isDwArrow && index < items.length - 1) {
              targetRow = items[index + 1];
            }
          } else {
            const _rowIndex = $xeTable.getVTRowIndex(currentRow);
            if (isUpArrow && _rowIndex > 0) {
              targetRow = afterFullData[_rowIndex - 1];
            } else if (isDwArrow && _rowIndex < afterFullData.length - 1) {
              targetRow = afterFullData[_rowIndex + 1];
            }
          }
        } else {
          targetRow = afterFullData[0];
        }
        if (targetRow) {
          const params = {
            $table: $xeTable,
            row: targetRow,
            rowIndex: $xeTable.getRowIndex(targetRow),
            $rowIndex: $xeTable.getVMRowIndex(targetRow)
          };
          $xeTable.scrollToRow(targetRow).then(() => $xeTable.triggerCurrentRowEvent(evnt, params));
        }
      },
      // 处理可编辑方向键移动
      moveSelected(args, isLeftArrow, isUpArrow, isRightArrow, isDwArrow, evnt) {
        const { afterFullData, visibleColumn } = internalData;
        const params = Object.assign({}, args);
        const _rowIndex = $xeTable.getVTRowIndex(params.row);
        const _columnIndex = $xeTable.getVTColumnIndex(params.column);
        evnt.preventDefault();
        if (isUpArrow && _rowIndex > 0) {
          params.rowIndex = _rowIndex - 1;
          params.row = afterFullData[params.rowIndex];
        } else if (isDwArrow && _rowIndex < afterFullData.length - 1) {
          params.rowIndex = _rowIndex + 1;
          params.row = afterFullData[params.rowIndex];
        } else if (isLeftArrow && _columnIndex) {
          params.columnIndex = _columnIndex - 1;
          params.column = visibleColumn[params.columnIndex];
        } else if (isRightArrow && _columnIndex < visibleColumn.length - 1) {
          params.columnIndex = _columnIndex + 1;
          params.column = visibleColumn[params.columnIndex];
        }
        $xeTable.scrollToRow(params.row, params.column).then(() => {
          params.cell = $xeTable.getCellElement(params.row, params.column);
          $xeTable.handleSelected(params, evnt);
        });
      },
      /**
       * 表头单元格按下事件
       */
      triggerHeaderCellMousedownEvent(evnt, params) {
        const { mouseConfig } = props;
        const mouseOpts = computeMouseOpts.value;
        if (mouseConfig && mouseOpts.area && $xeTable.handleHeaderCellAreaEvent) {
          const cell = evnt.currentTarget;
          const triggerSort = getEventTargetNode(evnt, cell, "vxe-cell--sort").flag;
          const triggerFilter = getEventTargetNode(evnt, cell, "vxe-cell--filter").flag;
          $xeTable.handleHeaderCellAreaEvent(evnt, Object.assign({ cell, triggerSort, triggerFilter }, params));
        }
        $xeTable.focus();
        if ($xeTable.closeMenu) {
          $xeTable.closeMenu();
        }
      },
      /**
       * 单元格按下事件
       */
      triggerCellMousedownEvent(evnt, params) {
        const cell = evnt.currentTarget;
        params.cell = cell;
        handleCellMousedownEvent(evnt, params);
        $xeTable.focus();
        $xeTable.closeFilter();
        if ($xeTable.closeMenu) {
          $xeTable.closeMenu();
        }
      }
    };
    return keyboardMethods;
  }
});

// node_modules/.pnpm/vxe-table@4.7.86_vue@3.5.12_typescript@5.6.3_/node_modules/vxe-table/es/table/module/validator/hook.js
init_vue_runtime_esm_bundler();
var import_xe_utils21 = __toESM(require_xe_utils());
var { getConfig: getConfig5, validators: validators2, hooks: hooks8 } = VxeUI;
var Rule = class {
  constructor(rule) {
    Object.assign(this, {
      $options: rule,
      required: rule.required,
      min: rule.min,
      max: rule.max,
      type: rule.type,
      pattern: rule.pattern,
      validator: rule.validator,
      trigger: rule.trigger,
      maxWidth: rule.maxWidth
    });
  }
  /**
   * 获取校验不通过的消息
   * 支持国际化翻译
   */
  get content() {
    return getFuncText(this.$options.content || this.$options.message);
  }
  get message() {
    return this.content;
  }
};
var tableValidatorMethodKeys = ["fullValidate", "validate", "clearValidate"];
hooks8.add("tableValidatorModule", {
  setupTable($xeTable) {
    const { props, reactData, internalData } = $xeTable;
    const { refValidTooltip } = $xeTable.getRefMaps();
    const { computeValidOpts, computeTreeOpts, computeEditOpts } = $xeTable.getComputeMaps();
    let validatorMethods = {};
    let validatorPrivateMethods = {};
    let validRuleErr;
    const handleValidError = (params) => {
      return new Promise((resolve) => {
        const validOpts = computeValidOpts.value;
        if (validOpts.autoPos === false) {
          $xeTable.dispatchEvent("valid-error", params, null);
          resolve();
        } else {
          $xeTable.handleEdit(params, { type: "valid-error", trigger: "call" }).then(() => {
            resolve(validatorPrivateMethods.showValidTooltip(params));
          });
        }
      });
    };
    const handleErrMsgMode = (validErrMaps) => {
      const validOpts = computeValidOpts.value;
      if (validOpts.msgMode === "single") {
        const keys = Object.keys(validErrMaps);
        const resMaps = validErrMaps;
        if (keys.length) {
          const firstKey = keys[0];
          resMaps[firstKey] = validErrMaps[firstKey];
        }
        return resMaps;
      }
      return validErrMaps;
    };
    const beginValidate = (rows, cb, isFull) => {
      const validRest = {};
      const { editRules, treeConfig } = props;
      const { afterFullData, visibleColumn } = internalData;
      const treeOpts = computeTreeOpts.value;
      const childrenField = treeOpts.children || treeOpts.childrenField;
      const validOpts = computeValidOpts.value;
      let validList;
      if (rows === true) {
        validList = afterFullData;
      } else if (rows) {
        if (import_xe_utils21.default.isFunction(rows)) {
          cb = rows;
        } else {
          validList = import_xe_utils21.default.isArray(rows) ? rows : [rows];
        }
      }
      if (!validList) {
        if ($xeTable.getInsertRecords) {
          validList = $xeTable.getInsertRecords().concat($xeTable.getUpdateRecords());
        } else {
          validList = [];
        }
      }
      const rowValidErrs = [];
      internalData._lastCallTime = Date.now();
      validRuleErr = false;
      validatorMethods.clearValidate();
      const validErrMaps = {};
      if (editRules) {
        const columns = $xeTable.getColumns();
        const handleVaild = (row) => {
          if (isFull || !validRuleErr) {
            const colVailds = [];
            columns.forEach((column) => {
              if ((isFull || !validRuleErr) && import_xe_utils21.default.has(editRules, column.property)) {
                colVailds.push(validatorPrivateMethods.validCellRules("all", row, column).catch(({ rule, rules }) => {
                  const rest = {
                    rule,
                    rules,
                    rowIndex: $xeTable.getRowIndex(row),
                    row,
                    columnIndex: $xeTable.getColumnIndex(column),
                    column,
                    field: column.property,
                    $table: $xeTable
                  };
                  if (!validRest[column.property]) {
                    validRest[column.property] = [];
                  }
                  validErrMaps[`${getRowid($xeTable, row)}:${column.id}`] = {
                    column,
                    row,
                    rule,
                    content: rule.content
                  };
                  validRest[column.property].push(rest);
                  if (!isFull) {
                    validRuleErr = true;
                    return Promise.reject(rest);
                  }
                }));
              }
            });
            rowValidErrs.push(Promise.all(colVailds));
          }
        };
        if (treeConfig) {
          import_xe_utils21.default.eachTree(validList, handleVaild, { children: childrenField });
        } else {
          validList.forEach(handleVaild);
        }
        return Promise.all(rowValidErrs).then(() => {
          const ruleProps = Object.keys(validRest);
          reactData.validErrorMaps = handleErrMsgMode(validErrMaps);
          return nextTick().then(() => {
            if (ruleProps.length) {
              return Promise.reject(validRest[ruleProps[0]][0]);
            }
            if (cb) {
              cb();
            }
          });
        }).catch((firstErrParams) => {
          return new Promise((resolve, reject) => {
            const finish = () => {
              nextTick(() => {
                if (cb) {
                  cb(validRest);
                  resolve();
                } else {
                  if (getConfig5().validToReject === "obsolete") {
                    reject(validRest);
                  } else {
                    resolve(validRest);
                  }
                }
              });
            };
            const posAndFinish = () => {
              firstErrParams.cell = $xeTable.getCellElement(firstErrParams.row, firstErrParams.column);
              scrollToView(firstErrParams.cell);
              handleValidError(firstErrParams).then(finish);
            };
            if (validOpts.autoPos === false) {
              finish();
            } else {
              const row = firstErrParams.row;
              const column = firstErrParams.column;
              const rowIndex = afterFullData.indexOf(row);
              const columnIndex = visibleColumn.indexOf(column);
              const targetRow = rowIndex > 0 ? afterFullData[rowIndex - 1] : row;
              const targetColumn = columnIndex > 0 ? visibleColumn[columnIndex - 1] : column;
              $xeTable.scrollToRow(targetRow, targetColumn).then(posAndFinish);
            }
          });
        });
      } else {
        reactData.validErrorMaps = {};
      }
      return nextTick().then(() => {
        if (cb) {
          cb();
        }
      });
    };
    validatorMethods = {
      /**
       * 完整校验，和 validate 的区别就是会给有效数据中的每一行进行校验
       */
      fullValidate(rows, cb) {
        if (true) {
          if (import_xe_utils21.default.isFunction(cb)) {
            warnLog("vxe.error.notValidators", ["fullValidate(rows, callback)", "fullValidate(rows)"]);
          }
        }
        return beginValidate(rows, cb, true);
      },
      /**
       * 快速校验，如果存在记录不通过的记录，则返回不再继续校验（异步校验除外）
       */
      validate(rows, cb) {
        if (true) {
          if (import_xe_utils21.default.isFunction(cb)) {
            warnLog("vxe.error.notValidators", ["validate(rows, callback)", "validate(rows)"]);
          }
        }
        return beginValidate(rows, cb);
      },
      clearValidate(rows, fieldOrColumn) {
        const { validErrorMaps } = reactData;
        const validTip = refValidTooltip.value;
        const validOpts = computeValidOpts.value;
        const rowList = import_xe_utils21.default.isArray(rows) ? rows : rows ? [rows] : [];
        const colList = import_xe_utils21.default.isArray(fieldOrColumn) ? fieldOrColumn : (fieldOrColumn ? [fieldOrColumn] : []).map((column) => handleFieldOrColumn($xeTable, column));
        let validErrMaps = {};
        if (validTip && validTip.reactData.visible) {
          validTip.close();
        }
        if (validOpts.msgMode === "single") {
          reactData.validErrorMaps = {};
          return nextTick();
        }
        if (rowList.length && colList.length) {
          validErrMaps = Object.assign({}, validErrorMaps);
          rowList.forEach((row) => {
            colList.forEach((column) => {
              const validKey = `${getRowid($xeTable, row)}:${column.id}`;
              if (validErrMaps[validKey]) {
                delete validErrMaps[validKey];
              }
            });
          });
        } else if (rowList.length) {
          const rowIdList = rowList.map((row) => `${getRowid($xeTable, row)}`);
          import_xe_utils21.default.each(validErrorMaps, (item, key) => {
            if (rowIdList.indexOf(key.split(":")[0]) > -1) {
              validErrMaps[key] = item;
            }
          });
        } else if (colList.length) {
          const colidList = colList.map((column) => `${column.id}`);
          import_xe_utils21.default.each(validErrorMaps, (item, key) => {
            if (colidList.indexOf(key.split(":")[1]) > -1) {
              validErrMaps[key] = item;
            }
          });
        }
        reactData.validErrorMaps = validErrMaps;
        return nextTick();
      }
    };
    const validErrorRuleValue = (rule, val) => {
      const { type, min, max, pattern } = rule;
      const isNumType = type === "number";
      const numVal = isNumType ? import_xe_utils21.default.toNumber(val) : import_xe_utils21.default.getSize(val);
      if (isNumType && isNaN(val)) {
        return true;
      }
      if (!import_xe_utils21.default.eqNull(min) && numVal < import_xe_utils21.default.toNumber(min)) {
        return true;
      }
      if (!import_xe_utils21.default.eqNull(max) && numVal > import_xe_utils21.default.toNumber(max)) {
        return true;
      }
      if (pattern && !(import_xe_utils21.default.isRegExp(pattern) ? pattern : new RegExp(pattern)).test(val)) {
        return true;
      }
      return false;
    };
    validatorPrivateMethods = {
      /**
       * 校验数据
       * 按表格行、列顺序依次校验（同步或异步）
       * 校验规则根据索引顺序依次校验，如果是异步则会等待校验完成才会继续校验下一列
       * 如果校验失败则，触发回调或者Promise<不通过列的错误消息>
       * 如果是传回调方式这返回一个校验不通过列的错误消息
       *
       * rule 配置：
       *  required=Boolean 是否必填
       *  min=Number 最小长度
       *  max=Number 最大长度
       *  validator=Function({ cellValue, rule, rules, row, column, rowIndex, columnIndex }) 自定义校验，接收一个 Promise
       *  trigger=blur|change 触发方式（除非特殊场景，否则默认为空就行）
       */
      validCellRules(validType, row, column, val) {
        const { editRules } = props;
        const { field } = column;
        const errorRules = [];
        const syncValidList = [];
        if (field && editRules) {
          const rules = import_xe_utils21.default.get(editRules, field);
          if (rules) {
            const cellValue = import_xe_utils21.default.isUndefined(val) ? import_xe_utils21.default.get(row, field) : val;
            rules.forEach((rule) => {
              const { type, trigger, required, validator } = rule;
              if (validType === "all" || !trigger || validType === trigger) {
                if (validator) {
                  const validParams = {
                    cellValue,
                    rule,
                    rules,
                    row,
                    rowIndex: $xeTable.getRowIndex(row),
                    column,
                    columnIndex: $xeTable.getColumnIndex(column),
                    field: column.field,
                    $table: $xeTable,
                    $grid: $xeTable.xegrid
                  };
                  let customValid;
                  if (import_xe_utils21.default.isString(validator)) {
                    const gvItem = validators2.get(validator);
                    if (gvItem) {
                      const tcvMethod = gvItem.tableCellValidatorMethod || gvItem.cellValidatorMethod;
                      if (tcvMethod) {
                        customValid = tcvMethod(validParams);
                      } else {
                        if (true) {
                          warnLog("vxe.error.notValidators", [validator]);
                        }
                      }
                    } else {
                      if (true) {
                        errLog("vxe.error.notValidators", [validator]);
                      }
                    }
                  } else {
                    customValid = validator(validParams);
                  }
                  if (customValid) {
                    if (import_xe_utils21.default.isError(customValid)) {
                      validRuleErr = true;
                      errorRules.push(new Rule({ type: "custom", trigger, content: customValid.message, rule: new Rule(rule) }));
                    } else if (customValid.catch) {
                      syncValidList.push(customValid.catch((e) => {
                        validRuleErr = true;
                        errorRules.push(new Rule({ type: "custom", trigger, content: e && e.message ? e.message : rule.content || rule.message, rule: new Rule(rule) }));
                      }));
                    }
                  }
                } else {
                  const isArrType = type === "array";
                  const isArrVal = import_xe_utils21.default.isArray(cellValue);
                  let hasEmpty = true;
                  if (isArrType || isArrVal) {
                    hasEmpty = !isArrVal || !cellValue.length;
                  } else if (import_xe_utils21.default.isString(cellValue)) {
                    hasEmpty = eqEmptyValue(cellValue.trim());
                  } else {
                    hasEmpty = eqEmptyValue(cellValue);
                  }
                  if (required ? hasEmpty || validErrorRuleValue(rule, cellValue) : !hasEmpty && validErrorRuleValue(rule, cellValue)) {
                    validRuleErr = true;
                    errorRules.push(new Rule(rule));
                  }
                }
              }
            });
          }
        }
        return Promise.all(syncValidList).then(() => {
          if (errorRules.length) {
            const rest = { rules: errorRules, rule: errorRules[0] };
            return Promise.reject(rest);
          }
        });
      },
      hasCellRules(type, row, column) {
        const { editRules } = props;
        const { field } = column;
        if (field && editRules) {
          const rules = import_xe_utils21.default.get(editRules, field);
          return rules && !!import_xe_utils21.default.find(rules, (rule) => type === "all" || !rule.trigger || type === rule.trigger);
        }
        return false;
      },
      /**
       * 触发校验
       */
      triggerValidate(type) {
        const { editConfig, editRules } = props;
        const { editStore } = reactData;
        const { actived } = editStore;
        const editOpts = computeEditOpts.value;
        const validOpts = computeValidOpts.value;
        if (editRules && validOpts.msgMode === "single") {
          reactData.validErrorMaps = {};
        }
        if (editConfig && editRules && actived.row) {
          const { row, column, cell } = actived.args;
          if (validatorPrivateMethods.hasCellRules(type, row, column)) {
            return validatorPrivateMethods.validCellRules(type, row, column).then(() => {
              if (editOpts.mode === "row") {
                validatorMethods.clearValidate(row, column);
              }
            }).catch(({ rule }) => {
              if (!rule.trigger || type === rule.trigger) {
                const rest = { rule, row, column, cell };
                validatorPrivateMethods.showValidTooltip(rest);
                return Promise.reject(rest);
              }
              return Promise.resolve();
            });
          }
        }
        return Promise.resolve();
      },
      /**
       * 弹出校验错误提示
       */
      showValidTooltip(params) {
        const { height } = props;
        const { tableData, validStore, validErrorMaps } = reactData;
        const { rule, row, column, cell } = params;
        const validOpts = computeValidOpts.value;
        const validTip = refValidTooltip.value;
        const content = rule.content;
        validStore.visible = true;
        if (validOpts.msgMode === "single") {
          reactData.validErrorMaps = {
            [`${getRowid($xeTable, row)}:${column.id}`]: {
              column,
              row,
              rule,
              content
            }
          };
        } else {
          reactData.validErrorMaps = Object.assign({}, validErrorMaps, {
            [`${getRowid($xeTable, row)}:${column.id}`]: {
              column,
              row,
              rule,
              content
            }
          });
        }
        $xeTable.dispatchEvent("valid-error", params, null);
        if (validTip) {
          if (validTip && (validOpts.message === "tooltip" || validOpts.message === "default" && !height && tableData.length < 2)) {
            return validTip.open(cell, content);
          }
        }
        return nextTick();
      }
    };
    return Object.assign(Object.assign({}, validatorMethods), validatorPrivateMethods);
  },
  setupGrid($xeGrid) {
    return $xeGrid.extendTableMethods(tableValidatorMethodKeys);
  }
});

// node_modules/.pnpm/vxe-table@4.7.86_vue@3.5.12_typescript@5.6.3_/node_modules/vxe-table/es/table/module/custom/hook.js
init_vue_runtime_esm_bundler();
var import_xe_utils22 = __toESM(require_xe_utils());
var tableCustomMethodKeys = ["openCustom", "closeCustom"];
VxeUI.hooks.add("tableCustomModule", {
  setupTable($xeTable) {
    const { reactData, internalData } = $xeTable;
    const { computeCustomOpts } = $xeTable.getComputeMaps();
    const { refElem } = $xeTable.getRefMaps();
    const $xeGrid = $xeTable.xegrid;
    const calcMaxHeight = () => {
      const { customStore } = reactData;
      const el = refElem.value;
      let tableHeight = 0;
      if (el) {
        tableHeight = el.clientHeight - 28;
      }
      customStore.maxHeight = Math.max(4, tableHeight);
    };
    const openCustom = () => {
      const { initStore, customStore } = reactData;
      const { collectColumn } = internalData;
      const sortMaps = {};
      const fixedMaps = {};
      const visibleMaps = {};
      import_xe_utils22.default.eachTree(collectColumn, (column) => {
        const colid = column.getKey();
        column.renderFixed = column.fixed;
        column.renderVisible = column.visible;
        column.renderResizeWidth = column.renderWidth;
        sortMaps[colid] = column.renderSortNumber;
        fixedMaps[colid] = column.fixed;
        visibleMaps[colid] = column.visible;
      }, { children: "children" });
      customStore.oldSortMaps = sortMaps;
      customStore.oldFixedMaps = fixedMaps;
      customStore.oldVisibleMaps = visibleMaps;
      reactData.customColumnList = collectColumn.slice(0);
      customStore.visible = true;
      initStore.custom = true;
      checkCustomStatus();
      calcMaxHeight();
      return nextTick().then(() => calcMaxHeight());
    };
    const closeCustom = () => {
      const { customStore } = reactData;
      const customOpts = computeCustomOpts.value;
      if (customStore.visible) {
        customStore.visible = false;
        if (!customOpts.immediate) {
          $xeTable.handleCustom();
        }
      }
      return nextTick();
    };
    const customMethods = {
      openCustom,
      closeCustom
    };
    const checkCustomStatus = () => {
      const { customStore } = reactData;
      const { collectColumn } = internalData;
      const customOpts = computeCustomOpts.value;
      const { checkMethod } = customOpts;
      customStore.isAll = collectColumn.every((column) => (checkMethod ? !checkMethod({ column }) : false) || column.renderVisible);
      customStore.isIndeterminate = !customStore.isAll && collectColumn.some((column) => (!checkMethod || checkMethod({ column })) && (column.renderVisible || column.halfVisible));
    };
    const emitCustomEvent = (type, evnt) => {
      const comp = $xeGrid || $xeTable;
      comp.dispatchEvent("custom", { type }, evnt);
    };
    const customPrivateMethods = {
      checkCustomStatus,
      emitCustomEvent,
      triggerCustomEvent(evnt) {
        const { customStore } = $xeTable.reactData;
        if (customStore.visible) {
          closeCustom();
          emitCustomEvent("close", evnt);
        } else {
          customStore.btnEl = evnt.target;
          openCustom();
          emitCustomEvent("open", evnt);
        }
      },
      customOpenEvent(evnt) {
        const { customStore } = reactData;
        if (!customStore.visible) {
          customStore.activeBtn = true;
          customStore.btnEl = evnt.target;
          $xeTable.openCustom();
          $xeTable.emitCustomEvent("open", evnt);
        }
      },
      customCloseEvent(evnt) {
        const { customStore } = reactData;
        if (customStore.visible) {
          customStore.activeBtn = false;
          $xeTable.closeCustom();
          $xeTable.emitCustomEvent("close", evnt);
        }
      }
    };
    return Object.assign(Object.assign({}, customMethods), customPrivateMethods);
  },
  setupGrid($xeGrid) {
    return $xeGrid.extendTableMethods(tableCustomMethodKeys);
  }
});

// node_modules/.pnpm/vxe-table@4.7.86_vue@3.5.12_typescript@5.6.3_/node_modules/vxe-table/es/table/render/index.js
init_vue_runtime_esm_bundler();
var import_xe_utils23 = __toESM(require_xe_utils());
var { getConfig: getConfig6, renderer: renderer9, getI18n: getI18n12 } = VxeUI;
var componentDefaultModelProp = "modelValue";
var defaultCompProps = { transfer: true };
function parseDate(value, props) {
  return value && props.valueFormat ? import_xe_utils23.default.toStringDate(value, props.valueFormat) : value;
}
function getFormatDate(value, props, defaultFormat) {
  const { dateConfig = {} } = props;
  return import_xe_utils23.default.toDateString(parseDate(value, props), dateConfig.labelFormat || defaultFormat);
}
function getLabelFormatDate(value, props) {
  return getFormatDate(value, props, getI18n12(`vxe.input.date.labelFormat.${props.type || "date"}`));
}
function getOldComponentName(name) {
  return `vxe-${name.replace("$", "")}`;
}
function getDefaultComponent({ name }) {
  return resolveComponent(name);
}
function getOldComponent({ name }) {
  return resolveComponent(getOldComponentName(name));
}
function handleConfirmFilter(params, checked, option) {
  const { $panel } = params;
  $panel.changeOption({}, checked, option);
}
function getNativeAttrs(renderOpts) {
  let { name, attrs } = renderOpts;
  if (name === "input") {
    attrs = Object.assign({ type: "text" }, attrs);
  }
  return attrs;
}
function getInputImmediateModel(renderOpts) {
  const { name, immediate, props } = renderOpts;
  if (!immediate) {
    if (name === "VxeInput" || name === "$input") {
      const { type } = props || {};
      return !(!type || type === "text" || type === "number" || type === "integer" || type === "float");
    }
    if (name === "input" || name === "textarea" || name === "$textarea") {
      return false;
    }
    return true;
  }
  return immediate;
}
function getCellEditProps(renderOpts, params, value, defaultProps) {
  return import_xe_utils23.default.assign({ immediate: getInputImmediateModel(renderOpts) }, defaultCompProps, defaultProps, renderOpts.props, { [componentDefaultModelProp]: value });
}
function getCellEditFilterProps(renderOpts, params, value, defaultProps) {
  return import_xe_utils23.default.assign({}, defaultCompProps, defaultProps, renderOpts.props, { [componentDefaultModelProp]: value });
}
function isImmediateCell(renderOpts, params) {
  return params.$type === "cell" || getInputImmediateModel(renderOpts);
}
function getCellLabelVNs(renderOpts, params, cellLabel) {
  const { name, placeholder } = renderOpts;
  return [
    h("span", {
      class: ["vxe-cell--label", ["VxeTextarea", "textarea"].includes(name) ? "is--textarea" : ""]
    }, placeholder && isEmptyValue(cellLabel) ? [
      h("span", {
        class: "vxe-cell--placeholder"
      }, formatText(getFuncText(placeholder), 1))
    ] : formatText(cellLabel, 1))
  ];
}
function getNativeElementOns(renderOpts, params, modelFunc, changeFunc) {
  const { events } = renderOpts;
  const modelEvent = getModelEvent(renderOpts);
  const changeEvent = getChangeEvent(renderOpts);
  const isSameEvent = changeEvent === modelEvent;
  const ons = {};
  if (events) {
    import_xe_utils23.default.objectEach(events, (func, key) => {
      ons[getOnName(key)] = function(...args) {
        func(params, ...args);
      };
    });
  }
  if (modelFunc) {
    ons[getOnName(modelEvent)] = function(targetEvnt) {
      modelFunc(targetEvnt);
      if (isSameEvent && changeFunc) {
        changeFunc(targetEvnt);
      }
      if (events && events[modelEvent]) {
        events[modelEvent](params, targetEvnt);
      }
    };
  }
  if (!isSameEvent && changeFunc) {
    ons[getOnName(changeEvent)] = function(...args) {
      changeFunc(...args);
      if (events && events[changeEvent]) {
        events[changeEvent](params, ...args);
      }
    };
  }
  return ons;
}
function getComponentOns(renderOpts, params, modelFunc, changeFunc) {
  const { events } = renderOpts;
  const modelEvent = getModelEvent(renderOpts);
  const changeEvent = getChangeEvent(renderOpts);
  const ons = {};
  import_xe_utils23.default.objectEach(events, (func, key) => {
    ons[getOnName(key)] = function(...args) {
      if (true) {
        if (!import_xe_utils23.default.isFunction(func)) {
          errLog("vxe.error.errFunc", [func]);
        }
      }
      func(params, ...args);
    };
  });
  if (modelFunc) {
    ons[getOnName(modelEvent)] = function(targetEvnt) {
      modelFunc(targetEvnt);
      if (events && events[modelEvent]) {
        events[modelEvent](params, targetEvnt);
      }
    };
  }
  if (changeFunc) {
    ons[getOnName(changeEvent)] = function(...args) {
      changeFunc(...args);
      if (events && events[changeEvent]) {
        events[changeEvent](params, ...args);
      }
    };
  }
  return ons;
}
function getEditOns(renderOpts, params) {
  const { $table, row, column } = params;
  const { name } = renderOpts;
  const { model } = column;
  const isImmediate = isImmediateCell(renderOpts, params);
  return getComponentOns(renderOpts, params, (cellValue) => {
    model.update = true;
    model.value = cellValue;
    if (isImmediate) {
      setCellValue(row, column, cellValue);
    }
  }, (eventParams) => {
    if (!isImmediate && ["VxeInput", "VxeNumberInput", "VxeTextarea", "$input", "$textarea"].includes(name)) {
      const cellValue = eventParams.value;
      model.update = true;
      model.value = cellValue;
      $table.updateStatus(params, cellValue);
    } else {
      $table.updateStatus(params);
    }
  });
}
function getFilterOns(renderOpts, params, option) {
  return getComponentOns(renderOpts, params, (value) => {
    option.data = value;
  }, () => {
    handleConfirmFilter(params, !import_xe_utils23.default.eqNull(option.data), option);
  });
}
function getNativeEditOns(renderOpts, params) {
  const { $table, row, column } = params;
  const { model } = column;
  return getNativeElementOns(renderOpts, params, (evnt) => {
    const cellValue = evnt.target.value;
    if (isImmediateCell(renderOpts, params)) {
      setCellValue(row, column, cellValue);
    } else {
      model.update = true;
      model.value = cellValue;
    }
  }, (evnt) => {
    const cellValue = evnt.target.value;
    $table.updateStatus(params, cellValue);
  });
}
function getNativeFilterOns(renderOpts, params, option) {
  return getNativeElementOns(renderOpts, params, (evnt) => {
    option.data = evnt.target.value;
  }, () => {
    handleConfirmFilter(params, !import_xe_utils23.default.eqNull(option.data), option);
  });
}
function nativeEditRender(renderOpts, params) {
  const { row, column } = params;
  const { name } = renderOpts;
  const cellValue = isImmediateCell(renderOpts, params) ? getCellValue(row, column) : column.model.value;
  return [
    h(name, Object.assign(Object.assign(Object.assign({ class: `vxe-default-${name}` }, getNativeAttrs(renderOpts)), { value: cellValue }), getNativeEditOns(renderOpts, params)))
  ];
}
function buttonCellRender(renderOpts, params) {
  return [
    h(getDefaultComponent(renderOpts), Object.assign(Object.assign({}, getCellEditProps(renderOpts, params, null)), getComponentOns(renderOpts, params)))
  ];
}
function defaultEditRender(renderOpts, params) {
  const { row, column } = params;
  const cellValue = getCellValue(row, column);
  return [
    h(getDefaultComponent(renderOpts), Object.assign(Object.assign({}, getCellEditProps(renderOpts, params, cellValue)), getEditOns(renderOpts, params)))
  ];
}
function radioAndCheckboxEditRender(renderOpts, params) {
  const { options } = renderOpts;
  const { row, column } = params;
  const cellValue = getCellValue(row, column);
  return [
    h(getDefaultComponent(renderOpts), Object.assign(Object.assign({ options }, getCellEditProps(renderOpts, params, cellValue)), getEditOns(renderOpts, params)))
  ];
}
function oldEditRender(renderOpts, params) {
  const { row, column } = params;
  const cellValue = getCellValue(row, column);
  return [
    h(getOldComponent(renderOpts), Object.assign(Object.assign({}, getCellEditProps(renderOpts, params, cellValue)), getEditOns(renderOpts, params)))
  ];
}
function oldButtonEditRender(renderOpts, params) {
  return [
    h(resolveComponent("vxe-button"), Object.assign(Object.assign({}, getCellEditProps(renderOpts, params, null)), getComponentOns(renderOpts, params)))
  ];
}
function oldButtonsEditRender(renderOpts, params) {
  return renderOpts.children.map((childRenderOpts) => oldButtonEditRender(childRenderOpts, params)[0]);
}
function renderNativeOptgroups(renderOpts, params, renderOptionsMethods) {
  const { optionGroups, optionGroupProps = {} } = renderOpts;
  const groupOptions = optionGroupProps.options || "options";
  const groupLabel = optionGroupProps.label || "label";
  return optionGroups.map((group, gIndex) => {
    return h("optgroup", {
      key: gIndex,
      label: group[groupLabel]
    }, renderOptionsMethods(group[groupOptions], renderOpts, params));
  });
}
function renderNativeOptions(options, renderOpts, params) {
  const { optionProps = {} } = renderOpts;
  const { row, column } = params;
  const labelProp = optionProps.label || "label";
  const valueProp = optionProps.value || "value";
  const disabledProp = optionProps.disabled || "disabled";
  const cellValue = isImmediateCell(renderOpts, params) ? getCellValue(row, column) : column.model.value;
  return options.map((option, oIndex) => {
    return h("option", {
      key: oIndex,
      value: option[valueProp],
      disabled: option[disabledProp],
      /* eslint-disable eqeqeq */
      selected: option[valueProp] == cellValue
    }, option[labelProp]);
  });
}
function nativeFilterRender(renderOpts, params) {
  const { column } = params;
  const { name } = renderOpts;
  const attrs = getNativeAttrs(renderOpts);
  return column.filters.map((option, oIndex) => {
    return h(name, Object.assign(Object.assign(Object.assign({ key: oIndex, class: `vxe-default-${name}` }, attrs), { value: option.data }), getNativeFilterOns(renderOpts, params, option)));
  });
}
function defaultFilterRender(renderOpts, params) {
  const { column } = params;
  return column.filters.map((option, oIndex) => {
    const optionValue = option.data;
    return h(getDefaultComponent(renderOpts), Object.assign(Object.assign({ key: oIndex }, getCellEditFilterProps(renderOpts, renderOpts, optionValue)), getFilterOns(renderOpts, params, option)));
  });
}
function oldFilterRender(renderOpts, params) {
  const { column } = params;
  return column.filters.map((option, oIndex) => {
    const optionValue = option.data;
    return h(getOldComponent(renderOpts), Object.assign(Object.assign({ key: oIndex }, getCellEditFilterProps(renderOpts, renderOpts, optionValue)), getFilterOns(renderOpts, params, option)));
  });
}
function handleFilterMethod({ option, row, column }) {
  const { data } = option;
  const cellValue = import_xe_utils23.default.get(row, column.field);
  return cellValue == data;
}
function handleInputFilterMethod({ option, row, column }) {
  const { data } = option;
  const cellValue = import_xe_utils23.default.get(row, column.field);
  return import_xe_utils23.default.toValueString(cellValue).indexOf(data) > -1;
}
function nativeSelectEditRender(renderOpts, params) {
  return [
    h("select", Object.assign(Object.assign({ class: "vxe-default-select" }, getNativeAttrs(renderOpts)), getNativeEditOns(renderOpts, params)), renderOpts.optionGroups ? renderNativeOptgroups(renderOpts, params, renderNativeOptions) : renderNativeOptions(renderOpts.options, renderOpts, params))
  ];
}
function defaultSelectEditRender(renderOpts, params) {
  const { row, column } = params;
  const { options, optionProps, optionGroups, optionGroupProps } = renderOpts;
  const cellValue = getCellValue(row, column);
  return [
    h(getDefaultComponent(renderOpts), Object.assign(Object.assign({}, getCellEditProps(renderOpts, params, cellValue, { options, optionProps, optionGroups, optionGroupProps })), getEditOns(renderOpts, params)))
  ];
}
function defaultTreeSelectEditRender(renderOpts, params) {
  const { row, column } = params;
  const { options, optionProps } = renderOpts;
  const cellValue = getCellValue(row, column);
  return [
    h(getDefaultComponent(renderOpts), Object.assign(Object.assign({}, getCellEditProps(renderOpts, params, cellValue, { options, optionProps })), getEditOns(renderOpts, params)))
  ];
}
function oldSelectEditRender(renderOpts, params) {
  const { row, column } = params;
  const { options, optionProps, optionGroups, optionGroupProps } = renderOpts;
  const cellValue = getCellValue(row, column);
  return [
    h(getOldComponent(renderOpts), Object.assign(Object.assign({}, getCellEditProps(renderOpts, params, cellValue, { options, optionProps, optionGroups, optionGroupProps })), getEditOns(renderOpts, params)))
  ];
}
function getSelectCellValue(renderOpts, { row, column }) {
  const { options, optionGroups, optionProps = {}, optionGroupProps = {} } = renderOpts;
  const cellValue = import_xe_utils23.default.get(row, column.field);
  let selectItem;
  const labelProp = optionProps.label || "label";
  const valueProp = optionProps.value || "value";
  if (!(cellValue === null || cellValue === void 0)) {
    return import_xe_utils23.default.map(import_xe_utils23.default.isArray(cellValue) ? cellValue : [cellValue], optionGroups ? (value) => {
      const groupOptions = optionGroupProps.options || "options";
      for (let index = 0; index < optionGroups.length; index++) {
        selectItem = import_xe_utils23.default.find(optionGroups[index][groupOptions], (item) => item[valueProp] == value);
        if (selectItem) {
          break;
        }
      }
      return selectItem ? selectItem[labelProp] : value;
    } : (value) => {
      selectItem = import_xe_utils23.default.find(options, (item) => item[valueProp] == value);
      return selectItem ? selectItem[labelProp] : value;
    }).join(", ");
  }
  return "";
}
function handleExportSelectMethod(params) {
  const { row, column, options } = params;
  return options.original ? getCellValue(row, column) : getSelectCellValue(column.editRender || column.cellRender, params);
}
function getTreeSelectCellValue(renderOpts, { row, column }) {
  const { options, optionProps = {} } = renderOpts;
  const cellValue = import_xe_utils23.default.get(row, column.field);
  const labelProp = optionProps.label || "label";
  const valueProp = optionProps.value || "value";
  const childrenProp = optionProps.children || "children";
  if (!(cellValue === null || cellValue === void 0)) {
    const keyMaps = {};
    import_xe_utils23.default.eachTree(options, (item) => {
      keyMaps[import_xe_utils23.default.get(item, valueProp)] = item;
    }, { children: childrenProp });
    return import_xe_utils23.default.map(import_xe_utils23.default.isArray(cellValue) ? cellValue : [cellValue], (value) => {
      const item = keyMaps[value];
      return item ? import_xe_utils23.default.get(item, labelProp) : item;
    }).join(", ");
  }
  return "";
}
function handleExportTreeSelectMethod(params) {
  const { row, column, options } = params;
  return options.original ? getCellValue(row, column) : getTreeSelectCellValue(column.editRender || column.cellRender, params);
}
renderer9.mixin({
  input: {
    tableAutoFocus: "input",
    renderTableEdit: nativeEditRender,
    renderTableDefault: nativeEditRender,
    renderTableFilter: nativeFilterRender,
    tableFilterDefaultMethod: handleInputFilterMethod
  },
  textarea: {
    tableAutoFocus: "textarea",
    renderTableEdit: nativeEditRender
  },
  select: {
    renderTableEdit: nativeSelectEditRender,
    renderTableDefault: nativeSelectEditRender,
    renderTableCell(renderOpts, params) {
      return getCellLabelVNs(renderOpts, params, getSelectCellValue(renderOpts, params));
    },
    renderTableFilter(renderOpts, params) {
      const { column } = params;
      return column.filters.map((option, oIndex) => {
        return h("select", Object.assign(Object.assign({ key: oIndex, class: "vxe-default-select" }, getNativeAttrs(renderOpts)), getNativeFilterOns(renderOpts, params, option)), renderOpts.optionGroups ? renderNativeOptgroups(renderOpts, params, renderNativeOptions) : renderNativeOptions(renderOpts.options, renderOpts, params));
      });
    },
    tableFilterDefaultMethod: handleFilterMethod,
    tableExportMethod: handleExportSelectMethod
  },
  VxeInput: {
    tableAutoFocus: "input",
    renderTableEdit: defaultEditRender,
    renderTableCell(renderOpts, params) {
      var _a;
      const { props = {} } = renderOpts;
      const { row, column } = params;
      const digits = props.digits || ((_a = getConfig6().input) === null || _a === void 0 ? void 0 : _a.digits) || 2;
      let cellValue = import_xe_utils23.default.get(row, column.field);
      if (cellValue) {
        switch (props.type) {
          case "date":
          case "week":
          case "month":
          case "quarter":
          case "year":
            cellValue = getLabelFormatDate(cellValue, props);
            break;
          case "float":
            cellValue = import_xe_utils23.default.toFixed(import_xe_utils23.default.floor(cellValue, digits), digits);
            break;
        }
      }
      return getCellLabelVNs(renderOpts, params, cellValue);
    },
    renderTableDefault: defaultEditRender,
    renderTableFilter: defaultFilterRender,
    tableFilterDefaultMethod: handleInputFilterMethod
  },
  VxeNumberInput: {
    tableAutoFocus: "input",
    renderTableEdit: defaultEditRender,
    renderTableCell(renderOpts, params) {
      var _a;
      const { props = {} } = renderOpts;
      const { row, column } = params;
      const digits = props.digits || ((_a = getConfig6().numberInput) === null || _a === void 0 ? void 0 : _a.digits) || 2;
      let cellValue = import_xe_utils23.default.get(row, column.field);
      if (cellValue) {
        switch (props.type) {
          case "float":
            cellValue = import_xe_utils23.default.toFixed(import_xe_utils23.default.floor(cellValue, digits), digits);
            break;
        }
      }
      return getCellLabelVNs(renderOpts, params, cellValue);
    },
    renderTableDefault: defaultEditRender,
    renderTableFilter: defaultFilterRender,
    tableFilterDefaultMethod: handleInputFilterMethod
  },
  VxeDatePicker: {
    tableAutoFocus: "input",
    renderTableEdit: defaultEditRender,
    renderTableCell(renderOpts, params) {
      const { props = {} } = renderOpts;
      const { row, column } = params;
      let cellValue = import_xe_utils23.default.get(row, column.field);
      if (cellValue) {
        cellValue = getLabelFormatDate(cellValue, props);
      }
      return getCellLabelVNs(renderOpts, params, cellValue);
    },
    renderTableDefault: defaultEditRender,
    renderTableFilter: defaultFilterRender,
    tableFilterDefaultMethod: handleFilterMethod
  },
  VxeTextarea: {
    tableAutoFocus: "textarea",
    renderTableEdit: defaultEditRender,
    renderTableCell(renderOpts, params) {
      const { row, column } = params;
      const cellValue = import_xe_utils23.default.get(row, column.field);
      return getCellLabelVNs(renderOpts, params, cellValue);
    }
  },
  VxeButton: {
    renderTableDefault: buttonCellRender
  },
  VxeButtonGroup: {
    renderTableDefault(renderOpts, params) {
      const { options } = renderOpts;
      return [
        h(getDefaultComponent(renderOpts), Object.assign(Object.assign({ options }, getCellEditProps(renderOpts, params, null)), getComponentOns(renderOpts, params)))
      ];
    }
  },
  VxeSelect: {
    tableAutoFocus: "input",
    renderTableEdit: defaultSelectEditRender,
    renderTableDefault: defaultSelectEditRender,
    renderTableCell(renderOpts, params) {
      return getCellLabelVNs(renderOpts, params, getSelectCellValue(renderOpts, params));
    },
    renderTableFilter(renderOpts, params) {
      const { column } = params;
      const { options, optionProps, optionGroups, optionGroupProps } = renderOpts;
      return column.filters.map((option, oIndex) => {
        const optionValue = option.data;
        return h(getDefaultComponent(renderOpts), Object.assign(Object.assign({ key: oIndex }, getCellEditFilterProps(renderOpts, params, optionValue, { options, optionProps, optionGroups, optionGroupProps })), getFilterOns(renderOpts, params, option)));
      });
    },
    tableFilterDefaultMethod: handleFilterMethod,
    tableExportMethod: handleExportSelectMethod
  },
  VxeTreeSelect: {
    tableAutoFocus: "input",
    renderTableEdit: defaultTreeSelectEditRender,
    renderTableCell(renderOpts, params) {
      return getCellLabelVNs(renderOpts, params, getTreeSelectCellValue(renderOpts, params));
    },
    tableExportMethod: handleExportTreeSelectMethod
  },
  VxeIconPicker: {
    tableAutoFocus: "input",
    renderTableEdit: defaultEditRender,
    renderTableCell(renderOpts, params) {
      const { row, column } = params;
      const cellValue = import_xe_utils23.default.get(row, column.field);
      return h("i", {
        class: cellValue
      });
    }
  },
  VxeRadioGroup: {
    renderTableDefault: radioAndCheckboxEditRender
  },
  VxeCheckboxGroup: {
    renderTableDefault: radioAndCheckboxEditRender
  },
  VxeSwitch: {
    tableAutoFocus: "button",
    renderTableEdit: defaultEditRender,
    renderTableDefault: defaultEditRender
  },
  VxeUpload: {
    renderTableEdit: defaultEditRender,
    renderTableCell: defaultEditRender,
    renderTableDefault: defaultEditRender
  },
  VxeImage: {
    renderTableDefault(renderOpts, params) {
      const { row, column } = params;
      const { props } = renderOpts;
      const cellValue = getCellValue(row, column);
      return [
        h(getDefaultComponent(renderOpts), Object.assign(Object.assign(Object.assign({}, props), { src: cellValue }), getEditOns(renderOpts, params)))
      ];
    }
  },
  VxeImageGroup: {
    renderTableDefault(renderOpts, params) {
      const { row, column } = params;
      const { props } = renderOpts;
      const cellValue = getCellValue(row, column);
      return [
        h(getDefaultComponent(renderOpts), Object.assign(Object.assign(Object.assign({}, props), { urlList: cellValue }), getEditOns(renderOpts, params)))
      ];
    }
  },
  VxeTextEllipsis: {
    renderTableDefault(renderOpts, params) {
      const { row, column } = params;
      const { props } = renderOpts;
      const cellValue = getCellValue(row, column);
      return [
        h(getDefaultComponent(renderOpts), Object.assign(Object.assign(Object.assign({}, props), { content: cellValue }), getEditOns(renderOpts, params)))
      ];
    }
  },
  // 以下已废弃
  $input: {
    tableAutoFocus: ".vxe-input--inner",
    renderTableEdit: oldEditRender,
    renderTableCell(renderOpts, params) {
      var _a;
      const { props = {} } = renderOpts;
      const { row, column } = params;
      const digits = props.digits || ((_a = getConfig6().input) === null || _a === void 0 ? void 0 : _a.digits) || 2;
      let cellValue = import_xe_utils23.default.get(row, column.field);
      if (cellValue) {
        switch (props.type) {
          case "date":
          case "week":
          case "month":
          case "year":
            cellValue = getLabelFormatDate(cellValue, props);
            break;
          case "float":
            cellValue = import_xe_utils23.default.toFixed(import_xe_utils23.default.floor(cellValue, digits), digits);
            break;
        }
      }
      return getCellLabelVNs(renderOpts, params, cellValue);
    },
    renderTableDefault: oldEditRender,
    renderTableFilter: oldFilterRender,
    tableFilterDefaultMethod: handleInputFilterMethod
  },
  $textarea: {
    tableAutoFocus: ".vxe-textarea--inner"
  },
  $button: {
    renderTableDefault: oldButtonEditRender
  },
  $buttons: {
    renderTableDefault: oldButtonsEditRender
  },
  $select: {
    tableAutoFocus: ".vxe-input--inner",
    renderTableEdit: oldSelectEditRender,
    renderTableDefault: oldSelectEditRender,
    renderTableCell(renderOpts, params) {
      return getCellLabelVNs(renderOpts, params, getSelectCellValue(renderOpts, params));
    },
    renderTableFilter(renderOpts, params) {
      const { column } = params;
      const { options, optionProps, optionGroups, optionGroupProps } = renderOpts;
      return column.filters.map((option, oIndex) => {
        const optionValue = option.data;
        return h(getOldComponent(renderOpts), Object.assign(Object.assign({ key: oIndex }, getCellEditFilterProps(renderOpts, params, optionValue, { options, optionProps, optionGroups, optionGroupProps })), getFilterOns(renderOpts, params, option)));
      });
    },
    tableFilterDefaultMethod: handleFilterMethod,
    tableExportMethod: handleExportSelectMethod
  },
  $radio: {
    tableAutoFocus: ".vxe-radio--input"
  },
  $checkbox: {
    tableAutoFocus: ".vxe-checkbox--input"
  },
  $switch: {
    tableAutoFocus: ".vxe-switch--button",
    renderTableEdit: oldEditRender,
    renderTableDefault: oldEditRender
  }
  // 以上已废弃
});

// node_modules/.pnpm/vxe-table@4.7.86_vue@3.5.12_typescript@5.6.3_/node_modules/vxe-table/es/table/index.js
var VxeTable = Object.assign({}, table_default, {
  install(app) {
    app.component(table_default.name, table_default);
  }
});
var tableHandle = {
  useCellView
};
if (VxeUI.dynamicApp) {
  VxeUI.dynamicApp.component(table_default.name, table_default);
}
VxeUI.component(table_default);
VxeUI.tableHandle = tableHandle;
var Table = VxeTable;
var table_default2 = VxeTable;

// node_modules/.pnpm/vxe-table@4.7.86_vue@3.5.12_typescript@5.6.3_/node_modules/vxe-table/es/toolbar/src/toolbar.js
init_vue_runtime_esm_bundler();
var import_xe_utils24 = __toESM(require_xe_utils());
var { getConfig: getConfig7, getIcon: getIcon8, getI18n: getI18n13, renderer: renderer10, commands: commands2, createEvent: createEvent2, useFns: useFns2 } = VxeUI;
var toolbar_default = defineComponent({
  name: "VxeToolbar",
  props: {
    loading: Boolean,
    refresh: [Boolean, Object],
    import: [Boolean, Object],
    export: [Boolean, Object],
    print: [Boolean, Object],
    zoom: [Boolean, Object],
    custom: [Boolean, Object],
    buttons: {
      type: Array,
      default: () => getConfig7().toolbar.buttons
    },
    tools: {
      type: Array,
      default: () => getConfig7().toolbar.tools
    },
    perfect: {
      type: Boolean,
      default: () => getConfig7().toolbar.perfect
    },
    size: {
      type: String,
      default: () => getConfig7().toolbar.size || getConfig7().size
    },
    className: [String, Function]
  },
  emits: [
    "button-click",
    "tool-click"
  ],
  setup(props, context) {
    const { slots, emit } = context;
    const xID = import_xe_utils24.default.uniqueId();
    const VxeUIButtonComponent = VxeUI.getComponent("VxeButton");
    const { computeSize } = useFns2.useSize(props);
    const reactData = reactive({
      isRefresh: false,
      connectFlag: 0,
      columns: []
    });
    const internalData = {
      connectTable: null
    };
    const refElem = ref();
    const refMaps = {
      refElem
    };
    const $xeToolbar = {
      xID,
      props,
      context,
      reactData,
      internalData,
      getRefMaps: () => refMaps
    };
    let toolbarMethods = {};
    const $xeGrid = inject("$xeGrid", null);
    const computeRefreshOpts = computed(() => {
      return Object.assign({}, import_xe_utils24.default.clone(getConfig7().toolbar.refresh, true), props.refresh);
    });
    const computeImportOpts = computed(() => {
      return Object.assign({}, import_xe_utils24.default.clone(getConfig7().toolbar.import, true), props.import);
    });
    const computeExportOpts = computed(() => {
      return Object.assign({}, import_xe_utils24.default.clone(getConfig7().toolbar.export, true), props.export);
    });
    const computePrintOpts = computed(() => {
      return Object.assign({}, import_xe_utils24.default.clone(getConfig7().toolbar.print, true), props.print);
    });
    const computeZoomOpts = computed(() => {
      return Object.assign({}, import_xe_utils24.default.clone(getConfig7().toolbar.zoom, true), props.zoom);
    });
    const computeCustomOpts = computed(() => {
      return Object.assign({}, import_xe_utils24.default.clone(getConfig7().toolbar.custom, true), props.custom);
    });
    const computeTableCustomOpts = computed(() => {
      const { connectTable } = internalData;
      const $table = connectTable;
      if (reactData.connectFlag || $table) {
        if ($table) {
          const { computeCustomOpts: computeCustomOpts2 } = $table.getComputeMaps();
          return computeCustomOpts2.value;
        }
      }
      return { trigger: "" };
    });
    const computeTrigger = computed(() => {
      const tableCustomOpts = computeTableCustomOpts.value;
      return tableCustomOpts.trigger;
    });
    const checkTable = () => {
      const { connectTable } = internalData;
      const $table = connectTable;
      if ($table) {
        return true;
      }
      errLog("vxe.error.barUnableLink");
    };
    const handleClickSettingEvent = ({ $event }) => {
      const { connectTable } = internalData;
      const $table = connectTable;
      if ($table) {
        if ($table.triggerCustomEvent) {
          $table.triggerCustomEvent($event);
        } else {
          errLog("vxe.error.reqModule", ["VxeTableCustomModule"]);
        }
      }
    };
    const handleMouseenterSettingEvent = ({ $event }) => {
      const { connectTable } = internalData;
      const $table = connectTable;
      if ($table) {
        $table.customOpenEvent($event);
      } else {
        errLog("vxe.error.reqModule", ["VxeTableCustomModule"]);
      }
    };
    const handleMouseleaveSettingEvent = ({ $event }) => {
      const { connectTable } = internalData;
      const $table = connectTable;
      if ($table) {
        const { customStore } = $table.reactData;
        customStore.activeBtn = false;
        setTimeout(() => {
          if (!customStore.activeBtn && !customStore.activeWrapper) {
            $table.customCloseEvent($event);
          }
        }, 350);
      }
    };
    const refreshEvent = ({ $event }) => {
      const { isRefresh } = reactData;
      const refreshOpts = computeRefreshOpts.value;
      if (!isRefresh) {
        const queryMethod = refreshOpts.queryMethod || refreshOpts.query;
        if (queryMethod) {
          reactData.isRefresh = true;
          try {
            Promise.resolve(queryMethod({})).catch((e) => e).then(() => {
              reactData.isRefresh = false;
            });
          } catch (e) {
            reactData.isRefresh = false;
          }
        } else if ($xeGrid) {
          reactData.isRefresh = true;
          $xeGrid.triggerToolbarCommitEvent({ code: refreshOpts.code || "reload" }, $event).catch((e) => e).then(() => {
            reactData.isRefresh = false;
          });
        }
      }
    };
    const zoomEvent = ({ $event }) => {
      if ($xeGrid) {
        $xeGrid.triggerZoomEvent($event);
      }
    };
    const btnEvent = (evnt, item) => {
      const { connectTable } = internalData;
      const $table = connectTable;
      const { code } = item;
      if (code) {
        if ($xeGrid) {
          $xeGrid.triggerToolbarBtnEvent(item, evnt);
        } else {
          const gCommandOpts = commands2.get(code);
          const params = { code, button: item, $table, $grid: $xeGrid, $event: evnt };
          if (gCommandOpts) {
            const tCommandMethod = gCommandOpts.tableCommandMethod || gCommandOpts.commandMethod;
            if (tCommandMethod) {
              tCommandMethod(params);
            } else {
              if (true) {
                errLog("vxe.error.notCommands", [code]);
              }
            }
          }
          $xeToolbar.dispatchEvent("button-click", params, evnt);
        }
      }
    };
    const tolEvent = (evnt, item) => {
      const { connectTable } = internalData;
      const $table = connectTable;
      const { code } = item;
      if (code) {
        if ($xeGrid) {
          $xeGrid.triggerToolbarTolEvent(item, evnt);
        } else {
          const gCommandOpts = commands2.get(code);
          const params = { code, tool: item, $table, $grid: $xeGrid, $event: evnt };
          if (gCommandOpts) {
            const tCommandMethod = gCommandOpts.tableCommandMethod || gCommandOpts.commandMethod;
            if (tCommandMethod) {
              tCommandMethod(params);
            } else {
              if (true) {
                errLog("vxe.error.notCommands", [code]);
              }
            }
          }
          $xeToolbar.dispatchEvent("tool-click", params, evnt);
        }
      }
    };
    const importEvent = () => {
      if (checkTable()) {
        const { connectTable } = internalData;
        const $table = connectTable;
        if ($table) {
          $table.openImport();
        }
      }
    };
    const exportEvent = () => {
      if (checkTable()) {
        const { connectTable } = internalData;
        const $table = connectTable;
        if ($table) {
          $table.openExport();
        }
      }
    };
    const printEvent = () => {
      if (checkTable()) {
        const { connectTable } = internalData;
        const $table = connectTable;
        if ($table) {
          $table.openPrint();
        }
      }
    };
    const dispatchEvent = (type, params, evnt) => {
      emit(type, createEvent2(evnt, { $toolbar: $xeToolbar }, params));
    };
    toolbarMethods = {
      dispatchEvent,
      syncUpdate(params) {
        internalData.connectTable = params.$table;
        reactData.columns = params.collectColumn;
        reactData.connectFlag++;
      }
    };
    Object.assign($xeToolbar, toolbarMethods);
    const renderDropdowns = (item, isBtn) => {
      const { dropdowns } = item;
      const downVNs = [];
      if (dropdowns) {
        return dropdowns.map((child, index) => {
          if (child.visible === false) {
            return createCommentVNode();
          }
          return VxeUIButtonComponent ? h(VxeUIButtonComponent, {
            key: index,
            disabled: child.disabled,
            loading: child.loading,
            type: child.type,
            mode: child.mode,
            icon: child.icon,
            circle: child.circle,
            round: child.round,
            status: child.status,
            content: child.name,
            title: child.title,
            routerLink: child.routerLink,
            permissionCode: child.permissionCode,
            prefixTooltip: child.prefixTooltip,
            suffixTooltip: child.suffixTooltip,
            onClick: ({ $event }) => isBtn ? btnEvent($event, child) : tolEvent($event, child)
          }) : createCommentVNode();
        });
      }
      return downVNs;
    };
    const renderBtns = () => {
      const { buttons } = props;
      const { connectTable } = internalData;
      const $table = connectTable;
      const btnVNs = [];
      if (buttons) {
        buttons.forEach((item) => {
          const { dropdowns, buttonRender } = item;
          if (item.visible !== false) {
            const compConf = buttonRender ? renderer10.get(buttonRender.name) : null;
            if (buttonRender && compConf && compConf.renderToolbarButton) {
              const toolbarButtonClassName = compConf.toolbarButtonClassName;
              const params = { $grid: $xeGrid, $table, button: item };
              btnVNs.push(h("span", {
                class: ["vxe-button--item", toolbarButtonClassName ? import_xe_utils24.default.isFunction(toolbarButtonClassName) ? toolbarButtonClassName(params) : toolbarButtonClassName : ""]
              }, getSlotVNs(compConf.renderToolbarButton(buttonRender, params))));
            } else {
              if (VxeUIButtonComponent) {
                btnVNs.push(h(VxeUIButtonComponent, {
                  disabled: item.disabled,
                  loading: item.loading,
                  type: item.type,
                  mode: item.mode,
                  icon: item.icon,
                  circle: item.circle,
                  round: item.round,
                  status: item.status,
                  content: item.name,
                  title: item.title,
                  routerLink: item.routerLink,
                  permissionCode: item.permissionCode,
                  prefixTooltip: item.prefixTooltip,
                  suffixTooltip: item.suffixTooltip,
                  destroyOnClose: item.destroyOnClose,
                  placement: item.placement,
                  transfer: item.transfer,
                  onClick: ({ $event }) => btnEvent($event, item)
                }, dropdowns && dropdowns.length ? {
                  dropdowns: () => renderDropdowns(item, true)
                } : {}));
              }
            }
          }
        });
      }
      return btnVNs;
    };
    const renderRightTools = () => {
      const { tools } = props;
      const { connectTable } = internalData;
      const $table = connectTable;
      const btnVNs = [];
      if (tools) {
        tools.forEach((item, tIndex) => {
          const { dropdowns, toolRender } = item;
          if (item.visible !== false) {
            const rdName = toolRender ? toolRender.name : null;
            const compConf = toolRender ? renderer10.get(rdName) : null;
            if (toolRender && compConf && compConf.renderToolbarTool) {
              const toolbarToolClassName = compConf.toolbarToolClassName;
              const params = { $grid: $xeGrid, $table, tool: item };
              btnVNs.push(h("span", {
                key: rdName,
                class: ["vxe-tool--item", toolbarToolClassName ? import_xe_utils24.default.isFunction(toolbarToolClassName) ? toolbarToolClassName(params) : toolbarToolClassName : ""]
              }, getSlotVNs(compConf.renderToolbarTool(toolRender, params))));
            } else {
              if (VxeUIButtonComponent) {
                btnVNs.push(h(VxeUIButtonComponent, {
                  key: tIndex,
                  disabled: item.disabled,
                  loading: item.loading,
                  type: item.type,
                  mode: item.mode,
                  icon: item.icon,
                  circle: item.circle,
                  round: item.round,
                  status: item.status,
                  content: item.name,
                  title: item.title,
                  routerLink: item.routerLink,
                  permissionCode: item.permissionCode,
                  prefixTooltip: item.prefixTooltip,
                  suffixTooltip: item.suffixTooltip,
                  destroyOnClose: item.destroyOnClose,
                  placement: item.placement,
                  transfer: item.transfer,
                  onClick: ({ $event }) => tolEvent($event, item)
                }, dropdowns && dropdowns.length ? {
                  dropdowns: () => renderDropdowns(item, false)
                } : {}));
              }
            }
          }
        });
      }
      return btnVNs;
    };
    const renderToolImport = () => {
      const importOpts = computeImportOpts.value;
      return VxeUIButtonComponent ? h(VxeUIButtonComponent, {
        key: "import",
        circle: true,
        icon: importOpts.icon || getIcon8().TOOLBAR_TOOLS_IMPORT,
        title: getI18n13("vxe.toolbar.import"),
        onClick: importEvent
      }) : createCommentVNode();
    };
    const renderToolExport = () => {
      const exportOpts = computeExportOpts.value;
      return VxeUIButtonComponent ? h(VxeUIButtonComponent, {
        key: "export",
        circle: true,
        icon: exportOpts.icon || getIcon8().TOOLBAR_TOOLS_EXPORT,
        title: getI18n13("vxe.toolbar.export"),
        onClick: exportEvent
      }) : createCommentVNode();
    };
    const renderToolPrint = () => {
      const printOpts = computePrintOpts.value;
      return VxeUIButtonComponent ? h(VxeUIButtonComponent, {
        key: "print",
        circle: true,
        icon: printOpts.icon || getIcon8().TOOLBAR_TOOLS_PRINT,
        title: getI18n13("vxe.toolbar.print"),
        onClick: printEvent
      }) : createCommentVNode();
    };
    const renderToolRefresh = () => {
      const refreshOpts = computeRefreshOpts.value;
      return VxeUIButtonComponent ? h(VxeUIButtonComponent, {
        key: "refresh",
        circle: true,
        icon: reactData.isRefresh ? refreshOpts.iconLoading || getIcon8().TOOLBAR_TOOLS_REFRESH_LOADING : refreshOpts.icon || getIcon8().TOOLBAR_TOOLS_REFRESH,
        title: getI18n13("vxe.toolbar.refresh"),
        onClick: refreshEvent
      }) : createCommentVNode();
    };
    const renderToolZoom = () => {
      const zoomOpts = computeZoomOpts.value;
      return $xeGrid && VxeUIButtonComponent ? h(VxeUIButtonComponent, {
        key: "zoom",
        circle: true,
        icon: $xeGrid.isMaximized() ? zoomOpts.iconOut || getIcon8().TOOLBAR_TOOLS_MINIMIZE : zoomOpts.iconIn || getIcon8().TOOLBAR_TOOLS_FULLSCREEN,
        title: getI18n13(`vxe.toolbar.zoom${$xeGrid.isMaximized() ? "Out" : "In"}`),
        onClick: zoomEvent
      }) : createCommentVNode();
    };
    const renderToolCustom = () => {
      const customOpts = computeCustomOpts.value;
      const btnTrigger = computeTrigger.value;
      const customBtnOns = {};
      if (btnTrigger === "manual") {
      } else if (btnTrigger === "hover") {
        customBtnOns.onMouseenter = handleMouseenterSettingEvent;
        customBtnOns.onMouseleave = handleMouseleaveSettingEvent;
      } else {
        customBtnOns.onClick = handleClickSettingEvent;
      }
      return VxeUIButtonComponent ? h(VxeUIButtonComponent, Object.assign({ key: "custom", circle: true, icon: customOpts.icon || getIcon8().TOOLBAR_TOOLS_CUSTOM, title: getI18n13("vxe.toolbar.custom"), className: "vxe-toolbar-custom-target" }, customBtnOns)) : createCommentVNode();
    };
    const renderVN = () => {
      const { perfect, loading, refresh, zoom, custom, className } = props;
      const { connectTable } = internalData;
      const vSize = computeSize.value;
      const toolsSlot = slots.tools;
      const buttonsSlot = slots.buttons;
      const $table = connectTable;
      return h("div", {
        ref: refElem,
        class: ["vxe-toolbar", className ? import_xe_utils24.default.isFunction(className) ? className({ $toolbar: $xeToolbar }) : className : "", {
          [`size--${vSize}`]: vSize,
          "is--perfect": perfect,
          "is--loading": loading
        }]
      }, [
        h("div", {
          class: "vxe-buttons--wrapper"
        }, buttonsSlot ? buttonsSlot({ $grid: $xeGrid, $table }) : renderBtns()),
        h("div", {
          class: "vxe-tools--wrapper"
        }, toolsSlot ? toolsSlot({ $grid: $xeGrid, $table }) : renderRightTools()),
        h("div", {
          class: "vxe-tools--operate"
        }, [
          props.import ? renderToolImport() : createCommentVNode(),
          props.export ? renderToolExport() : createCommentVNode(),
          props.print ? renderToolPrint() : createCommentVNode(),
          refresh ? renderToolRefresh() : createCommentVNode(),
          zoom && $xeGrid ? renderToolZoom() : createCommentVNode(),
          custom ? renderToolCustom() : createCommentVNode()
        ])
      ]);
    };
    $xeToolbar.renderVN = renderVN;
    nextTick(() => {
      const { refresh } = props;
      const refreshOpts = computeRefreshOpts.value;
      const queryMethod = refreshOpts.queryMethod || refreshOpts.query;
      if (refresh && !$xeGrid && !queryMethod) {
        warnLog("vxe.error.notFunc", ["queryMethod"]);
      }
      const customOpts = computeCustomOpts.value;
      if (true) {
        if (customOpts.isFooter) {
          warnLog("vxe.error.delProp", ["toolbar.custom.isFooter", "table.custom-config.showFooter"]);
        }
        if (customOpts.showFooter) {
          warnLog("vxe.error.delProp", ["toolbar.custom.showFooter", "table.custom-config.showFooter"]);
        }
        if (customOpts.immediate) {
          warnLog("vxe.error.delProp", ["toolbar.custom.immediate", "table.custom-config.immediate"]);
        }
        if (customOpts.trigger) {
          warnLog("vxe.error.delProp", ["toolbar.custom.trigger", "table.custom-config.trigger"]);
        }
      }
      if (true) {
        if (props.refresh || props.import || props.export || props.print || props.zoom) {
          if (!VxeUIButtonComponent) {
            errLog("vxe.error.reqComp", ["vxe-button"]);
          }
        }
      }
    });
    return $xeToolbar;
  },
  render() {
    return this.renderVN();
  }
});

// node_modules/.pnpm/vxe-table@4.7.86_vue@3.5.12_typescript@5.6.3_/node_modules/vxe-table/es/toolbar/index.js
var VxeToolbar = Object.assign({}, toolbar_default, {
  install(app) {
    app.component(toolbar_default.name, toolbar_default);
  }
});
if (VxeUI.dynamicApp) {
  VxeUI.dynamicApp.component(toolbar_default.name, toolbar_default);
}
VxeUI.component(toolbar_default);
var Toolbar = VxeToolbar;
var toolbar_default2 = VxeToolbar;

// node_modules/.pnpm/vxe-table@4.7.86_vue@3.5.12_typescript@5.6.3_/node_modules/vxe-table/es/grid/src/grid.js
var { getConfig: getConfig8, getI18n: getI18n14, commands: commands3, hooks: hooks9, useFns: useFns3, createEvent: createEvent3, globalEvents: globalEvents4, GLOBAL_EVENT_KEYS: GLOBAL_EVENT_KEYS3 } = VxeUI;
var tableComponentPropKeys = Object.keys(props_default);
var tableComponentMethodKeys = ["clearAll", "syncData", "updateData", "loadData", "reloadData", "reloadRow", "loadColumn", "reloadColumn", "getRowNode", "getColumnNode", "getRowIndex", "getVTRowIndex", "getVMRowIndex", "getColumnIndex", "getVTColumnIndex", "getVMColumnIndex", "setRow", "createData", "createRow", "revertData", "clearData", "isInsertByRow", "isUpdateByRow", "getColumns", "getColumnById", "getColumnByField", "getTableColumn", "getData", "getCheckboxRecords", "getParentRow", "getRowSeq", "getRowById", "getRowid", "getTableData", "setColumnFixed", "clearColumnFixed", "setColumnWidth", "getColumnWidth", "hideColumn", "showColumn", "resetColumn", "refreshColumn", "refreshScroll", "recalculate", "closeTooltip", "isAllCheckboxChecked", "isAllCheckboxIndeterminate", "getCheckboxIndeterminateRecords", "setCheckboxRow", "isCheckedByCheckboxRow", "isIndeterminateByCheckboxRow", "toggleCheckboxRow", "setAllCheckboxRow", "getRadioReserveRecord", "clearRadioReserve", "getCheckboxReserveRecords", "clearCheckboxReserve", "toggleAllCheckboxRow", "clearCheckboxRow", "setCurrentRow", "isCheckedByRadioRow", "setRadioRow", "clearCurrentRow", "clearRadioRow", "getCurrentRecord", "getRadioRecord", "getCurrentColumn", "setCurrentColumn", "clearCurrentColumn", "setPendingRow", "togglePendingRow", "getPendingRecords", "clearPendingRow", "sort", "clearSort", "isSort", "getSortColumns", "closeFilter", "isFilter", "isActiveFilterByColumn", "isRowExpandLoaded", "clearRowExpandLoaded", "reloadRowExpand", "reloadRowExpand", "toggleRowExpand", "setAllRowExpand", "setRowExpand", "isExpandByRow", "isRowExpandByRow", "clearRowExpand", "clearRowExpandReserve", "getRowExpandRecords", "getTreeExpandRecords", "isTreeExpandLoaded", "clearTreeExpandLoaded", "reloadTreeExpand", "reloadTreeChilds", "toggleTreeExpand", "setAllTreeExpand", "setTreeExpand", "isTreeExpandByRow", "clearTreeExpand", "clearTreeExpandReserve", "getScroll", "scrollTo", "scrollToRow", "scrollToColumn", "clearScroll", "updateFooter", "updateStatus", "setMergeCells", "removeInsertRow", "removeMergeCells", "getMergeCells", "clearMergeCells", "setMergeFooterItems", "removeMergeFooterItems", "getMergeFooterItems", "clearMergeFooterItems", "getCustomStoreData", "openTooltip", "getCellLabel", "getCellElement", "focus", "blur", "connect"];
var gridComponentEmits = [
  ...emits_default,
  "page-change",
  "form-submit",
  "form-submit-invalid",
  "form-reset",
  "form-collapse",
  "form-toggle-collapse",
  "proxy-query",
  "proxy-delete",
  "proxy-save",
  "toolbar-button-click",
  "toolbar-tool-click",
  "zoom"
];
var grid_default = defineComponent({
  name: "VxeGrid",
  props: Object.assign(Object.assign({}, props_default), { layouts: Array, columns: Array, pagerConfig: Object, proxyConfig: Object, toolbarConfig: Object, formConfig: Object, zoomConfig: Object, size: {
    type: String,
    default: () => getConfig8().grid.size || getConfig8().size
  } }),
  emits: gridComponentEmits,
  setup(props, context) {
    var _a;
    const { slots, emit } = context;
    const xID = import_xe_utils25.default.uniqueId();
    const VxeUIFormComponent = VxeUI.getComponent("VxeForm");
    const VxeUIPagerComponent = VxeUI.getComponent("VxePager");
    const { computeSize } = useFns3.useSize(props);
    const reactData = reactive({
      tableLoading: false,
      proxyInited: false,
      isZMax: false,
      tableData: [],
      filterData: [],
      formData: {},
      sortData: [],
      tZindex: 0,
      tablePage: {
        total: 0,
        pageSize: ((_a = getConfig8().pager) === null || _a === void 0 ? void 0 : _a.pageSize) || 10,
        currentPage: 1
      }
    });
    const refElem = ref();
    const refTable = ref();
    const refForm = ref();
    const refToolbar = ref();
    const refPager = ref();
    const refFormWrapper = ref();
    const refToolbarWrapper = ref();
    const refTopWrapper = ref();
    const refBottomWrapper = ref();
    const refPagerWrapper = ref();
    const extendTableMethods = (methodKeys) => {
      const funcs = {};
      methodKeys.forEach((name) => {
        funcs[name] = (...args) => {
          const $xeTable = refTable.value;
          if ($xeTable && $xeTable[name]) {
            return $xeTable[name](...args);
          }
        };
      });
      return funcs;
    };
    const gridExtendTableMethods = extendTableMethods(tableComponentMethodKeys);
    tableComponentMethodKeys.forEach((name) => {
      gridExtendTableMethods[name] = (...args) => {
        const $xeTable = refTable.value;
        if ($xeTable && $xeTable[name]) {
          return $xeTable && $xeTable[name](...args);
        }
      };
    });
    const computeProxyOpts = computed(() => {
      return import_xe_utils25.default.merge({}, import_xe_utils25.default.clone(getConfig8().grid.proxyConfig, true), props.proxyConfig);
    });
    const computeIsRespMsg = computed(() => {
      const proxyOpts = computeProxyOpts.value;
      return import_xe_utils25.default.isBoolean(proxyOpts.message) ? proxyOpts.message : proxyOpts.showResponseMsg;
    });
    const computeIsActiveMsg = computed(() => {
      const proxyOpts = computeProxyOpts.value;
      return proxyOpts.showActiveMsg;
    });
    const computePagerOpts = computed(() => {
      return Object.assign({}, import_xe_utils25.default.clone(getConfig8().grid.pagerConfig, true), props.pagerConfig);
    });
    const computeFormOpts = computed(() => {
      return Object.assign({}, import_xe_utils25.default.clone(getConfig8().grid.formConfig, true), props.formConfig);
    });
    const computeToolbarOpts = computed(() => {
      return Object.assign({}, import_xe_utils25.default.clone(getConfig8().grid.toolbarConfig, true), props.toolbarConfig);
    });
    const computeZoomOpts = computed(() => {
      return Object.assign({}, import_xe_utils25.default.clone(getConfig8().grid.zoomConfig, true), props.zoomConfig);
    });
    const computeStyles = computed(() => {
      return reactData.isZMax ? { zIndex: reactData.tZindex } : null;
    });
    const computeTableExtendProps = computed(() => {
      const rest = {};
      const gridProps = props;
      tableComponentPropKeys.forEach((key) => {
        rest[key] = gridProps[key];
      });
      return rest;
    });
    const computeTableProps = computed(() => {
      const { seqConfig, pagerConfig, loading, editConfig, proxyConfig } = props;
      const { isZMax, tableLoading, tablePage, tableData } = reactData;
      const tableExtendProps = computeTableExtendProps.value;
      const proxyOpts = computeProxyOpts.value;
      const pagerOpts = computePagerOpts.value;
      const tableProps = Object.assign({}, tableExtendProps);
      if (isZMax) {
        if (tableExtendProps.maxHeight) {
          tableProps.maxHeight = "100%";
        } else {
          tableProps.height = "100%";
        }
      }
      if (proxyConfig && isEnableConf(proxyOpts)) {
        tableProps.loading = loading || tableLoading;
        tableProps.data = tableData;
        if (pagerConfig && proxyOpts.seq && isEnableConf(pagerOpts)) {
          tableProps.seqConfig = Object.assign({}, seqConfig, { startIndex: (tablePage.currentPage - 1) * tablePage.pageSize });
        }
      }
      if (editConfig) {
        tableProps.editConfig = Object.assign({}, editConfig);
      }
      return tableProps;
    });
    const computeCurrLayout = computed(() => {
      const { layouts } = props;
      if (layouts && layouts.length) {
        return layouts;
      }
      return getConfig8().grid.layouts || ["Form", "Toolbar", "Top", "Table", "Bottom", "Pager"];
    });
    const refMaps = {
      refElem,
      refTable,
      refForm,
      refToolbar,
      refPager
    };
    const computeMaps = {
      computeProxyOpts,
      computePagerOpts,
      computeFormOpts,
      computeToolbarOpts,
      computeZoomOpts
    };
    const $xeGrid = {
      xID,
      props,
      context,
      reactData,
      getRefMaps: () => refMaps,
      getComputeMaps: () => computeMaps
    };
    const initToolbar = () => {
      const toolbarOpts = computeToolbarOpts.value;
      if (props.toolbarConfig && isEnableConf(toolbarOpts)) {
        nextTick(() => {
          const $xeTable = refTable.value;
          const $xeToolbar = refToolbar.value;
          if ($xeTable && $xeToolbar) {
            $xeTable.connect($xeToolbar);
          }
        });
      }
    };
    const getFormData = () => {
      const { proxyConfig } = props;
      const { formData } = reactData;
      const proxyOpts = computeProxyOpts.value;
      const formOpts = computeFormOpts.value;
      return proxyConfig && isEnableConf(proxyOpts) && proxyOpts.form ? formData : formOpts.data;
    };
    const initPages = () => {
      const { tablePage } = reactData;
      const { pagerConfig } = props;
      const pagerOpts = computePagerOpts.value;
      const { currentPage, pageSize } = pagerOpts;
      if (pagerConfig && isEnableConf(pagerOpts)) {
        if (currentPage) {
          tablePage.currentPage = currentPage;
        }
        if (pageSize) {
          tablePage.pageSize = pageSize;
        }
      }
    };
    const triggerPendingEvent = (code) => {
      const isActiveMsg = computeIsActiveMsg.value;
      const $xeTable = refTable.value;
      const selectRecords = $xeTable.getCheckboxRecords();
      if (selectRecords.length) {
        $xeTable.togglePendingRow(selectRecords);
        gridExtendTableMethods.clearCheckboxRow();
      } else {
        if (isActiveMsg) {
          if (VxeUI.modal) {
            VxeUI.modal.message({ id: code, content: getI18n14("vxe.grid.selectOneRecord"), status: "warning" });
          }
        }
      }
    };
    const getRespMsg = (rest, defaultMsg) => {
      const proxyOpts = computeProxyOpts.value;
      const resConfigs = proxyOpts.response || proxyOpts.props || {};
      const messageProp = resConfigs.message;
      let msg;
      if (rest && messageProp) {
        msg = import_xe_utils25.default.isFunction(messageProp) ? messageProp({ data: rest, $grid: $xeGrid }) : import_xe_utils25.default.get(rest, messageProp);
      }
      return msg || getI18n14(defaultMsg);
    };
    const handleDeleteRow = (code, alertKey, callback) => {
      const isActiveMsg = computeIsActiveMsg.value;
      const selectRecords = gridExtendTableMethods.getCheckboxRecords();
      if (isActiveMsg) {
        if (selectRecords.length) {
          if (VxeUI.modal) {
            return VxeUI.modal.confirm({ id: `cfm_${code}`, content: getI18n14(alertKey), escClosable: true }).then((type) => {
              if (type === "confirm") {
                return callback();
              }
            });
          }
        } else {
          if (VxeUI.modal) {
            VxeUI.modal.message({ id: `msg_${code}`, content: getI18n14("vxe.grid.selectOneRecord"), status: "warning" });
          }
        }
      } else {
        if (selectRecords.length) {
          callback();
        }
      }
      return Promise.resolve();
    };
    const pageChangeEvent = (params) => {
      const { proxyConfig } = props;
      const { tablePage } = reactData;
      const { $event, currentPage, pageSize } = params;
      const proxyOpts = computeProxyOpts.value;
      tablePage.currentPage = currentPage;
      tablePage.pageSize = pageSize;
      gridMethods.dispatchEvent("page-change", params, $event);
      if (proxyConfig && isEnableConf(proxyOpts)) {
        gridMethods.commitProxy("query").then((rest) => {
          gridMethods.dispatchEvent("proxy-query", rest, $event);
        });
      }
    };
    const sortChangeEvent = (params) => {
      const $xeTable = refTable.value;
      const { proxyConfig } = props;
      const { computeSortOpts } = $xeTable.getComputeMaps();
      const proxyOpts = computeProxyOpts.value;
      const sortOpts = computeSortOpts.value;
      if (sortOpts.remote) {
        reactData.sortData = params.sortList;
        if (proxyConfig && isEnableConf(proxyOpts)) {
          reactData.tablePage.currentPage = 1;
          gridMethods.commitProxy("query").then((rest) => {
            gridMethods.dispatchEvent("proxy-query", rest, params.$event);
          });
        }
      }
      gridMethods.dispatchEvent("sort-change", params, params.$event);
    };
    const filterChangeEvent = (params) => {
      const $xeTable = refTable.value;
      const { proxyConfig } = props;
      const { computeFilterOpts } = $xeTable.getComputeMaps();
      const proxyOpts = computeProxyOpts.value;
      const filterOpts = computeFilterOpts.value;
      if (filterOpts.remote) {
        reactData.filterData = params.filterList;
        if (proxyConfig && isEnableConf(proxyOpts)) {
          reactData.tablePage.currentPage = 1;
          gridMethods.commitProxy("query").then((rest) => {
            gridMethods.dispatchEvent("proxy-query", rest, params.$event);
          });
        }
      }
      gridMethods.dispatchEvent("filter-change", params, params.$event);
    };
    const submitFormEvent = (params) => {
      const { proxyConfig } = props;
      const proxyOpts = computeProxyOpts.value;
      if (proxyConfig && isEnableConf(proxyOpts)) {
        gridMethods.commitProxy("reload").then((rest) => {
          gridMethods.dispatchEvent("proxy-query", Object.assign(Object.assign({}, rest), { isReload: true }), params.$event);
        });
      }
      gridMethods.dispatchEvent("form-submit", params, params.$event);
    };
    const resetFormEvent = (params) => {
      const { proxyConfig } = props;
      const { $event } = params;
      const proxyOpts = computeProxyOpts.value;
      if (proxyConfig && isEnableConf(proxyOpts)) {
        gridMethods.commitProxy("reload").then((rest) => {
          gridMethods.dispatchEvent("proxy-query", Object.assign(Object.assign({}, rest), { isReload: true }), $event);
        });
      }
      gridMethods.dispatchEvent("form-reset", params, $event);
    };
    const submitInvalidEvent = (params) => {
      gridMethods.dispatchEvent("form-submit-invalid", params, params.$event);
    };
    const collapseEvent = (params) => {
      const { $event } = params;
      nextTick(() => gridExtendTableMethods.recalculate(true));
      gridMethods.dispatchEvent("form-toggle-collapse", params, $event);
      gridMethods.dispatchEvent("form-collapse", params, $event);
    };
    const handleZoom = (isMax) => {
      const { isZMax } = reactData;
      if (isMax ? !isZMax : isZMax) {
        reactData.isZMax = !isZMax;
        if (reactData.tZindex < getLastZIndex()) {
          reactData.tZindex = nextZIndex();
        }
      }
      return nextTick().then(() => gridExtendTableMethods.recalculate(true)).then(() => reactData.isZMax);
    };
    const getFuncSlot = (optSlots, slotKey) => {
      const funcSlot = optSlots[slotKey];
      if (funcSlot) {
        if (import_xe_utils25.default.isString(funcSlot)) {
          if (slots[funcSlot]) {
            return slots[funcSlot];
          } else {
            if (true) {
              errLog("vxe.error.notSlot", [funcSlot]);
            }
          }
        } else {
          return funcSlot;
        }
      }
      return null;
    };
    const renderForm = () => {
      const { formConfig, proxyConfig } = props;
      const { formData } = reactData;
      const proxyOpts = computeProxyOpts.value;
      const formOpts = computeFormOpts.value;
      if (formConfig && isEnableConf(formOpts) || slots.form) {
        let slotVNs = [];
        if (slots.form) {
          slotVNs = slots.form({ $grid: $xeGrid });
        } else {
          if (formOpts.items) {
            const formSlots = {};
            if (!formOpts.inited) {
              formOpts.inited = true;
              const beforeItem = proxyOpts.beforeItem;
              if (proxyOpts && beforeItem) {
                formOpts.items.forEach((item) => {
                  beforeItem({ $grid: $xeGrid, item });
                });
              }
            }
            formOpts.items.forEach((item) => {
              import_xe_utils25.default.each(item.slots, (func) => {
                if (!import_xe_utils25.default.isFunction(func)) {
                  if (slots[func]) {
                    formSlots[func] = slots[func];
                  }
                }
              });
            });
            if (VxeUIFormComponent) {
              slotVNs.push(h(VxeUIFormComponent, Object.assign(Object.assign({ ref: refForm }, Object.assign({}, formOpts, {
                data: proxyConfig && isEnableConf(proxyOpts) && proxyOpts.form ? formData : formOpts.data
              })), { onSubmit: submitFormEvent, onReset: resetFormEvent, onSubmitInvalid: submitInvalidEvent, onCollapse: collapseEvent }), formSlots));
            }
          }
        }
        return h("div", {
          ref: refFormWrapper,
          key: "form",
          class: "vxe-grid--form-wrapper"
        }, slotVNs);
      }
      return createCommentVNode();
    };
    const renderToolbar = () => {
      const { toolbarConfig } = props;
      const toolbarOpts = computeToolbarOpts.value;
      if (toolbarConfig && isEnableConf(toolbarOpts) || slots.toolbar) {
        let slotVNs = [];
        if (slots.toolbar) {
          slotVNs = slots.toolbar({ $grid: $xeGrid });
        } else {
          const toolbarOptSlots = toolbarOpts.slots;
          let buttonsSlot;
          let toolsSlot;
          const toolbarSlots = {};
          if (toolbarOptSlots) {
            buttonsSlot = getFuncSlot(toolbarOptSlots, "buttons");
            toolsSlot = getFuncSlot(toolbarOptSlots, "tools");
            if (buttonsSlot) {
              toolbarSlots.buttons = buttonsSlot;
            }
            if (toolsSlot) {
              toolbarSlots.tools = toolsSlot;
            }
          }
          slotVNs.push(h(toolbar_default2, Object.assign({ ref: refToolbar }, toolbarOpts), toolbarSlots));
        }
        return h("div", {
          ref: refToolbarWrapper,
          key: "toolbar",
          class: "vxe-grid--toolbar-wrapper"
        }, slotVNs);
      }
      return createCommentVNode();
    };
    const renderTop = () => {
      if (slots.top) {
        return h("div", {
          ref: refTopWrapper,
          key: "top",
          class: "vxe-grid--top-wrapper"
        }, slots.top({ $grid: $xeGrid }));
      }
      return createCommentVNode();
    };
    const renderTableLeft = () => {
      const leftSlot = slots.left;
      if (leftSlot) {
        return h("div", {
          class: "vxe-grid--left-wrapper"
        }, leftSlot({ $grid: $xeGrid }));
      }
      return createCommentVNode();
    };
    const renderTableRight = () => {
      const rightSlot = slots.right;
      if (rightSlot) {
        return h("div", {
          class: "vxe-grid--right-wrapper"
        }, rightSlot({ $grid: $xeGrid }));
      }
      return createCommentVNode();
    };
    const renderTable = () => {
      const { proxyConfig } = props;
      const tableProps = computeTableProps.value;
      const proxyOpts = computeProxyOpts.value;
      const tableOns = Object.assign({}, tableCompEvents);
      const emptySlot = slots.empty;
      const loadingSlot = slots.loading;
      if (proxyConfig && isEnableConf(proxyOpts)) {
        if (proxyOpts.sort) {
          tableOns.onSortChange = sortChangeEvent;
        }
        if (proxyOpts.filter) {
          tableOns.onFilterChange = filterChangeEvent;
        }
      }
      const slotObj = {};
      if (emptySlot) {
        slotObj.empty = () => emptySlot({ $grid: $xeGrid });
      }
      if (loadingSlot) {
        slotObj.loading = () => loadingSlot({ $grid: $xeGrid });
      }
      return h("div", {
        class: "vxe-grid--table-wrapper"
      }, [
        h(table_default2, Object.assign(Object.assign({ ref: refTable }, tableProps), tableOns), slotObj)
      ]);
    };
    const renderBottom = () => {
      if (slots.bottom) {
        return h("div", {
          ref: refBottomWrapper,
          key: "bottom",
          class: "vxe-grid--bottom-wrapper"
        }, slots.bottom({ $grid: $xeGrid }));
      }
      return createCommentVNode();
    };
    const renderPager = () => {
      const { proxyConfig, pagerConfig } = props;
      const proxyOpts = computeProxyOpts.value;
      const pagerOpts = computePagerOpts.value;
      if (pagerConfig && isEnableConf(pagerOpts) || slots.pager) {
        let slotVNs = [];
        if (slots.pager) {
          slotVNs = slots.pager({ $grid: $xeGrid });
        } else {
          const pagerOptSlots = pagerOpts.slots;
          const pagerSlots = {};
          let leftSlot;
          let rightSlot;
          if (pagerOptSlots) {
            leftSlot = getFuncSlot(pagerOptSlots, "left");
            rightSlot = getFuncSlot(pagerOptSlots, "right");
            if (leftSlot) {
              pagerSlots.left = leftSlot;
            }
            if (rightSlot) {
              pagerSlots.right = rightSlot;
            }
          }
          if (VxeUIPagerComponent) {
            slotVNs.push(h(VxeUIPagerComponent, Object.assign(Object.assign(Object.assign({ ref: refPager }, pagerOpts), proxyConfig && isEnableConf(proxyOpts) ? reactData.tablePage : {}), { onPageChange: pageChangeEvent }), pagerSlots));
          }
        }
        return h("div", {
          ref: refPagerWrapper,
          key: "pager",
          class: "vxe-grid--pager-wrapper"
        }, slotVNs);
      }
      return createCommentVNode();
    };
    const renderLayout = () => {
      const vns = [];
      const currLayouts = computeCurrLayout.value;
      currLayouts.forEach((name) => {
        switch (name) {
          case "Form":
            vns.push(renderForm());
            break;
          case "Toolbar":
            vns.push(renderToolbar());
            break;
          case "Top":
            vns.push(renderTop());
            break;
          case "Table":
            vns.push(h("div", {
              key: "table",
              class: "vxe-grid--table-container"
            }, [
              renderTableLeft(),
              renderTable(),
              renderTableRight()
            ]));
            break;
          case "Bottom":
            vns.push(renderBottom());
            break;
          case "Pager":
            vns.push(renderPager());
            break;
          default:
            if (true) {
              errLog("vxe.error.notProp", [`layouts -> ${name}`]);
            }
            break;
        }
      });
      return vns;
    };
    const tableCompEvents = {};
    emits_default.forEach((name) => {
      const type = import_xe_utils25.default.camelCase(`on-${name}`);
      tableCompEvents[type] = (...args) => emit(name, ...args);
    });
    const initProxy = () => {
      const { proxyConfig, formConfig } = props;
      const { proxyInited } = reactData;
      const proxyOpts = computeProxyOpts.value;
      const formOpts = computeFormOpts.value;
      if (proxyConfig && isEnableConf(proxyOpts)) {
        if (formConfig && isEnableConf(formOpts) && proxyOpts.form && formOpts.items) {
          const fData = {};
          formOpts.items.forEach((item) => {
            const { field, itemRender } = item;
            if (field) {
              let itemValue = null;
              if (itemRender) {
                const { defaultValue } = itemRender;
                if (import_xe_utils25.default.isFunction(defaultValue)) {
                  itemValue = defaultValue({ item });
                } else if (!import_xe_utils25.default.isUndefined(defaultValue)) {
                  itemValue = defaultValue;
                }
              }
              fData[field] = itemValue;
            }
          });
          reactData.formData = fData;
        }
        if (!proxyInited) {
          reactData.proxyInited = true;
          if (proxyOpts.autoLoad !== false) {
            nextTick().then(() => gridMethods.commitProxy("_init")).then((rest) => {
              gridMethods.dispatchEvent("proxy-query", Object.assign(Object.assign({}, rest), { isInited: true }), new Event("init"));
            });
          }
        }
      }
    };
    const handleGlobalKeydownEvent = (evnt) => {
      const zoomOpts = computeZoomOpts.value;
      const isEsc = globalEvents4.hasKey(evnt, GLOBAL_EVENT_KEYS3.ESCAPE);
      if (isEsc && reactData.isZMax && zoomOpts.escRestore !== false) {
        gridPrivateMethods.triggerZoomEvent(evnt);
      }
    };
    const dispatchEvent = (type, params, evnt) => {
      emit(type, createEvent3(evnt, { $grid: $xeGrid }, params));
    };
    const gridMethods = {
      dispatchEvent,
      /**
       * 提交指令，支持 code 或 button
       * @param {String/Object} code 字符串或对象
       */
      commitProxy(proxyTarget, ...args) {
        const { toolbarConfig, pagerConfig, editRules, validConfig } = props;
        const { tablePage } = reactData;
        const isActiveMsg = computeIsActiveMsg.value;
        const isRespMsg = computeIsRespMsg.value;
        const proxyOpts = computeProxyOpts.value;
        const pagerOpts = computePagerOpts.value;
        const toolbarOpts = computeToolbarOpts.value;
        const { beforeQuery, afterQuery, beforeDelete, afterDelete, beforeSave, afterSave, ajax = {} } = proxyOpts;
        const resConfigs = proxyOpts.response || proxyOpts.props || {};
        const $xeTable = refTable.value;
        const formData = getFormData();
        let button = null;
        let code = null;
        if (import_xe_utils25.default.isString(proxyTarget)) {
          const { buttons } = toolbarOpts;
          const matchObj = toolbarConfig && isEnableConf(toolbarOpts) && buttons ? import_xe_utils25.default.findTree(buttons, (item) => item.code === proxyTarget, { children: "dropdowns" }) : null;
          button = matchObj ? matchObj.item : null;
          code = proxyTarget;
        } else {
          button = proxyTarget;
          code = button.code;
        }
        const btnParams = button ? button.params : null;
        switch (code) {
          case "insert":
            return $xeTable.insert({});
          case "insert_edit":
            return $xeTable.insert({}).then(({ row }) => $xeTable.setEditRow(row));
          case "insert_actived":
            return $xeTable.insert({}).then(({ row }) => $xeTable.setEditRow(row));
          case "mark_cancel":
            triggerPendingEvent(code);
            break;
          case "remove":
            return handleDeleteRow(code, "vxe.grid.removeSelectRecord", () => $xeTable.removeCheckboxRow());
          case "import":
            $xeTable.importData(btnParams);
            break;
          case "open_import":
            $xeTable.openImport(btnParams);
            break;
          case "export":
            $xeTable.exportData(btnParams);
            break;
          case "open_export":
            $xeTable.openExport(btnParams);
            break;
          case "reset_custom":
            return $xeTable.resetColumn(true);
          case "_init":
          case "reload":
          case "query": {
            const ajaxMethods = ajax.query;
            const querySuccessMethods = ajax.querySuccess;
            const queryErrorMethods = ajax.queryError;
            if (ajaxMethods) {
              const isInited = code === "_init";
              const isReload = code === "reload";
              let sortList = [];
              let filterList = [];
              let pageParams = {};
              if (pagerConfig) {
                if (isInited || isReload) {
                  tablePage.currentPage = 1;
                }
                if (isEnableConf(pagerOpts)) {
                  pageParams = Object.assign({}, tablePage);
                }
              }
              if (isInited) {
                let defaultSort = null;
                if ($xeTable) {
                  const { computeSortOpts } = $xeTable.getComputeMaps();
                  const sortOpts = computeSortOpts.value;
                  defaultSort = sortOpts.defaultSort;
                }
                if (defaultSort) {
                  if (!import_xe_utils25.default.isArray(defaultSort)) {
                    defaultSort = [defaultSort];
                  }
                  sortList = defaultSort.map((item) => {
                    return {
                      field: item.field,
                      property: item.field,
                      order: item.order
                    };
                  });
                }
                if ($xeTable) {
                  filterList = $xeTable.getCheckedFilters();
                }
              } else {
                if ($xeTable) {
                  if (isReload) {
                    $xeTable.clearAll();
                  } else {
                    sortList = $xeTable.getSortColumns();
                    filterList = $xeTable.getCheckedFilters();
                  }
                }
              }
              const commitParams = {
                code,
                button,
                isInited,
                isReload,
                $grid: $xeGrid,
                page: pageParams,
                sort: sortList.length ? sortList[0] : {},
                sorts: sortList,
                filters: filterList,
                form: formData,
                options: ajaxMethods
              };
              reactData.sortData = sortList;
              reactData.filterData = filterList;
              reactData.tableLoading = true;
              return Promise.resolve((beforeQuery || ajaxMethods)(commitParams, ...args)).then((rest) => {
                reactData.tableLoading = false;
                if (rest) {
                  if (pagerConfig && isEnableConf(pagerOpts)) {
                    const totalProp = resConfigs.total;
                    const total = (import_xe_utils25.default.isFunction(totalProp) ? totalProp({ data: rest, $grid: $xeGrid }) : import_xe_utils25.default.get(rest, totalProp || "page.total")) || 0;
                    tablePage.total = import_xe_utils25.default.toNumber(total);
                    const resultProp = resConfigs.result;
                    reactData.tableData = (import_xe_utils25.default.isFunction(resultProp) ? resultProp({ data: rest, $grid: $xeGrid }) : import_xe_utils25.default.get(rest, resultProp || "result")) || [];
                    const pageCount = Math.max(Math.ceil(total / tablePage.pageSize), 1);
                    if (tablePage.currentPage > pageCount) {
                      tablePage.currentPage = pageCount;
                    }
                  } else {
                    const listProp = resConfigs.list;
                    reactData.tableData = (listProp ? import_xe_utils25.default.isFunction(listProp) ? listProp({ data: rest, $grid: $xeGrid }) : import_xe_utils25.default.get(rest, listProp) : rest) || [];
                  }
                } else {
                  reactData.tableData = [];
                }
                if (afterQuery) {
                  afterQuery(commitParams, ...args);
                }
                if (querySuccessMethods) {
                  querySuccessMethods(Object.assign(Object.assign({}, commitParams), { response: rest }));
                }
                return { status: true };
              }).catch((rest) => {
                reactData.tableLoading = false;
                if (queryErrorMethods) {
                  queryErrorMethods(Object.assign(Object.assign({}, commitParams), { response: rest }));
                }
                return { status: false };
              });
            } else {
              if (true) {
                errLog("vxe.error.notFunc", ["proxy-config.ajax.query"]);
              }
            }
            break;
          }
          case "delete": {
            const ajaxMethods = ajax.delete;
            const deleteSuccessMethods = ajax.deleteSuccess;
            const deleteErrorMethods = ajax.deleteError;
            if (ajaxMethods) {
              const selectRecords = gridExtendTableMethods.getCheckboxRecords();
              const removeRecords = selectRecords.filter((row) => !$xeTable.isInsertByRow(row));
              const body = { removeRecords };
              const commitParams = { $grid: $xeGrid, code, button, body, form: formData, options: ajaxMethods };
              if (selectRecords.length) {
                return handleDeleteRow(code, "vxe.grid.deleteSelectRecord", () => {
                  if (!removeRecords.length) {
                    return $xeTable.remove(selectRecords);
                  }
                  reactData.tableLoading = true;
                  return Promise.resolve((beforeDelete || ajaxMethods)(commitParams, ...args)).then((rest) => {
                    reactData.tableLoading = false;
                    $xeTable.setPendingRow(removeRecords, false);
                    if (isRespMsg) {
                      if (VxeUI.modal) {
                        VxeUI.modal.message({ content: getRespMsg(rest, "vxe.grid.delSuccess"), status: "success" });
                      }
                    }
                    if (afterDelete) {
                      afterDelete(commitParams, ...args);
                    } else {
                      gridMethods.commitProxy("query");
                    }
                    if (deleteSuccessMethods) {
                      deleteSuccessMethods(Object.assign(Object.assign({}, commitParams), { response: rest }));
                    }
                    return { status: true };
                  }).catch((rest) => {
                    reactData.tableLoading = false;
                    if (isRespMsg) {
                      if (VxeUI.modal) {
                        VxeUI.modal.message({ id: code, content: getRespMsg(rest, "vxe.grid.operError"), status: "error" });
                      }
                    }
                    if (deleteErrorMethods) {
                      deleteErrorMethods(Object.assign(Object.assign({}, commitParams), { response: rest }));
                    }
                    return { status: false };
                  });
                });
              } else {
                if (isActiveMsg) {
                  if (VxeUI.modal) {
                    VxeUI.modal.message({ id: code, content: getI18n14("vxe.grid.selectOneRecord"), status: "warning" });
                  }
                }
              }
            } else {
              if (true) {
                errLog("vxe.error.notFunc", ["proxy-config.ajax.delete"]);
              }
            }
            break;
          }
          case "save": {
            const ajaxMethods = ajax.save;
            const saveSuccessMethods = ajax.saveSuccess;
            const saveErrorMethods = ajax.saveError;
            if (ajaxMethods) {
              const body = $xeTable.getRecordset();
              const { insertRecords, removeRecords, updateRecords, pendingRecords } = body;
              const commitParams = { $grid: $xeGrid, code, button, body, form: formData, options: ajaxMethods };
              if (insertRecords.length) {
                body.pendingRecords = pendingRecords.filter((row) => $xeTable.findRowIndexOf(insertRecords, row) === -1);
              }
              if (pendingRecords.length) {
                body.insertRecords = insertRecords.filter((row) => $xeTable.findRowIndexOf(pendingRecords, row) === -1);
              }
              let restPromise = Promise.resolve();
              if (editRules) {
                restPromise = $xeTable[validConfig && validConfig.msgMode === "full" ? "fullValidate" : "validate"](body.insertRecords.concat(updateRecords));
              }
              return restPromise.then((errMap) => {
                if (errMap) {
                  return;
                }
                if (body.insertRecords.length || removeRecords.length || updateRecords.length || body.pendingRecords.length) {
                  reactData.tableLoading = true;
                  return Promise.resolve((beforeSave || ajaxMethods)(commitParams, ...args)).then((rest) => {
                    reactData.tableLoading = false;
                    $xeTable.clearPendingRow();
                    if (isRespMsg) {
                      if (VxeUI.modal) {
                        VxeUI.modal.message({ content: getRespMsg(rest, "vxe.grid.saveSuccess"), status: "success" });
                      }
                    }
                    if (afterSave) {
                      afterSave(commitParams, ...args);
                    } else {
                      gridMethods.commitProxy("query");
                    }
                    if (saveSuccessMethods) {
                      saveSuccessMethods(Object.assign(Object.assign({}, commitParams), { response: rest }));
                    }
                    return { status: true };
                  }).catch((rest) => {
                    reactData.tableLoading = false;
                    if (isRespMsg) {
                      if (VxeUI.modal) {
                        VxeUI.modal.message({ id: code, content: getRespMsg(rest, "vxe.grid.operError"), status: "error" });
                      }
                    }
                    if (saveErrorMethods) {
                      saveErrorMethods(Object.assign(Object.assign({}, commitParams), { response: rest }));
                    }
                    return { status: false };
                  });
                } else {
                  if (isActiveMsg) {
                    if (VxeUI.modal) {
                      VxeUI.modal.message({ id: code, content: getI18n14("vxe.grid.dataUnchanged"), status: "info" });
                    }
                  }
                }
              });
            } else {
              if (true) {
                errLog("vxe.error.notFunc", ["proxy-config.ajax.save"]);
              }
            }
            break;
          }
          default: {
            const gCommandOpts = commands3.get(code);
            if (gCommandOpts) {
              const tCommandMethod = gCommandOpts.tableCommandMethod || gCommandOpts.commandMethod;
              if (tCommandMethod) {
                tCommandMethod({ code, button, $grid: $xeGrid, $table: $xeTable }, ...args);
              } else {
                if (true) {
                  errLog("vxe.error.notCommands", [code]);
                }
              }
            }
          }
        }
        return nextTick();
      },
      zoom() {
        if (reactData.isZMax) {
          return gridMethods.revert();
        }
        return gridMethods.maximize();
      },
      isMaximized() {
        return reactData.isZMax;
      },
      maximize() {
        return handleZoom(true);
      },
      revert() {
        return handleZoom();
      },
      getFormData,
      getFormItems(itemIndex) {
        const formOpts = computeFormOpts.value;
        const { formConfig } = props;
        const { items } = formOpts;
        const itemList = [];
        import_xe_utils25.default.eachTree(formConfig && isEnableConf(formOpts) && items ? items : [], (item) => {
          itemList.push(item);
        }, { children: "children" });
        return import_xe_utils25.default.isUndefined(itemIndex) ? itemList : itemList[itemIndex];
      },
      getProxyInfo() {
        const $xeTable = refTable.value;
        if (props.proxyConfig) {
          const { sortData } = reactData;
          return {
            data: reactData.tableData,
            filter: reactData.filterData,
            form: getFormData(),
            sort: sortData.length ? sortData[0] : {},
            sorts: sortData,
            pager: reactData.tablePage,
            pendingRecords: $xeTable ? $xeTable.getPendingRecords() : []
          };
        }
        return null;
      }
      // setProxyInfo (options) {
      //   if (props.proxyConfig && options) {
      //     const { pager, form } = options
      //     const proxyOpts = computeProxyOpts.value
      //     if (pager) {
      //       if (pager.currentPage) {
      //         reactData.tablePage.currentPage = Number(pager.currentPage)
      //       }
      //       if (pager.pageSize) {
      //         reactData.tablePage.pageSize = Number(pager.pageSize)
      //       }
      //     }
      //     if (proxyOpts.form && form) {
      //       Object.assign(reactData.formData, form)
      //     }
      //   }
      //   return nextTick()
      // }
    };
    if (true) {
      gridMethods.loadColumn = (columns) => {
        const $xeTable = refTable.value;
        import_xe_utils25.default.eachTree(columns, (column) => {
          if (column.slots) {
            import_xe_utils25.default.each(column.slots, (func) => {
              if (!import_xe_utils25.default.isFunction(func)) {
                if (!slots[func]) {
                  errLog("vxe.error.notSlot", [func]);
                }
              }
            });
          }
        });
        if ($xeTable) {
          return $xeTable.loadColumn(columns);
        }
        return nextTick();
      };
      gridMethods.reloadColumn = (columns) => {
        gridExtendTableMethods.clearAll();
        return gridMethods.loadColumn(columns);
      };
    }
    const gridPrivateMethods = {
      extendTableMethods,
      callSlot(slotFunc, params) {
        if (slotFunc) {
          if (import_xe_utils25.default.isString(slotFunc)) {
            slotFunc = slots[slotFunc] || null;
          }
          if (import_xe_utils25.default.isFunction(slotFunc)) {
            return getSlotVNs(slotFunc(params));
          }
        }
        return [];
      },
      /**
       * 获取需要排除的高度
       */
      getExcludeHeight() {
        const { height } = props;
        const { isZMax } = reactData;
        const el = refElem.value;
        const formWrapper = refFormWrapper.value;
        const toolbarWrapper = refToolbarWrapper.value;
        const topWrapper = refTopWrapper.value;
        const bottomWrapper = refBottomWrapper.value;
        const pagerWrapper = refPagerWrapper.value;
        const parentPaddingSize = isZMax || !(height === "auto" || height === "100%") ? 0 : getPaddingTopBottomSize(el.parentNode);
        return parentPaddingSize + getPaddingTopBottomSize(el) + getOffsetHeight(formWrapper) + getOffsetHeight(toolbarWrapper) + getOffsetHeight(topWrapper) + getOffsetHeight(bottomWrapper) + getOffsetHeight(pagerWrapper);
      },
      getParentHeight() {
        const el = refElem.value;
        if (el) {
          return (reactData.isZMax ? getDomNode().visibleHeight : import_xe_utils25.default.toNumber(getComputedStyle(el.parentNode).height)) - gridPrivateMethods.getExcludeHeight();
        }
        return 0;
      },
      triggerToolbarCommitEvent(params, evnt) {
        const { code } = params;
        return gridMethods.commitProxy(params, evnt).then((rest) => {
          if (code && rest && rest.status && ["query", "reload", "delete", "save"].includes(code)) {
            gridMethods.dispatchEvent(code === "delete" || code === "save" ? `proxy-${code}` : "proxy-query", Object.assign(Object.assign({}, rest), { isReload: code === "reload" }), evnt);
          }
        });
      },
      triggerToolbarBtnEvent(button, evnt) {
        gridPrivateMethods.triggerToolbarCommitEvent(button, evnt);
        gridMethods.dispatchEvent("toolbar-button-click", { code: button.code, button }, evnt);
      },
      triggerToolbarTolEvent(tool, evnt) {
        gridPrivateMethods.triggerToolbarCommitEvent(tool, evnt);
        gridMethods.dispatchEvent("toolbar-tool-click", { code: tool.code, tool }, evnt);
      },
      triggerZoomEvent(evnt) {
        gridMethods.zoom();
        gridMethods.dispatchEvent("zoom", { type: reactData.isZMax ? "max" : "revert" }, evnt);
      }
    };
    Object.assign($xeGrid, gridExtendTableMethods, gridMethods, gridPrivateMethods);
    const columnFlag = ref(0);
    watch(() => props.columns ? props.columns.length : -1, () => {
      columnFlag.value++;
    });
    watch(() => props.columns, () => {
      columnFlag.value++;
    });
    watch(columnFlag, () => {
      nextTick(() => $xeGrid.loadColumn(props.columns || []));
    });
    watch(() => props.toolbarConfig, () => {
      initToolbar();
    });
    watch(() => props.pagerConfig, () => {
      initPages();
    });
    watch(() => props.proxyConfig, () => {
      initProxy();
    });
    hooks9.forEach((options) => {
      const { setupGrid } = options;
      if (setupGrid) {
        const hookRest = setupGrid($xeGrid);
        if (hookRest && import_xe_utils25.default.isObject(hookRest)) {
          Object.assign($xeGrid, hookRest);
        }
      }
    });
    initPages();
    onMounted(() => {
      if (true) {
        nextTick(() => {
          if (props.formConfig) {
            if (!VxeUIFormComponent) {
              errLog("vxe.error.reqComp", ["vxe-form"]);
            }
          }
          if (props.pagerConfig) {
            if (!VxeUIPagerComponent) {
              errLog("vxe.error.reqComp", ["vxe-pager"]);
            }
          }
        });
      }
      nextTick(() => {
        const { columns } = props;
        if (columns && columns.length) {
          $xeGrid.loadColumn(columns);
        }
        initToolbar();
        initProxy();
      });
      globalEvents4.on($xeGrid, "keydown", handleGlobalKeydownEvent);
    });
    onUnmounted(() => {
      globalEvents4.off($xeGrid, "keydown");
    });
    const renderVN = () => {
      const vSize = computeSize.value;
      const styles = computeStyles.value;
      return h("div", {
        ref: refElem,
        class: ["vxe-grid", {
          [`size--${vSize}`]: vSize,
          "is--animat": !!props.animat,
          "is--round": props.round,
          "is--maximize": reactData.isZMax,
          "is--loading": props.loading || reactData.tableLoading
        }],
        style: styles
      }, renderLayout());
    };
    $xeGrid.renderVN = renderVN;
    provide("$xeGrid", $xeGrid);
    return $xeGrid;
  },
  render() {
    return this.renderVN();
  }
});

// node_modules/.pnpm/vxe-table@4.7.86_vue@3.5.12_typescript@5.6.3_/node_modules/vxe-table/es/grid/index.js
var VxeGrid = Object.assign({}, grid_default, {
  install(app) {
    app.component(grid_default.name, grid_default);
  }
});
if (VxeUI.dynamicApp) {
  VxeUI.dynamicApp.component(grid_default.name, grid_default);
}
VxeUI.component(grid_default);
var Grid = VxeGrid;

// node_modules/.pnpm/vxe-table@4.7.86_vue@3.5.12_typescript@5.6.3_/node_modules/vxe-table/es/locale/lang/zh-CN.js
var zh_CN_default = {
  vxe: {
    base: {
      pleaseInput: "请输入",
      pleaseSelect: "请选择",
      comma: "，",
      fullStop: "。"
    },
    loading: {
      text: "加载中..."
    },
    error: {
      downErr: "下载失败",
      groupFixed: "如果使用分组表头，冻结列必须按组设置",
      groupMouseRange: '分组表头与 "{0}" 不能同时使用，这可能会出现错误',
      groupTag: '分组列头应该使用 "{0}" 而不是 "{1}"，这可能会出现错误',
      scrollErrProp: '启用虚拟滚动后不支持该参数 "{0}"',
      errConflicts: '参数 "{0}" 与 "{1}" 有冲突',
      unableInsert: "无法插入到指定位置，请检查参数是否正确",
      useErr: '安装 "{0}" 模块时发生错误，可能顺序不正确，依赖的模块需要在 Table 之前安装',
      barUnableLink: "工具栏无法关联表格",
      expandContent: '展开行的插槽应该是 "content"，请检查是否正确',
      reqComp: '缺少 "{0}" 组件，请检查是否正确安装。 https://vxeui.com/#/start/useGlobal',
      reqModule: '缺少 "{0}" 模块',
      reqProp: '缺少必要的 "{0}" 参数，这可能会导致出现错误',
      emptyProp: '参数 "{0}" 不允许为空',
      errProp: '不支持的参数 "{0}"，可能为 "{1}"',
      colRepet: 'column.{0}="{1}" 重复了，这可能会导致某些功能无法使用',
      notFunc: '方法 "{0}" 不存在',
      errFunc: '参数 "{0}" 不是一个方法',
      notValidators: '全局校验 "{0}" 不存在',
      notFormats: '全局格式化 "{0}" 不存在',
      notCommands: '全局指令 "{0}" 不存在',
      notSlot: '插槽 "{0}" 不存在',
      noTree: '树结构不支持 "{0}"',
      notProp: '不支持的参数 "{0}"',
      checkProp: '当数据量过大时可能会导致复选框卡顿，建议设置参数 "{0}" 提升渲染速度',
      coverProp: '"{0}" 的参数 "{1}" 重复定义，这可能会出现错误',
      uniField: '字段名 "{0}" 重复定义，这可能会出现错误',
      delFunc: '方法 "{0}" 已废弃，请使用 "{1}"',
      delProp: '参数 "{0}" 已废弃，请使用 "{1}"',
      delEvent: '事件 "{0}" 已废弃，请使用 "{1}"',
      removeProp: '参数 "{0}" 已废弃，不建议使用，这可能会导致出现错误',
      errFormat: '全局的格式化内容应该使用 "VXETable.formats" 定义，挂载 "formatter={0}" 的方式已不建议使用',
      notType: '不支持的文件类型 "{0}"',
      notExp: "该浏览器不支持导入/导出功能",
      impFields: "导入失败，请检查字段名和数据格式是否正确",
      treeNotImp: "树表格不支持导入"
    },
    table: {
      emptyText: "暂无数据",
      allTitle: "全选/取消",
      seqTitle: "序号",
      actionTitle: "操作",
      confirmFilter: "筛选",
      resetFilter: "重置",
      allFilter: "全部",
      sortAsc: "升序：最低到最高",
      sortDesc: "降序：最高到最低",
      filter: "对所选的列启用筛选",
      impSuccess: "成功导入 {0} 条记录",
      expLoading: "正在导出中",
      expSuccess: "导出成功",
      expFilename: "导出_{0}",
      expOriginFilename: "导出_源_{0}",
      customTitle: "列设置",
      customAll: "全部",
      customConfirm: "确认",
      customClose: "关闭",
      customCancel: "取消",
      customRestore: "恢复默认",
      maxFixedCol: "最大冻结列的数量不能超过 {0} 个"
    },
    grid: {
      selectOneRecord: "请至少选择一条记录！",
      deleteSelectRecord: "您确定要删除所选记录吗？",
      removeSelectRecord: "您确定要移除所选记录吗？",
      dataUnchanged: "数据未改动！",
      delSuccess: "成功删除所选记录！",
      saveSuccess: "保存成功！",
      operError: "发生错误，操作失败！"
    },
    select: {
      search: "搜索",
      loadingText: "加载中",
      emptyText: "暂无数据"
    },
    pager: {
      goto: "前往",
      gotoTitle: "页数",
      pagesize: "{0}条/页",
      total: "共 {0} 条记录",
      pageClassifier: "页",
      homePage: "首页",
      homePageTitle: "首页",
      prevPage: "上一页",
      prevPageTitle: "上一页",
      nextPage: "下一页",
      nextPageTitle: "下一页",
      prevJump: "向上跳页",
      prevJumpTitle: "向上跳页",
      nextJump: "向下跳页",
      nextJumpTitle: "向下跳页",
      endPage: "末页",
      endPageTitle: "末页"
    },
    alert: {
      title: "系统提示"
    },
    button: {
      confirm: "确认",
      cancel: "取消"
    },
    filter: {
      search: "搜索"
    },
    custom: {
      cstmTitle: "列设置",
      cstmRestore: "恢复默认",
      cstmCancel: "取消",
      cstmConfirm: "确定",
      cstmConfirmRestore: "请确认是否恢复成默认列配置？",
      cstmDragTarget: "移动目标：{0}",
      setting: {
        colSort: "排序",
        sortHelpTip: "点击并拖动图标可以调整列的排序",
        colTitle: "标题",
        colResizable: "列宽（像素）",
        colVisible: "是否显示",
        colFixed: "冻结列",
        colFixedMax: "冻结列（最多 {0} 列）",
        fixedLeft: "左侧",
        fixedUnset: "不设置",
        fixedRight: "右侧"
      }
    },
    import: {
      modes: {
        covering: "覆盖方式（直接覆盖表格数据）",
        insert: "底部追加（在表格的底部追加新数据）",
        insertTop: "顶部追加（在表格的顶部追加新数据）",
        insertBottom: "底部追加（在表格的底部追加新数据）"
      },
      impTitle: "导入数据",
      impFile: "文件名",
      impSelect: "选择文件",
      impType: "文件类型",
      impOpts: "参数设置",
      impMode: "导入模式",
      impConfirm: "导入",
      impCancel: "取消"
    },
    export: {
      types: {
        csv: "CSV (逗号分隔)(*.csv)",
        html: "网页(*.html)",
        xml: "XML 数据(*.xml)",
        txt: "文本文件(制表符分隔)(*.txt)",
        xls: "Excel 97-2003 工作簿(*.xls)",
        xlsx: "Excel 工作簿(*.xlsx)",
        pdf: "PDF (*.pdf)"
      },
      modes: {
        current: "当前数据（当前页的数据）",
        selected: "选中数据（当前页选中的数据）",
        all: "全量数据（包括所有分页的数据）"
      },
      printTitle: "打印数据",
      expTitle: "导出数据",
      expName: "文件名",
      expNamePlaceholder: "请输入文件名",
      expSheetName: "标题",
      expSheetNamePlaceholder: "请输入标题",
      expType: "保存类型",
      expMode: "选择数据",
      expCurrentColumn: "全部字段",
      expColumn: "选择字段",
      expOpts: "参数设置",
      expOptHeader: "表头",
      expHeaderTitle: "是否需要表头",
      expOptFooter: "表尾",
      expFooterTitle: "是否需要表尾",
      expOptColgroup: "分组表头",
      expColgroupTitle: "如果存在，则支持带有分组结构的表头",
      expOptMerge: "合并",
      expMergeTitle: "如果存在，则支持带有合并结构的单元格",
      expOptAllExpand: "展开层级",
      expAllExpandTitle: "如果存在，则支持将带有层级结构的数据全部展开",
      expOptUseStyle: "样式",
      expUseStyleTitle: "如果存在，则支持带样式的单元格",
      expOptOriginal: "源数据",
      expOriginalTitle: "如果为源数据，则支持导入到表格中",
      expPrint: "打印",
      expConfirm: "导出",
      expCancel: "取消"
    },
    modal: {
      errTitle: "错误提示",
      zoomMin: "最小化",
      zoomIn: "最大化",
      zoomOut: "还原",
      close: "关闭",
      miniMaxSize: "最小化窗口的数量不能超过 {0} 个",
      footPropErr: "show-footer 仅用于启用表尾，需配合 show-confirm-button | show-cancel-button | 插槽使用"
    },
    drawer: {
      close: "关闭"
    },
    form: {
      folding: "收起",
      unfolding: "展开"
    },
    toolbar: {
      import: "导入",
      export: "导出",
      print: "打印",
      refresh: "刷新",
      zoomIn: "全屏",
      zoomOut: "还原",
      custom: "列设置",
      customAll: "全部",
      customConfirm: "确认",
      customRestore: "重置",
      fixedLeft: "冻结在左侧",
      fixedRight: "冻结在右侧",
      cancelFixed: "取消冻结列"
    },
    input: {
      date: {
        m1: "01 月",
        m2: "02 月",
        m3: "03 月",
        m4: "04 月",
        m5: "05 月",
        m6: "06 月",
        m7: "07 月",
        m8: "08 月",
        m9: "09 月",
        m10: "10 月",
        m11: "11 月",
        m12: "12 月",
        quarterLabel: "{0} 年",
        monthLabel: "{0} 年",
        dayLabel: "{0} 年 {1}",
        labelFormat: {
          date: "yyyy-MM-dd",
          time: "HH:mm:ss",
          datetime: "yyyy-MM-dd HH:mm:ss",
          week: "yyyy 年第 WW 周",
          month: "yyyy-MM",
          quarter: "yyyy 年第 q 季度",
          year: "yyyy"
        },
        weeks: {
          w: "周",
          w0: "周日",
          w1: "周一",
          w2: "周二",
          w3: "周三",
          w4: "周四",
          w5: "周五",
          w6: "周六"
        },
        months: {
          m0: "一月",
          m1: "二月",
          m2: "三月",
          m3: "四月",
          m4: "五月",
          m5: "六月",
          m6: "七月",
          m7: "八月",
          m8: "九月",
          m9: "十月",
          m10: "十一月",
          m11: "十二月"
        },
        quarters: {
          q1: "第一季度",
          q2: "第二季度",
          q3: "第三季度",
          q4: "第四季度"
        }
      }
    },
    imagePreview: {
      popupTitle: "预览",
      operBtn: {
        zoomOut: "缩小",
        zoomIn: "放大",
        pctFull: "等比例缩放",
        pct11: "显示原始尺寸",
        rotateLeft: "向左旋转",
        rotateRight: "向右旋转",
        print: "点击打印图片",
        download: "点击下载图片"
      }
    },
    upload: {
      fileBtnText: "点击或拖拽上传",
      imgBtnText: "点击或拖拽上传",
      dragPlaceholder: "请把文件拖放到这个区域即可上传",
      imgSizeHint: "单张{0}",
      imgCountHint: "最多{0}张",
      fileTypeHint: "支持 {0} 文件类型",
      fileSizeHint: "单个文件大小不超过{0}",
      fileCountHint: "最多可上传{0}个文件",
      overCountErr: "最多只能选择{0}个文件！",
      overCountExtraErr: "已超出最大数量{0}个，超出的{1}个文件将被忽略！",
      overSizeErr: "文件大小最大不能超过{0}！",
      reUpload: "重新上传",
      uploadProgress: "上传中 {0}%",
      uploadErr: "上传失败",
      uploadSuccess: "上传成功",
      moreBtnText: "更多（{0}）",
      viewItemTitle: "点击查看",
      morePopup: {
        readTitle: "查看列表",
        imageTitle: "上传图片",
        fileTitle: "上传文件"
      }
    },
    formDesign: {
      formName: "表单名称",
      defFormTitle: "未命名的表单",
      widgetPropTab: "控件属性",
      widgetFormTab: "表单属性",
      error: {
        wdFormUni: "该类型的控件在表单中只允许添加一个",
        wdSubUni: "该类型的控件在子表中只允许添加一个"
      },
      styleSetting: {
        btn: "样式设置",
        title: "表单的样式设置",
        layoutTitle: "控件布局",
        verticalLayout: "上下布局",
        horizontalLayout: "横向布局",
        styleTitle: "标题样式",
        boldTitle: "标题加粗",
        fontBold: "加粗",
        fontNormal: "常规",
        colonTitle: "显示冒号",
        colonVisible: "显示",
        colonHidden: "隐藏",
        alignTitle: "对齐方式",
        widthTitle: "标题宽度",
        alignLeft: "居左",
        alignRight: "居右",
        unitPx: "像素",
        unitPct: "百分比"
      },
      widget: {
        group: {
          base: "基础控件",
          layout: "布局控件",
          system: "系统控件",
          module: "模块控件",
          chart: "图表控件",
          advanced: "高级控件"
        },
        copyTitle: "副本_{0}",
        component: {
          input: "输入框",
          textarea: "文本域",
          select: "下拉选择",
          row: "一行多列",
          title: "标题",
          text: "文本",
          subtable: "子表",
          VxeSwitch: "是/否",
          VxeInput: "输入框",
          VxeNumberInput: "数字",
          VxeDatePicker: "日期",
          VxeTextarea: "文本域",
          VxeSelect: "下拉选择",
          VxeTreeSelect: "树形选择",
          VxeRadioGroup: "单选框",
          VxeCheckboxGroup: "复选框",
          VxeUploadFile: "文件",
          VxeUploadImage: "图片"
        }
      },
      widgetProp: {
        name: "控件名称",
        placeholder: "提示语",
        required: "必填校验",
        multiple: "允许多选",
        displaySetting: {
          name: "显示设置",
          pc: "电脑端",
          mobile: "手机端",
          visible: "显示",
          hidden: "隐藏"
        },
        dataSource: {
          name: "数据源",
          defValue: "选项{0}",
          addOption: "添加选项",
          batchEditOption: "批量编辑",
          batchEditTip: "每行对应一个选项，支持从表格、Excel、WPS 中直接复制粘贴。",
          batchEditSubTip: "每行对应一个选项，如果是分组，子项可以是空格或制表键开头，支持从表格、Excel、WPS 中直接复制粘贴。",
          buildOption: "生成选项"
        },
        rowProp: {
          colSize: "列数",
          col2: "两列",
          col3: "三列",
          col4: "四列",
          col6: "六列",
          layout: "布局"
        },
        textProp: {
          name: "内容",
          alignTitle: "对齐方式",
          alignLeft: "居左",
          alignCenter: "居中",
          alignRight: "居右",
          colorTitle: "字体颜色",
          sizeTitle: "字体大小",
          boldTitle: "字体加粗",
          fontNormal: "常规",
          fontBold: "加粗"
        },
        subtableProp: {
          seqTitle: "序号",
          showSeq: "显示序号",
          showCheckbox: "允许多选",
          errSubDrag: "子表不支持该控件，请使用其他控件",
          colPlace: "将控件拖拽进来"
        },
        uploadProp: {
          limitFileCount: "文件数量限制",
          limitFileSize: "文件大小限制",
          multiFile: "允许上传多个文件",
          limitImgCount: "图片数量限制",
          limitImgSize: "图片大小限制",
          multiImg: "允许上传多张图片"
        }
      }
    },
    listDesign: {
      fieldSettingTab: "字段设置",
      listSettingTab: "参数设置",
      searchTitle: "查询条件",
      listTitle: "列表字段",
      searchField: "查询字段",
      listField: "列表字段",
      activeBtn: {
        ActionButtonUpdate: "编辑",
        ActionButtonDelete: "删除"
      },
      search: {
        addBtn: "编辑",
        emptyText: "未配置查询条件",
        editPopupTitle: "编辑查询字段"
      },
      searchPopup: {
        colTitle: "标题",
        saveBtn: "保存"
      }
    },
    text: {
      copySuccess: "已复制到剪贴板",
      copyError: "当前环境不支持该操作"
    },
    countdown: {
      formats: {
        yyyy: "年",
        MM: "月",
        dd: "天",
        HH: "时",
        mm: "分",
        ss: "秒"
      }
    },
    plugins: {
      extendCellArea: {
        area: {
          mergeErr: "无法对合并单元格进行该操作",
          multiErr: "无法对多重选择区域进行该操作",
          extendErr: "如果延伸的区域包含被合并的单元格，所有合并的单元格需大小相同",
          pasteMultiErr: "无法粘贴，需要相同大小的复制的区域和粘贴的区域才能执行此操作",
          cpInvalidErr: "该操作无法进行，您选择的区域中存在被禁止的列（{0}）"
        },
        fnr: {
          title: "查找和替换",
          findLabel: "查找",
          replaceLabel: "替换",
          findTitle: "查找内容：",
          replaceTitle: "替换为：",
          tabs: {
            find: "查找",
            replace: "替换"
          },
          filter: {
            re: "正则表达式",
            whole: "全词匹配",
            sensitive: "区分大小写"
          },
          btns: {
            findNext: "查找下一个",
            findAll: "查找全部",
            replace: "替换",
            replaceAll: "替换全部",
            cancel: "取消"
          },
          header: {
            seq: "#",
            cell: "单元格",
            value: "值"
          },
          empty: "(空值)",
          reError: "无效的正则表达式",
          recordCount: "已找到 {0} 个单元格",
          notCell: "找不到匹配的单元格",
          replaceSuccess: "成功替换 {0} 个单元格"
        }
      },
      filterComplexInput: {
        menus: {
          fixedColumn: "冻结列",
          fixedGroup: "冻结分组",
          cancelFixed: "取消冻结",
          fixedLeft: "冻结左侧",
          fixedRight: "冻结右侧"
        },
        cases: {
          equal: "等于",
          gt: "大于",
          lt: "小于",
          begin: "开头是",
          endin: "结尾是",
          include: "包含",
          isSensitive: "区分大小写"
        }
      },
      filterCombination: {
        menus: {
          clearSort: "清除排序",
          sortAsc: "升序",
          sortDesc: "降序",
          fixedColumn: "冻结列",
          fixedGroup: "冻结分组",
          cancelFixed: "取消冻结",
          fixedLeft: "冻结左侧",
          fixedRight: "冻结右侧",
          clearFilter: "清除筛选",
          textOption: "文本筛选",
          numberOption: "数值筛选"
        },
        popup: {
          title: "自定义筛选的方式",
          currColumnTitle: "当前列：",
          and: "与",
          or: "或",
          describeHtml: "可用 ? 代表单个字符<br/>用 * 代表任意多个字符"
        },
        cases: {
          equal: "等于",
          unequal: "不等于",
          gt: "大于",
          ge: "大于或等于",
          lt: "小于",
          le: "小于或等于",
          begin: "开头是",
          notbegin: "开头不是",
          endin: "结尾是",
          notendin: "结尾不是",
          include: "包含",
          exclude: "不包含",
          between: "介于",
          custom: "自定义筛选",
          insensitive: "不区分大小写",
          isSensitive: "区分大小写"
        },
        empty: "(空白)",
        notData: "无匹配项"
      }
    },
    pro: {
      area: {
        mergeErr: "无法对合并单元格进行该操作",
        multiErr: "无法对多重选择区域进行该操作",
        extendErr: "如果延伸的区域包含被合并的单元格，所有合并的单元格需大小相同",
        pasteMultiErr: "无法粘贴，需要相同大小的复制的区域和粘贴的区域才能执行此操作"
      },
      fnr: {
        title: "查找和替换",
        findLabel: "查找",
        replaceLabel: "替换",
        findTitle: "查找内容：",
        replaceTitle: "替换为：",
        tabs: {
          find: "查找",
          replace: "替换"
        },
        filter: {
          re: "正则表达式",
          whole: "全词匹配",
          sensitive: "区分大小写"
        },
        btns: {
          findNext: "查找下一个",
          findAll: "查找全部",
          replace: "替换",
          replaceAll: "替换全部",
          cancel: "取消"
        },
        header: {
          seq: "#",
          cell: "单元格",
          value: "值"
        },
        empty: "(空值)",
        reError: "无效的正则表达式",
        recordCount: "已找到 {0} 个单元格",
        notCell: "找不到匹配的单元格",
        replaceSuccess: "成功替换 {0} 个单元格"
      }
    },
    renderer: {
      search: "搜索",
      cases: {
        equal: "等于",
        unequal: "不等于",
        gt: "大于",
        ge: "大于或等于",
        lt: "小于",
        le: "小于或等于",
        begin: "开头是",
        notbegin: "开头不是",
        endin: "结尾是",
        notendin: "结尾不是",
        include: "包含",
        exclude: "不包含",
        between: "介于",
        custom: "自定义筛选",
        insensitive: "不区分大小写",
        isSensitive: "区分大小写"
      },
      combination: {
        menus: {
          clearSort: "清除排序",
          sortAsc: "升序",
          sortDesc: "降序",
          fixedColumn: "锁定列",
          fixedGroup: "锁定组",
          cancelFixed: "取消锁定",
          fixedLeft: "锁定左侧",
          fixedRight: "锁定右侧",
          clearFilter: "清除筛选",
          textOption: "文本筛选",
          numberOption: "数值筛选"
        },
        popup: {
          title: "自定义筛选的方式",
          currColumnTitle: "当前列：",
          and: "与",
          or: "或",
          describeHtml: "可用 ? 代表单个字符<br/>用 * 代表任意多个字符"
        },
        empty: "(空白)",
        notData: "无匹配项"
      }
    }
  }
};

// node_modules/.pnpm/vxe-table@4.7.86_vue@3.5.12_typescript@5.6.3_/node_modules/vxe-table/es/components.js
var components = [
  VxeColumn,
  VxeColgroup,
  VxeGrid,
  VxeTable,
  VxeToolbar
];
function install(app, options) {
  VxeUI.setConfig(options);
  components.forEach((component) => component.install(app));
}
if (!VxeUI.hasLanguage("zh-CN")) {
  const defaultLanguage = "zh-CN";
  VxeUI.setI18n(defaultLanguage, zh_CN_default);
  VxeUI.setLanguage(defaultLanguage);
}
VxeUI.setTheme("light");

// node_modules/.pnpm/vxe-table@4.7.86_vue@3.5.12_typescript@5.6.3_/node_modules/vxe-table/es/index.esm.js
var index_esm_default2 = components_exports;
export {
  Colgroup,
  Column,
  Grid,
  Table,
  Toolbar,
  VXETable,
  VxeColgroup,
  VxeColumn,
  VxeGrid,
  VxeTable,
  VxeToolbar,
  VxeUI,
  _t,
  clipboard,
  commands,
  config,
  index_esm_default2 as default,
  formats,
  getConfig,
  getI18n,
  getIcon,
  getTheme,
  globalEvents,
  globalResize,
  hooks,
  install,
  interceptor,
  log,
  menus,
  modal,
  print,
  readFile,
  renderer,
  saveFile,
  setConfig,
  setI18n,
  setIcon,
  setLanguage,
  setTheme,
  setup,
  t,
  use,
  validators,
  version
};
//# sourceMappingURL=vxe-table.js.map
