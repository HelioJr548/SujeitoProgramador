import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { TTravel } from '../services/travel-services';
const useDetailTravel = () => {
	const [travel, setTravel] = useState<null | TTravel>(null);
	const [loading, setLoading] = useState(true);

	const { id } = useLocalSearchParams<{ id: string }>();

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
			} catch (err) {
				console.log(`ERRO AO BUSCAR DETALHE: ${err}`);
			}
		};

		fetchData();
	}, []);

	return {};
};

export default useDetailTravel;
