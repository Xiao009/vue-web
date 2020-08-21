import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './element'
import './axios'
import store from './vuex'
import 'bootstrap'
import  jQuery from 'jquery'
import 'popper.js'
import './assets/app.scss' //主页面格式
import VideoPlayer from 'vue-video-player'

Vue.use(VideoPlayer);


window.$ = window.jQuery= jQuery;
Vue.config.productionTip = false
Vue.prototype.$store = store

//gloabl announcement of vue component 
Vue.component('Header', require('./components/Header.vue').default);



new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
