import { Dimensions } from 'react-native'
import RNModal from 'react-native-modal';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: ${props => props.height+'px'};
  padding: 0px 10px;
  width: 100%;
`;

export const Modal = styled(RNModal)`
  background-color: transparent;
  margin: 0px;
  border-radius: 10px;
`;

export const Title = styled.Text`
  color: #FFF;
  font-size: 16px;
  font-weight: 500
`;

export const ImageHeader = styled.Image`
  height: 250px;
  width: ${Dimensions.get('window').width+'px'};
  align-self: stretch;
`;
