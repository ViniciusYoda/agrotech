import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Footer from '../../components/Footer';
import {
  Container,
  TopContainer,
  Content,
  ProfileCircle,
  Profile,
  ProfileIcon,
  ProfileText,
  ProfileArrowIcon,
  TextContainer,
  TextItem,
  TextArrowIcon,
  Line,
  FooterContainer
} from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Conta() {
  const navigation = useNavigation();
  return (
    <Container>
      <TopContainer>
        <ProfileCircle>
          <ProfileIcon name="user" size={80} color="white" />
        </ProfileCircle>
        <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
        <Profile>
        <ProfileText>Visualizar perfil</ProfileText>
        <ProfileArrowIcon name="angle-right" size={24} color="white" />
      </Profile>
      </TouchableOpacity>
      </TopContainer>
      <Content>
        <TextContainer>
          <TextItem>Termos de uso</TextItem>
          <TextArrowIcon name="angle-right" size={20} color="black" />
          
        </TextContainer>
        <Line />
        <TextContainer>
          <TextItem>Política de privacidade</TextItem>
          <TextArrowIcon name="angle-right" size={20} color="black" />
        
        </TextContainer>
          <Line />
        <TextContainer>
          <TextItem>Sobre nós</TextItem>
          <TextArrowIcon name="angle-right" size={20} color="black" />
         
        </TextContainer>
      
      <FooterContainer>
        <Footer />
      </FooterContainer>
      </Content>
    </Container>
  );
}
