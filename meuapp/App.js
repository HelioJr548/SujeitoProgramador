import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

// https://icons.expo.fyi/Index --> Site com todos os icons para o Expo
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function App() {
	return (
		<View style={styles.container}>
			<Ionicons name="checkmark-circle" size={45} color="green" />

			<FontAwesome.Button // https://docs.expo.dev/guides/icons/#button-component
				name="facebook"
				backgroundColor="hsla(221, 44%, 41%, 1.00)"
				// onPress={loginWithFacebook}
			>
				Login with Facebook
			</FontAwesome.Button>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
