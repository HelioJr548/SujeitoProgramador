import { Client, Databases, ID, Query } from 'react-native-appwrite';
// track the searches made by user

const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!;
const ENDPOINT_URL = process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!;
const PROJECT_ID = process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!;

const client = new Client()
	.setEndpoint('https://nyc.cloud.appwrite.io/v1')
	.setProject(PROJECT_ID!);

const database = new Databases(client);

export const updateSearchCount = async (query: string, movie: Movie) => {
	try {
		const result = await database.listDocuments(
			DATABASE_ID,
			COLLECTION_ID,
			[Query.equal('searchTerm', query)],
		);

		if (result.documents.length > 0) {
			const existingMovie = result.documents[0];

			await database.updateDocument(
				DATABASE_ID,
				COLLECTION_ID,
				existingMovie.$id,
				{
					count: existingMovie.count++,
				},
			);
		} else {
			await database.createDocument(
				DATABASE_ID,
				COLLECTION_ID,
				ID.unique(),
				{
					searchTerm: query,
					movie_id: movie.id,
					count: 1,
					title: movie.title,
					poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
				},
			);
		}
	} catch (error) {
		console.log(error);
		throw error;
	}

	// check if a record of that search has already been stored
	// if a document is found increment the searchCount field
	// if no document is found
	// create a new document in Appwrite database => 1
};
