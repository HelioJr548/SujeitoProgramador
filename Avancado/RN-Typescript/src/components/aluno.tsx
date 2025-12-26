import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { StackParamList } from '../routes';

interface IAlunoProps {
	nome: string;
	idade: string | number;
}

export function Aluno({ nome, idade }: IAlunoProps) {
	const navigation =
		useNavigation<NativeStackNavigationProp<StackParamList>>();

	return (
		<Pressable
			style={styles.container}
			onPress={() => navigation.navigate('Detail', { name: nome, idade })}
		>
			<Text style={styles.text}>Bem vindo, {nome}</Text>
			<Text style={styles.text}>Idade: {idade}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 8,
		backgroundColor: '#121212',
		borderRadius: 8,
		gap: 9,
		marginTop: 14,
	},
	text: {
		color: '#FFF',
	},
});
