import {View, Text, Image, StyleSheet, Button, ScrollView} from 'react-native';
import Colors from '../../constants/colors';
import { useDispatch } from 'react-redux';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import * as CartActions from '../../store/actions/CartAction';

const ProductDetailScreen = props =>{
    const temp = props.route.params.data;
    const dispatch = useDispatch();
    return(
        <ScrollView>
            <Image style={styles.image} source={{uri:temp['imageUrl']}} />
            <View style={styles.buttonCont}>
                <Button 
                color={Colors.primary} 
                title="Add to Cart" 
                onPress={()=>{
                    dispatch(CartActions.addToCart(temp))
                }}/>
            </View>
            <Text style={styles.price}>${temp['price'].toFixed(2)}</Text>
            <Text style={styles.description}>{temp['description']}</Text>
        </ScrollView>
    );
}

const styling = {
    title:'Details',
    headerStyle:{
        backgroundColor : Colors.primary,
    },
    headerTintColor: 'white',
}

const ProductDetail={
    ProductDetailScreen,
    styling
}


const styles = StyleSheet.create({
    image:{
        width:'100%',
        height: 300,
    },
    price:{
        fontSize:30,
        color:'#333333',
        textAlign:'center',
        marginVertical:20,
    },
    description:{
        fontSize: 18,
        marginHorizontal:20,
    },
    buttonCont:{
        margin:10,
        alignItems:'center',
    }
})

export default ProductDetail;