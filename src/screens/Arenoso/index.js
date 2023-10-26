import React from 'react';
import Info from '../../components/Info';
import TopGreen from '../../components/TopGreen';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #D3D3D3;
`;

export default function SoloArenoso() {
  return (
    <Container>
      <TopGreen text="Solo Arenoso" iconName="times" />
      <Info
        imageSource={require('../../assets/SoloArenoso.jfif')}
        name="Solo Arenoso"
        description="O solo arenoso é caracterizado por partículas grandes e
espaçadas, o que resulta em boa drenagem, mas baixa capacidade de
retenção de água e nutrientes. Este tipo de solo pode ser adequado
para culturas que preferem drenagem rápida."
      />
    </Container>
  );
}
