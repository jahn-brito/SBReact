import React from 'react';
import {Container, Cover, Image, Title, Author, Text} from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'
Icon.loadFont();

export default function CardItem(props) {
  return (
    <Container onPress={props.toogle}>
      <Cover>
        <Image source={props.image} />
      </Cover>
      <Title>{props.title}</Title>
      <Author>{props.author}</Author>
      <Text>{props.text}</Text>
    </Container>
  );
}
