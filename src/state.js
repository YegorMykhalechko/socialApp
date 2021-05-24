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
    if (action.type === 'ADD-POST') {
      const newPost = {
        id: 5, message: this._state.profile.newTextPost, count: 0
      }
      this._state.profile.postData.unshift(newPost)
      this._state.profile.newTextPost = ''
      this._reRender(this._state)
    }
    else if (action.type === 'CHANGE-POST') {
      this._state.profile.newTextPost = action.newText
      this._reRender(this._state)
    }
    else if (action.type === 'ADD-MESSAGE') {
      const newMessage = {
        id: 2, message: this._state.dialogs.newMessage
      }
      this._state.dialogs.messageData.unshift(newMessage)
      this._state.dialogs.newMessage = ''
      this._reRender(this._state)
    }
    else if (action.type === 'CHANGE-MESSAGE') {
      this._state.dialogs.newMessage = action.newText
      this._reRender(this._state)
    }
  }
}

export default store;