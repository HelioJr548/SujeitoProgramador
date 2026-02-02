import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { remindersService } from '../services/reminders-service';

const useReminders = () => {
	const { id } = useLocalSearchParams<{ id: string }>();
	const [loading, setLoading] = useState(true);
	const [newReminder, setNewReminder] = useState('');

	const addReminder = async () => {
		if (!newReminder.trim()) return;

		try {
			await remindersService.create({
				travel_id: id,
				description: newReminder,
			});

			setNewReminder('');
		} catch (err) {
			console.log(`ERRO AO CADASTRAR LEMBRETE: ${err.message}`);
		}

		console.log(`ADICIONAR LEMBRETE: ${newReminder}`);
	};

	return { loading, newReminder, setNewReminder, addReminder };
};

export default useReminders;
