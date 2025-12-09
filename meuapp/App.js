import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
	return (
		<View style={styles.area}>
			

			<Text style={[styles.title, styles.centerText]}>Helio</Text>
			<Text style={styles.title}>Sujeito Programador</Text>
			<Text style={styles.subTitle}>Sou um texto 3</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	area:{
		marginTop: 50
	},
	title: {
		fontSize: 20,
		color: '#ff0000'
	},
	subTitle: {
		color: '#00FF00',
		fontSize: 17,
		marginTop: 15,
	},
	centerText: {
		textAlign: 'center'
	}
}) 