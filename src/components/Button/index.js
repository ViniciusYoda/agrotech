import React from 'react';
import { ButtonContainer, ButtonText } from './styles';

export default function Button({ title, onPress }) {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
}
