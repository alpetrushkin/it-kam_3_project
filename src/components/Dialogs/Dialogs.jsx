import React from "react";
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    Dimych
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    Alex
                </div>
                <div className={s.dialog}>
                    Misha
                </div>
                <div className={s.dialog}>
                    Andrej
                </div>
                <div className={s.dialog}>
                    Denis
                </div>
                <div className={s.dialog}>
                    Tolja
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