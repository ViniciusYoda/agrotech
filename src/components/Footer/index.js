import React from 'react';
import { AntDesign, FontAwesome, Feather } from '@expo/vector-icons';
import { FooterContainer, IconContainer, IconText } from './styles';

export default function Footer() {
  return (
    <FooterContainer>
      <IconContainer>
        <AntDesign name="flower1" size={24} color="white" />
        <IconText>Inicio</IconText>
      </IconContainer>
      <IconContainer>
        <Feather name="search" size={24} color="white" />
        <IconText>Busca</IconText>
      </IconContainer>
      <IconContainer>
        <FontAwesome name="user" size={24} color="white" />
        <IconText>Perfil</IconText>
      </IconContainer>
    </FooterContainer>
  );
}
