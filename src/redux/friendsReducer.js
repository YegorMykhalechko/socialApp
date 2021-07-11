const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOOGLE_IS_LOADING = 'TOOGLE_IS_LOADING'

const initialState = {
    users: [ ],
    pageSize: 5, 
    totalCount: 0,
    currentPage: 1,
    isLoading: false,
}

const friendsReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {...state,
                users: state.users.map(u => {
                    if (u.id === action.userId ) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {...state,
                users: state.users.map(u => {
                    if (u.id === action.userId ) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: [...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_COUNT:
            return {...state, totalCount: action.totalCount}
        case TOOGLE_IS_LOADING:
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}

export const followActionCreator = (userId) => ({ type: FOLLOW, userId})
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId})
export const setUserActionCreator = (users) => ({ type: SET_USERS, users})
export const setCurrentPageActionCreator = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage})
export const setTotalCountActionCreator = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount})
export const toogleLoadingActionCreator = (isLoading) => ({ type: TOOGLE_IS_LOADING, isLoading})

export default friendsReducer