import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {Link, Switch,Route} from 'react-router-dom'
export class customer extends Component {
    userdata;
    constructor(props){
        super(props);
        let detaildone=false
        const token=localStorage.getItem("token")
        let loggedIn=true
        this.replaceFName=this.replaceFName.bind(this);
        this.replaceLName=this.replaceLName.bind(this);
        this.replaceEmail=this.replaceEmail.bind(this);
        this.replaceNumber=this.replaceNumber.bind(this);
        this.replaceAdress=this.replaceAdress.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
            FName:"",
            LName:"",
            Email:"",
            MobileNo:"",
            Adress:"",
            loggedIn,
            detaildone
        }
        if(token==null){
            loggedIn=false
        }
    }
    replaceAdress(e){
        this.setState({Adress:e.target.value})
    }
    replaceFName(e){
        this.setState({FName:e.target.value})
    }
    replaceLName(e){
        this.setState({LName:e.target.value})
    }
    replaceEmail(e){
        this.setState({Email:e.target.value})
    }
    replaceNumber(e){
        this.setState({MobileNo:e.target.value})
    }
    onSubmit(e){
        e.preventDefault();
        console.log('call');
    }

    componentDidMount(){
        this.userdata=JSON.parse(localStorage.getItem('currUser'));
        const token=localStorage.getItem("token")
        let loggedIn=true
        if(token==null){
            loggedIn=false
        }
        if (localStorage.getItem('currUser')){
            this.setState({
                FName:this.userdata.FName,
                LName:this.userdata.LName,
                Email:this.userdata.Email,
                MobileNo:this.userdata.MobileNo,
                Adress:this.userdata.Adress,
                loggedIn     
            })
        }else{
            this.setState({
                FName:"",
                LName:"",
                Email:"",
                MobileNo:"",
                Adress:"",
                loggedIn
            })
        }
    }
    componentWillUpdate(nextProps,nextState){
        localStorage.setItem('currUser',JSON.stringify(nextState));
    }
    submitForm(e){
        e.preventDefault()
        const{FName, LName, Email, MobileNo, Adress, loggedIn, detaildone}=this.state
        if(FName&& LName&& Email&& MobileNo &&Adress){
            localStorage.setItem("token2","qwertyuiop")
            this.setState({
                detaildone:true
            })
        }
    }

    render() {
        if (this.state.loggedIn===false){
            return<Redirect to="/"/>
        }
        if(this.state.detaildone){
            return<Redirect to="/webcam"/>
        }
        return (
            <div className="container">
                <form onSubmit={this.submitform}>
                        <div className='form-group'> 
                            <label>First Name</label>
                            <input type="text" className="form-control" value={this.state.name} required onChange={this.replaceFName}/>
                        </div>
                        <div className='form-group'> 
                            <label>Last Name</label>
                            <input type="text" className="form-control" required onChange={this.replaceLName}/>
                        </div>
                        <div className='form-group'> 
                            <label>Email</label>
                            <input type="email" className="form-control" required onChange={this.replaceEmail}/>
                        </div>
                        <div className='form-group'> 
                            <label>Mobile No.</label>
                            <input type="number" className="form-control"required onChange={this.replaceNumber }/>
                        </div>
                        <div className='form-group'> 
                            <label>Adress</label>
                            <input type="text" className="form-control" required onChange={this.replaceAdress}/>
                        </div>
                        <p>Submitting it will leads to Upload Pic page.</p>
                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </form>
                <Link to="/logout">LogOut</Link>
            </div>
        )
    }
}
export default customer