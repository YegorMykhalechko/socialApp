import React from 'react'

import DialogListItem from './DialogListItem'
import DialogMessageItem from './DialogMessageItem'

import './DialogMain.css'

const DialogMain = () => {

    let dialogData = [
        { id: 1, name: 'user1' },
        { id: 2, name: 'user2' },
        { id: 3, name: 'user3' },
        { id: 4, name: 'user4' },
        { id: 5, name: 'user5' },
        { id: 6, name: 'user6' },
        { id: 7, name: 'user7' }
    ]
    const newDialogData = dialogData.map((dialog) => <DialogListItem name={dialog.name} id={dialog.id} />)

    let messageData = [
        { id: 1, message: 'message1' }
    ]
    const newMessageData = messageData.map((message) => <DialogMessageItem message={message.message} />)

    return (
        <div className="page__main">
            <div className="diaologs__main">
                <ul className="dialog__list">
                    {newDialogData}
                </ul>
                <ul className="message__list">
                    {newMessageData}
                </ul>
            </div>
        </div>
    )
}

export default DialogMain