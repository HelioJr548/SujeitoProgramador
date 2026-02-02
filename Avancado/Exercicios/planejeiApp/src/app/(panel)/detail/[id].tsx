import useDetailTravel from '@/src/hooks/useDetailTravel';
import { TravelDetailScreen } from '@/src/screens/travel/detail';

export default function DetailTravel() {
	const { loading, travel, handleDeleteTravel } = useDetailTravel();

	return (
		<TravelDetailScreen
			loading={loading}
			travel={travel}
			handleDeleteTravel={handleDeleteTravel}
		/>
	);
}
