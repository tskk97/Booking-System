import {
    REGISTER_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
} from "./actionTypes";

// import axios from 'axios'

export const registerRequest = payload => ({
    type: REGISTER_REQUEST,
    payload
})

export const registerSuccess = payload => ({
    type: REGISTER_SUCCESS,
    payload
})

export const registerFailure = payload => ({
    type: REGISTER_FAILURE,
    payload
})

export const userRegister = payload => dispatch => {
    console.log(payload)
    dispatch( registerRequest(payload) )
    var axios = require('axios');
    var data = JSON.stringify({
        "name": payload.name, 
        "email": payload.email,  
        "username": payload.username,
        "password":payload.password,
        "user_type": payload.user_type
    });

    var config = {
        method: 'post',
        url: 'http://127.0.0.1:5000/register/',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
        .then(res => res.data)
        .then(res => dispatch(registerSuccess(res)))
        .catch(err => dispatch(registerFailure(err)));
}