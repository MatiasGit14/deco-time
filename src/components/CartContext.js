import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
	//Creo un estado Global del Contexto  y lo paso como parametro del value a todos los hijos
	const [cartList, setCartList] = useState([]);
	const [totalCost, setTotalCost] = useState(0);
	// Reviso si ya esta en el carrito
	const inCart = (item) => cartList.find((prod) => prod.id === item.id);

	//Funcion Global para el itemCount
	const addToCart = (item, newQty) => {
		console.log(newQty);
		inCart(item)
			? setCartList(
					cartList.map((prod) => {
						return { ...prod, qty: prod.qty + newQty };
					})
			  )
			: setCartList([...cartList, item]);
	};

	//Funcion global para borrar uno con filter por id
	const deleteProduct = (id) =>
		setCartList(cartList.filter((prod) => prod.id !== id));

	//Funcion global para remover todo y usar en CART
	const removeList = () => {
		setCartList([]);
		alert("Gracias por su compra!");
	};

	//Calcular el total

	const total = () => {
		let newCost = cartList.forEach((prod) => prod.price * prod.qty);
		setTotalCost((totalCost += newCost));
	};

	return (
		<CartContext.Provider
			value={{
				cartList,
				totalCost,
				addToCart,
				deleteProduct,
				removeList,
				total,
			}}>
			{children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
