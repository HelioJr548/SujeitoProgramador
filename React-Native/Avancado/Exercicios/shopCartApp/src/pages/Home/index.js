import { useNavigation } from '@react-navigation/native';
import { useContext, useState } from 'react';
import {
	FlatList,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import Product from '../../components/Product';
import { CartContext } from '../../contexts/CartContext';

export default function Home() {
	const [products, setProducts] = useState([
		{
			id: 1,
			name: 'Notebook Dell XPS',
			price: 5999.99,
		},
		{
			id: 2,
			name: 'Smartphone iPhone 15',
			price: 4299.9,
		},
		{
			id: 3,
			name: 'Mouse Logitech MX',
			price: 299.0,
		},
		{
			id: 4,
			name: 'Teclado Mecânico Redragon',
			price: 459.99,
		},
		{
			id: 5,
			name: "Monitor 27' Samsung",
			price: 1299.9,
		},
	]);

	function handleAddToCart(item) {
		addItemToCart(item);
	}

	const navigation = useNavigation();
	const { cart, addItemToCart } = useContext(CartContext);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.cartContent}>
				<Text style={styles.title}>Lista de Produtos</Text>

				<TouchableOpacity
					style={styles.cartButton}
					onPress={() => navigation.navigate('Cart')}
				>
					{cart.length >= 1 && (
						<View style={styles.dot}>
							<Text style={styles.dotText}>{cart?.length}</Text>
						</View>
					)}
					<Feather name="shopping-cart" size={30} color="#000" />
				</TouchableOpacity>
			</View>

			<FlatList
				style={styles.list}
				data={products}
				keyExtractor={(item) => String(item.id)}
				renderItem={({ item }) => (
					<Product
						data={item}
						addToCart={() => handleAddToCart(item)}
					/>
				)}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fafafa',
		paddingEnd: 14,
		paddingStart: 14,
	},
	cartContent: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginVertical: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
	},
	dot: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#ff0000',
		width: 20,
		height: 20,
		borderRadius: 10,
		position: 'absolute',
		zIndex: 9,
		bottom: -2,
		left: -4,
	},
	dotText: {
		fontSize: 12,
	},
});
