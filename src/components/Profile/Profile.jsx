import React from "react";
import MyPosts from "./My posts/My posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts />
        </div>
    )
}

export default Profile;