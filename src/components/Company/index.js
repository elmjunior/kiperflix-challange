import React from 'react';
import {View, Text, Image} from 'react-native';
import {showImage} from '../../services/images';
import styles from './styles';
import IconSimple from '../../../assets/images/icon-simple.png';
export default function Company({item}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={
          item.logo_path ? {uri: showImage(item.logo_path, 500)} : IconSimple
        }
        resizeMode={'contain'}
        defaultSource={IconSimple}
      />
      <Text style={styles.title}>{item.name}</Text>
    </View>
  );
}
