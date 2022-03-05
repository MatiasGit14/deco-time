import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
	//Creo un estado Global del Contexto  y lo paso como parametro del value a todos los hijos
	const [cartList, setCartList] = useState([]);
	let [totalCost, setTotalCost] = useState(0);
	let [totalQtyWidget, setTotalQtyWidget] = useState(0);

	//Funcion Global para el itemCount
	const addToCart = (item, newQty) => {
		// Reviso si ya esta en el carrito
		let inCart = cartList.find((prod) => prod.id === item.id);
		if (inCart !== undefined) {
			inCart.qty += newQty;
		} else {
			setCartList([...cartList, item]);
		}
		setTotalCost((totalCost += item.qty * item.price));
		setTotalQtyWidget((totalQtyWidget += item.qty));
	};

	//Funcion global para borrar uno
	const deleteProduct = (id) => {
		let deletedProduct = cartList.find((prod) => prod.id === id);
		let deletedCost = deletedProduct.price * deletedProduct.qty;
		setTotalCost((totalCost -= deletedCost));
		setTotalQtyWidget((totalQtyWidget -= deletedProduct.qty));
		setCartList(cartList.filter((prod) => prod.id !== id));
	};

	//Funcion global para remover todo y usar en CART
	const removeList = () => {
		setCartList([]);
		setTotalCost(0);
		setTotalQtyWidget(0);
	};

	return (
		<CartContext.Provider
			value={{
				totalQtyWidget,
				cartList,
				totalCost,
				addToCart,
				deleteProduct,
				removeList,
			}}>
			{children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
