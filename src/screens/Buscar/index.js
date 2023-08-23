import React from 'react';
import { View, Image, TextInput, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Footer from '../../components/Footer';
import { Container, TopContainer, Logo, Content, Title, SearchInput, SearchIconContainer, FooterContainer } from './styles';

import logo from '../../assets/logo.png';

export default function Busca() {
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
          <Icon name="arrow-right" size={24} color="white" />
        </SearchIconContainer>
      </SearchInput>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Container>
  );
}
