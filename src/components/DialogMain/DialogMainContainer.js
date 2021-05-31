import DialogMain from './DialogMain'

import { addMessageActionCreator, changeMessageActionCreator } from '../../redux/dialogReducer'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        stateDialog: state.dialogs.dialogData,
        stateMessage: state.dialogs.messageData,
        newMessage: state.dialogs.newMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {dispatch(addMessageActionCreator())},
        changeMessage: (text) => {dispatch(changeMessageActionCreator(text))}
    }
}

const DialogMainContainer = connect(mapStateToProps, mapDispatchToProps)(DialogMain)

export default DialogMainContainer