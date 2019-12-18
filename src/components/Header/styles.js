import {StyleSheet, Dimensions} from 'react-native';

const vh = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  left: {},
  center: {},
  right: {},

  logo: {
    height: vh * 0.1,
    // marginVertical: vh * 0.05,
    width: vh * 0.1 * (1950 / 662),
  },
  back: {
    height: 30,
    width: 30,
    marginHorizontal: 20,
  },
  right: {
    height: 30,
    width: 30,
    marginHorizontal: 20,
    marginTop: vh * 0.08 * -1,
  },
});

export default styles;
