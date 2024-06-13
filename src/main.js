import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'; // Import your router configuration

const app = createApp(App);
app.use(router); // Use the Vue Router instance

app.mount('#app');
