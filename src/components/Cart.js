import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
	const cartData = useContext(CartContext);

	return (
		<>
			<div className='container'>
				<div className='row cartTitles'>
					<div className='col-9'>
						<h2>Carrito</h2>
					</div>
					<div className='col-3'>
						<p>
							Total de Artículos: <span>{cartData.cartList.length}</span>
						</p>
					</div>
				</div>
			</div>

			<div className='container'>
				<div className='row cartRow cartHeader'>
					<div className='col-4'>Productos</div>
					<div className='col-3'>Cantidad</div>
					<div className='col-3'>Precio Unitario</div>
					<div className='col'>Total</div>
				</div>
			</div>

			{cartData.cartList.map((item) => (
				<div className='container'>
					<div className='row cartRow '>
						<div className='col-2'>
							<img className='cartImg' src={item.smallPic} />
						</div>
						<div className='col-2'>
							<p>{item.title}</p>
							<button
								className='btn btn-danger'
								onClick={() => cartData.deleteProduct(item.id)}>
								Eliminar
							</button>
						</div>

						<div className='col-3'>{item.qty}</div>
						<div className='col-3'>${item.price}</div>
						<div className='col'>${item.qty * item.price}</div>
					</div>
				</div>
			))}
			<div className='container total'></div>
			<div className='container'>
				<div className='row cartRow'>
					<div className='col-7'></div>
					<div className='col-3'>
						<p style={{ fontWeight: "bold" }}>Total: </p>
					</div>
					<div className='col'>
						<p>${cartData.totalCost}</p>
					</div>
				</div>
			</div>
			<div className='container'>
				<div className='row cartRow'>
					<div className='col-10'>
						<Link to='/'>
							<p className='continueShopping'>
								Seguí eligiendo tu mejor deco...
							</p>
						</Link>
					</div>
					<div className='col-2 '>
						<Link to='/'>
							<button
								onClick={() => cartData.removeList()}
								className='btn btn-success btnComprar'>
								Comprar
							</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Cart;
