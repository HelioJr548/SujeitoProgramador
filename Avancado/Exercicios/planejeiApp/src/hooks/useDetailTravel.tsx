import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { travelServices, TTravel } from '../services/travel-services';
const useDetailTravel = () => {
	const [travel, setTravel] = useState<null | TTravel>(null);
	const [loading, setLoading] = useState(true);

	const { id } = useLocalSearchParams<{ id: string }>();

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const data = await travelServices.getTravelById(id);
				setTravel(data);
				setLoading(false);
			} catch (err) {
				console.log(`ERRO AO BUSCAR DETALHE: ${err}`);
				setLoading(false);
			}
		};

		fetchData();
	}, [id]);

	const onDelete = async () => {
		try {
			await travelServices.deleteTravelById(id);
			router.replace('/(panel)/home/page');
		} catch (err) {
			console.log(`ERRO AO DELETAR: ${err}`);
		}
	};

	const handleDeleteTravel = async () => {
		Alert.alert(
			'Excluir essa viagem?',
			'Deseja realmente excluir essa viagem?',
			[
				{ text: 'Não', style: 'cancel' },
				{ text: 'Excluir', onPress: async () => await onDelete() },
			],
		);
	};

	return { travel, loading, handleDeleteTravel };
};

export default useDetailTravel;
