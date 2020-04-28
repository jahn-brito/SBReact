import React, { Component } from 'react';

import { View, ImageBackground, TouchableOpacity, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
Icon.loadFont();

import styles from './styles';

export default class Card extends Component {
  render() {
    return (
      <ScrollView>
        <View>
          <ImageBackground source={{ uri: 'https://mega.ibxk.com.br//2019/10/02/02143002377157.jpg' }} style={{ height: 200 }}>
            <View
              style={styles.container}
            >
              <TouchableOpacity
                onPress={() => this.props.toogle()}
              >
                <Icon name="angle-down" color="white" size={25} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="star-o" color="white" size={25} />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
        {/* Titulo */}

        <View style={styles.titleContainer}>
          <Text style={styles.titleContent}>
            Sit fugiat non culpa
          </Text>
        </View>

        {/* Corpo do Comunicado */}
        <View style={styles.bodyContainer}>
          <Text style={styles.bodyContent}>
            Cillum ex eiusmod nulla Lorem in. Sit tempor exercitation excepteur occaecat laboris pariatur velit consectetur labore est culpa Lorem. Ut culpa dolore ad nisi laborum. Duis dolore id eiusmod in eiusmod non. Id consectetur sit sit et pariatur consequat dolore non laborum reprehenderit. Ad in consequat non officia. Magna amet veniam ea dolor labore.
          </Text>
        </View>

        {/* Anexos */}
        <View style={styles.attemptsContainer}>
          <Text>Anexos</Text>
        </View>


        {/* Vídeo do YT */}
        <View style={styles.attemptsContainer}>
          <Text>Vídeos</Text>
        </View>

        <View style={styles.senderContainer}>
          <Text>SmartBaby, 27/04/2020</Text>
        </View>
      </ScrollView>
    );
  }
}
