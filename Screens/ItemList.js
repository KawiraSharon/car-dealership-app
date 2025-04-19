import { useEffect, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';

// import { useContext } from 'react';
// import ItemContext from '../Context/StoreContext.js';

// import { useSelector, useDispatch } from 'react-redux';
// import { deleteItem } from '../store/Slice';

import { getItemHelper } from '../Utility/Helper';
import { deleteItemHelper } from '../Utility/Helper';

//const ItemList = (props) destructure again instead
const ItemList = ({navigation, route}) => {

    // const [IType, IList] = useContext(ItemContext);
    // const {Categories, ListofProducts} = useContext(ItemContext);
    // const { ListofProducts, delProductFn } = useContext(ItemContext);

    // const { ListofItems } = useSelector ( (state) => state.itemData );
    // state variable created to enable re-render the app

    const [ListofItems, setItemList] = useState([]);

    // const dispatch = useDispatch();

    useEffect( ()=> {

        getItemInfo();

    }, [route]);
    //removing the second arg, the empty array means useeffect runs every time component is rendered.  


    const getItemInfo = async() => {

        const data = await getItemHelper();
        // console.log(data);
        setItemList(data);

    }

    useLayoutEffect( () => {
        navigation.setOptions( {
                headerRight : () => {
                  return (
                        <TouchableOpacity onPress={ () => {navigation.navigate('Add Item')}}>
                            <AntDesign name="plussquare" size={24} color="black" />
                        </TouchableOpacity>
                  );
                }
              

        });

    }, []);

    //the second argument is not provided for
    //to avoid rerunning the component take 2nd arg as empty[] to render just once
    //can also be [a, b] , when comp is first rendered and when variables of dependency array change

    //console.log(props.route.params);
    //we first store the selected categories in variable

    const selectedType = route.params.itemCategory;

    const itemProducts = ListofItems.filter( (item) => item.category === selectedType );

    console.log(itemProducts);

    return (
        <View style = {styles.container} >
            <FlatList
                        data = {itemProducts}
                        // keyExtractor = { (item) => item.id } the extractor should also return a string.
                        keyExtractor={(item) => String(item.id)}
                        renderItem = { ( {item} ) => { {/* 
                            specifying by destructuring that we are only displaying the item*/}
                            //console.log(item);
            
                            return (
                                <View style = {styles.itemStyle}>
                                    <TouchableOpacity onPress = { () => {navigation.navigate('Item Details', {itemProduct: item})} }>
                                        <Text > {item.name} </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={ 

                                        () => {
                                            // const delProd = delProductFn();
                                            // delProd(item.id)
                                            // dispatch(deleteItem(item.id)); this needs to pass the whole item
                                            // dispatch(deleteItem(item.id));

                                            deleteItemHelper(item.id).then(
                                                //refreshing the list
                                                navigation.navigate('List of Cars', { itemCategory: item.category })
                                            );
                                        }
                                    }>
                                    <AntDesign name="delete" size={24} color="black" />
                                    </TouchableOpacity>
                                </View>
                            );
                        }}
                    >    
                    </FlatList>
                </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDEDEC', // soft pink background for entire screen
        paddingTop: 10,
        paddingHorizontal: 8,
      },
    itemStyle: {
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: '#F5B7B1', // soft pink border
      backgroundColor: '#FDEDEC', // pink card
      padding: 10,
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 10,
      marginVertical: 5,
      borderRadius: 12,
      elevation: 3,
    },

});
  
export default ItemList;

