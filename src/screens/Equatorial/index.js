import React from 'react';
import Info from '../../components/Info';
import TopGreen from '../../components/TopGreen';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #D3D3D3
` 

export default function Milho() {
  return (
    <Container>
      <TopGreen text="Clima Equatorial" iconName="times" />
      <Info
        imageSource={require('../../assets/ClimaEquatorial.png')}
        name="Clima Equatorial"
        description="O clima equatorial, caracterizado por
temperaturas elevadas e chuvas abundantes
ao longo do ano, oferece condições
favoráveis para o cultivo de uma ampla 
variedade de plantas.."
      />
    </Container>
  );
}
