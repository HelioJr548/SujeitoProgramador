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
