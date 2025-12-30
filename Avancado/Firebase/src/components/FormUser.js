import { StatusBar } from 'expo-status-bar';
import {
	FlatList,
	Pressable,
	StyleSheet,
	Text,
	TextInput,
	View,
} from 'react-native';
import { useEffect, useState } from 'react';
import {
	addDoc,
	collection,
	doc,
	getDoc,
	getDocs,
	onSnapshot,
	setDoc,
	updateDoc,
} from 'firebase/firestore';
import { UsersList } from './users';
import { db } from '../firebaseConnection';

export function FormUsers() {
	const [nome, setNome] = useState('');
	const [idade, setIdade] = useState('');
	const [cargo, setCargo] = useState('');

	const [users, setUsers] = useState([]);

	const [showForm, setShowForm] = useState(true);
	const [isEditing, setIsEditing] = useState('');

	useEffect(() => {
		async function getDados() {
			const usersRef = collection(db, 'users');

			onSnapshot(usersRef, (snapshot) => {
				let lista = [];

				snapshot.forEach((doc) => {
					lista.push({
						id: doc.id,
						nome: doc.data().nome,
						idade: doc.data().idade,
						cargo: doc.data().cargo,
					});
				});
				setUsers(lista);
			});
		}

		getDados();
	}, []);

	async function handleRegister() {
		try {
			// Validação básica
			if (!nome.trim() || !idade.trim() || !cargo.trim()) {
				console.log('Preencha todos os campos');
				return;
			}

			await addDoc(collection(db, 'users'), {
				nome: nome.trim(),
				idade: idade, // Converte para número
				cargo: cargo.trim(),
			});

			// Limpa SEMPRE após sucesso
			setNome('');
			setIdade('');
			setCargo('');
			console.log('CADASTRADO COM SUCESSO');
		} catch (err) {
			console.log(`ERRO: ${err.message}`);
			// Opcional: mostrar alerta ao usuário
		}
	}

	function handleToggle() {
		setShowForm(!showForm);
	}

	function editUser(data) {
		setNome(data.nome);
		setIdade(data.idade);
		setCargo(data.cargo);
		setIsEditing(data.id);
	}

	async function handleEditUser() {
		const docRef = doc(db, 'users', isEditing);
		await updateDoc(docRef, {
			nome,
			idade,
			cargo,
		});

		setNome('');
		setIdade('');
		setCargo('');
		setIsEditing('');
	}

	return (
		<View style={styles.container}>
			{showForm && (
				<View>
					<Text style={styles.label}>Nome:</Text>
					<TextInput
						style={styles.input}
						placeholder="Digite seu  nome"
						value={nome}
						onChangeText={(text) => setNome(text)}
					/>

					<Text style={styles.label}>Idade:</Text>
					<TextInput
						style={styles.input}
						placeholder="Digite sua idade"
						value={idade}
						keyboardType="numeric"
						onChangeText={(text) => setIdade(text)}
					/>

					<Text style={styles.label}>Cargo:</Text>
					<TextInput
						style={styles.input}
						placeholder="Digite seu cargo"
						value={cargo}
						onChangeText={(text) => setCargo(text)}
					/>

					{isEditing !== '' ? (
						<Pressable
							style={styles.button}
							onPress={handleEditUser}
						>
							<Text style={styles.buttonText}>
								Salvar alterações
							</Text>
						</Pressable>
					) : (
						<Pressable
							style={styles.button}
							onPress={handleRegister}
						>
							<Text style={styles.buttonText}>Adicionar</Text>
						</Pressable>
					)}
				</View>
			)}

			<Pressable style={{ marginTop: 8 }} onPress={handleToggle}>
				<Text style={{ textAlign: 'center', color: '#000' }}>
					{showForm ? 'Esconder formulário' : 'Mostrar formulário'}
				</Text>
			</Pressable>

			<Text
				style={{
					marginTop: 14,
					marginLeft: 8,
					fontSize: 20,
					color: '#000',
				}}
			>
				Usuários:
			</Text>

			<FlatList
				style={styles.list}
				data={users}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<UsersList
						data={item}
						handleEdit={(item) => editUser(item)}
					/>
				)}
			/>
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
	button: {
		backgroundColor: '#000',
		marginHorizontal: 8,
		borderRadius: 5,
	},
	buttonText: {
		fontSize: 18,
		textAlign: 'center',
		padding: 8,
		color: '#fff',
	},
	label: { fontSize: 24, color: '#000', marginBottom: 4, marginLeft: 8 },
	input: {
		borderWidth: 1,
		marginHorizontal: 8,
		marginBottom: 8,
		borderRadius: 5,
	},
	list: {
		marginTop: 8,
		marginHorizontal: 8,
	},
});
