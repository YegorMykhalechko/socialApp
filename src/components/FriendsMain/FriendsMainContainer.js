import FriendsMain from './FriendsMain';
import { connect } from 'react-redux';
import { followActionCreator, unfollowActionCreator, setUserActionCreator, setCurrentPageActionCreator, setTotalCountActionCreator, toogleLoadingActionCreator} from '../../redux/friendsReducer';

const mapStateToProps = (state) => {
    return {
        users: state.friends.users,
        pageSize: state.friends.pageSize,
        totalCount: state.friends.totalCount,
        currentPage: state.friends.currentPage,
        isLoading: state.friends.isLoading,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => { dispatch(followActionCreator(userId)) },
        unfollow: (userId) => { dispatch(unfollowActionCreator(userId)) },
        setUser: (users) => { dispatch(setUserActionCreator(users))},
        setCurrentPage: (currentPage) => { dispatch(setCurrentPageActionCreator(currentPage))},
        setTotalCount: (totalCount) => {dispatch(setTotalCountActionCreator(totalCount))},
        toogleLoading: (isLoading) => {dispatch(toogleLoadingActionCreator(isLoading))},
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FriendsMain);