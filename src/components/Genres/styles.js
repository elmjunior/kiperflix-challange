import {StyleSheet} from 'react-native';
import layout from '../../config/layout';

const styles = StyleSheet.create({
  title: {
    color: layout.colors.lightGray,
    marginBottom: 10,
  },

  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default styles;
