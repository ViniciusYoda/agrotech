import api from './api'

export async function LoginUsuario(email, senha) {
  try {
    console.log(email, senha)
    const response = await api.post('login', { email, senha });

    console.log('res', response)
    return response.data;
  } catch (error) {
    console.log('err', error)
  }
}


