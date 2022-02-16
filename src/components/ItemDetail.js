import ItemCount from "./ItemCount";

const ItemDetail = (props) => {
	const onAdd = (qty) => {
		alert("Se agregaron al carrito " + qty + " unidades");
	};

	return (
		<div className='container detailContainer'>
			<div className='row'>
				<div className='col-3'>
					<img
						className='card-img-top'
						src={props.item.pictureUrl}
						alt='Card cap'
					/>
					<ItemCount stock={5} initial={1} onAdd={onAdd} />
				</div>
				<div className='col-9'>
					<h2>{props.item.title}</h2>
					<h4 className='card-text'>{props.item.description}</h4>
					<p>{props.item.details}</p>
					<p>Stock disponible: {props.item.stock}</p>
					<p className='detailPrice'>${props.item.price}</p>
				</div>
			</div>
		</div>
	);
};

export default ItemDetail;
