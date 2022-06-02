import ProductOverview from '../screen/shop/ProductOverviewScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetail from '../screen/shop/ProductDetailsScreen';
// const ProductsNavigator = createStackNavigator({
//     ProductOverview:ProductOverviewScreen,
// }, {
//     defaultNavigationOptions:{
//         headerStyle :{
//             backgroundColor : Platform.OS==='android' ? Colors.primary :'',
//         },
//         headerTintColor: Platform.OS==='android' ? 'white' :Colors.primary,
//     }
// });
const Stack = createNativeStackNavigator();

function ProductsNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
        name="Home" 
        component={ProductOverview.ProductOverviewScreen} 
        options={ProductOverview.styling} />
        <Stack.Screen 
        name="Details" 
        component={ProductDetail.ProductDetailScreen} 
        options={ProductDetail.styling}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ProductsNavigator;