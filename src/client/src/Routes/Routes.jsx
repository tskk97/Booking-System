import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Components/Home'
import Login from '../Components/Login'
import Register from '../Components/Register'
import Dashboard from '../Components/Dashboard'
import AddBooks from '../Components/AddBooks'
import ViewMyBooks from '../Components/ViewMyBooks'
import ViewAllBooks from '../Components/ViewAllBooks'


class Routes extends React.Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/register" component={Register}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/dashboard" exact component={Dashboard}></Route>
                    <Route path="/dashboard/addNewBook" component={AddBooks}></Route>
                    <Route path="/dashboard/viewMyBooks" component={ViewMyBooks}></Route>
                    <Route path="/dashboard/viewAllBooks" component={ViewAllBooks}></Route>
                </Switch>
            </div>
        )
    }
}

export default Routes