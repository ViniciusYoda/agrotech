import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to left, #FFFFFF, #A9A9A9);  
  padding: 20px;
`;

export const LogoContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

export const Logo = styled.Image`
  width: 188px;
  height: 188px;
`;

export const InputContainer = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

export const CreateAccountText = styled.Text`
  align-self: flex-start;
  margin-top: -25px;
  margin-right: 166px;
  font-size: 14px;
  color: black;
`;
