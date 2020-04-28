/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component, Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Modal from 'react-native-modal';

import Header from "./components/Header"
import CardItem from "./components/CardItem"
import Student from "./components/Student"
import Card from "./components/Card"
import Footer from './components/Footer';


export default class App extends Component {
  state = {
    isModalVisible: false,
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };
  render(){
    return(
      <Fragment>
        <StatusBar barStyle="light-content"/>
        <Header></Header>
        <Student></Student>
        <ScrollView>
        <Text style={{
          alignSelf: 'center',
          fontWeight: '600'
        }}>
          27 de Abril de 2020
        </Text>
          <Text style={styles.title}>Comunicados</Text>
          <CardItem toogle={this.toggleModal}></CardItem>
          <CardItem toogle={this.toggleModal}></CardItem>
          <CardItem toogle={this.toggleModal}></CardItem>
          <Text style={styles.title}>Tarefas</Text>
          <CardItem></CardItem>
          <CardItem></CardItem>
          <CardItem></CardItem>
          <Modal isVisible={this.state.isModalVisible} style={styles.modal} propagateSwipe>
            <Card modalVisible={this.state.isModalVisible} toogle={this.toggleModal}></Card>
          </Modal>
        </ScrollView>
        <Footer />
      </Fragment>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    marginLeft: 10,
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: '500'
  },
  modal: {
    alignItems: undefined,
    justifyContent: undefined,
    backgroundColor: 'white',
    margin: 0,
    marginTop: 40
  }
});

