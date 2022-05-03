import React from "react";
import s from './Navbar.module.css';
import {Link, NavLink, useMatch, useResolvedPath} from "react-router-dom";
import clsx from "clsx";

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
            <CustomLink to="/profile">Profile</CustomLink>
            <CustomLink to="/dialogs">Messages</CustomLink>
            <CustomLink to="">News</CustomLink>
            <CustomLink to="">Music</CustomLink>
            <CustomLink to="">Settings</CustomLink>
        </nav>
    )
}

export default Navbar;