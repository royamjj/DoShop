import ProductOverview from '../screen/shop/ProductOverviewScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetail from '../screen/shop/ProductDetailsScreen';
import CustomHeaderButton from '../components/UI/HeaderButton';
import CartScreen from '../screen/shop/CartScreen';
const Stack = createNativeStackNavigator();

function ProductsNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
        name="Home" 
        component={ProductOverview.ProductOverviewScreen} 
        options={({ navigation }) => ({
          ...ProductOverview.styling,
          headerRight: () => (
            <CustomHeaderButton onPress={() => navigation.navigate('Cart')}/>
          ),
        })}
        />
        <Stack.Screen 
        name="Details" 
        component={ProductDetail.ProductDetailScreen} 
        options={ProductDetail.styling}
         />
         <Stack.Screen 
        name="Cart" 
        component={CartScreen.CartScreenPage} 
        options={
          CartScreen.styling
        }
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ProductsNavigator;

