import React from 'react';

import UpdateDeleteComponent from './UpdateDeleteComponent.jsx';
import SaveItemComponent from './SaveItemComponent.jsx';
import RestaurantComponent from './RestaurantComponent.jsx';
export default class RestaurantBoxComponent extends React.Component{
constructor(){
    super();
}
render(){
console.log("RestaurantBoxComponent :: ");
console.log(this.props.restAr);
var that=this;



return(

  <div className="newsBox">
       {
         this.props.restAr.map(function(item){
         return(

         <div>
         <span><RestaurantComponent item={item}/></span>
         <span><SaveItemComponent item={item} isUpdate={that.props.isUpdate}/></span>
         <span><UpdateDeleteComponent item={item} isUpdate={that.props.isUpdate}/></span>
         </div>

         )
       }
       )
     }
  </div>
  )

}
}
