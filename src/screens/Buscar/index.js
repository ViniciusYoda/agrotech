import React, { useState } from 'react';
import { TextInput, Image, TouchableOpacity, View } from 'react-native'; 
import Footer from '../../components/Footer';
import { Container, TopContainer, Logo, Content, Title, SearchInput, SearchIconContainer, FooterContainer } from './styles';
import logo from '../../assets/logo.png';
import { enviarPergunta, obterRespostaPorId } from '../../services/Chat'; 
import { useNavigation } from '@react-navigation/native'

export default function Buscar() { 
  const navigation = useNavigation()
  const [pergunta, setPergunta] = useState('');
  const [resposta, setResposta] = useState('');

  function navegar() {
    navigation.navigate('Resposta');
  }

  function navegarComAtraso(){
    setTimeout(()=>{
      navegar()
    }, 7000)
  }
 
  return (
    <Container>
      <TopContainer>
        <Logo source={logo} style={{ width: 61, height: 61 }} resizeMode="contain" />
      </TopContainer>
      <Content>
          <Title>No Agro+ você consegue realizar pesquisas em tempo real sobre o que quiser do mundo Agro!</Title>
        
      </Content>
      <SearchInput>
        <TextInput
          placeholder="Realizar busca"
          value={pergunta}
          onChangeText={setPergunta}
    
        />
        <View style={{marginLeft:100}}>
          <TouchableOpacity onPress={navegarComAtraso}>
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