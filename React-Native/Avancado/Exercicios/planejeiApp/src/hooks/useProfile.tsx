import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { supabase } from '../config/supabase';
import { authService } from '../services/auth-services';

export interface ProfileData {
	email: string;
	name: string;
	createdAt: string;
}

const useProfile = () => {
	const [loading, setLoading] = useState(true);
	const [profile, setProfile] = useState<ProfileData | null>(null);

	useEffect(() => {
		const loadProfile = async () => {
			setLoading(true);

			const { data, error } = await supabase.auth.getUser();

			// console.log(data);

			if (data) {
				setProfile({
					email: data?.user?.email! ?? 'Email não informado...',
					name:
						data?.user?.user_metadata?.name ?? 'Nome não informado',
					createdAt: new Date(
						data?.user?.created_at!,
					).toLocaleDateString('pt-BR'),
				});
				setLoading(false);
			}
		};

		loadProfile();
	}, []);

	const logout = async () => {
		await authService.signOut();

		router.replace('/(auth)/signin/page');
	};

	return {
		logout,
		loading,
		profile,
	};
};

export default useProfile;
