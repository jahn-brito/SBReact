import React, {Component, Fragment} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  StatusBar,
  YellowBox
} from 'react-native';
import Modal from 'react-native-modal';
import moment from 'moment'
import 'moment/locale/pt-br';
moment.locale('pt-BR');

import Header from "./components/Header"
import CardItem from "./components/CardItem"
import Student from "./components/Student"
import Card from "./components/Card"
import Footer from './components/Footer';

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
])

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
          fontWeight: '500',
          color: '#2A7EF0'
        }}>
          {moment().format('LL')}
        </Text>
          <Text style={styles.title}>Comunicados</Text>
          <CardItem toogle={this.toggleModal}></CardItem>
          <CardItem toogle={this.toggleModal}></CardItem>
          <CardItem toogle={this.toggleModal}></CardItem>
          <Text style={styles.title}>Tarefas</Text>
          <CardItem toogle={this.toggleModal}></CardItem>
          <CardItem toogle={this.toggleModal}></CardItem>
          <CardItem toogle={this.toggleModal}></CardItem>
          <Modal
            isVisible={this.state.isModalVisible}
            style={styles.modal}
            propagateSwipe
          >
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
    fontWeight: '400'
  },
  modal: {
    alignItems: undefined,
    justifyContent: undefined,
    backgroundColor: 'transparent',
    margin: 0,
    marginTop: 100,
  }
});

