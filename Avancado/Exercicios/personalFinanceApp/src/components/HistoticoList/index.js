import Icon from 'react-native-vector-icons/Feather';
import {
	Container,
	Description,
	IconView,
	Tipo,
	TipoText,
	ValorText,
} from './styles';
import { Alert, TouchableWithoutFeedback } from 'react-native';

export default function HistoricoList({ data, deleteItem }) {
	function handleDeleteItem() {
		Alert.alert('Atenção', 'Voce deseja excluir esse registro?', [
			{
				text: 'Cancelar',
				style: 'cancel',
			},
			{
				text: 'Excluir',
				onPress: () => deleteItem(data.id),
			},
		]);
	}

	return (
		<TouchableWithoutFeedback onLongPress={handleDeleteItem}>
			<Container>
				<Tipo>
					<IconView tipo={data.type}>
						<Icon
							name={
								data.type === 'receita'
									? 'arrow-up'
									: 'arrow-down'
							}
							size={20}
							color="#fff"
						/>
						<TipoText>{data.type}</TipoText>
					</IconView>

					<Description>- {data.description}</Description>
				</Tipo>

				<ValorText>R$ {data.value}</ValorText>
			</Container>
		</TouchableWithoutFeedback>
	);
}
