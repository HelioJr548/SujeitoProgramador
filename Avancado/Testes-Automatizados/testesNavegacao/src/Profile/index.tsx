import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TStackParamList } from '../../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export default function Profile() {
	const navigation =
		useNavigation<NativeStackNavigationProp<TStackParamList>>();

	return (
		<View style={styles.container}>
			<Text>Página Perfil</Text>
			<Button title="Voltar" onPress={() => navigation.goBack()} />
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
