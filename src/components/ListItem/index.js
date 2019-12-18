import React from 'react';
import {TouchableOpacity, Image, Text, View} from 'react-native';
import {withNavigation} from 'react-navigation';
import format from 'date-fns/format';
import styles from './styles';
import {showImage} from '../../services/images';
import ItemBottom from '../ItemBottom';

function ListItem({item, handleClick}) {
  return (
    <TouchableOpacity style={styles.content} onPress={handleClick}>
      <View style={styles.header}>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.text}>
          Release: {format(item.release_date, 'MM/DD/YYYY')}
        </Text>
      </View>
      <Image
        style={styles.image}
        source={{uri: showImage(item.poster_path, 500)}}
        resizeMode={'cover'}
      />
      <ItemBottom item={item}></ItemBottom>
    </TouchableOpacity>
  );
}

export default withNavigation(ListItem);
