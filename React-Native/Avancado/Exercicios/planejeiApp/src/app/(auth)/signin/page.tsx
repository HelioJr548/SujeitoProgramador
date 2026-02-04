/*
	CONTAINER
	- Responsavel por logica de negocio, busca de dados (via hooks e services)
	- Chama a Screen passando os dados necessarios para montar componentes visuais
*/

import useSignin from '@/src/hooks/useSignin';
import SignInScreen from '@/src/screens/signin';

export default function SignIn() {
	const { control, errors, handleSubmit, isSubmitting, onSubmit } =
		useSignin();
	return (
		<SignInScreen
			control={control}
			errors={errors}
			handleSubmit={handleSubmit}
			isSubmitting={isSubmitting}
			onSubmit={onSubmit}
		/>
	);
}
