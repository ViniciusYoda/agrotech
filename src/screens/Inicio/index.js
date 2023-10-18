import React from 'react';
import { View, Image, TextInput, Imagem, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, TopContainer, HelloText, WelcomeText, SearchInput, Input, IconContainer, IconText, IconRow } from './styles';
import Footer from '../../components/Footer';
import { useNavigation } from '@react-navigation/native';
import AgriculturalNews from '../../components/AgriculturalNews';

import logo from '../../assets/logo.png'

export default function Inicio() {
  const navigation = useNavigation();
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
        <Input placeholder="Pesquisa no início" />
      </SearchInput>
      <IconRow>
        <IconContainer>
        <TouchableOpacity onPress={() => navigation.navigate('Plantas')}>
        <Image
          source={require('../../assets/planta.png')} 
          style={{ width: 49, height: 48 }} 
        />
        </TouchableOpacity>
          <IconText>Plantas</IconText>
        </IconContainer>
        <IconContainer>
        <TouchableOpacity onPress={() => navigation.navigate('Climas')}>
        <Image
          source={require('../../assets/clima.png')} 
          style={{ width: 48, height: 48 }} 
        />
        </TouchableOpacity>
          <IconText>Clima</IconText>
        </IconContainer>
        <IconContainer>
        <TouchableOpacity onPress={() => navigation.navigate('Solos')}>
        <Image
          source={require('../../assets/solo.png')} 
          style={{ width: 48, height: 48 }} 
        />
        </TouchableOpacity>
          <IconText>Solo</IconText>
        </IconContainer>
      </IconRow>
      <AgriculturalNews />
      <Footer />
    </Container>
  );
}
