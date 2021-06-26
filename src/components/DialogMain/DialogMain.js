import React from 'react'

import DialogListItem from './DialogListItem'
import DialogMessageItem from './DialogMessageItem'

import './DialogMain.css'

const DialogMain = (props) => {

    const newDialogData = props.stateDialog.map((dialog) => <DialogListItem name={dialog.name} key={dialog.id} id={dialog.id} />)

    const newMessageData = props.stateMessage.map((message) => <DialogMessageItem message={message.message} key={message.id} />)

    const addMessage = (e) => {
        e.preventDefault()
        props.addMessage()
    }

    const changeMessage = (e) => {
        e.preventDefault()
        const text = e.target.value
        props.changeMessage(text)
    }

    return (

        <div className="page__main">
            <div className="diaologs__main">
                <ul className="dialog__list">
                    {newDialogData}
                </ul>
                <input onChange={changeMessage} className="form__input" type="text" value={props.newMessage} placeholder='text...'></input>
                <button onClick={addMessage} className="form__btn" type="submit__btn">Send</button>
                <ul className="message__list">
                    {newMessageData}
                </ul>
            </div>
        </div>
    )
}

export default DialogMain