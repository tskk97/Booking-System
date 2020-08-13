import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from "redux-thunk";
import registerReducer from './Register/registerReducer'
import loginReducer from './Login/loginReducer'
// import reducerStays from './Stays/reducerStays';
// import reducerEntity from './EntityDetails/reducerEntity';
// import reducerBooking from './Booking/reducerBooking'

 
const rootReducer =combineReducers({
    register: registerReducer,
    login: loginReducer,
    // staysSearch:reducerStays,
    // entityList:reducerEntity,
    // bookingList:reducerBooking
})

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    createComposer(
        applyMiddleware(
            thunk,
        )
    )
)
export default store