import { StyleSheet, FlatList, Image, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { productsSlice } from '../store/productsSlice';

const ProductsScreen = ({ navigation }) => {
  // const navigation = useNavigation();

  const dispatch =  useDispatch();
  const products = useSelector((state) => state.products.products)
    return (
        <FlatList 
           data={products}
           renderItem={({ item }) =>
            <Pressable 
            onPress={() => {
              dispatch(productsSlice.actions.setSelectedProduct(item.id))
              navigation.navigate('Product Details')
            }}
            style={itemStyle.itemContainer}>
              <Image
                  source={{uri: item.image}}
                  style={itemStyle.image}
               />
            </Pressable>
           }
           numColumns={2}
        />
    );
}; 


const itemStyle = StyleSheet.create({
    image: {
      width:'100%',
      aspectRatio:1
    },
    itemContainer: {
      width: '50%',
      padding: 1
    }
  });

  export default ProductsScreen;