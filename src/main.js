import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Default from './Layout/Wrapper/MasterClient.vue'
import Auth from './Layout/wrapper/MasterAuth.vue'
const app = createApp(App)

app.use(router)
app.component("default-layout", Default);
app.component("auth-layout", Auth);


app.mount("#app")