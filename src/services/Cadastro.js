import api from './api'
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function CadastrarUsuario(nome, cpf, email, senha) {
  try {
    const response = await api.post('cadastrar', { nome, cpf, email, senha });

    await AsyncStorage.setItem('nome', nome);
    await AsyncStorage.setItem('cpf', cpf);
    await AsyncStorage.setItem('email', email);

    console.log('res', response)
    return response.data;
  } catch (error) {
    console.log('err', error)
  }
}