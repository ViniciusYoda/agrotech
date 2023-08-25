import api from './api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function LoginUsuario(email, senha) {
  try {
    const response = await api.post('login', { email, senha });
    const token = response.data.token;
    await AsyncStorage.setItem('authToken', token);
    return token;
  } catch (error) {
    throw error; 
  }
}
