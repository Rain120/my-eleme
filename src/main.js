import Vue from 'vue'
import App from './App'
import router from './router'
import Resource from 'vue-resource'

import './common/stylus/index.styl'

Vue.config.productionTip = false
Vue.use(Resource)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})