import React from 'react';
import Info from '../../components/Info';
import TopGreen from '../../components/TopGreen';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
` 

export default function Milho() {
  return (
    <Container>
      <TopGreen text="Milho" iconName="times" />
      <Info
        imageSource={require('../../assets/MilhoInfo.png')}
        name="Milho"
        pragas="lagarta-cartucho, cigarrinha-do-milho, pulgão-do-milho, percevejo-castanho e larva alfinete "
        description="O milho, cientificamente conhecido como
Zea mays, é uma planta cultivada por seus
grãos comestíveis e é uma das culturas
mais importantes do mundo. Originário das
Américas, o milho tem uma longa história
de cultivo por várias culturas indígenas.
Hoje em dia, é amplamente cultivado em
diferentes climas e regiões devido à sua
versatilidade e valor nutricional."
      />
    </Container>
  );
}
