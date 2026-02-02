import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
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

	return { travel, loading };
};

export default useDetailTravel;
