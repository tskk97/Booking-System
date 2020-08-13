import {
    ALL_BOOKS_FAILURE,
    ALL_BOOKS_REQUEST,
    ALL_BOOKS_SUCCESS
} from './actionTypes';
 
const initState = {
    status: "",
    message: "",
    data: "",
    total: "",
    page: 1,
    per_page: 10,
    total_pages: 0
}

const allBooksReducer = (state = initState, action)=>{
    switch(action.type){
        case ALL_BOOKS_REQUEST:
            console.log("req sent")
            return {
                ...state
            }

        case ALL_BOOKS_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                status: action.payload.status,
                message: action.payload.message,
                data: action.payload.data,
                total: action.payload.total,
                page: action.payload.page,
                per_page: action.payload.per_page,
                total_pages: action.payload.total_pages,
            }

        case ALL_BOOKS_FAILURE:
            return{
                ...state,
                status: action.payload.status,
                message: action.payload.msg
            }

        default:
            return {
                ...state
            }
    }
}

export default allBooksReducer