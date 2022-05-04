import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
           <div className={s.dialogsItems}>
               <div className={s.dialog + ' ' + s.active}>
                   <NavLink to="/dialogs/1">Dima</NavLink>
               </div>
               <div className={s.dialog}>
                   <NavLink to="/dialogs/2">Viktor</NavLink>
               </div>
               <div className={s.dialog}>
                   <NavLink to="/dialogs/3">Denis</NavLink>
               </div>
               <div className={s.dialog}>
                   <NavLink to="/dialogs/4">Alex</NavLink>
               </div>
               <div className={s.dialog}>
                   <NavLink to="/dialogs/5">Sergej</NavLink>
               </div>
           </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How is it-kamasutra</div>
                <div className={s.message}>You</div>
            </div>
        </div>


    )
}

export default Dialogs;