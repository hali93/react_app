var Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired,
	},
	render: function() {
		return (
			React.createElement('div', {},
				React.createElement(MovieTitle, {title:this.props.movie.title}),
				React.createElement(MovieDescription, {description:this.props.movie.desc}),
				React.createElement(MoviePhoto, {photo: this.props.movie.src})
			)
		);	 	
	}
});

var MovieTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired,
	},
	render: function() {
		return React.createElement('h2', {}, this.props.title)
	}
});

var MovieDescription = React.createClass({
	propTypes: {
		description: React.PropTypes.string.isRequired,
	},
	render: function() {
		return React.createElement('p', {}, this.props.description)
	}
});

var MoviePhoto = React.createClass({
	propTypes: {
		photo: React.PropTypes.string.isRequired,
	},
	render: function() {
		/*console.log('Moje foto', this.props);*/
		return React.createElement('img', {src: this.props.photo})
	}
});

var MovieList = React.createClass({
	propTypes: {
		list: React.PropTypes.array.isRequired,
	},
	render: function() {
		var movieList = this.props.list.map(function(movie) {
			return React.createElement(Movie, {key: movie.id, movie:movie})
		});
		return (
			React.createElement('div',{}, movieList)
			)
	}
})

var movies = [
	{
		id: 1,
		title: 'Game of Thrones',
		desc: 'Fantasy',
		src: 'http://www.hbo.pl/siteimages/articleimages/13000/13043_-_254.jpg',
	},
	{
		id: 2,
		title: 'Arrow',
		desc: 'Sci-Fi',
		src: 'http://data.whicdn.com/images/101904233/large.jpg',
	},
	{
		id: 3,
		title: 'Super Girl',
		desc: 'Sci-Fi',
		src: 'https://i.pinimg.com/736x/85/04/79/850479481bc2d9d32caa8b9de2e6bee8--melissa-supergirl-supergirl-series.jpg',
	}
]

var element = React.createElement(MovieList, {list:movies});

ReactDOM.render(element,document.getElementById('app'));