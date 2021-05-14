import React from 'react'

import './DialogMessageItem.css'

const DialogMessageItem = (props) => {
    const {message} = props
    return (
        <li className="message__list-item">{message}</li>
    )
}

export default DialogMessageItem