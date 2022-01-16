import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { newsApi } from './../api/api';




export const getNewsThunk = createAsyncThunk(
    'users/getNewsThunk',
    async function(){
        
        const response = await newsApi.getNews()

        console.log(response)
        
        return response.data;
        
        
    }
)


const newsSlice = createSlice({
    name: "news",
    initialState: {

        articles:[]


    },


    reducers: {

        
        
    },

    extraReducers:{
        [getNewsThunk.pending]:(state,action) =>{
            
        },
        [getNewsThunk.fulfilled]:(state,action) =>{
            
            state.articles = action.payload.articles; 
        },
        [getNewsThunk.rejected]:(state,action) =>{},
    }
})







export const {  } = newsSlice.actions;
export default newsSlice.reducer;