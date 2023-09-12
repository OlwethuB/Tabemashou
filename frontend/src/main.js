import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import 'animate.css';
import lottie from 'lottie-web';
import axios from 'axios'
import { defineElement } from 'lord-icon-element';
import Swal from 'sweetalert2/src/sweetalert2.js'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* add some free styles */
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faUserSecret)

/* add each imported icon to the library */
library.add(faTwitter, faUserSecret)

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);


createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

