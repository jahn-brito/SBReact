import React, { Component } from 'react';

import { View, Text, StyleSheet, Modal, FlatList, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';

export default class Gallery extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imageuri: '',
      modalVisible: false
    }
  }

  showModal(visible, imageURL) {
    this.setState({
      modalVisible: visible,
      imageuri: imageURL
    })
  }

  componentDidMount(){
    var that = this;
    let items = Array.apply(null, Array(22)).map((v, i) => {
      return { id: i, src: 'https://unsplash.it/400/400?image=' + (i + 10)};
    });

    that.setState({
      dataSource: items,
    });
  }

  render() {
    if (this.state.modalVisible) {
      return (
        <Modal
          transparent={false}
          animationType={'slide'}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.showModal(!this.state.modalVisible, '');
          }}>
          <View style={styles.modelStyle}>
            <FastImage
              style={styles.fullImageStyle}
              source={{ uri: this.state.imageuri }}
              resizeMode={FastImage.resizeMode.contain}
            />
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.closeButtonStyle}
              onPress={() => {
                this.showModal(!this.state.modalVisible, '');
              }}>
              <FastImage
                source={{
                  uri:
                    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/close.png',
                }}
                style={{ width: 35, height: 35, marginTop: 16 }}
              />
            </TouchableOpacity>
          </View>
        </Modal>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text
            style={{
              padding: 10,
              fontSize: 16,
              fontWeight: '500'
            }}>
            Imagens
          </Text>
          <FlatList
            data={this.state.dataSource}
            renderItem={({ item }) => (
              <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
                <TouchableOpacity
                  key={item.id}
                  style={{ flex: 1 }}
                  onPress={() => {
                    this.showModal(true, item.src);
                  }}>
                  <FastImage
                    style={styles.image}
                    source={{
                      uri: item.src,
                    }}
                  />
                </TouchableOpacity>
              </View>
            )}
            //Setting the number of column
            numColumns={3}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  image: {
    height: 120,
    width: '100%',
  },
  fullImageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '98%',
    resizeMode: 'contain',
  },
  modelStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  closeButtonStyle: {
    width: 25,
    height: 25,
    top: 9,
    right: 9,
    position: 'absolute',
  },
});
