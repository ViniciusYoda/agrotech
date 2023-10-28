import React from 'react';
import Info from '../../components/Info';
import TopGreen from '../../components/TopGreen';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
` 

export default function Beterraba() {
  return (
    <Container>
      <TopGreen text="Beterraba" iconName="times" />
      <Info
        imageSource={require('../../assets/beterraba.png')}
        name="Beterraba"
        pragas="lagarta-rosca, lagarta-elasmo, vaquinha, pulgão do colo. "
        description="A beterraba, cientificamente conhecida como Beta vulgaris, é uma raiz vegetal de tonalidade avermelhada, embora existam variedades de outras cores, como amarela e listrada. Originária das regiões costeiras da Europa, a beterraba tem uma longa história de uso tanto culinário quanto medicinal. Reconhecida por sua polpa de cor vibrante e doce sabor terroso, a beterraba é uma fonte rica de nutrientes, incluindo vitaminas, minerais e antioxidantes. Sua versatilidade na culinária a torna um ingrediente apreciado em saladas, sucos, pratos cozidos e até mesmo sobremesas. Além disso, suas folhas, comestíveis e repletas de nutrientes, são utilizadas em preparações culinárias e receitas saudáveis. Seu cultivo adaptável a diferentes condições climáticas e solos favorece sua produção em várias partes do mundo, contribuindo para sua presença constante na gastronomia global e como um elemento valioso para uma alimentação saudável."
      />
    </Container>
  );
}