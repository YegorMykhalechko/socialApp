import React from 'react'

import DialogListItem from './DialogListItem'
import DialogMessageItem from './DialogMessageItem'

import './DialogMain.css'

const DialogMain = () => {
    return (
        <div className="page__main">
            <div className="diaologs__main">
                <ul className="dialog__list">
                    <DialogListItem name="User1" id="1"/>
                    <DialogListItem name="User2" id="2"/>
                    <DialogListItem name="User3" id="3"/>
                    <DialogListItem name="User4" id="4"/>
                    <DialogListItem name="User5" id="5"/>
                </ul>
                <ul className="message__list">
                    <DialogMessageItem message="message1"/>
                </ul>
            </div>
        </div>
    )
}

export default DialogMain