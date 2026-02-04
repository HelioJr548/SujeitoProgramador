import { supabase } from '../config/supabase';

export const authService = {
	signIn: async (email: string, password: string) => {
		const { data, error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});

		if (error) {
			throw error;
		}

		return data;
	},

	signUp: async (email: string, password: string, username: string) => {
		const { data, error } = await supabase.auth.signUp({
			email,
			password,
			options: {
				data: {
					name: username,
				},
			},
		});

		if (error) {
			throw error;
		}

		return data;
	},

	signOut: async () => {
		try {
			const { error } = await supabase.auth.signOut({ scope: 'local' });
			if (error) throw error;
			return true;
		} catch (err) {
			console.warn('Logout warning ignorado:', err);
			return true; // Continua mesmo com warning
		}
	},
};
