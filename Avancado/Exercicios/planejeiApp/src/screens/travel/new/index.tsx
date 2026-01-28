import { DatePickerInput } from '@/src/components/calendar';
import colors from '@/src/constants/colors';
import { TTravelFormData } from '@/src/hooks/useCreateTravel';
import { Feather } from '@expo/vector-icons';
import { Link } from 'expo-router';
import {
	Control,
	Controller,
	FieldErrors,
	UseFormHandleSubmit,
	useWatch,
} from 'react-hook-form';
import {
	ActivityIndicator,
	Platform,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
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
	const startDate = useWatch({
		control,
		name: 'start_date',
	});

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

				<Controller
					control={control}
					name="title"
					render={({ field: { onChange, onBlur, value } }) => (
						<View style={styles.field}>
							<Text style={styles.label}>Objetivo da viagm</Text>
							<TextInput
								placeholder="Digite o titulo da viagem..."
								value={value}
								onBlur={onBlur}
								onChangeText={onChange}
								placeholderTextColor={colors.gray50}
								style={styles.input}
							/>
							{errors.title && (
								<Text style={styles.errorText}>
									{errors.title?.message}
								</Text>
							)}
						</View>
					)}
				/>

				<Controller
					control={control}
					name="city"
					render={({ field: { onChange, onBlur, value } }) => (
						<View style={styles.field}>
							<Text style={styles.label}>Cidade e estado</Text>
							<TextInput
								placeholder="Digite a cidade e o estado..."
								value={value}
								onBlur={onBlur}
								onChangeText={onChange}
								placeholderTextColor={colors.gray50}
								style={styles.input}
							/>
							{errors.city && (
								<Text style={styles.errorText}>
									{errors.city?.message}
								</Text>
							)}
						</View>
					)}
				/>

				<Text style={styles.categoryDescription}>
					Detalhes da viagem
				</Text>

				<Controller
					control={control}
					name="hotel_adress"
					render={({ field: { onChange, onBlur, value } }) => (
						<View style={styles.field}>
							<Text style={styles.label}>Endereço do hotel</Text>
							<TextInput
								placeholder="Digite o endereço do hotel..."
								value={value}
								onBlur={onBlur}
								onChangeText={onChange}
								placeholderTextColor={colors.gray50}
								style={styles.input}
							/>
							{errors.hotel_adress && (
								<Text style={styles.errorText}>
									{errors.hotel_adress?.message}
								</Text>
							)}
						</View>
					)}
				/>

				<Controller
					control={control}
					name="start_date"
					render={({ field: { onChange, value } }) => (
						<>
							<DatePickerInput
								label="Selecione a data de ida"
								value={value}
								onChange={onChange}
							/>
							{errors.start_date && (
								<Text style={styles.errorText}>
									{errors.start_date?.message}
								</Text>
							)}
						</>
					)}
				/>

				{startDate && (
					<Controller
						control={control}
						name="end_date"
						render={({ field: { onChange, value } }) => (
							<>
								<DatePickerInput
									label="Selecione a data de volta"
									value={value}
									onChange={onChange}
									minDate={startDate}
								/>
								{errors.end_date && (
									<Text style={styles.errorText}>
										{errors.end_date?.message}
									</Text>
								)}
							</>
						)}
					/>
				)}

				<TouchableOpacity
					style={styles.button}
					onPress={handleSubmit(createNewTravel)}
				>
					<Text style={styles.buttonText}>
						{isSubmitting ? (
							<ActivityIndicator color={colors.white} size={30} />
						) : (
							'Cadastrar viagem'
						)}
					</Text>
				</TouchableOpacity>
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
	input: {
		backgroundColor: colors.white,
		padding: 12,
		borderRadius: 4,
	},
	field: { marginBottom: 12 },
	label: { color: colors.white, marginBottom: 4, fontWeight: '600' },
	categoryDescription: {
		color: colors.white,
		fontSize: 18,
		fontWeight: '500',
		marginVertical: 14,
	},
	button: {
		backgroundColor: colors.orange,
		padding: 12,
		borderRadius: 4,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonText: {
		color: colors.white,
		fontWeight: '500',
	},
	errorText: {
		color: colors.red,
	},
});
