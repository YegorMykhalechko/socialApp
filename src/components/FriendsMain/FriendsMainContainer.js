
import FriendsMain from './FriendsMain';
import { connect } from 'react-redux';
import { followActionCreator, unfollowActionCreator, setUserActionCreator } from '../../redux/friendsReducer';

const mapStateToProps = (state) => {
    return {
        users: state.friends.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => { dispatch(followActionCreator(userId)) },
        unfollow: (userId) => { dispatch(unfollowActionCreator(userId)) },
        setUser: (users) => { dispatch(setUserActionCreator(users))} 
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FriendsMain);