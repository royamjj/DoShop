import 'react-native-gesture-handler'
import {combineReducers, legacy_createStore as createStore} from 'redux';
import {Provider} from 'react-redux';
import  ShopNavigator   from './navigation/ShopNavigator';
import productReducer from './store/reducers/productReducer.js';
import CartReducer from './store/reducers/CartReducer';
import orderReducer from './store/reducers/orderReducer.js';

const rootReducer = combineReducers({
  products:productReducer,
  cart: CartReducer,
  orders:orderReducer,
})

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}


