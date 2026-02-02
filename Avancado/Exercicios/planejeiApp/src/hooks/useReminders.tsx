import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { remindersService, TReminder } from '../services/reminders-service';

const useReminders = () => {
	const { id } = useLocalSearchParams<{ id: string }>();
	const [loading, setLoading] = useState(true);
	const [newReminder, setNewReminder] = useState('');
	const [reminders, setReminders] = useState<TReminder[]>([]);

	const fetchReminders = async (travel_id: string) => {
		setLoading(true);

		try {
			const data = await remindersService.getReminders(travel_id);
			setReminders(data);
			setLoading(false);
		} catch (err) {
			setLoading(true);
			console.log(`ERRO AO BUSCAR LEMBRETES: ${err}`);
		}
	};

	const addReminder = async () => {
		if (!newReminder.trim()) return;

		try {
			await remindersService.create({
				travel_id: id,
				description: newReminder,
			});

			setNewReminder('');
			await fetchReminders(id);
		} catch (err) {
			console.log(`ERRO AO CADASTRAR LEMBRETE: ${err}`);
		}

		console.log(`ADICIONAR LEMBRETE: ${newReminder}`);
	};

	useEffect(() => {
		if (!id) return;
		fetchReminders(id);
	}, [id]);

	return { loading, newReminder, setNewReminder, addReminder, reminders };
};

export default useReminders;
