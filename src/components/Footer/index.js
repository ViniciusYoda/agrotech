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
            source={require('../../assets/flower.png')} 
            style={{ width: 34, height: 36 }} 
          />
          <IconText>Início</IconText>
        </IconContainer>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Buscar')}>
        <IconContainer>
          <Image
            source={require('../../assets/search.png')} 
            style={{ width: 34, height: 34 }} 
          />
          <IconText>Buscar</IconText>
        </IconContainer>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Conta')}>
        <IconContainer>
          <Image
            source={require('../../assets/perfil.png')} 
            style={{ width: 34, height: 34 }} 
          />
          <IconText>Perfil</IconText>
        </IconContainer>
      </TouchableOpacity>
    </FooterContainer>
  );
}
