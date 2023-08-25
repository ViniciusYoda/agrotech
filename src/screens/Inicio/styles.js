import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #D3D3D3;
`;

export const TopContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 20px;
`;

export const HelloText = styled.Text`
  font-weight: bold;
  font-size: 18px;
`;

export const WelcomeText = styled.Text`
  color: gray;
`;

export const SearchInput = styled.View`
  flex-direction: row;
  align-items: center;
  border: 1px solid gray;
  border-radius: 50px;
  padding: 8px;
  margin: 0 20px;
`;

export const IconRow = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex: 1;
  margin-top: 20px;
`;

export const IconContainer = styled.View`
  background-color: #65A30D;
  height: 93px;
  width: 93px;
  border-radius: 10px;
  padding: 10px;
  align-items: center;
`;

export const IconText = styled.Text`
  color: white;
  font-size: 14px;
  margin-top: 4px;
`;
