import React from 'react'
import Navbar from './Navbar'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends React.Component{
    handleMyBooks = () => {
        const { history } = this.props
        history.push("/dashboard/viewMyBooks")
    }

    handleAddNewBook = () => {
        const { history } = this.props
        history.push("/dashboard/addNewBook")
    }

    handleViewAllBooks = () => {
        const { history } = this.props
        history.push("/dashboard/viewAllBooks")
    }

    render(){
        const { isAuth } = this.props
        if(!isAuth){
            return(
                <div>
                    <Navbar />
                    <div className="mt-5 text-center">
                        <button className="btn btn-lg btn-danger mx-5" onClick={this.handleMyBooks}>My Books</button>
                        <button className="btn btn-lg btn-danger mx-5" onClick={this.handleAddNewBook}>Add new Book</button>
                        <button className="btn btn-lg btn-danger mx-5" onClick={this.handleViewAllBooks}>View all Books</button>
                    </div>
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

export default connect(mapStateToProps)(Dashboard);