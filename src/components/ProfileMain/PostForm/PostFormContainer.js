import { addPostActionCreator, changePostActionCreator } from '../../../redux/profileReducer'

import PostForm from './PostForm'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return{
        newTextPost: state.profile.newTextPost
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addPost: () => {dispatch(addPostActionCreator())}, 
        changePost: (text) => {dispatch(changePostActionCreator(text))}
    }
}

const PostFormContainer = connect(mapStateToProps, mapDispatchToProps)(PostForm)

export default PostFormContainer