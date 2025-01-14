import {createApp} from 'vue'
import ViewUIPlus from 'view-ui-plus'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.less'
import 'view-ui-plus/dist/styles/viewuiplus.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './mock'

const app = createApp(App)

app.use(store)
    .use(router)
    .use(ElementPlus)
    .use(ViewUIPlus)
    .mount('#app')
