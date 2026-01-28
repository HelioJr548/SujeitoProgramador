import useCreateTravel from '@/src/hooks/useCreateTravel';
import NewTravelScreen from '@/src/screens/travel/new';

export default function NewTravel() {
	const { control, errors, handleSubmit, isSubmitting, createNewTravel } =
		useCreateTravel();

	return (
		<NewTravelScreen
			errors={errors}
			control={control}
			handleSubmit={handleSubmit}
			isSubmitting={isSubmitting}
			createNewTravel={createNewTravel}
		/>
	);
}
