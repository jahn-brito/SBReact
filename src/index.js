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

import Header from "./components/Header"
import CardItem from "./components/CardItem"
import Student from "./components/Student"


export default class App extends Component {
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
          <CardItem></CardItem>
          <CardItem></CardItem>
          <CardItem></CardItem>
          <Text style={styles.title}>Tarefas</Text>
          <CardItem></CardItem>
          <CardItem></CardItem>
          <CardItem></CardItem>
        </ScrollView>
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
  }
});
