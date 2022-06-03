import { StyleSheet, Text, View, Button, Image } from "react-native";
import PRODUCTS from "../../data/dummyData";
import DeleteCartItem from "../UI/DeleteCartItem";
const CartItem = props =>{
    let link = PRODUCTS.filter((item)=>item.title===props.title)
    return(
        <View style={styles.container}>
            <View style={styles.one}>
                <Image source={{uri:link[0]["imageUrl"]}} style={styles.image} />
            </View>
            <View style={styles.two}>
                <Text style={styles.quant}>Quantity: {props.quantity}</Text>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.amount}>Total: ${props.amount.toFixed(2)}</Text>
                <DeleteCartItem onDelete={props.onDelete}/>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container:{
        margin:10,
        shadowColor:'#706f6f',
        shadowOffset:0.1,
        shadowRadius:10,
        elevation:3,
        borderRadius:5,
        padding:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
    },
    image:{
        width:120,
        height:120,
    },
    one:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    two:{
        flexDirection:'column',
        justifyContent:'space-between',
        borderLeftWidth:0.5,
        padding:7,
    },
    quant:{
        fontSize:17,
        padding:5,
    },
    title:{
        fontSize:17,
        padding:5,
        alignContent:'center',
        width:100
    },
    amount:{
        fontSize:17,
        padding:5,
        fontWeight:"500",
    }
});

export default CartItem;