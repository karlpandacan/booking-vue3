import users from '@/api/users'
const state = () => ({
    username: "",
    fullname: "",
    token: ""
})

const getters = {
    fullname: (state) => state.fullname,
}

const actions = {
    login({ commit }, credentials) {
        return new Promise((resolve, reject) => {
            try {
                let response = users.login(credentials)
                console.log(response);
                commit('authSucess', {
                    fullname: response.response.fullname,
                    username: response.response.username,
                    token: response.response.token,
                })
                resolve(response)
            } catch (exception) {
                reject(exception)
            }
        });
    },
    logout({ commit }) {
        return new Promise((resolve) => {
            users.logout()
            commit('authRemove')
            resolve()
        });
    }
}

const mutations = {
    authSucess(state, { user }) {
        state.token = user.token
        state.username = user.username
        state.fullname = user.fullname
    },
    authRemove(state) {
        state.token = ""
        state.username = ""
        state.fullname = ""
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
