import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// @ts-ignore
import CLCL from './packages/index.js'
createApp(App)
  .use(ElementPlus)
  .use(store)
  .use(router)
  .use(CLCL)
  .mount("#app");
