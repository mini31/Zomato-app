
import 'file?name=[name].[ext]!../index.html';
import 'file?name=[name].[ext]!../css/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
var {browserHistory,hashHistory, Route, Router, IndexRoute}= require('react-router');

import AboutComponent from './components/AboutComponent.jsx';
import HomeComponent from './components/HomeComponent.jsx';
import ContactComponent from './components/ContactComponent.jsx';
import NavBarComponent from './components/NavBarComponent.jsx';
import LoginComponent from './components/LoginComponent.jsx';
import RegisterComponent from './components/RegisterComponent.jsx';
import RestaurantBoxComponent from './components/RestaurantBoxComponent.jsx';
import SaveItemComponent from './components/SaveItemComponent.jsx';
import SearchComponent from './components/SearchComponent.jsx';
import updateDeleteComponent from './components/updateDeleteComponent.jsx';

class MainComponent extends React.Component{

render(){
  console.log("inside main jsx");
return (<div>
        <NavBarComponent />
        <br/><br/><br/><br/>
        {this.props.children}
</div>
)
}
}


ReactDOM.render(
  <Router history={hashHistory}>
       <Route path="/" components={LoginComponent} />
       <Route path="/home" components={MainComponent} >
         <IndexRoute component={HomeComponent} />
         <Route path="/about" component={AboutComponent}/>
         <Route path="/contact" components={ContactComponent} />
         <Route path="/login" components={LoginComponent} />
         <Route path="/register" components={RegisterComponent} />



       </Route>
     </Router>,document.getElementById('content'));
