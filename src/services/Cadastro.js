import api from './api'

export async function CadastrarUsuario(nome, cpf, email, senha) {
  try {
    console.log(nome, cpf, email, senha)
    const response = await api.post('cadastrar', { nome, cpf, email, senha });

    console.log('res', response)
    return response.data;
  } catch (error) {
    console.log('err', error)
  }
}


