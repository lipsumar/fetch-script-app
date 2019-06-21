import Vue from 'vue'
import App from './App.vue'
import TreeItem from '@/components/TreeView/TreeViewItem'
import Loader from '@/components/Loader'
import Datatable from 'vue2-datatable-component'
import fetchScriptApi from './api/fetchScriptApi'

Vue.use(Datatable)

Vue.config.productionTip = false

Vue.component('tree-item', TreeItem)
Vue.component('loader', Loader)

Vue.prototype.$fetchScriptApi = fetchScriptApi

new Vue({
  render: h => h(App),
}).$mount('#app')
