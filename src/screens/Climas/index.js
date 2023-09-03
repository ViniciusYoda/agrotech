import Card from '../../components/Card/card';
import TopGreen from '../../components/TopGreen';
import { Container } from './styles';

export default function Climas() {


  return (
    <Container>
      <TopGreen text="Climas no Brasil" iconName="arrow-left" />
      <Card
        imageSource={require('../../assets/equatorial.png')}
        name="Clima Equatorial"
      />
      <Card
        imageSource={require('../../assets/tropical.png')}
        name="Clima Tropical"
      />
      <Card
        imageSource={require('../../assets/subtropical.png')}
        name="Clima Subtropical"
      />
      <Card
        imageSource={require('../../assets/semiarido.png')}
        name="Clima Semiárido"
      />
    </Container>
  );
}
