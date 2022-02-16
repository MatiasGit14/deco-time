import { useState, useEffect } from "react";

const ItemCount = (props) => {
	console.log(props);
	const [quantity, setQuantity] = useState(1);

	const increment = () => {
		quantity < props.stock
			? setQuantity(quantity + 1)
			: alert("No hay suficiente Stock");
	};
	const decrement = () => {
		quantity > props.initial
			? setQuantity(quantity - 1)
			: alert("No puede agregar al carrito menos de 1 articulo");
	};

	return (
		<>
			{
				<div className='container addCartContainer'>
					<div className='container'>
						<button className='btn btn-info down_count' onClick={decrement}>
							<i className='icon-minus'>-</i>
						</button>
						<input
							type='number'
							className='counter'
							value={quantity}
							min={props.initial}
							max={props.stock}
							name='quantity'></input>
						<button className='btn btn-info up_count' onClick={increment}>
							<i className='icon-plus'>+</i>
						</button>
					</div>
					<button
						className='btn btn-primary btn-addCart'
						type='submit'
						onClick={props.onAdd(quantity)}>
						Agregar al carrito
					</button>
				</div>
			}
		</>
	);
};

export default ItemCount;
