import React, { useState } from 'react';
import { TextInput, Image, TouchableOpacity, View } from 'react-native'; 
import Footer from '../../components/Footer';
import { Container, TopContainer, Logo, Content, Title, SearchInput, SearchIconContainer, FooterContainer } from './styles';
import logo from '../../assets/logo.png';
import { enviarPergunta, obterRespostaPorId } from '../../services/Chat'; 
<<<<<<< Updated upstream
import { useNavigation } from '@react-navigation/native';

export default function Buscar() {
  const navigation=useNavigation()
  const [pergunta, setPergunta] = useState('');
  const [resposta, setResposta] = useState('');

=======
import { useNavigation } from '@react-navigation/native'

export default function Buscar() { 
  const navigation = useNavigation()
  const [pergunta, setPergunta] = useState('');
  const [resposta, setResposta] = useState('');

  function navegar() {
    navigation.navigate('Resposta');
  }

  function navegarComAtraso() {
    setTimeout(() => {
      navegar();
    }, 10000); // 10000 milissegundos = 10 segundos
  }
>>>>>>> Stashed changes

  return (
    <Container>
      <TopContainer>
        <Logo source={logo} style={{ width: 61, height: 61 }} resizeMode="contain" />
      </TopContainer>
      <Content>
<<<<<<< Updated upstream
       
          <Title>No Agro+ você consegue realizar pesquisas em tempo real sobre o que quiser do mundo Agro!</Title>
=======
          <Title>No Agro+ você consegue realizar pesquisas em tempo real sobre o que quiser do mundo Agro!</Title>
        
>>>>>>> Stashed changes
      </Content>
      <SearchInput>
        <TextInput
          placeholder="Realizar busca"
          value={pergunta}
          onChangeText={setPergunta}
    
        />
<<<<<<< Updated upstream
        <TouchableOpacity onPress={navigation.navigate("Resposta")}>
          <Image
            source={require('../../assets/enviar.png')} 
            style={{ width: 21, height: 18 }} 
          />
        </TouchableOpacity>
=======
        <View style={{ marginLeft: 60 }}> {/* Adicione esta View com margem */}
          <TouchableOpacity onPress={navegarComAtraso}>
            <Image
              source={require('../../assets/enviar.png')} 
              style={{ width: 21, height: 18 }} 
            />
          </TouchableOpacity>
        </View>
>>>>>>> Stashed changes
      </SearchInput>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Container>
  );
}
