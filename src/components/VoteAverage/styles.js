import {StyleSheet, Dimensions} from 'react-native';
import layout from '../../config/layout';

const styles = StyleSheet.create({
  averageHolder: {
    flexDirection: 'row',
  },
  voteAverage: {
    marginLeft: 5,
    marginTop: 2,
    fontWeight: 'bold',
    color: layout.colors.primary,
  },
});

export default styles;
