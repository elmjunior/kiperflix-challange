import React, {useEffect} from 'react';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
  Animated,
} from 'react-native';
import Header from '../../components/Header';
import ItemBottom from '../../components/ItemBottom';
import WebsiteButton from '../../components/WebsiteButton';
import BottomButtonsHolder from '../../components/BottomButtonsHolder';
import Genres from '../../components/Genres';
import ItemExtras from '../../components/ItemExtras';
import Popularity from '../../components/Popularity';
import ProductionCompanies from '../../components/ProductionCompanies';

import {connect} from 'react-redux';
import * as AppActions from '../../store/actions/app';

import styles from './styles';
import {showImage} from '../../services/images';
import format from 'date-fns/format';

function MovieDetails({app: {activeItem}, loadActiveItem, navigation}) {
  useEffect(() => {
    //Function to prevent page loading if there are no active item parameters
    if (!activeItem.title) {
      // navigation.navigate('Home');
    }

    return () => {
      loadActiveItem(false);
    };
  }, []);

  //Check if the Movie has a Tagline, avoinding layout errors
  const _tagline = () => {
    if (activeItem.tagline) {
      return <Text style={styles.tagline}>{activeItem.tagline}</Text>;
    } else return <></>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header left headerHeight={100} navigation={navigation}></Header>
      {activeItem && activeItem.title ? (
        <>
          <ScrollView
            onScroll={Animated.event([
              {nativeEvent: {contentOffset: {y: this.scrollYAnimatedValue}}},
            ])}
            contentContainerStyle={styles.scrollView}
            scrollEventThrottle={16}>
            <Image
              style={styles.image}
              source={{uri: showImage(activeItem.backdrop_path, 500)}}
              resizeMode={'cover'}
            />
            <View style={styles.content}>
              <Text style={styles.title}>{activeItem.title}</Text>

              <_tagline></_tagline>

              <Text style={styles.text}>
                Release Date: {format(activeItem.release_date, 'MM/DD/YYYY')}
              </Text>

              <ItemBottom item={activeItem}></ItemBottom>
              <Genres items={activeItem.genres}></Genres>

              <Text style={styles.overview}>{activeItem.overview}</Text>
              <Popularity item={activeItem}></Popularity>
              <ItemExtras item={activeItem}></ItemExtras>
              {activeItem.production_companies &&
                activeItem.production_companies.length > 0 && (
                  <ProductionCompanies
                    items={
                      activeItem.production_companies
                    }></ProductionCompanies>
                )}
              <WebsiteButton item={activeItem}></WebsiteButton>
            </View>
          </ScrollView>
          <BottomButtonsHolder></BottomButtonsHolder>
        </>
      ) : (
        <ActivityIndicator></ActivityIndicator>
      )}
    </SafeAreaView>
  );
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, AppActions)(MovieDetails);
