
import React from 'react';




export default class HomeComponent extends React.Component
{
	render()
	{
	 return(
	   <div className="container-fluid">
	       <div className="row">
	           <div className="col-md-12">
	               <div className="jumbotron">
	                   <h2>
	                       Home components
	                   </h2>
	                   <p>
	                      This is a home component
	                   </p>
	                   <p>
	                       <a className="btn btn-primary btn-large" href="#">Learn more</a>
	                   </p>
	               </div>
	           </div>
	       </div>
	   </div>
	 );
	}
}
