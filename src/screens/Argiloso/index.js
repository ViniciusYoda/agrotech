import React from 'react';
import Info from '../../components/Info';
import TopGreen from '../../components/TopGreen';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #D3D3D3;
`;

export default function SoloArgiloso() {
  return (
    <Container>
      <TopGreen text="Solo Argiloso" iconName="times" />
      <Info
        imageSource={require('../../assets/SoloArgiloso.jfif')}
        name="Solo Argiloso"
        description="O solo argiloso é caracterizado por partículas finas e alta
retenção de água e nutrientes. Esse tipo de solo é adequado para
culturas que se beneficiam da retenção de umidade e nutrientes."
      />
    </Container>
  );
}
