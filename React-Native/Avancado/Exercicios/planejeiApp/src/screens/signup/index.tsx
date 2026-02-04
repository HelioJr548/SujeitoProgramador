import colors from '@/src/constants/colors';
import { TSignUpFormData } from '@/src/hooks/useSignup';
import { Link } from 'expo-router';
import {
	Control,
	Controller,
	FieldErrors,
	UseFormHandleSubmit,
} from 'react-hook-form';
import {
	ActivityIndicator,
	Image,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';

interface ISignUpScreenProps {
	control: Control<TSignUpFormData>;
	handleSubmit: UseFormHandleSubmit<TSignUpFormData>;
	onSubmit: (data: TSignUpFormData) => Promise<void>;
	isSubmitting: boolean;
	errors: FieldErrors<TSignUpFormData>;
}

export default function SignUpScreen({
	control,
	errors,
	handleSubmit,
	isSubmitting,
	onSubmit,
}: ISignUpScreenProps) {
	return (
		<ScrollView
			style={{ backgroundColor: colors.zinc }}
			contentContainerStyle={{ flexGrow: 1 }}
			showsHorizontalScrollIndicator={false}
		>
			<View style={styles.container}>
				<StatusBar
					backgroundColor={colors.zinc}
					barStyle={'light-content'}
				/>

				<Image
					source={require('@/src/assets/logo.png')}
					style={styles.logo}
				/>

				<>
					<Controller
						control={control}
						name="username"
						defaultValue=""
						render={({ field: { onChange, onBlur, value } }) => (
							<View style={styles.inputContainer}>
								<TextInput
									style={styles.input}
									placeholder="Nome Completo..."
									autoCapitalize="none"
									placeholderTextColor={colors.gray50}
									value={value}
									onBlur={onBlur}
									onChangeText={onChange}
								/>
								{errors.username && (
									<Text style={styles.errorText}>
										{errors.username?.message}
									</Text>
								)}
							</View>
						)}
					/>

					<Controller
						control={control}
						name="email"
						defaultValue=""
						render={({ field: { onChange, onBlur, value } }) => (
							<View style={styles.inputContainer}>
								<TextInput
									style={styles.input}
									placeholder="Digite seu email..."
									autoCapitalize="none"
									placeholderTextColor={colors.gray50}
									value={value}
									onBlur={onBlur}
									onChangeText={onChange}
								/>
								{errors.email && (
									<Text style={styles.errorText}>
										{errors.email?.message}
									</Text>
								)}
							</View>
						)}
					/>

					<Controller
						control={control}
						name="password"
						defaultValue=""
						render={({ field: { onChange, onBlur, value } }) => (
							<View style={styles.inputContainer}>
								<TextInput
									style={styles.input}
									placeholder="**********"
									autoCapitalize="none"
									secureTextEntry={true}
									placeholderTextColor={colors.gray50}
									value={value}
									onBlur={onBlur}
									onChangeText={onChange}
								/>
								{errors.password && (
									<Text style={styles.errorText}>
										{errors.password?.message}
									</Text>
								)}
							</View>
						)}
					/>

					<Controller
						control={control}
						name="confirmPassword"
						defaultValue=""
						render={({ field: { onChange, onBlur, value } }) => (
							<View style={styles.inputContainer}>
								<TextInput
									style={styles.input}
									placeholder="Digite novamente sua senha..."
									autoCapitalize="none"
									secureTextEntry={true}
									placeholderTextColor={colors.gray50}
									value={value}
									onBlur={onBlur}
									onChangeText={onChange}
								/>
								{errors.confirmPassword && (
									<Text style={styles.errorText}>
										{errors.confirmPassword?.message}
									</Text>
								)}
							</View>
						)}
					/>
				</>

				<TouchableOpacity
					style={styles.button}
					onPress={handleSubmit(onSubmit)}
				>
					<Text style={styles.buttonText}>
						{isSubmitting ? (
							<ActivityIndicator size={20} color={colors.white} />
						) : (
							'Criar conta'
						)}
					</Text>
				</TouchableOpacity>

				<Link href="/(auth)/signin/page" style={styles.link}>
					Já possui uma conta? Faça login!
				</Link>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		justifyContent: 'center',
		backgroundColor: colors.zinc,
	},
	logo: {
		width: 150,
		height: 150,
		alignSelf: 'center',
		marginBottom: 34,
	},
	input: {
		backgroundColor: colors.white,
		borderWidth: 1,
		borderColor: colors.gray100,
		borderRadius: 4,
		padding: 12,
	},
	button: {
		backgroundColor: colors.orange,
		borderRadius: 4,
		padding: 12,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonText: {
		color: colors.white,
		fontSize: 16,
		fontWeight: 'bold',
	},
	link: {
		color: colors.white,
		marginTop: 14,
		textAlign: 'center',
	},
	errorText: {
		color: colors.red,
	},
	inputContainer: {
		marginBottom: 12,
	},
});
