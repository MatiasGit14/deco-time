import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
	const [cartList, setCartList] = useState([]);
	let [totalCost, setTotalCost] = useState(0);
	let [totalQtyWidget, setTotalQtyWidget] = useState(0);

	//Context functions
	const addToCart = (item, newQty) => {
		// Chech if already exist
		let inCart = cartList.find((prod) => prod.id === item.id);
		if (inCart !== undefined) {
			inCart.qty += newQty;
		} else {
			setCartList([...cartList, item]);
		}
		setTotalCost((totalCost += item.qty * item.price));
		setTotalQtyWidget((totalQtyWidget += item.qty));
	};

	//Delete one product
	const deleteProduct = (id) => {
		let deletedProduct = cartList.find((prod) => prod.id === id);
		let deletedCost = deletedProduct.price * deletedProduct.qty;
		setTotalCost((totalCost -= deletedCost));
		setTotalQtyWidget((totalQtyWidget -= deletedProduct.qty));
		setCartList(cartList.filter((prod) => prod.id !== id));
	};

	//Remove All
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
