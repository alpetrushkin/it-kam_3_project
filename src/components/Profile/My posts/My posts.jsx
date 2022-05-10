import React from "react";
import s from './My posts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
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
               <Post message='Hi, how are you?' like='16' />
               <Post message = "It's my first post" like='26' />
            </div>
        </div>
    )
}

export default MyPosts;