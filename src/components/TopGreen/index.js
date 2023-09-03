import React from 'react';
import { TopSquare, Icon, Title } from './styles';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TopGreen({ text, iconName = 'times-circle' }) {
  const navigation = useNavigation();
  return (
    <TopSquare>
      <TouchableOpacity onPress={() => navigation.navigate('Servicos')}>
        <Icon name={iconName} size={24} />
      </TouchableOpacity>
      <Title>{text}</Title>
    </TopSquare>
  );
}
