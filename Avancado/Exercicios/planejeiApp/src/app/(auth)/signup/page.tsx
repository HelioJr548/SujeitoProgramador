import useSignup from '@/src/hooks/useSignUp';
import SignUpScreen from '@/src/screens/signup';

export default function SignUp() {
	const { control, handleSubmit, onSubmit, isSubmitting, errors } =
		useSignup();

	return (
		<SignUpScreen
			control={control}
			handleSubmit={handleSubmit}
			onSubmit={onSubmit}
			isSubmitting={isSubmitting}
			errors={errors}
		/>
	);
}
