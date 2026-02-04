import { createContext, useState } from 'react';

export const CartContext = createContext({});

export default function CartProvider({ children }) {
	const [cart, setCart] = useState([]);
	const [total, setTotal] = useState(0);

	function addItemToCart(newItem) {
		const indexItem = cart.findIndex((item) => item.id === newItem.id);
		if (indexItem !== -1) {
			let cartList = cart;
			cartList[indexItem].amount++;
			cartList[indexItem].total =
				cartList[indexItem].amount * cartList[indexItem].price;

			setCart(cartList);
			totalResultCart(cartList);
			console.log(cartList);
			return;
		}

		let data = { ...newItem, amount: 1, total: newItem.price };

		setCart((products) => [...products, data]);
		totalResultCart([...cart, data]);

		console.log([...cart, data]);
	}

	function removeItemCart(product) {
		const indexItem = cart.findIndex((item) => item.id === product.id);

		if (cart[indexItem]?.amount > 1) {
			let cartList = cart;

			cartList[indexItem].amount = cartList[indexItem].amount - 1;

			cartList[indexItem].total =
				cartList[indexItem].total - cartList[indexItem].price;

			setCart(cartList);
			totalResultCart(cartList);

			return;
		}

		const removeItem = cart.filter((item) => item.id !== product.id);
		setCart(removeItem);
		totalResultCart(removeItem);
	}

	function totalResultCart(items) {
		let myCart = items;
		let result = myCart.reduce((acc, obj) => {
			return acc + obj.total;
		}, 0);

		setTotal(result.toFixed(2));
	}

	return (
		<CartContext.Provider
			value={{ cart, addItemToCart, removeItemCart, total }}
		>
			{children}
		</CartContext.Provider>
	);
}
