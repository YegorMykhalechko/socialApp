const ADD_MESSAGE = 'ADD-MESSAGE'
const CHANGE_MESSAGE = 'CHANGE-MESSAGE'

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const changeMessageActionCreator = (text) => ({ type: CHANGE_MESSAGE, newText: text })

const initialState = {
    dialogData: [
        { id: 1, name: 'user1' },
        { id: 2, name: 'user2' },
        { id: 3, name: 'user3' },
        { id: 4, name: 'user4' },
        { id: 5, name: 'user5' },
        { id: 6, name: 'user6' },
        { id: 7, name: 'user7' }
    ],

    messageData: [
        { id: 1, message: 'message1' }
    ],
    newMessage: ''
}

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: 
            const newMessage = {
                id: 2, message: state.newMessage
            }
            return { ...state, newMessage: '', messageData: [newMessage, ...state.messageData] }
        
        case CHANGE_MESSAGE: 
            return { ...state, newMessage: action.newText }
        
        default:
            return state
    }
}

export default dialogReducer