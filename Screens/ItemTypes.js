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
import { useEffect, useState } from 'react';

// import { useContext } from 'react';
// import ItemContext from '../Context/StoreContext.js';

// import { useSelector } from 'react-redux';
import { getTypeHelper } from '@/Utility/Helper';

//const ItemTypes = (props) instead of this we can destructure again, specify objects as is commonly preferred.
const ItemTypes = ({navigation, route}) => {

    // const navigation = props.navigation; {/* extracting these two objects from the local variable*/ }
    // const route = props.route;

    //const [IType, IList] = useContext(ItemContext); now we destructure as object not array thus use of {}

    // const {Categories, ListofProducts, addProductFn} = useContext(ItemContext);

    // const {Categories} = useContext(ItemContext);

    // const {ListofCategories} = useSelector ( (state) => state.itemData );

    const [ ListofCategories, setCategories ] = useState([]);

    useEffect(() => {
        const fetchTypes = async () => {
            const typesOfCars = await getTypeHelper();
            setCategories(typesOfCars);

        };

        fetchTypes();
    }, []);


    return (
       <View style = { { backgroundColor: '#FADBD8', paddingVertical: 10 } }>
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
    itemStyle: {
      width: 150,
      height: 150,
      borderWidth: 2,
      borderColor: '#F5B7B1',
      backgroundColor: '#FDEDEC', 
      margin: 16,
      borderRadius: 16,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 4,
    },
    textStyle: {
      fontSize: 16,
      fontWeight: 'bold',
    //   fontWeight: 'condensedBold',
      color: 'black',
    },

});
  