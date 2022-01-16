import style from "./Paginator.module.css"
import { useState } from 'react';


const Paginator = ({ totalItemsCount, pageSize, currentPage, addNewUsers, portionSize = 10 }) => {

    const numberOfPages = Math.ceil(totalItemsCount / pageSize) ;

    const numberOfPagesArray = [];

    for (let index = 1; index <= numberOfPages; index++) {
        numberOfPagesArray.push(index)
    }

    const portionCount = Math.ceil(numberOfPages / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;




    return (
        <div className={style.numberOfPage}>
            { portionNumber > 1 &&  <button onClick={() => setPortionNumber(portionNumber - 1)}  > Prev</button>}
            {numberOfPagesArray.filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(number => <h3 className={currentPage === number ? style.activ : ""} onClick={() => {
                    
                    addNewUsers(number)
                    

                }} >{number}</h3>)}
            {portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)} >Next</button>}
        </div>
    )
};

export default Paginator;
