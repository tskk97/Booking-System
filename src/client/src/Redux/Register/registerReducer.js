import {
    REGISTER_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
} from "./actionTypes";
  
  const initState = {
    isRegister: false,
    message: ""
};
  
const registerReducer = (state = initState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
            return {
                ...state
            };

        case REGISTER_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                isRegister: action.payload.status,
                message: action.payload.msg
            };

        case REGISTER_FAILURE:
            return {
                ...state,
                isRegister: action.payload.status,
                message: action.payload.msg
            };

        default:
            return {
                ...state 
            };
    }
};  

export default registerReducer;