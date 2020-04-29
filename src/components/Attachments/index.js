import React, { Component } from 'react';

import { SafeAreaView, Text, StyleSheet, FlatList, View, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 5
  }
});

const DATA = [
  {
    id: '1',
    name: 'Autorização',
    extension: 'png'
  },
  {
    id: '2',
    name: 'Calendário Escolar',
    extension: 'pdf'
  },
  {
    id: '3',
    name: 'Carteirinha Estudantil',
    extension: 'png'
  },
  {
    id: '4',
    name: 'Boletim',
    extension: 'pdf'
  },
]

export default class Attachments extends Component {
  render() {

    function Item({ item }) {
      return (
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            flex: 1,
            borderRadius: 5,
            paddingVertical: 10,
            paddingHorizontal: 10,
            marginVertical: 5,
            backgroundColor: '#E3E6E3'
          }}
        >

          <Text>{item.name}</Text>
        </TouchableOpacity>
      );
    }

    return (
      <SafeAreaView style={styles.container}>
        <Text
            style={{
              padding: 10,
              fontSize: 16,
              fontWeight: '500'
            }}>
            Anexos
          </Text>
        <FlatList
          data={DATA}
          renderItem={({item}) => <Item item={item} />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}

