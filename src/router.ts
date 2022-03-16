

import {createWebHashHistory,createRouter} from 'vue-router'
import Home from './views/home.vue'
import Docs from './views/docs.vue'
import Switch from './components/switch.vue'
import Button from './components/button.vue'
import Dialog from './components/dialog.vue'
import Tabs from './components/tabs.vue'
import DocView from './components/docView.vue'

const history = createWebHashHistory()
export const router = createRouter({
    history:history,
    routes:[
        {path:'/',component:Home},
        {path:'/doc',component:Docs,
        children:[
            {path:'',component:DocView},
            {path:'switch',component:Switch},
            {path:'button',component:Button},
            {path:'dialog',component:Dialog},
            {path:'tabs',component:Tabs},

        ]
        }]
})