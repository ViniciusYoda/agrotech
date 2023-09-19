import api from './api';


export async function LoginUsuario(email, senha) {
  try {
    console.log("eai mundo")
    const response = await api.post('login', { email, senha });
    
    console.log("Ola mundo", response)
    return response.data
  } catch (error) {
    throw error;
  }
}
