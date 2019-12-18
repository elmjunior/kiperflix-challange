import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {connect} from 'react-redux';
import * as AppActions from '../../store/actions/app';
import styles from './styles';
import Header from '../../components/Header';
import ListItem from '../../components/ListItem';
import Loading from '../../components/Loading';
import api from '../../services/api';

function Home({navigation, loadActiveItem}) {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  // Loads the movie list as soon as the component is mounted
  useEffect(() => {
    load();
  }, []);

  // Set clicked item as Active Movie and navegates to details page
  const handleClick = item => {
    loadActiveItem(item);
    navigation.navigate('MovieDetails', {
      item: item,
    });
  };

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

  return (
    <SafeAreaView style={styles.container}>
      <Header headerHeight={100}></Header>

      <FlatList
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
