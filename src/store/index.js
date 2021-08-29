import { reactive } from "vue";

const state = reactive({
    username: "",
    token: "",
})

const methods = {
    login() {

    },
}

const getters = {
    username() {
        return state.username;
    }
}

export default {
    state,
    methods,
    getters
}
