import React from "react";
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://avatars.mds.yandex.net/i?id=08f6e64ea1f570cb74cb30451ca99d55-4825130-images-thumbs&n=13&exp=1" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava + descr
            </div>
        </div>
    )
}

export default ProfileInfo;