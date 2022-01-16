import style from './Page.module.css'


const Page =({page,getUsers}) =>{
    return(
        <span onClick={() => getUsers(page)}  className={style.page}>

            {page}

        </span>
    )

}

export default Page;