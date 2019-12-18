import {StyleSheet, Dimensions} from 'react-native';
import layout from '../../config/layout';

const vh = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: layout.colors.background,
  },
  list: {
    marginHorizontal: vh / 64,
  },
});

export default styles;
