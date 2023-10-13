import React, { useState } from 'react';
import { TextInput, Image, TouchableOpacity, View, Text } from 'react-native';
import Footer from '../../components/Footer';
import { Container, TopContainer, Logo, Content, Title, SearchInput, SearchIconContainer, FooterContainer } from './styles';
import logo from '../../assets/logo.png';
import { enviarPergunta, obterRespostaPorId } from '../../services/Chat';
import { useNavigation } from '@react-navigation/native';

export default function Buscar() {
  const navigation = useNavigation();
  const [pergunta, setPergunta] = useState('');
  const [resposta, setResposta] = useState('');
  const [respostaId, setRespostaId] = useState(null);

  const enviarPerguntaHandler = async () => {
    try {
      const respostaDaAPI = await enviarPergunta(pergunta);
      setRespostaId(respostaDaAPI.id);
    } catch (error) {
      console.error('Erro ao enviar pergunta:', error);
    }
  };

  const obterRespostaHandler = async () => {
    if (respostaId) {
      try {
        const respostaDaAPI = await obterRespostaPorId(respostaId);
        setResposta(respostaDaAPI);
      } catch (error) {
        console.error('Erro ao obter resposta por ID:', error);
      }
    }
  };



  return (
    <Container>
      <TopContainer>
        <Logo source={logo} style={{ width: 61, height: 61 }} resizeMode="contain" />
      </TopContainer>
      <Content>
        <Title>No AgTech você consegue realizar pesquisas em tempo real sobre o que quiser do mundo AgTech</Title>
      </Content>
      <SearchInput>
        <TextInput
          placeholder="Realizar busca"
          value={pergunta}
          onChangeText={setPergunta}
        />
        <View style={{ marginLeft: 100 }}>
          <TouchableOpacity onPress={enviarPerguntaHandler}>
            <Image
              source={require('../../assets/enviar.png')}
              style={{ width: 21, height: 18 }}
            />
          </TouchableOpacity>
        </View>
      </SearchInput>
      <View>
        <TouchableOpacity onPress={obterRespostaHandler}>
          <Text>Obter Resposta</Text>
        </TouchableOpacity>
      </View>
      {resposta && <Text>Resposta: {resposta}</Text>}
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Container>
  );
}
