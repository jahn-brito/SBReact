import { Platform, Dimensions, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    height: 150,
    borderRadius: 10,
    margin: 10,
    padding: 10,
    backgroundColor: '#FFF',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.20,
    shadowRadius: 6.68,
    elevation: 1,
  },
  rowHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  containerAvatar: {
    flex: 1,
    alignItems: 'center'
  },
  containerText: {
    flex: 5
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
