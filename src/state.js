import { reRender } from './render'

let state = {
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
}

export const addPost = () => {
  const newPost = {
    id: 5, message: state.profile.newTextPost, count: 0
  }
  state.profile.postData.unshift(newPost)
  changePostText('')
  reRender(state)
}

export const changePostText = (newText) => {
  state.profile.newTextPost = newText
  reRender(state)
}

export const addMessage = () => {
  const newMessage = {
    id: 2, message: state.dialogs.newMessage
  }
  state.dialogs.messageData.unshift(newMessage)
  changeMessage('')
  reRender(state)
}

export const changeMessage = (newText) => {
  state.dialogs.newMessage = newText
  reRender(state)
}


export default state;