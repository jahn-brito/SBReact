import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    margin: 10,
  },
  titleContainer:{
    margin: 10,
  },
  titleContent: {
    fontWeight: '600',
    fontSize: 16
  },
  bodyContainer:{
    marginHorizontal: 10
  },
  bodyContent: {
    textAlign: 'justify'
  },
  senderContainer:{
    margin: 10
  },
  attemptsContainer: {
    margin: 10
  },
  videoContainer: {
    marginHorizontal: 3
  },
  video: {
    width: Dimensions.get('screen').width - 15,
    alignSelf: 'stretch',
    height: 230,
    marginLeft: 3,
    marginTop: 3,
  }
});

export default styles;
