import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {
  BiGithub,
  BiLinkedin,
  HiSolidMail,
  IoClose,
  PxScript,
  FaGamepad,
  BiGit,
  GiCardboardBoxClosed,
  BiTools,
  FaLaptopCode
} from 'oh-vue-icons/icons'

import App from './App.vue'
import router from './router'

addIcons(
  BiGithub,
  BiLinkedin,
  HiSolidMail,
  IoClose,
  PxScript,
  FaGamepad,
  BiGit,
  GiCardboardBoxClosed,
  BiTools,
  FaLaptopCode
)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('v-icon', OhVueIcon)
app.mount('#app')
