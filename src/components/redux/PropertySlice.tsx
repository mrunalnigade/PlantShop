import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PropertyDetails } from "./StorageInterface";
import { fetchPorpertyInfo } from "./asyncActions";

const initialState:PropertyDetails ={
    loading:false,
    count:0,
    code: 0,
    message: '',
    statusCode: 0,
    result: {
        page: 0,
        totalProducts: 0,
        products: [],
        totalPages: 0
    }
}

const PropertyDetailsSlice = createSlice({
    name:'PropertyDetails',
    initialState,
    reducers:{
        increment(state,action: PayloadAction<number>){
            state.count += action.payload ;
        },
        decrement(state,action : PayloadAction<number>){
            state.count -= action.payload ;
        }
    },
    extraReducers:(builder) => {
        builder.addCase(fetchPorpertyInfo.pending,(state)=>{
            state.loading = true;
        });
        builder.addCase(fetchPorpertyInfo.fulfilled,(state:PropertyDetails,{payload})=>{
            state.loading = false,
            state.result = payload?.result;
        });
        builder.addCase(fetchPorpertyInfo.rejected,(state)=>{
            state.loading = false;
        })
    }
});
export const {increment, decrement} = PropertyDetailsSlice.actions;
export default PropertyDetailsSlice.reducer;