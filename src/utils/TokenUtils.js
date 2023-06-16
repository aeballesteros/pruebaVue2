import { Store } from './StoreUtils'

export async function ObtenerToken() {
    
    // Se recupera token si existe del header que envio el backend en el inicio de sesion
    let token = Store.state.Token
    
    // Si no existe token en los headers se busca en el la url
    if(token){
      return token;
    }
    else{
      const urlParams = new URLSearchParams(window.location.search);
      token = urlParams.get('token');
    }

    // Si no existe token en la url se busca en el sesion storage
    if(token){
      return token;
    }
    else{
      if(typeof sessionStorage !== 'undefined'){
        const sessionToken = sessionStorage.getItem('token');
        if (sessionToken) {
          return sessionToken;
        }
      }
    }
    
    // Token no encontrado
    return null;
  }