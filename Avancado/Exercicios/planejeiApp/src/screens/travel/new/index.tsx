import colors from '@/src/constants/colors';
import { TTravelFormData } from '@/src/hooks/useCreateTravel';
import { Feather } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Control, FieldErrors, UseFormHandleSubmit } from 'react-hook-form';
import {
	Platform,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface INewTravelScreenProps {
	control: Control<TTravelFormData>;
	handleSubmit: UseFormHandleSubmit<TTravelFormData>;
	errors: FieldErrors<TTravelFormData>;
	isSubmitting: boolean;
	createNewTravel: (data: TTravelFormData) => Promise<void>;
}

export default function NewTravelScreen({
	control,
	createNewTravel,
	errors,
	handleSubmit,
	isSubmitting,
}: INewTravelScreenProps) {
	return (
		<SafeAreaView style={styles.safeArea}>
			<StatusBar
				backgroundColor={colors.zinc}
				barStyle={'light-content'}
			/>
			<ScrollView style={styles.container}>
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

				<Text style={styles.subTitle}>
					Vamos cadastrar sua próxima viagem
				</Text>
			</ScrollView>
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
	subTitle: {
		fontSize: 28,
		marginVertical: 14,
		color: colors.white,
		fontWeight: '500',
	},
});
