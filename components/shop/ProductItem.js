import {Text, Image, StyleSheet, View, Button} from 'react-native';
import Colors from '../../constants/colors';



const ProductItem = props => {
    return(
        <View style={styles.container}>
            <Image source={{uri : props.image}} style={styles.image}/>
            <View style={styles.details}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.price}>${props.price.toFixed(2)}</Text>
            </View>
            <View style={styles.buttons}>
                <Button title='View Details' onPress={props.onDetail}/>
                <Button color='#d94e4e' title='To Cart' onPress={props.onAddToCart}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        shadowColor:'black',
        shadowOffset:0.26,
        shadowOffset:{width:0,height:2},
        shadowRadius:8,
        elevation:5,
        borderRadius:10,
        backgroundColor:Colors.background,
        height:300,
        margin:20,
    },
    image:{
        width:'100%',
        height:'60%',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    title:{
        fontSize:20,
        marginVertical:5,
        marginHorizontal:5,
    },
    price:{
        fontSize:25,
        color:'#888',
        marginHorizontal:5,
    },
    buttons:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal:80,
    },
    details:{
        alignItems:'center',
        paddingBottom:10
    }

});

export default ProductItem;