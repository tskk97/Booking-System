import React from 'react'
import Navbar from './Navbar'
// import { userLogin } from '../Redux/Login/actions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class AddBooks extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        const { isAuth } = this.props
        if(!isAuth){
            return(
                <div>
                    <Navbar />
    
                </div>
            )
        }
        else{
            return(
                <Redirect to="/login" />
            )
        }
    }
}

const mapStateToProps = state => ({
    isAuth: state.login.isAuth,
    isLogin: state.login.isLogin,
    message: state.login.message,
    userData: state.login.userData
})

const mapDispatchToProps = dispatch => ({
    // userLogin: payload => dispatch(userLogin(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddBooks);