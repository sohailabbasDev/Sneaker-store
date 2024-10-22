import { StyleSheet, View, Image, FlatList, useWindowDimensions, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'
import product from '../data/product';
import { useSelector } from 'react-redux';

const ProductDetailsScreen = () => {
  const products = useSelector((state) => state.products.selectedProduct)
  const { width } = useWindowDimensions();
  return (
    <View>
        <ScrollView>
        <FlatList
           data={products.images}
           renderItem={({ item }) => (
               <Image
                  source={{ uri: item}}
                  style={{ width: width , aspectRatio:1}}
               />
           )}
           horizontal
           showsHorizontalScrollIndicator={false}
           pagingEnabled
        />
          <View style= {{padding:10}}>
            <Text style={detailScreenStyles.title}>{products.name}</Text>
            <Text style={detailScreenStyles.price}>${products.price}</Text>
            <Text style={detailScreenStyles.description}>{products.description}</Text>
          </View>
        </ScrollView>
        <Pressable style={detailScreenStyles.button}>
            <Text style={detailScreenStyles.buttonText}>Add to cart</Text>
        </Pressable>
    </View>
  );
};

const detailScreenStyles = StyleSheet.create({
    title: {
        fontSize: 34,
        fontWeight: '500',
        marginVertical: 10,
    },
    price: {
        fontWeight: '500',
        fontSize: 16,
        letterSpacing: 1.5,
    },
    description: {
        marginVertical: 10,
        fontSize: 18,
        lineHeight: 30,
        fontWeight: '300',
    },
    button: {
        position: 'absolute',
        backgroundColor: 'black',
        bottom: 25,
        width: '90%',
        alignSelf: 'center',
        padding:20,
        borderRadius: 100,
        alignItems: 'center',
    },
    buttonText: {
        color:'white',
        fontWeight:'500',
        fontSize:16
    }
});

export default ProductDetailsScreen;