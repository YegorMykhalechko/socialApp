import React from 'react'

import DialogListItem from './DialogListItem'
import DialogMessageItem from './DialogMessageItem'

import { addMessageActionCreator, changeMessageActionCreator } from '../../redux/dialogReducer'

import './DialogMain.css'

const DialogMain = (props) => {

    const newDialogData = props.dialogState.dialogData.map((dialog) => <DialogListItem name={dialog.name} id={dialog.id} />)

    const newMessageData = props.dialogState.messageData.map((message) => <DialogMessageItem message={message.message} />)

    const addMessage = (e) => {
        e.preventDefault()
        props.dispatch(addMessageActionCreator())
    }

    const changeMessage = (e) => {
        e.preventDefault()
        const text = e.target.value
        props.dispatch(changeMessageActionCreator(text))
    }

    return (

        <div className="page__main">
            <div className="diaologs__main">
                <ul className="dialog__list">
                    {newDialogData}
                </ul>
                <input onChange={changeMessage} className="form__input" type="text" value={props.dialogState.newMessage} placeholder='text...'></input>
                <button onClick={addMessage} className="form__btn" type="submit__btn">Send</button>
                <ul className="message__list">
                    {newMessageData}
                </ul>
            </div>
        </div>
    )
}

export default DialogMain