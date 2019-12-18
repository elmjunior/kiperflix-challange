import React from 'react';
import GenreName from '../GenreName';
import {View, Text} from 'react-native';
import styles from './styles';
export default function Genres({items}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Genres:</Text>
      <View style={styles.content}>
        {items ? (
          items.map((item, key) => <GenreName key={key} item={item} />)
        ) : (
          <> </>
        )}
      </View>
    </View>
  );
}
