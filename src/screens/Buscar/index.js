import React from 'react';
import { TextInput, Image  } from 'react-native';
import Footer from '../../components/Footer';
import { Container, TopContainer, Logo, Content, Title, SearchInput, SearchIconContainer, FooterContainer } from './styles';

import logo from '../../assets/logo.png';

export default function Buscar() {
  return (
    <Container>
      <TopContainer>
        <Logo source={logo} style={{ width: 61, height: 61 }} resizeMode="contain" />
      </TopContainer>
      <Content>
        <Title>No Agro+ você consegue realizar pesquisas em tempo real sobre o que quiser do mundo Agro!</Title>
      </Content>
      <SearchInput>
        <TextInput placeholder="Realizar busca" />
        <SearchIconContainer>
          <Image
            source={require('../../assets/enviar.png')} 
            style={{ width: 10, height: 10 }} 
          />
        </SearchIconContainer>
      </SearchInput>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Container>
  );
}
