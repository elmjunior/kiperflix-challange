import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import layout from '../../config/layout';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default function BottomButtonsHolder() {
  const handleClick = () => {
    Alert.alert('Coming soon... I hope');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.content} onPress={handleClick}>
        <Icon name="plus" size={14} color={layout.colors.white}></Icon>
        <Text style={styles.text}>Add to list</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.content} onPress={handleClick}>
        <Icon name="thumbs-up" size={14} color={layout.colors.white}></Icon>
        <Text style={styles.text}>Rate</Text>
      </TouchableOpacity>
    </View>
  );
}
