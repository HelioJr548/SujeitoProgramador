import { useNavigation } from '@react-navigation/native';
import { createContext, useEffect, useState } from 'react';
import api from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
	const [user, setUser] = useState(null);
	const [loadingAuth, setLoadingAuth] = useState(false);
	const [loading, setLoading] = useState(true);

	const navigation = useNavigation();

	useEffect(() => {
		async function loadStorage() {
			const storageUser = await AsyncStorage.getItem('@finToken');

			if (storageUser) {
				const response = await api
					.get('/me', {
						headers: {
							Authorization: `Bearer ${storageUser}`,
						},
					})
					.catch((err) => {
						setUser(null);
					});

				api.defaults.headers['Authorization'] = `Bearer ${storageUser}`;
				setUser(response.data);
				setLoading(false);
			}

			setLoading(false);
		}

		loadStorage();
	}, []);

	async function signUp(email, password, nome) {
		setLoadingAuth(true);
		try {
			await api.post('/users', {
				name: nome.trim(),
				email: email.trim().toLowerCase(),
				password: password.trim(),
			});

			setLoadingAuth(false);
			navigation.goBack();
		} catch (err) {
			console.log('ERRO AO CADASTRAR: ', err);
			setLoadingAuth(false);
		}
	}

	async function signIn(email, password) {
		setLoadingAuth(true);

		try {
			const response = await api.post('/login', {
				email: email.trim().toLowerCase(),
				password: password.trim(),
			});
			const { id, name, token } = response.data;
			const data = {
				id,
				name,
				token,
				email,
			};

			await AsyncStorage.setItem('@finToken', token);
			api.defaults.headers['Authorization'] = `Bearer ${token}`;

			setUser({ id, name, email });

			setLoadingAuth(false);
		} catch (err) {
			console.log('ERRO AO LOGAR: ', err);
			setLoadingAuth(false);
		}
	}

	async function signOut() {
		await AsyncStorage.clear().then(() => {
			setUser(null);
		});
	}

	return (
		<AuthContext.Provider
			value={{
				signed: !!user,
				user,
				signUp,
				signIn,
				signOut,
				loadingAuth,
				loading,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthProvider;
