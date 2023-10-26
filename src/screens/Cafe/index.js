import React from 'react';
import Info from '../../components/Info';
import TopGreen from '../../components/TopGreen';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
` 

export default function Cafe() {
  return (
    <Container>
      <TopGreen text="Cafe" iconName="times" />
      <Info
        imageSource={require('../../assets/CafeInfo.jfif')}
        name="Milho"
        pragas="Broca-do-café "
        description="O café, cientificamente conhecido como Coffea, é uma das bebidas mais populares em todo o mundo. Originário da Etiópia, o café é amplamente cultivado em várias regiões do planeta devido à sua apreciação por seu sabor e efeitos estimulantes. Além de ser uma bebida, os grãos de café também são usados na produção de diversos produtos, incluindo óleo de café e até mesmo joias feitas a partir de grãos de café."
      />
    </Container>
  );
}
