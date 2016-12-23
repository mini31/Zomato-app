
import React from 'react';

import SearchComponent from './SearchComponent.jsx';
import RestaurantBoxComponent from './RestaurantBoxComponent.jsx';


export default class HomeComponent extends React.Component{
constructor(){
super();
this.state={restaurants:[],isUpdate:false};

this.setRestaurantAr=this.setRestaurantAr.bind(this);

}

setRestaurantAr(restAr) {
this.setState({restaurants:restAr});
console.log("inside main");
console.log(this.state.restaurants);

}




render(){

return(
<div>

<SearchComponent restSource={this.setRestaurantAr.bind(this)}/>
<RestaurantBoxComponent  restAr={this.state.restaurants} isUpdate={this.state.isUpdate}/>


</div>

)
}

}
