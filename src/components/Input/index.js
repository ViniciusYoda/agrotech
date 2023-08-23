import React from 'react';
import { View, TextInput } from 'react-native';
import { Container, InputContainer, InputField } from './styles';

export default function Input({ placeholder, secureTextEntry, onChangeText }) {
  return (
    <Container>
      <InputContainer>
        <InputField
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
        />
      </InputContainer>
    </Container>
  );
}
