import { createApp } from 'vue'
import App from '@/App.vue'
import Axios from 'axios'
const app = createApp(App)
app.config.globalProperties.$http = Axios
/** Base Path API Setting */
app.config.globalProperties.$http.defaults.baseURL = process.env.API_BASE_URL
/** Token Setting */
const token = localStorage.getItem('token')
if (token != '') {
    app.config.globalProperties.$http.defaults.headers.common['Access-Control-Allow-Origin'] = true
    app.config.globalProperties.$http.defaults.headers.common['X-SESSION-ID'] = token
    app.config.globalProperties.$http.defaults.headers.common['Accept'] = 'application/json'
} else {
    delete app.config.globalProperties.$http.defaults.headers.common['X-SESSION-ID']
}
