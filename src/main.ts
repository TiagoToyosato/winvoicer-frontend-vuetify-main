import { createApp } from "vue";
// import "./style.css"
import "./main.scss";
import App from "./App.vue";
import router from "./router"

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
// import * as components from "vuetify/components"
// import * as directives from "vuetify/directives"

// Pinia
import { createPinia } from "pinia"

const vuetify = createVuetify({
  // components,
  // directives,
});

createApp(App).use(router).use(vuetify).use(createPinia()).mount("#app");

