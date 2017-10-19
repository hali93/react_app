var Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired,
	},
	render: function() {
		return (
			React.createElement('div', {},
			React.createElement('h2', {}, this.props.movie.id),
			React.createElement('h2', {}, this.props.movie.title),
			React.createElement('p', {}, this.props.movie.desc),
			React.createElement('img', {src: this.props.movie.src})
			)
		);	 	
	}
});

var movie = {
	id: 1,
	title: 'Game of Thrones',
	desc: 'Fantasy',
	src: 'http://www.hbo.pl/siteimages/articleimages/13000/13043_-_254.jpg',
};

var element = React.createElement(Movie, {movie: movie});

ReactDOM.render(element,document.getElementById('app'));