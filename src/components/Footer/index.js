import React, { Component } from 'react';

import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import Notifications from '../../screens/Notifications';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

// import { Container } from './styles';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    }
  }

  toggleModal = () => {
    this.setState({modalVisible: !this.state.modalVisible});
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Icon name="home" size={25} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="comment-o" size={25} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.setState({ modalVisible: !this.state.modalVisible })}
        >
          <Icon name="bell-o" size={25} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="star-o" size={25} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="plus" size={25} />
        </TouchableOpacity>
        <Modal style={styles.modal} isVisible={this.state.modalVisible} onBackdropPress={() => this.toggleModal}>
          <Notifications toogle={this.toggleModal} />
        </Modal>
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
  },
  modal: {
    alignItems: undefined,
    justifyContent: undefined,
    backgroundColor: '#FFF',
    margin: 0,
    marginTop: 100,
    paddingBottom: 50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  }
});
