import Item from "./Item";

const ItemList = (props) => {
	//onsole.log(props);
	return (
		<div className='cardContainer'>
			{props.items.map((prod) => (
				<Item key={prod.id} product={prod} />
			))}
		</div>
	);
};

export default ItemList;
