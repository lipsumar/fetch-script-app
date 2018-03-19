// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import TreeItem from '@/components/TreeView/TreeViewItem'
import Loader from '@/components/Loader'
import Datatable from 'vue2-datatable-component'

Vue.use(Datatable)

Vue.config.productionTip = false

Vue.component('tree-item', TreeItem)
Vue.component('loader', Loader)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
