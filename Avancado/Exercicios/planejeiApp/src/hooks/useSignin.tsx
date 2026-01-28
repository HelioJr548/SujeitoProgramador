import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { authService } from '../services/auth-services';

const signInSchema = z.object({
	email: z.email('Digite um email válido').min(1, 'O email é obrigatorio'),
	password: z.string().min(6, 'A senha é obrigatoria'),
});

export type TSignInFormData = z.infer<typeof signInSchema>;

const useSignin = () => {
	const router = useRouter();

	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<TSignInFormData>({
		resolver: zodResolver(signInSchema),
	});

	const onSubmit = async (data: TSignInFormData) => {
		try {
			await authService.signIn(data.email, data.password);
			router.replace('/(panel)/home/page');
		} catch (err) {
			console.log('FALHA AO LOGAR');

			console.log(err);
		}
	};

	return { control, handleSubmit, onSubmit, isSubmitting, errors };
};

export default useSignin;
