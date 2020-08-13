import React from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends React.Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-danger h5 py-4">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink to="/dashboard" className="nav-link mr-4" activeClassName="active">Home</NavLink>
                            <NavLink to="/login" className="nav-link mx-4" activeClassName="active">Login</NavLink>
                            <NavLink to="/register" className="nav-link mx-4" activeClassName="active">Register</NavLink>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar