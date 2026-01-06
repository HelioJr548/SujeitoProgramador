import { useNavigation } from '@react-navigation/native';
import { createContext, useState } from 'react';
import api from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
	const [user, setUser] = useState(null);
	const [loadingAuth, setLoadingAuth] = useState(false);

	const navigation = useNavigation();
	const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
	async function signUp(email, password, nome) {
		setLoadingAuth(true);
		try {
			await api.post('/users', {
				name: nome,
				email,
				password,
			});

			setLoadingAuth(false);
			navigation.goBack();
		} catch (err) {
			console.log('ERRO AO CADASTRAR: ', err);
			setLoadingAuth(false);
		}
	}

	return (
		<AuthContext.Provider
			value={{ signed: !!user, user, signUp, loadingAuth }}
		>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthProvider;
