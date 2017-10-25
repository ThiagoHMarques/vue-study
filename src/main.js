import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resourcegit'

Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})
