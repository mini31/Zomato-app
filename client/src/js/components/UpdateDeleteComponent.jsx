import React from 'react';

export default class UpdateDeleteComponent extends React.Component{
constructor(){
super();

this.updateSource=this.updateSource.bind(this);
this.deleteSource=this.deleteSource.bind(this);
}

updateSource()
	{
	console.log("Update source");
	var obj=this.props.item;
	console.log(obj.title);
	console.log(this.refs.txtTitle.value);
	obj.title=this.refs.txtTitle.value;
	console.log(obj.title);
		console.log();
		$.ajax({
				url: "/restaurantdetails/updateRestaurant",
				type: "PUT",
				data:this.props.item,
				success : function(msg){
					console.log("Updated Successfully!!"+msg);

				}.bind(this),
				error: function(err){
					console.log("Error during Update"+err);
				}.bind(this)
			});


	}

deleteSource()
	{
		$.ajax({
				url: "/restaurantdetails/deleteRestaurant",
				type: "DELETE",
				data:this.props.item,
				success : function(msg){
					console.log("Deleted Successfully!!"+msg);

				}.bind(this),
				error: function(err){
					console.log("Error during Deleting"+err);
				}.bind(this)
			});
	}
render(){
var isUpdate=this.props.isUpdate;
if(isUpdate){
return(
	<article>

	<a href={modalRef} role="button" data-toggle="modal" type="button" className="btn btn-primary" >Update</a>




	<div className="modal fade" id={newsId}>
									<div className="modal-dialog">
									<div className="modal-content">
									<div className="modal-header">
									<button className="close" data-dismiss="modal">X</button>
									<h4>Add tags to story</h4>
									</div>
									<div className="modal-body">
									<div className="container">
									<div className = "row jumbotron">

									<article className="col-sm-12">

									<article className="col-sm-6">
									<img  src={this.props.item.featured_image} alt="image" width="200" height="200" />
									</article>

									<article className="col-sm-6" >
									<h3><a href="#" >{this.props.item.name}</a></h3>

									<p>{this.props.item.address}</p>
									</article>

									</article>

									<form className="form-vertical">
												 <div className="form-group">
											<label className="col-lg-2 control-label" for="comment_input">Tags</label>
											<div className="col-lg-10">
											<input type="text"  id="commentid"  placeholder="Enter Tags" onChange={this.changeValue} />
												</div>
												 </div>
									</form>


								</div>

									<div className="modal-footer">
									<button className="btn btn-primary" type="button" data-dismiss="modal" onClick={this.updateSource} >Save Tags Here
									</button>

									<button className="btn btn-success" type="button" data-dismiss="modal" >Close
									</button>

									</div>
									</div>
									</div>
									</div>
									</div>
									</div>


					<button className="btn btn-primary" type="button" onClick={this.deleteSource}>Delete</button>
					</article>



		)
	}
	else{
	return(
<div></div>
	)
	}
	}
}
