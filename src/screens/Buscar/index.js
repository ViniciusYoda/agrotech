import React, { useState } from 'react';
import {
  TextInput,
  Image,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
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
 
export default function Buscar() {
  const [pergunta, setPergunta] = useState('');
  const [resposta, setResposta] = useState('');
  const [isLoading, setIsLoading] = useState(false);
 
  async function enviarPerguntaParaGPT() {
    if (!pergunta) {
      Alert.alert('Por favor, insira uma pergunta.');
      return;
    }
 
    const response = await fetch(
      'http://192.168.15.87:3000/perguntas',
      {
        // Substitua pelo URL da sua API
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pergunta }),
      }
    );
 
    console.log(response);
 
    if (response.ok) {
      const data = await response.json();
      setResposta(data.resposta);
    } else {
      alert('Erro ao processar a pergunta.');
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
