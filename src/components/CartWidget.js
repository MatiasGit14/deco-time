import carrito from "../assets/carrito.svg";

const CartWidget = () => {
	return (
		<>
			<img className='carrito' src={carrito} />
			<span className='badge badge-pill badge-info' id='cartCount'>
				4
			</span>
		</>
	);
};

export default CartWidget;
