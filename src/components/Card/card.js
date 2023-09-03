import React from 'react';
import { View, Text, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Certifique-se de ter importado o FontAwesome corretamente
import styled from 'styled-components/native';

const CardContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  margin: 10px;
  margin-top: 10px; 
  margin-bottom: 10px;
  background-color: #D3D3D3;
`;

const ImageAs = styled.Image`
  width: 79px;
  height: 72px;
  margin-right: 10px;
`;

const TextContainer = styled.View`
  flex: 1;
`;

const Name = styled.Text`
  font-weight: bold;
`;

const ScientificName = styled.Text`
  color: #888;
`;

const ArrowIcon = styled(FontAwesome)`
  margin-left: 10px;
`;

const Line = styled.View`
  height: 1px;
  width: 377px;
  background-color: grey;
`;

export default function Card({ imageSource, name, scientificName = '' }) {
  return (
    <>

      <CardContainer>
        <ImageAs source={imageSource} />
        <TextContainer>
          <Name>{name}</Name>
          {scientificName && <ScientificName>{scientificName}</ScientificName>}
        </TextContainer>
        <ArrowIcon name="angle-right" size={24} />
      </CardContainer>
      <Line />
    </>
  );
}
