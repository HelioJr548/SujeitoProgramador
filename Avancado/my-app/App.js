import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import api from './src/services/api';
import Filmes from './src/components/Filmes';

export default function App() {
	const [filmes, setFilmes] = useState([]);

	useEffect(() => {
		const loadFilmes = async () => {
			const { data } = await api.get('r-api/?api=filmes');
			// console.log(data);
			setFilmes(data);
		};

		loadFilmes();
	}, []);

	return (
		<View style={styles.container}>
			<FlatList
				data={filmes}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <Filmes data={item} />}
			/>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 30,
		flex: 1,
	},
});
