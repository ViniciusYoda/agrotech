import AsyncStorage from '@react-native-async-storage/async-storage';
import api from './api'

export const setAuthToken = async () => {
  try {
    const token = await AsyncStorage.getItem('authToken'); 
    if (token) {
      chatService.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete chatService.defaults.headers.common['Authorization'];
    }
  } catch (error) {
    throw error;
  }
};

export const enviarPergunta = async (pergunta) => {
  try {
    await setAuthToken(); 

    const requestData = {
      quest: pergunta,
    };

    const response = await chatService.post('/ask', requestData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

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
