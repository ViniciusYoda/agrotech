import React from 'react';
import Info from '../../components/Info';
import TopGreen from '../../components/TopGreen';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
` 

export default function Arroz() {
  return (
    <Container>
      <TopGreen text="Arroz" iconName="times" />
      <Info
        imageSource={require('../../assets/arroz.png')}
        name="Arroz"
        pragas="Percevejo do colmo (Tibraca limbativentris) "
        description="
        O arroz, cientificamente conhecido como Oryza sativa, é um grão amplamente consumido e é um dos pilares fundamentais da alimentação em todo o mundo. Originário da Ásia, o arroz tem uma história milenar como alimento básico em diversas culturas. Sua versatilidade culinária e valor nutricional o tornam um dos alimentos mais importantes e cultivados globalmente. Presente em variadas formas, como arroz branco, integral, basmati, jasmine, entre outras, é uma fonte significativa de carboidratos e nutrientes essenciais. Sua adaptabilidade a diferentes climas e solos contribui para sua extensa produção em várias regiões, sendo um elemento fundamental em uma grande diversidade de pratos e culinárias ao redor do globo."
      />
    </Container>
  );
}