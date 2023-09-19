import { useState } from 'react';
import styled from 'styled-components/native';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Center, Subtitle, InputSpacing } from './styles';
import { CadastrarUsuario } from '../../services/Cadastro';
import { useNavigation } from '@react-navigation/native';

export default function Cadastrar() {

  const navigation = useNavigation(); 
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function handleCadastro() {
    try {
      const response = await CadastrarUsuario(nome, cpf, email, senha);
      console.log('Usuário cadastrado:', response);
      navigation.navigate('Inicio');
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);

    }
  }

  console.log(cpf)

  return (
    <Container>
      <Header title="CADASTRAR" />
      <Center>
        <Subtitle>Informe seus dados para complementar o cadastro.</Subtitle>
        <Input
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
        />
        <InputSpacing />
        <Input
          placeholder="CPF"
          value={cpf}
          onChangeText={setCpf}
        />
        <InputSpacing />
        <Input
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <InputSpacing />
        <Input
          placeholder="Senha"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />
      </Center>
      <Button title="ENVIAR" onPress={handleCadastro} />
    </Container>
  );
}
