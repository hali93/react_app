var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'film o czarodzieju',
		pic: 'https://i.pinimg.com/564x/8f/f6/0f/8ff60f020b18bd5468193fbffebcb33c.jpg'
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o królu sawanny',
		pic: 'http://www.chipandco.com/wp-content/uploads/2010/07/lionking3-500x280.png'
	},
	{
		id: 3,
		title: 'Gra o Tron',
		desc: ' serial fantasy',
		pic: 'http://www.hbo.pl/siteimages/articleimages/13000/13043_-_254.jpg'
	},
	{
		id: 4,
		title: 'Arrow',
		desc: 'Superhero fiction',
		pic: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Arrow_%28cast%29.jpg'
	}
];

var moviesElements = movies.map(function(movie) {
	return React.createElement('li', {key: movie.id},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc),
		React.createElement('img', {src:movie.pic})
		);
});


var element = 
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {}, moviesElements)
	);

ReactDOM.render(element,document.getElementById('app'));