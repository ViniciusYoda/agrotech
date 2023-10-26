import Card from '../../components/Card/card';
import TopGreen from '../../components/TopGreen';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Container = styled.View`
  flex: 1;
  background-color: #D3D3D3;
`;

export default function Solos() {

  return (
    <Container>
      <TopGreen text="Solos no Brasil" iconName="arrow-left" />

      <Card
        imageSource={require('../../assets/arenoso.jfif')}
        name="Arenoso"
        rota="Arenoso"
      />

      <Card
        imageSource={require('../../assets/argiloso.jfif')}
        name="Argiloso"
        rota="Argiloso"
      />
      <Card
        imageSource={require('../../assets/humoso.jfif')}
        name="Humoso"
        rota="Humoso"
      />
    </Container>
  );
}
