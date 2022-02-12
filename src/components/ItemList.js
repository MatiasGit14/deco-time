import Item from "./Item";

const ItemList = (props) => {
	return (
		<div className='cardContainer'>
			{props.products.map((prod) => (
				<Item
					key={prod.id}
					title={prod.title}
					description={prod.description}
					price={prod.price}
					picture={prod.pictureUrl}
					stock={5}
					details={prod.details}
				/>
			))}
		</div>
	);
};

export default ItemList;
