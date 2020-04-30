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
import ModalView from './components/ModalView';
import Gallery from './components/Gallery';
import Attachments from './components/Attachments';

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
            <ModalView
              visible={this.state.isModalVisible}
              toogle={this.toggleModal}
              // headerImageSource='https://mega.ibxk.com.br//2019/10/02/02143002377157.jpg'
            >
              <Attachments/>
              <Gallery/>
            </ModalView>
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
});

