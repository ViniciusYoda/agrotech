
import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';

export const TopSquare = styled.View`
  width: 360px;
  height: 72px;
  background-color: #65A30D;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
`;

export const CloseIcon = styled(FontAwesome)`
  color: white;
  font-size: 24px;
`;

export const Title = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
  margin-left: auto; 
  margin-right: auto; 
`;
