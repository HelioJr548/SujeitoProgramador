import { useState } from 'react';
import { Button, Text, View } from 'react-native';

export default function Message() {
	const [showMessage, setShowMessage] = useState(false);

	function handleShowMessage() {
		setTimeout(() => {
			setShowMessage(!showMessage);
		}, 1000);
	}

	return (
		<View>
			<Text testID="message">
				{showMessage ? 'Bem vindo Helio' : 'Aguardando...'}
			</Text>

			<Button title="Acessar" onPress={handleShowMessage} />
		</View>
	);
}
