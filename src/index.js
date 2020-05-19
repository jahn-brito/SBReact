import React, { Component, Fragment } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  YellowBox,
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
import { CollapsibleHeaderScrollView } from 'react-native-collapsible-header-views';
import Video from './components/Video';

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
        <StatusBar showHideTransition='slide' barStyle="dark-content" />
        <CollapsibleHeaderScrollView
          CollapsibleHeaderComponent={
            <View>
              <Header />
              <Student
                name='Jon Doe'
                class='Maternal'
                year='2018'
                avatar='https://st3.depositphotos.com/3037725/14198/v/1600/depositphotos_141982124-stock-illustration-faces-avatar-in-circle-portrait.jpg'
              />
              <View
                style={{
                  backgroundColor: '#FFF',
                  height: 35,
                }}
              >
                <Text style={{
                  alignSelf: 'center',
                  fontWeight: '500',
                  color: '#2A7EF0',
                }}>
                  {moment().format('LL')}
                </Text>
              </View>
            </View>
          }
          headerHeight={160}
        // headerContainerBackgroundColor='#2A7EF0'
        // statusBarHeight={Platform.OS === 'ios' ? 20 : 0}
        >
          {/* <Swiper showsPagination={false}> */}
          <View style={{marginTop: 30}}>
            <Text style={styles.title}>Comunicados</Text>
            <CardItem
              image={{ uri: IMAGE }}
              title='Comunicado Importante'
              author='Mundo Encantado'
              text='Pariatur nisi nulla ullamco enim velit in officia amet officia deserunt cupidatat ut exercitation.'
              toogle={this.toggleModal}
              avatar='https://api.adorable.io/avatars/50/mundo@adorable.io'>
            </CardItem>
            <CardItem
              image={{ uri: IMAGE }}
              title='Comunicado Importante'
              author='Mundo Encantado'
              text='Pariatur nisi nulla ullamco enim velit in officia amet officia deserunt cupidatat ut exercitation.'
              toogle={this.toggleModal}>
            </CardItem>
            <Text style={styles.title}>Tarefas</Text>
            <CardItem
              image={{ uri: IMAGE }}
              title='Comunicado Importante'
              author='Mundo Encantado'
              text='Pariatur nisi nulla ullamco enim velit in officia amet officia deserunt cupidatat ut exercitation.'
              toogle={this.toggleModal}>
            </CardItem>
            <CardItem
              image={{ uri: IMAGE }}
              title='Comunicado Importante'
              author='Mundo Encantado'
              text='Pariatur nisi nulla ullamco enim velit in officia amet officia deserunt cupidatat ut exercitation.'
              toogle={this.toggleModal}>
            </CardItem>
            <ModalView
              visible={this.state.isModalVisible}
              toogle={this.toggleModal}
              title='Comunicado Importante'
            // headerImageSource={IMAGE}
            >
              <Attachments />
              <Gallery />
              <Video />
            </ModalView>
            {/* </Swiper> */}
          </View>

        </CollapsibleHeaderScrollView>
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

