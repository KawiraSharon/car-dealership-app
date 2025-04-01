// import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

// // import { useContext } from 'react';
// // import ItemContext from '../Context/StoreContext.js';
// // we don't need useSelector as we don't need data here, just to update changes which uses useDispatch

// import { useDispatch } from 'react-redux';
// import { addItem } from '@/store/Slice';

// const AddItem = ({navigation}) => {

//     // create a dispatch var
//     const dispatch = useDispatch();

//     // const {Categories, ListofProducts, addProductFn} = useContext(ItemContext);
//     // const { addProductFn } = useContext(ItemContext);

//     // console.log(addProductFn); next line we invoke, execute addprodhandler,
//     // const addprod = addProductFn(); 
//     // console.log(addprod);

//     // const newProduct = {
//     //     id: 1111,
//     //     category: 'Used Cars',
//     //     name: 'Used Mazda Atenza',
//     //     price: 21650,
//     //     desc: 'Reliable Recently serviced.',
//     //     // photo: require('../assets/UsedMazdaAtenza.jpg'),
//     // }
    
    
//     //provide form for user to enter item details,
//     // construct object from all values together an dinstead of the hard coded object we pass the object to the fn

//     // let icategory, iname, iprice, idesc;

//     let newItemValue = {};
//     newItemValue.id = Math.floor(Math.random() * 100);

//     return (
//         <View>

//             <Text>Item Type:</Text>
//             <TextInput style = {styles.inputStyle}
//                 onChangeText= { (newValue) => newItemValue.category = newValue}
//             />

//             <Text>Item Name:</Text>
//             <TextInput style = {styles.inputStyle}
//                 onChangeText= { (newValue) => newItemValue.name = newValue}
//             />

//             <Text>Item Price:</Text>
//             <TextInput style = {styles.inputStyle}
//                 onChangeText= { (newValue) => newItemValue.price = newValue} 
//             />

//             <Text>Item Description:</Text>
//             <TextInput style = {styles.inputStyle}
//                 onChangeText= { (newValue) => newItemValue.desc = newValue}
//             />


//             <Button title = 'Add Item' onPress = { () => {
//                                                             // console.log(newItemValue); 
//                                                             // addprod(newItemValue);
//                                                             // use dispatch to invoke fn as redux acts as the SSOT

//                                                             dispatch(addItem(newItemValue)); 

//                                                             navigation.navigate('List of Cars', {itemCategory : newItemValue.category})
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

// export default AddItem;



import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { addItem } from '@/store/Slice';

const AddItem = ({navigation}) => {
    const dispatch = useDispatch();
    let newItemValue = {};
    newItemValue.id = Math.floor(Math.random() * 100);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Item Type:</Text>
            <TextInput
                style={styles.inputStyle}
                placeholder="Enter Item Type"
                onChangeText={(newValue) => (newItemValue.category = newValue)}
            />

            <Text style={styles.label}>Item Name:</Text>
            <TextInput
                style={styles.inputStyle}
                placeholder="Enter Item Name"
                onChangeText={(newValue) => (newItemValue.name = newValue)}
            />

            <Text style={styles.label}>Item Price:</Text>
            <TextInput
                style={styles.inputStyle}
                placeholder="Enter Item Price"
                keyboardType="numeric"
                onChangeText={(newValue) => (newItemValue.price = newValue)}
            />

            <Text style={styles.label}>Item Description:</Text>
            <TextInput
                style={styles.inputStyle}
                placeholder="Enter Item Description"
                multiline={true}
                numberOfLines={4}
                onChangeText={(newValue) => (newItemValue.desc = newValue)}
            />

            <View style={styles.buttonContainer}>
                <Button
                    title="Add Item"
                    onPress={() => {
                        dispatch(addItem(newItemValue));
                        navigation.navigate('List of Cars', { itemCategory: newItemValue.category });
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f5f5f5',
        flex: 1,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    inputStyle: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginBottom: 20,
        backgroundColor: 'white',
    },
    buttonContainer: {
        marginTop: 20,
        backgroundColor: '#007bff',
        borderRadius: 8,
        overflow: 'hidden',
    },
    button: {
        padding: 10,
        color: '#fff',
        textAlign: 'center',
    },
});

export default AddItem;
