import React from 'react';
import {View, Text} from 'react-native';
import layout from '../../config/layout';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default function VoteAverage({average}) {
  return (
    <View style={styles.averageHolder}>
      <Icon name="thumbs-up" size={18} color={layout.colors.primary}></Icon>
      <Text style={styles.voteAverage}>{average}</Text>
    </View>
  );
}
