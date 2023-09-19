<<<<<<< Updated upstream
import React, { useState } from 'react';
=======
import React, { useState, useEffect } from 'react';
>>>>>>> Stashed changes
import { TextInput, Image, TouchableOpacity, Text } from 'react-native'; 
import Footer from '../../components/Footer';
import { Container, TopContainer, Logo, Content, Title, SearchInput, SearchIconContainer, FooterContainer } from './styles';
import logo from '../../assets/logo.png';
import { enviarPergunta, obterRespostaPorId } from '../../services/Chat'; 

<<<<<<< Updated upstream
export default function Resposta() {
  const [pergunta, setPergunta] = useState('');
  const [resposta, setResposta] = useState('');

=======
export default function Resposta() { 
  const [pergunta, setPergunta] = useState('');
  const [resposta, setResposta] = useState('');
  const [textoAnimado, setTextoAnimado] = useState('');
  const textoCompleto = `O cultivo de milho envolve várias etapas, desde o preparo do solo até a colheita. Aqui está um guia básico sobre como plantar milho: Escolha do Local: Escolha um local com bastante luz solar e boa drenagem. O milho adora luz solar direta e solos bem drenados para um crescimento saudável. Preparo do Solo: Prepare o solo através de aragem ou escavação para soltar a terra. Remova pedras, ervas daninhas e detritos. Se possível, adicione matéria orgânica, como composto, para melhorar a estrutura do solo e fornecer nutrientes. Plantio: O milho pode ser plantado por sementes direto no solo ou através de mudas. Se você optar por semear diretamente, faça fileiras espaçadas apropriadas para a variedade de milho que você está cultivando. As sementes devem ser plantadas a uma profundidade de cerca de 2 a 5 centímetros, dependendo do tamanho da semente.`;

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
>>>>>>> Stashed changes

  return (
    <Container>
      <TopContainer>
        <Logo source={logo} style={{ width: 61, height: 61 }} resizeMode="contain" />
      </TopContainer>
      <Content>
<<<<<<< Updated upstream
        <Title>O cultivo de milho envolve várias etapas, desde o preparo do solo até a colheita. Aqui está um guia básico sobre como plantar milho:
Escolha do Local: Escolha um local com bastante luz solar e boa drenagem. O milho adora luz solar direta e solos bem drenados para um crescimento saudável.
Preparo do Solo: Prepare o solo através de aragem ou escavação para soltar a terra. Remova pedras, ervas daninhas e detritos. Se possível, adicione matéria orgânica, como composto, para melhorar a estrutura do solo e fornecer nutrientes.
Plantio: O milho pode ser plantado por sementes direto no solo ou através de mudas. Se você optar por semear diretamente, faça fileiras espaçadas apropriadas para a variedade de milho que você está cultivando. As sementes devem ser plantadas a uma profundidade de cerca de 2 a 5 centímetros, dependendo do tamanho da semente.</Title>
=======
         <Title>{textoAnimado}</Title>
>>>>>>> Stashed changes
      </Content>
      <SearchInput>
        <TextInput
          placeholder="Realizar busca"
          value={pergunta}
          onChangeText={setPergunta}
        />
        <TouchableOpacity onPress={() => handleEnviarPergunta()}>
          <Image
            source={require('../../assets/enviar.png')} 
            style={{ width: 21, height: 18 }} 
          />
        </TouchableOpacity>
      </SearchInput>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Container>
  );
}
