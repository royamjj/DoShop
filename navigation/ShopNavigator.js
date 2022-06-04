import 'react-native-gesture-handler';
import ProductOverview from '../screen/shop/ProductOverviewScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetail from '../screen/shop/ProductDetailsScreen';
import CustomHeaderButton from '../components/UI/HeaderButton';
import CartScreen from '../screen/shop/CartScreen';
import OrderScreen from '../screen/shop/OrdersScreen';
import { createDrawerNavigator } from '@react-navigation/drawer'
import Colors from '../constants/colors';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen =  createNativeStackNavigator();
const DetailsStackScreen = createNativeStackNavigator();

const HomeScreen = ({navigation})=>{
return <HomeStackScreen.Navigator initialRouteName='Home'>
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
        options={CartScreen.styling}
         />
         <Stack.Screen 
        name="Order"
        component={OrderScreen} 
         />
      </HomeStackScreen.Navigator>
}


function ProductsNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="New">
        <Drawer.Screen name="Ho" component={HomeScreen} />
        <Drawer.Screen name="Orders" component={OrderScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default ProductsNavigator;

