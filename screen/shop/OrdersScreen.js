import { View, FlatList, Text, Button } from "react-native";
import { useSelector } from "react-redux";


const OrderScreen = props =>{
    const orders = useSelector(state => state.orders.orders);
    return(
        <FlatList
        data={orders}
        renderItem={data=><Text>{data.item.totalAmount}</Text>}/>
    );
}


export default OrderScreen;
