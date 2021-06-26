import { createStore, combineReducers } from 'redux'
import dialogReducer from './dialogReducer'
import profileReducer from './profileReducer'
import friendsReducer from './friendsReducer'

const reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogReducer,
    friends: friendsReducer,
})

const store = createStore(reducers)

export default store