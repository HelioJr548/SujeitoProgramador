import { Image, Pressable, Text, View } from 'react-native';

export default function Header() {
	return (
		<View style={styles.header}>
			<Pressable>
				<Image
					style={styles.logo}
					source={require('../img/logo.png')}
				/>
			</Pressable>
			<Pressable>
				<Image
					style={styles.send}
					source={require('../img/send.png')}
				/>
			</Pressable>
		</View>
	);
}

const styles = {
	header: {
		height: 55,
		backgroundColor: '#f8f8f8',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 15,
		borderBottomWidth: 0.2,
		borderBottomColor: '#e2e2e2',
		elevation: 2,
	},
	logo: {},
	send: {
		height: 23,
		width: 23,
	},
};
