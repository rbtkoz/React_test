var Badge = React.createClass({
	//createClass takes a configuration object
	//a render method that returns some jsx
		render: function(){
			return <button className="btn btn-primary" type="button">
  			{this.props.title} <span className="badge">{this.props.number}</span>
			</button>
		}
	});