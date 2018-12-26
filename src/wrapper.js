// vue コンポーネントのインポート
import SortableElTable from './SortableElTable.vue';

// Vue.use() によって実行される install 関数を定義
export function install(Vue) {
	if (install.installed) return;
	install.installed = true;
	Vue.component('SortableElTable', SortableElTable);
}

// Vue.use() のためのモジュール定義を作成
// Create module definition for Vue.use()
const plugin = {
	install,
};

// vue が見つかった場合に自動インストールする (ブラウザで <script> タグを用いた場合等)
let GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

// (npm/webpack 等で) モジュールとして利用させるためコンポーネントを export する
export default SortableElTable;