import React, { Component, Fragment } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  StatusBar,
  YellowBox
} from 'react-native';
import Swiper from 'react-native-swiper'
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

const IMAGE = 'https://www.mbakids.com.br/wp-content/uploads/2018/11/mba-kids-mba-kids-escola-de-empreendedorismo-para-criancas-abre-suas-portas-brasileiras-amanha-e-o-nosso-ceo-la-da-ucrania-nos-conta-como-tudo-comecou.jpg';

export default class App extends Component {
  state = {
    isModalVisible: false,
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  render() {
    return (
      <Fragment>
        <StatusBar barStyle="light-content" />
        <Header></Header>
        <Swiper showsPagination={false}>
          <Fragment>
            <Student
              name='Jon Doe'
              class='Maternal'
              year='2018'
              avatar='https://st3.depositphotos.com/3037725/14198/v/1600/depositphotos_141982124-stock-illustration-faces-avatar-in-circle-portrait.jpg'
            />
            <ScrollView>
              <Text style={{
                alignSelf: 'center',
                fontWeight: '500',
                color: '#2A7EF0'
              }}>
                {moment().format('LL')}
              </Text>
              <Text style={styles.title}>Comunicados</Text>
              <CardItem
                image={{uri: IMAGE}}
                title='Comunicado Importante'
                author='Mundo Encantado'
                text='Pariatur nisi nulla ullamco enim velit in officia amet officia deserunt cupidatat ut exercitation.'
                toogle={this.toggleModal}>
              </CardItem>
              <CardItem
                image={{uri: IMAGE}}
                title='Comunicado Importante'
                author='Mundo Encantado'
                text='Pariatur nisi nulla ullamco enim velit in officia amet officia deserunt cupidatat ut exercitation.'
                toogle={this.toggleModal}>
              </CardItem>
              <Text style={styles.title}>Tarefas</Text>
              <CardItem
                image={{uri: IMAGE}}
                title='Comunicado Importante'
                author='Mundo Encantado'
                text='Pariatur nisi nulla ullamco enim velit in officia amet officia deserunt cupidatat ut exercitation.'
                toogle={this.toggleModal}>
              </CardItem>
              <CardItem
                image={{uri: IMAGE}}
                title='Comunicado Importante'
                author='Mundo Encantado'
                text='Pariatur nisi nulla ullamco enim velit in officia amet officia deserunt cupidatat ut exercitation.'
                toogle={this.toggleModal}>
              </CardItem>
              <ModalView
                visible={this.state.isModalVisible}
                toogle={this.toggleModal}
                title='Comunicado Importante'
                headerImageSource={IMAGE}
              >
                <Attachments />
                <Gallery />
              </ModalView>
            </ScrollView>
          </Fragment>

        </Swiper>
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

