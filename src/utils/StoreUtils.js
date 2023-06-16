import Vuex from 'vuex'

export const Store = new Vuex.Store({
    state: {
        Token: null,
        FormComponent: {},
        PageErrorComponent: {}
    },
    mutations: {
      setPropertiesRoute(state,payload){
        const key = payload.name;
        if (key in state) {
            state[key] = payload.props;
        }
      },
      setToken(state,token){
        state.Token = token;
      }
    }
  })