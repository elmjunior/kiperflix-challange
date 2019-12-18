import {StyleSheet} from 'react-native';
import layout from '../../config/layout';

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },

  text: {
    marginVertical: 5,
    color: layout.colors.lightGray,
  },
  contry: {
    flexDirection: 'row',
  },
  flag: {
    marginLeft: 10,
  },
});

export default styles;
