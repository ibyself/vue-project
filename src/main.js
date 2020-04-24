import Vue from 'vue'
import 'lib-flexible/flexible'
import './veeValidate'
import router from './router'
import { Button} from 'mint-ui'
import GshopHeader from './components/GshopHeader/GshopHeader.vue'
import store from './store'
import App from './App.vue'
import * as API from './api'
import './mock/mockServer'
import i18n from './i18n'
Vue.component('GshopHeader',GshopHeader)
Vue.component(Button.name,Button)
Vue.prototype.$API=API
Vue.config.productionTip = false


new Vue({
  el:'#app',
  components:{App},
  template:'<App/>',
  router,
  i18n,
  store
})


