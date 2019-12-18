import {StyleSheet, Dimensions} from 'react-native';
import layout from '../../config/layout';

const vh = Dimensions.get('screen').height;
const vw = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    width: vw / 4,
    marginRight: 20,
  },
  image: {
    width: '100%',
    borderRadius: 10,
    height: vh / 10.5,
    backgroundColor: layout.colors.white,

    marginVertical: 10,
  },
  title: {
    color: layout.colors.lightGray,
  },
});

export default styles;
