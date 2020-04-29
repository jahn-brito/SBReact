import React, { Component } from 'react';

import { View, TouchableOpacity, Image } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome'
Icon.loadFont();

import header from './styles';
import Calendar from '../Calendar';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    }
  }
  render() {
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
            <TouchableOpacity onPress={() => this.setState({modalVisible: !this.state.modalVisible})}>
              <Icon name="calendar" style={header.buttons} size={20} color="white" />
            </TouchableOpacity>
            <Modal isVisible={this.state.modalVisible} onBackdropPress={() => this.setState({modalVisible: !this.state.modalVisible})}>
              <Calendar />
            </Modal>
          </View>
        </View>
      </View>
    );
  }
}
