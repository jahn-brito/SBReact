import { Platform, Dimensions } from 'react-native'

const styles = {
  container: {
    height: 100,
    margin: 0,
    paddingTop: 5,
    paddingBottom: 10,
    backgroundColor: '#2A7EF0',
    borderBottomWidth: 1,
    borderColor: '#BBBBBB'
  },
  rowContainer: {
    height: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: Dimensions.get('window').width <= 400 ? 145 : 155,
    resizeMode: 'contain'
  },
  botoesMenu: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopColor: '#DEDEDE',
    borderTopWidth: 1,
    paddingHorizontal: 15,
    height: 48,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0
  }
}

export default styles