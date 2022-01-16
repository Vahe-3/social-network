import style from "./NewsItem.module.css"

const NewsItem = ({urlToImage,author,title,description,url,publishedAt}) =>{

   

    return(
        <div className={style.newsItem}>

            <div>
                <h3>{author}</h3>
                <h4>{publishedAt}</h4>
                <h4>{title}</h4>
                <img src={urlToImage} alt="newsPhoto" />
                <h5>{description}</h5> 
                <a href={url}>go to news</a> 

            </div>
            
            

        </div>
    )

}

export default NewsItem;