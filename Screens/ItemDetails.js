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
        
        <View style = {styles.containerStyle} >
        
            {/* <Text> {ProductItem.category}, {ProductItem.name}, {ProductItem.price}, {ProductItem.desc} </Text> */}
            {/* <Text style = {styles.textStyle}> Name: {ProductItem.name} </Text>
            <Text style = {styles.textStyle}> Price: ${ProductItem.price} </Text>
            <Text style = {styles.textStyle}> Description: {ProductItem.desc} </Text> */}
            <View style={styles.textRow}>
                <Text style={styles.label}>Name: </Text>
                <Text style={styles.value}>{ProductItem.name}</Text>
            </View>

            <View style={styles.textRow}>
                <Text style={styles.label}>Price: </Text>
                <Text style={styles.value}>${ProductItem.price}</Text>
            </View>

            <View style={styles.textRow}>
                <Text style={styles.label}>Description: </Text>
                <Text style={styles.value}>{ProductItem.desc}</Text>
            </View>


            {/* <Image 
                style = {styles.imgStyle} 
                source = {ProductItem.itemImage}
                resizeMode='contain'
            /> */}

            <View style={styles.imgBox}>
                <Image
                    style = {styles.imgStyle}
                    source={ {uri: ProductItem.image_url} }
                    resizeMode="contain"
                />
            </View>

            {/* <Text style = {styles.textStyle}> 
                Rating: {ProductItem.rating}
                <AntDesign name='star' size={20} color='orange'/>

            </Text>
            <Text style = {styles.textStyle}> Review Count: {ProductItem.review_count} </Text> */}
            <View style={styles.textRow}>
                <Text style={styles.label}>Rating: </Text>
                <Text style={styles.value}>{ProductItem.rating} </Text>
                <AntDesign name='star' size={20} color='orange' />
            </View>

            <View style={styles.textRow}>
                <Text style={styles.label}>Review Count: </Text>
                <Text style={styles.value}>{ProductItem.review_count}</Text>
            </View>


        </View>
    );
}


export default ItemDetails;


const styles = StyleSheet.create({

        containerStyle: {
            flex: 1,
            backgroundColor: '#FFE4E1', // soft pink
            padding: 10,
        },
        textStyle : {
            fontSize: 16,
            fontWeight: 'bold',
            margin: 10
        },
        imgBox: {
            width: 320,
            height: 220,
            backgroundColor: '#FDEDEC',
            borderRadius: 20,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 5,
            elevation: 6,
            marginVertical: 20,
        },
        imgStyle: {
            width: '95%',
            height: '90%',
            borderRadius: 15,
            resizeMode: 'cover',
        },
        textRow: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginHorizontal: 10,
            marginBottom: 5,
        },
        label: {
            fontSize: 16,
            fontWeight: 'bold',
            color: 'black',
        },
        value: {
            fontSize: 16,
            fontWeight: 'heavy',
            color: 'black',
        },
          
    }

)