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

  getState() {
    return this._state 
  },

  _reRender() {
    console.log('OK')
  },

  addPost () {
    const newPost = {
      id: 5, message: this._state.profile.newTextPost, count: 0
    }
    this._state.profile.postData.unshift(newPost)
    this.changePostText('')
    this._reRender(this._state)
  },

  changePostText (newText) {
    this._state.profile.newTextPost = newText
    this._reRender(this._state)
  },

  addMessage () {
    const newMessage = {
      id: 2, message: this._state.dialogs.newMessage
    }
    this._state.dialogs.messageData.unshift(newMessage)
    this.changeMessage('')
    this._reRender(this._state)
  },

  changeMessage (newText) {
    this._state.dialogs.newMessage = newText
    this._reRender(this._state)
  },

  subscribe (observer) {
    this._reRender = observer
  }
}

export default store;