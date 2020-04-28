import React, { Component } from 'react';
import Carousel, { getInputRangeFromIndexes } from 'react-native-snap-carousel';

import { View, Text, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';

// import { Container } from './styles';

const ENTRIES1 = [
  {
    title: 'Beautiful and dramatic Antelope Canyon',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/UYiroysl.jpg'
  },
  {
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
  },
  {
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://i.imgur.com/MABUbpDl.jpg'
  },
  {
    title: 'Acrocorinth, Greece',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/KZsmUi2l.jpg'
  },
  {
    title: 'The lone tree, majestic landscape of New Zealand',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
  },
  {
    title: 'Middle Earth, Germany',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/lceHsT6l.jpg'
  }
];

export default class Gallery extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    }
  }

  _scrollInterpolator (index, carouselProps) {
    const range = [3, 2, 1, 0, -1];
    const inputRange =  getInputRangeFromIndexes(range, index, carouselProps);
    const outputRange = range;

    return { inputRange, outputRange };
  }

  _animatedStyles (index, animatedValue, carouselProps) {
    const sizeRef = carouselProps.vertical ? carouselProps.itemHeight : carouselProps.itemWidth;
    const translateProp = carouselProps.vertical ? 'translateY' : 'translateX';

    return {
      zIndex: carouselProps.data.length - index,
      opacity: animatedValue.interpolate({
        inputRange: [2,3],
        outputRange: [1,0]
      }),
      transform: [{
        rotate: animatedValue.interpolate({
          inputRange: [-1, 0, 1, 2, 3],
          outputRange: ['-25deg', '0deg', '-3deg', '1.8deg', '0deg'],
          extrapolate: 'clamp'
        })
      }, {
        [translateProp]: animatedValue.interpolate({
          inputRange: [-1, 0, 1, 2, 3],
          outputRange: [
            -sizeRef * 0.5,
            0,
            -sizeRef,
            -sizeRef * 2,
            -sizeRef * 3
          ],
          extrapolate: 'clamp'
        })
      }]
    }
  }

  _renderItem({ item, index }) {
    return (
      <ImageBackground
        source={{ uri: item.illustration }}
        style={{
          height: 200,
          padding: 5,
          shadowColor: 'white',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 1,
          shadowRadius: 1,
          elevation: 1,
        }}
      >
        <Text
          style={{
            color: '#FFF',
            shadowColor: 'grey',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 1,
            shadowRadius: 2,
            elevation: 2,
            fontWeight: '600'
          }}
        >{item.title}</Text>
      </ImageBackground>
    )
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Carousel
          layout={"default"}
          ref={ref => this.carousel = ref}
          data={ENTRIES1}
          sliderWidth={300}
          itemWidth={300}
          renderItem={this._renderItem}
          onSnapToItem={index => this.setState({ activeIndex: index })}
          scrollInterpolator={this._scrollInterpolator}
          slideInterpolatedStyle={this._animatedStyles}
          useScrollView={true}
          />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 10,
    height: 230
  }
});
