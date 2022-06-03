import Icon from 'react-native-vector-icons/FontAwesome';;

import Colors from '../../constants/colors';

const CustomHeaderButton = props =>{
    return(
        <Icon.Button 
        name="shopping-cart"
        backgroundColor={Colors.primary}
        onPress={props.onPress}
        />
    );
}
export default CustomHeaderButton;



