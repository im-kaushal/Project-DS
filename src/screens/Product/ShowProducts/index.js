import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, FlatList, ActivityIndicator} from 'react-native';
import EmptyScreen from '../../../components/Empty';
import {useDispatch} from 'react-redux';
import styles from '../../../constants/styles';
import {getFakeProducts} from '../../../api/Service';
import RenderProducts from '../RenderProducts';
import Header from '../../../components/Header';
import BackHandling from '../../../utils/BackHandling';

const ProductPage = ({navigation}) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getFakeProducts();
        setItems(data);
        setIsLoading(false);
      } catch (error) {
        console.log('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <BackHandling />
      <Header title="Product List" />
      {isLoading ? (
        <View style={styles.activityIndicator}>
          <ActivityIndicator />
        </View>
      ) : (
        <FlatList
          data={items}
          keyExtractor={({id}) => id.toString()}
          ListEmptyComponent={EmptyScreen}
          renderItem={({item}) => (
            <RenderProducts
              item={item}
              navigation={navigation}
              dispatch={dispatch}
            />
          )}
        />
      )}
    </SafeAreaView>
  );
};
export default ProductPage;
