import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    Dimych
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/1">Alex</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Dima</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Valera</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Andrej</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Tolja</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How is your React</div>
                <div className={s.message}>Yo
                </div>
            </div>
        </div>
    )
}

export default Dialogs;