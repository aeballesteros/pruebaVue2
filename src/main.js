import { createApp } from 'vue'
import { Store } from './utils/StoreUtils'
import Router from './Router'
import App from './App.vue'
// import Axios from 'axios'
// import { ObtenerToken } from './utils/TokenUtils'

const app = createApp(App)
app.use(Router)
app.use(Store)

// // Se agrega un interceptor para las respuestas HTTP
// Axios.interceptors.response.use(async (response) => {
//         const token = response.headers.authorization;
  
//         if (token) {
//         // Guarda el token en el estado de Vuex
//         Store.commit('setToken', token);
//         }
    
//         return response;
//     }, 
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// // Se agrega un interceptor para las request HTTP
// Axios.interceptors.request.use(async (config) => {
//     const token = await ObtenerToken();

//     // Se agrega token a header 
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
    
//     return config;
//     }, 
//     (error) => {
//         return Promise.reject(error);
//     }
// );

app.mount('#app')