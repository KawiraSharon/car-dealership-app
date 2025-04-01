import { configureStore } from "@reduxjs/toolkit"; 
import ItemReducer from './Slice';

export const productstore = configureStore({

    reducer : {
        // name the reducer as anything and then associate with the imported data from the ItemReducer
        itemData : ItemReducer

    }
});