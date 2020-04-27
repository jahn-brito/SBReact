import React, { Component } from 'react';

import { View, Image, Text } from 'react-native';

import stu from './styles';

export default class Student extends Component {
  render() {
    return (
      <View style={stu.rowHeader}>
      <View style={stu.containerAvatar}>
        <Image source={{uri: 'https://st3.depositphotos.com/3037725/14198/v/1600/depositphotos_141982124-stock-illustration-faces-avatar-in-circle-portrait.jpg'}} style={{width: 60, height: 60}} />
      </View>
      <View style={stu.containerText}>
        <Text style={stu.text}>Jon Doe</Text>
        <Text style={stu.text}>Maternal</Text>
        <Text style={stu.text}>2018</Text>
      </View>
    </View>
    );
  }
}
