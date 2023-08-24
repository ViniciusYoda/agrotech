import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: #65A30D;
`;

export const TopContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 267px;
  background: #65A30D;
  padding-top: 20px;
`;

export const Content = styled.View`
  background-color: #D3D3D3;
  flex: 1;
`;

export const ProfileCircle = styled.View`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

export const ProfileIcon = styled(FontAwesome)`
  color: white;
`;

export const Profile = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const ProfileText = styled.Text`
  color: white;
  font-weight: bold;
  margin-top: 10px;
  margin-right: 20px; 
  text-align: center;
`;

export const ProfileArrowIcon = styled(FontAwesome)`
  color: white;
`;

export const TextContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const TextItem = styled.Text`
  color: black;
  font-size: 18px;
  font-weight: bold;
`;

export const TextArrowIcon = styled(FontAwesome)`
  color: black;

`;

export const Line = styled.View`
  width: 100%;
  height: 1px;
  background-color: black;
  margin-top: 10px;
`;

export const FooterContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
`;
