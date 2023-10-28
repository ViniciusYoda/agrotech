import React from 'react';
import Info from '../../components/Info';
import TopGreen from '../../components/TopGreen';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #D3D3D3;
`;

export default function SoloHumoso() {
  return (
    <Container>
      <TopGreen text="Solo Humoso" iconName="times" />
      <Info
        imageSource={require('../../assets/SoloHumoso.png')}
        name="Solo Humoso"
        description="O solo humoso é caracterizado por alto teor de matéria orgânica,
o que resulta em boa fertilidade e retenção de água. Esse tipo de solo é
adequado para uma ampla variedade de culturas devido à sua qualidade."
      />
    </Container>
  );
}
