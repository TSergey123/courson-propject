import {createApp} from 'vue'
// import store from '@/store'
import App from './App.vue'
import router from '@/router/router'
import 'material-design-icons-iconfont'


const app = createApp(App);

app
  // .use(store)
  .use(router)
  .mount('#app');