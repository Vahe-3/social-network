import { useState } from "react";
import { useSelector } from "react-redux";
import { addPost } from "../../../../store/profileSlice";
import { useDispatch } from "react-redux";
import MyPosts from "./MyPosts";




const MyPostsContainer = () => {
    
    const[text,setText] = useState("");
    
    const posts = useSelector(state => state.profile.posts);
    const dispatch = useDispatch();

    const addPosts = (text) =>{
        dispatch(addPost({text}));
        setText("");

    }

    const refreshText = (letter) =>{
        setText(letter);
    }
    
    


    return (
     <MyPosts text={text} addPosts={addPosts} posts={posts} refreshText={refreshText} />
    )
};

export default MyPostsContainer;