import { useContext } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CartContext } from '../../contexts/CartContext';
import Product from '../../components/Product';
import CartItem from '../../components/CartItem';

export default function Cart() {
	const { cart, addItemToCart, removeItemCart, total } =
		useContext(CartContext);

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={cart}
				showsVerticalScrollIndicator={false}
				keyExtractor={(item) => String(item.id)}
				ListEmptyComponent={<Text>Nenhum item no Carrinho</Text>}
				renderItem={({ item }) => (
					<CartItem
						data={item}
						addAmount={() => addItemToCart(item)}
						removeAmount={() => removeItemCart(item)}
					/>
				)}
				ListFooterComponent={() => (
					<Text style={styles.total}>Total R$ {total}</Text>
				)}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fafafa',
		paddingHorizontal: 14,
	},
	total: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 24,
	},
});
