import React from 'react'
import { NavLink } from 'react-router-dom'

import './DialogListItem.css'

const DialogListItem = (props) => {
    const { id, name } = props
    return (
        <li className="dialog__list-item"><NavLink to={`/dialogs/${id}`}>{name}</NavLink></li>
    )
}

export default DialogListItem