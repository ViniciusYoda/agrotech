import React from 'react';
import Info from '../../components/Info';
import TopGreen from '../../components/TopGreen';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
` 

export default function Soja() {
  return (
    <Container>
      <TopGreen text="Soja" iconName="times" />
      <Info
        imageSource={require('../../assets/SojaInfo.jfif')}
        name="Soja"
        praga="Lagarta elasmo"
        description="A soja, cientificamente conhecida como Glycine max, é uma das principais culturas agrícolas em todo o mundo. É cultivada principalmente devido ao seu alto teor de proteína e óleo. A soja é amplamente usada na alimentação humana e animal, além de ser uma matéria-prima importante para a produção de óleo de cozinha, biodiesel e diversos produtos industrializados."
      />
    </Container>
  );
}
