import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import {
  Container,
  ProfileSection,
  ProfileText,
  ProfileValue,
  Line,
  ButtonContainer,
} from './styles';
import TopGreen from '../../components/TopGreen';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importe AsyncStorage

export default function Perfil() {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');

  // Função para buscar os dados no AsyncStorage
  const buscarDadosDoUsuario = async () => {
    try {
      const nomeSalvo = await AsyncStorage.getItem('nome');
      const cpfSalvo = await AsyncStorage.getItem('cpf');
      const emailSalvo = await AsyncStorage.getItem('email');

      if (nomeSalvo) {
        setNome(nomeSalvo);
      }

      if (cpfSalvo) {
        setCpf(cpfSalvo);
      }

      if (emailSalvo) {
        setEmail(emailSalvo);
      }
    } catch (error) {
      console.log('Erro ao buscar dados do AsyncStorage', error);
    }
  };

  useEffect(() => {
    buscarDadosDoUsuario();
  }, []);

  return (
    <Container>
      <TopGreen text="Visualizar Perfil" />
      <ProfileSection>
        <ProfileText>Nome</ProfileText>
        <ProfileValue>{nome}</ProfileValue>
        <Line />
        <ProfileText>E-mail</ProfileText>
        <ProfileValue>{email}</ProfileValue>
        <Line />
        <ProfileText>CPF</ProfileText>
        <ProfileValue>{cpf}</ProfileValue>
      </ProfileSection>
      <ButtonContainer>
        <Button title="SAIR" onPress={() => navigation.navigate('Servicos')} />
      </ButtonContainer>
    </Container>
  );
}
