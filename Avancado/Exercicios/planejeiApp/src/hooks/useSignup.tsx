import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { authService } from '../services/auth-services';

const signUpSchema = z
	.object({
		username: z.string().min(1, 'O nome do Usuário é obrigatorio'),
		email: z
			.email('Digite um email válido')
			.min(1, 'O email é obrigatorio'),
		password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres.'),
		confirmPassword: z
			.string()
			.nonempty('Confirmação de senha é obrigatória'),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'As senhas devem ser iguais',
		path: ['confirmPassword'],
	});

export type TSignUpFormData = z.infer<typeof signUpSchema>;

const useSignup = () => {
	const router = useRouter();

	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<TSignUpFormData>({
		resolver: zodResolver(signUpSchema),
	});

	const onSubmit = async (data: TSignUpFormData) => {
		try {
			await authService.signUp(data.email, data.password, data.username);
			router.replace('/(panel)/home/page');
		} catch (err) {
			console.log('FALHA AO CRIAR USUARIO');

			console.log(err);
		}
	};

	return { control, handleSubmit, onSubmit, isSubmitting, errors };
};

export default useSignup;
