import React from 'react';
import Info from '../../components/Info';
import TopGreen from '../../components/TopGreen';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #D3D3D3;
`;

export default function ClimaSubtropical() {
  return (
    <Container>
      <TopGreen text="Clima Subtropical" iconName="times" />
      <Info
        imageSource={require('../../assets/ClimaSubtropical.jfif')}
        name="Clima Subtropical"
        description="O clima subtropical é caracterizado por estações bem
definidas, com invernos frios e verões quentes. Esse tipo de clima
favorece o cultivo de uma variedade de culturas, incluindo
grãos, frutas e vegetais adaptados a condições temperadas."
      />
    </Container>
  );
}
