import React, { Component } from 'react';

import { SafeAreaView, Text, StyleSheet, FlatList, View, TouchableOpacity, ActionSheetIOS } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
Icon.loadFont();

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

    const onPress = () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ["Cancelar", "Download", "Reportar"],
        destructiveButtonIndex: 2,
        cancelButtonIndex: 0,
        tintColor: '#3F51B5'
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          // cancel action
        } else {
          console.log('')
        }
      }
    );

    function Item({ item }) {
      return (
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            borderColor: '#3F51B5',
            borderBottomWidth: 1,
            borderRadius: 5,
            paddingVertical: 10,
            paddingHorizontal: 10,
            marginVertical: 5,
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: "center",
              paddingHorizontal: 5
            }}
          >
            {item.extension == 'pdf' ?
              <Icon name='file-pdf-o' size={20} color='#3F51B5' />
              : <Icon name='file-image-o' size={20} color='#3F51B5' />
            }
            <Text style={{marginLeft: 5}}>{item.name}</Text>
          </View>

          <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
            <Icon name='ellipsis-v' size={20} />
          </TouchableOpacity>
        </View>
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
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}

