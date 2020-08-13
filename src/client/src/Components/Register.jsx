import React from 'react'
import Navbar from './Navbar'
import { userRegister } from '../Redux/Register/actions'
import { connect } from 'react-redux'

class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: "",
            email: "",
            username: "",
            password: "",
            user_type: "User"
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleRegister = () => {
        const { userRegister } = this.props
        userRegister(this.state)
    }

    render(){
        return(
            <div>
                <Navbar />
                <div className="mt-5">
                    <div className="card mx-4" style={{width: "20rem"}}>
                        <div className="card-body">
                            <h1>Register</h1>
                            <div className="form-inline mt-4">
                                <input className="form-control my-3" type="text" placeholder="Name" name="name" onChange={this.handleChange}></input>
                                <input className="form-control my-3" type="text" placeholder="Email" name="email" onChange={this.handleChange}></input>
                                <input className="form-control my-3" type="text" placeholder="Username" name="username" onChange={this.handleChange}></input>
                                <input className="form-control my-3" type="password" placeholder="Password" name="password" onChange={this.handleChange}></input>
                                <select className="form-control my-3" name="user_type" onChange={this.handleChange} defaultValue="User">
                                    <option value="User">User</option>
                                    <option value="Author">Author</option>
                                </select>
                            </div>
                            <button className="btn btn-danger my-3" onClick={this.handleRegister}>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isRegister: state.register.isRegister,
    message: state.register.message
})

const mapDispatchToProps = dispatch => ({
    userRegister: payload => dispatch(userRegister(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Register);