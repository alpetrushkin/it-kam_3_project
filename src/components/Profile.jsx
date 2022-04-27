import React from "react";
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://avatars.mds.yandex.net/i?id=08f6e64ea1f570cb74cb30451ca99d55-4825130-images-thumbs&n=13&exp=1" alt=""/>
            </div>
            <div>
                ava + descr
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;