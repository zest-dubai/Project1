import React, { Component } from 'react'
import {Link, Switch,Route} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
export class webcam extends Component {
    constructor(props){
        super(props);
        let detaildone=false
        const token=localStorage.getItem("token")
        const token2=localStorage.getItem("token2")
        let loggedIn=true
        this.state={
            loggedIn,
            detaildone
        }
        if(token==null){
            loggedIn=false
        }
        if(token2==null){
            detaildone=false
        }
    }
    submitForm(e){
        e.preventDefault()
        const{loggedIn,detaildone}=this.state
    }
    render() {
        if (this.state.loggedIn===false){
            return<Redirect to="\"/>
        }
        if (this.state.detaildone===false){
            return<Redirect to="\customer"/>
        }
        return (
            <div>
                <h1>Take Selfie</h1>
                <form onSubmit={this.submitForm}>
                    <input type="submit"/> 
                </form>
                <Link to="/logout">LogOut</Link>
            </div>
        )
    }
}
export default webcam