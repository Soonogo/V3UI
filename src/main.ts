import { createApp } from 'vue'
import App from './App.vue'
import {createWebHashHistory,createRouter} from 'vue-router'
import Home from './views/home.vue'
import Docs from './views/docs.vue'
import '../index.scss'


const history = createWebHashHistory()
const router = createRouter({
    history:history,
    routes:[
        {path:'/',component:Home},
        {path:'/doc',component:Docs}
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
