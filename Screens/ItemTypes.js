// import { StyleSheet, Text, View } from 'react-native';
// import { FlatList } from 'react-native-gesture-handler';

// const Item_Types = ['Electronics', 'Toys', 'Sports', 'Grocery']

// const ItemTypes = (props) => {
//     return (
//         <FlatList
//                 data = {ItemTypes} //provide source of data/where data is coming from
//         >

//         </FlatList>
//     )
// }

// export default ItemTypes;


import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
// import { useContext } from 'react';
// import ItemContext from '../Context/StoreContext.js';

import { useSelector } from 'react-redux';


//const ItemTypes = (props) instead of this we can destructure again, specify objects as is commonly preferred.
const ItemTypes = ({navigation, route}) => {

    // const navigation = props.navigation; {/* extracting these two objects from the local variable*/ }
    // const route = props.route;

    //const [IType, IList] = useContext(ItemContext); now we destructure as object not array thus use of {}

    // const {Categories, ListofProducts, addProductFn} = useContext(ItemContext);

    // const {Categories} = useContext(ItemContext);

    const {ListofCategories} = useSelector ( (state) => state.itemData );

    return (
       <View style = { { backgroundColor: 'lightblue' } }>
            <FlatList
                data = {ListofCategories}
                keyExtractor = { (category) => category }
                renderItem = { ( {item} ) => { {/* 
                    specifying by destructuring that we are only displaying the item*/}
                    //console.log(item);

                    return (
                        <TouchableOpacity onPress = { () => {navigation.navigate('List of Cars', {itemCategory : item})} }>

                            <View style = {styles.itemStyle}>
                                <Text style={styles.textStyle}> {item} </Text>
                            </View>

                        </TouchableOpacity>
                    );
                }}
                numColumns={2}
            >    
            </FlatList>
        </View>
    );
};

export default ItemTypes;


const styles = StyleSheet.create({

    // container: {
    //  flex: 1,
    //  backgroundColor: '#fff',
    //  alignItems: 'center',
    //  justifyContent: 'center',
    // }

    itemStyle: {
        width: 150,
        height: 150,
        borderWidth: 2,
        borderColor: 'gray',
        margin: 16,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'

    },

    textStyle: {
        fontSize: 16,
        fontWeight: 'bold'
    }
   
   });

