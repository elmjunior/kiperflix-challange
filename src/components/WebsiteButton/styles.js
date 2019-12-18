import {StyleSheet, Dimensions} from 'react-native';
import layout from '../../config/layout';

const vw = Dimensions.get('screen').width;
const vh = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: layout.colors.primary,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 12,
    marginTop: 20,
    borderRadius: 5,
  },
  btnText: {
    color: layout.colors.white,
    fontWeight: 'bold',
  },
  icon: {
    marginRight: 10,
  },
});

export default styles;
