import React from 'react';
import {View, Text} from 'react-native';

import layout from '../../config/layout';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Popularity({item}) {
  return (
    <View style={styles.container}>
      <Icon name="fire" color={layout.colors.primary} size={18}></Icon>
      <Text style={styles.text}>{item.popularity} of popularity</Text>
    </View>
  );
}
