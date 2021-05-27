const ADD_POST = 'ADD-POST'
const CHANGE_POST = 'CHANGE-POST'

export const addPostActionCreator = () => ({ type: ADD_POST })
export const changePostActionCreator = (text) => ({ type: CHANGE_POST, newText: text })

const initialState = {
    postData: [
        { id: 1, message: 'It`s first post', count: 10 },
        { id: 2, message: 'It`s second post', count: 20 },
    ],
    newTextPost: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5, message: state.newTextPost, count: 0
            }
            state.postData.unshift(newPost)
            state.newTextPost = ''
            return state
        case CHANGE_POST:
            state.newTextPost = action.newText
            return state
        default:
            return state
    }
}

export default profileReducer