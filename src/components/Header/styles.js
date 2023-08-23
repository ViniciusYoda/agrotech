import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #65A30D;
  padding-top: ${StatusBar.currentHeight}px;
  margin-top: 20px;
  padding: 28px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
`;

export const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  flex: 1;
`;
