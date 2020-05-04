import React from 'react';
import { FlatList } from 'react-native';
import { ItemContainer, Avatar, ContentContainer, Title, Body } from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

const DATA = [
  {
    id: '1',
    title: 'Novo Comunicado',
    body: 'Ea ut aute cupidatat nostrud aute Lorem minim quis esse commodo. Pariatur ex qui mollit tempor dolor esse amet duis minim duis in aute est. Aute reprehenderit ipsum elit ea enim.',
    author: 'Jon',
    avatar: 'https://api.adorable.io/avatars/50/smart@adorable.io',
    date: 'png'
  },
  {
    id: '2',
    title: 'Novo Comunicado',
    body: 'Tem um novo comunicado que você precisa ver.',
    author: 'Jon',
    avatar: 'https://api.adorable.io/avatars/50/sm@adorable.io',
    date: 'png'
  },
  {
    id: '3',
    title: 'Novo Comunicado',
    body: 'Tem um novo comunicado que você precisa ver.',
    author: 'Jon',
    avatar: 'https://api.adorable.io/avatars/50/smartbaby@adorable.io',
    date: 'png'
  },
  {
    id: '4',
    title: 'Novo Comunicado',
    body: 'Tem um novo comunicado que você precisa ver.',
    author: 'Jon',
    avatar: 'https://api.adorable.io/avatars/50/smartcare@adorable.io',
    date: 'png'
  },
  {
    id: '5',
    title: 'Novo Comunicado',
    body: 'Tem um novo comunicado que você precisa ver.',
    author: 'Jon',
    avatar: 'https://api.adorable.io/avatars/50/five@adorable.io',
    date: 'png'
  },
  {
    id: '6',
    title: 'Novo Comunicado',
    body: 'Tem um novo comunicado que você precisa ver.',
    author: 'Jon',
    avatar: 'https://api.adorable.io/avatars/50/six@adorable.io',
    date: 'png'
  },
  {
    id: '7',
    title: 'Novo Comunicado',
    body: 'Tem um novo comunicado que você precisa ver.',
    author: 'Jon',
    avatar: 'https://api.adorable.io/avatars/50/seven@adorable.io',
    date: 'png'
  },
  {
    id: '8',
    title: 'Novo Comunicado',
    body: 'Tem um novo comunicado que você precisa ver.',
    author: 'Jon',
    avatar: 'https://api.adorable.io/avatars/50/eight@adorable.io',
    date: 'png'
  },
]

function Item({ item }) {
  return (
    <ItemContainer>
      <Avatar source={{ uri: item.avatar }} />
      <ContentContainer>
        <Title>{item.title}</Title>
        <Body numberOfLines={2}>{item.body}</Body>
      </ContentContainer>
    </ItemContainer>
  );
}

export default function Notifications() {
  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => <Item item={item} />}
      keyExtractor={item => item.id}
    />
  );
}
