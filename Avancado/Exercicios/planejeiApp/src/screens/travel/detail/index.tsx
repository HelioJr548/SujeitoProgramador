import colors from '@/src/constants/colors';
import { TTravel } from '@/src/services/travel-services';
import { Feather } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ITravelDetialScreenProps {
	loading: boolean;
	travel: TTravel | null;
}

export function TravelDetailScreen({
	loading,
	travel,
}: ITravelDetialScreenProps) {
	return (
		<SafeAreaView style={styles.safeArea}>
			<StatusBar
				backgroundColor={colors.zinc}
				barStyle={'light-content'}
			/>
			<View style={styles.container}>
				<View style={styles.row}>
					<Link href={'/(panel)/home/page'}>
						<Feather
							name="arrow-left"
							color={colors.white}
							size={40}
						/>
					</Link>

					<Text style={styles.title}>Planejei</Text>
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
		alignItems: 'center',
		gap: 14,
	},
	title: { fontSize: 30, color: colors.orange, fontWeight: '600' },
});
