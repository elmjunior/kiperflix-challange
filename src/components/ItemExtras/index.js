import React from 'react';
import {View, Text} from 'react-native';
import Flag from 'react-native-flags';

import styles from './styles';

export default function ItemExtras({item}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Original Title: {item.original_title}</Text>

      <View style={styles.contry}>
        <Text style={styles.text}>Original Language:</Text>
        <Flag
          style={styles.flag}
          code={
            item.original_language === 'en'
              ? 'US'
              : item.original_language.toUpperCase()
          }
          size={24}
        />
      </View>
    </View>
  );
}
