var React = require("react");
var Dropdown = require('./dropdown');

var options = {
	title: 'Choose a dessert', //what should show up on the button to open/close the dropdown
	items: [
	'Apple Pie',
	'Peach Cobbler',
	'Coconut Cream Pie'
	]
};

	//Ask React to create an instance of class and reanderrender this class
var element = React.createElement(Dropdown,options);

    //render on page
React.render(element, document.querySelector('.container'));
