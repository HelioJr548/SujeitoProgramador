import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import { Background, Input, SubmitButton, SubmitText } from './styles';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useState } from 'react';

export default function New() {
	const [labelInput, setLabelInput] = useState('');
	const [valueInput, setValueInput] = useState('');
	const [type, setType] = useState('receita');

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<Background>
				<Header title="Registrando" />

				<SafeAreaView style={{ alignItems: 'center' }}>
					<Input
						placeholder="Descrição desse registro"
						value={labelInput}
						onChangeText={setLabelInput}
					/>
					<Input
						placeholder="Valor desejado"
						keyboardType="numeric"
						value={valueInput}
						onChangeText={setValueInput}
					/>

					<SubmitButton>
						<SubmitText>Registrar</SubmitText>
					</SubmitButton>
				</SafeAreaView>
			</Background>
		</TouchableWithoutFeedback>
	);
}
