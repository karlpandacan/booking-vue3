import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import Cookies from 'js-cookie';

import users from './modules/users'

export default createStore({
  modules: {
    users
  },
  plugins: [createPersistedState({
    storage: {
      getItem: key => Cookies.get(key),
      setItem: (key, value) => Cookies.set(key, value, { expires: 3, secure: true }),
      removeItem: key => Cookies.remove(key)
    }
  })],
})
