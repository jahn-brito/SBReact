import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  container: {
    height: 70,
    paddingTop: 30,
    backgroundColor: '#2A7EF0',
    borderBottomWidth: 1,
    borderColor: '#BBBBBB'
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  rowActions:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  buttons: {
    paddingHorizontal: 5,
  },
  image: {
    width: Dimensions.get('window').width <= 400 ? 145 : 155,
    resizeMode: 'contain'
  }
})

export default styles
