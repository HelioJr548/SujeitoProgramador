import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {
	ActivityIndicator,
	FlatList,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import api from './src/services/api';
import Filmes from './src/components/Filmes';

export default function App() {
	const [filmes, setFilmes] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const loadFilmes = async () => {
			const { data } = await api.get('r-api/?api=filmes');
			setFilmes(data);
			setLoading(false);
		};

		loadFilmes();
	}, []);

	if (loading) {
		return (
			<View
				style={{
					alignItems: 'center',
					justifyContent: 'center',
					flex: 1,
				}}
			>
				<ActivityIndicator color="#121212" size={45} />
			</View>
		);
	} else {
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
}

const styles = StyleSheet.create({
	container: {
		marginTop: 30,
		flex: 1,
	},
});
