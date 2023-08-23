import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Footer from '../../components/Footer';
import {
  Container,
  TopContainer,
  Content,
  ProfileCircle,
  ProfileIcon,
  ProfileText,
  ProfileArrowIcon,
  TextContainer,
  TextItem,
  TextArrowIcon,
  Line,
  FooterContainer
} from './styles';

export default function Conta() {
  return (
    <Container>
      <TopContainer>
        <ProfileCircle>
          <ProfileIcon name="user" size={80} color="white" />
        </ProfileCircle>
        <ProfileText>Visualizar perfil <ProfileArrowIcon name="angle-right" size={24} color="white" /></ProfileText>
  
      </TopContainer>
      <Content>
        <TextContainer>
          <TextItem>Termo de uso</TextItem>
          <TextArrowIcon name="angle-right" size={20} color="black" />
          <Line />
        </TextContainer>
        <TextContainer>
          <TextItem>Política de privacidade</TextItem>
          <TextArrowIcon name="angle-right" size={20} color="black" />
          <Line />
        </TextContainer>
        <TextContainer>
          <TextItem>Sobre nós</TextItem>
          <TextArrowIcon name="angle-right" size={20} color="black" />
          <Line />
        </TextContainer>
      
      <FooterContainer>
        <Footer />
      </FooterContainer>
      </Content>
    </Container>
  );
}
