var Thumbnail = React.createClass({
		
		render: function(){
			return <div class="col-sm-6 col-md-4">
    			<div class="thumbnail">
      				<img src={this.props.imageUrl} alt="..."></img>
      				<div class="caption">
        				<h3>{this.props.header}</h3>
        				<p>{this.props.description}</p>
        				<p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
      				</div>
    			</div>
  			</div>
		}
	});