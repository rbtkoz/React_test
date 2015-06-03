var ThumbnailList = React.createClass({
		render: function(){
			var list = this.props.thumbnailData.map(function(thumbnailProps){
				console.log(thumbnailProps)
				return <Thumbnail {...thumbnailProps}/>

			})
			console.log(list);
			return <div className ="thumbnailList">
				{list}

				</div>


		}
	})