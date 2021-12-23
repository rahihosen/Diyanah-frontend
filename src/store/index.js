import { createApp } from "vue";
import { createStore } from "vuex";
import App from "../App.vue";
import { cart } from './cart';
import createPersistedState from "vuex-persistedstate";

const Store = createStore({
    plugins: [createPersistedState()],
    modules: {
        cart
    },
});

const app = createApp(App);
app.use(Store);

export default Store;