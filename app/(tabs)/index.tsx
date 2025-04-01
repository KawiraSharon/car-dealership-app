// import { Image, StyleSheet, Platform } from 'react-native';

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

// export default function HomeScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//       headerImage={
//         <Image
//           source={require('@/assets/images/partial-react-logo.png')}
//           style={styles.reactLogo}
//         />
//       }>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Welcome!</ThemedText>
//         <HelloWave />
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 1: Try it</ThemedText>
//         <ThemedText>
//           Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
//           Press{' '}
//           <ThemedText type="defaultSemiBold">
//             {Platform.select({
//               ios: 'cmd + d',
//               android: 'cmd + m',
//               web: 'F12'
//             })}
//           </ThemedText>{' '}
//           to open developer tools.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 2: Explore</ThemedText>
//         <ThemedText>
//           Tap the Explore tab to learn more about what's included in this starter app.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
//         <ThemedText>
//           When you're ready, run{' '}
//           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
//           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
//         </ThemedText>
//       </ThemedView>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });


// import React from 'react';
// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
// import { NavigationIndependentTree} from '@react-navigation/native';
// import { NavigationContainer } from "@react-navigation/native";  // this is used to import the native stack for automatic backtracking.
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import ItemTypes from '../../Screens/ItemTypes';
// import AddItem from '../../Screens/AddItem';
// import EditItem from '../../Screens/EditItem';
// import ItemDetails from '../../Screens/ItemDetails';
// import ItemList from '../../Screens/ItemList'

// const Stack = createNativeStackNavigator(); 

// export default function App() {
//   return (
//     <NavigationIndependentTree>
//       <NavigationContainer> 
//         {/* wrapping the entire application in the navigation container.*/}
//         <Stack.Navigator initialRouteName='Item_Types'> {/* Step 2; the navigation type we are going to use is stack*/} {/* We also specify the initial route name as in the screen to render first*/}
//           {/* Step 3; provide the screens where we want to use the stack navigation property*/}
//           {/* asking stack nav to provide all screen navigation information here */}
//                             <Stack.Screen 
//                               name = 'Item_Types'
//                               component={ItemTypes}
//                               options={{
//                                 title: 'Categories of Items', // more properties specified here
//                                 // additional properties can go here
//                               }}
//                             />                              
//                             <Stack.Screen name = 'Add Item' component={AddItem} />
//                             <Stack.Screen name = 'Edit Item' component={EditItem} />
//                             <Stack.Screen name = 'Item Details' component={ItemDetails} />
//                             <Stack.Screen name = 'List of Cars' component={ItemList} />
//           </Stack.Navigator>
//       </NavigationContainer>
//     </NavigationIndependentTree>
    
//   );
// }


import React from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationIndependentTree} from '@react-navigation/native';
import { NavigationContainer } from "@react-navigation/native";   
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AntDesign } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// import { ProductProvider } from '../../Context/StoreContext.js';


import AddItem from '../../Screens/AddItem';
import EditItem from '../../Screens/EditItem';
import ItemDetails from '../../Screens/ItemDetails';
import ItemList from '../../Screens/ItemList';
import ItemTypes from '../../Screens/ItemTypes';

import { Provider } from 'react-redux';
import { productstore } from '../../store/Store'

const Stack = createNativeStackNavigator(); 

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationIndependentTree>
        <NavigationContainer> 
          <Stack.Navigator initialRouteName='Item_Types'>
                              <Stack.Screen 
                                name = 'Item_Types'
                                component={ItemTypes}
                                options={{
                                  title: 'Car Dealership Categories',  
                                }}
                              />
                              <Stack.Screen name = 'Add Item' component={AddItem} />
                              <Stack.Screen name = 'Edit Item' component={EditItem} />
                              <Stack.Screen name = 'Item Details' component={ItemDetails} />
                              <Stack.Screen 
                                name = 'List of Cars' 
                                component= {ItemList}
                                
                                // options={{
                                //   headerRight : () => {
                                //     return (
                                //         <AntDesign name="plussquare" size={24} color="black" />
                                //     );
                                //   }
                                // }}
                              
                              
                              />
                                                        
            </Stack.Navigator>
        </NavigationContainer>
      </NavigationIndependentTree>
    </GestureHandlerRootView>
  );
}

export default () => {
  // return(
  //   <ProductProvider>
  //     <App/>
  //   </ProductProvider>
  // );
  return(
      <Provider store = { productstore }>
        <App/>
      </Provider>
  );
}

