import React from 'react';
import { Container, Button, Label } from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

export default function Footer() {
  return (
    <Container>
      <Button>
        <Icon name="home" size={22} />
        <Label>Inicio</Label>
      </Button>
      <Button>
        <Icon name="comment-o" size={22} />
        <Label>Chat</Label>
      </Button>
      <Button>
        <Icon name="calendar" size={22} />
        <Label>Calendário</Label>
      </Button>
      <Button>
        <Icon name="star-o" size={22} />
        <Label>Favoritos</Label>
      </Button>
      <Button>
        <Icon name="plus" size={22} />
        <Label>Adicionar</Label>
      </Button>
    </Container>
  );
}
