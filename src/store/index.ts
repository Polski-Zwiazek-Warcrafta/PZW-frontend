import { createStore } from 'vuex';

interface AuthState {
  token: string | null;
  isAdmin: boolean;
}

export default createStore({
  state: {
    token: null,
    isAdmin: false,
  } as AuthState,

  getters: {
    isAuthenticated: (state) => !!state.token,
    isAdmin: (state) => state.isAdmin,
    getToken: (state) => state.token,
  },

  mutations: {
    SET_USER(state, payload: { token: string; isAdmin: boolean }) {
      state.token = payload.token;
      state.isAdmin = payload.isAdmin;
    },
    CLEAR_USER(state) {
      state.token = null;
      state.isAdmin = false;
    },
  },

  actions: {
    saveUser(
      { commit },
      { token, isAdmin }: { token: string; isAdmin: boolean }
    ) {
      commit('SET_USER', { token, isAdmin });
    },
    logoutUser({ commit }) {
      commit('CLEAR_USER');
      localStorage.removeItem('user');
      sessionStorage.removeItem('user');
    },
  },
});
