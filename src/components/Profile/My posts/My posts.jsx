import React from "react";
import s from './My posts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postData = [
        {id: 1, message: 'Hi, how are you?', like: 12},
        {id: 2, message: 'It\'s my first post', like: 10}
    ]

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
               <Post message={postData[0].message} like={postData[0].like} />
               <Post message = {postData[1].message} like={postData[1].like} />
            </div>
        </div>
    )
}

export default MyPosts;