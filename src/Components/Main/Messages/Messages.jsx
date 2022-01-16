import style from "./Messages.module.css"
import Person from './Person/Person';
import Message from './Message/Message';




const Messages = ({ persons, messages,refreshText,text,send }) => {
    return (
        <>
        <h4>Server Api can't work for messages</h4>
        <div className={style.messages}>

            

            <div className={style.persons}>
                {persons.map(person => <Person person={person} />)}
            </div>
            <div className={style.messagesItems}>
                
            <div className={style.message_form}>
                <textarea value={text} onChange={(e) => refreshText(e.target.value)}></textarea>
                <button onClick={() => send()}>Send Message</button>
            </div>
                {messages.map(message => <Message message={message} text={text} refreshText={refreshText} send={send} />)}
            </div>

        </div>
        </>
    )
}

export default Messages;





