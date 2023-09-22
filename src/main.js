import { createApp } from 'vue'
import App from './App.vue'
// import './assets/global.css' //FIXME: debug時はこれよりbootstrapが優先されるが、buildするとこれが最優先になる。
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, far, fab)


createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
