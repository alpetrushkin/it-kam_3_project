import React from "react";
import s from './My posts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let post = [
        {id: 1, message: 'Hi, how are you?', like: 12},
        {id: 2, message: 'It\'s my first post', like: 10},
        {id: 2, message: 'Blabla', like: 10},
        {id: 2, message: 'Dada', like: 10}
    ]

    let postElements =
        post.map( p => <Post message={p.message} like={p.like} />)

    return (
        <div>
             <h3>My post</h3>
              <div>
                  <div>
                      <textarea></textarea>
                  </div>
                  <div>
                      <button>Add post</button>
                  </div>
              </div>
            <div className={s.posts}>
                { postElements }
            </div>
        </div>
    )
}

export default MyPosts;