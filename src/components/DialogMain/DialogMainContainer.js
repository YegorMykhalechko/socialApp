import React from 'react'

import DialogMain from './DialogMain'

import { addMessageActionCreator, changeMessageActionCreator } from '../../redux/dialogReducer'

const DialogMainContainer = (props) => {

    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    const changeMessage = (text) => {
        props.store.dispatch(changeMessageActionCreator(text))
    }

    return (
        <DialogMain addMessage={addMessage} changeMessage={changeMessage} stateDialog={props.store.getState().dialogs.dialogData} stateMessage={props.store.getState().dialogs.messageData} newMessage={props.store.getState().dialogs.newMessage} />
    )
}

export default DialogMainContainer