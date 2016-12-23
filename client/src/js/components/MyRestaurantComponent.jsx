var React = require('react');
var {Link} = require('react-router');

import RestaurantBoxComponent from './RestaurantBoxComponent.jsx';

export default class MyRestaurantComponent extends React.Component{

  constructor(){
    super();
    this.state={restAr:[]};
  }

  componentDidMount()
  {

    console.log("componentDidMount");
    //this.props.news="get lost news";
    //console.log(this.props.item);
  //  this.setState({news:"hello"});

  $.ajax({
      url: "/restaurantdetails/viewRestaurant",
      type: "GET",
      //  data:this.props.item,
      success : function(msg){
        console.log("Retrieve Successfully!!"+msg);
         this.setState({restAr:msg});
          //  return(<NewsBoxComponent news={msg}/>)
        //  var d=this.state.news;

      }.bind(this),
      error: function(err){
        console.log("Error during Retrieving"+err);
      }.bind(this)
    });


  }


  render() {

    return(

      <RestaurantBoxComponent restAr={this.state.restAr}/>

    )
  }
}
