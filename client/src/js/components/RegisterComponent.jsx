import React from 'react';
import {hashHistory} from 'react-router';


export default class RegisterComponent extends React.Component{
constructor(){
    super();


}


register(){
  console.log("check register");
var data={
  "firstName":this.refs.firstName.value,
  "lastName":this.refs.lastName.value,
  "username":this.refs.username.value,
  "password":this.refs.password.value,
          }
  console.log("Register clicked");

  $.ajax({
    url:"/register/register",
    type: 'POST',
    data : data,
    success: function(msg)
    {
      console.log("inside register success");

      alert("registered Successfully");
      hashHistory.push("/login");


    },
    error: function(err)
    {
      console.log("error");
      alert("error during registration");
      hashHistory.push('/register');


    }
         });
    }

render(){
  console.log("inside register comp");
return (
<div className="loginContainer">
  <section id="logincontent">
    <form action="">
      <h1>Registration</h1>
      <div>
        <input type="text" ref="firstName" placeholder="Enter First name..." required=""  />
      </div>
      <div>
        <input type="text" ref="lastName" placeholder="Enter Last name..." required="" />
      </div>
      <div>
        <input type="text" ref="username" placeholder="Eneter username" required="" />
      </div>
      <div>
        <input type="password" ref="password" placeholder="Enter Password" required=""  />
      </div>
      <div>
        <input type="submit" onClick={this.register.bind(this)}value="Register Me" />


      </div>
    </form>

  </section>
</div>


   )
   }
}
