import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://kadara.ru/wp-content/uploads/2021/12/1-51.jpg" alt=""/>
            { props.message }

            <div>
                <span>like</span> { props.like}
            </div>
        </div>
    )
}

export default Post;