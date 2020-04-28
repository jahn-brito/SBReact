import React, { Component } from 'react';

import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

// import { Container } from './styles';

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Icon name="home" size={25}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="comment-o" size={25}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="bell-o" size={25}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="star-o" size={25}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="plus" size={25}/>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 60,
    shadowColor: 'grey',
    backgroundColor: 'white',
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  }
});