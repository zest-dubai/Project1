import React,{Component} from 'react';
import {Link, Switch,Route} from 'react-router-dom'
import './App.css';
import Login from './components/login'
import Logout from './components/logout'
import Cust from './components/customer'
import Webcam from './components/webcam'
class App extends Component {
  render(){
    return (
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/customer" component={Cust}/>
        <Route exact path="/webcam" component={Webcam}/>
        <Route exact path="/logout" component={Logout}/>
      </Switch>
    );
  }
}
export default App;
