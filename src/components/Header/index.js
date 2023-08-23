import React from 'react';
import { StatusBar } from 'react-native';
import { Container, Title } from './styles';

export default function Header({ title }) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
}
