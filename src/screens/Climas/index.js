import Card from '../../components/Card/card';
import TopGreen from '../../components/TopGreen';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #D3D3D3;
`;

export default function Climas() {
  return (
    <Container>
      <TopGreen text="Climas no Brasil" iconName="arrow-left" />
      <Card
        imageSource={require('../../assets/equatorial.png')}
        name="Clima Equatorial"
        rota="Equatorial"
      />
      <Card
        imageSource={require('../../assets/tropical.png')}
        name="Clima Tropical"
        rota="Tropical"
      />
      <Card
        imageSource={require('../../assets/subtropical.png')}
        name="Clima Subtropical"
        rota="Subtropical"
      />
      <Card
        imageSource={require('../../assets/semiarido.png')}
        name="Clima Semiárido"
        rota="Semiarido"
      />
    </Container>
  );
}
