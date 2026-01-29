import Index from '@/src/app';
import colors from '@/src/constants/colors';
import { TTravel } from '@/src/services/travel-services';
import { Feather } from '@expo/vector-icons';
import { differenceInCalendarDays, format, isBefore, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Link, router } from 'expo-router';
import {
	FlatList,
	Platform,
	StatusBar,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface IHomeScreenProps {
	loading: boolean;
	travels: TTravel[];
}

export default function HomeScreen({ travels, loading }: IHomeScreenProps) {
	const [nextTravel, ...otherTravels] = travels;
	if (loading) return <Index />;

	const today = new Date();
	const startDate = parseISO(nextTravel!.start_date);
	const endDate = parseISO(nextTravel!.end_date);

	const daysLeft = differenceInCalendarDays(startDate, today);
	const statusMessage = isBefore(today, startDate)
		? daysLeft === 1
			? 'Sua viagem é amanhã'
			: `Faltam ${daysLeft} dias para sua viagem`
		: 'Viagem em andamento';

	const formatDateRange = (start: string, end: string) => {
		const startDate = format(parseISO(start), 'dd MMM', { locale: ptBR });
		const endDate = format(parseISO(end), 'dd MMM yyyy', { locale: ptBR });
		return `${startDate} - ${endDate}`;
	};

	const renderTripCard = (item: TTravel) => (
		<TouchableOpacity
			style={styles.secondaryCard}
			onPress={() => router.push(`/(panel)/detail/${item.id}`)}
		>
			<View style={styles.cardContent}>
				<Text style={styles.cardDateText}>
					{formatDateRange(item.start_date, item.end_date)}
				</Text>
				<Text style={styles.cardCityText}>{item.city}</Text>
			</View>
			<Feather name="chevron-right" color="#9CA3AF" size={20} />
		</TouchableOpacity>
	);

	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.mainContainer}>
				<StatusBar
					backgroundColor={colors.zinc}
					barStyle="light-content"
				/>

				<View style={styles.headerRow}>
					<Text style={styles.headerTitle}>Planejei</Text>
					<View style={styles.headerActions}>
						<Link
							href={'/(panel)/profile/page'}
							style={[
								styles.actionButton,
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
							style={styles.actionButton}
						>
							<Feather
								name="plus"
								color={colors.white}
								size={30}
							/>
						</Link>
					</View>
				</View>

				{nextTravel && (
					<View style={styles.featuredCard}>
						<View style={styles.statusContainer}>
							<View style={styles.statusIndicator} />
							<Text style={styles.statusText}>
								{statusMessage}
							</Text>
						</View>
						<View style={styles.dateContainer}>
							<Feather
								name="calendar"
								color={colors.gray50}
								size={16}
							/>
							<Text style={styles.dateRangeText}>
								{formatDateRange(
									nextTravel.start_date,
									nextTravel.end_date,
								)}
							</Text>
						</View>
						<Text style={styles.featuredCityText}>
							{nextTravel.city}
						</Text>
						<TouchableOpacity
							style={styles.mainActionButton}
							onPress={() =>
								router.push(`/(panel)/detail/${nextTravel.id}`)
							}
						>
							<Text style={styles.mainActionButtonText}>
								Ver detalhes
							</Text>
							<View style={styles.buttonIconContainer}>
								<Feather
									name="arrow-right"
									color={colors.white}
									size={20}
								/>
							</View>
						</TouchableOpacity>
					</View>
				)}

				{otherTravels.length > 0 && (
					<>
						<Text style={styles.sectionTitle}>
							Próximas viagens
						</Text>
						<FlatList
							data={otherTravels}
							keyExtractor={(item) => item.id}
							renderItem={({ item }) => renderTripCard(item)}
						/>
					</>
				)}
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
	mainContainer: { padding: 16, flex: 1 },
	headerRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 24,
	},
	headerTitle: { color: colors.orange, fontSize: 30, fontWeight: '600' },
	headerActions: { flexDirection: 'row-reverse', gap: 10 },
	actionButton: { borderRadius: 99, padding: 8 },
	featuredCard: {
		backgroundColor: colors.white,
		padding: 28,
		borderRadius: 20,
		marginBottom: 24,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 8 },
		shadowOpacity: 0.1,
		shadowRadius: 24,
		elevation: 8,
	},
	statusContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 12,
		marginBottom: 12,
		padding: 12,
		backgroundColor: 'rgba(255, 165, 0, 0.1)',
		borderRadius: 12,
		borderLeftWidth: 4,
		borderLeftColor: colors.orange,
	},
	statusIndicator: {
		width: 10,
		height: 10,
		borderRadius: 5,
		backgroundColor: colors.orange,
	},
	statusText: {
		fontSize: 16,
		fontWeight: '600',
		color: colors.zinc,
		flex: 1,
	},
	dateContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
		marginBottom: 16,
		paddingVertical: 8,
	},
	dateRangeText: { fontSize: 16, color: colors.gray50, fontWeight: '500' },
	featuredCityText: {
		fontSize: 28,
		fontWeight: '800',
		color: colors.zinc,
		marginBottom: 24,
		letterSpacing: -0.8,
		lineHeight: 32,
	},
	mainActionButton: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 12,
		paddingVertical: 16,
		paddingHorizontal: 24,
		backgroundColor: colors.orange,
		borderRadius: 16,
		shadowColor: '#f97316',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.3,
		shadowRadius: 12,
		elevation: 6,
	},
	mainActionButtonText: {
		fontSize: 16,
		fontWeight: '700',
		color: colors.white,
		letterSpacing: -0.2,
	},
	buttonIconContainer: {
		width: 32,
		height: 32,
		borderRadius: 16,
		backgroundColor: 'rgba(255,255,255,0.2)',
		alignItems: 'center',
		justifyContent: 'center',
	},
	sectionTitle: {
		color: colors.white,
		fontSize: 18,
		fontWeight: '600',
		marginTop: 14,
		marginBottom: 8,
	},
	secondaryCard: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: colors.gray200,
		padding: 20,
		borderRadius: 16,
		marginBottom: 12,
		borderWidth: 1,
		borderColor: 'rgba(255,255,255,0.1)',
	},
	cardContent: { flex: 1 },
	cardDateText: { fontSize: 14, color: colors.gray100, marginBottom: 4 },
	cardCityText: { fontSize: 18, fontWeight: '700', color: colors.white },
});
