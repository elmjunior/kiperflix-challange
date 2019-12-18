import {StyleSheet, Dimensions} from 'react-native';
import layout from '../../config/layout';

const vw = Dimensions.get('screen').width;
const vh = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  bottom: {
    marginTop: 10,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  averageHolder: {
    flexDirection: 'row',
  },
  voteAverage: {
    marginLeft: 5,
    marginTop: 2,
    fontWeight: 'bold',
    color: layout.colors.primary,
  },
  text: {
    color: layout.colors.lightGray,
  },
});

export default styles;
