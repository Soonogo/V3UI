

import {createWebHashHistory,createRouter} from 'vue-router'
import Home from './views/home.vue'
import Docs from './views/docs.vue'
import Switch from './components/Switch.vue'
import Button from './components/Button.vue'
import Dialog from './components/Dialog.vue'
import Tabs from './components/TabsView.vue'
import DocView from './components/DocView.vue'
import Intro from './views/intro.vue'
import getStarted from './views/getStarted.vue'

const history = createWebHashHistory()
export const router = createRouter({
    history:history,
    routes:[
        {path:'/',component:Home},
        {path:'/doc',component:Docs,
        children:[
            {path:'intro',component:Intro},
            {path:'get-started',component:getStarted},

            {path:'',component:DocView},
            {path:'switch',component:Switch},
            {path:'button',component:Button},
            {path:'dialog',component:Dialog},
            {path:'tabs',component:Tabs},

        ]
        }]
})