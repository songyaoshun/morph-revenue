import { createApp } from 'vue'
import App from "./App.vue" 
import "vue-data-ui/style.css" // 包括CSS

// 您可以全局声明 Vue Data UI 组件
import { VueUiRadar } from "vue-data-ui"

const app = createApp(App)

app.component("VueUiRadar", VueUiRadar)
app.mount('#app')
