import {FlatList, Button, View, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Colors from '../../constants/colors';

import * as CartActions from '../../store/actions/CartAction';
import ProductItem from '../../components/shop/ProductItem';

let PROPS;
const ProductOverviewScreen = props => {
    function pass(props){
        PROPS=props;
    }
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.availableProducts);
    return (
        <View style={styles.container}>
        <FlatList
            showsVerticalScrollIndicator={false}
            data={products} 
            keyExtractor={pro => pro.id} 
            renderItem={data=>        
            <ProductItem 
                key={data.item.id} 
                price={data.item.price}
                image={data.item.imageUrl}
                title={data.item.title}
                onDetail={()=>props.navigation.navigate("Details",{data:data.item})}
                onAddToCart={()=>{
                    dispatch(CartActions.addToCart(data.item))
                }}
            />} />
        </View>
    );
}

const styling = {
    title:'All products',
    headerStyle:{
        backgroundColor : Colors.primary,
    },
    headerTintColor: 'white',
}

const ProductOverview = {
    ProductOverviewScreen,
    styling,
}

const styles = StyleSheet.create({
    backgroundColor:Colors.background,
})

export default ProductOverview;

