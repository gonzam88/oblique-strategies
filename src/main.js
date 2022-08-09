import Vue from "vue";

import App from "./App.vue";
// eslint-disable-next-line

Vue.config.productionTip = true;
Vue.prototype.$baseUrl = process.env.VUE_APP_API_BASE;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;

document.documentElement.style.setProperty("--vh", `${vh}px`);

// We listen to the resize event
window.addEventListener("resize", () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});
