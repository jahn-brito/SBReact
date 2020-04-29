import React, { Component } from 'react';

import { View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
Icon.loadFont();

import header from './styles';

export default class Header extends Component {
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
            <TouchableOpacity>
              <Icon name="calendar" style={header.buttons} size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
