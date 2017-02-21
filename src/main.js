import Vue from 'vue'
import store from './store/store.js'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

import { requestURLparas, setupWebViewJavascriptBridge } from './assets/js/common.js'

const u = navigator.userAgent
const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
if (isAndroid) {
  // register JSBridge callback
  setupWebViewJavascriptBridge((bridge) => {
    bridge.init((message, responseCallback) => {
      const data = {
        'Javascript Responds': 'Wee!'
      }
      responseCallback(data)
    })
  })
}

let token = requestURLparas('token')
if (!token) {
  // get token from app
  setupWebViewJavascriptBridge((bridge) => {
    bridge.callHandler('YMDJSBridge_getToken', {}, (res) => {
      if (typeof res === 'string') {
        res = JSON.parse(res)
      }
      token = res.token
      localStorage.setItem('ymdTokenByJS', res.token)
      axios.defaults.headers.common['token'] = res.token
    })
  })
}
else {
  // get token from url
  localStorage.setItem('ymdToken', token)
  axios.defaults.headers.common['token'] = localStorage.getItem('ymdToken')
}
// make token cache in loaclStorage
if (localStorage.getItem('ymdTokenByJS')) {
  axios.defaults.headers.common['token'] = localStorage.getItem('ymdTokenByJS')
}
else if (localStorage.getItem('ymdToken')) {
  axios.defaults.headers.common['token'] = localStorage.getItem('ymdToken')
}

axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'https://api3.yunmodel.com' : 'http://v3.yunmodel.com'
// axios.defaults.headers.common['token'] = 'o1OHXvXAkWOIWeVbvCfEYUYsUE7nSDovLtfcVSBN3+WdZJ5zhb9EzObvdgglQozPyInFF5GsI4do3oaoKVjXXorf'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// axios.post('myNewCenter', {})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
