import ItemCount from "./ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const ItemDetail = ({ item }) => {
	const [itemCount, setItemCount] = useState(0);
	const globalCart = useContext(CartContext);

	const onAdd = (qty) => {
		//CAMBIAR POR MODAL
		alert("Se agregaron al carrito " + qty + " unidades");
		setItemCount(qty);
		//Funcion global del Context
		globalCart.addToCart({ ...item, qty }, qty);
	};

	return (
		<div className='container detailContainer'>
			<div className='row'>
				<div className='col-3'>
					<img
						className='card-img-top'
						src={item.pictureUrl}
						alt={item.title}
					/>
				</div>
				<div className='col-9'>
					<h2>{item.title}</h2>
					<h4 className='card-text'>{item.description}</h4>
					<p>{item.details}</p>
					<p>Stock disponible: {item.stock}</p>
					<p className='detailPrice'>${item.price}</p>
				</div>
			</div>
			{itemCount === 0 ? (
				<ItemCount stock={item.stock} initial={ItemCount} onAdd={onAdd} />
			) : (
				<Link to='/cart'>
					<button className='btn btn-success btn-checkout'>
						Finalizar Compra
					</button>
				</Link>
			)}
		</div>
	);
};

export default ItemDetail;
