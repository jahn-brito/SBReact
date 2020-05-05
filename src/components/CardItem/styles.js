import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  width: 94%;
  margin: 3%;
  border-radius: 14px;
  background-color: #FFF;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
`;

export const Cover = styled.View`
  height: 180px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

export const Image = styled.Image`
  width: 100%;
  height: 180px;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 18px;
  margin-left: 20px;
  margin-top: 5px;
  font-weight: 500;
  color: #000;
  width: 300px;
`;

export const Author = styled.Text`
  font-size: 16px;
  margin-left: 20px;
  line-height: 24px;
  color: #3c4560;
`;

export const Text = styled.Text`
  font-size: 17px;
  margin-left: 20px;
  margin-right: 10px;
  margin-bottom: 20px;
  line-height: 24px;
  color: #3c4560;
`;

export const Avatar = styled.Image`
width: 50px;
height: 50px;
border-radius: 50px;
`;
