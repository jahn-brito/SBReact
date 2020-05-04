import styled from 'styled-components/native'

export const ItemContainer = styled.View`
flex: 1;
flex-direction: row;
border-color: #b3b3b3;
border-bottom-width: 1px;
padding: 10px 10px;
align-items: center;
justify-content: space-between
`;

export const Avatar = styled.Image`
width: 50px;
height: 50px;
border-radius: 50px;
`;

export const ContentContainer = styled.View`
margin-left: 10px;
flex-shrink: 1
`;

export const Title = styled.Text`
font-size: 16px;
margin-bottom: 5px;
`;

export const Body = styled.Text`
text-align: justify
`;
