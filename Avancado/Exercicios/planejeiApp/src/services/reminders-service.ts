import { supabase } from '../config/supabase';

interface ICreateReminderPayload {
	travel_id: string;
	description: string;
}

export type TReminder = {
	created_at: string;
	description: string;
	id: string;
	travel_id: string;
};

export const remindersService = {
	getReminders: async (travel_id: string): Promise<TReminder[]> => {
		const { data, error } = await supabase
			.from('reminders')
			.select('*')
			.eq('travel_id', travel_id)
			.order('created_at', { ascending: true });

		if (error) throw error;
		console.log(data);

		return data;
	},
	create: async (payload: ICreateReminderPayload) => {
		const { error } = await supabase.from('reminders').insert(payload);

		if (error) throw error;
	},

	delete: async (reminder_id: string) => {
		const { error } = await supabase
			.from('reminders')
			.delete()
			.eq('id', reminder_id);

		if (error) throw error;
	},
};
