import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../Components/Login'
import Register from '../Components/Register'
import Dashboard from '../Components/Dashboard'


class Routes extends React.Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route path="/" exact component={Dashboard}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/register" component={Register}></Route>
                </Switch>
            </div>
        )
    }
}

export default Routes