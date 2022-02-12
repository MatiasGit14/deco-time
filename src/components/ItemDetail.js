import ItemCount from "./ItemCount";
const ItemDetail = (props) => {
	const onAdd = (quantity) => {
		alert("Se agregaron al carrito " + quantity + " unidades");
	};
	return (
		<>
			<div className='card'>
				<img
					className='card-img-top'
					src={props.item.pictureUrl}
					alt='Card cap'
				/>
				<div className='card-body'>
					<h5 className='card-title'>{props.item.title}</h5>
					<p className='card-text'>{props.item.description}</p>
					<p>Stock disponible: {props.stock}</p>
				</div>
			</div>
			<ItemCount stock={5} initial={1} onAdd={onAdd} />
		</>
	);
};

export default ItemDetail;
