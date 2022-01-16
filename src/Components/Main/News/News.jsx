import style from "./News.module.css"
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getNewsThunk } from './../../../store/newsSlice';
import { useSelector } from 'react-redux';
import NewsItem from './NewsItem/NewsItem';

const News = () =>{

    const dispatch =  useDispatch()
    const {articles} =  useSelector(state => state.news);
    
    

    useEffect(() =>{
        dispatch(getNewsThunk())

    },[dispatch])

    return(
        <div className={style.news}>

            {
               articles.map(article => <NewsItem {...article}  />)
            }

        </div>
    )

}

export default News;