// // // import { StyleSheet, Text, View } from 'react-native';

// // // const EditItem = ({route}) => {
// // //     const ProductItem = route.params.itemProduct;

// // //     return (
// // //         <Text> 
// // //             {ProductItem.category}, 
// // //             {ProductItem.name}, 
// // //             {ProductItem.price}, 
// // //             {ProductItem.desc}, 
// // //             {ProductItem.photo}
// // //         </Text>
// // //     )
// // // }

// // // export default EditItem;


// import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
// import { useContext } from 'react';

// import ItemContext from '../Context/StoreContext.js';


// const EditItem = ({navigation, route}) => {

//     const ProductItem = route.params.itemProduct;

//     // const {Categories, ListofProducts, addProductFn} = useContext(ItemContext);


//     const { editProductFn } = useContext(ItemContext);

//     const editprod = editProductFn(); 


//     return (
//         <View>

//             <Text>Item Type:</Text>
//             <TextInput style = {styles.inputStyle}
//                 defaultValue={ProductItem.category}
//                 onChangeText= { (newValue) => ProductItem.category = newValue}
//             />

//             <Text>Item Name:</Text>
//             <TextInput style = {styles.inputStyle}
//                 defaultValue={ProductItem.name}
//                 onChangeText= { (newValue) => ProductItem.name = newValue}
//             />

//             <Text>Item Price:</Text>
//             <TextInput style = {styles.inputStyle}
//                 defaultValue={ProductItem.price.toString()}
//                 onChangeText= { (newValue) => ProductItem.price = newValue} 
//             />

//             <Text>Item Description:</Text>
//             <TextInput style = {styles.inputStyle}
//                 defaultValue={ProductItem.desc}
//                 onChangeText= { (newValue) => ProductItem.desc = newValue}
//             />


//             <Button title = 'Save Changes' onPress = { () => {
//                                                                 // console.log(ProductItem);
//                                                                 editprod(ProductItem);
//                                                                 navigation.navigate('List of Cars', {itemCategory : ProductItem.category})
//                                                         }
//                                                 }
//             />
//         </View>
//     );


// }

// const styles = StyleSheet.create({
//     inputStyle : {
//         borderWidth : 1,
//         borderColor : 'black',
//         height : 65
//     }
// })

// export default EditItem;

// import React, { useState } from 'react';
// import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

// // import { useContext, useState } from 'react';
// // import ItemContext from '../Context/StoreContext.js';

// import { useDispatch } from 'react-redux';
// import { editItem } from '@/store/Slice';


// const EditItem = ({navigation, route}) => {

//     const dispatch = useDispatch();

//     const ProductItem = route.params.itemProduct;

//     // initially, productItem only suggests that it is of read-only properties, and is immutable.
//     //approach selected; pick a  local state for each edited variable, update the state then avoid direct mutation. 
//     const [category, setCategory] = useState(ProductItem.category);
//     const [name, setName] = useState(ProductItem.name);
//     const [price, setPrice] = useState(ProductItem.price.toString());
//     const [desc, setDesc] = useState(ProductItem.desc);

//     // const { editProductFn } = useContext(ItemContext);
//     // const editprod = editProductFn(); 

//     return (
//         <View>

//             <Text>Item Type:</Text>
//             <TextInput 
//                 style={styles.inputStyle}
//                 value={category}
//                 onChangeText={(newValue) => setCategory(newValue)}
//             />

//             <Text>Item Name:</Text>
//             <TextInput 
//                 style={styles.inputStyle}
//                 value={name}
//                 onChangeText={(newValue) => setName(newValue)}
//             />

//             <Text>Item Price:</Text>
//             <TextInput 
//                 style={styles.inputStyle}
//                 value={price}
//                 keyboardType="numeric"
//                 onChangeText={(newValue) => setPrice(newValue)} 
//             />

//             <Text>Item Description:</Text>
//             <TextInput 
//                 style={styles.inputStyle}
//                 value={desc}
//                 onChangeText={(newValue) => setDesc(newValue)}
//             />

//             <Button 
//                 title="Save Changes" 
//                 onPress={() => {
//                     const updatedProduct = {
//                         ...ProductItem,
//                         category,
//                         name,
//                         price: parseFloat(price),
//                         desc,
//                     };

//                     // editprod(updatedProduct);
//                     dispatch(editItem(updatedProduct));

//                     navigation.navigate('List of Cars', { itemCategory: updatedProduct.category });
//                 }}
//             />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     inputStyle: {
//         borderWidth: 1,
//         borderColor: 'black',
//         height: 65,
//         padding: 10,
//     }
// })

// export default EditItem;



import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

// import { useContext, useState } from 'react';
// import ItemContext from '../Context/StoreContext.js';

// import { useDispatch } from 'react-redux';
// import { editItem } from '@/store/Slice';
import { editItemHelper } from '@/Utility/Helper';

const EditItem = ({navigation, route}) => {

    // const dispatch = useDispatch();
    
    // Getting the item details from route parameters
    const ProductItem = route.params.itemProduct;

    // Initially, productItem only suggests that it is of read-only properties, and is immutable.
    // Approach selected: use a local state for each edited variable, update the state, and avoid direct mutation.
    const [category, setCategory] = useState(ProductItem.category);
    const [name, setName] = useState(ProductItem.name);
    const [price, setPrice] = useState(ProductItem.price.toString());
    const [desc, setDesc] = useState(ProductItem.desc);

    return (
        <ScrollView contentContainerStyle={styles.containerStyle}>
            <Text style={styles.textStyle}>Item Type:</Text>
            <TextInput 
                style={styles.inputStyle}
                value={category}
                onChangeText={(newValue) => setCategory(newValue)}
            />

            <Text style={styles.textStyle}>Item Name:</Text>
            <TextInput 
                style={styles.inputStyle}
                value={name}
                onChangeText={(newValue) => setName(newValue)}
            />

            <Text style={styles.textStyle}>Item Price:</Text>
            <TextInput 
                style={styles.inputStyle}
                value={price}
                keyboardType="numeric"
                onChangeText={(newValue) => setPrice(newValue)} 
            />

            <Text style={styles.textStyle}>Item Description:</Text>
            <TextInput 
                style={styles.inputStyle}
                value={desc}
                onChangeText={(newValue) => setDesc(newValue)}
                multiline
            />

            <View style={styles.buttonContainer}>
                <Button 
                    title="Save Changes" 
                    onPress={() => {
                        const updatedProduct = {
                            ...ProductItem,
                            category,
                            name,
                            price: parseFloat(price), 
                            desc,
                        };

                        // dispatch(editItem(updatedProduct));

                        editItemHelper(updatedProduct.id, updatedProduct).then(

                        navigation.navigate('List of Cars', { itemCategory: updatedProduct.category })

                        );

                    }}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({

    containerStyle: {
        flex: 1,
        backgroundColor: '#FDEDEC', 
    },
    inputStyle: {
        borderWidth: 1,
        borderColor: 'black',
        height: 40,
        width: 300,
        borderRadius: 10,
        margin: 5,
        alignSelf: 'center',
        paddingLeft: 10,
    },
    textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        margin: 5,
        marginLeft: 45,
        color: 'black'
    },
    buttonContainer: {
        marginTop: 30,
        width: 200,
        alignSelf: 'center',
    },
      

});

export default EditItem;
