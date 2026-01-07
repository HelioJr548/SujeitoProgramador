import Icon from 'react-native-vector-icons/Feather';
import {
	Container,
	Description,
	IconView,
	Tipo,
	TipoText,
	ValorText,
} from './styles';

export default function HistoricoList({ data }) {
	return (
		<Container>
			<Tipo>
				<IconView tipo={data.type}>
					<Icon
						name={
							data.type === 'receita' ? 'arrow-up' : 'arrow-down'
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
	);
}
