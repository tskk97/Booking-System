import {
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
} from './actionTypes';
 
const initState = {
    isAuth: false,
    isLogin:false,
    message:"",
    userData:"",
}

const loginReducer = (state = initState, action)=>{
    switch(action.type){
        case LOGIN_REQUEST:
            return {
                ...state
              }

        case LOGIN_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                isLogin: action.payload.status,
                message: action.payload.msg,
                isAuth: !state.isAuth,
                userData: action.payload.user_data,
            }

        case LOGIN_FAILURE:
            return{
                ...state,
                isLogin:action.payload.status,
                message: action.payload.msg
            }

        default:
            return {
                ...state
            }
    }
}

export default loginReducer