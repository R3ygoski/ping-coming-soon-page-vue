import { createApp } from 'vue'
import './globals.scss'
import App from './App.vue'

import { OhVueIcon, addIcons } from "oh-vue-icons"
import { FaFacebookF, FaTwitter, FaInstagram } from "oh-vue-icons/icons"

addIcons(FaFacebookF, FaTwitter, FaInstagram)
const app = createApp(App)
app.component("v-icon", OhVueIcon)

app.mount('#app')
