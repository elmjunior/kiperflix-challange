import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

export default function GenreName({item}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
    </View>
  );
}
