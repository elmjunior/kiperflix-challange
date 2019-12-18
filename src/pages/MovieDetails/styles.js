import {StyleSheet, Dimensions} from 'react-native';
import layout from '../../config/layout';

const vw = Dimensions.get('screen').width;
const vh = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: layout.colors.background,
  },
  image: {
    width: '100%',
    height: vh / 3.5,
    resizeMode: 'contain',
    backgroundColor: layout.colors.white,

    marginVertical: 10,
  },
  content: {
    marginHorizontal: vw / 10,
    marginVertical: vw / 32,
  },
  title: {
    color: layout.colors.white,
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10,
  },
  text: {
    color: layout.colors.lightGray,
  },
  overview: {
    color: layout.colors.white,
    marginTop: 20,
    fontSize: 15,
    textAlign: 'justify',
  },
  scrollView: {
    paddingBottom: 60,
  },
  tagline: {
    color: layout.colors.white,
    marginBottom: 20,
  },
  titleHolder: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default styles;
