import { View, Text } from 'react-native';
import {
	AreaInput,
	Background,
	Container,
	Input,
	SubmitButton,
	SubmitText,
} from '../SignIn/styles';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

export default function SignUp() {
	const { user } = useContext(AuthContext);

	function handleSignUp() {
		console.log(user);
	}

	return (
		<Background>
			<Container behavior={'padding'} enabled>
				<AreaInput>
					<Input placeholder="Seu nome"></Input>

					<Input placeholder="Seu email"></Input>

					<Input placeholder="Sua senha"></Input>
				</AreaInput>

				<SubmitButton onPress={handleSignUp}>
					<SubmitText>Cadastrar</SubmitText>
				</SubmitButton>
			</Container>
		</Background>
	);
}
