import './assets/main.css'
import vuetify from './plugins/vuetify'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18n from './plugins/i18n'
import App from './App.vue'
import router from './router'

const app = createApp(App)

i18n(app)

const link = document.createElement('link');
link.href = "https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap";
link.rel = 'stylesheet';
document.head.appendChild(link);

app.use(vuetify);
app.use(createPinia())
app.use(router)

app.mount('#app')
