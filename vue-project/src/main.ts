import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBagShopping, faUser, faEnvelope, faPhone, faMapLocationDot, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faSquareFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

import './assets/main.css'

library.add(faBagShopping, faUser, faSquareFacebook, faInstagram, faTwitter,  faEnvelope, faPhone, faMapLocationDot, faPaperPlane)

const app = createApp(App)

app.use(router)

app.mount('#app')
