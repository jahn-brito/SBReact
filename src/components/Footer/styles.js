import { Dimensions } from 'react-native';
import styled from 'styled-components/native';


export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  height: 70px;
  box-shadow: 10px 5px 5px #000;
  background-color: #FFF;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  width: ${Dimensions.get('window').width/5+'px'}
`;

export const Label = styled.Text`
  margin-top: 5px;
`;
