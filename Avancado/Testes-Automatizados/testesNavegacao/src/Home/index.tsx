import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TStackParamList } from '../../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export default function Home() {
	const navigation =
		useNavigation<NativeStackNavigationProp<TStackParamList>>();

	return (
		<View style={styles.container}>
			<Text>Página Home</Text>
			<Button
				title="Perfil"
				onPress={() => navigation.navigate('Profile')}
			/>
			<Button
				title="User"
				onPress={() => navigation.navigate('User', { name: 'Helio' })}
			/>
			<Button
				title="Contato"
				onPress={() =>
					navigation.navigate('Contato', { telefone: '99999999' })
				}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
