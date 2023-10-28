import Card from '../../components/Card/card';
import TopGreen from '../../components/TopGreen';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
 
  const Container = styled.View`
  flex: 1;
  background-color: #D3D3D3;
`;
 
export default function Plantas() {
 
    const navigation = useNavigation();
 
 
  return (
    <Container>
      <TopGreen text="Plantas" iconName="arrow-left" />
   
      <Card
        imageSource={require('../../assets/milho.png')}
        name="Milho"
        scientificName="Zea mays"
        rota='Milho'
      />
      <Card
        imageSource={require('../../assets/cafe.png')}
        name="Café"
        scientificName="Coffea"
        rota='Cafe'
      />
      <Card
        imageSource={require('../../assets/canadeacucar.png')}
        name="Cana de Açucar"
        scientificName="Saccharum officinarum"
        rota='CanaDeAcucar'
      />
      <Card
        imageSource={require('../../assets/arroz.png')}
        name="Arroz"
        scientificName="Oryza sativa"
        rota='Arroz'
      />
      <Card
        imageSource={require('../../assets/beterraba.png')}
        name="Beterraba"
        scientificName="Beta"
        rota='Beterraba'
      />


    </Container>
  );
}