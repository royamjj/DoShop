import {FlatList, Text, View, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Colors from '../../constants/colors';


import * as CartActions from '../../store/actions/CartAction';
import ProductItem from '../../components/shop/ProductItem';


const ProductOverviewScreen = props => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.availableProducts);
    return (
        <View style={styles.container}>
        <FlatList data={products} 
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

