import {
    LOGIN_USER,
    LOGIN_USER_LOADING,
    DATA_USER,
    DATA_FRIENDS
    //REGISTER_USER,
    //REGISTER_USER_LOADING
} from '../types';

//let friends = []
    //friendsData: [],

const initialState = {
    userInfo: {},
    userMainInfo: {},
    loading: false,
    friendsData: [],
};

export default function(state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER_LOADING:
            return {
                userInfo: state.userInfo,
                userMainInfo: state.userMainInfo,
                loading: action.payload,
                friendsData: state.friendsData
            }
        case LOGIN_USER:
            return {
                userInfo: action.payload,
                userMainInfo: state.userMainInfo,
                loading: false,
                friendsData: state.friendsData
                
            }
            case DATA_USER:
                return {
                    userInfo: state.userInfo,
                    userMainInfo: action.payload,
                    loading: false,
                    friendsData: state.friendsData
                }
            case DATA_FRIENDS:
                return {
                    ...state,
                    userMainInfo: state.userMainInfo,
                    loading: false,
                    friendsData: [...state.friendsData, action.payload]
                }
        // case REGISTER_USER_LOADING:
        //     return {
        //         ...state,
        //         loading: action.payload
        //     }
        // case REGISTER_USER:
        //     return {
        //         userInfo: action.payload,
        //         loading: false,
        //     }
        default:
            return state;
    }
}

