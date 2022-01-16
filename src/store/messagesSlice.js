import { createSlice } from "@reduxjs/toolkit";
import user from "./../files/user.jpg"

const messagesSlice = createSlice({
    name: "messages",
    initialState: {

        persons: [
            {
                id: Math.random(),
                img:user,
                fullName: "Vahe Avetisyan"
            },
            {
                id: Math.random(),
                img:user,
                fullName: "Jon Smith"
            },
            {
                id: Math.random(),
                img:user,
                fullName: "Andry Garfild"
            },
            {
                id: Math.random(),
                img:user,
                fullName: "Gagarin Yuriy"
            },
            {
                id: Math.random(),
                img:user,
                fullName: "Ggik Avetisyan"
            },
        ],

        messages: [
            {
                id: Math.random(),
                text: "Hi how are you ",
            },
        ]
    },



    reducers: {
        sendMessage(state, action) {
            if (action.payload.text) {
                state.messages.push({
                    id: Math.random(),
                    text: action.payload.text,
                })
            }

        }
    }
})


export const {sendMessage} = messagesSlice.actions;
export default messagesSlice.reducer;