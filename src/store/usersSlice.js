import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { usersApi } from "../api/api";


export const getUsersThunk = createAsyncThunk(
    'users/getUsersThunk',
    async function(page){
        
        const  response = await usersApi.getUsers(page);

        ;
        
        return response.data;
        
        
    }
)


const usersSlice = createSlice({
    name: "users",
    initialState: {
        totalUsersCount:null,
        isLoading:false,
        users: [],
        pageSize:10,
        currentPage:2

    },


    reducers: {

        
        
    },

    extraReducers:{
        [getUsersThunk.pending]:(state,action) =>{
            state.isLoading = true;
        },
        [getUsersThunk.fulfilled]:(state,action) =>{
            state.users = action.payload.items;
            state.isLoading = false;
            state.totalUsersCount = action.payload.totalCount;
        },
        [getUsersThunk.rejected]:(state,action) =>{},
    }
})







export const { setCurrentPage } = usersSlice.actions;
export default usersSlice.reducer;