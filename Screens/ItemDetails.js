// import { useLayoutEffect } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import { Feather } from '@expo/vector-icons';


// const ItemDetails = ({navigation, route}) => {

//     const ProductItem = route.params.itemProduct;

//     useLayoutEffect( () => {
//         navigation.setOptions( {
//                 headerRight : () => {
//                     return (
//                         <TouchableOpacity onPress={ () => {navigation.navigate('Edit Item', {itemProduct: ProductItem} )} }>
//                             <Feather name='edit' size={24} color="black" />
//                         </TouchableOpacity>
//                   );
//                 }
              

//         });

//     }, []);

//     // const ProductItem = route.params.itemProduct;

//     return (
//         <Text> 
//             {ProductItem.category}, 
//             {ProductItem.name}, 
//             {ProductItem.price}, 
//             {ProductItem.desc}, 
//             {ProductItem.photo}
//         </Text>
//     )
// }

// export default ItemDetails;

import { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const ItemDetails = ({ navigation, route }) => {

    const ProductItem = route.params.itemProduct;

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <TouchableOpacity onPress={() => { navigation.navigate('Edit Item', { itemProduct: ProductItem }) }}>
                        <Feather name='edit' size={24} color="black" />
                    </TouchableOpacity>
                );
            }
        });
    }, []);

    return (
        
        <View>
        
            {/* <Text> {ProductItem.category}, {ProductItem.name}, {ProductItem.price}, {ProductItem.desc} </Text> */}
            <Text style = {styles.textStyle}> Name: {ProductItem.name} </Text>
            <Text style = {styles.textStyle}> Price: ${ProductItem.price} </Text>
            <Text style = {styles.textStyle}> Description: {ProductItem.desc} </Text>

            <Image 
                style = {styles.imgStyle} 
                source = {ProductItem.itemImage}
                resizeMode='contain'
            />

            <Text style = {styles.textStyle}> 
                Rating: {ProductItem.rating}
                <AntDesign name='star' size={20} color='orange'/>

            </Text>
            <Text style = {styles.textStyle}> Review Count: {ProductItem.reviewCount} </Text>

        </View>
    );
}


export default ItemDetails;


const styles = StyleSheet.create({

    imgStyle : {
        width: 300,
        height: 250,
        alignSelf: 'center',
        marginVertical: 20,
        borderRadius: 15,
        borderColor: '#ccc',
        borderWidth: 1,
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },

    textStyle : {
        fontSize: 16,
        fontWeight: 'bold',
        margin: 10
    }
}

)