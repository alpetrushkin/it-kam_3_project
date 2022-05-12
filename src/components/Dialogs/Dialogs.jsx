import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Valera'},
        {id: 4, name: 'Andrej'},
        {id: 5, name: 'Tolja'},
        {id: 6, name: 'Sergej'}
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your React'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ]

    let dialogElements = dialogs.map( d => <DialogItem name={d.name} id={d.id} /> );
    let messageElements = messages.map( m => <Message message={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogElements }
            </div>
            <div className={s.messages}>
                { messageElements }
            </div>
        </div>
    )
}

export default Dialogs;