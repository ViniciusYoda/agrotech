import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: #D3D3D3;
`;

export const ProfileSection = styled.View`
  padding: 20px;
`;

export const ProfileText = styled.Text`
  font-size: 16px;
  font-weight: 10px;
  margin-top: 20px;
`;

export const ProfileValue = styled.Text`
  font-size: 16px;
  margin-top: 5px;
  font-weight: bold;
`;

export const Line = styled.View`
  width: 100%;
  height: 1px;
  background-color: black;
  margin-vertical: 20px;
`;

export const ButtonContainer = styled.View`
  align-items: center;
  margin-top: 20px;
`;
