import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import { Background, Input, SubmitButton, SubmitText } from './styles';
import { Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useState } from 'react';
import RegisterTypes from '../../components/RegisterTypes';
import api from '../../services/api';
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';

export default function New() {
	const navigation = useNavigation();

	const [labelInput, setLabelInput] = useState('');
	const [valueInput, setValueInput] = useState('');
	const [type, setType] = useState('receita');

	function handleSubmit() {
		Keyboard.dismiss();
		if (
			Number.isNaN(Number.parseFloat(valueInput)) ||
			type === null ||
			labelInput === ''
		) {
			alert('Preencha todos os campos!');
			return;
		}

		Alert.alert(
			'Confirmando dados',
			`Tipo: ${type} - Valor: R$ ${Number.parseFloat(valueInput)}`,
			[
				{
					text: 'Cancelar',
					style: 'cancel',
				},
				{
					text: 'Continuar',
					onPress: () => handleAdd(),
				},
			]
		);
	}

	async function handleAdd() {
		Keyboard.dismiss();
		await api.post('/receive', {
			description: labelInput,
			value: Number.parseFloat(valueInput),
			type,
			date: format(new Date(), 'dd/MM/yyyy'),
		});

		setLabelInput('');
		setValueInput('');
		navigation.navigate('Home');
	}

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
					<RegisterTypes type={type} sendTypeChanged={setType} />

					<SubmitButton onPress={handleSubmit}>
						<SubmitText>Registrar</SubmitText>
					</SubmitButton>
				</SafeAreaView>
			</Background>
		</TouchableWithoutFeedback>
	);
}
