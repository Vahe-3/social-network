import style from "./Status.module.css"
import { useState } from 'react';
import { useEffect } from 'react';



const Status = ({status,myId,profileId,refreshStatus}) => {

   const [editMode,setEditMode] = useState(false);
   const [text,setText] = useState("");

   useEffect(() =>{
        setText(status)
   },[])

    return (
        <div className={style.status}><span>Status:</span>{status}
        {
            editMode && <input value={text} type="text" onChange={(e) =>  setText(e.target.value)} onBlur={() => {
                refreshStatus(text)
                setEditMode(!editMode)
                
            }}  />
        }

        {myId === profileId ? 
        
        !editMode  && <div><button onClick = {() => setEditMode(!editMode)}>Refresh status</button></div> 
        : null} 
          
        </div>
    )
}

export default Status        
        
        
        
        

