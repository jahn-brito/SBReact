import React, { Component } from 'react';

import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
Icon.loadFont();
import card from './styles';

export default class CardItem extends Component {
  render() {
    return (
      <View style={card.container}>
          <TouchableOpacity style={card.content} onPress={() => this.props.toogle()}>
              <View style={card.rowHeader}>
                <View style={card.containerAvatar}>
                  <Image source={{uri: 'https://cdn.clipart.email/a5e3051c9fb286fe2e04f831b4f4eccf_avatar-icon-transparent-png-clipart-free-download-ywd_512-512.png'}} style={{width: 40, height: 40}} />
                </View>
                <View style={card.containerText}>
                  <Text style={card.text}>Mundo Encantado</Text>
                  <Text style={card.text}>Comunicado</Text>
                </View>
                <View style={card.containerHour}>
                  <Text>08:34</Text>
                </View>
              </View>
              <View style={card.rowContent}>
                <Text style={card.contentText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id tristique mi. Phasellus vel hendrerit est. Nam nulla lacus, feugiat ut odio vitae, bibendum pretium arcu.
                </Text>
              </View>
              <View style={card.rowFooter}>
                <Icon name="star-o" size={20} style={card.footerContent}/>
              </View>
          </TouchableOpacity>
      </View>    
    );
  }
}
