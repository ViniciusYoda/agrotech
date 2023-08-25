import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { FooterContainer, IconContainer, IconText } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Footer() {
  const navigation = useNavigation();
  return (
    <FooterContainer>
      <TouchableOpacity onPress={() => navigation.navigate('Inicio')}>
        <IconContainer>
          <Image
            source={require('../../assets/flower.svg')} 
            style={{ width: 24, height: 24 }} 
          />
          <IconText>Início</IconText>
        </IconContainer>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Buscar')}>
        <IconContainer>
          <Image
            source={require('../../assets/search.svg')} 
            style={{ width: 24, height: 24 }} 
          />
          <IconText>Buscar</IconText>
        </IconContainer>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Conta')}>
        <IconContainer>
          <Image
            source={require('../../assets/perfil.svg')} 
            style={{ width: 24, height: 24 }} 
          />
          <IconText>Perfil</IconText>
        </IconContainer>
      </TouchableOpacity>
    </FooterContainer>
  );
}
