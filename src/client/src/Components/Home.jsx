import React from 'react'
import { Redirect } from 'react-router-dom'

class Home extends React.Component{
    render(){
        return(
            <div>
                <Redirect to="/dashboard" />
            </div>
        )
    }
}

export default Home