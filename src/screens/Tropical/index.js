import React from 'react';
import Info from '../../components/Info';
import TopGreen from '../../components/TopGreen';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #D3D3D3;
`;

export default function ClimaTropical() {
  return (
    <Container>
      <TopGreen text="Clima Tropical" iconName="times" />
      <Info
        imageSource={require('../../assets/ClimaTropical.png')}
        name="Clima Tropical"
        description="O clima tropical, conhecido por suas altas temperaturas
e estações distintas de chuva e seca, é adequado para uma
variedade de cultivos tropicais, incluindo frutas, legumes e grãos."
      />
    </Container>
  );
}
