import styled from 'styled-components/native';
import { PixelRatio } from 'react-native'

export const Container = styled.View`
  flex: 1;
  background-color: #FFF;
  min-height: 400px;
  align-items: center;
`;

export const AvatarContainer = styled.View`
  border-radius: 75px;
  width: 150px;
  height: 150px;
  border-color: #9B9B9B;
  border-width: ${1/PixelRatio.get()};
  justify-content: center;
  align-items: center;
`;
