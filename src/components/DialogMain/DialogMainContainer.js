import React from 'react'

import DialogMain from './DialogMain'

import { addMessageActionCreator, changeMessageActionCreator } from '../../redux/dialogReducer'
import StoreContext from '../../StoreContext'

const DialogMainContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const addMessage = () => {
                        store.dispatch(addMessageActionCreator())
                    }

                    const changeMessage = (text) => {
                        store.dispatch(changeMessageActionCreator(text))
                    }

                    return (
                        <DialogMain addMessage={addMessage} changeMessage={changeMessage} stateDialog={store.getState().dialogs.dialogData} stateMessage={store.getState().dialogs.messageData} newMessage={store.getState().dialogs.newMessage} />
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export default DialogMainContainer