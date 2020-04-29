import React, { Component } from 'react';

import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

// import { Container } from './styles';

const DATA = [
  {
    id: '1',
    title: 'Novo Comunicado',
    body: 'Ea ut aute cupidatat nostrud aute Lorem minim quis esse commodo. Pariatur ex qui mollit tempor dolor esse amet duis minim duis in aute est. Aute reprehenderit ipsum elit ea enim.',
    author: 'Jon',
    avatar: 'https://cdn.clipart.email/a5e3051c9fb286fe2e04f831b4f4eccf_avatar-icon-transparent-png-clipart-free-download-ywd_512-512.png',
    date: 'png'
  },
  {
    id: '2',
    title: 'Novo Comunicado',
    body: 'Tem um novo comunicado que você precisa ver.',
    author: 'Jon',
    avatar: 'https://cdn.clipart.email/a5e3051c9fb286fe2e04f831b4f4eccf_avatar-icon-transparent-png-clipart-free-download-ywd_512-512.png',
    date: 'png'
  },
  {
    id: '3',
    title: 'Novo Comunicado',
    body: 'Tem um novo comunicado que você precisa ver.',
    author: 'Jon',
    avatar: 'https://cdn.clipart.email/a5e3051c9fb286fe2e04f831b4f4eccf_avatar-icon-transparent-png-clipart-free-download-ywd_512-512.png',
    date: 'png'
  },
  {
    id: '4',
    title: 'Novo Comunicado',
    body: 'Tem um novo comunicado que você precisa ver.',
    author: 'Jon',
    avatar: 'https://cdn.clipart.email/a5e3051c9fb286fe2e04f831b4f4eccf_avatar-icon-transparent-png-clipart-free-download-ywd_512-512.png',
    date: 'png'
  },
  {
    id: '5',
    title: 'Novo Comunicado',
    body: 'Ea ut aute cupidatat nostrud aute Lorem minim quis esse commodo. Pariatur ex qui mollit tempor dolor esse amet duis minim duis in aute est. Aute reprehenderit ipsum elit ea enim.',
    author: 'Jon',
    avatar: 'https://cdn.clipart.email/a5e3051c9fb286fe2e04f831b4f4eccf_avatar-icon-transparent-png-clipart-free-download-ywd_512-512.png',
    date: 'png'
  },
  {
    id: '6',
    title: 'Novo Comunicado',
    body: 'Tem um novo comunicado que você precisa ver.',
    author: 'Jon',
    avatar: 'https://cdn.clipart.email/a5e3051c9fb286fe2e04f831b4f4eccf_avatar-icon-transparent-png-clipart-free-download-ywd_512-512.png',
    date: 'png'
  },
  {
    id: '7',
    title: 'Novo Comunicado',
    body: 'Tem um novo comunicado que você precisa ver.',
    author: 'Jon',
    avatar: 'https://cdn.clipart.email/a5e3051c9fb286fe2e04f831b4f4eccf_avatar-icon-transparent-png-clipart-free-download-ywd_512-512.png',
    date: 'png'
  },
  {
    id: '8',
    title: 'Novo Comunicado',
    body: 'Tem um novo comunicado que você precisa ver.',
    author: 'Jon',
    avatar: 'https://cdn.clipart.email/a5e3051c9fb286fe2e04f831b4f4eccf_avatar-icon-transparent-png-clipart-free-download-ywd_512-512.png',
    date: 'png'
  },
  {
    id: '9',
    title: 'Novo Comunicado',
    body: 'Ea ut aute cupidatat nostrud aute Lorem minim quis esse commodo. Pariatur ex qui mollit tempor dolor esse amet duis minim duis in aute est. Aute reprehenderit ipsum elit ea enim.',
    author: 'Jon',
    avatar: 'https://cdn.clipart.email/a5e3051c9fb286fe2e04f831b4f4eccf_avatar-icon-transparent-png-clipart-free-download-ywd_512-512.png',
    date: 'png'
  },
  {
    id: '10',
    title: 'Novo Comunicado',
    body: 'Tem um novo comunicado que você precisa ver.',
    author: 'Jon',
    avatar: 'https://cdn.clipart.email/a5e3051c9fb286fe2e04f831b4f4eccf_avatar-icon-transparent-png-clipart-free-download-ywd_512-512.png',
    date: 'png'
  },
  {
    id: '11',
    title: 'Novo Comunicado',
    body: 'Tem um novo comunicado que você precisa ver.',
    author: 'Jon',
    avatar: 'https://cdn.clipart.email/a5e3051c9fb286fe2e04f831b4f4eccf_avatar-icon-transparent-png-clipart-free-download-ywd_512-512.png',
    date: 'png'
  },
  {
    id: '12',
    title: 'Novo Comunicado',
    body: 'Tem um novo comunicado que você precisa ver.',
    author: 'Jon',
    avatar: 'https://cdn.clipart.email/a5e3051c9fb286fe2e04f831b4f4eccf_avatar-icon-transparent-png-clipart-free-download-ywd_512-512.png',
    date: 'png'
  },
  {
    id: '13',
    title: 'Novo Comunicado',
    body: 'Ea ut aute cupidatat nostrud aute Lorem minim quis esse commodo. Pariatur ex qui mollit tempor dolor esse amet duis minim duis in aute est. Aute reprehenderit ipsum elit ea enim.',
    author: 'Jon',
    avatar: 'https://cdn.clipart.email/a5e3051c9fb286fe2e04f831b4f4eccf_avatar-icon-transparent-png-clipart-free-download-ywd_512-512.png',
    date: 'png'
  },
  {
    id: '14',
    title: 'Novo Comunicado',
    body: 'Tem um novo comunicado que você precisa ver.',
    author: 'Jon',
    avatar: 'https://cdn.clipart.email/a5e3051c9fb286fe2e04f831b4f4eccf_avatar-icon-transparent-png-clipart-free-download-ywd_512-512.png',
    date: 'png'
  },
  {
    id: '15',
    title: 'Novo Comunicado',
    body: 'Tem um novo comunicado que você precisa ver.',
    author: 'Jon',
    avatar: 'https://cdn.clipart.email/a5e3051c9fb286fe2e04f831b4f4eccf_avatar-icon-transparent-png-clipart-free-download-ywd_512-512.png',
    date: 'png'
  },
  {
    id: '16',
    title: 'Novo Comunicado',
    body: 'Tem um novo comunicado que você precisa ver.',
    author: 'Jon',
    avatar: 'https://cdn.clipart.email/a5e3051c9fb286fe2e04f831b4f4eccf_avatar-icon-transparent-png-clipart-free-download-ywd_512-512.png',
    date: 'png'
  },
]

export default class Notifications extends Component {
  render() {

    function Item({ item }) {
      return (
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            borderColor: '#3F51B5',
            borderBottomWidth: 1,
            borderRadius: 5,
            paddingVertical: 20,
            paddingHorizontal: 10,
            marginVertical: 5,
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              // alignItems: "center",
              paddingHorizontal: 5
            }}
          >
            <Image source={{uri: item.avatar}} style={{width: 50, height: 50}} />
            <View style={{marginLeft: 10}}>
              <Text style={{fontSize: 16}}>{item.title} - 1 dia atrás</Text>
              <Text numberOfLines={3} style={{width: 330, textAlign: "justify"}}>{item.body}</Text>
              <Text style={{}}>De: {item.author}</Text>
            </View>
          </View>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Notificações</Text>
          <TouchableOpacity activeOpacity={0.5} onPress={this.props.toogle}>
            <Icon name='angle-down' size={25} style={styles.headerIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.bodyContainer}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={item => item.id}
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: '#164280',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  headerText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600'
  },
  headerIcon: { opacity: 0.9, color: '#FFF' },
  bodyContainer:{}
});
