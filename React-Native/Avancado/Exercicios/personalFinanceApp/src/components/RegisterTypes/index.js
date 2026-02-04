import { useState } from 'react';
import { RegisterContainer, RegisterLabel, RegisterTypeButton } from './styles';
import Feather from 'react-native-vector-icons/Feather';

export default function RegisterTypes({ type, sendTypeChanged }) {
	const [typeChecked, setTypeChecked] = useState(type);

	function changeType(name) {
		setTypeChecked(name);
		sendTypeChanged(name);
	}
	return (
		<RegisterContainer>
			<RegisterTypeButton
				checked={typeChecked === 'receita'}
				onPress={() => changeType('receita')}
			>
				<Feather name="arrow-up" size={26} color="#6366f1" />
				<RegisterLabel checked={typeChecked === 'receita'}>
					Receita
				</RegisterLabel>
			</RegisterTypeButton>

			<RegisterTypeButton
				checked={typeChecked === 'despesa'}
				onPress={() => changeType('despesa')}
			>
				<Feather name="arrow-down" size={26} color="#6366f1" />
				<RegisterLabel checked={typeChecked === 'despesa'}>
					Despesa
				</RegisterLabel>
			</RegisterTypeButton>
		</RegisterContainer>
	);
}
