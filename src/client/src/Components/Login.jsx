import React from 'react'
import Navbar from './Navbar'
import { userLogin } from '../Redux/Login/actions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: "",
            user_type: "User"
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogin = () => {
        const { userLogin } = this.props
        userLogin(this.state)
    }

    render(){
        const { isAuth } = this.props
        if(!isAuth){
            return(
                <div>
                    <Navbar />
                    <div className="mt-5">
                        <div className="card mx-4" style={{width: "20rem"}}>
                            <div className="card-body">
                                <h1>Login</h1>
                                <div className="form-inline mt-4">
                                    <input className="form-control my-3" type="text" placeholder="Email" name="email" onChange={this.handleChange}></input>
                                    <input className="form-control my-3" type="password" placeholder="Password" name="password" onChange={this.handleChange}></input>
                                    <select className="form-control my-3" name="user_type" onChange={this.handleChange} defaultValue="User">
                                        <option value="User">User</option>
                                        <option value="Author">Author</option>
                                    </select>
                                </div>
                                <button className="btn btn-danger my-3" onClick={this.handleLogin}>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return(
                <Redirect to="/dashboard" />
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
    userLogin: payload => dispatch(userLogin(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);