import sortable from 'sortablejs';

(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

var SortableElTable = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"wrapper"},[_c('div',{key:_vm.tableKey},[_vm._t("default")],2)])},staticRenderFns: [],
  props: {
    handle: {
      type: String,
      default: '',
    },
  },
  data: function data() {
    return {
      tableKey: 0,
    };
  },
  methods: {
    makeTableSortAble: function makeTableSortAble() {
      var this$1 = this;

      var table = this.$children[0].$el.querySelector('.el-table__body-wrapper tbody');
      sortable.create(table, {
        handle: this.handle,
        animation: 150,
        onEnd: function (ref) {
          var newIndex = ref.newIndex;
          var oldIndex = ref.oldIndex;

          this$1.keepWrapperHeight(true);
          this$1.tableKey = Math.random();
          var arr = this$1.$children[0].data;
          var targetRow = arr.splice(oldIndex, 1)[0];
          arr.splice(newIndex, 0, targetRow);
        },
      });
    },
    keepWrapperHeight: function keepWrapperHeight(keep) {
      // eslint-disable-next-line prefer-destructuring
      var wrapper = this.$refs.wrapper;
      if (keep) {
        wrapper.style.minHeight = (wrapper.clientHeight) + "px";
      } else {
        wrapper.style.minHeight = 'auto';
      }
    },
  },
  mounted: function mounted() {
    this.makeTableSortAble();
  },
  watch: {
    tableKey: function tableKey() {
      var this$1 = this;

      this.$nextTick(function () {
        this$1.makeTableSortAble();
        this$1.keepWrapperHeight(false);
      });
    },
  },
};

// vue コンポーネントのインポート

// Vue.use() によって実行される install 関数を定義
function install(Vue) {
	if (install.installed) { return; }
	install.installed = true;
	Vue.component('SortableElTable', SortableElTable);
}

// Vue.use() のためのモジュール定義を作成
// Create module definition for Vue.use()
var plugin = {
	install: install,
};

// vue が見つかった場合に自動インストールする (ブラウザで <script> タグを用いた場合等)
var GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

export default SortableElTable;
export { install };
