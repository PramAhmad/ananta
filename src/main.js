import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { addIcons } from 'ionicons';
import { heart,camera ,stop,play,arrowUpCircleOutline,arrowUpCircle,mic} from 'ionicons/icons';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';
import './index.css'
/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

/* Theme variables */
import './theme/variables.css';

import './registerServiceWorker'
// Above the createApp() line


addIcons({
  heart: heart,
  camera:camera,
  stop:stop,
  play:play,
  ups:arrowUpCircleOutline,
  up:arrowUpCircle,
  mic:mic,
  
});
const app = createApp(App)
  .use(IonicVue)
  .use(router);
defineCustomElements(window);
router.isReady().then(() => {
  app.mount('#app');
});