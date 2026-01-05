import { View, Text } from 'react-native';
import {
	AreaInput,
	Background,
	Container,
	Input,
	SubmitButton,
	SubmitText,
} from '../SignIn/styles';

export default function SignUp() {
	return (
		<Background>
			<Container behavior={'padding'} enabled>
				<AreaInput>
					<Input placeholder="Seu nome"></Input>

					<Input placeholder="Seu email"></Input>

					<Input placeholder="Sua senha"></Input>
				</AreaInput>

				<SubmitButton>
					<SubmitText>Cadastrar</SubmitText>
				</SubmitButton>
			</Container>
		</Background>
	);
}
