import React from 'react'

import './DialogMessageItem.css'

const DialogMessageItem = (props) => {
    const { message } = props

    return (
        <div>
            <li className="message__list-item">{message}</li>
        </div>
    )
}

export default DialogMessageItem