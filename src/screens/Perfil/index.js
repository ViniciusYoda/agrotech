import React from 'react';
import { View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Button from '../../components/Button';
import {
  Container,
  ProfileSection,
  ProfileText,
  ProfileValue,
  Line,
  ButtonContainer,
} from './styles';
import TopGreen from '../../components/TopGreen'
import { useNavigation } from '@react-navigation/native';

export default function Perfil() {
  const navigation = useNavigation()
  return (
    <Container>
      <TopGreen text="Visualizar Perfil" />
      <ProfileSection>
        <ProfileText>Nome</ProfileText>
        <ProfileValue>Igor Camargo</ProfileValue>
        <Line />
        <ProfileText>E-mail</ProfileText>
        <ProfileValue>igor123@gmail.com</ProfileValue>
        <Line />
        <ProfileText>CPF</ProfileText>
        <ProfileValue>XXX.XXX.XXX-XX</ProfileValue>
      </ProfileSection>
      <ButtonContainer>
        <Button title="SAIR" onPress={() => navigation.navigate('Servicos')}/>
      </ButtonContainer>
    </Container>
  );
}
