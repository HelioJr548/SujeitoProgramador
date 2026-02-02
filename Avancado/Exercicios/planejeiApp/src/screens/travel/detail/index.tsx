import Index from '@/src/app';
import colors from '@/src/constants/colors';
import { TTravel } from '@/src/services/travel-services';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Link } from 'expo-router';
import {
	Platform,
	Pressable,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	TextInput,
	View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ITravelDetialScreenProps {
	loading: boolean;
	travel: TTravel | null;
	handleDeleteTravel: () => Promise<void>;
	remindersHook: {
		loading: boolean;
		newReminder: string;
		setNewReminder: React.Dispatch<React.SetStateAction<string>>;
		addReminder: () => Promise<void>;
	};
}

export function TravelDetailScreen({
	loading,
	travel,
	handleDeleteTravel,
	remindersHook,
}: ITravelDetialScreenProps) {
	if (loading || !travel) return <Index />;

	const formattedStartDate = format(
		parseISO(travel.start_date),
		'dd MMMM yyyy',
		{ locale: ptBR },
	);
	const formattedEndDate = format(parseISO(travel.end_date), 'dd MMMM yyyy', {
		locale: ptBR,
	});

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

				<View>
					<Text style={[styles.heading, { marginTop: 14 }]}>
						Detalhes da sua viagem para
					</Text>
					<Text
						style={[
							styles.heading,
							{ fontWeight: '600', marginBottom: 14 },
						]}
					>
						{travel?.city}
					</Text>
				</View>

				<ScrollView showsVerticalScrollIndicator={false}>
					<View style={styles.infoContainer}>
						<View style={styles.infoRow}>
							<MaterialCommunityIcons
								name="airplane-takeoff"
								size={24}
								color={colors.white}
							></MaterialCommunityIcons>
							<Text style={styles.infoDate}>
								{formattedStartDate}{' '}
							</Text>
						</View>
						<View style={styles.infoRow}>
							<MaterialCommunityIcons
								name="airplane-landing"
								size={24}
								color={colors.white}
							></MaterialCommunityIcons>
							<Text style={styles.infoDate}>
								{formattedEndDate}{' '}
							</Text>
						</View>
					</View>

					<View style={styles.cardContainer}>
						<Text style={styles.cardLabel}>Cidade:</Text>
						<Text style={styles.cardValue}>{travel?.city}</Text>

						<Text style={styles.cardLabel}>Hotel:</Text>
						<Text style={styles.cardValue}>
							{travel?.hotel_address}
						</Text>

						<Pressable
							onPress={async () => await handleDeleteTravel()}
							style={styles.deleteButton}
						>
							<Text style={styles.deleteButtonText}>
								Excluir viagem
							</Text>
						</Pressable>
					</View>

					<Text style={styles.sectionTitle}>Lembretes</Text>

					<View style={styles.reminderInputContainer}>
						<TextInput
							placeholder="Digite um lembrete"
							placeholderTextColor={colors.gray100}
							style={styles.reminderInput}
							value={remindersHook.newReminder}
							onChangeText={(value) =>
								remindersHook.setNewReminder(value)
							}
						/>
						<Pressable
							style={styles.addButton}
							onPress={async () =>
								await remindersHook.addReminder()
							}
						>
							<Feather
								name="plus"
								size={24}
								color={colors.white}
							/>
						</Pressable>
					</View>

					<View style={styles.spacingVertical}>
						<View style={styles.reminderItem}>
							<Text style={styles.reminderText}>
								Lembrar de pegar a chave do AP
							</Text>

							<Pressable>
								<Feather
									name="trash"
									size={20}
									color={colors.red}
								/>
							</Pressable>
						</View>
					</View>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	reminderText: { flex: 1, color: colors.white },
	reminderItem: {
		backgroundColor: colors.gray200,
		padding: 10,
		borderRadius: 8,
		marginBottom: 14,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	spacingVertical: { marginBottom: 14 },
	addButton: { backgroundColor: colors.orange, padding: 8, borderRadius: 4 },
	reminderInput: {
		flex: 1,
		color: colors.white,
		paddingVertical: 8,
	},
	reminderInputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: colors.gray200,
		borderRadius: 8,
		padding: 8,
		marginBottom: 14,
	},
	sectionTitle: {
		color: colors.white,
		fontSize: 18,
		marginBottom: 8,
		fontWeight: '600',
	},
	deleteButtonText: {
		color: colors.red,
		fontWeight: '500',
	},
	deleteButton: {
		backgroundColor: 'transparent',
		padding: 8,
		borderRadius: 4,
		borderColor: colors.red,
		borderWidth: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	cardValue: {
		color: colors.black,
		fontSize: 16,
		fontWeight: '500',
		marginBottom: 14,
	},
	cardLabel: { color: colors.zinc },
	cardContainer: {
		backgroundColor: colors.white,
		padding: 16,
		borderRadius: 8,
		marginVertical: 16,
	},
	infoDate: { color: colors.white, fontSize: 16 },
	infoRow: { flexDirection: 'row', gap: 8, alignItems: 'center' },
	infoContainer: { gap: 8 },
	heading: {
		color: colors.white,
		fontSize: 24,
	},
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
