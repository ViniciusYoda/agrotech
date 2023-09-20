import React, { useState, useEffect } from 'react';
import { TextInput, Image, TouchableOpacity, Text, View } from 'react-native'; 
import Footer from '../../components/Footer';
import { Container, TopContainer, Logo, Content, Title, SearchInput, SearchIconContainer, FooterContainer } from './styles';
import logo from '../../assets/logo.png';
import { enviarPergunta, obterRespostaPorId } from '../../services/Chat'; 


export default function Resposta() { 
  const [pergunta, setPergunta] = useState('');
  const [resposta, setResposta] = useState('');
  const [textoAnimado, setTextoAnimado] = useState('');
  const textoCompleto = `Para evitar a infestação da Lagarta-do-cartucho (Spodoptera frugiperda) e proteger plantações de milho, há várias estratégias e práticas de manejo:
  Monitoramento constante: Inspeção regular das plantações para detectar sinais de infestação, como folhas danificadas e fezes de lagartas.
  Plantio de variedades resistentes: Escolher variedades de milho que sejam menos suscetíveis à lagarta-do-cartucho pode ajudar a reduzir os danos.
  Rotação de culturas: Evitar o plantio consecutivo de milho no mesmo local, pois isso pode reduzir a densidade de lagartas.`;

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < textoCompleto.length) {
        setTextoAnimado(textoCompleto.slice(0, index + 1));
        index++;
      } else {
        clearInterval(intervalId); // Pare a animação quando o texto estiver completo
      }
    }, 50); // Intervalo de 50 milissegundos para adicionar o próximo caractere

    return () => {
      clearInterval(intervalId); // Limpar o intervalo ao desmontar o componente
    };
  }, []);

  return (
    <Container>
      <TopContainer>
        <Logo source={logo} style={{ width: 61, height: 61 }} resizeMode="contain" />
      </TopContainer>
      <Content>
         <Title>{textoAnimado}</Title>
      </Content>
      <SearchInput>
        <TextInput
          placeholder="Realizar busca"
          value={pergunta}
          onChangeText={setPergunta}
        />
        <View style={{marginLeft:100}}>
          <TouchableOpacity onPress={() => handleEnviarPergunta()}>
            <Image
              source={require('../../assets/enviar.png')} 
              style={{ width: 21, height: 18 }} 
            />
          </TouchableOpacity>
        </View>
      </SearchInput>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Container>
  );
}