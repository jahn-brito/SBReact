import React from 'react';
import { Container, Cover, Image, Title, Author, Text, Avatar, HeaderContainer } from './styles'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
Icon.loadFont();

export default function CardItem(props) {
  return (
    <Container onPress={props.toogle}>
      <Cover>
        <Image source={props.image} />
      </Cover>
      <HeaderContainer>
        <Avatar source={{ uri: props.avatar }} />
        <View>
          <Title>{props.title}</Title>
          <Author>{props.author}</Author>
        </View>
      </HeaderContainer>
      <Text numberOfLines={3}>{props.text}</Text>
    </Container>
  );
}

CardItem.defaultProps = {
  avatar: 'https://api.adorable.io/avatars/50/smart@adorable.io'
};
