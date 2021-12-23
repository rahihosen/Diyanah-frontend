import { createApp } from 'vue';
import App from './App.vue';
import Router from './router/index';
import axios from 'axios';
import env from './config/env.js';
import './assets/css/style.css';
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/bootstrap/js/bootstrap.bundle.js';
import 'viewerjs/dist/viewer.css';
import VueViewer from 'v-viewer';
import Store from './store/index.js';


// baseURL(server) for axios 
axios.defaults.baseURL = env.BASE_API_URL;
axios.defaults.baseURLPublic = env.BASE_URL_PUBLIC;

window.axios = axios;
window.Store = Store;


// createApp(App).mount('#app')
const app = createApp(App);
app.use(Router);
app.use(VueViewer);
app.use(Store);
app.mount("#app");