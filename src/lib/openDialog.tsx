import { createApp,h } from 'vue';
import Dialog from "./dialog1.vue";
const openDialog = (options)=>{
    const {title,content,ok ,cancel} = options;
    const div = document.createElement('div');
    document.body.appendChild(div);
    const close = ()=>{
        app.unmount()
        div.remove()
    }
   const app =  createApp({
        render(){
            return h(Dialog,{
                visiable:true,
                "onUpdate:visiable":(e)=>{
                    if(e===false){
                        close()
                    }
                },ok,cancel
            },{title,content}
            )   
        }
    })
    app.mount(div);
}

export  {openDialog};