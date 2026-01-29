import { TravelDetailScreen } from '@/src/screens/travel/detail';
import { useLocalSearchParams } from 'expo-router';

export default function DetailTravel() {
	const { id } = useLocalSearchParams<{ id: string }>();
	console.log(`ID: ${id}`);

	return <TravelDetailScreen />;
}
