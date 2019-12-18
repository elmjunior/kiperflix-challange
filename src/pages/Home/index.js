import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import * as AppActions from '../../store/actions/app';
import styles from './styles';
import Header from '../../components/Header';

function Home({navigation, loadActiveItem}) {
  // Loads the movie list as soon as the component is mounted

  return (
    <SafeAreaView style={styles.container}>
      <Header headerHeight={100}></Header>
    </SafeAreaView>
  );
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, AppActions)(Home);
