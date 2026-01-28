import colors from '@/src/constants/colors';
import { Feather } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.container}>
				<StatusBar
					backgroundColor={colors.zinc}
					barStyle={'light-content'}
				/>

				<View style={styles.row}>
					<Text style={styles.title}>Planejei</Text>

					<View style={styles.contentLinks}>
						<Link
							href={'/(panel)/profile/page'}
							style={[
								styles.buttonAdd,
								{ backgroundColor: colors.gray50 },
							]}
						>
							<Feather
								name="user"
								color={colors.white}
								size={30}
							/>
						</Link>
						<Link
							href={'/(panel)/travel/new/page'}
							style={[
								styles.buttonAdd,
								// { backgroundColor: colors.orange },
							]}
						>
							<Feather
								name="plus"
								color={colors.white}
								size={30}
							/>
						</Link>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: colors.zinc,
		padding: Platform.OS === 'ios' ? 16 : 0,
	},
	container: {
		padding: 16,
		flex: 1,
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	title: { color: colors.orange, fontSize: 30, fontWeight: '600' },
	contentLinks: {
		flexDirection: 'row-reverse',
		gap: 10,
	},
	buttonAdd: {
		borderRadius: 99,
		padding: 8,
	},
});
