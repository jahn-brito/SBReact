import React, { Component } from 'react';

import { View, ImageBackground, TouchableOpacity, Text, ScrollView } from 'react-native';
import YouTube from 'react-native-youtube'
import Icon from 'react-native-vector-icons/FontAwesome'
Icon.loadFont();

import styles from './styles';
import Gallery from '../Gallery';
import Attachments from '../Attachments';

export default class Card extends Component {
  render() {
    return (
      <ScrollView >
        <View
          style={{
            height: 200,
          }}
        >
          <ImageBackground
            source={{ uri: 'https://mega.ibxk.com.br//2019/10/02/02143002377157.jpg' }}
            style={{
              height: 200
            }}
            resizeMethod='auto'
            resizeMode='cover'
          >
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

        <View
          style={{
            backgroundColor: '#FFF',
            paddingBottom: 50
          }}
        >

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
          <Attachments />

          {/* Galeria de Fotos */}
          <View style={styles.attemptsContainer}>
            <Gallery />
          </View>

          {/* Vídeos */}
          <View style={styles.videoContainer}>
            <YouTube
              videoId='Ezn00_YrXh8'
              play={false}
              apiKey={'wZpPI25c98z7-j7zFOLNz1U8'}
              fullscreen={true}
              loop={false}
              onReady={e => this.setState({ isReady: true })}
              style={styles.video} />
          </View>

          {/* Remetente */}
          <View style={styles.senderContainer}>
            <Text>SmartBaby, 27/04/2020</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
