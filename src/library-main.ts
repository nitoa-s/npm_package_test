// コンポーネントのインポート
// import component from './components/MyComponent.vue'; //(1)Vueのファイル名に変更
import { VueConstructor } from 'vue'
import TestMolecule from './components/molecules/TestMolecule.vue'
import TestMolecule2 from './components/molecules/TestMolecule2.vue'
import TestGloNav from './components/TestGloNav.vue'

// Vue.use() によって実行される install 関数を定義
// @ts-ignore
export function install(Vue) {
  // @ts-ignore
  if (install.installed) return
  // @ts-ignore
  install.installed = true
  Vue.component('TestGloNav', TestGloNav)
  // Vue.component('TestMolecule', TestMolecule); //(2)コンポーネント名を変更
  // Vue.component('TestMolecule2', TestMolecule2); //(2)コンポーネント名を変更
}

// Vue.use() のためのモジュール定義を作成
// Create module definition for Vue.use()
const plugin = {
  install,
}

// vue が見つかった場合に自動インストールする (ブラウザで <script> タグを用いた場合等)
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
  // @ts-ignore
} else if (typeof global !== 'undefined') {
  // @ts-ignore
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}

// (npm/webpack 等で) モジュールとして利用させるためコンポーネントを export する
export { TestGloNav }
