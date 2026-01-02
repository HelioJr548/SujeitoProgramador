import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { FormUsers } from './src/components/FormUser';
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';
import { auth } from './src/firebaseConnection';
import { useEffect, useState } from 'react';

export default function App() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [authUser, setAuthUser] = useState(null);

	useEffect(() => {
		const unsub = onAuthStateChanged(auth, (user) => {
			if (user) {
				setAuthUser({ email: user.email, uid: user.uid });
				return;
			}
		});
	}, []);

	async function handleCreateUser() {
		const user = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		console.log(user);
	}
	function handleLogin() {
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				console.log('Usuario logado');
				console.log(user);
				setAuthUser({
					email: user.email,
					uid: user.uid,
				});
			})
			.catch((err) => {
				if (err.code == 'auth/missing-password') {
					console.log('A senha é obrigatória');
					return;
				}

				console.log(err.code); //mostra erros
			});
	}

	async function handleLogout() {
		await signOut(auth);
		setAuthUser(null);
	}

	return (
		<View style={styles.container}>
			<Text
				style={{
					fontSize: 16,
					color: '#000',
					marginHorizontal: 8,
					marginBottom: 14,
				}}
			>
				Usuario logado: {authUser && authUser.email}
			</Text>

			<Text style={{ marginHorizontal: 8, fontSize: 18, color: '#000' }}>
				Email:
			</Text>
			<TextInput
				style={styles.input}
				placeholder="Digite seu email..."
				value={email}
				onChangeText={(text) => setEmail(text)}
			/>

			<Text style={{ marginHorizontal: 8, fontSize: 18, color: '#000' }}>
				Senha:
			</Text>
			<TextInput
				style={styles.input}
				placeholder="Digite sua senha..."
				value={password}
				onChangeText={(text) => setPassword(text)}
				secureTextEntry={true}
			/>

			<Pressable
				style={[styles.button, { marginBottom: 8 }]}
				onPress={handleLogin}
			>
				<Text style={styles.buttonText}>Login</Text>
			</Pressable>

			<Pressable
				style={[styles.button, { marginBottom: 8 }]}
				onPress={handleCreateUser}
			>
				<Text style={styles.buttonText}>Criar uma conta</Text>
			</Pressable>

			<Pressable
				style={[styles.button, { backgroundColor: 'red' }]}
				onPress={handleLogout}
			>
				<Text style={styles.buttonText}>Logout</Text>
			</Pressable>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 40,
		flex: 1,
		backgroundColor: '#fff',
	},
	input: {
		marginHorizontal: 8,
		borderWidth: 1,
		marginBottom: 14,
	},
	button: {
		backgroundColor: '#000',
		marginHorizontal: 8,
		padding: 8,
	},
	buttonText: {
		color: '#fff',
		textAlign: 'center',
	},
});
