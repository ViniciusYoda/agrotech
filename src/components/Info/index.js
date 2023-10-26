import React from 'react';
import styled from 'styled-components/native';

const InfoContainer = styled.View`
  padding: 16px;
  margin: 16px;
  flex: 1;
`;

const InfoImage = styled.Image`
  width: 280px;
  height: 189px; 
  margin-bottom: 16px; 
`;

const CommonName = styled.Text`
  font-size: 13px;
  color: gray;
  margin-bottom: 8px;
`;

const Name = styled.Text`
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 8px;
`;

const DescriptionName = styled.Text`
  font-size: 16px;
  color: gray;
  margin-bottom: 8px;
`;

const Description = styled.Text`
  color: #282828;
`;

const Line = styled.View`
  width: 100%;
  height: 1px;
  background-color: #ccc;
  margin-top: 8px;
  margin-bottom: 8px;
`;

const Pragas = styled.View`
  font-Size: 12px;
`

export default function Info({ imageSource, name, praga, description }) {
  return (
    <InfoContainer>
      <InfoImage source={imageSource} />

        <CommonName>Nome comum</CommonName>
        <Name>{name}</Name>
        <Line />
        <Pragas>{praga}</Pragas>
        <DescriptionName>Descrição</DescriptionName>
        <Description>{description}</Description>
    </InfoContainer>
  );
}
