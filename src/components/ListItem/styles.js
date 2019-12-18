import {StyleSheet, Dimensions} from 'react-native';
import layout from '../../config/layout';

const vw = Dimensions.get('screen').width;
const vh = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    margin: vw / 32,
  },
  title: {
    fontSize: vw / 17,
    color: layout.colors.white,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: vh / 3.5,
    resizeMode: 'contain',
    backgroundColor: layout.colors.white,
    borderRadius: 10,
    marginTop: 10,
  },
  text: {
    color: layout.colors.lightGray,
  },
  header: {
    height: vh / 10,
    justifyContent: 'flex-end',
  },
});

export default styles;
