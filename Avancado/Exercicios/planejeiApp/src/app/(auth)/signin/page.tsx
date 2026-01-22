/*
	CONTAINER
	- Responsavel por logica de negocio, busca de dados (via hooks e services)
	- Chama a Screen passando os dados necessarios para montar componentes visuais
*/

import SignInScreen from '@/src/screens/signin';

export default function SignIn() {
	return <SignInScreen />;
}
