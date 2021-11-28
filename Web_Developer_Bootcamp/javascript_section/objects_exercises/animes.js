let animes = [
	{
		title: "Hunter x Hunter",
		rating: 9.12,
		hasWatched: true
	},
	{
		title: "Mob Pycho 100 II",
		rating: 8.89,
		hasWatched: false
	},
	{
		title: "Monster",
		rating: 8.72,
		hasWatched: true
	}
]

animes.forEach(function(anime){
	let str = '"' + anime.title + '" - ' + anime.rating + ' stars';
	if (anime.hasWatched) {
		console.log('You have watched ' + str);
	} else {
		console.log('You hav not watched ' + str);
	}
});