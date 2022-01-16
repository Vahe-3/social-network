import style from "./Contacts.module.css"

const Contacts = ({contacts={}}) => {
    
   
  const contactsInArray = Object.keys(contacts).map(key => {
      return <div> {key}:  <a href={contacts[key]}>{contacts[key]}</a></div>
      
  })


    return (
        <div className={style.contacts}>
            <h4>Contacts</h4>
            {
                contactsInArray
            }
        </div>
    )
}

export default Contacts
