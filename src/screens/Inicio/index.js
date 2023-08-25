import React from 'react';
import { View, Image, TextInput, Imagem } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, TopContainer, HelloText, WelcomeText, SearchInput, IconContainer, IconText, IconRow } from './styles';
import Footer from '../../components/Footer';

import logo from '../../assets/logo.png'

export default function Inicio() {
  return (
    <Container>
      <TopContainer>
        <Image source={logo} style={{ width: 48, height: 48 }} />
        <View>
          <HelloText>Olá!</HelloText>
          <WelcomeText>Bem vindo ao Agro+</WelcomeText>
        </View>
      </TopContainer>
      <SearchInput>
        <Icon name="search" size={24} color="gray" />
        <TextInput placeholder="Pesquisa no início" />
      </SearchInput>
      <IconRow>
        <IconContainer>
        <Image
          source={require('../../assets/Planta.svg')} 
          style={{ width: 48, height: 48 }} 
        />
          <IconText>Plantas</IconText>
        </IconContainer>
        <IconContainer>
        <Image
          source={require('../../assets/Clima.svg')} 
          style={{ width: 48, height: 48 }} 
        />
          <IconText>Clima</IconText>
        </IconContainer>
        <IconContainer>
        <Image
          source={require('../../assets/Solo.svg')} 
          style={{ width: 48, height: 48 }} 
        />
          <IconText>Solo</IconText>
        </IconContainer>
      </IconRow>
      <Footer />
    </Container>
  );
}
