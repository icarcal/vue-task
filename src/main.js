import Vue from 'vue'
import App from './App.vue'

const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
