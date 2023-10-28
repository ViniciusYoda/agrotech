import React from 'react';
import Info from '../../components/Info';
import TopGreen from '../../components/TopGreen';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #D3D3D3;
`;

export default function ClimaSemiArido() {
  return (
    <Container>
      <TopGreen text="Clima Semiárido" iconName="times" />
      <Info
        imageSource={require('../../assets/ClimaSemiarido.png')}
        name="Clima Semiárido"
        description="O clima semiárido é caracterizado por chuvas escassas
e temperaturas elevadas. Esse ambiente climático apresenta desafios
para a agricultura, mas é adequado para culturas resistentes à seca."
      />
    </Container>
  );
}
