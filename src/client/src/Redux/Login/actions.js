import {
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
} from './actionTypes';

// import axios from 'axios'

export const loginRequest = payload =>({
    type:LOGIN_REQUEST,
    payload
})

export const loginSuccess = payload =>({
    type:LOGIN_SUCCESS,
    payload
})

export const loginFailure = payload =>({
    type:LOGIN_FAILURE,
    payload
})

export const userLogin = payload =>dispatch=>{
    console.log(payload)
    dispatch( loginRequest(payload) )
    var axios = require('axios');
    var data = JSON.stringify({"email":payload.email, "password":payload.password});

    var config = {
        method: 'post',
        url: 'http://127.0.0.1:5000/login/',
        headers: {
            'Content-Type': 'application/json'
        },
        data : data
    };

    axios(config)
        .then(res => res.data)
        .then(res => dispatch(loginSuccess(res)))
        .catch(err => dispatch(loginFailure(err)));
}

