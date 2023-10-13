import api from './api';

export const enviarPergunta = async (pergunta) => {
  try {
    const requestData = {
      quest: pergunta,
    };

    const response = await api.post('/ask', requestData);
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
