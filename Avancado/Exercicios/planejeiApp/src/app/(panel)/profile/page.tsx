import useProfile from '@/src/hooks/useProfile';
import { ProfileScreen } from '@/src/screens/profile';

export default function Profile() {
	const { logout, loading, profile } = useProfile();

	return (
		<ProfileScreen logout={logout} loading={loading} profile={profile} />
	);
}
