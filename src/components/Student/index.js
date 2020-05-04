import React, { Component } from 'react';

import { View, Image, Text } from 'react-native';

import stu from './styles';

export default function Student(props) {
  return (
    <View style={stu.rowHeader}>
      <View style={stu.containerAvatar}>
        <Image source={{ uri: props.avatar }} style={{ width: 60, height: 60 }} />
      </View>
      <View style={stu.containerText}>
        <Text style={stu.text}>{props.name}</Text>
        <Text style={stu.text}>{props.class}</Text>
        <Text style={stu.text}>{props.year}</Text>
      </View>
    </View>
  );
  Î
}

