import { supabase } from '../config/supabase';

interface ICreateReminderPayload {
	travel_id: string;
	description: string;
}

export const remindersService = {
	create: async (payload: ICreateReminderPayload) => {
		const { error } = await supabase.from('reminders').insert([
			{
				payload,
			},
		]);

		if (error) throw error;
	},
};
