import React, { useState } from 'react';
import {
  TextInput,
  Image,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import axios from 'axios';
import {
  Container,
  TopContainer,
  Logo,
  Content,
  Title,
  SearchInput,
  SearchIconContainer,
  FooterContainer,
} from './styles';
import logo from '../../assets/logo.png';
import Footer from '../../components/Footer';
import { enviarPergunta, obterRespostaPorId } from '../../service/Chat';

 
export default function Buscar() {
  const [pergunta, setPergunta] = useState('');
  const [resposta, setResposta] = useState('');
  const [isLoading, setIsLoading] = useState(false);
 
  async function enviarPerguntaParaGPT() {
    if (!pergunta) {
      Alert.alert('Por favor, insira uma pergunta.');
      return;
    }

    try {
      setIsLoading(true);
      const resposta = await enviarPergunta(pergunta);
      setResposta(resposta);
    } catch (error) {
      console.error('Erro ao processar a pergunta:', error);
      Alert.alert('Erro ao processar a pergunta.');
    } finally {
      setIsLoading(false);
    }
  }
 
  return (
    <Container>
      <TopContainer>
        <Logo
          source={logo}
          style={{ width: 61, height: 61 }}
          resizeMode="contain"
        />
      </TopContainer>
      <Content>
        <Text>{resposta}</Text>
      </Content>
      <SearchInput>
        <TextInput
          placeholder="Realizar busca"
          value={pergunta}
          onChangeText={setPergunta}
        />
        <View style={{ marginLeft: 100 }}>
          <TouchableOpacity onPress={enviarPerguntaParaGPT}>
            <Image
              source={require('../../assets/enviar.png')}
              style={{ width: 21, height: 18 }}
            />
          </TouchableOpacity>
        </View>
      </SearchInput>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Container>
  );
}
