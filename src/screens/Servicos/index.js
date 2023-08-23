import React from 'react';
import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, TopContainer, HelloText, WelcomeText, SearchInput, IconContainer, IconText, IconRow } from './styles';
import Footer from '../../components/Footer';

import logo from '../../assets/logo.png'

export default function Servicos() {
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
          <Icon name="pagelines" size={48} color="white" />
          <IconText>Planta</IconText>
        </IconContainer>
        <IconContainer>
          <Icon name="cloud" size={48} color="white" />
          <IconText>Clima</IconText>
        </IconContainer>
        <IconContainer>
          <Icon name="globe" size={48} color="white" />
          <IconText>Solo</IconText>
        </IconContainer>
      </IconRow>
      <Footer />
    </Container>
  );
}
