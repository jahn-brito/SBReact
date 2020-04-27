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


export default class App extends Component {
  render(){
    return(
      <Fragment>
        <StatusBar barStyle="light-content"/>
        <Header></Header>
        <ScrollView>
          <CardItem></CardItem>
          <CardItem></CardItem>
          <CardItem></CardItem>
          <CardItem></CardItem>
        </ScrollView>
      </Fragment>
    )
  }
}

const styles = StyleSheet.create({
  
});
