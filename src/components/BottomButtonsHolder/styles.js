import {StyleSheet, Dimensions} from 'react-native';
import layout from '../../config/layout';

const vh = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 10,
    fontSize: 12,
    color: layout.colors.white,
  },
});

export default styles;
