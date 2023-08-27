import React, { useState } from 'react';
import { TextInput, Image, TouchableOpacity } from 'react-native'; 
import Footer from '../../components/Footer';
import { Container, TopContainer, Logo, Content, Title, SearchInput, SearchIconContainer, FooterContainer } from './styles';
import logo from '../../assets/logo.png';
import { enviarPergunta, obterRespostaPorId } from '../../services/Chat'; 

export default function Buscar() {
  const [pergunta, setPergunta] = useState('');
  const [resposta, setResposta] = useState('');

  const handleEnviarPergunta = async () => {
    try {
      const respostaDoServidor = await enviarPergunta(pergunta);
      setResposta(respostaDoServidor);
      setPergunta(''); 
    } catch (error) {
      console.log('Erro ao enviar pergunta:', error);
    }
  };

  const handleObterRespostaPorId = async (id) => {
    try {
      const respostaPorId = await obterRespostaPorId(id);
      setResposta(respostaPorId);
    } catch (error) {
      console.log('Erro ao obter resposta por ID:', error);
    }
  };

  return (
    <Container>
      <TopContainer>
        <Logo source={logo} style={{ width: 61, height: 61 }} resizeMode="contain" />
      </TopContainer>
      <Content>
        {resposta === '' ? (
          <Title>No Agro+ você consegue realizar pesquisas em tempo real sobre o que quiser do mundo Agro!</Title>
        ) : null}
      </Content>
      <SearchInput>
        <TextInput
          placeholder="Realizar busca"
          value={pergunta}
          onChangeText={setPergunta}
        />
        <TouchableOpacity onPress={() => handleEnviarPergunta()}>
          <Image
            source={require('../../assets/enviar.png')} 
            style={{ width: 21, height: 18 }} 
          />
        </TouchableOpacity>
      </SearchInput>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Container>
  );
}
