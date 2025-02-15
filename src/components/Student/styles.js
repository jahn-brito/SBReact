import { Platform, Dimensions, StyleSheet } from 'react-native'

const styles = StyleSheet.create ({
  rowHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    flex: 1,
    maxWidth: 200,
    minHeight: 50
  },
  containerAvatar: {
    flex: 1,
    alignItems: 'center'
  },
  containerText: {
    flex: 1
  },
  text: {
    fontWeight: '400'
  },
  containerHour: {
    flex: 1
  },
  rowContent: {
    marginVertical: 10
  },
  rowFooter: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  footerContent: {
    marginHorizontal: 5
  },
  contentText: {
    textAlign: 'justify'
  }
});

export default styles
