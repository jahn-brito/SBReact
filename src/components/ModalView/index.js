import React from 'react';
import { Platform, TouchableOpacity, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome'
import HeaderImageScrollView from 'react-native-image-header-scroll-view'
import { Modal, Container, ImageHeader, Title } from './styles'
Icon.loadFont();

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

export default function ModalView(props) {
  return (
    <Modal isVisible={props.visible}>
      <HeaderImageScrollView
        maxHeight={250}
        minHeight={HEADER_HEIGHT}
        renderHeader={() => <ImageHeader resizeMode="cover" source={{ uri: props.headerImageSource }} />}
        minOverlayOpacity={0.2}
        maxOverlayOpacity={0.6}
        bounces={false}
        renderFixedForeground={() => (
          <Container height={NAV_BAR_HEIGHT}>
            <TouchableOpacity onPress={() => props.toogle()}>
              <Icon name="angle-down" color="white" size={25} />
            </TouchableOpacity>
            <Title>{props.title}</Title>
            <TouchableOpacity>
              <Icon name="star-o" color="white" size={25} />
            </TouchableOpacity>
          </Container>
        )}
      >
        {props.children}
      </HeaderImageScrollView>
    </Modal>
  )
};

ModalView.PropTypes = {
  visible: PropTypes.any.isRequired,
  children: PropTypes.element.isRequired,
  headerImageSource: PropTypes.string,
  headerColor: PropTypes.string
}
