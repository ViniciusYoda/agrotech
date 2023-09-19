import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #D3D3D3;
  justify-content: space-between;
`;

export const TopContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: #1A2D05;
`;

export const SearchInput = styled.View`
  border-color: black;
  border-width: 1px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 20px;
  border-radius: 50px;
  padding: 10px;
`;

export const SearchIconContainer = styled.View`
  background-color: #65A30D;
  padding: 10px;
  border-radius: 50px;
  margin-left: 10px;
`;

export const FooterContainer = styled.View`
  justify-content: flex-end;
`;

export const Logo = styled.Image`
  width: 61px;
  height: 61px;
`;

export const Footer = styled.View`
  background-color: #202020;
`;
