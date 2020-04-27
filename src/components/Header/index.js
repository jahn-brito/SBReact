import React, { Component } from 'react';

import { View, Text } from 'react-native';

import header from './styles';

export default class Header extends Component {
  render() {
    return (
      <View style={header.container}>
        <Text>SmartBaby</Text>
      </View>
    );
  }
}
