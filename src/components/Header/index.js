import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

import header from './styles';
import Calendar from '../Calendar'

export default function Header() {
  const [ modalVisible, setModalVisible ] = useState(false);

  return (
    <View style={header.container}>
      <View style={header.rowContainer} >
        <TouchableOpacity>
          <Icon name="align-left" style={header.buttons} size={20} color="white" />
        </TouchableOpacity>
        <View style={header.rowActions}>
          <TouchableOpacity>
            <Icon name="search" style={header.buttons} size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <Icon name="calendar" style={header.buttons} size={20} color="white" />
          </TouchableOpacity>
          <Modal isVisible={modalVisible} onBackdropPress={() => setModalVisible(!modalVisible)}>
            <Calendar />
          </Modal>
        </View>
      </View>
    </View>
  );
}
