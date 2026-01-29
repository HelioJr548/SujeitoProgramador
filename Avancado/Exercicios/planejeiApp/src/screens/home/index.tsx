import Index from '@/src/app';
import colors from '@/src/constants/colors';
import { TTravel } from '@/src/services/travel-services';
import { Feather } from '@expo/vector-icons';
import {
	differenceInCalendarDays,
	format,
	isBefore,
	isWithinInterval,
	parseISO,
} from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Link } from 'expo-router';
import {
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

	if (loading) {
		return <Index />;
	}

	const today = new Date();
	const startDate = parseISO(nextTravel.start_date);
	const endDate = parseISO(nextTravel.end_date);

	let statusMessage = '';
	if (isBefore(today, startDate)) {
		const daysLeft = differenceInCalendarDays(startDate, today);
		statusMessage =
			daysLeft === 1
				? 'Sua viagem é amanhã'
				: `Faltam ${daysLeft} dias para sua viagem`;
	} else if (isWithinInterval(today, { start: startDate, end: endDate })) {
		statusMessage = `Sua viagem está em andamento`;
	}

	const formatDateRange = (start: string, end: string) => {
		const formatStartDate = format(parseISO(start), 'dd MMMM', {
			locale: ptBR,
		});
		const formatEndDate = format(parseISO(end), 'dd MMMM yyyy', {
			locale: ptBR,
		});

		return `${formatStartDate} até ${formatEndDate}`;
	};

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

				{nextTravel && (
					<View style={styles.highlightCard}>
						<Text style={styles.highlightText}>
							{statusMessage}
						</Text>

						<Text style={styles.rangeText}>
							{formatDateRange(
								nextTravel.start_date,
								nextTravel.end_date,
							)}
						</Text>

						<Text style={styles.highlightCity}>
							{nextTravel.city}
						</Text>

						<TouchableOpacity
							style={styles.highlightButton}
							activeOpacity={1}
						>
							<Text style={styles.highlightButtonText}>
								Acessar viagem
							</Text>
						</TouchableOpacity>
					</View>
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
	container: {
		padding: 16,
		flex: 1,
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 24,
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
	highlightCard: {
		backgroundColor: colors.white,
		padding: 24,
		borderRadius: 8,
		marginBottom: 16,
	},
	highlightText: {
		color: colors.zinc,
		fontSize: 16,
		fontWeight: '500',
		marginBottom: 4,
	},
	rangeText: {
		color: colors.gray50,
	},
	highlightCity: {
		color: colors.zinc,
		fontSize: 18,
		fontWeight: '600',
		marginVertical: 14,
	},
	highlightButton: {
		backgroundColor: colors.orange,
		padding: 8,
		borderRadius: 4,
		alignItems: 'center',
		justifyContent: 'center',
	},
	highlightButtonText: {
		color: colors.white,
		fontWeight: '600',
	},
});
