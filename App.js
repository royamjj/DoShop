import styles from './styles.js';
import {combineReducers, legacy_createStore as createStore} from 'redux';
import {Provider} from 'react-redux';

import  ShopNavigator   from './navigation/ShopNavigator';
import productReducer from './store/reducers/productReducer.js';
import CartReducer from './store/reducers/CartReducer';
const rootReducer = combineReducers({
  products:productReducer,
  cart: CartReducer,
})

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}


