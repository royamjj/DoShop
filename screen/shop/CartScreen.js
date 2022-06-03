import { View ,Text, Image, FlatList, Button, StyleSheet} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Colors from "../../constants/colors";
import CartItem from "../../components/shop/CartItem";
import * as CartActions from '../../store/actions/CartAction';

const CartScreenPage = props =>{
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const CART = cart.items;
    let keys = Object.keys(cart.items);
    keys.sort();
    let items = [];
    keys.forEach((i)=>{
        items.push({
            id:i,
            title:cart.items[i].title,
            price:cart.items[i].price,
            quantity:cart.items[i].quantity,
            sum:cart.items[i].sum,
        })
    })
    return(
        <View style={sytles.container}>
            <View style={sytles.summary}>
                <Text style={sytles.total}>Total: <Text style={sytles.price}>${cart.totalAmount.toFixed(2)}</Text></Text>
                <Button disabled={items.length===0} title="Order now" color={Colors.primary}/>
            </View>
            <FlatList
            showsVerticalScrollIndicator={false}
                data={items}
                renderItem={data=>
                <CartItem
                    key={data.item.id}
                    id={data.item.id}
                    quantity={data.item.quantity}
                    title={data.item.title}
                    amount={data.item.sum}
                    onDelete={()=>{
                        dispatch(CartActions.deleteFromCart(data.item.id))
                    }}
                />
                }
            />
        </View>
    );

}

const sytles = StyleSheet.create({
    container:{
        margin:20,
        marginBottom:100,
    },
    summary:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        margin:20,
        padding:15,
        shadowColor:'#706f6f',
        shadowOffset:0.1,
        shadowRadius:10,
        elevation:5,
        borderRadius:5,
    },
    total:{
        fontSize:25,
        fontWeight:'500',
    },
    price:{
        color:'#34ba42'
    },
});


const styling={
    title:'Cart',
    headerStyle:{
        backgroundColor : Colors.primary,
    },
    headerTintColor: 'white',
}

const CartScreen = {
    CartScreenPage,
    styling,
}
export default CartScreen;
