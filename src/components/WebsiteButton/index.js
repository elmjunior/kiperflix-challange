import React from 'react';
import {TouchableOpacity, Text, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import layout from '../../config/layout';

export default function WebsiteButton({item}) {
  const handleClick = () => {
    Linking.openURL(item.homepage);
  };
  if (item.homepage) {
    return (
      <TouchableOpacity style={styles.btn} onPress={handleClick}>
        <Icon
          name="link"
          size={14}
          color={layout.colors.white}
          style={styles.icon}></Icon>
        <Text style={styles.btnText}>Homepage</Text>
      </TouchableOpacity>
    );
  } else return <></>;
}
