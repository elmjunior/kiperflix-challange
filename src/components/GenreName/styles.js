import {StyleSheet} from 'react-native';
import layout from '../../config/layout';

const styles = StyleSheet.create({
  title: {
    color: layout.colors.white,
    fontSize: 10,
  },
  container: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: layout.colors.white,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    borderRadius: 15,
  },
});

export default styles;
