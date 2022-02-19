import { useState } from "react";

const ItemCount = (props) => {
	const [quantity, setQuantity] = useState(1);
	const increment = (e) => {
		quantity < props.stock
			? setQuantity(quantity + 1)
			: alert("No hay suficiente Stock");
		e.stopPropagation();
	};
	const decrement = (e) => {
		quantity > 1
			? setQuantity(quantity - 1)
			: alert("No puede agregar al carrito menos de 1 articulo");
		e.stopPropagation();
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
							min={1}
							max={props.stock}
							name='quantity'></input>
						<button className='btn btn-info up_count' onClick={increment}>
							<i className='icon-plus'>+</i>
						</button>
					</div>
					<button
						className='btn btn-primary btn-addCart'
						type='submit'
						onClick={() => props.onAdd(quantity)}>
						Agregar al carrito
					</button>
				</div>
			}
		</>
	);
};

export default ItemCount;
