import { View, Text, ActivityIndicator } from 'react-native';
import {
	AreaInput,
	Background,
	Container,
	Input,
	SubmitButton,
	SubmitText,
} from '../SignIn/styles';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/auth';

export default function SignUp() {
	const { signUp, loadingAuth } = useContext(AuthContext);
	const [nome, setNome] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function handleSignUp() {
		if (nome === '' || email === '' || password === '') return;

		signUp(email, password, nome);
	}

	return (
		<Background>
			<Container behavior={'padding'} enabled>
				<AreaInput>
					<Input
						placeholder="Seu nome"
						value={nome}
						onChangeText={setNome}
					/>

					<Input
						placeholder="Seu email"
						value={email}
						onChangeText={setEmail}
					/>

					<Input
						placeholder="Sua senha"
						value={password}
						onChangeText={setPassword}
						secureTextEntry={true}
					/>
				</AreaInput>

				<SubmitButton onPress={handleSignUp}>
					{loadingAuth ? (
						<ActivityIndicator size={25} color="#fff" />
					) : (
						<SubmitText>Cadastrar</SubmitText>
					)}
				</SubmitButton>
			</Container>
		</Background>
	);
}
