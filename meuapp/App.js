import { View, StyleSheet, ScrollView } from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.box1} />
				<View style={styles.box2} />
				<View style={styles.box3} />
				<View style={styles.box4} />
				<View style={styles.box5} />
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 40,
		flex: 1,
	},
	box1: {
		height: 250,
		backgroundColor: 'blue',
	},
	box2: {
		height: 250,
		backgroundColor: 'red',
	},
	box3: {
		height: 250,
		backgroundColor: 'green',
	},
	box4: {
		height: 250,
		backgroundColor: 'purple',
	},
	box5: {
		height: 250,
		backgroundColor: 'orange',
	},
});
