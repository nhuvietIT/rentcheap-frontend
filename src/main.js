import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store.js";
import vuetify from "./plugins/vuetify";
import dotenv from "dotenv";
import VueTour from "vue-tour";

dotenv.config();
Vue.config.productionTip = false;

require("vue-tour/dist/vue-tour.css");
Vue.use(VueTour);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
