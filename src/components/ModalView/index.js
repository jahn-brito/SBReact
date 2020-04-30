import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal'
import Icon from 'react-native-vector-icons/FontAwesome'
Icon.loadFont();

export default class ModalView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
        isVisible={this.props.visible}
        style={styles.modal}
      >
        {
          this.props.headerImageSource ?
            <View style={{ height: 45 }}>
              <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.toogle()}>
                  <Icon name="angle-down" color="white" size={25} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon name="star-o" color="white" size={25} />
                </TouchableOpacity>
              </View>
              <Image
                source={{ uri: this.props.headerImageSource }}
                style={{
                  height: 45,
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10
                }}
                resizeMethod='auto'
                resizeMode='cover'
              />
            </View>
            : <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Notificações</Text>
                <TouchableOpacity activeOpacity={0.5} onPress={this.props.toogle}>
                  <Icon name='angle-down' size={25} style={styles.headerIcon} />
                </TouchableOpacity>
              </View>
        }
        <ScrollView style={styles.fill}>
          {this.props.children}
        </ScrollView>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    position: "absolute",
    top: 10,
    paddingHorizontal: 10,
    zIndex: 1,
    width: '100%'
  },
  modal: {
    alignItems: undefined,
    justifyContent: undefined,
    backgroundColor: 'transparent',
    margin: 0,
    marginTop: 100,
    borderRadius: 10
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: '#164280',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  headerText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600'
  },
  headerIcon: { opacity: 0.9, color: '#FFF' },
});

ModalView.PropTypes = {
  visible: PropTypes.any.isRequired,
  // children: PropTypes.element.isRequired,
  headerImageSource: PropTypes.string,
  headerColor: PropTypes.string
}
