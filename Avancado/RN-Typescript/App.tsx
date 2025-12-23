import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
	FlatList,
	Pressable,
	StyleSheet,
	Text,
	TextInput,
	View,
} from 'react-native';
import { Aluno } from './src/components/aluno';

interface IAlunoProps {
	nome: string;
	idade: string | number;
}

export default function App() {
	const [nome, setNome] = useState('');
	const [idade, setIdade] = useState('');
	const [showInput, setShowInput] = useState(false);

	const [alunos, setAlunos] = useState<IAlunoProps[]>([
		{ nome: 'Helio', idade: 22 },
		{ nome: 'Junior', idade: 22 },
	]);

	return (
		<View style={styles.container}>
			<View style={{ flexDirection: 'row' }}>
				<Text style={styles.title}>Projeto React Native</Text>
				<Pressable
					onPress={() => {
						setShowInput(!showInput);
					}}
				>
					<Text style={styles.title}>{showInput ? 'x' : '+'}</Text>
				</Pressable>
			</View>

			{showInput && (
				<View style={styles.areaInput}>
					<TextInput
						style={styles.input}
						placeholder="Digite seu nome..."
						value={nome}
						onChangeText={(text) => setNome(text)}
					/>

					<TextInput
						style={styles.input}
						placeholder="Digite sua idade..."
						value={nome}
						onChangeText={(text) => setIdade(text)}
					/>

					<Pressable style={styles.button}>
						<Text style={{ color: '#FFF', textAlign: 'center' }}>
							Cadastrar
						</Text>
					</Pressable>
				</View>
			)}

			<FlatList
				style={{ flex: 1, paddingHorizontal: 14 }}
				data={alunos}
				renderItem={({ item }) => (
					<Aluno nome={item.nome} idade={item.idade} />
				)}
			/>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		marginTop: 36,
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 28,
		paddingLeft: 14,
	},
	areaInput: {
		paddingHorizontal: 14,
		marginBottom: 14,
		gap: 8,
	},
	input: {
		backgroundColor: '#DDD',
		color: '#000',
		padding: 8,
		borderRadius: 8,
	},
	button: {
		backgroundColor: '#0f291E',
		padding: 8,
		borderRadius: 8,
	},
});
