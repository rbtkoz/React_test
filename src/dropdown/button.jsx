  var React = require('react');

module.exports = React.createClass({
	//createClass takes a configuration object
	//a render method that returns some jsx

	
		render: function(){
			return <button onClick={this.props.whenClicked} className={"btn " + this.props.className} type="button">
  			{this.props.title} 
  			<span className={this.props.subTitleClassName}>{this.props.subTitle}</span>
			</button>
		}
	});

