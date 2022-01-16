import style from "./Person.module.css"

const Person = ({person}) => {
    return (
    
    <div className={style.person}>

        <div className={style.person_img}>
            <img src={person.img} alt="person" />
        </div>

        <div className={style.person_fullName}>
            <h3>{person.fullName}</h3>

        </div>

    </div>)
}

export default Person;