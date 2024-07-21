import { configureStore } from "@reduxjs/toolkit";
import { PropertyDetails } from "./StorageInterface";
import PropertySliceReducer from "./PropertySlice";

export interface StoreType{
    Property:PropertyDetails
};

export const store = configureStore({
    reducer:{
        Property:PropertySliceReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:false
    }).concat([]),
});