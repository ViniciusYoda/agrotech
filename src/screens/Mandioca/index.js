import React from 'react';
import Info from '../../components/Info';
import TopGreen from '../../components/TopGreen';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
`;

export default function Mandioca() {
  return (
    <Container>
      <TopGreen text="Mandioca" iconName="times" />
      <Info
        imageSource={require('../../assets/MandiocaInfo.jfif')}
        name="Mandioca"
        praga="Mandarová"
        description="A mandioca, cientificamente conhecida como Manihot esculenta, é uma planta cultivada por suas raízes ricas em amido. Originária da América do Sul, a mandioca é uma das culturas mais importantes e amplamente cultivadas em muitas regiões tropicais do mundo. Suas raízes podem ser cozidas, assadas, fritas ou transformadas em farinha, tornando-a uma fonte essencial de alimento e matéria-prima para diversos produtos."
      />
    </Container>
  );
}
