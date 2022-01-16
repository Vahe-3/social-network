import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "../api/api";

export const authThunk = createAsyncThunk(
    'auth/authThunk',
    async function (_,{dispatch}) {

        const response = await authApi.me();
        const userData = response.data.data;
        
        
        if(response.data.resultCode === 0){
            dispatch(addUserData({userData}))
            dispatch(isLoadingToggle(false))

        
         } ;


    }
);


export const logoutThunk = createAsyncThunk(
    'auth/logoutThunk',
    async function (_, { dispatch }) {

        const response = await authApi.logout();
        


        if (response.data.resultCode === 0) {
            dispatch(userLogout())

        };


    }
);

export const logInThunk = createAsyncThunk(
    'auth/logInThunk',
    async function (formData,{dispatch}) {
        

        const response = await authApi.logIn(formData.email,formData.password,formData.rememberMe);
        
        
        
        
        if(response.data.resultCode === 0){
            
            dispatch(authThunk())
        
         } else{
             dispatch(isError(response.data.messages[0]))
            
         } ;


    }
)

const authSlice = createSlice({
    name: "auth",
    initialState: {

        userData: {
            id: null,
            login: null,
            email: null,
        },

        isAuth: false,
        isLoading:false,
        error:null,



    },


    reducers: {


        addUserData(state, action) {
            state.userData = action.payload.userData;
            state.isAuth = true



        },

        userLogout(state){
            state.userData = {
                id: null,
                login: null,
                email: null,
            };

            state.isAuth = false;

            


        },

        isError(state,action){
            state.error = action.payload;
        },

        isLoadingToggle(state,action){
            state.isLoading = action.payload
        }

    },

    extraReducers:  {


        
    }
})


export const { addUserData,userLogout,isError,isLoadingToggle } = authSlice.actions;
export default authSlice.reducer;










