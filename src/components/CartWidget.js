import { useContext } from "react";
import carrito from "../assets/carrito.svg";
import { CartContext } from "./CartContext";

const CartWidget = () => {
	const cartData = useContext(CartContext);

	return (
		<>
			<img className='carrito' src={carrito} />
			{cartData.cartList.length > 0 && (
				<span className='badge badge-pill badge-info' id='cartCount'>
					{cartData.totalQtyWidget}
				</span>
			)}
		</>
	);
};

export default CartWidget;
