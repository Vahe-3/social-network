
import { useSelector } from "react-redux";
import style from "./MyPosts.module.css"
import Post from './Post/Post';



const MyPosts = ({text,refreshText,addPosts,posts}) => {
    
    
    


    return (
        <div className={style.myPosts}>
        <h3>My posts</h3>
        <div>
        
            
            <textarea value={text}  onChange={(e) =>  {
                
                refreshText(e.target.value)} }></textarea>
            <button onClick={() =>{addPosts(text)}} >Add post</button>
            
        
    </div>

    <div>

        {
            posts.map(post => <Post key={post.id} {...post} />)
        }
        
    </div>

    </div>
    )
};




export default MyPosts;