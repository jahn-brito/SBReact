import React, { useState } from 'react';
import { View, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Popover from 'react-native-popover-view';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

import Notification from '../../screens/Notifications'
import header from './styles';
import Calendar from '../Calendar'

export default function Header() {
  const [modalVisible, setModalVisible] = useState(false);
  const [notificationVisible, setNotificationVisible] = useState(false);

  return (
    <View style={header.container}>
      <View style={header.rowContainer} >
        <TouchableOpacity>
          <Icon name="align-left" style={header.buttons} size={20} color="white" />
        </TouchableOpacity>
        <View style={header.rowActions}>
          <TouchableOpacity ref={ref => this.touchable = ref} onPress={() => setNotificationVisible(!notificationVisible)}>
            <Icon name="bell-o" style={header.buttons} size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity >
            <Icon name="search" style={header.buttons} size={20} color="white" />
          </TouchableOpacity>
          <Popover
            isVisible={notificationVisible}
            fromView={this.touchable}
            placement='bottom'
            popoverStyle={{
              maxHeight: Dimensions.get('window').height,
              width: Dimensions.get('window').width,
              borderRadius: 10,
            }}
            onRequestClose={() => setNotificationVisible(false)}>
            <ScrollView>
              <Notification />
            </ScrollView>
          </Popover>
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
