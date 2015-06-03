	var options = {
		thumbnailData: [{
		title: "Inbox",
		number: 32,
		header: "Learn React",
		description: "React is a fantastic new front end library for rendering web pages.React is a fantastic new front end library for rendering web pages.React is a fantastic new front end library for rendering web pages",
		imageUrl: "http://insin.github.io/talks/belfast-js-2014-12/react-logo.png"
	},
	{
		title: "Inbox",
		number: 12,
		header: "Learn Gulp",
		description: "Gulp will speed up your development workflow.Gulp will speed up your development workflow.Gulp will speed up your development workflow",
		imageUrl: "http://brunch.io/images/others/gulp.png"
	}]
};


	//Ask React to create an instance of class and reanderrender this class
	var element = React.createElement(ThumbnailList,options);

    //render on page
	React.render(element, document.querySelector('.container'));