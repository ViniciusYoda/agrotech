import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from './api'

export async function enviarPergunta(pergunta) {
  const authToken = await AsyncStorage.getItem('authToken');

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${authToken}`,
  };

  const requestBody = { quest: pergunta };

  const response = await api.post('ask', requestBody, { headers });

  return response.data;
}


export async function obterRespostaPorId(id) {
  try {
    const response = await api.get(`/responses/${id}`);
    console.log('Resposta do servidor:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter resposta por ID:', error);
    throw error;
  }
}
