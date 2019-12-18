import React, {useEffect, useState} from 'react';
import {View, Animated} from 'react-native';

import styles from './styles';

export default function Main({navigation}) {
  let [fadeMargin] = useState(new Animated.Value(0));
  let [fadeOpacity] = useState(new Animated.Value(0));
  let [logoOpacity] = useState(new Animated.Value(1));
  const [loading, setLoading] = useState(false);

  const closeAll = () => {
    Animated.timing(fadeOpacity, {
      toValue: 0,
      duration: 500,
    }).start(() => {
      Animated.timing(fadeMargin, {
        toValue: 0,
        duration: 500,
      }).start(() => {
        Animated.timing(logoOpacity, {
          toValue: 0,
          duration: 500,
        }).start(() => {
          navigation.navigate('Home');
        });
      });
    });
  };

  useEffect(() => {
    Animated.timing(fadeMargin, {
      toValue: 100,
      duration: 1500,
    }).start(() => {
      setLoading(true);
    });
  }, []);

  useEffect(() => {
    if (loading) {
      Animated.timing(fadeOpacity, {
        toValue: 1,
        duration: 500,
      }).start(() => {
        setTimeout(() => {
          closeAll();
        }, 1000);
      });
    }
  }, [loading]);
  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../../../assets/images/logo.png')}
        style={[styles.logo, {marginBottom: fadeMargin, opacity: logoOpacity}]}
        resizeMode="contain"
      />
      {loading && (
        <Animated.Text style={[styles.welcome, {opacity: fadeOpacity}]}>
          Welcome!
        </Animated.Text>
      )}
    </View>
  );
}
