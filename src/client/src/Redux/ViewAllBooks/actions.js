import {
    ALL_BOOKS_FAILURE,
    ALL_BOOKS_REQUEST,
    ALL_BOOKS_SUCCESS
} from './actionTypes';

// import axios from 'axios'

export const allBooksRequest = payload =>({
    type:ALL_BOOKS_REQUEST,
    payload
})

export const allBooksSuccess = payload =>({
    type:ALL_BOOKS_SUCCESS,
    payload
})

export const allBooksFailure = payload =>({
    type:ALL_BOOKS_FAILURE,
    payload
})

export const getAllBooks = payload => dispatch =>{
    dispatch( allBooksRequest(payload) )
    console.log(payload)
    var axios = require('axios');
    var data = JSON.stringify({
         "page": payload.page
    });
    console.log(data)

    var config = {
        method: 'get',
        url: 'http://127.0.0.1:5000/dashboard/viewAllBooks',
        headers: {
            'Content-Type': 'application/json'
        },
        data : data
    };

    axios(config)
        .then(res => res.data)
        .then(res => dispatch(allBooksSuccess(res)))
        .catch(err => dispatch(allBooksFailure(err)));
}

