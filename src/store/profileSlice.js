import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { statusApi, usersApi } from './../api/api';
import { authThunk } from './authSlice';



export const getStatusThunk = createAsyncThunk(
    'profile/getStatusThunk',
    async function (userId) {

        const response = await statusApi.getStatus(userId);



        return response.data;


    }
);

export const refreshStatusThunk = createAsyncThunk(
    'profile/refreshStatusThunk',
    async function (status,{dispatch}) {

        const response = await statusApi.updateStatus(status);

        if(response.data.resultCode === 0){
            dispatch(statusRefresh(status))
        }

        return response.data;


    }
);

export const refreshProfileData = createAsyncThunk(
    'profile/refreshProfileData',
    async function ({data,userId},{dispatch}) {

        const response = await usersApi.saveProfile(data);
        

        if(response.data.resultCode === 0){
            dispatch(getUserProfileThunk(userId))
        }

        return response.data;


    }
);

export const getUserProfileThunk = createAsyncThunk(
    'profile/getUserProfileThunk',
    async function (userId) {

        const response = await usersApi.getUsersProfile(userId);



        return response.data;


    }
);

export const setProfilePhotoThunk= createAsyncThunk(
    'profile/setProfilePhotoThunk',
    async function (file) {

        const response = await usersApi.savePhoto(file);



        return response.data;


    }
);


const profileSlice = createSlice({
    name: "profile",
    initialState: {

        profile: {},
        isLoading:false,


        posts: [
            {
                id: Math.random(),
                likeCount: 23,
                text: "Hi how are you ",
            },


        ],

        status: null
    },


    reducers: {
        addPost(state, action) {
            if (action.payload.text) {
                state.posts.push({
                    id: Math.random(),
                    likeCount: 0,
                    text: action.payload.text,
                })
            }

        },

        statusRefresh(state,action){
            state.status = action.payload 
    }
    
    },

    


    

    extraReducers: {

        [getUserProfileThunk.pending]:(state,action) =>{
            
        },


        [getUserProfileThunk.fulfilled]: (state, action) => {
            
            state.profile = action.payload;
            
        },

        [getStatusThunk.fulfilled]: (state, action) => {
            state.status = action.payload
        },

        
    }
})








export const { addPost , statusRefresh } = profileSlice.actions;
export default profileSlice.reducer;