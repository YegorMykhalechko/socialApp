import React from 'react'

import DialogListItem from './DialogListItem'
import DialogMessageItem from './DialogMessageItem'

import './DialogMain.css'

const DialogMain = (props) => {

    const newDialogData = props.dialogState.dialogData.map((dialog) => <DialogListItem name={dialog.name} id={dialog.id} />)

    const newMessageData = props.dialogState.messageData.map((message) => <DialogMessageItem message={message.message} />)

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