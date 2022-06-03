import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet,Text } from 'react-native';
import Colors from '../../constants/colors';

const DeleteCartItem = props =>{
    return(
        <Icon.Button 
        name="trash" 
        backgroundColor='red' 
        style={styles.button}
        onPress={props.onDelete}
        >
            <Text style={styles.text}>Delete</Text>
        </Icon.Button>
    );
}

const styles = StyleSheet.create({
    button:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    text:{
        color:'white',
        fontSize:17,
    }
})

export default DeleteCartItem;
