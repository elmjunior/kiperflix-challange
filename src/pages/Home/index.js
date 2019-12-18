import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Animated} from 'react-native';
import {connect} from 'react-redux';
import * as AppActions from '../../store/actions/app';
import styles from './styles';
import Loading from '../../components/Loading';
import ListItem from '../../components/ListItem';
import api from '../../services/api';
import Header from '../../components/Header';

function Home({navigation, loadActiveItem}) {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  // Loads the movie list as soon as the component is mounted
  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    // Chek if app is not fetching results
    if (loading) return;

    if (!loading) {
      setLoading(true);

      // Results from API using de page param for infinite scrolling feature
      const response = await api.get(`/movie/upcoming?page=${page}`);
      const {data} = response;

      await setItems([...items, ...data.results]);
      await setPage(page + 1);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  };

  // Set clicked item as Active Movie and navegates to details page
  const handleClick = item => {
    loadActiveItem(item);
    navigation.navigate('MovieDetails', {
      item: item,
    });
  };

  // Animation setting for header when scrolling page
  const HEADER_MIN_HEIGHT = 50;
  const HEADER_MAX_HEIGHT = 180;
  const scrollYAnimatedValue = new Animated.Value(0);

  const headerHeight = scrollYAnimatedValue.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  return (
    <SafeAreaView style={styles.container}>
      <Header headerHeight={headerHeight}></Header>
      <FlatList
        onScroll={Animated.event([
          {nativeEvent: {contentOffset: {y: this.scrollYAnimatedValue}}},
        ])}
        scrollEventThrottle={16}
        style={styles.list}
        data={items}
        renderItem={({item}) => (
          <ListItem
            item={item}
            handleClick={() => {
              handleClick(item);
            }}></ListItem>
        )}
        numColumns={2}
        onEndReached={load}
        onEndReachedThreshold={0.1}
        ListFooterComponent={Loading}
      />
    </SafeAreaView>
  );
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, AppActions)(Home);
