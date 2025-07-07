import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {
  BiGithub,
  CoLinkedinIn,
  HiSolidMail,
  IoClose,
  PxScript,
  FaGamepad,
  BiGit,
  GiCardboardBoxClosed,
  BiTools,
  FaLaptopCode,
  FaPaintBrush,
  BiYoutube,
  CoDiscord
} from 'oh-vue-icons/icons'

import App from './App.vue'
import router from './router'

addIcons(
  BiGithub,
  CoLinkedinIn,
  HiSolidMail,
  IoClose,
  PxScript,
  FaGamepad,
  BiGit,
  GiCardboardBoxClosed,
  BiTools,
  FaLaptopCode,
  FaPaintBrush,
  BiYoutube,
  CoDiscord
)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('v-icon', OhVueIcon)
app.mount('#app')
