import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import router from './router/index'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'
const myApp = createApp(App)

myApp.use(router)

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
})

myApp.mount('#app')
