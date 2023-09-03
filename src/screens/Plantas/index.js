import Card from '../../components/Card/card';
import TopGreen from '../../components/TopGreen';
import styled from 'styled-components/native';

export default function Plantas() {
  const Container = styled.View`
  flex: 1;
  background-color: #D3D3D3;
`;

  return (
    <Container>
      <TopGreen text="Climas no Brasil" iconName="arrow-left" />
      <Card
        imageSource={require('../../assets/milho.png')}
        name="Milho"
        scientificName="Zea mays"
      />
      <Card
        imageSource={require('../../assets/soja.png')}
        name="Soja"
        scientificName="Glycine max"
      />
      <Card
        imageSource={require('../../assets/cafe.png')}
        name="Café"
        scientificName="Coffea"
      />
      <Card
        imageSource={require('../../assets/canadeacucar.png')}
        name="Cana de Açucar"
        scientificName="Saccharum officinarum"
      />
      <Card
        imageSource={require('../../assets/mandioca.png')}
        name="Mandioca"
        scientificName="Manihot esculenta"
      />
    </Container>
  );
}
