import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, LogoContainer, Logo, InputContainer, CreateAccountText } from './styles';
import logo from '../../assets/logo.png';
import { LoginUsuario } from '../../services/Login';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function handleLogin() {
    try {
      console.log('Console');
      const token = await LoginUsuario(email, senha);
      console.log('Token de acesso:', token);
      await AsyncStorage.setItem('authToken', token);
      navigation.navigate('Inicio');
    } catch (error) {
      console.error('Erro ao logar usuário:', error);
    }
  }

  function handleCreateAccount() {
    navigation.navigate('Cadastrar');
  }

  return (
    <Container>
      <LogoContainer>
        <Logo source={logo} />
      </LogoContainer>
      <InputContainer>
        <Input placeholder="Email" value={email} onChangeText={setEmail} />
        <Input
          placeholder="Senha"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />
      </InputContainer>
      <TouchableOpacity onPress={handleCreateAccount}>
        <CreateAccountText>Já possui conta? Criar conta</CreateAccountText>
      </TouchableOpacity>
      <Button title="LOGIN" onPress={handleLogin} />
    </Container>
  );
}
