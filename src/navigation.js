import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductsScreen from './screens/ProductScreen';
import ShoppingCart from './screens/ShoppingCart';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import { Pressable, Text,} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ contentStyle: { backgroundColor: 'white' } }}>
                <Stack.Screen 
                   name='Products' 
                   component={ProductsScreen}
                   options={({ navigation }) => (
                    {headerRight: () => 
                        <Pressable onPress={() => navigation.navigate('Cart')} style={{flexDirection:'row'}}>
                           <FontAwesome5 name="shopping-cart" size={18} color="gray"/>
                           <Text style={{marginLeft: 5, fontWeight:'500'}}>1</Text>
                        </Pressable>}
                   )}
                />
                <Stack.Screen name='Product Details' component={ProductDetailsScreen}/>
                <Stack.Screen 
                  name='Cart' 
                  component={ShoppingCart}
                  options={{ presentation: 'modal' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;