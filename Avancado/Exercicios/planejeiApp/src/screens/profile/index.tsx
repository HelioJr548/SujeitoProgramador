import Index from '@/src/app';
import { NavBar } from '@/src/components/NavBar';
import colors from '@/src/constants/colors';
import { ProfileData } from '@/src/hooks/useProfile';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ProfileScreenProps {
	logout: () => Promise<void>;
	loading: boolean;
	profile: ProfileData | null;
}

export function ProfileScreen({
	logout,
	loading,
	profile,
}: ProfileScreenProps) {
	if (loading) return <Index />;

	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.container}>
				<NavBar title={'Perfil'} />

				<View style={styles.card}>
					<View style={styles.cardInfo}>
						<Text style={styles.label}>Nome Completo:</Text>
						<Text style={styles.value}>{profile?.name}</Text>
					</View>

					<View style={styles.cardInfo}>
						<Text style={styles.label}>Email:</Text>
						<Text style={styles.value}>{profile?.email}</Text>
					</View>

					<View style={styles.cardInfo}>
						<Text style={styles.label}>Conta criada em:</Text>
						<Text style={styles.value}>03/02/2026</Text>
					</View>
				</View>
				<Pressable
					style={styles.logoutButton}
					onPress={async () => await logout()}
				>
					<Text style={styles.logoutButtonText}>Sair da conta</Text>
				</Pressable>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	logoutButtonText: {
		color: colors.red,
		fontWeight: '500',
		fontSize: 18,
	},
	logoutButton: {
		borderWidth: 1,
		borderColor: colors.red,
		borderRadius: 4,
		padding: 8,
		alignItems: 'center',
		justifyContent: 'center',
	},
	value: { color: colors.gray100 },
	label: {
		fontSize: 16,
		fontWeight: '500',
		color: colors.white,
	},
	cardInfo: { gap: 4 },
	card: {
		backgroundColor: colors.gray200,
		borderRadius: 8,
		padding: 16,
		gap: 12,
		marginBottom: 16,
	},
	safeArea: {
		flex: 1,
		backgroundColor: colors.zinc,
		padding: Platform.OS === 'ios' ? 16 : 0,
	},
	container: { padding: 16, flex: 1 },
});
