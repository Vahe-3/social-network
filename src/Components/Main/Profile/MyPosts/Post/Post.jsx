import style from "./Post.module.css"

const Post = ({likeCount,text}) =>{
    return(
        <div className={style.post}>
            
            <img src="https://cdn.vox-cdn.com/thumbor/-vrxrsc2_mPdui494YQdLwR6eEg=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19981073/avatar_zucko_short_hair.jpg" alt="postava" />
            <div>{text}</div>
            <span>Like {likeCount}</span>
        </div>
    )
};

export default Post;