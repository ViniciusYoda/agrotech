import React from 'react';
import Info from '../../components/Info';
import TopGreen from '../../components/TopGreen';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
` 

export default function CanaDeAcucar() {
  return (
    <Container>
      <TopGreen text="Cana de Açucar" iconName="times" />
      <Info
        imageSource={require('../../assets/CanaDeAcucarInfo.png')}
        name="Cana de Açucar"
        pragas="Broca dos rizomas "
        description="A cana-de-açúcar, cientificamente conhecida como Saccharum officinarum, é uma planta amplamente cultivada para a produção de açúcar e outros produtos. Originária do Sudeste Asiático, a cana-de-açúcar é uma das culturas mais antigas do mundo e desempenhou um papel significativo na história da agricultura. Além da produção de açúcar, a cana-de-açúcar é usada na fabricação de etanol e outros produtos derivados."
      />
    </Container>
  );
}
