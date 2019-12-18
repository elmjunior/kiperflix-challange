import {StyleSheet} from 'react-native';
import layout from '../../config/layout';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  text: {
    color: layout.colors.lightGray,
    marginLeft: 5,
  },
});

export default styles;
