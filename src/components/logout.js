import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class logout extends Component {
    constructor(props){
        super(props)
        localStorage.removeItem("token")
    }
    render() {
        return (
            <div>
                <h1>You have been Logged Out.</h1>
                <Link to="/">Login Again</Link>
            </div>
        )
    }
}
