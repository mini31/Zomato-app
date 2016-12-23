import React from 'react';


export default class RestaurantComponent extends React.Component {

render() {

console.log("Inside Restaurant");
var restaurant=this.props.item.restaurant;
console.log(restaurant);


return(
<article className="jumbotron">
<div className="row" id="main">

<div className="col-4"><img src={restaurant.featured_image} alt="image" width="20%" height="100px"/>
</div>

<div className="col-8">
      <div  className="col-8">
      <text><h3><strong><a href="#" >{restaurant.name}</a></strong></h3></text>
      <h4><strong>{restaurant.location['locality']}</strong></h4>
      <h5><strong>{restaurant.location.address}</strong></h5>
      </div>
</div>
</div>


<div className="row">
<div className="col-4 pull-left">
<p></p>
<text>CUSINES : </text>
<p> </p>
<text> COST FOR TWO: </text>
</div>

<div className="col-8">
      <div  className="col-8">
      <p></p>
      <text>South Indian, North-Indian, Chinese, Continental </text>
      <p></p>
      <text> 550 Rupees</text>
      </div>
</div>



</div>
</article>

)
}

}
