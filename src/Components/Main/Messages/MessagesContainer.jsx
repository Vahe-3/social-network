import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { sendMessage } from '../../../store/messagesSlice';
import Messages from './Messages';


const MessagesContainer = () =>{

    const {persons,messages} = useSelector(state => state.messages);
    const [text,setText] = useState("");
    const dispatch = useDispatch();

    const send = () => {

        dispatch(sendMessage({text}))

        setText('')

    };

    const refreshText = (letter) =>{
        setText(letter);
    }
    




    return(
        <div>
            
              <Messages messages={messages} persons={persons} refreshText={refreshText} text={text} send={send} />

            
        </div>
    )
}

export default MessagesContainer;