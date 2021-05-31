import { connect } from 'react-redux'

import PostList from './PostList'

const mapStateToProps = (state) => {
    return {
        state: state.profile.postData
    }
}

const PostListContainer = connect(mapStateToProps)(PostList)

export default PostListContainer