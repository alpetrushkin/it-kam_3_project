import React from "react";
import s from './Navbar.module.css';
import {Link} from "react-router-dom";
import clsx from "clsx";
import {useMatch, useResolvedPath} from "react-router";

function CustomLink({ children, to, ...props}) {
    let resolved = useResolvedPath(to)
    let match = useMatch({path: resolved.pathname, end: true})

    return (
        <div>
            <Link
            to={to}
            {...props}
            >
            <div className={clsx(match && s.active, s.bg)}>
                {children}
            </div>
            </Link>
        </div>
    )
}

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <CustomLink to="/profile">Profile</CustomLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <CustomLink to="/dialogs">Messages</CustomLink>
            </div>
            <div className={s.item}>
                <CustomLink to="/news">News</CustomLink>
            </div>
            <div className={s.item}>
                <CustomLink to="/music">Music</CustomLink>
            </div>
            <div className={s.item}>
                <CustomLink to="/settings">Settings</CustomLink>
            </div>
        </nav>
    )
}

 export default Navbar;