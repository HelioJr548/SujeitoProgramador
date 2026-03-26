export const TMDB_CONFIG = {
	BASE_URL: 'https://api.themoviedb.org/3',
	API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
	headers: {
		accept: 'application/json',
		Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
	},
};

export const fetchMovies = async ({ query }: { query: string }) => {
	const endpoint = query
		? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
		: `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

	const response = await fetch(endpoint, {
		method: 'GET',
		headers: TMDB_CONFIG.headers,
	});

	if (!response.ok) {
		throw new Error(`Failed to fetch movies: ${response.statusText}`);
	}

	const data = await response.json();

	return data.results;
};

// const url = 'https://api.themoviedb.org/3/keyword/keyword_id/movies';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		accept: 'application/json',
// 		Authorization:
// 			'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTk1ODgyNWUyZjgyMmFiNjA0MjBiN2QyYjY0MTFhOCIsIm5iZiI6MTc3NDQ2OTA0My4wNTUsInN1YiI6IjY5YzQzZmIzZWIzN2ZmZWQzMTA2YzYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G0y01kvpXLZ2ZfDBZEhKi1T_kpB9T0H9NL9VhasWyPs',
// 	},
// };

// fetch(url, options)
// 	.then((res) => res.json())
// 	.then((json) => console.log(json))
// 	.catch((err) => console.error(err));
