import React from 'react';
export default class SaveItemComponent extends React.Component
{

constructor(){
super();

this.saveNews=this.saveNews.bind(this);
}

saveNews(){

console.log("saveRest");
console.log(this.props.item.restaurant);
console.log(this.props.item.restaurant.location);
$.ajax({
url: "/restaurantdetails/saveRestaurant",
type: "POST",

data :'city_id=' +this.props.item.restaurant.location.city_id+
               '&city_name=' +this.props.item.restaurant.location.city+
               '&restaurant_id=' +this.props.item.restaurant.R.res_id+
               '&restaurant_name=' +this.props.item.restaurant.name+
               '&restaurant_address=' +this.props.item.restaurant.location.address+
               '&cuisine_name=' +this.props.item.restaurant.cuisines+
               '&url=' +this.props.item.restaurant.url+
               '&featured_image=' +this.props.item.restaurant.featured_image,


success : function(msg){
console.log("Saved Successfully!!");
alert("Restaurant is added to the favourites");




}.bind(this),
error: function(err){
console.log("Error during Save"+err);
alert("Error Occured");
}.bind(this)
});



}


render()
{
  console.log("inside rest item");
  var isUpdate=this.props.isUpdate;

if(!isUpdate){
  return (
    <article>
    <input type="button" className="btn btn-primary" value="Save" onClick={this.saveNews}></input>
    </article>

  );
}
else{
  return (
    <article>

    </article>

  );
  }
}
}
