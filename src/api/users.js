import axios from 'axios'
axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL
axios.defaults.headers.$http
axios.defaults.headers.common['Access-Control-Allow-Origin'] = true
axios.defaults.headers.common['Accept'] = 'application/json'
export default {
    async login(credentials) {
        return new Promise((resolve, reject) => {
            axios.post("/login", credentials)
                .then(response => {
                    resolve(response);
                }).catch(error => {
                    reject(error)
                });
        })
    },
    async logout() {
        return new Promise((resolve) => {
            let response = axios.post("/login");
            resolve(response)
        })
    }
}
