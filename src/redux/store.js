import dialogReducer from './dialogReducer'
import profileReducer from './profileReducer'

let store = {
  _state: {
    profile: {
      postData: [
        { id: 1, message: 'It`s first post', count: 10 },
        { id: 2, message: 'It`s second post', count: 20 },
      ],
      newTextPost: ''
    },

    dialogs: {
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
    },

    sidebar: {

    }
  },

  _reRender() {
    console.log('OK')
  },

  getState() {
    return this._state
  },

  subscribe(observer) {
    this._reRender = observer
  },

  dispatch(action) {

    this._state.profile = profileReducer(this._state.profile, action)

    this._state.dialogs = dialogReducer(this._state.dialogs, action)

    this._reRender(this._state)
  }
}

export default store;