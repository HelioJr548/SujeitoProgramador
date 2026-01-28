import { supabase } from '../config/supabase';

type TCreateTravelPayLoad = {
	title: string;
	city: string;
	hotel_address: string;
	start_date: string;
	end_date: string;
};

export const travelServices = {
	createTravel: async (payLoad: TCreateTravelPayLoad, user_id: string) => {
		const { data, error } = await supabase
			.from('travels')
			.insert([{ ...payLoad, user_id }]);

		if (error) throw error;

		return data;
	},
};
