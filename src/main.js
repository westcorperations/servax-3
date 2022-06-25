 import "bootstrap/dist/css/bootstrap.min.css";
  import "bootstrap";
 import 'aos/dist/aos.css';
 import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
createApp(App).use(router).mount('#app')
import 'bootstrap/dist/js/bootstrap.min.js';
AOS.init({
// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
offset: 120, // offset (in px) from the original trigger point
delay: 0, // values from 0 to 3000, with step 50ms
duration: 1000, // values from 0 to 3000, with step 50ms
easing: 'ease', // default easing for AOS animations
once: false, // whether animation should happen only once - while scrolling down
mirror: false, // whether elements should animate out while scrolling past them
// anchorPlacement: 'top-bottom',

});
