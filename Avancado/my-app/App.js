import { useRef } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

import * as Animatable from 'react-native-animatable';

const ButtonAnimated = Animatable.createAnimatableComponent(Pressable);

export default function App() {
	const buttonRef = useRef(null);

	const handleClick = () => {
		buttonRef.current.pulse();
	};
	return (
		<View style={styles.container}>
			<Animatable.Text
				style={styles.title}
				animation="shake"
				// iterationCount={Infinity}
				// duration={5000}
			>
				Helio Junior
			</Animatable.Text>

			<ButtonAnimated
				style={styles.button}
				animation="fadeInUp"
				ref={buttonRef}
				onPress={handleClick}
			>
				<Text style={{ color: '#FFF' }}>Animar</Text>
			</ButtonAnimated>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f0f0f0',
	},
	title: {
		fontSize: 25,
	},
	button: {
		width: '70%',
		height: 30,
		backgroundColor: '#121212',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 25,
	},
});
