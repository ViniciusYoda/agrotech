import api from './api';


export async function LoginUsuario(email, senha) {
  try {
    console.log(email, senha)
    const response = await api.post('login', { email, senha });
    return response.data
  } catch (error) {
    throw error;
  }
}
