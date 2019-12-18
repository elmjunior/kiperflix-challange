import React from 'react';
import {View, Text} from 'react-native';
import VoteAverage from '../VoteAverage';
import styles from './styles';

export default function ItemBottom({item}) {
  return (
    <View style={styles.bottom}>
      <VoteAverage average={item.vote_average}></VoteAverage>
      <Text style={styles.text}>{item.vote_count} votes</Text>
    </View>
  );
}
