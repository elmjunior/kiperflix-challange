import {StyleSheet, Dimensions} from 'react-native';
import layout from '../../config/layout';
const vh = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: layout.colors.background,
  },
  logo: {
    height: vh * 0.1,
    marginVertical: vh * 0.1,
    width: vh * 0.1 * (1950 / 662),
  },
  welcome: {
    color: layout.colors.white,
    fontSize: 12,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default styles;
