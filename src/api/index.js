import axios from 'axios'
axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL
axios.defaults.headers.$http
axios.defaults.headers.common['Access-Control-Allow-Origin'] = true
axios.defaults.headers.common['Accept'] = 'application/json'