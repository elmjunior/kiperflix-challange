import React, {useEffect, useState} from 'react';
import {View, StatusBar, TouchableOpacity, Animated} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import layout from '../../config/layout';
import styles from './styles';

import {StackActions} from 'react-navigation';

// Header display configuration, with the following parameters:

/*
left: Checks whether a back button on the left side of the logo is required,
leftColor: Back button color, 
right: Checks whether an info button is required on the right side of the logo, 
navigation: Navigation props for changing routes, 
headerHeight: Animated header height according to scroll in main view

*/

function Header({left, leftColor, right, navigation, headerHeight}) {
  let [logoOpacity] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(logoOpacity, {
      toValue: 1,
      duration: 500,
    }).start();
  }, []);

  const handleBack = () => {
    const popAction = StackActions.pop({n: 1});
    navigation.dispatch(popAction);
  };
  const _left = () => {
    return left ? (
      <View>
        <TouchableOpacity
          onPress={() => {
            handleBack();
          }}>
          <Ionicons
            name="md-arrow-round-back"
            color={leftColor ? leftColor : layout.colors.primary}
            size={24}
            style={{...styles.back, backgroundColor: 'transparent'}}
          />
        </TouchableOpacity>
      </View>
    ) : (
      <View style={{...styles.back, backgroundColor: 'transparent'}} />
    );
  };
  const _right = () => {
    return right ? (
      <Ionicons
        name="md-search"
        color="#fff"
        size={24}
        style={{...styles.right, backgroundColor: 'transparent'}}
      />
    ) : (
      <View style={{...styles.back, backgroundColor: 'transparent'}} />
    );
  };

  const _image = () => (
    <Animated.Image
      source={require('../../../assets/images/logo.png')}
      style={[styles.logo, {height: 80, opacity: logoOpacity}]}
      resizeMode="contain"
    />
  );

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={layout.colors.background}
      />
      <View style={styles.container}>
        <_left style={styles.left} />

        <_image style={styles.center} />
        <_right style={styles.right} />
      </View>
    </>
  );
}

export default Header;
