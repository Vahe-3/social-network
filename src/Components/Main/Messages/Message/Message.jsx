import style from "./Message.module.css"

const Message = ({ message}) => {
    return (

        <div className={style.message}>
            
            <div>
                <p>{message.text}</p>
            </div>


        </div>)
}

export default Message;